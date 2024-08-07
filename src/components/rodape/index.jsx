import styled from "styled-components";
import logo from '../../assets/logoDBFooter.svg';

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
    const DB = () => { window.open("https://db.tec.br/")};

    return(
        <Background>
            <Imagem onClick={DB} src={logo} alt="Link pro site da DB" />
        </Background>
    )
}

export default Cabecalho;