import React, { useState} from 'react';
import "./cart-item.scss"

function CartItem({card, changeCount, handleUpdateGoods}) {
    const goods = JSON.parse(localStorage.getItem('cart'))

    const image = require("../../../images/"+ card.image)
    const [count, setCount] = useState(1)
    const [price, setPrice] = useState(card.price*card.count)

    const handelDelete = (e)=>{
        console.log(goods)
        let changedGoods = goods.filter(good=>good._id!==card._id)
        localStorage.setItem('cart',JSON.stringify(changedGoods) )
        handleUpdateGoods()
    }
    const handleCount = (e) =>{
        e.preventDefault()
        const count = e.target.value
        setCount(count)
        const changeCard = {...card, count}
        setPrice(card.price*count)
        changeCount(changeCard)
    }
    return (
        <div className="card_item">
            <img src={image} alt=""/>
            <div className="card_item--info">
                <div className="clx_del"><span onClick={handelDelete}>X</span></div>
                <div className="clx_title">{card.title}</div>
                <div className="clx_price">{card.price}<span>*</span>{card.count}<span>=</span>{price}</div>
                <input type="number"  min="1" onChange={handleCount} value={card.count}/>
            </div>
        </div>
    );
}

export default CartItem;