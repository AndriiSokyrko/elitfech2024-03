import './App.scss';
import AppRouters from "./app-routers/appRouters";
import Menu from "./components/menues/menu";
import {useEffect, useState} from "react";

import {ShopsContext} from "./shops-context/shopsContext";
import {PROTOCOL, URLBASE, UrlShops} from "./ENV/env";
import {shopsAll} from "./services/services";
import "./App.scss"
function App() {
    const url = PROTOCOL+URLBASE+UrlShops;
    const [shops, setShops] =useState([])

    useEffect(()=>{
         shopsAll(url).then(responce => {
             if(responce.status !== 200){
                 throw Error('Error 200')
             }
             const result = responce.data.shops
             setShops(result)
         })
    },[setShops, url])

    return (
        <ShopsContext.Provider value={shops}>
            <div className="App">
                <header>
                    <Menu />
                </header>
                <AppRouters />
            </div>
        </ShopsContext.Provider>
    );
}


export default App;
