import styled from 'styled-components';

interface IListItem {
};

const ListItem = styled.li<IListItem>`
  margin-bottom:20px;
`;

ListItem.defaultProps = {
};

export default ListItem;
