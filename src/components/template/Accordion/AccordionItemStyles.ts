import styled from "styled-components";

interface ActionButtonProps {
    color?: string;
}

interface InfoMessageProps {
    invalid: boolean;
}

export const Item = styled.div`
  border: 1px solid #ccc;

  &:not(:first-child) {
    border-top: 0px;
  }
`;

export const Header = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  background-color: #fff;
  transition: background-color 0.2s;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: #efefef;
  }

  &.active {
    background-color: #efefef;
  }
`;

export const AvatarContainer = styled.div`
  width: 60px;
  height: 60px;
  margin-right: 10px;
`;

export const Avatar = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  margin-right: 10px;
`;

export const Title = styled.h5`
  margin: 0;
`;

export const Subtitle = styled.span`
  font-size: 12px;
  color: #757575;
`;

export const InfoMessage = styled.span<InfoMessageProps>`
  font-size: 12px;
  color: ${props => props.invalid ? 'red' : 'green'};
  display: flex;
  align-items: center;
  margin-top: 5px;

  svg {
      margin-right: 5px;
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const ActionButton = styled.button<ActionButtonProps>`
  all: unset;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
    stroke: ${(props) => (props.color ? props.color : "#000")};
  }
`;

export const BodyContainer = styled.div`
  height: 0;
  overflow: hidden;

  &.open {
    height: auto;
    padding: 10px;
  }
`;

export const Body = styled.div``;
