import styled from "styled-components";

const ContainerApresentacao = styled.div`
    min-height: 48vh;
`

const Texto = styled.h1`
    font-size: ${props => props.TamFonte || '18px'};
    font-Weight: ${props => props.Weight || '1px'};
    color: #292929;
`


function Apresentacao(){
    return(
        <ContainerApresentacao>
            <Texto TamFonte={'36px'} Weight={'400'}>
                Olá, meu nome é
            </Texto>
            <Texto TamFonte={'80px'} Weight={'700'}>
                Samara Bastos
            </Texto>
            <Texto TamFonte={'36px'} Weight={'400'}>
                Sou desenvolvedora FullStack na DBServer
            </Texto>
        </ContainerApresentacao>
    )
}

export default Apresentacao;