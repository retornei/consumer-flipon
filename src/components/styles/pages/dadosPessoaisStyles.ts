import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 25px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 0 0.2em ${props => props.theme.colors.primary};
  margin: 10px 0;
  
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  padding: 0 30px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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

export const Button = styled.button`
  background: ${props => props.theme.colors.primary};
  margin-top: 50px;
  height: 30px;
  border-radius: 30px;
  color: white;
  font-size: 20px;
  cursor: pointer;
  border: none;
  margin-bottom: 20px;
  max-width: 100px;
  min-width: 100px;

  @media(max-width: 600px) {
    font-size: 20px;
    height: 30px;
  }

  @media(max-width: 400px) {
    font-size: 15px;
    height: 30px;
  }

  transition: background-color 0.2s;

  &:hover {
    background: ${props => props.theme.colors.secondary};
  }
`;

export const Label = styled.label`
  margin-left: 15px;
  color: gray;
  font-weight: 700;
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

type RowProps = {
  columns: string;
}

export const Row = styled.div<RowProps>`
  display: grid;
  grid-template-columns: ${props => props.columns};
  gap: 10px;
  width: 100%;
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: red;
  margin-left: 15px;
  position: absolute;
  bottom: -18px;
`;
