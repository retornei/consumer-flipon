import styled from 'styled-components';

export const DivNext = styled.div`
  display: flex;
  padding-right: 10px;
  svg {
    font-size: 35px;
    cursor: pointer;
  }
`

export const CardContainer = styled.div`
  display: grid;
  gap: 20px;
`

export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
`;

export const Busca = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
  width: 100%;
  margin-right: 10px;
  svg {
    min-height: 30px;
    min-width: 30px;
    z-index: 999;
  }
  
`;

export const InputBusca = styled.input`
  border: gray solid 1px;
  max-height: 35px;
  min-height: 35px;
  width: 100%;
  margin-left: -33px;
  border-radius: 15px;
  padding-left: 36px;
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 200px;

  svg {
    animation: spin 1s linear infinite;
    margin-bottom: 10px;
  }

  @keyframes spin {
    0% { transform: rotate(0deg) }
    100% { transform: rotate(360deg) }
  }
`
