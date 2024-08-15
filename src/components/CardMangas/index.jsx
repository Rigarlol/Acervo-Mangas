import styled from "styled-components"


const CardContainer = styled.div`
    img {
        width: 50%;
        height: 50%;
        object-fit: cover;
        cursor: pointer;

        &:hover {
        transform: scale(1.02);
        transition: transform 0.3s;
        }
    }

    h3 {
        margin-bottom: 10px;
        font-size: 20px;
        color: #ded7d7;
    }
    p {
        margin-bottom: 0;
        font-size: 24px;
        color: white;
        font-weight: bold;
    }
`
export default function CardMangas({ imagem, nome }) {
    return (
        <CardContainer>
            <img src={imagem} alt={`Imagem do Manga ${nome}`} />
            <p>{nome}</p>
        </CardContainer>
    )
}