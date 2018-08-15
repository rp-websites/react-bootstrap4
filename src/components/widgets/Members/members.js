import React from 'react';
import { Media } from 'reactstrap';

import jsonData from '../../../db';
import './members.css';

const Members = (props) => {

    return (
        jsonData.members.map((item) => (
            <Media className="member-item" key={item.id}>
                <Media className="member-active mr-3">
                    <img src={`/images/members/${item.image}`} alt={item.name} className="rounded-circle" width="40"/>
                    {item.status ? (
                        <span className="icon-active"/>
                    ) : null}
                </Media>
                <Media body>
                    <h5 className="mt-0 member-title">{item.name}</h5>
                    <p className="member-position">{item.position}</p>
                </Media>
            </Media>
        ))
    )
}

export default Members;
