import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import H1 from '../../components/H1';
import styled from 'styled-components';
import TextStyled from '../../components/TextStyled';
import Calendar from '../../components/Illustrations/Calendar';
import CocktailGlassTriangle from '../../components/Illustrations/CocktailGlassTriangle';
import InfoObjectif from '../../components/Illustrations/InfoObjectif';
import QButton from '../../components/QButton';
import ButtonPrimary from '../../components/ButtonPrimary';
import { screenHeight, screenWidth } from '../../styles/theme';
import useStateWithAsyncStorage from '../../hooks/useStateWithAsyncStorage'

const Goal = () => {

  const [quantity, setQuantity] = useStateWithAsyncStorage("@GainQuantityDrinkByDay", 1);

  const [monday, setMonday] = useStateWithAsyncStorage("@GainMonday", false);
  const [tuesday, setTuesday] = useStateWithAsyncStorage("@GainTuesday", false);
  const [wednesday, setWednesday] = useStateWithAsyncStorage("@GainWednesday", false);
  const [thursday, setThursday] = useStateWithAsyncStorage("@GainThursday", false);
  const [friday, setFriday] = useStateWithAsyncStorage("@GainFriday", false);
  const [saturday, setSaturday] = useStateWithAsyncStorage("@GainSaturday", false);
  const [sunday, setSunday] = useStateWithAsyncStorage("@GainSunday", false);

  const week = [monday, tuesday, wednesday, thursday, friday, saturday, sunday]
  const dayNoDrink = week.filter((e) => e === true).length
  const [drinkByWeek, setdrinkByWeek] = useStateWithAsyncStorage("@GainQuantityDrinkByWeek", 7);

  useEffect(() => {
    setdrinkByWeek(quantity * (7 - dayNoDrink))
  }, [quantity, dayNoDrink]);

  const navigation = useNavigation();

  const onHowCount = () => {
    navigation.navigate("HOWCOUNT");
  }

  const toEstimation = () => {
    navigation.navigate("ESTIMATION");
  }

  return (
    <ScreenBgStyled>
      <GoBack onPress={navigation.goBack}>
        <TextStyled bold>
          {"<"} Retour </TextStyled>
      </GoBack>
      <TopContainer>
        <TopTitle>
          <H1 color="#4030a5">Se fixer un objectif</H1>
        </TopTitle>
      </TopContainer>
      <Container>
        <ContainerTime>
          <TextStyled>La durée de votre objectif est d'<TextStyled bold>un mois</TextStyled></TextStyled>
        </ContainerTime>
        <Row>
          <Calendar size={24} />
          <Small>
            <TextStyled>Jours où je m'engage à ne pas boire d'alcool</TextStyled>
          </Small>
        </Row>
        <DayContainer>
          <DayButton content="L" active={monday} onPress={() => setMonday(!monday)} />
          <DayButton content="M" active={tuesday} onPress={() => setTuesday(!tuesday)} />
          <DayButton content="M" active={wednesday} onPress={() => setWednesday(!wednesday)} />
          <DayButton content="J" active={thursday} onPress={() => setThursday(!thursday)} />
          <DayButton content="V" active={friday} onPress={() => setFriday(!friday)} />
          <DayButton content="S" active={saturday} onPress={() => setSaturday(!saturday)} />
          <DayButton content="D" active={sunday} onPress={() => setSunday(!sunday)} />
        </DayContainer>
        <Row>
          <CocktailGlassTriangle size={24} />
          <Small>
            <TextStyled> Nombre de verres par jours que je m'autorise quand je bois de l'alcool</TextStyled>
          </Small>
        </Row>
        <Row>
          <VerySmall>
            <TextStyled>Comment compter un verre sans me tromper </TextStyled>
          </VerySmall>
          <HowCount onPress={onHowCount}>
            <InfoObjectif size={20} color={"#000000"} />
          </HowCount>
        </Row>
        <QuantityContainer>
          <QButton content="-" disabled={!quantity} onPress={() => setQuantity(quantity - 1)} />
          <NumberDrink>
            <TextStyled bold color="#4030a5">{quantity}</TextStyled>
          </NumberDrink>
          <QButton content="+" disabled={false} onPress={() => setQuantity(quantity + 1)} />
        </QuantityContainer>
        <DrinkByWeekContainer>
          {quantity > 1 ? (<TextStyled> soit {drinkByWeek} verres par semaine</TextStyled>) : (<TextStyled> {null} </TextStyled>)}
        </DrinkByWeekContainer>
        <CTAButtonContainer>
          <ButtonPrimary content="Continuer" onPress={toEstimation} disabled={dayNoDrink === 0 || quantity === 0} />
        </CTAButtonContainer>
      </Container>
    </ScreenBgStyled >
  )
}

const ScreenBgStyled = styled.ScrollView`
  background-color: #f9f9f9;
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: 100%;
`;

const TopContainer = styled.View`
  padding: 0px 30px 0px;
`;

const TopTitle = styled.View`
  width: 95%;
  flex-direction: row;
  flex-shrink: 0;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const GoBack = styled.TouchableOpacity`
  padding: 20px 30px 0px;
`;

const Container = styled.View`
  padding: 0px 30px 0px;
`;

const ContainerTime = styled.View`
  margin-bottom: ${screenHeight * 0.03}px;
`;

const Row = styled.View`
  flex-direction: row;
  margin-bottom: ${screenHeight * 0.02}px;
  align-items: center;
`;

const QuantityContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const NumberDrink = styled.Text`
  margin-right: ${screenWidth * 0.05}px;
  margin-left: ${screenWidth * 0.05}px;
  font-size: 18px;
`;

const CTAButtonContainer = styled.View`
  height: ${screenHeight * 0.22}px;
  align-items: center;
  background-color: #f9f9f9;
  flex-shrink: 1;
`;

const DayContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: ${screenHeight * 0.06}px;
`;

const DayButton = ({ small, content, onPress, active }) => (
  <QButtonStyled onPress={onPress}>
    <QButtonContentContainer small={small} backgroundColor={active ? "#4030A5" : "#eeeeee"} >
      <QButtonContent color={active ? "#eeeeee" : "#000000"}>{content}</QButtonContent>
    </QButtonContentContainer>
  </QButtonStyled >
);

const qButtonSize = 35;
const QButtonStyled = styled.TouchableOpacity`
  padding: 1px;
`;

const QButtonContentContainer = styled.View`
  height: ${qButtonSize}px;
  width: ${qButtonSize}px;
  border-radius: ${qButtonSize}px;
  border: 1px solid #4030A5;
  justify-content: center;
  align-items: center;

`;

const QButtonContent = styled(TextStyled)`
  font-size: 16px;
  font-weight: bold;
  line-height: 25px;
  justify-content: center;
  align-items: center;
  text-align-vertical: center;
`;

const DrinkByWeekContainer = styled.View`
  align-items: center;
  margin-top: ${screenHeight * 0.01}px;
  margin-bottom: ${screenHeight * 0.04}px;
`;

const HowCount = styled.TouchableOpacity`
`;

const Small = styled.Text`
  font-size:11px;
  font-weight:700;
`;

const VerySmall = styled.Text`
  font-size:10px;
`;


export default Goal