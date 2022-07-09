import styled, { keyframes }  from 'styled-components';


const animate = keyframes`
    0% {
        transform: translateX(-100px);
        opacity: 0;
    }
    50%{
        opacity: .3;
    }
    100%{
        transform: translateX(0px);
        opacity: 1;
    }
`;

export const DivList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow-y: scroll;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 25px;
  margin: 5px;
  max-width: 800px;
  width: 800px;
`;

export const Button = styled.button`
  padding: 15px 10px;
  border-radius: 10px;

  @media(max-width: 400px) {
    font-size: 10px;
    padding: 10px 5px;
    margin-right: 5px;
  }
`;


export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  background-color: gray;
  color: white;
  width: 100%;
  max-width: 800px;
  list-style: none;
  border-radius: 10px;
  margin: 5px 0;
  padding: 12px 10px;

  @media(max-width: 400px) {
    margin: 10px 0;
    padding: 12px 0;
  }

  @media(max-width: 480px) {
    width: 90%;
  }
  
    align-items: center;
    cursor: pointer;
    transition: all .3s;
    position: relative;
    animation: ${animate} .5s ease;

    > div {
        display: flex;
        flex-direction: column;
        padding-left: 10px;    
    }

    > div span {
      font-size: 16px;

      @media(max-width: 650px) {
        font-size: 10px;
        min-width: 100px;
      }
      
      @media(max-width: 460px) {
        font-size: 8px;
        min-width: 60px;
      }
      
        font-weight: 500;
    }
    
`;
