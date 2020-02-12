import styled from 'styled-components';
import defaultTheme, {ITheme} from '../theme';

interface IHeader {
  theme: ITheme;
};

const Header = styled.div<IHeader>`
  align-items: center;
  background: ${({ theme }) => theme.headerBgColor};
  color: ${({ theme }) => theme.headerFontColor};
  display: flex;
  fill: ${({ theme }) => theme.headerFontColor};
  height: 56px;
  justify-content: space-between;
  padding: 0 10px;
`;

Header.defaultProps = {
  theme: defaultTheme
};

export default Header;
