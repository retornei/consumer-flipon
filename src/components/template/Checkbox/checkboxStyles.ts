import styled from "styled-components";
import { CheckboxProps } from ".";

export const CheckboxLabel = styled.label`
  display: flex;
  justify-content: flex-start;
  gap: 0.5em;
  font: inherit;
`;

export const CheckboxInput = styled.input<CheckboxProps>`
  &[type="checkbox"] {
    all: unset;
    appearance: none;
    background-color: #fff;
    margin: 0;
    font: inherit;
    color: currentColor;
    width: 1.3em;
    height: 1.3em;
    border: 0.1em solid currentColor;
    border-radius: ${(props) => (props.rounded ? "9999px" : "0.15em")};
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
    transition: background-color 0.125s;

    &:focus {
      box-shadow: 0 0 0px 2px rgba(69, 145, 222, 1);
    }

    &::before {
      content: "";
      width: 0.8em;
      height: 0.8em;
      transform: scale(0);
      transition: 0.125s transform;
      box-shadow: inset 1em 1em #fff;
      background-color: CanvasText;
      clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    }

    &:checked {
      background-color: #000;
    }

    &:checked::before {
      transform: scale(1);
    }
  }
`;
