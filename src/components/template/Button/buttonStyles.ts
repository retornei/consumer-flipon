import styled from 'styled-components';

export const ButtonComponent = styled.button`
  background: ${props => props.theme.colors.primary};
  height: 30px;
  padding: 0 30px;
  border-radius: 30px;
  color: white;
  font-size: 20px;
  cursor: pointer;
  border: none;
  transition: background-color 2s;

  &:hover {
    background: ${props => props.theme.colors.secondary};
  }
`;
