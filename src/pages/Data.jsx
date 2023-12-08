import "./tarjeta.css"
import 'react-credit-cards/es/styles-compiled.css';
import Input from "../components/Input/input";
import './Compra.css';
import { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import { collection, getFirestore, addDoc } from "firebase/firestore"
import { useNavigate } from 'react-router-dom';
import { app } from "../db/config.jsx"
import { useParams } from 'react-router-dom';

function Data() {
    const { id } = useParams()
    const navigate = useNavigate();

    const [dataForm, setDataForm] = useState({
        nombre: '',
        telefono: '',
        email: ''
    })
    console.log(id)
    const handleInputChange = (e) => {
        console.log(e.target.value, e.target.name)
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })

    }


    const onSubmitForm = (event) => {
        event.preventDefault()
        const db = getFirestore(app);
        const users = collection(db, "user")
        //const order = collection(db, "orders", id)
        console.log(1)
        const user = {
            id: id,
            name: `${dataForm.nombre}`,
            phone: `${dataForm.telefono}`,
            email: `${dataForm.email}`,

        }

        console.log(user)
        //setDoc(doc(db, "orders", id), user)
        addDoc(users, user).then((response) => {
            console.log("documento generado,id:", response.id)
            const orderid = response.id
            navigate(`/Compra/${id}/${orderid}`)
        })
    }

    return (
        <>
            <NavBar />
            <div style={{ display: 'flex', justifyContent: 'center', height: '80vh', alignItems: 'center', marginTop: '50px' }}>
                <div className="card" style={{ width: '800px' }} >
                    <div className="card-body" >
                        <form onSubmit={(event) => onSubmitForm(event)}>
                            <div >
                                <Input
                                    type="text"
                                    name="nombre"
                                    label="Nombre"
                                    handleInputChangeProp={evt => handleInputChange(evt)}

                                />
                            </div>
                            <div >
                                <Input
                                    type="text"
                                    name="telefono"
                                    label="Telefono"
                                    handleInputChangeProp={evt => handleInputChange(evt)}
                                />
                            </div>
                            <Input
                                type="text"
                                name="email"
                                label="Email"
                                handleInputChangeProp={evt => handleInputChange(evt)}
                            />
                            <button type="submit" className="btn btn-success btn-block btn-lg">ir a Pagar</button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Data
