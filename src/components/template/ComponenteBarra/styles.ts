import styled, { css } from 'styled-components'

import check from '../../../../public/img/check.png';

interface DivisaoProps {
    cor: string;
}

interface IconesProps {
    fazer: boolean;
    ativo: boolean;
    feito: boolean;
}

export const IconDiv = styled.div<IconesProps>`
  border-radius: 50%;
  max-width: 25px;
  max-height: 25px;
  min-width: 25px;
  min-height: 25px;
  cursor: pointer;
}

  @media(max-width: 600px) {
    max-width: 25px;
    max-height: 25px;
    min-width: 25px;
    min-height: 25px;
  }

  @media(max-width: 400px) {
    max-width: 15px;
    max-height: 15px;
    min-width: 15px;
    min-height: 15px;
  }
  
  ${(props) => props.feito && css`
    background: url(${check.src}) no-repeat center;
    background-size: cover;
  `}

  ${(props) => props.ativo && css`
    box-sizing: border-box;
    border: black solid 8px;
    
    @media(max-width: 600px) {
      border: black solid 8px;
    }

    @media(max-width: 400px) {
      border: black solid 5px;
    }
  `}

  ${(props) => props.fazer && css`
    background: #DCDCDC
  `}
`;

export const Divisao = styled.div<DivisaoProps>`
  background: ${props => props.cor};
  flex-grow: 1;
  height: 8px;
  margin: 0 -5px;
  z-index: -1;

  @media(max-width: 800px) {
    height: 6px;
  }

  @media(max-width: 600px) {
    height: 5px;
  }

  @media(max-width: 400px) {
    height: 5px;
  }
`;
