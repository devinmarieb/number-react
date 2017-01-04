import React from 'react';

export default class Input extends React.Component{
  render() {
    const { title, value, handle } = this.props;
    return(
      <input type='text' placeholder={ title } value={ value } onChange={ (e)=> handle(e.target.value) } />
    )
  }
}
