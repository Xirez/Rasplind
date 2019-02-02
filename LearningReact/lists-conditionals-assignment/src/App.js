import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './Components/ValidationComponent';
import CharComponent from './Components/CharComponent';

class App extends Component {
  state = {
    inputLengt: 0,
    inputChars: ''
  }

  inputChange = (event) => {
    this.setState({inputLengt: event.target.value.length});
    this.setState({inputChars: event.target.value});
  }

  deleteCharacterHandler = (charIndex) => {
    const string = this.state.inputChars.split('');
    const stringLength = this.state.inputLengt;
    string.splice(charIndex, 1);
    this.setState({inputChars: string.join('')});
    this.setState({inputLengt: (stringLength - 1)});
  }
  
  render() {
    let charArray = this.state.inputChars.split('');

    let characterArray = charArray.map((char, index) => {
        return (
          <CharComponent
            click={() => this.deleteCharacterHandler(index)}
            char={char}
            key={index}
          />
        );
      })
    

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <input type="text" value={this.state.inputChars} onChange={(event) => this.inputChange(event)} />
        <p>String length: {this.state.inputLengt}</p>
        <ValidationComponent length={this.state.inputLengt} />
        {characterArray}
      </div>
    );
  }
}

export default App;
