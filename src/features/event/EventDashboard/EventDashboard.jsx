import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import EventList from '../EventList/EventList';
import { deleteEvent } from '../eventActions'

const mapState = state => ({
  events: state.events
});

const actions = {
  deleteEvent
}

class EventDashboard extends Component {

  handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId);
  };

  render() {
    const {events} = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            deleteEvent={this.handleDeleteEvent}
            events={events}
          />
        </Grid.Column>
        <Grid.Column width={6}>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapState, actions)(EventDashboard);






// import React, { Component } from "react";
// import { Grid, Button } from "semantic-ui-react";
// import {connect} from 'react-redux';//HOC allows us to connect to the store
// import EventList from "../EventList/EventList";
// import EventForm from "../EventForm/EventForm";
// import cuid from "cuid";
// import {createEvent, deleteEvent, updateEvent} from '../eventActions';

// const mapState = (state) => ({
//   events: state.events //array from state
// })

// const actions = {
//   createEvent, 
//   deleteEvent, 
//   updateEvent
// }

// class EventDashboard extends Component {
//   state = {
//     isOpen: false,
//     selectedEvent: null
//   };

//   /* handleIsOpenToggle = () => {
//     this.setState(({ isOpen }) => ({
//       isOpen: !isOpen
//     }));
//     }; 
//   */
//   /* this.setState((prevState) => ({
//       isOpen: !prevState.isOpen
//     })) */
//   // destructuring {isOpen} = prevState

//   handleCreateFormOpen = () => {
//     this.setState({
//       isOpen: true,
//       selectedEvent: null
//     });
//   };

//   handleFormCancel = () => {
//     this.setState({
//       isOpen: false
//     });
//   };

//   handleCreateEvent = newEvent => {
//     newEvent.id = cuid();
//     newEvent.hostPhotoURL = "/assets/user.png";
//     this.props.createEvent(newEvent);
//     this.setState(({ events }) => ({
//       //{events} is previous state
//       //events: [...events, newEvent],
//       isOpen: false
//     }));
//     /* this.setState({
//       events: [...this.state.events, newEvent]
//     }) */
//   };

//   handleSelectEvent = event => {
//     this.setState({
//       selectedEvent: event,
//       isOpen: true
//     });
//   };

//   handleUpdateEvent = updatedEvent => {
//     this.props.updateEvent(updatedEvent);
//     this.setState(({ events }) => ({
//       /* //getting our prev state
//       events: events.map(event => {
//         //current event existing in state
//         if (event.id === updatedEvent.id) {
//           return { ...updatedEvent };
//         } else {
//           return event;
//         }
//       }), */
//       isOpen: false,
//       selectedEvent: null
//     }));
//   };

//   handleDeleteEvent = id => {
//     this.props.deleteEvent(id);
//   };

//   render() {
//     // para acessar uma propriedade dentro da classe usamos this
//     const { isOpen, selectedEvent } = this.state;
//     const {events} = this.props;
//     return (
//       <Grid>
//         <Grid.Column width={10}>
//           {/* events is props; EventList is a child from EventDashboard */}
//           {/* this.state.events */}
//           <EventList
//             events={events}
//             selectEvent={this.handleSelectEvent}
//             deleteEvent={this.handleDeleteEvent}
//           />
//         </Grid.Column>
//         <Grid.Column width={6}>
//           <Button
//             onClick={this.handleCreateFormOpen}
//             positive
//             content='Criar Evento'
//           />
//           {/* if isOpen is true segue o q está após &&; caso contrário isso ñ ocorre */}
//           {isOpen && (
//             <EventForm
//               key={selectedEvent ? selectedEvent.id : 0}
//               updateEvent={this.handleUpdateEvent}
//               selectedEvent={selectedEvent}
//               createEvent={this.handleCreateEvent}
//               cancelFormOpen={this.handleFormCancel}
//             />
//           )}
//         </Grid.Column>
//       </Grid>
//     );
//   }
// }

// export default connect(mapState, actions)(EventDashboard);
