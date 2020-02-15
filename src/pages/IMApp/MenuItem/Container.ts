import styled from 'styled-components';

interface IContainer {
};

const Container = styled.div<IContainer>`
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color:#b2b897;
`;

Container.defaultProps = {
};

export default Container;
