import styled from 'styled-components';
import defaultTheme, {ITheme} from './theme';

interface IChatBotContainerProps {
  theme?: ITheme;
  floating?: boolean;
  floatingStyle: {
    bottom?: string;
    top?: string;
    right?: string;
    left?: string;
    transformOrigin?: string;
  };
  width?: string;
  height?: string;
  opened?: boolean;
};

const ChatBotContainer = styled.div<IChatBotContainerProps>`
  background: ${({ theme }) => theme.background};
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.15);
  font-family: ${({ theme }) => theme.fontFamily};
  overflow: hidden;
  position: ${({ floating }) => (floating ? 'fixed' : 'relative')};
  bottom: ${({ floating, floatingStyle }) =>
    floating ? floatingStyle.bottom || '32px' : 'initial'};
  top: ${({ floating, floatingStyle }) => (floating ? floatingStyle.top || 'initial' : 'initial')};
  right: ${({ floating, floatingStyle }) => (floating ? floatingStyle.right || '32px' : 'initial')};
  left: ${({ floating, floatingStyle }) =>
    floating ? floatingStyle.left || 'initial' : 'initial'};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  z-index: 999;
  transform: ${({ opened }) => (opened ? 'scale(1)' : 'scale(0)')};
  transform-origin: ${({ floatingStyle }) => floatingStyle.transformOrigin || 'bottom right'};
  transition: transform 0.3s ease;

  @media screen and (max-width: 568px) {
    border-radius: ${({ floating }) => (floating ? '0' : '')};
    bottom: 0 !important;
    left: initial !important;
    height: 100%;
    right: 0 !important;
    top: initial !important;
    width: 100%;
  }
`;

ChatBotContainer.defaultProps = {
  theme: defaultTheme
};

export default ChatBotContainer;