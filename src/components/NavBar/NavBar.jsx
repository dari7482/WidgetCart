
//import CartWidget from "../CartWidget/CartWidget"
//import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Nav from 'react-bootstrap/Nav';
import Carrosuel from '../Carrosuel/Carrosuel';

/*const obtenerProductos = () => {

    return new Promise((resolve) => {

        const productos = [
            {
                id: '1',
                name: 'Frenos Shimano',
                description: 'Frenos para Montanbike',
                price: 50.000,
                stock: 100,
                imagen: 'src/assets/img/Shimano.png'
            },
            {
                id: '2',
                name: 'Producto 2',
                description: 'Descripción del Producto 2',
                price: 19.99,
                stock: 50,
                imagen: 'src/assets/img/Shimano.png'
            },
            {
                id: '3',
                name: 'Producto 3',
                description: 'Descripción del Producto 3',
                price: 7.99,
                stock: 75,
                imagen: 'src/assets/img/Shimano.png'
            },
        ];

        setTimeout(() => {
            resolve(productos);
        }, 3000)

    });
}*/





const NavBar = ({ productos }) => {
    console.log(productos)

    //const [data, setData] = useState('')



    /*useEffect(() => {
        obtenerProductos().then(datos => {
            console.log(datos)
            setData(datos);
            console.log(data)
        })
    }, [])*/

    return (
        <>
            <Navbar className="containerApp" bg="primary" data-bs-theme="dark" >

                <Navbar.Brand href="#home">MarketTechnology</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Bicicletas</Nav.Link>
                    <Nav.Link href="#pricing">Frenos</Nav.Link>
                    <Nav.Link href="#pricing">Accesorios</Nav.Link>
                </Nav>
                <CartWidget productos={productos} />
            </Navbar>

            <Carrosuel style={{ width: '100vw' }} />

        </>

    )

}

NavBar.propTypes = {
    productos: PropTypes.node,
};

export default NavBar