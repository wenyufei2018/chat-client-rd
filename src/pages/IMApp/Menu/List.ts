import styled from 'styled-components';

interface IList {
};

const List = styled.ul<IList>`
  list-style: none;
  width: 70%;/*三列图片排列*/
  padding:0; 
  margin-left:auto;
  margin-right: auto;
  margin-top: 20px;
`;

List.defaultProps = {
};

export default List;
