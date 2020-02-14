import styled from 'styled-components';

interface IIMAppContainer {
};

const IMAppContainer = styled.div<IIMAppContainer>`
  display: grid;
  margin-top: 80px;
  margin-right: auto;
  margin-left: auto;
  width: 640px;
  height: 520px;
  grid-template-columns: 9% 35% 56%;
`;

IMAppContainer.defaultProps = {
};

export default IMAppContainer;
