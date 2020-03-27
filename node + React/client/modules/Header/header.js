import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../Authenticate/authenticateActions';
import SmudiHeader from './smudi_header';

class Header extends Component {
    constructor(props) {
        super(props);
    }
    authButton() {
        if (this.props.authenticated) {
          return <button onClick={() => this.props.authenticate(false)}>Sign Out </button>;
        }
        return <button onClick={() => this.props.authenticate(true)}>Sign In </button>;
    }
    renderLinks() {
        if (this.props.authenticated) {
            return 
                <li className="nav-item">
                    <Link className="nav-link" to="/Signout">Sign Out </Link>
                </li>
        }
        else {
            return [
                <li className="nav-item" key={1}>
                    <Link className="nav-link" to="/Signin">Sign In</Link>
                </li>,
                <li className="nav-item" key={2}>
                    <Link className="nav-link" to="/Signup">Sign Up</Link>
                </li>
            ];

        }
    }
    render() {
        return (
            <div>
              <SmudiHeader />
            </div>
        //  <div>
        //     <nav className="navbar navbar-light">
        //      <Link to="/" className="navbar-brand">Home</Link>
        //      <ul className="nav navbar-nav">
        //        {this.renderLinks()}
        //      </ul>
        //     </nav>
        //  </div>
            
        )
    }
}
function mapStateToProps(state) {

    return { 
        authenticated: state.auth.authenticated 
    };
}

export default connect(mapStateToProps, actions)(Header);