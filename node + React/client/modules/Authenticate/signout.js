import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './authenticateActions';

class Signout extends Component {
    componentWillMount() {
        this.props.signoutUser();
    }
    render() {
        return <div> Sorry to see you go.. </div>;
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signoutUser: () => { dispatch(actions.signoutUser()); }
    }
}
export default connect(null, mapDispatchToProps)(Signout);