import React, { Component } from "react";
import {connect} from 'react-redux';
import { Segment, Form, Button } from "semantic-ui-react";

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: ""
  }

  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0]
  }

  return {
    event
  }
}

class EventForm extends Component {
  state = {
    event: Object.assign({}, this.props.event)
  };

  componentDidMount() {
    if(this.props.selectedEvent !== null) {
      this.setState({
        ...this.props.selectedEvent
      })
    }
  }

  handleFormSubmit = evt => {
    evt.preventDefault();
    if(this.state.id) {
      this.props.updateEvent(this.state);
    } else {
      this.props.createEvent(this.state);//props passed by eventDasboard; contains all fields 
    }
  };

  handleInputChange = ({target: {name, value}}) => {
    this.setState({
      [name]: value
    });
  };

  // destructuring to get above lines; ñ entendi direito como fez isso
  // handleInputChange = evt => {
  //   this.setState({
  //     //acesso ao q foi inserido no input title
  //     //[] object bracket notation to access properties!
  //     [evt.target.name]: evt.target.value
  //   });
  // };

  render() {
    // {this.props.cancelFormOpen}
  
    // destructuring
    const { title, date, city, venue, hostedBy } = this.state;
    return (
      <div>
        <Segment>
          <Form onSubmit={this.handleFormSubmit} autoComplete='off'>
            <Form.Field>
              <label>Evento Título</label>
              <input
                name='title'
                onChange={this.handleInputChange}
                value={title}
                placeholder='Evento Nome'
              />
            </Form.Field>
            <Form.Field>
              <label>Event Data</label>
              <input
                name='date'
                onChange={this.handleInputChange}
                value={date}
                type='date'
                placeholder='data do evento'
              />
            </Form.Field>
            <Form.Field>
              <label>Cidade</label>
              <input
                name='city'
                onChange={this.handleInputChange}
                value={city}
                placeholder='cidade do evento'
              />
            </Form.Field>
            <Form.Field>
              <label>Local</label>
              <input
                name='venue'
                onChange={this.handleInputChange}
                value={venue}
                placeholder='Local do evento'
              />
            </Form.Field>
            <Form.Field>
              <label>Realizado por</label>
              <input
                name='hostedBy'
                onChange={this.handleInputChange}
                value={hostedBy}
                placeholder='realizado por'
              />
            </Form.Field>
            <Button positive type='submit'>
              Enviar
            </Button>
            <Button onClick={this.props.history.goBack} type='button'>
              Cancelar
            </Button>
          </Form>
        </Segment>
      </div>
    );
  }
}

export default connect(mapState) (EventForm);
