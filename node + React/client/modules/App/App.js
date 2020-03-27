import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Import Style
import styles from './App.css';

// Import Components
import Helmet from 'react-helmet';
import DevTools from './components/DevTools';
import Header from '../Header/header';
import Footer from '../Header/footer';

// Import Actions
import { toggleAddPost } from './AppActions';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <Header />
        {this.props.children}
      <Footer />
      </div>
    );
  }
}
App.PropTypes = {
  children: PropTypes.object.isRequired
}

export default App;