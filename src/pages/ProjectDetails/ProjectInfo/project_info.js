import React from 'react';
import {Link} from 'react-router-dom';
import {
    Badge,
    Media
} from 'reactstrap';

import {Button} from '../../../components/Buttons/buttons';
import './project_info.css';

const ProjectInfo = (props) => {
    return (
        <div>
            <div className="clearfix item-flex details-top">
                <div className="float-left flex-grow-1">
                    <div className="item-flex">
                        <button onClick={() => window.history.back()} className="btn-trans p-0"><i className="arrow-back"/></button>
                        <h1 className="project-title">
                            {props.projectItem.name}
                        </h1>
                        <Badge
                            className={`status status-${props.projectItem.status}`}>{props.projectItem.status}</Badge>
                    </div>

                    <div className="project-tags">
                        {props.projectItem.tags.map((item, i) => (
                            <span className="tag project-tag" key={i}>{item}</span>
                        ))}
                    </div>
                    <div className="project-date"><strong>Last Update:</strong> {props.projectItem.date}</div>
                </div>
                <div className="float-right">
                    <div className="project-logo">
                        <img src={`/images/logos/${props.projectItem.logo}`} alt={`${props.projectItem.name}-logo`}
                             width="120"/>
                    </div>
                    <Button className="project-btn"
                            type="btn-blue"
                            text="View Demo"
                    />
                </div>
            </div>
            <div className="clearfix details-content">
                <div className="float-left xs-float">
                    <p className="title-sm">Project Owner</p>
                    <Media className="member-item m-0">
                        <Media className="member-active mr-3">
                            <img src={`/images/members/${props.memberItem[0].image}`} alt={props.memberItem[0].name}
                                 className="rounded-circle" width="40"/>
                        </Media>
                        <Media body>
                            <h5 className="mt-0 member-title">{props.memberItem[0].name}</h5>
                        </Media>
                    </Media>
                </div>
                <div className="float-right text-right xs-float project-members">
                    <p className="title-sm">Project Members</p>
                    <Media className="m-0">
                        {props.memberItem.map((item) => (
                            <img src={`/images/members/${item.image}`}
                                 key={item.id}
                                 alt={item.name}
                                 className="rounded-circle ml-2 project-avatar" width="40"/>
                        ))}
                        <Link to="">
                            <i className="icon-add ml-2"/>
                        </Link>

                    </Media>
                </div>
            </div>
            <div className="project-link">
                <strong>Repository Link: </strong>
                <span>https://github.com/loremipsummangaaliqua/doloremangatemporealiqua</span>
            </div>
            <div className="details-text">
                <p>WordPress, the premier free open-source blogging utility, has gone through several
                    upgrades
                    in its life. Today it’s one of the most popular blogging tools on the Internet; it’s
                    easy to
                    use, powerful, and very versatile. It also has a very active base of skilled users
                    who are
                    eager to improve the product and to help out those who haven’t tried it before.
                </p>
                <p>Though the Strayhorn 1.5 version is the favorite for many, it is not as stable or as
                    secure
                    as the newest version 2.0.3. The best part of the new version is the security patch;
                    the new
                    “nonce” security key reduces the chances of a malicious hacker finding a way into
                    your admin
                    panel. Besides the security patch, though, several minor bugs have been squashed
                    with this
                    version. Though a major upgrade to 2.1 is due out soon, the 2.0.3 is something you
                    should
                    definitely download and install if only because of the security fixes, which were
                    actually
                    backported from the major upgrade files.</p>
            </div>
            <img src="/images/dashboard.jpg" alt="Project Details" width="780" className="row"/>
        </div>
    )

}

export default ProjectInfo;


