import styled from "styled-components";
import TextoProjeto from "../components/textoProjeto";
import CardProjeto from "../components/cardProjeto";
import VotacaoFront from '../assets/votacaoFrontend.jpg';
import VotacaoBack from '../assets/votacaoBackend.jpg';
import Flyway from '../assets/flyway.png';
import CadastroCliente from '../assets/CadastroCliente.jpg';
import Api  from '../assets/Api.png';
import Food  from '../assets/food.png';
import Pessoas  from '../assets/pessoas.jpg';

const ContainerProjetos = styled.div`
    min-height: 96vh;
    display:flex;
    flex-direction: column;
    padding: 157px 200px 50px 200px;
    width: 100%;
    gap: 10px;

    @media (max-width: 1410px) {
        padding: 157px 100px 50px 100px; 
    }

    @media (max-width: 866px) {
        padding: 157px 50px 50px 50px; 
    }
`

const GridProjeto = styled.div`
    min-height: 96vh;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 50px;

    @media (max-width: 1198px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 752px) {
        grid-template-columns: 1fr;
        justify-items: center;
    }
        
`


function Projetos(){
    return(
        <ContainerProjetos>
            <TextoProjeto />
            <GridProjeto>
                <CardProjeto 
                    imagem={VotacaoFront} 
                    titulo={'Votação Front End'}
                    tecnologias={'React, Axios, Chakra UI'}
                    descricao={'Essa é uma interface criada em react que permite o usuário votar em diferentes pautas. Ela se comunica com a API através da ferramenta axios'}
                    link={'https://github.com/Samara-Bastos/Votacao_React'} 
                />

                <CardProjeto 
                    imagem={VotacaoBack} 
                    titulo={'Votação Back End'}
                    tecnologias={'Java, Spring Boot, Flyway, Docker, PostgreSQL'}
                    descricao={'Essa é a API do sistema de votação, ela foi construida em Java juntamente com Spring boot e tem como a principal funcionalidade a administração de pautas, usuarios e votos.'}
                    link={'https://github.com/Samara-Bastos/Votacao_Java'} 
                />

                <CardProjeto 
                    imagem={Pessoas} 
                    titulo={'Crud Pessoas'}
                    tecnologias={'Java, Spring Boot, Docker, PostgreSQL, Mockito, MockMvc'}
                    descricao={'Essa é uma API que contém um crud de pessoas e um de endereços que estão relacionados entre si, nele é usado o Java, Spring, JPA e testes com Mockito e MockMvc.'}
                    link={'https://github.com/Samara-Bastos/Crud_pessoa_Java'}   
                />

                <CardProjeto 
                    imagem={Flyway} 
                    titulo={'Flyway'}
                    tecnologias={'Java, Spring Boot, Flyway, Docker, PostgreSQL'}
                    descricao={'Essa é uma API simples, com um crud de noticias, que tem como o seu principal objetivo a exploração da ferramenta Flyway.'}
                    link={'https://github.com/Samara-Bastos/Flyway_Java'} 
                />

                <CardProjeto 
                    imagem={CadastroCliente} 
                    titulo={'Clientes Front End'}
                    tecnologias={'React, Axios, Chakra UI'}
                    descricao={'Essa é uma interface construida em react que tem como o seu principal objetivo a comunicação entre front e back através da ferramenta Axios.'}
                    link={'https://github.com/Samara-Bastos/Formulario_Cliente_React'}   
                />

                <CardProjeto 
                    imagem={Api} 
                    titulo={'Clientes Back End'}
                    tecnologias={'Java, Spring Boot, Docker, PostgreSQL'}
                    descricao={'Essa é a API cliente, que tem como o seu principal objetivo a comunicação entre front e back'}
                    link={'https://github.com/Samara-Bastos/Api_Cliente_Java'}  
                />

                <CardProjeto 
                    imagem={Food} 
                    titulo={'Foods'}
                    tecnologias={'React'}
                    descricao={'Essa é uma interface simples construida em react que exibe um catalogo de comidas com exemplos de imagens ilustrativas.'}
                    link={'https://github.com/Samara-Bastos/Catalogo_comidas_React'}   
                />

            </GridProjeto>
        </ContainerProjetos>
    )
}

export default Projetos;