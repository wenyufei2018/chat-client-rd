import styled from 'styled-components';
import defaultTheme, {ITheme} from '../theme';

interface IHeaderContainer {
  theme: ITheme;
};

const HeaderContainer = styled.div<IHeaderContainer>`
  align-items: center;
  background: ${({ theme }) => theme.headerBgColor};
  color: ${({ theme }) => theme.headerFontColor};
  display: flex;
  fill: ${({ theme }) => theme.headerFontColor};
  height: 56px;
  justify-content: space-between;
  padding: 0 10px;
`;

HeaderContainer.defaultProps = {
  theme: defaultTheme
};

export default HeaderContainer;
