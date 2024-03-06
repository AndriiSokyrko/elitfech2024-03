import React from 'react';
import "./message.scss"
function Message({text, status}) {
    const clx_message = status ? 'clx_show' : 'clx_hide'
    return (
        <h1 className={clx_message}>{text}</h1>
    );
}

export default Message;