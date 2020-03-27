import React, { Component } from 'react';
import {compose} from "redux"
import {connect} from "react-redux"
import { reduxForm, Field } from 'redux-form';
import * as actions  from './authenticateActions';


class Signup extends Component {

    state = { password: '', email: '', name : '', confirmpassword: ''};

    constructor(props) {
        super(props);
        this.updatePassword = this.updatePassword.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updateName = this.updateName.bind(this);
        this.updateConfirmPassword = this.updateConfirmPassword.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    updatePassword(evt) {
        this.setState({
            password: evt.target.value
        });
    }
    updateEmail(evt) {
        this.setState({
            email: evt.target.value
        });
    }
    updateName(evt) {
        this.setState({
            name: evt.target.value
        });
    }
    updateConfirmPassword(evt) {
        this.setState({
            confirmpassword: evt.target.value
        });
    }
    
    handleFormSubmit() {

        const values = { name: this.state.name, email: this.state.email, password: this.state.password };
        this.props.signupUser(values);
       
    }
    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong> {this.props.errorMessage}
                </div>
            );
        }
    }
    
    render() {
        const { password ,email, name , confirmpassword } = this.state;
        return (
            <div className="container">
                <h2>Register</h2>
                <p>By signing up I ogree to Gogetz's Terms of Use and Pnvacy Policy ond I consent to receiving marketing and third party offers bre from Gogetz's.</p>
        
                <span className="sign-btn fb" onClick={this.props.authFacebook}>Register with Facebook</span>
                <span className="sign-btn google" onClick={this.props.signinGoogle}>Register with Google</span>
                <h2 className="background"><span> OR </span></h2>
                <form  name="register" className="register">
                    <input type="email" className="form-control" id="email" value={email} onChange={this.updateEmail} placeholder="Email Address" name="email"/>
                    <input type="text" className="form-control" id="name" value={name} onChange={this.updateName} placeholder="Your Name" name="name"/>
                    <input type="password" className="form-control" id="pass" value={password} onChange={this.updatePassword} placeholder="Password" name="pass"/>
                    <input type="password" className="form-control" id="cpass" placeholder="Confirm Password" value={confirmpassword} onChange={this.updateConfirmPassword} name="cpass"/>
           
                    {this.renderAlert()}

      
                </form>
                <span className="sign-btn register" onClick={this.handleFormSubmit}>Register</span>
                <hr className="line" />


            </div>
        );
    }
}

const validatefunction = values => {

    const errors = {};
    if (values.password !== values.passwordConfirm) {
        errors.password = 'Passwords must match';
    }
    console.log('values validate',values);
    return errors;
  
}
const mapDispatchToProps = (dispatch) => {
    return {
        signupUser: values => { dispatch(actions.signupUser(values)); },
        signinGoogle : values => { dispatch(actions.signinGoogle(values)); },
        authFacebook:  values => { dispatch(actions.authFacebook(values)); }
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'signup'
  })
)(Signup);