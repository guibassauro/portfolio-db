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
                Comecei a estudar programação a três anos quando fazia uma busca por alguma faculdade que me interessasse, sempre gostei de tecnologia, mas nunca havia me aventurado de verdade na área, foi então que fiz um curso básico sobre HTML, CSS e JavaScript. Em algum momento, vi que aquilo realmente me fazia feliz e que eu genuinamente me divertia enquanto criava as páginas, mesmo que básicas.
                <br />
                Foi então que decidi que iria fazer Ciências da Computação na faculdade da minha cidade, cada aula era algo novo e divertido que aprendíamos, a cada desafio concluído eu tinha mais certeza da escolha que havia tomado. Assim, veio o terceiro semestre e finalmente aprendemos sobre Java, eu não entendia muito bem o seu funcionamento, mas vários amigos do curso já trabalhavam com essa linguagem, então me dediquei a entender ela ao máximo para fazer parte das conversas.
                <br />
                Após o termino do semestre, não tivemos mais contato com essa tecnologia na faculdade, mas continuei a estudá-la por conta propria, pois havia gostado muito dela. Entrei na DB alguns meses depois como trainee de Quality Assurance e tenho me dedicado a aprender mais sobre esta área desde então.
            </Texto>
            
        </ContainerSobre>
    )
}

export default Sobre;