import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addPet} from '../actions'
import {bindActionCreators} from 'redux';
import { browserHistory } from 'react-router';

class PetsNew extends Component {

  handleSubmit(e){
    e.preventDefault()
    const pet = {
      name: this.refs.petName.value
    }
    this.props.addPet(pet)
    this.refs.petName.value = ""
    browserHistory.push('/pets')
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit.bind(this)} >
        <input type="text" ref="petName"/>
      </form>
    )
  }
}

  function mapDispatchToProps(dispatch){
    return {
      addPet: bindActionCreators(addPet, dispatch)
    }
  }

export default connect(null, mapDispatchToProps)(PetsNew)
