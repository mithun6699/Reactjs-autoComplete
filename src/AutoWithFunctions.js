import React, {useState} from 'react'

function AutoWithFunctions() {
    let names = ["Mithun", "Raj", "GT"]
    const [suggestions,setSuggestions] = useState([])
    const onTextChange = (e) => {
        const value = e.target.value
        let suggestions = []
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i')
            var suggest = names
                .sort()
                .filter((i) => regex.test(i))

        }
    
        setSuggestions(() => ({suggest}))
    }
        const renderSuggestions =()=>{
            const {suggestions} = suggestions
            if (suggestions.length === 0) {
                return null
            }
            return (
                <ul>
                    {suggestions.map((i) => <li>
                        {i}
                    </li>)}

                </ul>

            )
     } 
    
    return (
<div> <input type="text" onChange={onTextChange}/>
{renderSuggestions}
      </div>
    )
}


export default AutoWithFunctions
