import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  box-shadow: 0 0 0.4em lightgray;
  border-radius: 20px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 0.4em lightgray;
  width: 95%;
  height: 100%;
  max-width: 600px;
  min-width: 300px;
  min-height: 300px;
  border-radius: 25px;
  padding-bottom: 30px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25px;
  margin: 30px 10px 30px 0;
`;

export const DivIcons= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 27px 0 50px 0;
`;

export const DivTitle= styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;


export const DivBarraHorizontal = styled.div`
  height: 15px;
  width: 15px;
  background: black;
  border-radius: 4px;
`;

export const DivBarraVertical = styled.div`
  height: 80px;
  width: 5px;
  background: black;
`;

export const DivBarraContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  div {
    margin: 20px 0 35px 0;
  }
  
  p {
    margin: 3px 0 0 0;
  }
`;

export const Teste = styled.div`
  display: flex;
  margin-left: 50px;
`;

export const H1 = styled.h1`
  color: gray;
  margin: 20px 0 15px 10px;
  font-size: 22px;
  
  @media(max-width: 600px) {
    font-size: 20px;
  }

  @media(max-width: 400px) {
    font-size: 16px;
  }
`;

export const H2 = styled.h2`
  color: gray;
  margin-top: 0;
  font-size: 18px;
  
  @media(max-width: 600px) {
    font-size: 16px;
  }

  @media(max-width: 400px) {
    font-size: 14px;
  }
`;

export const Span = styled.span`
  font-size: 12px;
  margin: 0 20px;

  @media(max-width: 420px) {
    margin: 0 20px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px;
`;

export const Button = styled.button`
  background: ${props => props.theme.colors.primary};
  height: 30px;
  border-radius: 30px;
  color: white;
  font-size: 20px;
  cursor: pointer;
  border: none;
  max-width: 140px;
  min-width: 140px;


  @media(max-width: 600px) {
    font-size: 20px;
    height: 35px;
    max-width: 120px;
    min-width: 120px;
  }

  @media(max-width: 400px) {
    font-size: 20px;
    height: 25px;
    max-width: 100px;
    min-width: 100px;
  }

  transition: background-color 0.2s;

  &:hover {
    background: ${props => props.theme.colors.secondary};
  }
`;

