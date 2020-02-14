import styled from 'styled-components';

interface IMenuContainer {
};

const MenuContainer = styled.div<IMenuContainer>`
  background-color:#232422;
`;

MenuContainer.defaultProps = {
};

export default MenuContainer;
