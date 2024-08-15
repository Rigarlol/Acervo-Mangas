import styled from "styled-components"

const CardContainerPesquisa = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 400px;
    margin: 20px auto 30px auto; 
    transition: transform 0.3s;
    text-align: center;

    img {
        width: 200px;
    }

    p {
        font-size: 18px;
        margin-top: 10px;
    }

    &:hover {
        transform: scale(1.05);
        transition: transform 0.3s;
        cursor: pointer;
    }
`
export default function CardPesquisa({ nome, imagem }) {
    return (
        <CardContainerPesquisa>
            <img src={imagem} alt={`Imagem do Manga ${nome}`} />
            <p>{nome}</p>
        </CardContainerPesquisa>
    )
}