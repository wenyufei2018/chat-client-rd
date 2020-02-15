import styled from 'styled-components';

interface IItemText {
};

const ItemText = styled.div<IItemText>`
  white-space: nowrap;
`;

ItemText.defaultProps = {
};

export default ItemText;
