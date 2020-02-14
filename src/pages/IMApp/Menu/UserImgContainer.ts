import styled from 'styled-components';

interface IMenuContainer {
};

const MenuContainer = styled.div<IMenuContainer>`
  background-color:#232422;
  align-items: center;
  display: flex;
  height: 56px;
  justify-content: space-between;
  width: 70%;
  margin-left:auto;
  margin-right: auto;
`;

MenuContainer.defaultProps = {
};

export default MenuContainer;
