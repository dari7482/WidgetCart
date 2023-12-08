
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import CardProductCart from '../CardCart/cardProductCart'
import { collection, getFirestore, /*setDoc,*/ addDoc } from "firebase/firestore"
import { app } from "../../db/config"

import { useNavigate } from 'react-router-dom';
//import { useState } from 'react';

function Modals(props, { onHandleCart }) {
    const navigate = useNavigate();
    console.log(props)
    console.log(onHandleCart)
    //const [idProduct, setidProduct] = useState('')

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
        const total = {
            total: {
                cantidad: totalValue,
                total: totalAmount,
                status: 'pending'
            }
        }



        const OrderDetail = productos.map((item) => {
            return {
                id: item.id,
                categoria: item.categoria,
                description: item.description,
                cantidad: item.cantidad,
                price: item.price,

            }
        })

        const items = { items: OrderDetail }

        const MergeUserOrder = Object.assign(total, items)
        console.log(OrderDetail)
        //console.log(MergeUserOrder)
        const db = getFirestore(app);
        const order = collection(db, "orders")

        console.log(updateProduct)


        /*updateProduct.map((items) => {
            const batch = writeBatch(db);
            const orderRef = doc(db, "orders", items.Id);
            const itemsColl = collection(db, 'items')
            const q = query(itemsColl, where("id", "==", "1"))

            getDocs(q).then((snapshot) => {
                const lista = snapshot.docs.map((doc) => ({
                    id: snapshot.id,
                    ...doc.data()


                }))

                console.log(lista)
            })

            const cant = doc(db, "items", "8CfGzt44Gw8S5xc6MGRP")
            batch.update(cant, { stock: '10' })
            batch.commit().then(() => {
                console.log("update")
            })
        })*/
        addDoc(order, MergeUserOrder).then((response) => {
            console.log("documento generado,id:", response.id)
            const orderid = response.id
            navigate(`/DatosPersonales/${orderid}`)
        })

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
