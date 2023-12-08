import { useState } from 'react'
import { useEffect } from 'react'
import { collection, getDocs, getFirestore, /*setDoc,*/ /*addDoc, updateDoc, doc, writeBatch*/ } from "firebase/firestore"
import { app } from "../db/config"

export default function useGetDataUser() {

    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const db = getFirestore(app);

    useEffect(() => {

        const biciRef = collection(db, "user");
        getDocs(biciRef).then((snapshot) => {
            if (snapshot.size !== 0) {
                setTimeout(() => {
                    const productsList = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    }))
                    setIsLoading(false)
                    setData(productsList)
                    console.log(productsList)

                }, 6000)
            } else {
                console.log("item no encontrado")
            }
        })

    }, [])

    return [data, isLoading]

}




