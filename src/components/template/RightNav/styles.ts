import styled from 'styled-components';

interface righNavProps {
    open: boolean;
}

export const Ul = styled.ul<righNavProps>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding-top: 60px;
  
  li {
    padding: 18px 10px;
    cursor: pointer;

    a {
      color: #fff;
    }
  }
  
  z-index: 19;
  flex-flow: column nowrap;
  background-color: #0D2538;
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  top: 0;
  right: 0;
  margin-top: 0;
  margin-bottom: 0;
  height: 100vh;
  width: 300px;
  transition: transform 0.3s ease-in-out;
  li {
    margin-left: 40px;
    color: #fff;
    }
  a {
    text-decoration: none;
  }
`;
