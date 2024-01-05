import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { Country } from "./pages/Country"
import { Container } from "react-bootstrap"
import { Header } from "./components/Header"


function App() {
  return (
    <>
    <Header/>
    <Container className="mb-4" >
    <Routes>
      <Route path="/Home" element={<Home />} ></Route>
      <Route path="/Store" element={<Store />} ></Route>
      <Route path="/Country" element={<Country/>} ></Route>
    </Routes>
    </Container>
  </>
  )
}

export default App
