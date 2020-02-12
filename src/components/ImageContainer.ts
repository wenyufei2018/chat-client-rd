import styled from 'styled-components';

interface IDIV {
  user: boolean;
}

const ImageContainer = styled.div<IDIV>`
  display: inline-block;
  order: ${props => (props.user ? '1' : '0')};
  padding: 6px;
`;

export default ImageContainer;
