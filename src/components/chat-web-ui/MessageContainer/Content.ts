import styled from 'styled-components';

interface IDiv {
  hideInput?: boolean;
  height?: string;
}

const Content = styled.div<IDiv>`
  height: calc(${props => props.height} - ${props => (props.hideInput ? '56px' : '112px')});
  overflow-y: scroll;
`;

export default Content;
