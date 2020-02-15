import styled from 'styled-components';

interface IContainer {
};

const Container = styled.div<IContainer>`
  background-color:#e2dddd;
`;

Container.defaultProps = {
};

export default Container;
