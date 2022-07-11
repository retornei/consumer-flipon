import styled from 'styled-components';

export const DivContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DivRetorno = styled.div`
  box-shadow: 0 0 0.2em rebeccapurple;
  border-radius: 20px;
  padding: 10px;
  margin-bottom: 50px;

  strong, span {
    color: dimgrey;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px;
`;

export const Div = styled.div`
  overflow-wrap: break-word;
  max-width: 95%;
`;

export const CardProduct = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  width: 100%;
  border-bottom: rebeccapurple solid 1px;
  padding: 5px 15px;
`;

export const CardImage = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  width: 120px;
  height: 120px;
  margin-left: 15px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-left: 10px;
  
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Title = styled.p`
  font-size: 15px;
  margin: 10px 0 0 0;

  @media(max-width: 400px) {
    font-size: 12px;
  }
`;
