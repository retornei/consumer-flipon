import styled from 'styled-components';

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
  border-radius: 25px;
  width: 95%;
  box-shadow: 0 0 0.2em ${props => props.theme.colors.primary};
  margin: 10px 0;
  max-width: 500px;
  padding-bottom: 40px;

  p {
    color: black;
    font-size: 16px;
    font-weight: 500;
    margin: 10px 0 0 25px;

    @media(max-width: 430px) {
      font-size: 14px;
    }
  }
  
  span {
    font-weight: 700;
  }
  
`;


export const Button = styled.button`
  background: ${props => props.theme.colors.primary};
  margin-top: 20px;
  height: 30px;
  border-radius: 30px;
  color: white;
  font-size: 20px;
  cursor: pointer;
  border: none;
  margin-bottom: 20px;
  max-width: 160px;
  min-width: 150px;

  @media(max-width: 600px) {
    font-size: 20px;
    height: 25px;
  }

  @media(max-width: 400px) {
    font-size: 15px;
    height: 25px;
  }

  transition: background-color 0.2s;

  &:hover {
    background: ${props => props.theme.colors.secondary};
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
