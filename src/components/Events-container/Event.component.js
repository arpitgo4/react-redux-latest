
import React, { Component } from 'react';
import EventRow from '../Events-presentational/EventRow.component';

import { connect } from 'react-redux';
import { getEvents, loginAction } from './Event.actionCreators';

class Events extends Component {

    render() {
        return ( <div className="row">
            {
                this.props.events.map(event => {
                    console.log(event);
                    return <EventRow eventId={event.eventId} 
                                     eventName={event.eventName}
                                     eventLocation={event.eventLocation} />
                })
            }
            <button className="btn btn-lg btn-success" onClick={this.props.getEvents}>
                Get Events!
            </button>
            <input ref={input => this.username = input} type="text" placeholder="username" ></input>
            <button onClick={() => this.props.login(this.username.value)}>Login</button>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        events: state.events
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getEvents: () => dispatch(getEvents()),
        login: username => dispatch(loginAction(username))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);