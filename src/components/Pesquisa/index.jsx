import styled from "styled-components";
import Input from "../Input";
import { useState } from "react";
import { mangas } from './DadosPesquisa'
import CardPesquisa from "../CardPesquisa";

const PesquisaContainer = styled.section`
    
    color: black;
    text-align: center;
    padding: 50px 0px;
    width: 100%;
`

const Titulo = styled.h2`
    color: black;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    color: black;
    font-size: 16px;
    margin-top: 20px;
`



export default function Pesquisa() {
    const [mangasPesquisados, setMangasPesquisados] = useState([])


    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar? </Titulo>
            <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={event => {
                    const textoDigitado = event.target.value.trim()

                    if (textoDigitado) {
                        const mangasEncontrados = mangas.filter(manga =>
                            manga.nome.toLowerCase().includes(textoDigitado.toLowerCase())
                        )
                        setMangasPesquisados(mangasEncontrados)
                    } else {
                        setMangasPesquisados([])  // Limpa a lista se o input estiver vazio
                    }
                }}
            />
            {mangasPesquisados.map((manga) => {
                return (
                    <CardPesquisa
                        key={manga.id}
                        nome={manga.nome}
                        imagem={manga.imagem}
                    />
                )
            })}
        </PesquisaContainer>
    )
}