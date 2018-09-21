import React, {Component} from 'react';
import {
    Container
} from 'reactstrap';

import Layout from '../../components/hoc/Layout/layout';
import PageTitle from '../../components/widgets/PageTitle/page_title';
import {OpenModal} from '../../components/Modal/modal';
import ProjectItem from './project_item';
import jsonData from '../../db';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            modal: false
        }
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <Layout type="auth" page="projects" tip="true">
                <Container className="container content">
                    <PageTitle title="Projects" button="Contribute"
                               togglemodal={this.toggle}
                    />
                    <div className="box-wrapper projects-wrapper">
                        {
                            jsonData.projects.map((item, i) => (
                                <ProjectItem item={item} key={i}/>
                            ))
                        }

                    </div>
                    <OpenModal
                        modal="projects"
                        isOpen={this.state.modal}
                        togglemodal={this.toggle}
                        className={this.props.className}
                    />
                </Container>
            </Layout>
        )
    }
}

export default Projects;
