import CardProduct from "../Card/cardProduct"
import PropTypes from 'prop-types';





const ItemListContainer = ({ productos, onCart }) => {


    return (
        <>
            <div className="ContainerWelcome">
                {productos.map(producto => <CardProduct key={producto.id} producto={producto} cartTrue={false} onHandleCart={onCart} />)}
            </div>

        </>

    )




}

ItemListContainer.propTypes = {
    productos: PropTypes.node,
    onCart: PropTypes.node,
};


export default ItemListContainer