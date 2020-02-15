import styled from 'styled-components';

interface IListContainer {
};

const ListContainer = styled.div<IListContainer>`
  overflow-y: scroll;
  overflow-x: hidden;
  flex-grow: 1;
`;

ListContainer.defaultProps = {
};

export default ListContainer;
