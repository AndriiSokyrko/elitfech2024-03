import React, {useEffect, useMemo, useState} from 'react';
import CartItem from "./cart-items/cart-item";
import "./cart.scss"
import {PROTOCOL, URLBASE, UrlHistory} from "../../ENV/env";
import {saveOrder} from "../../services/history/historyService";
import Message from "../message/message";

function Cart() {
    if(!localStorage.getItem('cart')) localStorage.setItem('cart', JSON.stringify([]))
    if(!localStorage.getItem('orders')) localStorage.setItem('orders', JSON.stringify([]))
    let goods = JSON.parse(localStorage.getItem('cart'))
    const infoStore = JSON.parse(localStorage.getItem('info'))
    const [totalPrice,setTotalPrice] =useState(0)
    const [info, setInfo] = useState(infoStore? {info:infoStore} : {info:{name:'',email:'',phone:'',address:''}})
    const [orders, setOrders] = useState({items:goods, ...info})
    const [status, setStatus] = useState(false)
    const [textMessage, setTextMessage] = useState("Orders is saved succesful!")
    const handleUpdateGoods = () =>{
        goods = JSON.parse(localStorage.getItem('cart'))
        setOrders({items:goods,...info})
    }
    const handleName =(e)=>{
        e.preventDefault()
        const part = {...info.info,name: e.target.value}
        setInfo({...info, info:part})
        localStorage.setItem('info',JSON.stringify(part))


    }
    const handleEmail =(e)=>{
        e.preventDefault()
        const part = {...info.info,email: e.target.value}
        setInfo({...info,info:part})
        localStorage.setItem('info',JSON.stringify(part))

    }
    const handlePhone =(e)=>{
        e.preventDefault()
        const part = {...info.info,phone: e.target.value}
        setInfo({...info,info:part})
        localStorage.setItem('info',JSON.stringify(part))
    }
    const handleAddress =(e)=>{
        e.preventDefault()
        const part = {...info.info,address: e.target.value}
        setInfo({...info,info:part})
        localStorage.setItem('info',JSON.stringify(part))
    }
    const handleSubmit = async ()=> {
        const url = PROTOCOL + URLBASE + UrlHistory + '/' + 'save';
        const localOrders = JSON.parse(localStorage.getItem('orders'))
        if(!orders.info.name.length || !orders.info.email.length || !orders.info.phone.length || !orders.info.address.length) {
            setStatus(true)
            setTextMessage('No address!')
            setTimeout(()=>{
                setStatus(false)
                setTextMessage("Orders is saved succesful!")
            },1000)
            return
        }
        if(!orders.items.length  ) {
            setStatus(true)
            setTextMessage('No orders! Make orders!')
            setTimeout(()=>{
                setStatus(false)
                setTextMessage("Orders is saved succesful!")
            },1000)
            return
        }
        localStorage.setItem('orders',JSON.stringify([...localOrders,orders]))
        try {
            const drugsByIdShop = await saveOrder(url, JSON.stringify(orders))
            if (drugsByIdShop.status !== 200) throw Error('Error 200')
            setStatus(true)
            localStorage.removeItem('cart')
        } catch (e) {
            throw Error('Error 500')
        }
    }
     useMemo(()=>{
         setTimeout(()=> setStatus(false),1000)
     },[status])

   const changeCount = (items) =>{
       let changedGoods = goods.map(good=>good._id===items._id?items:good)
       setOrders({...orders, items: changedGoods})
       localStorage.setItem('cart',JSON.stringify(changedGoods) )
       total(changedGoods)
   }

   const total =(goods)=>{
       const calcPrice = goods.reduce((acc, cur) =>acc +  (cur.price * cur.count) ,0)
       setTotalPrice(calcPrice)
   }
     useEffect(()=>{
         if(goods.length) {
                total(goods)
         }
     },[goods])

    return (
        <div className="clx_cart--wrapper">
            <Message status={status} text={textMessage}/>
            <div className="clx_cart">
                <div className="clx_cart--address">
                    <label htmlFor="Name">Name</label>
                    <input type="text" id="name" placeholder="Name" onChange={handleName}
                           value={infoStore ? infoStore.name : info.info.name}/>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Email" onChange={handleEmail}
                           value={infoStore ? infoStore.email : info.info.email}/>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone" placeholder="Phone" onChange={handlePhone}
                           value={infoStore ? infoStore.phone : info.info.phone}/>
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" placeholder="Address" onChange={handleAddress}
                           value={infoStore ? infoStore.address : info.info.address}/>
                </div>
                <div className="clx_cart--goods">
                    {goods.length ? orders.items.map(good =>
                        <CartItem card={good} changeCount={changeCount}  handleUpdateGoods={handleUpdateGoods} key={good._id}/>) : ''}
                </div>
            </div>
            <div className="clx_cart--footer">
                <h3 className="clx_total">Total price: {totalPrice}</h3>
                <button className="clx_submit" type="submit" onClick={handleSubmit} >Submit</button>
            </div>
        </div>

    );
}

export default Cart;