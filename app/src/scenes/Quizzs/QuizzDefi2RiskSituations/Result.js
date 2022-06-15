import React from 'react';
import styled from 'styled-components';
import TextStyled from '../../../components/TextStyled';
import { ScreenBgStyled } from '../../../components/ScreenBgStyled';
import BackButton from '../../../components/BackButton';
import H1 from '../../../components/H1';
import H2 from '../../../components/H2';
import { defaultPaddingFontScale } from '../../../styles/theme';
import riskSituations from './riskSituations';
import QButton from '../../../components/QButton';
import ButtonPrimary from '../../../components/ButtonPrimary';

const QuizzDefi2RiskSituationsResult = ({ navigation, answers }) => {
  const onlyTrueResults = Object.keys(answers).reduce((acc, current) => {
    if (answers[current]) acc[current] = answers[current];
    return acc;
  }, {});
  const answerKeys = Object.keys(onlyTrueResults);

  return (
    <ScreenBgStyled>
      <TopContainer>
        <BackButton onPress={navigation.goBack} marginBottom />
        <H1>Identifier mes situations à risques</H1>
        <Spacer />
        <Spacer />
        <H2 color="#DE285E">C'est déjà terminé !</H2>
        <Spacer />
        <H2>Merci d'avoir répondu, voici les situations sur lesquelles nous travaillerons dès demain : </H2>
      </TopContainer>
      <ResultsContainer>
        {answerKeys.map((answerKey, index) => {
          const item = riskSituations
            .find((section) => section.answers.map((a) => a.answerKey).includes(answerKey))
            ?.answers?.find((a) => a.answerKey === answerKey);
          return (
            <Result>
              <QButton
                content={index + 1}
                disabled
                colorText="#ffffff"
                colorBorder="#4030A5"
                colorBackground=" #4030A5"
              />
              <TextContainer>
                <TextStyled>{item?.content}</TextStyled>
              </TextContainer>
            </Result>
          );
        })}
      </ResultsContainer>
      <BottomContainer>
        <ButtonPrimary content={"J'ai finis d'identifier"} widthSmall />
      </BottomContainer>
    </ScreenBgStyled>
  );
};

const TopContainer = styled.View`
  padding: 0px ${defaultPaddingFontScale()}px;
`;

const BottomContainer = styled.View`
  padding: 0px ${defaultPaddingFontScale()}px;
  margin-bottom: 100px;
  margin-top: 20px;
`;
const ResultsContainer = styled.View`
  background-color: #efefef;
  margin-top: 20px;
  padding-top: 20px;
  padding-bottom: 10px;
`;

const Result = styled.View`
  flex-direction: row;
  padding: 0px ${defaultPaddingFontScale()}px;
  margin-bottom: 10px;
  align-items: center;
`;

const Spacer = styled.View`
  height: 10px;
`;
const TextContainer = styled.View`
  background-color: #ffffff;
  border: 1px solid #d3d3e8;
  border-radius: 3px;
  width: 80%;
  margin-left: 10px;
  padding: 5px;
`;

export default QuizzDefi2RiskSituationsResult;