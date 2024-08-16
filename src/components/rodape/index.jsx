import styled from "styled-components";
import logo from '../../assets/logoDBFooter.svg';
import { Link  } from 'react-router-dom';

const Background = styled.div`
    background-color: #BEE7F9;
    width: 100%;
    height: 87px;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

const Imagem = styled.img`
    &:hover {
        cursor: pointer;
    }
`


function Cabecalho(){
    return(
        <Background>
            <Link to={"https://db.tec.br/"} target="_blank">
                <Imagem  src={logo} alt="Link pro site da DB" />
            </Link>
        </Background>
    )
}

export default Cabecalho;