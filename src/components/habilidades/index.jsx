import styled from "styled-components";
import ListaHabilidades from '../listaHabilidades/index';
import Nivel2 from '../../assets/habilidade2.svg';
import Nivel3 from '../../assets/habilidade3.svg';
import Nivel4 from '../../assets/habilidade4.svg';


const ContainerHabilidades = styled.div`
    min-height: 48vh;
`

const Texto = styled.h1`
    font-size: ${props => props.TamFonte || '18px'};
    font-Weight: ${props => props.Weight || '1px'};
    color: #292929;
`


function Habilidades(){
    return(
        <ContainerHabilidades>
            <Texto TamFonte={'36px'} Weight={'400'}>
                Habilidades
            </Texto>

            <Texto TamFonte={'20px'} Weight={'400'}>
                Back end
            </Texto>

            <ListaHabilidades texto={'Java'} imagem={Nivel3} />
            <ListaHabilidades texto={'Spring boot'} imagem={Nivel3} />
            <ListaHabilidades texto={'Flyway'} imagem={Nivel3} />
            <ListaHabilidades texto={'PHP'} imagem={Nivel3} />

            <Texto TamFonte={'20px'} Weight={'400'}>
                Front end
            </Texto>

            <ListaHabilidades texto={'HTML'} imagem={Nivel4} />
            <ListaHabilidades texto={'CSS'} imagem={Nivel4} />
            <ListaHabilidades texto={'React'} imagem={Nivel3} />
            <ListaHabilidades texto={'JQuery'} imagem={Nivel3} />

            <Texto TamFonte={'20px'} Weight={'400'}>
                Qualidade
            </Texto>

            <ListaHabilidades texto={'Teste Unitários'} imagem={Nivel3} />
            <ListaHabilidades texto={'Testes de Integração'} imagem={Nivel2} />

            <Texto TamFonte={'20px'} Weight={'400'}>
                Outros
            </Texto>
            <ListaHabilidades texto={'Git'} imagem={Nivel3} />
            <ListaHabilidades texto={'GitHub'} imagem={Nivel3} />
            <ListaHabilidades texto={'SQL'} imagem={Nivel3} />
            <ListaHabilidades texto={'Docker'} imagem={Nivel2} />

        </ContainerHabilidades>
    )
}

export default Habilidades;