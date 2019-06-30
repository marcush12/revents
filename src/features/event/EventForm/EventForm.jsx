import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

class EventForm extends Component {
  render() {
    // {this.props.cancelFormOpen} 
    const {cancelFormOpen} = this.props;
    return (
      <div>
        <Segment>
          <Form>
            <Form.Field>
              <label>Evento Título</label>
              <input placeholder='primeiro nome' />
            </Form.Field>
            <Form.Field>
              <label>Event Data</label>
              <input type='date' placeholder='data do evento' />
            </Form.Field>
            <Form.Field>
              <label>Cidade</label>
              <input placeholder='cidade do evento' />
            </Form.Field>
            <Form.Field>
              <label>Local</label>
              <input placeholder='Local do evento' />
            </Form.Field>
            <Form.Field>
              <label>Realizado</label>
              <input placeholder='realizado por' />
            </Form.Field>
            <Button positive type='submit'>
              Enviar
            </Button>
            <Button onClick={cancelFormOpen} type='button'>Cancelar</Button>
          </Form>
        </Segment>
      </div>
    );
  }
}

export default EventForm;
