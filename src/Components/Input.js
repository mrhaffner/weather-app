import React, { useState } from 'react';

const Input = (props) => {
    const { setCity } = props

    const [input, setInput] = useState('')

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }
    
    const submitItem = (e) => {
        e.preventDefault();
        setCity(input)
    }

    return (
        <div>
            <form onSubmit={submitItem}>
                <label htmlFor="">Enter City</label><br/>
                <input type="text" value={input} onChange={handleInputChange} /><br/> 
                <button>Get Weather</button>
            </form>
        </div>
    );
};

export default Input;