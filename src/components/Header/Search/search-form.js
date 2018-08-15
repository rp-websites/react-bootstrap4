import React from 'react';
import {
    InputGroup,
    InputGroupButtonDropdown,
    Input,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';


const SearchForm = (props) => {

    return (
        <form className="search-form">
            <InputGroup>
                <Input placeholder="Search Projects" className="search-input input-has-icon" bsSize={props.inputSize}/>
                <i className="icon-search"/>
                <InputGroupButtonDropdown addonType="append"
                                          isOpen={props.isOpen}
                                          toggle={props.toggle}>
                    <DropdownToggle outline caret className="dropdown-btn">
                        <span>Technology</span>
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider/>
                        <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                </InputGroupButtonDropdown>
            </InputGroup>
        </form>
    )
}

export default SearchForm;

