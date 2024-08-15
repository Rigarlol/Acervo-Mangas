import styled from "styled-components";

export const Titulo = styled.h2`
    font-size: 2.5rem;
    color: ${props => props.cor || 'black'};
    text-align: center;
    padding: 20px 0;
    width: 100%;
`