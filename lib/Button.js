import React from 'react';

export default class Button extends React.Component{
  render() {
    const { userInput, handle, title } = this.props;
    return(
      <button disabled={ !userInput } onClick={()=> handle() }> { this.props.title } </button>
    )
  }
}
