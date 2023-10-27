import Toast from 'react-bootstrap/Toast';
import PropTypes from 'prop-types';

function ToastMesage({ message }) {
    console.log(message)
    return (
        <>
            <div style={{ position: 'absolute', zIndex: '1', marginLeft: '60rem' }}>
                {[
                    `${message}`
                ].map((variant, idx) => (
                    <Toast
                        className="d-inline-block m-1"
                        bg={variant.toLowerCase()}
                        key={idx}
                    >
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">{message === 'Warning' ? 'Seleccione cantidad mayor a 0' : 'Nuevo Producto'}</strong>
                            <small></small>
                        </Toast.Header>
                        <Toast.Body className={variant === 'Dark' && 'text-white'}>
                            {message === 'Warning' ? 'No se Agrego al carrito de compras' : 'Agregado al carrito de compras'}
                        </Toast.Body>
                    </Toast>
                ))}
            </div>
        </>
    );

}
ToastMesage.propTypes = {
    message: PropTypes.node,

};
export default ToastMesage;
