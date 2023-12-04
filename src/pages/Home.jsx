import { useState, useEffect } from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import Loading from '../components/Loading/Loading'
import NavBar from '../components/NavBar/NavBar'
import ToastMesage from '../components/Toast/ToastMesage'
import useGetData from '../customHook/GetDb'



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


    const onHandleCart = (productOncart, action) => {


        console.log(productOncart)
        //const productOncartAdd = []
        if (action === 'add') {
            const counterNewProduct = productOncart[0].cantidad
            console.log(typeof (counterNewProduct))
            setNewProduct(counterNewProduct)

            // productOncartAdd.push(productOncart)
            //console.log(productOncartAdd)
            setAddCart(() => [...addCart, ...productOncart])
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
                <div>
                    < ItemListContainer productos={dataFilter ? dataFilter : data} onCart={onHandleCart} />
                </div>

            </>)
                : (<Loading />)
            }
        </>
    )
}

export default App
