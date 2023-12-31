import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './shared/Footer'
import Header from './shared/Header'
import Error from './components/Error'
import {ThemeProvider} from 'styled-components'
import { GlobalStyle } from './components/GlobalStyle'
import GoToTop from './shared/GoToTop'
function App() {
  const theme={
    colors:{
    heading:"rgb(24 24 29)",
    text:"rgb(24 24 29)",
    white:"#fff",
    black:"#212529",
    helper:"#8490ff",
    bg:"#e3f1fa",
    footer_bg:"#0a1435",
    btn:"#295eb3",
    border:"rgba(98, 84, 243, 0.5)",
    hr:"#ffffff",
    gradient:
    "linear-gradient(0deg, rgb(132 144 255)  0%, rgb(98 189 252) 100%)",
    shadow:
    "rgba(0,0,0,0.02) 0px 1px 3px opx, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
    shadowSupport:"rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {mobile:'768px', tab:'998px',}

  };
  

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
      <GoToTop/>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
