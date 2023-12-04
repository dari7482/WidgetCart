
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import CardProductCart from '../CardCart/cardProductCart'

import { useNavigate } from 'react-router-dom';
//import { useState } from 'react';

function Modals(props, { onHandleCart }) {
    const navigate = useNavigate();
    console.log(props)
    console.log(onHandleCart)
    //const [price, setPrice] = useState('')

    const { productos } = props

    console.log(productos)


    const totalValue = productos.map((item) => item.cantidad).reduce((total, cantidad) => parseInt(total) + parseInt(cantidad), 0);
    const totalAmount = productos.reduce((total, item) => {
        const cantidad = parseInt(item.cantidad);
        const precio = parseFloat(item.price);

        // Verifica si la cantidad y el precio son valores numéricos válidos.
        if (!isNaN(cantidad) && !isNaN(precio)) {
            // Multiplica la cantidad por el precio y añade al total acumulado.
            total += cantidad * Math.round(precio)
        }

        return total;
    }, 0);

    const navigateCreditCard = () => {
        console.log(productos)
        const updateProduct = productos.map((item) => {
            return {
                ...item,
                stock: item.stock - parseInt(item.cantidad),

            }


        })

        console.log(updateProduct)

        navigate('/Compra')
    }
    return (
        <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" scrollable>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Mis Compras
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="grid-example" >
                <Container style={{ height: '500px' }} >
                    {productos.map(producto =>
                        <Row key={producto.id} style={{ margin: "25px" }} >
                            <Col xs={12} md={12} >
                                <CardProductCart producto={producto} onHandleCart={props.onHandleCart} />
                            </Col>
                        </Row>
                    )}
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <div style={{ display: 'flex', }}>
                    <div style={{ marginRight: '80px' }} >
                        <h4>Total Compra:$ {totalAmount}</h4>
                        <h4>Total Unidades:{totalValue} un</h4>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button onClick={props.onHide} variant="primary">Close</Button>
                        <Button onClick={navigateCreditCard} style={{ backgroundColor: 'blue', color: 'white' }}>Comprar</Button>
                    </div>
                </div>
            </Modal.Footer>
        </Modal >
    );
}

Modals.propTypes = {
    onHide: PropTypes.node,
    productos: PropTypes.node,
    cartTrue: PropTypes.node,
    show: PropTypes.node,
    hide: PropTypes.node,
    onHandleCart: PropTypes.node,

}

export default Modals
