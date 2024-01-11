import { ShoppingCart } from "lucide-react"
import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingContext } from "../context/ShoppingContext"


export const Header = () => {

    const {cartQuantity, openCart} = useShoppingContext()

    return <Navbar sticky="top" className="shadow-sm bg-white py-3" >
        <Container>
            <Nav>
                <Nav.Link to="/" as={NavLink} >Home</Nav.Link>
                <Nav.Link to="/Store" as={NavLink} >Store</Nav.Link>
                <Nav.Link to="/About" as={NavLink} >About</Nav.Link>
            </Nav>
            
            {cartQuantity > 0 && (<Button onClick={openCart} variant="outline-secondary " className="rounded-circle" style={{position:'relative'}} >
              <ShoppingCart />
              <div className="rounded-circle bg-danger" style={{position:'absolute',color: 'white', bottom: -9, right: -6, width: '1.5rem', height: '1.5rem'}}  >
               {cartQuantity}
            </div>
            </Button>)}
        </Container>
    </Navbar>
}