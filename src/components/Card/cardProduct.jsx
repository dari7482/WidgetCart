
import './cardProduct.css'
import { useState } from 'react';
//import frenos from '../../assets/img/Shimano.png'

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



function CardProduct({ producto, cartTrue, onHandleCart }) {
    const { name, description, price, stock, imagen, categoria, id, marca } = producto


    const [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter(count => count + 1);
    };

    const decrease = () => {
        console.log(counter)

        if (counter > 0) {

            setCounter(count => count - 1);
        }
    };


    const onHandleClick = () => {



        const productosCantidad = [{

            id: id,
            name: name,
            description: description,
            price: price,
            stock: stock,
            categoria: categoria,
            imagen: imagen,
            marca: marca,
            cantidad: counter.toString()

        }]

        console.log(productosCantidad)

        onHandleCart(productosCantidad)

    }
    //reset counter 


    return (
        <>
            <div className="card">
                <img src={imagen} alt="Frenos" style={{ height: '252px' }} />
                < h4 style={{ display: 'flex', height: '40px', margin: '0px', justifyContent: 'center', alignItems: 'center' }}><Link to={`/productos/${id}`} >{name}</Link></h4>
                <p className="price1">{price}</p>
                <p style={{ margin: '0px' }}>{description}</p>
                <div className="counter">
                    <span className="counter__output">{counter}</span>
                    <div className="btn__container">
                        <button className="control__btn" onClick={increase}>+</button>
                        <button className="control__btn" onClick={decrease} >-</button>
                    </div>


                </div>
                {cartTrue ? null : <p><button value={id} onClick={onHandleClick} > Add to Cart</button></p>}

            </div>

        </>
    );
}

CardProduct.propTypes = {
    producto: PropTypes.node,
    cartTrue: PropTypes.node,
    onHandleCart: PropTypes.node
}

export default CardProduct;