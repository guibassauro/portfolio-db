import styled from "styled-components";

const ContainerListaHabilidades = styled.div`
    display: flex;
    max-width: 360px;
    justify-content: space-between;
`

const TextoListaHabilidades = styled.h1`
    font-size: 16px;
    font-Weight: 300;
    color: #292929;
`


function ListaHabilidades({texto,imagem}){
    return(
        <ContainerListaHabilidades>
            <TextoListaHabilidades>
                {texto}
            </TextoListaHabilidades>
            <img src={imagem} alt="Habilidades" />
        </ContainerListaHabilidades>
    )
}

export default ListaHabilidades;