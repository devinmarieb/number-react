import React from 'react';

export default class Hint extends React.Component{
  render() {
    return(
      <aside>
        <h2 className='user-guess'> { this.props.userGuess } </h2>
        <p> { this.props.userHint } </p>
      </aside>
    )
  }
}
