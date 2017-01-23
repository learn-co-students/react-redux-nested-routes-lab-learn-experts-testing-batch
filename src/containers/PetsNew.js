import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addPet} from '../actions';
import { bindActionCreators } from 'redux';
import {browserHistory} from 'react-router'

class PetsNew extends Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const pet = {
      name: e.target.name.value,
      description: e.target.description.value
    }
    this.props.addPet(pet);
    browserHistory.push(`/pets/${this.props.pets.length + 1}`)
  }

  render(){
    console.log(this.props.pets.length)
    return (
      <div className="col-md-8">
        <h2>New Pet</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input type="text" name="name"/>
          <br /><br />
          <label>Description: </label>
          <br />
          <textarea name="description"></textarea>
          <br /><br />
          <input type="submit" value="create pet" />
        </form>
      </div>
    )
  }
}
function mapStateToProps(state){
  return {
    pets: state.pets
  }
}

function mapDispatchToProps(dispatch){
  return {
    addPet: bindActionCreators(addPet, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PetsNew)
