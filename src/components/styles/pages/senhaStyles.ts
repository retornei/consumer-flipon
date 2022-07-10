import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  max-height: 300px;
  max-width: 400px;
  min-height: 300px;
  min-width: 100%;

  @media(max-width: 510px) {
    flex-direction: column;
    margin-bottom: 35px;
    align-items: center;
  }
`

export const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;


