import React from 'react';


export default class Score extends React.Component {
  render() {
    return(
      <h3> Score: { this.props.value } </h3>
    )
  }
}
