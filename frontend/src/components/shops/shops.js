import React, {useContext, useEffect, useMemo, useState} from 'react';
import "./shops.scss"
import {ShopsContext} from "../../shops-context/shopsContext";
import CardShop from "./card-shop/card-shop";
import {PROTOCOL, URLBASE, UrlGoods} from "../../ENV/env";
import {getDrugsByIdShop} from "../../services/drugs/drugServices";
import CardDrug from "../drugs/card-drug/card-drug";

const Shops = () => {
    const data = useContext(ShopsContext)
    const [shops, setShops] = useState([])
    const [drugs, setDrugs] = useState([])
    const [activeShop, setActiveShop] = useState('')
    const [toCart, setToCart] = useState([])
    // localStorage.setItem('cart', JSON.stringify(toCart));

    const url = PROTOCOL + URLBASE + UrlGoods + '/' + activeShop;
    useMemo(async () => {
            try {
                const drugsByIdShop = await getDrugsByIdShop(url)
                if (drugsByIdShop.status !== 200) throw Error('Error 200')
                setDrugs(drugsByIdShop.data.goods);
            } catch (e) {
                throw Error('Error 500')
            }
        }, [url]
    )
    useEffect(() => {
        setShops(data)
    }, [data])
    return (
        <div className="clx-content">
            <ul className="clx-content--shops">

                {
                    shops.length ? shops.map(shop =>
                        <CardShop shop={shop} key={shop._id} setActiveShop={setActiveShop}/>
                    ) : ''
                }

            </ul>
            <div className="clx-content--goods">
                {drugs.length ? drugs.map(drug => <CardDrug key={drug._id} card={drug} setToCart={setToCart}/>
                ) : ''
                }
            </div>
        </div>
    );
}

export default Shops;