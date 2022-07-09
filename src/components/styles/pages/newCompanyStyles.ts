import styled from 'styled-components';

type RowProps = {
  columns: string;
}

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 25px;
  position: relative;
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
  max-width: 400px;
  margin: 0 auto;
  display: grid;
  margin-top: 30px;
`;

export const Row = styled.div<RowProps>`
  display: grid;
  grid-template-columns: ${props => props.columns};
  gap: 10px;
  width: 100%;
`;

export const Title = styled.h3`
  width: 100%;
  margin-bottom: 0px;
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: red;
  margin-left: 15px;
  position: absolute;
  bottom: -18px;
`;

