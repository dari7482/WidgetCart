
import './Productos.css';
import { useState, useEffect } from 'react';
import NavBar from "../components/NavBar/NavBar";
import Loading from '../components/Loading/Loading';
import { useParams } from 'react-router-dom';
import useGetData from '../customHook/GetDb'


function Productos() {
    const [data, isLoading] = useGetData()
    const { id } = useParams()
    console.log(id)
    console.log(data, isLoading)

    const [dataProduct, setData] = useState('')

    useEffect(() => {
        if (!isLoading) {
            console.log(data)
            const filterData = data.filter(item => item.id === id)
            console.log(filterData)
            const filterDataObject = [{
                ...filterData[0],
                img: `../../${filterData[0].imagen}`,
                //'../../src/assets/img/m422.png'


            }]
            console.log(filterDataObject)

            setData(filterDataObject);
            console.log(data)
        }

    }, [data])





    return (
        <>
            <NavBar />
            {!isLoading ? (<>
                < h2 style={{ display: 'flex', height: '40px', margin: '0px', justifyContent: 'center', alignItems: 'center' }}>{dataProduct === "" ? "" : dataProduct[0].name}</h2>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '60vh' }}>
                    <div className="card1">
                        <div style={{ display: 'flex', height: '400px', marginTop: '50px' }}>
                            <div className="img-zoom-container">
                                <img id="image" src={dataProduct === "" ? "" : dataProduct[0].img} alt="Frenos" style={{ height: '252px' }} />
                            </div >
                            <div>
                                <p className="price">Precio: ${dataProduct === "" ? "" : dataProduct[0].price}</p>
                                <p className="price">Descripcion: {dataProduct === "" ? "" : dataProduct[0].description}</p>
                                <p className="price">Categoria: {dataProduct === "" ? "" : dataProduct[0].categoria}</p>
                                <p className="price">Stock: {dataProduct === "" ? "" : dataProduct[0].stock} unidad/unidades</p>

                            </div>

                        </div>
                    </div>
                </div></>) : (<Loading />)}

        </>
    )
}

export default Productos
