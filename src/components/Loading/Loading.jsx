import Spinner from 'react-bootstrap/Spinner';
import './loading.css'

function Loading() {
    return (

        <>
            <div className='loading'>
                <Spinner animation="border" variant="primary" />


            </div>
        </>
    );
}

export default Loading;