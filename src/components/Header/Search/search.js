import React, {Component} from 'react';
import {Collapse} from 'reactstrap';

import SearchForm from './search-form';
import './search.css';


class Search extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.toggleSplit = this.toggleSplit.bind(this);
        this.state = {
            dropdownOpen: false,
            splitButtonOpen: false,
            collapse: false
        };
    }

    toggle() {
        this.setState({
            collapse: !this.state.collapse
        });
    }

    toggleDropDown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    toggleSplit() {
        this.setState({
            splitButtonOpen: !this.state.splitButtonOpen
        });
    }

    render() {
        return (
            <div>
                <div className="search-wrapper">
                    <SearchForm isOpen={this.state.dropdownOpen}
                                toggle={this.toggleDropDown}
                                inputSize=""
                    />
                    <button className="btn-trans search-icon-sm" onClick={this.toggle}>
                        <i className="icon-search icon-search-lg"/>
                    </button>
                </div>

                <Collapse isOpen={this.state.collapse} size="lg" className="search-collapse">
                    <SearchForm isOpen={this.state.dropdownOpen}
                                toggle={this.toggleDropDown}
                                inputSize="lg"
                    />
                </Collapse>
            </div>
        )
    }

}

export default Search;

