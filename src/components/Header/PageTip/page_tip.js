import React from 'react';
import {Button} from 'reactstrap';

import './page_tip.css';


const PageTip = (props) => {

    return (
        <div className={`tip-wrapper arrow-box-l ${props.className}`}>
            <h2 className="tip-title">{props.page}</h2>
            <p>If your idea gets voted up, it becomes a project here</p>
            <Button color="warning" className={`tip-btn`} onClick={props.onClick}>Got it!</Button>
        </div>
    )
}

export default PageTip;

