import React, {Component} from 'react';
import {
    Badge,
    Media,
    Col
} from 'reactstrap';

import './idea.css';


class IdeaItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVoted: false
        }
    }

    render(){
        return (
            <Media className="idea-wrapper">
                <Media left className="mr-3 d-none d-sm-block">
                    <div className="vote-wrapper">
                        <p className="vote-number">{this.props.item.votes}</p>
                        <span className="vote-text">votes</span>
                    </div>
                </Media>
                <Media body className="item-flex align-items-start">
                    <Col sm="11" xs="11" className="p-0">
                        <Media heading className="idea-title item-flex align-items-start">
                        <span className="p-0 idea-title-text">
                            {this.props.item.title}
                        </span>
                            <Col lg="3" className="p-0">
                                <Badge className={`status idea-status status-yellow`}>{this.props.item.name}</Badge>
                                <Badge className={`status idea-status status-${this.props.item.status}`}>{this.props.item.status}</Badge>
                            </Col>
                        </Media>
                        <div className="date">{this.props.item.date}</div>
                        <p className="std-text-sm idea-text">
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras
                            purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                            fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                        {this.props.item.tags.map((item, i) => (
                            <span className="tag project-tag" key={i}>{item}</span>
                        ))}
                    </Col>
                    <Col sm="1" xs="1" className="p-0 text-center">
                        <button className={`btn-trans float-right pr-0 ${this.state.isVoted ? "voted" : ""}`} onClick={(e) => this.props.onClickVote(e, this)}>
                            <i className="icon-vote"/>
                            <span className="vote-text">vote</span>
                        </button>
                        <div className="vote-wrapper show-xs">
                            <p className="vote-number">{this.props.item.votes}</p>
                        </div>
                    </Col>
                </Media>
            </Media>

        )
    }

}

export default IdeaItem;
