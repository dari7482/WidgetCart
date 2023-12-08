import { useState } from 'react'
import { useEffect } from 'react'
import { collection, getDocs, getFirestore, /*setDoc,*/ /*addDoc, updateDoc, doc, writeBatch*/ } from "firebase/firestore"
import { app } from "../db/config"

export default function useGetDataOrder() {

    const [dataOrder, setDataOrder] = useState()
    //const [isLoading, setIsLoading] = useState(true)
    const db = getFirestore(app);

    useEffect(() => {

        const biciRef = collection(db, "orders");
        getDocs(biciRef).then((snapshot) => {
            if (snapshot.size !== 0) {
                setTimeout(() => {
                    const productsList = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    }))
                    //setIsLoading(false)
                    setDataOrder(productsList)
                    console.log(productsList)

                }, 6000)
            } else {
                console.log("item no encontrado")
            }
        })

    }, [])

    return [dataOrder]

}




