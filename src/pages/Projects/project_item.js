import React from 'react';
import {Link} from 'react-router-dom';
import {
    CardText, CardBody,
    CardTitle, Badge, CardFooter
} from 'reactstrap';


const ProjectItem = (props) => {
    return (
        <Link to={`projects/${props.item.id}`}
              className="white-box project-item"
              key={props.item.id}>
            <CardBody>
                <div className="clearfix item-flex">
                    <CardTitle className="item-flex  flex-grow-1">
                        {props.item.name}
                        <Badge className={`status project-status status-${props.item.status}`}>{props.item.status}</Badge>
                    </CardTitle>
                    <div className="float-right">
                        <div className="project-logo">
                            <img src={`/images/logos/${props.item.logo}`} alt={`${props.item.name}-logo`} width="100"/>
                        </div>
                    </div>
                </div>

                <CardText className="std-text-sm project-text">
                    {props.item.description}
                </CardText>
                {props.item.tags.map((item, i) => (
                    <span className="tag project-tag" key={i}>{item}</span>
                ))}
                <CardFooter className="item-flex project-footer">
                    <div className="flex-grow-1"><strong>Last Update:</strong> {props.item.date}</div>
                    <div><strong>Project Owner:</strong> {props.item.owner}</div>
                </CardFooter>

            </CardBody>
        </Link>


    )
}

export default ProjectItem;
