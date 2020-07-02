import React from 'react';
import styled, { css, withTheme } from 'styled-components';
import { TouchableWithoutFeedback } from 'react-native';
import H3 from '../components/H3';
import { getDisplayName, getVolume, getIcon } from './consoDuck';
import { FeedButtonStyled } from './styles';
import ButtonPrimary from '../components/ButtonPrimary';

const isFirst = position => position === 'first';
const isAlone = position => position === 'alone';
const isLast = position => position === 'last';
const isMiddle = position => position === 'middle';

const ConsoFeedDisplay = ({
  onPress,
  id,
  selected,
  showButtons,
  nothingSelected,
  drinkKey,
  timestamp,
  quantity: q,
  updateDrinkRequest,
  deleteDrinkRequest,
  position: p,
  theme,
}) => {
  const n = getDisplayName(drinkKey, q);
  const v = getVolume(drinkKey);
  const Icon = getIcon(drinkKey);
  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => onPress(timestamp)}>
        <FeedButton pos={p} showAsSelected={selected || nothingSelected}>
          <Content>
            <Icon size={25} />
            <Drink>
              {q} {n}{' '}
            </Drink>
            <Volume numberOfLines={1} ellipsizeMode="tail">
              ({v})
            </Volume>
            {(isFirst(p) || isAlone(p)) && <Hour>{new Date(timestamp).getLocaleTime('fr')}</Hour>}
          </Content>
        </FeedButton>
      </TouchableWithoutFeedback>
      {showButtons && (
        <UpdateContainer>
          <UpdateButton small content="Modifier" onPress={updateDrinkRequest} />
          <DeleteButton
            small
            content="Supprimer"
            onPress={deleteDrinkRequest}
            color={theme.colors.title}
            shadowColor={theme.colors.titleShadow}
          />
        </UpdateContainer>
      )}
    </React.Fragment>
  );
};

const noRadiusBottom = css`
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-end-radius: 0px;
  border-bottom-start-radius: 0px;
  margin-bottom: 0px;
  border-bottom-width: 0px;
`;

const noRadiusTop = css`
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-start-radius: 0px;
  border-top-end-radius: 0px;
  margin-top: 0px;
  border-top-width: 0px;
`;

const firstCss = noRadiusBottom;
const lastCss = noRadiusTop;

const middleCss = css`
  ${noRadiusBottom}
  ${noRadiusTop}
`;

const FeedButton = styled(FeedButtonStyled)`
  ${({ pos }) => {
    if (isFirst(pos)) return firstCss;
    if (isMiddle(pos)) return middleCss;
    if (isLast(pos)) return lastCss;
  }}
`;

const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Drink = styled(H3)`
  margin-left: 5px;
  font-weight: bold;
`;

const Volume = styled(H3)`
  flex-shrink: 1;
`;

const Hour = styled(H3)`
  font-style: italic;
  margin-left: auto;
  margin-right: 12px;
  color: ${({ theme }) => theme.colors.title};
`;

const UpdateContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 30px;
`;

const UpdateButton = styled(ButtonPrimary)`
  flex-grow: 0;
  margin-right: 10px;
`;

const DeleteButton = styled(UpdateButton)`
  margin-right: 0px;
`;

export default withTheme(ConsoFeedDisplay);
