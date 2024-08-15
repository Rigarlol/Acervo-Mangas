import styled from "styled-components"

const Input = styled.input`
    border: 1px solid black;
    background: transparent;
    padding: 20px 50px;
    border-radius: 50px;
    width: 400px;
    color: black;
    font-size: 16px;
    margin-bottom: 10px;
    text-align: center;
    

    &::placeholder {
        color: #9E0F0F;
        font-size: 16px;
    }
`
export default Input