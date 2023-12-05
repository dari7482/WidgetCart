
import { app } from "../db/config"
import { collection, getDocs, getFirestore, /*setDoc,*/ addDoc/*, updateDoc, doc, writeBatch*/ } from "firebase/firestore"
import { useState } from "react";

const productos = [
    {
        id: '30',
        name: 'Cubierta',
        description: 'Carrera',
        price: '500',
        stock: '100',
        categoria: 'Repuestos',
        imagen: 'src/assets/img/cubierta1.png',
        marca: 'Bianchi',
        cantidad: '0'
    },
    {
        id: '31',
        name: 'Herramientas',
        description: 'Corta cadena',
        price: '19.99',
        stock: '50',
        categoria: 'Repuesto',
        imagen: 'src/assets/img/herramienta.png',
        marca: 'shimano',
        cantidad: '0'

    },
    {
        id: '32',
        name: 'Cubiertas',
        description: 'Cubiertas Carrea',
        price: '7.99',
        stock: '75',
        categoria: 'Repuestos',
        imagen: 'src/assets/img/cubierta2.png',
        marca: 'shimano',
        cantidad: '0'
    },

    {
        id: '34',
        name: 'Inflador',
        description: 'Inflador',
        price: '7.99',
        stock: '75',
        categoria: 'Repuestos',
        imagen: 'src/assets/img/inflador.png',
        marca: 'Thunder',
        cantidad: '0'
    },
    {
        id: '35',
        name: 'Calza',
        description: 'Calza',
        price: '2007.99',
        stock: '75',
        categoria: 'Indumentaria',
        imagen: 'src/assets/img/calza.png',
        marca: 'shimano',
        cantidad: '0'
    },

];


function App() {

    const [data, setData] = useState()


    const db = getFirestore(app);
    const biciRef = collection(db, "items");
    const getData = () => {
        getDocs(biciRef).then((snapshot) => {
            if (snapshot.size !== 0) {
                setTimeout(() => {
                    const productsList = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    }))

                    setData(productsList)
                    console.log(productsList)

                }, 6000)



            } else {
                console.log("item no encontrado")

            }
        })
    }

    const submitItems = () => {
        const biciRef = collection(db, "items");
        console.log(productos)
        productos.map((producto) => {
            addDoc(biciRef, producto).then((response) => {
                console.log("documento generado,id:", response.id)
            })
        })
    }
    return (
        <>
            <button onClick={getData}> data</button>
            <button onClick={submitItems}> add</button>
        </>
    )
}

export default App
