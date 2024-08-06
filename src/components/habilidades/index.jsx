import styled from "styled-components";

const ContainerHabilidades = styled.div`
    min-height: 48vh;
`

const Texto = styled.h1`
    font-size: ${props => props.TamFonte || '18px'};
    font-Weight: ${props => props.Weight || '1px'};
    color: #292929;
`


function Habilidades(){
    return(
        <ContainerHabilidades>
            <Texto TamFonte={'36px'} Weight={'400'}>
                Habilidades
            </Texto>
            <Texto TamFonte={'16px'} Weight={'300'}>
                
            </Texto>
            
        </ContainerHabilidades>
    )
}

export default Habilidades;