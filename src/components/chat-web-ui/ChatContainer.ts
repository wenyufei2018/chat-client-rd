import styled from 'styled-components';
import defaultTheme, {ITheme} from './theme';

interface IChatContainerProps {
  theme?: ITheme;
  width?: string;
  height?: string;
};

const ChatContainer = styled.div<IChatContainerProps>`
  background: ${({ theme }) => theme.background};
  font-family: ${({ theme }) => theme.fontFamily};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

ChatContainer.defaultProps = {
  theme: defaultTheme,
  width: '100%',
  height: '100%',
};

export default ChatContainer;
