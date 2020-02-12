import styled from 'styled-components';
import defaultTheme, {ITheme} from '../theme';

interface ISubmitButton {
  speaking?: boolean;
  invalid?: boolean;
  theme?: ITheme;
  disabled?: boolean;
};

const fillFunc = (props: ISubmitButton) => {
  const { speaking, invalid, theme } = props;

  if (speaking && theme) {
    return theme.headerBgColor;
  }
  return invalid ? '#E53935' : '#4a4a4a';
};

const SubmitButton = styled.button<ISubmitButton>`
  background-color: transparent;
  border: 0;
  border-bottom-right-radius: 10px;
  box-shadow: none;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  fill: ${fillFunc};
  opacity: ${(props) => (props.disabled && !props.invalid ? '.5' : '1')};
  outline: none;
  padding: 14px 16px 12px 16px;
  position: absolute;
  right: 0;
  top: 0;
  &:not(:disabled):hover {
    opacity: 0.7;
  }
`;

SubmitButton.defaultProps = {
  theme: defaultTheme
};

export default SubmitButton;
