import React, { Component } from 'react'
import {connect} from 'react-redux';//connect is HOC
import {incrementCounter, decrementCounter} from './testActions'
import { Button } from 'semantic-ui-react';

//const mapStateToProps official name
const mapState = (state) => ({
  data: state.test.data
})

//const mapDispatchToProps official name
const actions = {
  incrementCounter,
  decrementCounter
}

class TestComponent extends Component {
  render() {
    const {data, incrementCounter, decrementCounter} = this.props
    return (
      <div>
        <h1>test component</h1>
        <h3>A resposta é: {data}</h3>
        {/* <h3>A resposta é: {this.props.data}</h3> */}
        <Button onClick={incrementCounter} positive content="Incremento" />
        <Button onClick={decrementCounter} negative content="Decremento" />
      </div>
    )
  }
}

export default connect(mapState, actions)(TestComponent) ;//is a HOC