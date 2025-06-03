import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Projetos from './pages/Projetos'
import Contatos from './pages/Contatos'
import Page404 from './pages/Page404'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Container from './components/Container/index'
import { Analytics } from "@vercel/analytics/react"; // Importa o Analytic


function AppRoutes() {
    return (
        <>
        <BrowserRouter>
          <Header />
            <Container>
                <Routes>
                    <Route path="/" element={ <Home /> }></Route>
                    <Route path="/sobre" element={ <Sobre /> }></Route>
                    <Route path="/projetos" element={ <Projetos /> }></Route>
                    <Route path="/contatos" element={ <Contatos /> }></Route>
                    <Route path="*" element={ <Page404 /> }></Route>
                </Routes>
            </Container>
            <Footer />
             <Analytics />
        </BrowserRouter>
        </>
    )
}

export default AppRoutes
