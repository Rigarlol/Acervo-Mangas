import CardMangas from '../CardMangas'
import { Titulo } from '../Titulo'
import { mangasLancamentos } from './mangasLancamentos'

import styled from "styled-components"


const UltimosLancamentosContainer = styled.section`
    color: black;
    text-align: center;
    padding: 50px 0px;
    height: 320px;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const CardUltimoLancamentoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #9E0F0F;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    width: 80%;
    margin: 0 auto;
    transition: transform 0.3s;
`

export default function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo cor="#000">ULTIMOS LANÇAMENTOS</Titulo>
            <CardUltimoLancamentoContainer>
                {mangasLancamentos.map(manga => (
                    <CardMangas
                        nome={manga.nome}
                        imagem={manga.imagem}
                        key={manga.id}
                    />
                ))}
            </CardUltimoLancamentoContainer>
        </UltimosLancamentosContainer>
    )
}