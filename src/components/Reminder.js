import React, { useEffect, useRef, useState } from 'react';
import { Alert, Platform } from 'react-native';
import { openSettings } from 'react-native-permissions';
import styled from 'styled-components';
import dayjs from 'dayjs';
import ButtonPrimary from './ButtonPrimary';
import H1 from './H1';
import H2 from './H2';
import Modal from './Modal';
import ReminderIcon from './Illustrations/ReminderIcon';
import TextStyled from './TextStyled';
import TimePicker from './TimePicker';
import UnderlinedButton from './UnderlinedButton';
import { timeIsAfterNow } from '../helpers/dateHelpers';
import CONSTANTS from '../reference/constants';
import matomo from '../services/matomo';
import NotificationService from '../services/notifications';
import { defaultPadding, defaultPaddingFontScale } from '../styles/theme';
import { storage } from '../services/storage';
import GoBackButtonText from './GoBackButtonText';

const notifReminderTitle = "C'est l'heure de votre suivi !";
const notifReminderMessage = "N'oubliez pas de remplir votre agenda Oz";

const Reminder = ({ navigation, route, storageKey = '@Reminder', children, repeatTimes = 15 }) => {
  const [reminder, setReminder] = useState(null);
  const [mode, setMode] = useState('day'); // 'week'
  const [weekDay, setWeekDay] = useState(0); // 0 Sunday, 1 Monday -> 6 Saturday
  const [reminderSetupVisible, setReminderSetupVisible] = useState(false);

  const getReminder = async (showAlert = true) => {
    const isRegistered = await NotificationService.checkPermission();
    const reminder = storage.getString(storageKey);
    // eslint-disable-next-line eqeqeq
    if (Boolean(reminder) && new Date(reminder) == 'Invalid Date') {
      deleteReminder();
      return;
    }
    if (!isRegistered && reminder && showAlert) showPermissionsAlert();
    if (!reminder) return;
    setReminder(new Date(reminder));
  };

  const notifHandled = useRef(false);
  const handleNotification = (notification) => {
    if (Platform.OS === 'android') {
      if (notification.title === notifReminderTitle) {
        navigation.navigate('CONSO_FOLLOW_UP');
        matomo.logConsoOpen(CONSTANTS.FROM_BACKGROUND_NOTIFICATION);
      }
    }
    if (Platform.OS === 'ios') {
      if (notification.foreground && !notifHandled.current) {
        notifHandled.current = true;
        if (notification.message === notifReminderMessage) {
          Alert.alert(
            notifReminderTitle,
            notifReminderMessage,
            [
              {
                text: 'Suivi',
                onPress: () => {
                  navigation.navigate('CONSO_FOLLOW_UP');
                  matomo.logConsoOpen(CONSTANTS.FROM_LOCAL_NOTIFICATION);
                  notifHandled.current = false;
                },
              },
              {
                text: 'Annuler',
                style: 'cancel',
                onPress: () => {
                  notifHandled.current = false;
                },
              },
            ],
            { cancelable: true }
          );
        }
      } else {
        if (notification.message === notifReminderMessage) {
          navigation.navigate('CONSO_FOLLOW_UP');
          matomo.logConsoOpen(CONSTANTS.FROM_BACKGROUND_NOTIFICATION);
        }
      }
    }
  };

  const notificationListener = useRef();
  useEffect(() => {
    getReminder(false);
    notificationListener.current = NotificationService.listen(handleNotification);
    return () => NotificationService.remove(notificationListener.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scheduleNotification = async (reminder = new Date(Date.now() + 10 * 1000), mode = 'day', weekDay = 0) => {
    NotificationService.cancelAll();
    const firstDate = (() => {
      if (mode === 'day') return dayjs();
      if (weekDay < dayjs().get('day')) return dayjs().day(weekDay);
      if (weekDay === dayjs().get('day')) {
        if (!timeIsAfterNow(reminder)) return dayjs().day(weekDay);
        return dayjs();
      }
      return dayjs().add(weekDay - dayjs().get('day'), 'day');
    })();
    for (let i = timeIsAfterNow(reminder) ? 0 : 1; i <= repeatTimes; i++) {
      const fireDate = firstDate
        .add(i, mode)
        .set('hours', reminder.getHours())
        .set('minutes', reminder.getMinutes())
        .set('seconds', 0)
        .toDate();
      NotificationService.scheduleNotification({
        date: fireDate,
        title: notifReminderTitle,
        message: notifReminderMessage,
      });
    }
  };

  const showReminderSetup = async () => {
    const isRegistered = await NotificationService.checkAndAskForPermission();
    if (!isRegistered) {
      showPermissionsAlert();
      return;
    }
    setReminderSetupVisible(true);
  };

  const showPermissionsAlert = () => {
    Alert.alert(
      'Vous devez autoriser les notifications pour accéder à ce service',
      'Veuillez cliquer sur Réglages puis Notifications pour activer les notifications',
      [
        {
          text: 'Réglages',
          onPress: openSettings,
        },
        {
          text: 'Annuler',
          onPress: deleteReminder,
          style: 'cancel',
        },
      ],
      { cancelable: true }
    );
  };

  const setReminderRequest = async (newReminder, newMode, newWeekDay) => {
    setReminderSetupVisible(false);
    if (!newReminder) return;
    await scheduleNotification(newReminder, newMode, newWeekDay);
    await matomo.logReminderSet(Date.parse(newReminder));
    setReminder(newReminder);
    setMode(newMode);
    setWeekDay(newWeekDay);
    storage.set(storageKey, newReminder.toISOString());
    storage.set(`${storageKey}-mode`, newMode);
    if (newWeekDay) {
      storage.set(`${storageKey}-weekDay`, newWeekDay);
    } else {
      storage.delete(`${storageKey}-weekDay`);
    }
    setReminderSetupVisible(false);
  };

  const deleteReminder = async () => {
    storage.delete(storageKey);
    NotificationService.cancelAll();
    setReminder(null);
    setReminderSetupVisible(false);
    matomo.logReminderDelete();
  };

  return (
    <Container>
      <BackButton content="< Retour" onPress={navigation.goBack} bold />
      <ReminderIcon size={80} color="#4030a5" selected={false} />
      {children ? (
        children({ showReminderSetup, reminder, mode, weekDay })
      ) : (
        <>
          <Title>
            <TextStyled color="#4030a5">
              {route?.params?.title || 'Une aide pour penser à noter vos consommations'}
            </TextStyled>
          </Title>
          <SubTitle>
            {reminder ? (
              <>
                <TextStyled color="#191919">Vous avez défini un rappel à</TextStyled>
                <TextStyled color="#4030a5">{`\n ${reminder.getLocalePureTime('fr')} \n `}</TextStyled>
                <TextStyled color="#191919">tous les jours.</TextStyled>
              </>
            ) : (
              <TextStyled color="#191919">
                Définissez un rappel quotidien sur votre téléphone pour vous rappeler
              </TextStyled>
            )}
          </SubTitle>
        </>
      )}
      <ButtonsContainer>
        <EditButton content={reminder ? 'Modifier le rappel' : 'Définir un rappel'} onPress={showReminderSetup} />
        {Boolean(reminder) && <RemoveButton content="Retirer le rappel" onPress={deleteReminder} />}
        {Boolean(route?.params?.enableContinueButton) && route?.params?.onPressContinueNavigation?.length ? (
          <ButtonPrimary
            content="Continuer"
            onPress={() => navigation.navigate(...route.params.onPressContinueNavigation)}
          />
        ) : null}
      </ButtonsContainer>
      <ModeAndWeekDayChooseModal
        key={reminderSetupVisible}
        visible={reminderSetupVisible}
        hide={() => setReminderSetupVisible(false)}
        setReminderRequest={setReminderRequest}
      />
    </Container>
  );
};

const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    backgroundColor: '#f9f9f9',
    flexShrink: 1,
    flexGrow: 1,
    flexBasis: '100%',
    minHeight: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 100,
  },
})`
  background-color: #f9f9f9;
  padding-horizontal: ${defaultPadding}px;
`;

