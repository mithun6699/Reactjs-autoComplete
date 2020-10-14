import React, {useState} from 'react'

function InputText() {
    const [name, setName] = useState([])

    const NameChange = (e) => {

        setName(e.target.value)

    }
    return (
        <div>
            <input type="text" placeholder="Some Name" value={name} onChange={NameChange}/> 
    <button>{name}</button>
        </div>
    )
}

export default InputText
