import { Outlet } from 'react-router-dom';
import Cabecalho from './components/cabecalho';
import Rodape from './components/rodape';
import styled from "styled-components";

const ContainerPrincipal = styled.div`
  
`



function App() {
  return (
    <ContainerPrincipal>
      <Cabecalho />
      <Outlet/>
      <Rodape />
    </ContainerPrincipal>
  );
}

export default App;
