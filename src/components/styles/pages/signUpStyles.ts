import styled from 'styled-components';

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 25px;
  position: relative;
`;

export const FormGroupCheck = styled.div`
  display: flex;
  margin: 20px 0 0 0;
  padding-left: 10px;
  align-items: center;
  position: relative;
`;

export const Label = styled.label`
  margin-left: 15px;
  color: gray;
`;

export const Span = styled.span`
  color: red;
`;

export const P = styled.p`
  font-size: 11px;
  margin-left: 10px;
`;

export const ButtonGroup = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  display: grid;
  margin-top: 30px;
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: red;
  margin-left: 15px;
  position: absolute;
  bottom: -18px;
`;

