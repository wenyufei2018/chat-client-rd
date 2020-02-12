import styled from 'styled-components';

interface IDiv {
  user: boolean;
};

const TextStepContainer = styled.div<IDiv>`
  align-items: flex-end;
  display: flex;
  justify-content: ${props => (props.user ? 'flex-end' : 'flex-start')};
`;

export default TextStepContainer;
