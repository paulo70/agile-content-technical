import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;
  max-width: 1200px;
  min-height: calc(100vh - 100px);

  input{
    max-width: 500px;
  }

  button{
    max-width: 100px;
  }

  img{
    width: 100%;
    max-width: 300px;
    max-height: 100px;
    height: auto;
  }
`