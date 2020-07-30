import React from 'react';


import './cards.css'

const Cards = ({cards}) => {
    let styles = {
        display: "flex",
        flexDirection: "row-reverse"
    };
    return (
        <div className="container">
            {
            cards.map((element) => (
                <div className="cards">
                    <div className= "cardsImage">
                        <img 
                        src={element.image}
                        alt="image"
                        className="image"
                        />
                    </div>
                    <div className={"cardsContent" + element.position}>
                        <h3>{element.title}</h3>
                        <p>{element.description}</p>
                        <button type="button" class="btn btn-dark">{element.buttonText}&ensp; &#8608;</button>
                    </div>
                </div>
                 ))
            }
        </div>
    )
}

export default Cards