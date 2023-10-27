import { useEffect } from "react";
import { useState } from "react";

const Montaje = () => {

    const [valor, setValor] = useState("valor inicial")

    useEffect(() => {
        setTimeout(() => {
            const nuevoValor = "valor dsp del montaje "
            setValor(nuevoValor)
        }, 3000)
    }, [])

    return (
        <>
            <div>
                {valor}

            </div>


        </>




    );

}




export default Montaje