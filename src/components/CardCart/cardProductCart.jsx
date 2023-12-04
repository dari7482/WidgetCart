
import './cardProductCart.css'
import trashIcon from '../../assets/img/Trash Can.svg'
//import frenos from '../../assets/img/Shimano.png'


import PropTypes from 'prop-types';






function CardProductCart({ producto, onHandleCart }) {

    console.log(onHandleCart)

    console.log(producto)
    const total = parseFloat(producto.price) * parseInt(producto.cantidad)

    const remove = () => {

        //const productRemove = producto.filter(items => items.id != e.target.name)


        onHandleCart(producto, 'remove')



    }

    return (
        <>
            <div style={{ display: 'flex', height: '200px', marginTop: '10px', marginRight: '5px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', marginBottom: '10px', justifyContent: 'space-between' }}>
                <div>
                    <img src={producto.imagen} alt="Frenos" style={{ height: '120px', marginLeft: '10px', marginTop: '10px' }} />
                    < h5 style={{ display: 'flex', height: '42px', margin: '0px', justifyContent: 'center', alignItems: 'center' }}>{producto.name}</h5>
                </div>
                <div style={{ marginRight: '10px', marginTop: '15px', display: 'flex', justifyContent: 'flex-start', rowGap: '20px', flexWrap: 'wrap', flexDirection: 'column' }}>
                    <p>Total: ${total}</p>
                    <p>cantidad: {producto.cantidad}un</p>
                    <div>
                        <img src={trashIcon} name={producto.id} alt="cart-widget" onClick={remove} style={{ cursor: "pointer", paddingTop: '5px', paddingRight: '15px' }} />
                    </div>

                </div>
            </div>
        </>
    );
}

CardProductCart.propTypes = {
    producto: PropTypes.node,
    cartTrue: PropTypes.node,
    onHandleCart: PropTypes.node,

}

export default CardProductCart;