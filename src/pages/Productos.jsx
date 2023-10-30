
import './Productos.css';
import { useState, useEffect } from 'react';
import NavBar from "../components/NavBar/NavBar";
import Loading from '../components/Loading/Loading';
import { useParams } from 'react-router-dom';

const obtenerProductos = () => {

    return new Promise((resolve) => {

        const productos = [
            {
                id: '1',
                name: 'Frenos Shimano',
                description: 'Frenos para Montanbike',
                price: '50.000',
                stock: '100',
                categoria: 'Frenos',
                imagen: '/../src/assets/img/m422.png',
                marca: 'Bianchi',
                cantidad: '0',
                peso: '130kg'
            },
            {
                id: '2',
                name: 'Producto 2',
                description: 'Descripción del Producto 2',
                price: '19.99',
                stock: '50',
                categoria: 'Frenos',
                imagen: '/../src/assets/img/Shimano.png',
                marca: 'shimano',
                cantidad: '0'


            },
            {
                id: '4',
                name: 'Producto 3',
                description: 'Descripción del Producto 3',
                price: '7.99',
                stock: '75',
                categoria: 'Bicicleta',
                imagen: '/../src/assets/img/mb1.png',
                marca: 'shimano',
                cantidad: '0'
            },
            {
                id: '5',
                name: 'Producto 3',
                description: 'Descripción del Producto 3',
                price: '178.99',
                stock: '75',
                categoria: 'Bicicleta',
                imagen: '/../src/assets/img/mb2.png',
                marca: 'Vairo',
                cantidad: '0',
                peso: '130kg'
            },
            {
                id: '6',
                name: 'Producto 3',
                description: 'Descripción del Producto 3',
                price: '7.99',
                stock: '75',
                categoria: 'Frenos',
                imagen: '/../src/assets/img/t4000.png',
                marca: 'Thunder',
                cantidad: '0'
            },
            {
                id: '7',
                name: 'Producto 3',
                description: 'Descripción del Producto 3',
                price: '2007.99',
                stock: '75',
                categoria: 'Bicicleta',
                imagen: '/../src/assets/img/Ruta.png',
                marca: 'shimano',
                cantidad: '0',
                peso: '130kg',
            },
            {
                id: '8',
                name: 'Producto 3',
                description: 'Descripción del Producto 3',
                price: '7.99',
                stock: '75',
                categoria: 'Bicicleta',
                imagen: '/../src/assets/img/Thunder.png',
                marca: 'shimano',
                cantidad: '0',
                peso: '130kg'
            },
            {
                id: '9',
                name: 'Frenos Shimano',
                description: 'Frenos para Montanbike',
                price: '50.000',
                stock: '100',
                categoria: 'Frenos',
                imagen: '/../src/assets/img/m422.png',
                marca: 'shimano',
                cantidad: '0',
                peso: ''

            },
            {
                id: '10',
                name: 'Producto 2',
                description: 'Descripción del Producto 2',
                price: '19.99',
                stock: '50',
                categoria: 'Frenos',
                imagen: '/../src/assets/img/Shimano.png',
                marca: 'shimano',
                cantidad: '0',
                peso: ''
            },
            {
                id: '15',
                name: 'Producto 3',
                description: 'Descripción del Producto 3',
                price: '7.99',
                stock: '75',
                categoria: 'Bicicleta',
                imagen: '/../src/assets/img/mb1.png',
                marca: 'shimano',
                cantidad: '0'
            },
        ];

        setTimeout(() => {
            resolve(productos);
        }, 3000)

    });
}

function Productos() {
    const { id } = useParams()
    console.log(id)

    const [data, setData] = useState('')

    useEffect(() => {
        obtenerProductos().then(datos => {
            const filterData = datos.filter(item => item.id === id)
            console.log(filterData)
            setData(() => filterData);


        })

        console.log(data)

    }, [])



    return (
        <>
            <NavBar />
            {data ? (<>
                < h2 style={{ display: 'flex', height: '40px', margin: '0px', justifyContent: 'center', alignItems: 'center' }}>{data[0].name}</h2>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '60vh' }}>


                    <div className="card1">

                        <div style={{ display: 'flex', height: '400px', marginTop: '50px' }}>
                            <div className="img-zoom-container">
                                <img id="image" src={data[0].imagen} alt="Frenos" style={{ height: '252px' }} />
                                <div id="myresult" className="img-zoom-result"></div>
                            </div>
                            <div style={{ widht: '100 %', alignItems: 'flex-start', marginLeft: '50px', marginTop: '30px' }}>

                                <p className="price">Precio: ${data[0].price}</p>
                                <p className="price">Descripcion: {data[0].description}</p>
                                <p className="price">Categoria: {data[0].categoria}</p>
                                <p className="price">Stock: {data[0].stock} unidad/unidades</p>
                            </div>
                        </div>
                    </div>
                </div></>) : (<Loading />)}

        </>
    )
}

export default Productos
