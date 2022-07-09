import styled from 'styled-components';

interface burgeProps {
    open: boolean;
}

export const StyledBurger = styled.div<burgeProps>`
  width: 2rem;
  height: 2rem;
  z-index: 20;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  margin: 15px 15px 0 0;
  overflow: hidden;
  
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;
