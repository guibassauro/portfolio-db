import styled from "styled-components";
import ListaHabilidades from '../listaHabilidades/index';
import Nivel1 from '../../assets/habilidade1.svg';
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
    font-family: ${props => props.fontFamily || 'Supermolot Bold'};
    margin-top: ${props => props.top || '0px'};
`


function Habilidades(){
    return(
        <ContainerHabilidades>
            <Texto TamFonte={'36px'} Weight={'400'}>
                Habilidades
            </Texto>

            <Texto TamFonte={'20px'} Weight={'400'} top={'10px'}>
                Qualidade
            </Texto>

            <ListaHabilidades texto={'Teste Unitário'} imagem={Nivel3} />
            <ListaHabilidades texto={'Teste de Integração'} imagem={Nivel2} />
            <ListaHabilidades texto={'REST Assurence'} imagem={Nivel3} />
            <ListaHabilidades texto={'Sellenium'} imagem={Nivel3} />
            <ListaHabilidades texto={'Postman'} imagem={Nivel4} />

            <Texto TamFonte={'20px'} Weight={'400'} top={'10px'}>
                Backend
            </Texto>

            <ListaHabilidades texto={'Java'} imagem={Nivel3} />
            <ListaHabilidades texto={'Spring boot'} imagem={Nivel2} />

            <Texto TamFonte={'20px'} Weight={'400'} top={'10px'}>
                Frontend
            </Texto>

            <ListaHabilidades texto={'HTML'} imagem={Nivel4} />
            <ListaHabilidades texto={'CSS'} imagem={Nivel4} />
            <ListaHabilidades texto={'React'} imagem={Nivel1} />

            <Texto TamFonte={'20px'} Weight={'400'} top={'10px'}>
                Outros
            </Texto>
            <ListaHabilidades texto={'Git'} imagem={Nivel2} />
            <ListaHabilidades texto={'GitHub'} imagem={Nivel3} />
            <ListaHabilidades texto={'SQL'} imagem={Nivel3} />
            <ListaHabilidades texto={'Docker'} imagem={Nivel1} />

        </ContainerHabilidades>
    )
}

export default Habilidades;