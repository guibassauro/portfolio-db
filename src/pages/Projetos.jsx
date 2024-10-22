import styled from "styled-components";
import TextoProjeto from "../components/textoProjeto";
import CardProjeto from "../components/cardProjeto";
import ViaCep from '../assets/ViaCepIcon.png';
import BugRank from '../assets/BugRankIcon.png';

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
                    imagem={ViaCep} 
                    titulo={'Testes ViaCepApi'}
                    tecnologias={'JUnit 5, REST Assurance'}
                    descricao={'Testes feitos em REST para verificar diferentes saídas e funções da API governamental ViaCep'}
                    link={'https://github.com/guibassauro/ViaCepTest'} 
                    link2={'https://dbserver-my.sharepoint.com/:x:/g/personal/guilherme_barbian_dbserver_com_br/EbvvJ2HK5oxMicNrqF4jUYIBfBYwLenFwmmndnAh2yaGnQ?e=9akOYs'}
                />

                <CardProjeto 
                    imagem={BugRank} 
                    titulo={'Testes BugRank'}
                    tecnologias={'JUnit 5, Sellenium, chromedriver'}
                    descricao={'Testes End-To-End feitos em Sellenium para verificar funções da aplicação BugRank'}
                    link={'https://github.com/guibassauro/BugRankTest'} 
                    link2={'https://dbserver-my.sharepoint.com/:x:/g/personal/guilherme_barbian_dbserver_com_br/Ea2rfUPubw1Jursr99wWEPQBtryfxNNGp6s72rkIXJ9-3Q?e=H83hmO'}
                />

            </GridProjeto>
        </ContainerProjetos>
    )
}

export default Projetos;