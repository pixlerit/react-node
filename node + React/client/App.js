/**
 * Root Component
 */
import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';


// Import Routes
import routes from './routes';

// Base stylesheet
require("!style-loader!css-loader!sass-loader!./sass/bootstrap.min.css");
require("!style-loader!css-loader!sass-loader!./sass/owl.carousel.min.css");
require("!style-loader!css-loader!sass-loader!./sass/owl.theme.default.min.css");
require("!style-loader!css-loader!sass-loader!./sass/style.scss");

//jquery and bootstrap

window.jQuery = window.$ = require('jquery/dist/jquery.min');
require('bootstrap/dist/js/bootstrap.min.js');



export default function App(props) {
  return (
    <Provider store={props.store}>
        <Router history={browserHistory}>
          {routes}
        </Router>
  
    </Provider>
  );
}

App.propTypes = {
  store: React.PropTypes.object.isRequired,
};
