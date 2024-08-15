import styled from 'styled-components'
import Header from './components/Header'
import Pesquisa from './components/Pesquisa'
import UltimosLancamentos from './components/UltimosLancamentos'

/*background-image: linear-gradient(90deg, #002F52 35%, #326589);*/
const AppContainer = styled.div`
    width: 100vw;
    height: 100vh; 
`
function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  )
}

export default App
