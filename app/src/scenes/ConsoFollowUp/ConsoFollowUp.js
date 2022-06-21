import React, { useRef, useState } from 'react';
import { findNodeHandle } from 'react-native';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Background from '../../components/Background';
import DrinksCategory from '../../components/DrinksCategory';
import HeaderBackground from '../../components/HeaderBackground';
import TextStyled from '../../components/TextStyled';
import matomo from '../../services/matomo';
import Diagram from './Diagram';
import DiagramHelpModal from './DiagramHelpModal';
import { BEER, BEER_HALF, drinksCatalog } from './drinksCatalog';
import Feed from './Feed';
import { NoDrinkTodayButton } from './NoConsoYetFeedDisplay';
import { ScreenBgStyled } from '../../components/ScreenBgStyled';
import { drinksState } from '../../recoil/consos';
import H2 from '../../components/H2';
import H1 from '../../components/H1';

const fakeDrinks = [{ drinkKey: BEER_HALF, quantity: 1 }];

const ConsoFollowUp = () => {
  const showWelcomeMessage = !useRecoilValue(drinksState)?.length;
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [selectedBar, setSelectedBar] = useState({});
  const scrollViewRef = useRef(null);

  const scrollToInput = (ref) => {
    if (!ref) return;
    if (!scrollViewRef.current) return;
    setTimeout(() => {
      ref.measureLayout(
        findNodeHandle(scrollViewRef.current),
        (x, y) => {
          scrollViewRef.current.scrollTo({ y: y - 100, animated: true });
        },
        (error) => console.log('error scrolling', error)
      );
    }, 250);
  };

  return (
    <Background color="#39cec0" withSwiperContainer>
      <HeaderBackground />
      <ScreenBgStyled ref={scrollViewRef}>
        <TopContainer>
          <Title>
            <TextStyled color="#4030a5">Mon suivi de consommation</TextStyled>
          </Title>
          <SubtitleContainer>
            <DiagramTitle color="#191919">Nombre d'unité d'alcool consommé</DiagramTitle>
            <Help
              onPress={() => {
                matomo.logConsoDiagramHelp();
                setShowHelpModal(true);
              }}
              hitSlop={{ top: 40, bottom: 40, left: 40, right: 40 }}>
              <HelpText>?</HelpText>
            </Help>
          </SubtitleContainer>
          {showWelcomeMessage ? (
            <>
              <SubTitle>
                <TextStyled color="#191919">
                  Voici un outil simple pour se rendre compte de sa consommation.{'\n\n'}
                </TextStyled>
                <TextStyled color="#191919">Tous les jours vous renseignez votre consommation.{'\n'}</TextStyled>
              </SubTitle>
              {drinksCatalog
                .filter(({ categoryKey }) => categoryKey === BEER)
                .map(({ categoryKey }) => categoryKey)
                .filter((categoryKey, index, categories) => categories.indexOf(categoryKey) === index)
                .map((category, index) => (
                  <DrinksCategory
                    drinksCatalog={drinksCatalog}
                    asPreview
                    key={category}
                    category={category}
                    index={index}
                    drinks={fakeDrinks}
                  />
                ))}
              <SubTitle>
                <TextStyled color="#191919">
                  Un graphique récapitule vos consommations en unité d'alcool{'\n'}
                </TextStyled>
              </SubTitle>
              <Diagram asPreview />
              <SubTitle last>
                <TextStyled color="#191919">Le rouge représente ce qui est supérieur au seuil de l'OMS</TextStyled>
              </SubTitle>
            </>
          ) : null}
          {!showWelcomeMessage && (
            <Diagram
              onShowHelp={() => {
                matomo.logConsoDiagramHelp();
                setShowHelpModal(true);
              }}
              selectedBar={selectedBar}
              setSelectedBar={setSelectedBar}
            />
          )}
        </TopContainer>
        <FeedAddConsoTodayContainer zIndex={10}>
          {!!showWelcomeMessage && (
            <NoDrinkTodayButton timestamp={Date.now()} content="Je n'ai rien bu aujourd'hui !" />
          )}
        </FeedAddConsoTodayContainer>
        <Feed hideFeed={showWelcomeMessage} scrollToInput={scrollToInput} />
        <Spacer size={100} />
      </ScreenBgStyled>
      <DiagramHelpModal visible={showHelpModal} onCloseHelp={() => setShowHelpModal(false)} />
    </Background>
  );
};

const Title = styled(H1)`
  flex-shrink: 0;
  margin-top: 10px;
`;

const SubTitle = styled(H2)`
  flex-shrink: 0;
  font-weight: 500;
  ${(props) => props.last && 'margin-bottom: 40px;'}
`;

const Spacer = styled.View`
  height: ${({ size }) => size || 0}px;
`;

const SubtitleContainer = styled.View`
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
  justify-content: space-between;
`;

const DiagramTitle = styled(H2)`
  font-weight: 500;
  flex-shrink: 1;
`;

const FeedAddConsoTodayContainer = styled.View`
  align-items: center;
`;

const helpsize = 25;
const Help = styled.TouchableOpacity`
  width: ${helpsize}px;
  height: ${helpsize}px;
  border-radius: ${helpsize}px;
  border: 1px solid #de285e;
  background-color: white;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin: 5px;
`;
const HelpText = styled.Text`
  color: #de285e;
  font-weight: bold;
  font-size: ${helpsize * 0.5}px;
`;

const TopContainer = styled.View`
  padding: 20px 20px 0px;
`;

export default ConsoFollowUp;
