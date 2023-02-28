import React from "react";
import { Card } from "../Card/Card";
import './Card.css'

export const Cards = ({cities, onClose}) => {

    return (
        <div className="Cards">
            {
                cities.map(city => {
                     return <Card
                    key={city.id}
                    name={city.name}
                    max={city.temp_max}
                    min={city.temp_min}
                    img={city.img}
                    onClose={() => onClose(city.id)}
                    /> 
                })
            }

        </div>
    )
}
