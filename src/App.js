import './App.css';
import { Searchbar } from './Searchbar/Serachbar';
import { useState } from 'react';
import { Cards } from './Cards/Cards';

const API_Key = 'ce7c6389c51daa2dfeb5b371d80fd15b'

function App() {

  const [city, setCity] = useState([])
  
  //Funcion para buscar la ciudad haciendo la peticion a la API,
  //Se pasa por props al componente Searchbar
    const onSearch = (city) => {
        fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric&lan=es`)
        .then(res => res.json())
        .then(data => {
          if(data.id !== undefined){
            const cities = {
                id: data.id,
                name: data.name,
                temp_max: Math.round(data.main.temp_max),
                temp_min: Math.round(data.main.temp_min),
                img: data.weather[0].icon
            }
            setCity(prevCity => [...prevCity, cities]) 
          } else {
            alert(`City not found`)
          }
        })
       
    }

    // Funcion para eliminar una Card
    const onClose = (id) => {
      setCity(cities => cities.filter(c => c.id !== id))
    }


  return (
    <div className="App">
      <Searchbar
      onSearch={onSearch}
      />

      <Cards
      onClose={onClose}
      cities={city}
      />
    </div>
  );
}

export default App;
