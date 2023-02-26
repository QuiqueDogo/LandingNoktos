import React from "react";
const GenericButton = ({text, action, buttonClass, icon, type}) => {
    return(
        <button className={`btn ${buttonClass}`} type={type || 'submit'}  onClick={action !== undefined? () => action() : null}> {icon !== undefined? <i className={icon}/> : ''} {text}</button>
    )
}

export default GenericButton