import React, { Component } from 'react';
import { Collapse } from 'reactstrap';

import Members from '../../widgets/Members/members';
import './sidebar.css';

class Sidebar extends Component {


    render() {
        return (
            <Collapse isOpen={this.props.sidebarToggleClass} className="sidebar-fixed">
                <div className="sidebar-inner">
                    <div className="members-wrapper">
                        <span>Members</span>
                        <button className="btn-close" onClick={this.props.sidebarToggle}>
                            <i className="icon-close"/>
                        </button>
                    </div>
                    <div>
                        <Members />
                    </div>
                </div>
            </Collapse>
        );
    }
}

export default Sidebar;