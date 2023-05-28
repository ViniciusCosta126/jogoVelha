import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
  margin: 0 24px;
`;

export const Title = styled.h1`
  text-align: center;
  color: #f1f1f1;
  font-size: 34px;
  font-weight: 700;
`;
export const ContainerJogo = styled.div`
  margin-top: 12px;
`;
export const Placar = styled.div`
  color: #f1f1f1;
  h2 {
    font-size: 28px;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  div {
    display: flex;
    justify-content: space-between;
    @media(min-width: 768px){
        justify-content: center;
    }
    p {
      font-size: 18px;
    }
    div {
      border-right: 2px solid #f1f1f1;
      @media(min-width: 768px){
        margin-left: 24px;
        margin-right: 24px;
    }
    }
  }
  h3 {
    margin-top: 12px;
    text-align: center;
  }
`;

export const ContainerBtns = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    padding: 4px 8px;
    margin-right: 8px;
    background-color: transparent;
    border: none;
    font-size: 16px;
    cursor: pointer;
    color: #fff;
    transition: all ease-out 0.2s;
    &:first-child:hover {
      border: 1px solid #d72638;
      border-radius: 4px;
      background-color: #d72638;
      transition: all ease-in 0.2s;
    }
    &:last-child:hover {
      border: 1px solid #0ebe9e;
      border-radius: 4px;
      background-color: #0ebe9e;
      transition: all ease-in 0.2s;
    }
  }
`;
export const Tabuleiro = styled.div`
  width: 100%;
  max-width: 400px;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 4px;
  grid-row-gap: 4px;
  padding: 8px;
margin: auto ;
`;
export const Casa = styled.div`

height: 60px;
display: flex;
align-items: center;
justify-content: center;
background-color: #F6F8FF;
border-radius: 4px;
cursor: pointer;
`
