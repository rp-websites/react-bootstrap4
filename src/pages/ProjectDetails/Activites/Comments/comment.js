import React, {Component} from 'react';

import {
    Media,
    Collapse
} from 'reactstrap';

import {CommentField} from '../../../../components/CommentField/comment-field';
import './comment.css';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.toggleLike = this.toggleLike.bind(this);
        this.toggleComment = this.toggleComment.bind(this);
        this.state = {
            toggleLike: false,
            toggleComment: false,
            collapse: false,
        }
    }

    toggleLike() {
        this.setState({
            toggleLike: !this.state.toggleLike
        })
    }

    toggleComment() {
        this.setState({
            toggleComment: !this.state.toggleComment,
            collapse: !this.state.collapse
        })
    }

    render() {
        return (
            <div className="comments-wrapper">
                <Media className="comment-item flex-column">
                    <div className="item-flex align-items-start">
                        <Media className="member-active mr-3">
                            <img src={`/images/members/${this.props.item.image}`} alt={`${this.props.item.name}`}
                                 className="rounded-circle activity-img" width="40"/>
                        </Media>
                        <Media body>
                            <div className="item-flex align-items-stretch comment-content">
                                <div className="col-md-11 col-lg-10 p-0">
                                    <span className="mt-0 member-title">{this.props.item.name}</span>
                                    <span className="comment-text">{this.props.item.comment}</span>
                                    <div className="date comment-date">{this.props.item.date}</div>
                                </div>
                                <div className="comment-actions">
                                    <button className={`btn-trans ${this.state.toggleLike ? "liked" : ""}`}
                                            onClick={this.toggleLike}>
                                        <i className="icon-heart"/>
                                    </button>
                                    <button className={`btn-trans ${this.state.toggleComment ? "commented" : ""}`}
                                            onClick={this.toggleComment}>
                                        <i className="icon-comment"/>
                                    </button>
                                </div>
                            </div>
                            {
                                this.props.item.commentImage ? (
                                    <div className="comment-img">
                                        <img src={`/images/comments/${this.props.item.commentImage}`} alt="comment" width="310"/>
                                    </div>
                                ) : null
                            }
                        </Media>
                    </div>
                    <Collapse className="media reply-wrapper" isOpen={this.state.collapse}>
                        <Media className="member-active mr-2">
                            <img src={`/images/members/${this.props.item.image}`} alt={`${this.props.item.name}`}
                                 className="rounded-circle" width="30"/>
                        </Media>
                        <Media body>
                            <div className="comment-input">
                                <CommentField size="form-control-sm"/>
                                <div className="reply-actions reply-actions-sm">
                                    <button className={`btn-trans`}>
                                        <i className="icon-smile"/>
                                    </button>
                                    <button className={`btn-trans`}>
                                        <i className="icon-pic"/>
                                    </button>
                                </div>

                            </div>
                        </Media>
                    </Collapse>
                </Media>
            </div>

        )
    }

}

export default Comment;
