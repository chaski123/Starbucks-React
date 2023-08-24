import React from "react";
import "../css/styles.css";

const LinksFooter = (props) =>{
    const url = 'https://www.whatsapp.com/?lang=es'
    
    return (<a className={props.class} href={props.href}>
        {props.content}
    </a>)  
}

export default LinksFooter