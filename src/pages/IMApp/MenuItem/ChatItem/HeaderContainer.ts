import styled from 'styled-components';

interface IHeaderContainer {
};

const HeaderContainer = styled.div<IHeaderContainer>`
  align-items: center;
  background: #9E9E9E;
  display: flex;
  height: 56px;
  justify-content: space-between;
  padding: 0 10px;
`;

HeaderContainer.defaultProps = {
};

export default HeaderContainer;