const Title = styled(H1)`
  margin-bottom: 15px;
  margin-top: 15px;
  width: 80%;
  flex-shrink: 0;
  text-align: center;
`;

export const SubTitle = styled(H2)`
  width: 80%;
  margin-bottom: 15px;
  flex-shrink: 0;
  flex-direction: column;
  text-align: center;
`;

const ButtonsContainer = styled.View`
  justify-content: space-around;
  margin-vertical: 15px;
  margin-bottom: 20%;
`;

const BackButton = styled(GoBackButtonText)`
  margin-right: auto;
  margin-left: -20px;
`;

const EditButton = styled(UnderlinedButton)``;

const RemoveButton = styled(UnderlinedButton)`
  margin-bottom: 20px;
`;

export default Reminder;

const ModeAndWeekDayChooseModal = ({ onPress, visible, hide, setReminderRequest }) => {
  const [mode, setMode] = useState(null); // 'week'
  const [weekDay, setWeekDay] = useState(null); // 0 Sunday, 1 Monday -> 6 Saturday
  const [timePickerVisible, setTimePickerVisible] = useState(false);

  const onModeChoose = (newMode) => {
    if (newMode === 'week') return setMode(newMode);
    setMode(newMode);
    setTimePickerVisible(true);
  };

  const onWeekdayChoose = (newWeekDay) => {
    setWeekDay(newWeekDay);
    setTimePickerVisible(true);
  };

  const onSelectDate = (newDate) => setReminderRequest(newDate, mode, weekDay);

  return (
    <>
      <Modal visible={visible && !timePickerVisible} animationType="fade" hide={hide} withBackground hideOnTouch>
        {!mode && (
          <ModalContainer>
            <ModalTitle>
              <TextStyled color="#4030a5">Quand préférez-vous votre rappel ?</TextStyled>
            </ModalTitle>
            <ModalContent>
              <ModeSelectButton onPress={() => onModeChoose('day')}>Tous les jours</ModeSelectButton>
              <ModeSelectButton onPress={() => onModeChoose('week')}>Une fois par semaine</ModeSelectButton>
            </ModalContent>
            <ModalContinue>
              <ButtonPrimary onPress={onPress} content="Continuer" />
            </ModalContinue>
          </ModalContainer>
        )}
        {mode === 'week' && weekDay === null && (
          <ModalContainer>
            <ModalTitle>
              <TextStyled color="#4030a5">Quel jour ?</TextStyled>
            </ModalTitle>
            <ModalContent>
              {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'].map((weekDay, index) => (
                <ModeSelectButton key={index} onPress={() => onWeekdayChoose((index + 1) % 7)}>
                  {weekDay}
                </ModeSelectButton>
              ))}
            </ModalContent>
            <ModalContinue>
              <ButtonPrimary onPress={onPress} content="Continuer" />
            </ModalContinue>
          </ModalContainer>
        )}
      </Modal>
      {!!timePickerVisible && <TimePicker visible={timePickerVisible} selectDate={onSelectDate} />}
    </>
  );
};

const ModalContainer = styled.View`
  background-color: white;
  padding-vertical: 15px;
  padding-horizontal: ${defaultPaddingFontScale()}px;
  border-radius: 15px;
`;
const ModalContinue = styled.View`
  align-items: center;
`;

const ModalTitle = styled(H1)`
  flex-shrink: 0;
  text-align: center;
  margin-bottom: 30px;
`;

const ModalContent = styled.View`
  margin-bottom: 30px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
`;

const ModeSelectButton = ({ onPress, disabled, children }) => (
  <ModeSelectButtonStyled onPress={onPress} disabled={disabled}>
    <ModeSelectButtonContent color="#4030a5">{children}</ModeSelectButtonContent>
  </ModeSelectButtonStyled>
);

const qButtonSize = 40;
const ModeSelectButtonStyled = styled.TouchableOpacity`
  height: ${qButtonSize}px;
  border-radius: ${qButtonSize}px;
  padding-vertical: 5px;
  padding-horizontal: 15px;
  border: 1px solid #4030a5;
  /* background: #eaeaed; */
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  overflow: hidden;
`;

const ModeSelectButtonContent = styled(TextStyled)`
  justify-content: center;
  align-items: center;
  text-align-vertical: center;
  flex-shrink: 1;
`;