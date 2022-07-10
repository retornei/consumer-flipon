import styled from 'styled-components';

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  width: 100%;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 150px;
  min-height: 150px;
  background: #DCDCDC;
  border-radius: 25px;
  padding: 25px;

  span {
    font-weight: 700;
    font-size: 20px;
    color: dimgray;
    font-style: italic;
  }
`;
