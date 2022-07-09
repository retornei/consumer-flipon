import styled from 'styled-components';

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
  min-width: 100%;
  border: grey solid 3px;
  border-radius: 10px;
  padding-bottom:5px;
`;

export const DivHeader = styled.div`
  display: flex;
  justify-content: center;
  background: grey;
  width: 100%;
  height: 100%;
  border-radius: 6px 6px 0 0;
`;

export const H2 = styled.h2`
  color: white;
  margin: 10px 0 10px 0;
  font-size: 18px;
  font-weight: 700;
`;

export const AddressContainer = styled.div`
    width: 100%;
    padding: 15px 30px;

    @media (max-width: 480px) {
        padding: 15px 10px;
    }
`;

export const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:not(:first-child) {
      margin-top: 5px;
  }

  p {
    margin: 0;

    @media (max-width: 480px) {
        font-size: 14px;
    }
  }
  
  p:first-child {
      flex: 1;
      padding-right: 15px;
  }

  p:not(:first-child) {
      margin-right: 40px;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;