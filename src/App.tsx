import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Container } from "react-bootstrap"
import { Header } from "./components/Header"
import { ShoppingCartProvider } from "./context/ShoppingContext"

function App() {
  return (
    <ShoppingCartProvider >
    <Header/>
    <Container className="py-3" >
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Store" element={<Store/>} />
        <Route path="/About" element={<About/>}/>
      </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App
