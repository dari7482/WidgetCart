import { useState, useEffect } from 'react';
import 'react-credit-cards/es/styles-compiled.css';
import './Compra.css';
import NavBar from "../components/NavBar/NavBar";
import GetDataUser from '../customHook/GetUserData'
import GetDataOrder from '../customHook/GetUserOrder'
import { useLocation } from 'react-router-dom';
import Loading from '../components/Loading/Loading';



function Data() {
    //const { id } = useParams()
    const [data, isLoading] = GetDataUser()
    const [dataOrder] = GetDataOrder()
    const [dataProduct, setData] = useState('')
    const [dataProductOrder, setDataOrder] = useState('')

    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    console.log(pathSegments)

    const lastTwoParams = pathSegments.slice(-2)
    console.log(lastTwoParams)
    const carrito = lastTwoParams[0]


    console.log(data)

    useEffect(() => {
        if (!isLoading) {
            console.log(data)
            const filterData = data.filter(item => item.id === carrito)
            console.log(filterData)
            setData(filterData)
            console.log(dataOrder)
            const filterDataUser = dataOrder.filter(item => item.id === carrito)
            console.log(filterDataUser[0].items)
            setDataOrder(filterDataUser)


        }

    }, [data, dataOrder])
    return (
        <>
            <NavBar />
            {!isLoading ? (<>
                <div style={{ display: 'flex', justifyContent: 'center', height: '40vh', alignItems: 'center', marginTop: '50px' }}>
                    <div className="card" style={{ width: '800px' }} >
                        <div className="card-body" >
                            <div>
                                <h3>Datos De la Compra </h3>
                                <p className="price">Nombre: {dataProduct === "" ? "" : dataProduct[0].name}</p>
                                <p className="price">Mail: {dataProduct === "" ? "" : dataProduct[0].email}</p>
                                <p className="price">Telefono {dataProduct === "" ? "" : dataProduct[0].phone}</p>
                                <p className="price">unidades {dataProductOrder === "" ? "" : dataProductOrder[0].total.cantidad}</p>
                                <p className="price">$ {dataProductOrder === "" ? "" : dataProductOrder[0].total.total}</p>
                            </div>
                        </div>

                    </div>




                </div></>) : (<Loading />)
            }





        </>
    )
}

export default Data
