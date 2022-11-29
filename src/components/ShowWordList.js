import styled from "styled-components";
const ShowWordList = styled.button`
  position: absolute;
  bottom: 20px;
  right: 40px;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 40px;
  font-size: 30px;
  background-color: ${({disabled})=>disabled?"#cacaca":"#27ae60"};
  color: #fff;
  cursor: ${({disabled})=>disabled?"inherit":"pointer"};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  span {
    height: 30px;
  }
  &:hover{
    opacity:${({disabled})=>disabled?1:0.95} ;
  }
`;

export default ShowWordList;