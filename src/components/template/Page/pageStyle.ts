import styled from 'styled-components';

export const Page = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  
  @media (max-width: 600px) {
    padding: 0 15px;
  }

  h1 {
    text-align: center;
  }
`;