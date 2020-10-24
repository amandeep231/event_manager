import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { deleteEvent } from '../../actions/eventActions'

class Event extends Component {
  state = {
    showEventInfo: false
  };

  onDeleteClick = id => {
    //// DELETE CONTACT ////
    this.props.deleteEvent(id);
  };

  render() {
    const { id, name, venue, entryFee, timings, date, phone } = this.props.event;
    const { showEventInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{' '}
          <i
            onClick={() =>
              this.setState({
                showEventInfo: !this.state.showEventInfo
              })
            }
            className="fas fa-angle-down"
            
            style={{ cursor: 'pointer' }}
          />
          <i
            className="fas fa-trash"
            style={{ cursor: 'pointer', float: 'right', color: 'blue' }}
            onClick={this.onDeleteClick.bind(this, id)}
          />
          <Link to={`event/edit/${id}`}>
            <i
              className="fas fa-pen"
              style={{
                cursor: 'pointer',
                float: 'right',
                color: 'black',
                marginRight: '1rem'
              }}
            />
          </Link>
        </h4>
        {showEventInfo ? (
          <ul className="list-group">
            <li className="list-group-item"><span style={{color: "SlateBlue"}}>Venue :</span> {venue}</li>
            <li className="list-group-item"><span style={{color:"SlateBlue"}}>Entry Fee: </span> Rs. {parseFloat(entryFee).toFixed(2)}</li>
            <li className="list-group-item"><span style={{color: "SlateBlue"}}>Timings: </span> {timings}</li>
            <li className="list-group-item"><span style={{color: "SlateBlue"}}>Date:</span> {date}</li>
            <li className="list-group-item"><span style={{color: "SlateBlue"}}>Phone: </span> {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Event.propTypes = {
  event: PropTypes.object.isRequired,
  deleteEvent: PropTypes.func.isRequired

};

export default connect(null, {deleteEvent})(Event);
