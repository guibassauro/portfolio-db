import styled from "styled-components";

const ContainerSobre = styled.div`
    min-height: 48vh;
    max-width: 460px;
`

const Texto = styled.h1`
    font-size: ${props => props.TamFonte || '18px'};
    font-Weight: ${props => props.Weight || '1px'};
    color: #292929;
`


function Sobre(){
    return(
        <ContainerSobre>
            <Texto TamFonte={'36px'} Weight={'400'}>
                Sobre mim
            </Texto>
            <Texto TamFonte={'16px'} Weight={'300'}>
                Sou dev há pouco mais de um ano e já me aventurei em diversas tecnologias web, 
                incluindo JavaScript, jQuery, HTML, CSS e PHP. Atualmente, estou me especializando em uma nova area, 
                trabalhando com  Java , Spring Boot, JPA, APIs REST, React, Chakra UI, entre outras. <br />
               
                Meu objetivo de carreira é aprender cada vez mais para me tornar uma engenheira de software.
            </Texto>
            
        </ContainerSobre>
    )
}

export default Sobre;