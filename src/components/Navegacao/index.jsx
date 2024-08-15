import styled from "styled-components";
import Link_Navegacao from "../Link_Navegacao";


const Ul = styled.ul`
    display: flex;
    gap: 1rem;
    font-size: 16px;
    text-align: center;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
const Ancora = styled.a`
    text-decoration: none;
    color: white;

    &:hover {
        color: #757685; 
    }
`

export default function Navegacao() {
    return (
        <nav>
            <Ul>
                <Link_Navegacao >
                    <Ancora href="/contato">CATEGORIAS</Ancora>
                </Link_Navegacao>
                <Link_Navegacao>
                    <Ancora href="/contato">MINHA ESTANTE</Ancora>
                </Link_Navegacao>
                <Link_Navegacao>
                    <Ancora href="/contato">FAVORITOS</Ancora>
                </Link_Navegacao>
                
            </Ul>
        </nav>
    )
}