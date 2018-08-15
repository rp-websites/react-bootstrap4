import React, {Component} from 'react';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
} from 'reactstrap';

import Sidebar from './Sidebar/sidebar';
import NavCollapse from './NavCollapse/nav_collapse';
import './header.css';

class Header extends Component {

    render() {
        return (
            <header>
                <div className="header-inner fixed-top">
                    <NavCollapse className="visible-xs nav-xs"
                                 isOpen={this.props.onOpenCollapse}
                                 pageTipClass={this.props.onHideTipClass}
                                 onClickTip={this.props.onHideTip}
                                 activePage={this.props.activePage}
                                 hasTip={this.props.hasTip}
                    />
                    <div className={`container`}>
                        <Navbar light expand="md">
                            <NavbarToggler onClick={this.props.onClickNav}/>
                            <NavbarBrand href="/">
                                <img src="/images/logo.svg" alt="Logo" width="100px"/>
                            </NavbarBrand>
                            <NavCollapse className="visible-lg hide-search"
                                         isOpen={this.props.onOpenCollapse}
                                         pageTipClass={this.props.onHideTipClass}
                                         onClickTip={this.props.onHideTip}
                                         activePage={this.props.activePage}
                                         hasTip={this.props.hasTip}
                            />
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/" className="avatar-wrapper">
                                        <img className="avatar-img rounded-circle" src="/images/avatar.jpg" width="40" alt="avatar"/>
                                        <span>Pedro Sttau</span>
                                    </NavLink>
                                </NavItem>
                                <Button className="btn-sidebar" onClick={this.props.sidebarToggle}>
                                    <i className="icon-dots"/>
                                </Button>
                            </Nav>
                        </Navbar>
                    </div>
                </div>
                <Sidebar sidebarToggle={this.props.sidebarToggle}
                         sidebarToggleClass={this.props.sidebarToggleClass}/>
            </header>
        );
    }

}

export default Header;