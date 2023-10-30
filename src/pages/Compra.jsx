
import "./tarjeta.css"
import Cards from "react-credit-cards"
import 'react-credit-cards/es/styles-compiled.css';
import Input from "../components/Input/input";
import './Compra.css';
import { useState } from "react";
import NavBar from "../components/NavBar/NavBar";

function Compra() {
    const [stateName, setStateName] = useState('')
    const [stateNumber, setStateNumber] = useState('')
    const [stateCvc, setStateCvc] = useState('')
    const [stateExpiry, setStateExpiry] = useState('')
    const [stateFocus, setStateFocus] = useState('')

    const handleInputChange = (e) => {
        console.log(e.target.value, e.target.name)
        if (e.target.name === 'name') {
            setStateName(e.target.value)
        } if (e.target.name === 'number') {

            setStateNumber(e.target.value)
        } if (e.target.name === 'cvc') {
            setStateCvc(e.target.value)
        } if (e.target.name === 'expiry') {

            setStateExpiry(e.target.value)
        }


    }

    const handleFocusChange = (e) => {

        setStateFocus(e.target.name)

    }


    return (
        <>
            <NavBar />
            <div style={{ display: 'flex', justifyContent: 'center', height: '80vh', alignItems: 'center', marginTop: '150px' }}>
                <div className="card" style={{ width: '800px' }} >
                    <div className="card-body" >
                        <div style={{ paddingTop: '50px' }} >
                            <Cards
                                cvc={stateCvc}
                                expiry={stateExpiry}
                                focused={stateFocus}
                                name={stateName}
                                number={stateNumber}

                            />
                        </div>

                        <form >

                            <div >
                                <Input
                                    type="text"
                                    name="name"
                                    label="First Name"
                                    handleInputChangeProp={handleInputChange}
                                    handleFocusChangeProp={handleFocusChange}
                                />
                            </div>
                            <div >
                                <Input
                                    type="text"
                                    name="number"
                                    label="Number"
                                    handleInputChangeProp={handleInputChange}
                                    handleFocusChangeProp={handleFocusChange}

                                />
                            </div>
                            <Input
                                type="text"
                                name="expiry"
                                label="Expiry"
                                handleInputChangeProp={handleInputChange}
                                handleFocusChangeProp={handleFocusChange}

                            />
                            <Input
                                type="text"
                                name="cvc"
                                label="CVC"
                                handleInputChangeProp={handleInputChange}
                                handleFocusChangeProp={handleFocusChange}

                            />

                            <button type="button" className="btn btn-success btn-block btn-lg">Pagar</button>

                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Compra
