import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

class ModalSettings extends Component {
    // onClose={this.close}
    constructor(props) {
        super(props);
        this.close = this.close.bind(this);
    }

    close() {
    
        console.log('this.props.open', this.props);
     
    }

    render() {
        return (
            <div>
                <Modal open={open} closeIcon='close' onClose={this.close} closeOnDimmerClick={closeOnDimmerClick}>
                    <Modal.Header>
                        Delete Your Account
                    </Modal.Header>
                    <Modal.Content>
                    <div>
                        <section className="new-project">
                            <a className="new-project__close" href="#" id="js_modal-close">close</a>
                            <form>
                                <div className="new-project__header">
                                    <h2 className="new-project__heading">Create new project</h2>
                                    <div className="new-project__input-wrap">                        
                                        <label for="new-project-name" className="visually-hidden">Add a project name</label>
                                        <input type="text" name="new-project-name" id="new-project-name" placeholder="Add a project name"/>
                                    </div>
                                    <div className="new-project__input-wrap">                        
                                        <label for="new-project-description" class="visually-hidden">Add a description (optional)</label>
                                        <input type="text" name="new-project-description" id="new-project-description" placeholder="Add a description (optional)"/>
                                </div>
                                </div>
                                <div className="new-project__main">
                                    <h3 className="new-project__subheading">Invite users</h3>
                                    <div className="new-project__label">Invite your latest colaborators:</div>
                                        <ul className="new-project__users">
                                            <li className="new-project__users__item">
                                                <input className="new-project__users__checkbox visually-hidden" type="checkbox" name="user-1" id="user-1"/>
                                                <label className="new-project__users__label" style="background-image: url(img/arnold.png)" title="Arnold Schwarzeneger" for="user-1">Arnold Schwarzeneger</label>
                                            </li>
                                            <li className="new-project__users__item">
                                                <input className="new-project__users__checkbox visually-hidden" type="checkbox" name="user-2" id="user-2"/>
                                                <label className="new-project__users__label" style="background-image: url(img/arnold.png)" title="Arnold Schwarzeneger" for="user-2">Arnold Schwarzeneger</label>
                                            </li>
                                            <li className="new-project__users__item">
                                                <input className="new-project__users__checkbox visually-hidden" type="checkbox" name="user-3" id="user-3"/>
                                                    <label className="new-project__users__label" style="background-image: url(img/arnold.png)" title="Arnold Schwarzeneger" for="user-3">Arnold Schwarzeneger</label>
                                            </li>
                                            <li className="new-project__users__item">
                                                <input className="new-project__users__checkbox visually-hidden" type="checkbox" name="user-4" id="user-4"/>
                                                <label className="new-project__users__label" style="background-image: url(img/arnold.png)" title="Arnold Schwarzeneger" for="user-4">Arnold Schwarzeneger</label>
                                            </li>                        
                                        </ul>

                                        <a className="new-project__link" href="#">Show all team members</a>

                                        <div className="new-project__input-wrap">                        
                                            <label for="new-project-description">Invite new users:</label>
                                            <input type="text" name="new-project-description" className="dark" id="new-project-description" placeholder="Emails (separated by a comma)"/>
                                        </div>
                    
                                        <div className="new-project__settings">
                                            <div className="new-project__settings__wrap">

                                                <input className="visually-hidden new-project__settings__radio" type="radio" name="visibility" value="public" id="public" checked/>
                                                <label className="new-project__settings__label btn" for="public">
                                                    <svg className="new-project__settings__icon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                        <g fill-rule="evenodd">
                                                            <circle cx="8" cy="8" r="7.5"/>
                                                            <ellipse cx="8" cy="8" rx="2.5" ry="7.5"/>
                                                            <path d="M2 11.5h12M1 8h14M2 4.5h12" stroke-linecap="square"/>
                                                        </g>
                                                    </svg>
                                                Public
                                                </label>
                                                <input className="visually-hidden new-project__settings__radio" type="radio" name="visibility" value="private" id="private"/>
                                                <label className="new-project__settings__label btn" for="private">
                                                    <svg className="new-project__settings__icon" width="13" height="16" viewBox="0 0 13 16" xmlns="http://www.w3.org/2000/svg">
                                                        <g fill-rule="evenodd">
                                                            <path className="new-project__settings__icon--fill" d="M7 11.915c.583-.206 1-.762 1-1.415C8 9.672 7.328 9 6.5 9S5 9.672 5 10.5c0 .653.417 1.21 1 1.415V13.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.585zM2 6h9c1.105 0 2 .895 2 2v6c0 1.105-.895 2-2 2H2c-1.105 0-2-.895-2-2V8c0-1.105.895-2 2-2z" />
                                                            <path d="M10.5 4.503V4.5c0-2.21-1.79-4-4-4s-4 1.79-4 4l8 .003z" />
                                                        </g>
                                                    </svg>
                                                Private
                                                </label>
                            
                                            </div>
                                            <p className="new-project__settings__notice">The board is set as public. It will be visible to everyone in your team.</p>
                                        </div>

                                        <input className="new-project__submit btn btn--large" type="button" value="Let’s start!"/>

                                </div>
                            </form>
                        </section>
                    </div>
                    </Modal.Content>
                    <Modal.Actions>
                    <Button negative>No</Button>
                    <Button positive labelPosition='right' icon='checkmark' content='Yes' />
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }

}

export default ModalSettings;