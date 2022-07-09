import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PaginationButton = styled.button`
  all: unset;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }

  &:disabled {
    opacity: 0.6;
    pointer-events: none;
  }
`;

export const PaginationItem = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 9999px;
  background-color: #bbb;
  cursor: pointer;
  transition: background-color, transform 0.2s;

  &[data-active="true"] {
    background-color: #757575;
    transform: scale(1.1);
  }
`;
