import { useState } from 'react';
import './Input.css';
import PropTypes from 'prop-types';


function Input({ type, label, name, handleInputChangeProp }) {
    const [value, setValue] = useState('');

    function handleChange(e) {
        setValue(e.target.value);
        console.log(e.target.name)
        handleInputChangeProp(e)


    }

    return (
        <div className="input-container">
            <input type={type} value={value} name={name} onChange={handleChange} onFocus={handleChange} style={{ width: '100%', border: '1px solid', borderColor: '#D5D8DC', marginBottom: '30px' }} />
            <label className={value && 'filled'} htmlFor={name}>
                {label}
            </label>
        </div>
    );
}

Input.propTypes = {
    type: PropTypes.node,
    label: PropTypes.node,
    name: PropTypes.node,
    handleInputChangeProp: PropTypes.node,


}

export default Input