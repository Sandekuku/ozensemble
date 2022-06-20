import React, { useEffect } from 'react';
import styled from 'styled-components';
import { createStackNavigator } from '@react-navigation/stack';
import { useIsFocused } from '@react-navigation/native';
import { useRecoilState, useSetRecoilState } from 'recoil';
import ButtonPrimary from '../../../components/ButtonPrimary';
import TextStyled from '../../../components/TextStyled';
import { ScreenBgStyled } from '../../../components/ScreenBgStyled';
import BackButton from '../../../components/BackButton';
import H1 from '../../../components/H1';
import { defaultPaddingFontScale } from '../../../styles/theme';
import ElementDayDefi from '../../../components/ElementDayDefi';
import ResultRiskSituations from './ResultRiskSituations';
import Situation from './Situation';
import riskSituations from './riskSituations';
import { riskSituationsQuizzAnswersState, riskSituationsQuizzResultState } from '../../../recoil/quizzs';
import { setValidatedDays } from '../../Defis/utils';

const QuizzRiskSituationsStack = createStackNavigator();

const QuizzRiskSituations = ({ navigation, route }) => {
  const [answers, setAnswers] = useRecoilState(riskSituationsQuizzAnswersState);
  const setResult = useSetRecoilState(riskSituationsQuizzResultState);
  const toggleAnswer = async (answerKey, checked) => {
    setAnswers((prevAnswers) => {
      if (checked && !prevAnswers.includes(answerKey)) return [...prevAnswers, answerKey];
      if (!checked && prevAnswers.includes(answerKey)) return prevAnswers.filter((key) => key !== answerKey);
      return prevAnswers;
    });
  };

  const validateAnswers = async () => {
    setResult(true);
    navigation.push('QUIZZ_RESULTS');
  };

  const goToStep1 = () => {
    navigation.push('QUIZZ_INTERNAL_SITUATIONS');
  };

  const goToStep2 = () => {
    navigation.push('QUIZZ_EXTERNAL_SITUATIONS');
  };

  const isFocused = useIsFocused();
  useEffect(() => {
    if (route?.params?.inDefi2) setValidatedDays(route?.params?.day, '@Defi2');
  }, [route?.params, isFocused]);

  return (
    <QuizzRiskSituationsStack.Navigator headerMode="none" screenOptions={{ cardStyle: { backgroundColor: '#f9f9f9' } }}>
      <QuizzRiskSituationsStack.Screen name="QUIZZ_ONBOARDING">
        {({ navigation }) => (
          <ScreenBgStyled>
            <TopContainer>
              <BackButton onPress={navigation.goBack} marginBottom />
              <TopTitle>
                <H1 color="#4030a5">Identifier mes situations à risques</H1>
              </TopTitle>
              <ElementDayDefi
                content={
                  <TextStyled>
                    Lorsqu'une personne a l'impression qu'elle a{' '}
                    <TextStyled bold>moins de contrôle sur sa consommation</TextStyled> dans une situation particulière,
                    on dit que cette situation est à risque.
                  </TextStyled>
                }
              />
              <ElementDayDefi
                content={
                  <TextStyled>
                    Une situation à haut risque peut provenir de l'<TextStyled bold>extérieur</TextStyled> (Ex. : quand
                    quelqu'un insiste pour que je prenne un verre, quand je vois une publicité qui me fait penser à
                    boire).
                  </TextStyled>
                }
              />
              <ElementDayDefi
                content={
                  <TextStyled>
                    Ou de l'<TextStyled bold>intérieur</TextStyled> (Ex. : quand je suis fâché(e), quand je m'ennuie,
                    quand je suis stressé(e) ou quand je suis triste).
                  </TextStyled>
                }
              />
              <ButtonPrimary onPress={goToStep1} content="Je reconnais mes situations" widthSmall />
            </TopContainer>
          </ScreenBgStyled>
        )}
      </QuizzRiskSituationsStack.Screen>
      <QuizzRiskSituationsStack.Screen name="QUIZZ_INTERNAL_SITUATIONS">
        {({ navigation }) => (
          <Situation
            section={riskSituations[0]}
            toggleAnswer={toggleAnswer}
            answers={answers}
            navigation={navigation}
            onPress={goToStep2}
            description1={
              <>
                Parmi les situations suivantes, lesquelles vous semblent à risque (c'est à dire que vous allez
                <TextStyled bold> surconsommer de l'alcool</TextStyled>) ?
              </>
            }
            description2={
              <>
                Ici, choissisez <TextStyled bold>jusqu'à 2 situations extérieures</TextStyled>
              </>
            }
          />
        )}
      </QuizzRiskSituationsStack.Screen>
      <QuizzRiskSituationsStack.Screen name="QUIZZ_EXTERNAL_SITUATIONS" initialParams={route?.params}>
        {({ navigation }) => (
          <Situation
            section={riskSituations[1]}
            toggleAnswer={toggleAnswer}
            answers={answers}
            navigation={navigation}
            onPress={validateAnswers}
            description1={
              <>
                Puis choissisez <TextStyled bold>jusqu'à 2 situations intérieures.</TextStyled>
              </>
            }
            description2={
              <>
                Lesquelles vous semblent à risque (c'est à dire que vous allez{' '}
                <TextStyled bold>surconsommer de l'alcool</TextStyled>) ?
              </>
            }
          />
        )}
      </QuizzRiskSituationsStack.Screen>
      <QuizzRiskSituationsStack.Screen
        name="QUIZZ_RESULTS"
        component={ResultRiskSituations}
        initialParams={route?.params}
      />
    </QuizzRiskSituationsStack.Navigator>
  );
};

const TopContainer = styled.View`
  padding: 0px ${defaultPaddingFontScale()}px ${(props) => (props.shortPaddingBottom ? 30 : 100)}px;
`;

const TopTitle = styled.View`
  width: 95%;
  flex-direction: row;
  flex-shrink: 0;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export default QuizzRiskSituations;