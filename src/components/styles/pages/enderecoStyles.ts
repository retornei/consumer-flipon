import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 25px;
  width: 95%;
  max-width: 500px;
  box-shadow: 0 0 0.2em ${props => props.theme.colors.primary};
  margin: 10px 0;
`;

export const Formulario = styled.form`
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
  position: relative;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px;
  width: 85%;
  max-width: 350px;

  @media(max-width: 600px) {
    width: 87.5%;
  }

  @media(max-width: 400px) {
    width: 90%;
  }

`;

export const Label = styled.label`
  margin-left: 15px;
  color: gray;
  font-weight: 700;
`;


export const Span = styled.span`
  color: red;
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: red;
  margin-left: 15px;
  position: absolute;
  bottom: -18px;
`;
