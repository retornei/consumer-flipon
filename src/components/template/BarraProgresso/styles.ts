import styled from 'styled-components';

interface TextoProps {
    cor: string;
}

export const Div = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  margin-top: 30px;

  @media(max-width: 800px) {
    margin-top: 40px;
  }

  @media(max-width: 600px) {
    margin-top: 30px;
  }

  @media(max-width: 400px) {
    margin-top: 10px;
  }
  
`;

export const Barra = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
`;


export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  margin: 0 25% 0px 25%;

  @media(max-width: 800px) {
    margin: 0 26% 0px 26%;
  }

  @media(max-width: 600px) {
    margin: 0 8% 0px 8%;
  }
`;

export const ContainerTexto = styled.div`
  display: flex;
  justify-content: space-between;
  margin:  0 21% 0px 21%;

  @media(max-width: 600px) {
    margin: 0 15%;
  }

  @media(max-width: 600px) {
    margin: 0;
  }
`;

export const Text = styled.p<TextoProps>`
  display: flex;
  justify-content: center;
  font-size: 18px;
  width: 100px;
  color:  ${props => props.cor};
  cursor: pointer;
  @media(max-width: 800px) {
    font-size: 16px;
  }

  @media(max-width: 600px) {
    font-size: 12px;
  }
`;

