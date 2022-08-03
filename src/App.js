import React from "react"
import Hero from "./Hero"
import Place from "./Place"
import'./style.css'
import data from "./data"

export default function App(){

    const places = data.map(item => {
        return(
            <Place
                key={item.id}
                item={item}
            />
        )
    })

    return (
        <div>
           <Hero/>
           <section className="place">
            {places}
           </section> 
        </div>
    )
}
