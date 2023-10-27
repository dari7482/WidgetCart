
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import CardProductCart from '../CardCart/cardProductCart'
import { useEffect } from 'react';
//import { useState } from 'react';

function Modals(props) {

    //const [price, setPrice] = useState('')

    const { productos } = props
    console.log(productos)

    useEffect(() => {
        //const priceArray = productos.map(producto => producto.price).reduce((a, b) => a + b, 0).toFixed(2)
        //setPrice(priceArray)



    }, [])

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" scrollable>
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
                                <CardProductCart producto={producto} />
                            </Col>
                        </Row>
                    )}
                    <Row >
                        <Col xs={12} md={12} >
                            <p>Total</p>
                            <p></p>
                        </Col>
                    </Row>


                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

Modals.propTypes = {
    onHide: PropTypes.node,
    productos: PropTypes.node,
    cartTrue: PropTypes.node,
    show: PropTypes.node,
    hide: PropTypes.node,
}

export default Modals
