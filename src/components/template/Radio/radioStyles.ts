import styled from "styled-components";
import { RadioProps } from ".";

export const RadioLabel = styled.label`
  display: flex;
  justify-content: flex-start;
  gap: 0.5em;
  font: inherit;
`;

export const RadioInput = styled.input<RadioProps>`
  &[type="radio"] {
    all: unset;
    appearance: none;
    background-color: #fff;
    margin: 0;
    font: inherit;
    color: currentColor;
    width: 1.4em;
    height: 1.4em;
    border: 0.13em solid grey;
    border-radius: 9999px;
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
