import React, {Component} from 'react';
import ContentEditable from 'react-contenteditable';

import './comment-field.css';

class CommentField extends Component {
    constructor(props) {
        super(props);
        this.state = {html: ""};
    };

    handleChange = evt => {
        this.setState({html: evt.target.value});
    };

    render = () => {
        return <ContentEditable
            className={`form-control ${this.props.size}`}
            placeholder="Write a reply..."
            html={this.state.html}
            disabled={false}
            onChange={this.handleChange}
            tagName='div'
        />
    };
}

export {CommentField};