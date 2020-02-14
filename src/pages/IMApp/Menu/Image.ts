import styled from 'styled-components';

interface IImage {
};

const Image = styled.img<IImage>`
  width: 100%;
`;

Image.defaultProps = {
};

export default Image;
