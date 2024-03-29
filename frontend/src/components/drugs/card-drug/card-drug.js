import React from 'react';
import "./card-drug.scss"
function CardDrug({children, card, setToCart}) {
    if(card===undefined) return
    const image = require("../../../images/"+card.image)
    const handleAddToCart =()=>{
        setToCart(prev=>[...prev,{...card, count:1}])
         if(!localStorage.getItem('cart')) localStorage.setItem('cart',JSON.stringify([]))
        const cardStore = JSON.parse(localStorage.getItem('cart'))
        localStorage.setItem('cart',JSON.stringify([...cardStore,card]) )
    }
    return (
        <div className="drug_item">

            <img src={image} alt=""/>
            <div className="drug_item--title">
                <h1>{card.title}</h1>
                {children}
            </div>
            <h3>{card.price} грн.</h3>
            <button onClick={handleAddToCart}>Add to cart</button>
        </div>
    );
}

export default CardDrug;