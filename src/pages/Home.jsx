import styled from "styled-components";
import Apresentacao from "../components/apresentacao";
import Foto from '../assets/foto.jpg'
import Sobre from "../components/sobre";
import Habilidades from "../components/habilidades";

const ContainerHome = styled.div`
    min-height: 96vh;
    display:grid;
    grid-template-columns: 1fr 1fr;
    padding: 157px 100px 50px 100px;
    width: 100%;
    gap: 30px;

    @media (max-width: 968px) {
        padding: 157px 50px 50px 50px;
        grid-template-columns: 1fr;
    }
`

const Imagem = styled.img`
    object-fit: cover;
    Width: 567px;
    Height: 292px;
`


function Home(){
    return(
        <ContainerHome>
            <Apresentacao />
            <Imagem src={Foto} alt="foto" />
            <Sobre />
            <Habilidades />
        </ContainerHome>
    )
}

export default Home;