import React from 'react';
import {Modal, ModalHeader, ModalBody} from 'reactstrap';
import {Label} from 'reactstrap';
import {AvForm, AvGroup, AvInput, AvFeedback} from 'availity-reactstrap-validation';
import Select from 'react-select';

import {Uploader} from '../Uploader/uploader';
import {Button} from '../../components/Buttons/buttons';
import '../Select/select.css';
import './modal.css';


const OpenModal = (props) => {
    let templateModal = null;

    switch (props.modal) {
        case 'projects':
            templateModal = (
                <Modal size="lg" isOpen={props.isOpen} toggle={props.togglemodal} className={props.className}>
                    <ModalHeader toggle={props.togglemodal}>
                        Contribution Guidelines
                    </ModalHeader>
                    <ModalBody>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit dolores eos ratione
                            voluptatem
                            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet sed quia non
                            numquam eius
                            modi
                            tempora incidunt labore dolore magnam.</p>
                        <AvForm>
                            <AvGroup>
                                <Label for="input1">Title <span className="text-danger">*</span></Label>
                                <div className="has-feedback">
                                    <AvInput name="required" id="input1" type="text" placeholder="Please enter a title"
                                             required/>
                                    <AvFeedback className="feedback-icon"><i className="icon-alert"/></AvFeedback>
                                </div>
                            </AvGroup>
                            <AvGroup>
                                <Label for="input2">Repository Link</Label>
                                <div className="form-control readonly-field">
                                    https://www.icarasia.com/nemoenimpsam/voluptemquiavoluaspernature/manga
                                </div>
                            </AvGroup>
                            <AvGroup>
                                <Label for="input3">Short Description <span className="text-danger">*</span></Label>
                                <div className="has-feedback">
                                    <AvInput name="input3" type="textarea" id="input3" required/>
                                    <AvFeedback className="feedback-icon"><i className="icon-alert"/></AvFeedback>
                                </div>
                            </AvGroup>
                            <AvGroup>
                                <Label for="exampleFile">Attach Screenshots</Label>
                                <div className="item-flex upload-wrapper">
                                    <Uploader/>
                                    <Uploader/>
                                    <Uploader/>
                                    <Uploader/>
                                </div>
                            </AvGroup>
                            <button className="btn btn-green">Save</button>
                        </AvForm>
                    </ModalBody>
                </Modal>
            )
            break;
        case 'ideas':
            templateModal = (
                <div>
                    <Modal size="lg" isOpen={props.isOpen} toggle={props.togglemodal} className={props.className}>
                        <ModalHeader toggle={props.togglemodal}>
                            Submit Idea
                        </ModalHeader>
                        <ModalBody>
                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit dolores eos ratione
                                voluptatem
                                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet sed quia non
                                numquam eius
                                modi
                                tempora incidunt labore dolore magnam.</p>
                            <AvForm onValidSubmit={props.onValidSubmit} onInvalidSubmit={props.onInvalidSubmit}>
                                <AvGroup>
                                    <Label for="input4">Idea Name <span className="text-danger">*</span></Label>
                                    <div className="has-feedback">
                                        <AvInput name="input4" type="text" id="input4"
                                                 placeholder="Please enter a title"
                                                 required/>
                                        <AvFeedback className="feedback-icon"><i className="icon-alert"/></AvFeedback>
                                    </div>
                                </AvGroup>
                                <AvGroup>
                                    <Label for="input5">Category <span className="text-danger">*</span></Label>
                                    <Select
                                        value={props.selectValue}
                                        onChange={props.onSelectChange}
                                        options={props.selectOptions}
                                        isMulti={true}
                                        isSearchable={true}
                                        placeholder="Add Category"
                                        className="multiselect-wrapper"
                                        name="input5"

                                    />
                                </AvGroup>
                                <AvGroup>
                                    <Label for="input6">Description <span className="text-danger">*</span></Label>
                                    <div className="has-feedback">
                                        <AvInput name="input6" type="textarea" id="input6" required/>
                                        <AvFeedback className="feedback-icon"><i className="icon-alert"/></AvFeedback>
                                    </div>
                                </AvGroup>
                                <AvGroup>
                                    <Label>Attach Screenshots</Label>
                                    <div className="item-flex upload-wrapper">
                                        <Uploader/>
                                        <Uploader/>
                                        <Uploader/>
                                        <Uploader/>
                                    </div>
                                </AvGroup>
                                <button type="submit" className="btn btn-green">Submit</button>
                            </AvForm>
                        </ModalBody>
                    </Modal>
                        {
                            props.checkError ? (
                                <Modal size="sm" isOpen={props.validate} toggle={props.toggleValidateModal}>
                                    <ModalHeader toggle={props.toggleValidateModal}> </ModalHeader>
                                    <ModalBody className="text-center">
                                        <i className="icon-invalid"/>
                                        <h3 className="modal-sm-title">Oops!</h3>
                                        <p className="std-text">Something went wrong. Let’s try once again.</p>
                                        <Button className="modal-btn"
                                                type="btn-blue"
                                                text="Try Again!"
                                                onClick={props.toggleValidateModal}
                                        />
                                    </ModalBody>
                                </Modal>
                                ) : (
                                <Modal size="sm" isOpen={props.validate} toggle={props.toggleValidateModal}>
                                    <ModalHeader toggle={props.toggleValidateModal}> </ModalHeader>
                                    <ModalBody className="text-center">
                                        <i className="icon-valid"/>
                                        <h3 className="modal-sm-title">Success!</h3>
                                        <p className="std-text">Your Idea has been submitted successfully.</p>
                                        <Button className="modal-btn"
                                                type="btn-blue"
                                                text="Got it!"
                                                onClick={props.toggleValidateModal}
                                        />
                                    </ModalBody>
                                </Modal>
                            )
                        }


                </div>

            )
            break;
        default:
            templateModal = null;


    }

    return templateModal

}

export {OpenModal};


