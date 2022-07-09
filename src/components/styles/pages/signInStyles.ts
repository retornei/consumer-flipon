import styled from 'styled-components';

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const ButtonCriar = styled.button`
  background: dimgrey;
  height: 30px;
  border-radius: 30px;
  color: white;
  font-size: 20px;
  cursor: pointer;
  border: none;
  margin-bottom: 20px;
  width: 100%;

  transition: background-color 0.2s;

  &:hover {
    background: dimgrey;
  }
`;

export const Label = styled.label`
  margin-left: 15px;
  color: gray;
`;

export const Span = styled.span`
  color: red;
`;

export const ButtonGroup = styled.div`
  width: 100%;
  display: grid;
  gap: 10px;
  text-align: center;
  margin-top: 30px;
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: red;
  margin-left: 15px;
  position: absolute;
  bottom: -18px;
`;
