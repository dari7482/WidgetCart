
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import FormSelect from 'react-bootstrap/FormSelect'
function Multidropdowin({ productos, onHandleMulti, all, datos, title }) {
    const [valor, setData] = useState('')

    console.log(datos)
    const [categoriaItem, setCategoria] = useState([])
    const categoria = () => {

        if (datos === 'prod') {
            const categoriaSelction = productos.map(item => item.categoria)
            const categoriaSelctionUnicos = [...new Set(categoriaSelction)]
            setCategoria(categoriaSelctionUnicos)
        } if (datos === 'ref') {
            console.log(productos)
            const categoriaSelction = productos.map(item => item.price)

            const categoriaSelctionUnicos = [...new Set(categoriaSelction)]
            console.log(categoriaSelction)
            setCategoria(categoriaSelctionUnicos)


        }
        if (datos === 'marca') {
            console.log(productos)
            const categoriaSelction = productos.map(item => item.marca)

            const categoriaSelctionUnicos = [...new Set(categoriaSelction)]
            console.log(categoriaSelction)
            setCategoria(categoriaSelctionUnicos)


        }

    }

    const onHandle = (e) => {
        console.log(e.target.value)
        if (e.target.value === 'title') {
            onHandleMulti(all, 'all')

        } else {

            if (datos === 'prod') {
                const filterByCategoria = productos.filter(item => item.categoria === e.target.value)
                setData(filterByCategoria)
                console.log(valor)

                onHandleMulti(filterByCategoria, 'prod')

            } if (datos === 'ref') {
                const filterByCategoria = productos.filter(item => item.price === e.target.value)
                setData(filterByCategoria)
                console.log(filterByCategoria)
                onHandleMulti(filterByCategoria, 'price')

            }
            if (datos === 'marca') {
                const filterByCategoria = productos.filter(item => item.marca === e.target.value)
                setData(filterByCategoria)
                console.log(filterByCategoria)
                onHandleMulti(filterByCategoria, 'price')

            }
        }
    }

    useEffect(() => {
        categoria()
    }, [productos])


    return (
        <div className='ContainerDrop'>
            <FormSelect aria-label="Default select example" onChange={onHandle} >

                <option value={'title'}>{title}</option>
                {categoriaItem.map(item =>
                    <option key={item} value={item}  >{item}</option>
                )}

            </FormSelect>
        </div>
    );
}

Multidropdowin.propTypes = {
    productos: PropTypes.node,
    onHandleMulti: PropTypes.node,
    datos: PropTypes.node,
    title: PropTypes.node,
    all: PropTypes.node,

}


export default Multidropdowin;