
//import CartWidget from "../CartWidget/CartWidget"
//import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Nav from 'react-bootstrap/Nav';



const NavBar = () => {
    return (


        <Navbar className="containerApp" bg="light" data-bs-theme="light" >

            <Navbar.Brand href="#home">MarketTechnology</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Computers</Nav.Link>
                <Nav.Link href="#pricing">Tablets</Nav.Link>
                <Nav.Link href="#pricing">CellPhones</Nav.Link>
            </Nav>
            <CartWidget />

        </Navbar>




    )

}


export default NavBar