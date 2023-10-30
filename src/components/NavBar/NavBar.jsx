
//import CartWidget from "../CartWidget/CartWidget"
//import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Nav from 'react-bootstrap/Nav';
import Carrosuel from '../Carrosuel/Carrosuel';

const NavBar = ({ productos }) => {
    console.log(productos)


    return (
        <>
            <Navbar className="containerApp" bg="primary" data-bs-theme="dark" >

                <Navbar.Brand href="#home">BicycletStore</Navbar.Brand>
                <Nav className="me-auto">
                    {productos ? null : <Nav.Link href="/">Home</Nav.Link>}


                </Nav>
                {productos ? <CartWidget productos={productos} /> : null}
            </Navbar>

            {productos ? <Carrosuel style={{ width: '100vw' }} /> : null}

        </>

    )

}

NavBar.propTypes = {
    productos: PropTypes.node,
};

export default NavBar