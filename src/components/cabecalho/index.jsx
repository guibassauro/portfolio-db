import styled from "styled-components";
import logo from '../../assets/logoDB.svg';
import GitHub from '../../assets/gitHub.svg';
import Linkedin from '../../assets/linkedin.svg';
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

`
const Lista = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
`

function Cabecalho(){
    return(
        <Background>
            <Flex style={{gap: '50px'}}> 
                <Link to={""}>
                    <Imagem src={logo} alt="logo" />
                </Link>
                <Lista>
                    <Link to={"/"}> 
                        <li>Sobre</li>
                    </Link>
                    <Link to={""}>
                        <li>Curriculo</li>
                    </Link>
                    <Link to={"projetos"}>
                        <li>Projetos</li>
                    </Link>
                </Lista>
            </Flex>
            <Flex style={{gap: '50px'}}>
                <Link to={""}>
                    <Imagem src={GitHub} alt="Link GitHub" />
                </Link>
                <Link to={""}>
                    <Imagem src={Linkedin} alt="Link Linkedin" />
                </Link>
            </Flex>
        </Background>
    )
}

export default Cabecalho;