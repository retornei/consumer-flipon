import styled from 'styled-components';

export const CardProduct = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  width: 100%;
  box-shadow: 0 0 0.2em ${props => props.theme.colors.primary};
  border-radius: 20px;
  padding: 5px 15px;

  @media(max-width: 600px) {
    font-size: 12px;
  }
  
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

  @media(max-width: 600px) {
    font-size: 12px;
  }
`;
