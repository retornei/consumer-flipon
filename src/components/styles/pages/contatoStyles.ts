import styled, { css } from 'styled-components'

interface WhatsAppProps {
    whatsApp: boolean;
}

export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
`;

export const WhatsImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  
  p {
    margin: 0 0 100px 0;
    font-weight: 700;
    color: dimgrey;
  }

`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  max-width: 360px;
`;

export const ContainerSuporte = styled.div`
  position: absolute;
  top: 80%;
  right: 0;
  max-width: 60px;
  
  div {
    background: darkgreen;
    padding: 10px 0 10px 0;
    margin: 0 0 -10px 0;
    max-width: 55px;
  }
  
  p {
    display: flex;
    justify-content: center;
    margin: 0;
    min-width: 40px;
    color: white;
    font-weight: 700;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 25px;
  max-width: 800px;
  width: 800px;
  
  img {
    border-radius: 20px;
  }
`;

export const Formulario = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: 20px;
`;

export const Button = styled.button`
  background: ${props => props.theme.colors.primary};;
  margin-top: 30px;
  min-height: 30px;
  padding: 0 30px;
  border-radius: 30px;
  color: white;
  font-size: 20px;
  cursor: pointer;
  border: none;
  margin-bottom: 20px;
  width: 90%;
  max-width: 150px;

  transition: background-color 0.2s;

  &:hover {
    background: ${props => props.theme.colors.secondary};
  }
`;

export const Label = styled.label`
  margin-left: 15px;
  color: gray;
`;

export const Input = styled.input`
  min-height: 30px;
  max-height: 30px;
  border-radius: 18px;
  border: ${props => props.theme.colors.primary} solid 1px;
  padding: 0 15px;
  outline: none!important;
`;

export const Span = styled.span`
  color: red;
`;

export const Textarea = styled.textarea`
  height: 80px;
  border-radius: 18px;
  border: ${props => props.theme.colors.primary} solid 1px;
  padding: 15px;
  outline: none!important;
  resize: none;
`;

export const ButtonWhatsApps = styled.button<WhatsAppProps>`
  margin-top: 30px;
  height: 30px;
  padding: 0 30px;
  border-radius: 30px 0 0 30px;
  font-size: 20px;
  cursor: pointer;
  margin-bottom: 20px;
  border: black solid 1px;
  width: 100%;
  
  ${(props) => props.whatsApp ? css` color: white; background: black` : css` color: black; background: white` };
  
  @media(max-width: 600px) {
    font-size: 18px;
    height: 30px;
  }

  @media(max-width: 400px) {
    font-size: 15px;
    height: 30px;
  }
  
`;

export const ButtonFormulario = styled.button<WhatsAppProps>`
  margin-top: 30px;
  height: 30px;
  padding: 0 30px;
  border-radius: 0 30px 30px 0;
  font-size: 20px;
  cursor: pointer;
  border: black solid 1px;
  margin-bottom: 20px;
  width: 100%;

  ${(props) => props.whatsApp ? css` color: black; background: white` : css` color: white; background: black`};
  
  @media(max-width: 600px) {
    font-size: 18px;
    height: 30px;
  }

  @media(max-width: 400px) {
    font-size: 15px;
    height: 30px;
  }
  
`;


