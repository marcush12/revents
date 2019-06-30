import React, { Component } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    const { events, selectEvent, deleteEvent } = this.props;
    return (
      <>
        {/* props: objeto disponível em todo componente react */}
        {/* vamos usar as props enviadas por EventDashboard, pai */}
        {events.map(event => (
          // {event} abaixo vem da callback function map, event
          <EventListItem
            key={event.id}
            event={event}
            selectEvent={selectEvent}
            deleteEvent={deleteEvent}
          />
        ))}
      </>
    );
  }
}

export default EventList;
