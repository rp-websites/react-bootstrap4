import React, {Component} from 'react';

import Header from '../../Header/header';
import './layout.css'

class Layout extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.hideTip = this.hideTip.bind(this);
        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            modal: false,
            isOpen: false,
            class: false,
            activePage: this.props.page,
            hasTip: this.props.tip,
            sidbarPushCollapsed: false
        };

    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    toggleModal() {
        this.setState({
            modal: !this.state.modal
        });
    }
    hideTip() {
        this.setState({
            class: "d-none"
        });
    }

    toggleSidebar() {
        let pushClass = !this.state.sidbarPushCollapsed;
        this.setState({
            collapse: !this.state.collapse,
            sidbarPushCollapsed: pushClass
        });
    }

    renderPageLayout() {

        if (this.props.type === 'auth') {
            return (
                <div>
                    <Header
                        onClickNav={this.toggle}
                        onOpenCollapse={this.state.isOpen}
                        onHideTip={this.hideTip}
                        onHideTipClass={this.state.class}
                        sidebarToggle={this.toggleSidebar}
                        sidebarToggleClass={this.state.collapse}
                        activePage={this.state.activePage}
                        hasTip={this.state.hasTip}
                    />
                    <div className={`push-content ${(this.state.sidbarPushCollapsed) ? "push-left" : ""}`}>
                        {this.props.children}
                    </div>
                </div>
            );
        } else {
            return (
                <div className="not-auth">
                    {this.props.children}
                </div>
            );
        }
    }

    render() {

        return (
            <div>
                {this.renderPageLayout()}
            </div>
        )
    }
}


export default Layout;
