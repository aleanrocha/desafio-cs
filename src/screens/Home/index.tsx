import { HomeContainer, MainContent } from './styles'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ListContainer from '../../components/LIstContainer'
import FormContainer from '../../components/FormsContainer'
import MainTitle from '../../components/mainTitle'

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <MainContent>
        <MainTitle />
        <FormContainer />
        <ListContainer />
      </MainContent>
      <Footer />
    </HomeContainer>
  )
}
