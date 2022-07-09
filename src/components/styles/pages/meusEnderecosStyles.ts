import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  h1 {
    font-size: 22px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 95%;
  border-radius: 25px;
  box-shadow: 0 0 0.2em ${props => props.theme.colors.primary};
  margin: 10px 0;
  max-width: 500px;
  padding-bottom: 40px;

  p {
    margin: 5px 0 5px 20px;
    color: black;
    font-size: 18px;
    font-weight: 500;
    width: 90%;

    @media(max-width: 480px) {
      font-size: 15px;
  }
  
  span {
    font-weight: 900;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
