import React from 'react';
import Input from './Input';
import Button from './Button';
import Hint from './Hint';
import Score from './Score';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      min: '',
      max: '',
      randomNumber: '',
      userInput: '',
      userGuess: '?',
      userHint: 'Your hint will go here!',
      score: 0,
    }
  }

  updateMin(value) {
    let val = parseInt(value)
    this.setState({ min: val })
    if(isNaN(val) ){
      this.setState({ userHint: 'Enter numbers!', min:'', max:'' })
    }
  }

  updateMax(value) {
    let val = parseInt(value)
    this.setState({ max: val })
    if(isNaN(val) ){
      this.setState({ userHint: 'Enter numbers!', min:'', max:'' })
    }
  }

  updateUserInput(value) {
    let val = parseInt(value)
    this.setState({ userInput: val })
    if(isNaN(val) ){
      this.setState({ userHint: 'Enter numbers!', userInput:'' })
    }
  }

  clearUserInput() {
    this.setState({ userInput: '' })
  }

  getRandomNumber() {
    let { min, max } = this.state;
    this.setState({
      randomNumber: min + Math.floor((Math.random() * (max - min) + 1)),
      userHint: 'Guess a number between ' + min + ' and ' + max,
    })
  }

  checkUserGuess() {
    let { userInput, randomNumber, score, min, max } = this.state;
    this.setState({ userGuess: userInput, userInput: '' })
    console.log(min, max, randomNumber)

    if(min === '' || max === '') {
      return this.setState({ userGuess: 'OOPS!', userHint: "You didn't enter a range" })
    }

    if(userInput > max || userInput < min) {
      return this.setState( { userGuess: 'OOPS!', userHint: 'You guessed out of the range' } )
    }

    if(userInput > randomNumber) {
      this.setState({ userHint: 'That guess is too high, try again.' })
    }

    else if (userInput < randomNumber) {
      this.setState({ userHint: 'That guess is too low, try again.' })
    }

    else {
      this.setState({
        score: score + 100,
        userGuess: 'You got it!',
        min: min - 10,
        max: max + 10,
      })
      setTimeout( ()=> {this.getRandomNumber()} );
    }
  }

  resetGame() {
    this.setState( { min: '', max: '', randomNumber: '', userGuess: '?', userHint: 'Your hint will go here!', score: 0 } )
  }

  render() {
    let { min, max, userInput, userHint, userGuess, score, randomNumber } = this.state;
    return(
      <section>

        <h2> Enter a number range to play: </h2>
        <Input title='min' handle={ this.updateMin.bind(this) } value={ min } />
        <Input title='max' handle={ this.updateMax.bind(this) } value={ max } />
        <Button userInput={ max && min } title='Enter Range' handle={ this.getRandomNumber.bind(this) } />

        <h2> Take a guess: </h2>
        <Input title='guess a number' handle={ this.updateUserInput.bind(this) } value={ userInput } />
        <Button userInput={ userInput } title='Submit' handle={ this.checkUserGuess.bind(this) } />
        <Button userInput={ userInput } title='Clear' handle={ this.clearUserInput.bind(this) } />

        <Hint userHint={ userHint } userGuess={ userGuess } />
        <Score value={ score } />
        <Button userInput={ randomNumber } title='Reset Game' handle={ this.resetGame.bind(this) } />

      </section>
    )
  }
}
