import React from 'react';
import {connect} from 'react-redux';

const PetsShow = (props) => {
  // console.log(props.pet)
  // props.routeParams : id
  // need to find a way to parse the pets
  return (
    <div className="col-md-8">
      <h2>{props.pet.name}</h2>
      <p>{props.pet.description}</p>
    </div>)
}

function mapStateToProps(state, ownProps){
  const pet = state.pets.find((pet) => pet.id == ownProps.routeParams.id)

  if(pet){
    return {pet: pet}
  } else {
    return {pet: {}}
  }
}

export default connect(mapStateToProps)(PetsShow)
