import styled from 'styled-components'


const Li = styled.li`
    list-style: none;
    text-decoration: none;  
`

export default function Link_Navegacao({ children }) {
    return (
        <Li>
            {children}
        </Li>
    )
}