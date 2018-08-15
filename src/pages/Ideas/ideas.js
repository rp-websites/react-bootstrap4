import React, {Component} from 'react';

import {
    Container,
    Col
} from 'reactstrap';

import Layout from '../../components/hoc/Layout/layout';
import PageTitle from '../../components/widgets/PageTitle/page_title';
import {OpenModal} from '../../components/Modal/modal';
import IdeaItem from './idea_item';
import Stats from './Stats/stats';
import jsonData from '../../db';
import Members from "../../components/widgets/Members/members";

const selectOptions = [
    {value: 'New Car', label: 'New Car'},
    {value: 'Car Accessories', label: 'Car Accessories'},
    {value: 'Malaysia', label: 'Malaysia'}
];

class Ideas extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.toggleVote = this.toggleVote.bind(this);
        this.handleValidSubmit = this.handleValidSubmit.bind(this);
        this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.state = {
            modal: false,
            selectedOption: null,
            requiredField: false
        }
    }

    toggleVote(e, ideaItem, item) {
        let finalVote = parseInt(item.votes, 10);
        ideaItem.state.isVoted ? (
            finalVote -= 1
        ) : (
            finalVote += 1
        )
        item.votes = finalVote;
        ideaItem.setState({
            isVoted: !ideaItem.state.isVoted
        })
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleChange = (selectedOption) => {
        this.setState({selectedOption});

    }

    //Validation helpers

    handleValidSubmit(event, values) {
        this.setState({
            requiredField: values.requiredField,
            modal: false
        });
    }

    handleInvalidSubmit(event, errors, values) {
        this.setState({
            requiredField: values.requiredField, error: true,
            modal: false
        });
    }

    closeModal() {
        this.setState({requiredField: false, error: false});
    }

    render() {
        const {selectedOption} = this.state;
        const modalError = this.state.error;

        return (
            <Layout type="auth" page="ideas" tip="true">
                <Container className="container container-lg content">
                    <PageTitle title="Ideas" button="Submit Idea"
                               togglemodal={this.toggle}
                    />
                    <div className="white-box item-flex align-items-stretch flex-mobile">
                        <Col className="p-0">
                            {
                                jsonData.ideas.map((item, i) => (
                                    <IdeaItem item={item} key={i}
                                              onClickVote={(e, ideaItem) => this.toggleVote(e, ideaItem, item)}
                                    />
                                ))
                            }

                        </Col>
                        <Col lg="4" className="has-border-left">
                            <div className="idea-banner">
                                <span className="title-6">Stats</span>
                                <Stats/>
                            </div>
                            <div className="idea-banner">
                                <span className="title-6">top 10 Contributors</span>
                                <Members/>
                            </div>
                        </Col>
                    </div>
                    <OpenModal
                        modal="ideas"
                        isOpen={this.state.modal}
                        togglemodal={this.toggle}
                        className={this.props.className}
                        selectValue={selectedOption}
                        onSelectChange={this.handleChange}
                        selectOptions={selectOptions}
                        onValidSubmit={this.handleValidSubmit}
                        onInvalidSubmit={this.handleInvalidSubmit}
                        validate={this.state.requiredField !== false}
                        toggleValidateModal={this.closeModal}
                        checkError={modalError}
                    />
                </Container>
            </Layout>
        )
    }
}

export default Ideas;
