import React, {Component} from 'react';
import {
    Container,
    Col
} from 'reactstrap';

import Layout from '../../components/hoc/Layout/layout';
import ProjectInfo from './ProjectInfo/project_info';
import Activities from './Activites/activities';
import jsonData from '../../db';
import '../Projects/projects.css';

class ProjectDetails extends Component {
    constructor (props) {
        super(props);
        this.closeActivities = this.closeActivities.bind(this);
        this.state = {
            close: ""
        }
    }
    closeActivities() {
        this.setState({
            close: "d-none"
        })
    }
    render() {
        return (
            <Layout type="auth" page="projects">
                <Container className={`container container-lg content`}>
                    <div className="white-box item-flex align-items-stretch flex-mobile">
                        <Col className="p-0 project-col">
                            <ProjectInfo projectItem={jsonData.projects[this.props.match.params.id - 1]}
                                         memberItem={jsonData.members}
                            />
                        </Col>
                        <Col lg="4" className={`has-border-left ${this.state.close}`} >
                            <Activities close={this.closeActivities}/>
                        </Col>

                    </div>
                </Container>
            </Layout>
        )
    }


}

export default ProjectDetails;
