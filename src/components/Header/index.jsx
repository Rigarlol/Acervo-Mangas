import logo from '../../imagens/logo1.png'
import Navegacao from '../Navegacao'
import IconesHeader from '../IconesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #9E0F0F;
    display: flex;
    padding: 1.5rem;
    justify-content: space-around;
    align-items: center;
    
    gap: 4rem;
`

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`
const LogoImagem = styled.img`
    width: 60px;
`
const LogoTexto = styled.p`
    font-size: 24px;
    color: white;
    padding-top: 15px;
    
`

export default function Header() {
    return (
        <HeaderContainer>
            <LogoContainer >
                <LogoImagem src={logo} alt="Logo Acervo Mangas" />
                <LogoTexto><strong>Acervo</strong> Mangas</LogoTexto>
            </LogoContainer>
            <Navegacao />
            <IconesHeader />
        </HeaderContainer>
    )
}