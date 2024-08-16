import styled from "styled-components";

const ContainerSobre = styled.div`
    min-height: 48vh;
    max-width: 660px;
    text-align: justify;
`

const Texto = styled.h1`
    font-size: ${props => props.TamFonte || '18px'};
    font-Weight: ${props => props.Weight || '1px'};
    color: #292929;
    font-family: ${props => props.fontFamily || 'Supermolot Bold'};
`


function Sobre(){
    return(
        <ContainerSobre>
            <Texto TamFonte={'36px'} Weight={'400'}>
                Sobre mim
            </Texto>
            <Texto TamFonte={'18px'} Weight={'300'} fontFamily={"Roboto Flex"}>
                Sou desenvolvedora há pouco mais de um ano e amo o que faço! Mas nem sempre foi assim. Minha jornada começou em 2019, quando eu estava finalizando o ensino médio. Minha mãe me mostrou uma publicação de um novo curso no Instituto Federal para 'consertar computadores' e, curiosa, me inscrevi. Era um curso de programação para desenvolver sistemas. Me arrependi amargamente, pois eu não conseguia entender nada, não conseguia estágio, enfim, foi um caos e eu desisti. Terminei o ensino médio e consegui uma bolsa para cursar marketing. Enquanto cursava a graduação, minha mente ainda estava na TI. Eu não estava aceitando muito bem que tinha desistido de uma profissão por ter achado difícil, e, para piorar, eu não estava me identificando nem um pouco com marketing.
                <br />
                Finalizei a faculdade, mas, ao invés de tentar emprego na área de marketing, comecei a estudar programação sozinha. Achei um ótimo curso de algoritmos com o Guanabara e me empenhei. Finalmente peguei o jeito; só me faltava fazer uma boa base na lógica e ser mais proativa com meus estudos.
                <br />
                Voltei e concluí o meu curso técnico. Hoje, curso a graduação em Engenharia de Software e, em agosto de 2024, completo dois anos trabalhando na área.
            </Texto>
            
        </ContainerSobre>
    )
}

export default Sobre;