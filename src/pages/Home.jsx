import { useState, useEffect } from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import Loading from '../components/Loading/Loading'
import NavBar from '../components/NavBar/NavBar'
import ToastMesage from '../components/Toast/ToastMesage'
import useGetData from '../customHook/GetDb'
import Multidropdowin from '../components/multidropdown/Multidropdowin'



function App() {
    const [data, isLoading] = useGetData()

    //const [data, setData] = useState('')
    const [dataFilter, setDataFilter] = useState('')
    const [addCart, setAddCart] = useState([])
    const [messega, setMessage] = useState(false)
    const [addNewProduct, setNewProduct] = useState()


    useEffect(() => {

        setTimeout(() => {

            setMessage(false)

        }, 600)


    }, [messega])
    const onHandleMd = (valor, ref) => {
        console.log('196', valor, ref)


        setDataFilter(valor)
        console.log(dataFilter)


    }



    const onHandleCart = (productOncart, action) => {


        console.log(productOncart)
        //const productOncartAdd = []
        if (action === 'add') {
            const counterNewProduct = productOncart[0].cantidad
            console.log(typeof (counterNewProduct))
            setNewProduct(counterNewProduct)

            const totalProduct = [...addCart, ...productOncart]
            console.log(totalProduct)
            const unifiedArray = totalProduct.reduce((acc, currentItem) => {
                const existingItem = acc.find(item => item.id === currentItem.id);

                if (existingItem) {
                    // Si el elemento ya existe, se actualiza el stock sumando el nuevo valor al existente
                    existingItem.cantidad = parseInt(currentItem.cantidad) + parseInt(existingItem.cantidad)

                } else {
                    // Si el elemento no existe, se agrega al array
                    acc.push(currentItem);
                }

                return acc;
            }, []);
            console.log(unifiedArray)

            setAddCart(() => unifiedArray)
            productOncart ? setMessage(true) : setMessage(false)
        } else {
            console.log(addCart)
            console.log(productOncart)

            const productRemove = addCart.filter(items => items.id !== productOncart.id)
            console.log(productRemove)
            setAddCart(productRemove)

        }

    }
    return (
        <>
            {!isLoading ? (<>
                <NavBar className="containerApp" productos={addCart ? addCart : data} onCart={onHandleCart} />
                {messega ? <ToastMesage message={addNewProduct === '0' ? 'Warning' : 'Success'} /> : null}
                < div className='conteinerItems' >
                    <div>
                        < ItemListContainer productos={dataFilter ? dataFilter : data} onCart={onHandleCart} />
                    </div>
                    <div style={{ width: '20vw', display: 'flex', alignItems: 'center', flexDirection: 'column', boxShadow: 'rgba(0.35, 0.35, 0.35, 0.35) 0px 5px 15px', marginTop: '3rem', height: '45vh', marginBottom: '20px' }}>
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
