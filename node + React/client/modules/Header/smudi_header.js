import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../Authenticate/authenticateActions';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import $ from 'jquery';

class SmudiHeader extends Component {
    state = { open: false, closeOnDimmerClick: true }

    handleModal = () => {

        this.setState({ open: true });
    }

    constructor(props) {
        super(props);
        this.close = this.close.bind(this);
    }

    componentDidMount() {

       // this.scriptLoad();
      
    }
    close() {
        this.setState({open:false});
        console.log('open', this.state.open);
    }
    renderList() {

        if (this.props.authenticated) {
            return (
                <li className="nav__item">
                    <a href="#" className="nav__link nav__link--active">Tab1</a>
                </li> )
        }

    }
    toggleMenu() {
        var userMenu = document.querySelector('#js_user-menu');
        userMenu.classList.toggle('header__menu--visible');
    }
    toggleButton() {
        
        $('#navbarSupportedContent').toggleClass('show');
    }
    renderLinks() {
        debugger;
        if ( this.props.authenticated ) {

            return (
            <div className="header__user">
                
                <div className="header__menu" id="js_user-menu">
             
                    <a href="#" className="header__menu__logout" onClick={() => this.props.signoutUser()}>Logout</a>
                </div>
            </div> )

        }
    
        
        return (
            <div className="header__user">
        
                <a href="/Signin" className="nav__link" onClick={() => this.props.authenticate(true)}>Sign In</a>
            
            
                <a href="/Signup" className="nav__link">Sign Up</a>
            
 
               
        </div> )
        
    }
    render() {
        const { open,closeOnDimmerClick } = this.state;

        return (
            <div>
                <header id="header" className="home">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light def_nav11">
                        <div className="container">
                            <a className="navbar-brand" href="#">
                                <img src={require('../../img/logo.png')} alt=""/>
                            </a>
                            <a href="#" className="mobile-Visible m-sell-cta">Sell Yours</a>
                            <button className="navbar-toggler" onClick={this.toggleButton} type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="bars"></span>
                                <span className="bars"></span>
                                <span className="bars"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                <ul className="navbar-nav ml-auto navigation1">

                                    <li className="nav-item active">
                                        <a className="nav-link" href="/Home">Home</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Categories</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Brands</a>
                                    </li>

                                    <li className="nav-item desktop-Visible">
                                        <a className="nav-link sell_cta" href="#">Sell Yours</a>
                                    </li>

                                </ul>

                                <ul className="navbar-nav my-2 my-lg-0 navigation2">

                                    <li className="nav-item ">
                                        <a className="nav-link" href="#">Register</a>
                                    </li>

                                    <li className="nav-item ">
                                        <a className="nav-link" href="#">Sign In</a>
                                    </li>

                                </ul>

                            </div>

                        </div>
                    </nav>
                   
                </header>
                
            </div>
        )
    }

}

function mapStateToProps(state) {

    return { 
        authenticated: state.auth.authenticated 
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
       signoutUser: () => { dispatch(actions.signoutUser()); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SmudiHeader);