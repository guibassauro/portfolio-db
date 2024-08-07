import styled from "styled-components";
import logo from '../../assets/logoDB.svg';
import GitHub from '../../assets/gitHub.svg';
import Linkedin from '../../assets/linkedin.svg';
import Curriculo from '../../assets/Samara_Bastos_Desenvolvedora.pdf';
import { Flex } from '@chakra-ui/react';
import { Link  } from 'react-router-dom';

const Background = styled.div`
    background-color: #BEE7F9;
    width: 100%;
    height: 87px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 50px 0px 50px;
    position: fixed;
`

const Imagem = styled.img`
    &:hover {
        cursor: pointer;
    }
`
const Lista = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
`

const Itens = styled.li`
    font-family: ${props => props.fontFamily || 'supermolotBold'};
    font-size: 18px;
    font-weight: 400;
    &:hover {
        cursor: pointer;
    }
`


function Cabecalho(){
    const CV = () => { window.open(Curriculo) }
    const GH = () => { window.open("https://github.com/Samara-Bastos") }
    const LK = () => { window.open("https://www.linkedin.com/in/samara-bastos-397375241/") }

    return(
        <Background>
            <Flex style={{gap: '50px'}}> 
                <Link to={"/"}>
                    <Imagem src={logo} alt="logo" />
                </Link>
                <Lista>
                    <Link to={"/"}> 
                        <Itens>Sobre</Itens>
                    </Link>
                    <Itens onClick={CV}>Curriculo</Itens>
                    <Link to={"projetos"}>
                        <Itens>Projetos</Itens>
                    </Link>
                </Lista>
            </Flex>
            <Flex style={{gap: '50px'}}>
                <Imagem src={GitHub} alt="Link GitHub" onClick={GH} />
            
                <Imagem src={Linkedin} alt="Link Linkedin" onClick={LK} />
            </Flex>
        </Background>
    )
}

export default Cabecalho;