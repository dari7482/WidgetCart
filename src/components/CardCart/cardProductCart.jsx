
import './cardProductCart.css'
//import frenos from '../../assets/img/Shimano.png'

import PropTypes from 'prop-types';



function CardProductCart({ producto }) {
    const { name, description, price, imagen } = producto



    return (
        <>

            <div className="card">
                <img src={imagen} alt="Frenos" style={{ height: '252px' }} />
                < h1 style={{ display: 'flex', height: '102px', margin: '0px', justifyContent: 'center', alignItems: 'center' }}>{name}</h1>
                <p className="price">{price}</p>
                <p>{description}</p>


            </div>

        </>
    );
}

CardProductCart.propTypes = {
    producto: PropTypes.node,
    cartTrue: PropTypes.node,
    onHandleCart: PropTypes.node
}

export default CardProductCart;