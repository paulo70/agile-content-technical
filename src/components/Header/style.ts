import styled from "styled-components";

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
  display: flex;
  align-items: center;
  img{
    max-width: 100px;
  }

  input{
    height: 20px;
    width: 100%;
    max-width: 300px;
  }
`