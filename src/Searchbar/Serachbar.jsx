import React, {useState} from "react";
import './Searchbar.css'
import Select from 'react-select'


export const Searchbar = ({onSearch}) => {

    // Estado para mandarle como parametro la ciudad a la funcion onSearch y asi hacer la peticion a la API
    const [city, setCity] = useState('')

    //Opciones para React-Select
    const options = [
        {value: 'MX', label: 'Mexico'},
        {value: 'US',label: 'United States'},
    ]
        
    
    
    return (
            <form
            className="searchbar-container"
            onSubmit={e => {
                e.preventDefault();
                onSearch(city)
                setCity('')
            }}>
                <h1 className="title">Search City</h1>

                <Select 
                options={options}
                />

                <input
                className="input-entry"
                type="text"
                placeholder="Search city..."
                value={city}
                onChange={event => setCity(event.target.value)}
                />

                

                <input
                className="input-submit"
                type="submit"
                value="Search"
                />
            </form>
    )
}
