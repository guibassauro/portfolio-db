import styled from "styled-components";
import logo from '../../assets/logoDB.svg';
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

`


function Cabecalho(){
    return(
        <Background>
            <Link to={""}>
                <Imagem src={logo} alt="Link pro site da DB" />
            </Link>
        </Background>
    )
}

export default Cabecalho;