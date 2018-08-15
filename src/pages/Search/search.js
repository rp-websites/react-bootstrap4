import React, {Component} from 'react';
import {
    Container
} from 'reactstrap';

import Layout from '../../components/hoc/Layout/layout';
import PageTitle from '../../components/widgets/PageTitle/page_title';
import ProjectItem from '../Projects/project_item';
import {OpenModal} from '../../components/Modal/modal';
import jsonData from '../../db';

import './search.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }


    render() {
        return (
            <Layout type="auth">
                <Container className={`container-lg content`}>
                    <PageTitle title="24 projects found" button="Contribute" togglemodal={this.toggle}/>
                    <div className="box-wrapper search-wrapper row">
                        {
                            jsonData.projects.map((item, i) => (
                                <div className="col-lg-4" key={i}>
                                    <ProjectItem item={item} />
                                </div>
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

export default Search;
