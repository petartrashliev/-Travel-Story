import React from "react";
import'./style.css'

export default function Place(props){

    
    return (
        <div className="c" >
  
            <div>
            <img src={`${props.item.imageUrl}`} alt=" " className="image"  />
            </div>

                <div className="o">
                <img src={require('./map.png')} alt=" " className="map"/>
                       <span className="location">{props.item.location}</span>
                       <a className="gm" href={`${props.item.googleMapsUrl}`}>View on Google Maps</a>
                       <h1 className="title">{props.item.title}</h1>
                       <p className="date"><span>{props.item.startDate} - {props.item.endDate}</span></p>
                       <p className="dsc">{props.item.description}</p>     
                </div>
            
            
        </div>
        
       
     )
}