import React, {useState} from 'react';
import "./favorite.scss"
function Favorite(props) {
    const [clx, setClx] = useState('clx_default')
    const changColor = () =>{
        clx==='clx_default'? setClx('clx_active') : setClx('clx_default')
    }
    return (
        <div className={clx} onClick={changColor}>♥</div>
    );
}

export default Favorite;