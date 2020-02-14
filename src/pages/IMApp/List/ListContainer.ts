import styled from 'styled-components';

interface IListContainer {
};

const ListContainer = styled.div<IListContainer>`
  background-color:#b2b897;
  overflow-y: scroll;
  flex-grow: 1;
`;

ListContainer.defaultProps = {
};

export default ListContainer;
