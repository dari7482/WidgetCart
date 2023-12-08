import { Table } from "react-bootstrap"
import PropTypes from 'prop-types';


function TableOrder(dataTabla) {
    const table = dataTabla.dataTable

    console.log(dataTabla.dataTable)
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginLeft: '15rem', marginRight: '15rem' }}>
            < Table  >
                <thead>
                    <tr>
                        <th>Categoria</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>

                    {table.map((item) => (
                        <>
                            <tr key={item.id}>

                                < td >{item.categoria}</td>
                                < td >{item.description}</td>
                                < td >{item.price}</td>
                                < td >{item.cantidad}</td>
                                < td >${parseInt(item.price) * parseInt(item.cantidad)} </td>


                            </tr>
                        </>
                    ))}
                </tbody>


            </Table >
        </div>

    )
}

TableOrder.propTypes = {
    dataTabla: PropTypes.node,

};


export default TableOrder

/*{dataTabla.map((item) => {
    < td >{item.description}</td>


})/}*/