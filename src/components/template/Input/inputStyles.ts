import styled from 'styled-components';

export const InputComponent = styled.input`
    min-height: 30px;
    max-height: 30px;
    border-radius: 18px;
    border: ${props => props.theme.colors.primary} solid 1px;
    padding: 0 15px;
    outline: none!important;
`