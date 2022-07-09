import styled from 'styled-components';

export const SelectContainer = styled.div`
    position: relative;

    &:after {
        content: '<>';
        font-size: 17px;
        color: #333;
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        right: 11px;
        top: 9px;
        padding: 0 0 2px;
        border-bottom: 1px solid #999;
        position: absolute;
        pointer-events: none;
    }
`;

export const SelectLabel = styled.label``;

export const Select = styled.select`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    display: block;
    width: 100%;
    height: 30px;
    float: right;
    margin: 5px 0px;
    padding: 0px 15px;
    font-size: 16px;
    line-height: 1.75;
    color: #333;
    background-color: #ffffff;
    background-image: none;
    border: 1px solid #000;
    border-radius: 18px;
    -ms-word-break: normal;
    word-break: normal;

    &::-ms-expand {
        display: none;
    }
`;

/* export const Select = styled.select`
  height: 30px;
  border-radius: 18px;
  border: ${props => props.theme.colors.primary} solid 1px;
  padding: 0 15px;
  outline: none!important;
`; */