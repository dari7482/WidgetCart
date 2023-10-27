import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from 'components/ExampleCarouselImage';
import slide1 from '../../assets/img/carr1.png'
import slide2 from '../../assets/img/car2.jpg'
import slide3 from '../../assets/img/car3.jpg'
import './carr.css'

function Carrosuel() {
    return (
        <>

            <Carousel style={{ width: '100vw' }}>
                <Carousel.Item>
                    <img src={slide1} className='img' />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slide2} className='img' />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slide3} className='img' />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </>


    );
}

export default Carrosuel;