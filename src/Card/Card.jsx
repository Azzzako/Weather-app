import React from "react";
import './Card.css'


export const Card = ({name, max, min, img, onClose}) => {
    return (
        <div className="card-container">
            <div className="icon-container">
                <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='weather'/>
            </div>

            
                <h2 className="info-name">{name}</h2>

                <h3 className="info-name">Max</h3>
                <h4 className="info-name"
                >{`${max}°C`}</h4>

                <h3 
                className="info-name"
                >Min</h3>
                <h4
                className="info-name"
                >{`${min}°C`}</h4>
        

            <button
            onClick={onClose}
            >X</button>
        </div>
    )
}
