import styled from 'styled-components';

export const Text = styled.p`
  color: gray;
  font-size: 18px;
  font-weight: bold;
`;


export const H2 = styled.h2`
  color: gray;
  margin-top: 0;
  font-size: 18px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px;
`;

export const InfoContainer = styled.div`
  text-align: center;
  margin: 30px 0;
`;

export const Title = styled.p`
  color: gray;
  margin: 3px;
  font-size: 16px;
  font-weight: 700;
  
  @media(max-width: 600px) {
    font-size: 14px;
  }

  @media(max-width: 400px) {
    font-size: 14px;
  }
`;

export const ObservationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  label {
    color: gray;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 3px;
  }

  textarea {
    height: 100px;
    border-radius: 18px;
    border: ${props => props.theme.colors.primary} solid 1px;
    padding: 15px;
    outline: none!important;
  }
`;

export const Row = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 100px 0.4fr 0.6fr;
  gap: 15px;
  margin: 30px 0;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const Span = styled.span`
  color: red;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;


export const Label = styled.label`
  color: gray;
  margin: 0px 0 0px 16px;
`;

export const Formulario = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin-bottom: 30px;
`;

export const Option = styled.option``;

export const ImagesContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin-bottom: 30px;
`;

export const Textarea = styled.textarea`
  height: 80px;
  border-radius: 18px;
  border: ${props => props.theme.colors.primary} solid 1px;
  padding: 0 15px;
  outline: none!important;
  resize: none;
`;
