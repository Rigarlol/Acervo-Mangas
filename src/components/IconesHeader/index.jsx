import { VscAccount } from 'react-icons/vsc'
import { CiShoppingCart } from 'react-icons/ci'
import styled from 'styled-components'

const perfil = <VscAccount />
const compras = <CiShoppingCart />
const icons = [perfil, compras]

const IconContainer = styled.div`
    display: flex;
    gap: 1.5rem;
    color: white;
`

const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    cursor: pointer;
`

export default function IconesHeader() {
    return (
        <IconContainer>
            {icons.map((icone) => (
                <Icon key={icone} >
                    {icone}
                </Icon>
            ))}
        </IconContainer>
    )
}