import styled from 'styled-components';
import defaultTheme, {ITheme} from '../theme';
import { scale } from '../other/common/animations';

interface IDiv {
  scale?: string;
  user?: boolean;
  theme?: ITheme;
  isFirst?: boolean;
  showAvatar?: boolean;
  isLast?: boolean;
};

const Bubble = styled.div<IDiv>`
  animation: ${scale} 0.3s ease forwards;
  background: ${props => (props.user ? props.theme.userBubbleColor : props.theme.botBubbleColor)};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  color: ${props => (props.user ? props.theme.userFontColor : props.theme.botFontColor)};
  display: inline-block;
  font-size: 14px;
  max-width: 50%;
  margin: ${props => {
    const { isFirst, showAvatar, user } = props;

    if (!isFirst && showAvatar) {
      return user ? '-8px 46px 10px 0' : '-8px 0 10px 46px';
    }

    if (!isFirst && !showAvatar) {
      return user ? '-8px 0px 10px 0' : '-8px 0 10px 0px';
    }

    return '0 0 10px 0';
  }};
  overflow: hidden;
  position: relative;
  padding: 12px;
  transform: scale(0);
  transform-origin: ${props => {
    const { isFirst, user } = props;

    if (isFirst) {
      return user ? 'bottom right' : 'bottom left';
    }

    return user ? 'top right' : 'top left';
  }};
`;

Bubble.defaultProps = {
  theme: defaultTheme
};

export default Bubble;
