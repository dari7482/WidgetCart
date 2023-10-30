import cart from './asset/cart_icon.svg'
import { useState } from 'react';
import Modals from '../modal/Modals';
import PropTypes from 'prop-types';


const CartWidget = ({ productos }) => {
    console.log(productos)



    const [modalShow, setModalShow] = useState(false);

    return (
        <div >
            <img src={cart} alt="cart-widget" onClick={() => setModalShow(true)} style={{ cursor: "pointer", paddingTop: '5px', paddingRight: '15px' }} />
            <p style={{ backgroundColor: 'white', textAlign: 'center', borderRadius: '70%', marginRight: '15px' }}>{productos.length}</p>
            <Modals show={modalShow} onHide={() => setModalShow(false)} productos={productos} />
        </div>)



}

CartWidget.propTypes = {
    productos: PropTypes.node,
    cart: PropTypes.node,

}


export default CartWidget
