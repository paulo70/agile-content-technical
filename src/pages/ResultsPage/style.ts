import styled from "styled-components";
import {Container as Original} from "../Home/style"

export const Container  = styled(Original) `
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  z-index: 1;

  ul{
    flex: 1;
    margin-top: 30px;
    list-style: none;
    li{
      cursor: pointer;
      a{
        font-size: 12px;
        text-decoration: none;
        color: #2c2c2c;
      }

      h3{
        color: #0000FF;
        margin: 10px 0;
      }

      p{
        font-size: 15px;
        margin-bottom: 30px;
      }
    }
  }
`

export const ItemDetails = styled.div `
  background: #fff;
  margin: 40px 0 0 30px;
  width: 100%;
  flex: 1;
  max-width: 300px;
  border: 1px solid  #b7b7b7;
  border-radius: 5px;
  padding: 10px;

  &.fixed {
    position: sticky;
    top: 20px;
  }

  &.absolute {
    position: absolute;
    top: 0;
    z-index: 10;
  }

  a{
    font-size: 12px;
    text-decoration: none;
    color: #2c2c2c;
    margin: 10px 0;
  }

  h3{
    color: #3a3838;
    margin: 10px 0;
  }

  p{
    font-size: 14px;
    color: #5c5a5a;
  }
`