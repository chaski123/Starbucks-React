import React from "react";
import "../css/styles.css";

const BtnHeader = (props) =>{
    return (<a className={props.class} href={props.href}>
        {props.content}
    </a>)  
}

export default BtnHeader