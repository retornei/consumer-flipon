import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  box-shadow: 0 0 0.4em lightgray;
  border-radius: 20px;
  
  strong {
    color: black;
    font-weight: 900;
  }
  
  span {
    color: dimgray;
    font-weight: 700;
  }
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

