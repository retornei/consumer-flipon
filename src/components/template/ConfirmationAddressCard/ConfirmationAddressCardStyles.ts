import styled from "styled-components";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import Button from "../Button";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  border-radius: 25px;
  box-shadow: 0 0 0.2em ${props => props.theme.colors.primary};
  margin: 10px 0;
  padding: 20px;

  h3 {
    margin: 0;
    margin-bottom: 20px;
  }

  p {
    margin: 3px 0;
    color: grey;
    font-size: 16px;
    font-weight: 400;

    @media(max-width: 430px) {
      font-size: 15px;
    }
  }
  
  span {
    font-weight: 600;
  }
`;

export const StyledOverlay = styled(DialogPrimitive.Overlay)`
  background-color: rgba(0,0,0,0.15);
  position: fixed;
  inset: 0;
`;

export const StyledContent = styled(DialogPrimitive.Content)`
  background-color: #fff;
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 450px;
  max-height: 85vh;
  padding: 20px;
`;

export const StyledCloseButton = styled(Button)`
  position: absolute;
  top: 10px;
  right: 10px;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

export const AddressItem = styled.div`
  border: 1px solid #eee;
  padding: 10px;
  cursor: pointer;

  &:not(:first-child) {
    margin-top: 15px;
  }

  &.active {
    border-color: #000;
  }

  p {
    font-weight: bold;
  }

  span {
    color: #757575;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 10px;
  text-align: center;
`;