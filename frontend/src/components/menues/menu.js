import React from 'react';
import "./menu.scss"
function Menu(props) {
    return (
        <nav className="clx_menu">
            <a href="./shops"><h1>Shops</h1></a>
            <a href="./cart"><h1>Shopping cart</h1></a>

        </nav>
    );
}

export default Menu;