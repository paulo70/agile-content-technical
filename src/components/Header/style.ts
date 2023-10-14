import styled from "styled-components";
import { AiOutlineClose } from 'react-icons/ai';

export const Header = styled.header `
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  color: white;
  width: 100%;
  border-bottom: 1px solid #c9c9c9;
`
export const Title = styled.h1 `
  font-size: 15px;
  font-weight: bold;
  color: #3e3d3d;
  padding: 0 10px;
`
export const SubTitle =  styled.span `
  font-weight: normal;
`
export const Symbols = styled.div `
  display: flex;
  padding: 0 10px;
`
export const Icon =  styled.div `
  margin: 10px;
  cursor: pointer;
  &:hover{
    background: #c9c9c9;
  }
`
export const Profile =  styled.div `
  cursor: pointer;
  img{
    border-radius: 50%;
    object-fit: cover;
    margin: 8px 0;
  }
  
`
export const WrapperInput = styled.div `
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  img{
    max-width: 100px;
  }

  @media (max-width: 758px){
    background: #fff;
    position: fixed;
    top:0;
    z-index: 20;
  }

  @media (max-width: 768px) {
    input{
      width: 200px;
    }
  }
`
export const CloseIcon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);

  @media(max-width: 768px){
    right: 0;
    left: 200px;
  }
`;
export const CloseIconSvg = styled(AiOutlineClose)`
  color: #747474;
  font-size: 18px;
  margin: 0 auto;
`;