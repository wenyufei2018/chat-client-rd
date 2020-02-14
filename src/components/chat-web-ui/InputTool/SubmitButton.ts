import styled from 'styled-components';
import defaultTheme, {ITheme} from '../theme';

interface ISubmitButton {
  theme?: ITheme;
  disabled?: boolean;
};

const SubmitButton = styled.button<ISubmitButton>`
  background-color: transparent;
  border: 0;
  border-bottom-right-radius: 10px;
  box-shadow: none;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  opacity: ${(props) => (props.disabled? '.5' : '1')};
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
