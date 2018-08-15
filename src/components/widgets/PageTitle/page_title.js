import React from 'react';

import {Button} from '../../Buttons/buttons';

const PageTitle = (props)=>{
    return (
        <div className="clearfix page-top">
            <h1 className="float-left page-title-1">
                {props.title}
            </h1>
            <Button className="float-right"
                    type="btn-blue"
                    text={props.button}
                    onClick={props.togglemodal}
            />
        </div>
    )


}

export default PageTitle;
