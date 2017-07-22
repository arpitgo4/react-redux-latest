
const gettingEvents = () => {
    return {
        type: 'FETCHING_EVENTS'
    }
};

export const getEvents = () => {

    gettingEvents();

    return dispatch => {
        fetch('http://192.168.0.112:8070/events/calendarEvents')
        .then(res => res.json())
        .then(json => {
            dispatch({
                type: 'ADD_EVENTS',
                events: json
            })
        })
        .catch(err => console.log(err));
    };
};

export const loginAction = username => {
    return {
        type: 'LOGIN',
        username
    };
}