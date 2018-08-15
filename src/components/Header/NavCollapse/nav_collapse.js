import React from 'react';
import {
    Collapse,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import PageTip from '../PageTip/page_tip'
import Search from '../Search/search';

const NavCollapse = (props) => {
    return (

        <Collapse isOpen={props.isOpen} navbar className={props.className}>
            <Nav className="mr-auto">
                <NavItem>
                    <NavLink href="/ideas" className={props.activePage === 'ideas' ? 'active' : ''}>
                        <i className="icon-idea icon-space-l"/>
                        Ideas
                    </NavLink>
                    {(props.hasTip && props.activePage === "ideas") ? (
                        <PageTip page="ideas" className={props.pageTipClass} onClick={props.onClickTip}/>
                    ) : null}
                </NavItem>
                <NavItem>
                    <NavLink href={`${process.env.PUBLIC_URL}/projects`} className={props.activePage === 'projects' ? 'active' : ''}>
                        <i className="icon-projects icon-space-l"/>
                        Projects
                    </NavLink>
                    {(props.hasTip && props.activePage === "projects") ? (
                        <PageTip page="projects" className={props.pageTipClass} onClick={props.onClickTip}/>
                    ) : null}

                </NavItem>
            </Nav>
            <Search/>
        </Collapse>
    )


}

export default NavCollapse;

