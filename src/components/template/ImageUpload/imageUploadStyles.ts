import styled from "styled-components";

export const UploadContainer = styled.div`
  all: unset;
  display: flex;
  position: relative;
  background-color: #eee;
  overflow: hidden;
  z-index: 2;

  &:focus {
    box-shadow: 0 0 0px 2px rgba(69, 145, 222, 1);
    border-radius: 0.5rem;
  }
`;

export const UploadLabel = styled.label`
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    padding-bottom: 80%;
  }
`;

export const UploadInput = styled.input`
  &::-webkit-file-upload-button {
    visibility: hidden;
  }

  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  position: absolute;
  z-index: -9999px;
`;

export const AddImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
    stroke: #757575;
  }

  span {
    font-size: 11px;
    color: #757575;
    text-transform: uppercase;
    text-align: center;
  }
`;

export const RemoveImage = styled.div`
  all: unset;
  width: 100%;
  padding: 5px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  &:focus {
    box-shadow: 0 0 0px 2px rgba(69, 145, 222, 1);
    border-radius: 0.5rem;
  }

  svg {
    width: 20px;
    height: 20px;
    margin-left: 10px;
  }

  span {
    font-size: 11px;
    text-transform: uppercase;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;
