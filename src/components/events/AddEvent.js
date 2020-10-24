import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addEvent} from '../../actions/eventActions';

class AddEvent extends Component {
  state = {
    name: '',
    venue: '',
    entryFee: '',
    timings:'',
    date:'',
    phone:'',
    errors: {}
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { name, venue, entryFee, timings, date, phone, errors } = this.state;

    // Check For Errors
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }

    if (venue === '') {
      this.setState({ errors: { venue: 'Venue is required' } });
      return;
    }

    if (entryFee === '') {
      this.setState({ errors: { entryFee: 'Price is required' } });
      return;
    }

    if (timings === '') {
      this.setState({ errors: { timings: 'Time is required' } });
      return;
    }

    if (date === '') {
      this.setState({ errors: { date: 'Date is required' } });
      return;
    }

    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is required' } });
      return;
    }

    const newEvent = {
    
      name,
      venue,
      entryFee,
      timings,
      date,
      phone
    };

    this.props.addEvent(newEvent);

    //// SUBMIT CONTACT ////

    // Clear State
    this.setState({
      name: '',
      venue: '',
      entryFee: '',
      timings:'',
      date:'',
      phone:'',
      errors: {}
    });

    this.props.history.push('/');
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, venue, entryFee, timings, date,phone, errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Event</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Name"
              name="name"
              placeholder="Enter Name"
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />
            <TextInputGroup
              label="Venue"
              name="venue"
              type="text"
              placeholder="Enter Venue"
              value={venue}
              onChange={this.onChange}
              error={errors.venue}
            />
            <TextInputGroup
              label="Entry Fee"
              name="entryFee"
              placeholder="Enter Price"
              value={entryFee}
              onChange={this.onChange}
              error={errors.entryFee}
            />
            <TextInputGroup
              label="Timings"
              name="timings"
              placeholder="Enter Time"
              value={timings}
              onChange={this.onChange}
              error={errors.timings}
            />

              <TextInputGroup
              label="Date"
              name="date"
              type="date"
              placeholder="Enter Date"
              value={date}
              onChange={this.onChange}
              error={errors.date}
            />

              <TextInputGroup
              label="Phone"
              name="phone"
              placeholder="Enter Phone"
              value={phone}
              onChange={this.onChange}
              error={errors.phone}
            />
            <input
              type="submit"
              value="Add Event"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

AddEvent.propTypes={
  addEvent: PropTypes.func.isRequired
}

export default connect(null,{addEvent})(AddEvent);
