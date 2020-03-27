import React, { Component } from 'react';
import {compose} from "redux"
import {connect} from "react-redux"
import { reduxForm,Field } from 'redux-form';
import * as actions from './authenticateActions';


class Signin extends Component {
    state = { password: '', email: ''};
    constructor(props) {
        super(props);
        this.updatePassword = this.updatePassword.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
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
    handleFormSubmit() {

        const values = {email:this.state.email, password: this.state.password}
        //Need to do something to log user in 
        this.props.signinUser(values);
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
    render(){
        const {password, email} = this.state;
      return (
        <div>
            <h2>Sign in</h2>

            <span className="sign-btn" onClick={this.props.authFacebook}>Sign in with Facebook</span>
            <span className="sign-btn" onClick={this.props.signinGoogle}>Sign in with Google</span>
            <h2 className="background"><span> OR </span></h2>
            <form>
                <input name="email" placeholder="Email here" id="email" type="text" onChange={this.updateEmail} value={email} className="form-control" />
                <input name="password" placeholder="Password here" name="pass" id="pass"  type="password" onChange={this.updatePassword} value={password} className="form-control" />
                
                {this.renderAlert()}
                <button type="button" onClick={this.handleFormSubmit.bind(this)} className="btn btn-sign" >Sign In</button>
      
            </form>
       </div>
       
      );
       
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signinUser: values => { dispatch(actions.signinUser(values)); },
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
    form: 'signin'
  })
)(Signin);