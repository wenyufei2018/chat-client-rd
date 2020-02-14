import styled from 'styled-components';

interface IUserImg {
};

const UserImg = styled.img<IUserImg>`
  width: 100%;
  border-radius: 50%;
  background-color: white;
`;

UserImg.defaultProps = {
};

export default UserImg;
