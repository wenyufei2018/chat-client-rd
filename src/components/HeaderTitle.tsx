import styled from 'styled-components';
import defaultTheme, {ITheme} from '../theme';

interface IHeaderTitle {
  theme:ITheme
};

const HeaderTitle = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.headerFontSize};
`;

HeaderTitle.defaultProps = {
  theme: defaultTheme
};

export default HeaderTitle;
