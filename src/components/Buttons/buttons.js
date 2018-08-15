import React from 'react';
import {Link} from 'react-router-dom';

import './buttons.css';

const Button = (props) => {
    let template = null;

    switch(props.type){
        case 'google':
            template = (
                <Link to="/" className="btn btn-red btn-has-icon signin-btn">
            <i className={props.icon}/>
    <span>{props.text}</span>
    </Link>
            )
            break;
        case 'btn-blue':
            template = (
                <button className={`${props.className} btn btn-blue`} onClick={props.onClick}>
                    <span>{props.text}</span>
                </button>
            )
            break;
        default: template = null;
    }
    return template;
}

export {Button};


