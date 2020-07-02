import styled, { css } from 'styled-components';
import H2 from '../components/H2';
import H1 from '../components/H1';
import UnderlinedButton from '../components/UnderlinedButton';

export const ScreenBgStyled = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.whiteBg};
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: 100%;
  min-height: 100%;
`;

export const commonCss = css`
  width: 95%;
  flex-shrink: 0;
`;

const paddingHorizontal = 30;
export const TopContainer = styled.View`
  padding: 20px ${paddingHorizontal}px ${props => (props.shortPaddingBottom ? 30 : 100)}px;
`;

export const TopTitle = styled(H1)`
  ${commonCss}
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const TopSubTitle = styled(H2)`
  ${commonCss}
`;

export const Extra = styled(H2)`
  ${commonCss}
  font-style: italic;
  font-weight: normal;
  margin-bottom: 10px;
`;

export const TopButtonContainer = styled.View`
  margin-vertical: 20px;
  align-items: flex-start;
  flex-grow: 0;
  flex-direction: row;
  justify-content: space-around;
  margin-left: ${-paddingHorizontal}px;
  width: ${({ theme }) => theme.dimensions.screen.width}px;
`;

export const FormContainer = styled.View`
  margin-top: 30px;
  align-items: flex-start;
`;

export const LabelStyled = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const TextInputStyled = styled.TextInput`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.questionBgUnselected};
  border: 1px solid ${({ theme }) => theme.colors.questionBorderUnselected};
  color: ${({ theme }) => theme.colors.title};
  border-radius: 7px;
  padding-left: 15px;
  justify-content: center;
  margin-bottom: 10px;
`;

export const ErrorStyled = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.buttonPrimary};
`;

export const BackButton = styled(UnderlinedButton)`
  margin-right: auto;
  ${props => !props.withoutPadding && 'padding-horizontal: 15px;'}
  ${props => !props.withoutPadding && 'margin-bottom: 15px;'}
`;
