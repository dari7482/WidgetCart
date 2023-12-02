import { useState } from 'react'
import { useEffect } from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
//import Montaje from './components/Montaje/Montaje'
import Loading from '../components/Loading/Loading'
import NavBar from '../components/NavBar/NavBar'
import Multidropdowin from '../components/multidropdown/Multidropdowin'
import ToastMesage from '../components/Toast/ToastMesage'



/*const fetchData = () => {
  return new Promise((resolve) => {
    const response = "Resuelta";
    setTimeout(() => {
      resolve(response)
    }, 2000)

  })
}*/




/*const LlamarPromise = () => {
  return new Promise((resolve) => {

    const valor = "Respuesta de la api";

    setTimeout(() => {
      resolve(valor)

    }, 3000)


  });
}*/
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
                imagen: 'src/assets/img/m422.png',
                marca: 'Bianchi',
                cantidad: '0'
            },
            {
                id: '2',
                name: 'Producto 2',
                description: 'Descripción del Producto 2',
                price: '19.99',
                stock: '50',
                categoria: 'Frenos',
                imagen: 'src/assets/img/Shimano.png',
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
                imagen: 'src/assets/img/mb1.png',
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
                imagen: 'src/assets/img/mb2.png',
                marca: 'Vairo',
                cantidad: '0'
            },
            {
                id: '6',
                name: 'Producto 3',
                description: 'Descripción del Producto 3',
                price: '7.99',
                stock: '75',
                categoria: 'Frenos',
                imagen: 'src/assets/img/t4000.png',
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
                imagen: 'src/assets/img/Ruta.png',
                marca: 'shimano',
                cantidad: '0'
            },
            {
                id: '8',
                name: 'Producto 3',
                description: 'Descripción del Producto 3',
                price: '7.99',
                stock: '75',
                categoria: 'Bicicleta',
                imagen: 'src/assets/img/Thunder.png',
                marca: 'shimano',
                cantidad: '0'
            },
            {
                id: '9',
                name: 'Frenos Shimano',
                description: 'Frenos para Montanbike',
                price: '50.000',
                stock: '100',
                categoria: 'Frenos',
                imagen: 'src/assets/img/m422.png',
                marca: 'shimano',
                cantidad: '0'

            },
            {
                id: '10',
                name: 'Producto 2',
                description: 'Descripción del Producto 2',
                price: '19.99',
                stock: '50',
                categoria: 'Frenos',
                imagen: 'src/assets/img/Shimano.png',
                marca: 'shimano',
                cantidad: '0'
            },
            {
                id: '15',
                name: 'Producto 3',
                description: 'Descripción del Producto 3',
                price: '7.99',
                stock: '75',
                categoria: 'Bicicleta',
                imagen: 'src/assets/img/mb1.png',
                marca: 'shimano',
                cantidad: '0'
            },
        ];

        setTimeout(() => {
            resolve(productos);
        }, 3000)

    });
}





function App() {

    const [data, setData] = useState('')
    const [dataFilter, setDataFilter] = useState('')
    const [addCart, setAddCart] = useState([])
    const [messega, setMessage] = useState(false)
    const [addNewProduct, setNewProduct] = useState()
    useEffect(() => {
        obtenerProductos().then(datos => {

            setData(datos);
            setTimeout(() => {

                setMessage(false)

            }, 180)

        })
    }, [messega])

    const onHandleMd = (valor, ref) => {
        console.log('196', valor, ref)


        setDataFilter(valor)
        console.log(dataFilter)


    }


    const onHandleCart = (productOncart) => {
        console.log(productOncart)
        //const productOncartAdd = []
        const counterNewProduct = productOncart[0].cantidad
        console.log(typeof (counterNewProduct))
        setNewProduct(counterNewProduct)

        // productOncartAdd.push(productOncart)
        //console.log(productOncartAdd)
        setAddCart(() => [...addCart, ...productOncart])
        productOncart ? setMessage(true) : setMessage(false)

    }



    return (
        <>

            {data ? (<>
                <NavBar className="containerApp" productos={addCart ? addCart : data} />
                {messega ? <ToastMesage message={addNewProduct === '0' ? 'Warning' : 'Success'} /> : null}

                < div className='conteinerItems' >
                    <div>
                        < ItemListContainer productos={dataFilter ? dataFilter : data} onCart={onHandleCart} />
                    </div>
                    <div style={{ width: '20vw', display: 'flex', alignItems: 'center', flexDirection: 'column', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', marginTop: '3rem', height: '35vh' }}>
                        <div >
                            < Multidropdowin productos={data} onHandleMulti={onHandleMd} datos={'prod'} title={'categoria'} all={data} />
                        </div>
                        <div>
                            < Multidropdowin productos={dataFilter ? dataFilter : data} onHandleMulti={onHandleMd} datos={'ref'} title={'precio'} all={data} />
                        </div>
                        <div>
                            < Multidropdowin productos={dataFilter ? dataFilter : data} onHandleMulti={onHandleMd} datos={'marca'} title={'marca'} all={data} />
                        </div>
                    </div>
                </div>
            </>)
                : (<Loading />)
            }

        </>
    )
}

export default App
