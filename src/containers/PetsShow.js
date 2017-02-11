import React from 'react';
import {connect} from 'react-redux';

class PetsShow extends React.Component {

  render(){
    const pet = this.props.pet
    return (
      <div className="col-md-8">
        <h2>{pet.name}</h2>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  const pet = state.pets.find((pet) => pet.id == ownProps.routeParams.id)
  if(pet){
    return {
      pet: pet
    }
  } else {
    return {
      pet: {}
    }
  }
}

export default connect(mapStateToProps)(PetsShow)
