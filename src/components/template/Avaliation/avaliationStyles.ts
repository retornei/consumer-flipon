import styled from "styled-components";

export const AvaliationContainer = styled.div`
  display: inline-block;
`;

export const AvaliationVote = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 480px) {
    gap: 2px;
  }
`;

export const AvaliationItem = styled.div`
  width: 30px;
  height: 30px;
  background-color: attr(data-background);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  cursor: pointer;
  color: #fff;
  user-select: none;

  &[data-active="true"] {
    border: 2px solid #000;
  }
`;

export const AvaliationText = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    position: relative;
    font-size: 11px;
    margin-top: 5px;
  }

  span:first-child {
    left: -21px;
  }

  span:last-child {
    right: -24px;
  }

  @media (max-width: 480px) {
    margin: 0 15px;
  }
`;
