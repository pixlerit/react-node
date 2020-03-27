import React, { Component } from 'react';

class Footer extends Component {

    constructor(props){
        super(props);
    }
    render() {
        return(
        <footer id="footer">
            <div className="container">
                <div className="row">
        
                    <div className="col-lg-3 col-6">
                        <h3>EXPLORE</h3>
                        <ul className="list-unstyled">
                            <li><a href="#">By Brands</a></li>
                            <li><a href="#">By Categories</a></li>
                        </ul>
                    </div>
        
                    <div className="col-lg-3 col-6">
                        <h3>Legal Bits</h3>
                        <ul className="list-unstyled">
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
        
                    <div className="col-lg-3 col-6">
                        <h3>SELL</h3>
                        <ul className="list-unstyled">
                            <li><a href="#">Sell your Product</a></li>
                        </ul>
                    </div>
        
                    <div className="col-lg-3 col-6">
                        <h3>SUPPORT</h3>
                        <ul className="list-unstyled">
                            <li><a href="#">Help</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
        
                </div>
            </div>
            <div>
                <div className="container text-center"><p className="mb-0"> Copyright © 2017 Gagetz.com, All Rights Reserved </p></div>
            </div>
        </footer>
        )
    }
}

export default Footer;