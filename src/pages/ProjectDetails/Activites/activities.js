import React, {Component} from 'react';
import {
    Button
} from 'reactstrap';

import jsonData from '../../../db';
import Comment from './Comments/comment';
import {CommentField} from '../../../components/CommentField/comment-field';
import './activities.css';

class Activities extends Component {
    constructor (props) {
        super(props);
        this.state = {
            comments: true
        }
    }
    render() {
        return (
            <div className="activities-wrapper">
                <div className="item-flex">
                    <span className="title-6">Activity</span>
                    <Button color="warning" size="sm" className="activities-btn">Subscribe</Button>
                    <button className="btn-close ml-auto" onClick={this.props.close}>
                        <i className="icon-close"/>
                    </button>
                </div>

                {
                    this.state.comments ? (
                        jsonData.comments.map((item, i) => (
                            <Comment item={item} key={i} />
                        ))

                    ) : (
                        <div className="text-center activities-empty">
                            <i className="icon-box"/>
                            <p className="mt-3">No activity to show</p>
                        </div>
                    )
                }
                <div className="reply-wrapper-lg">
                    <div className="comment-input">
                        <CommentField size="form-control-lg"/>
                        <div className="reply-actions">
                            <button className={`btn-trans`}>
                                <i className="icon-smile"/>
                            </button>
                            <button className={`btn-trans`}>
                                <i className="icon-pic"/>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Activities;
