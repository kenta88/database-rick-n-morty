import React from 'react';
import Header from "./Components/Header/Header";
import Grid from "./Components/Grid/Grid";

import Character from "./Components/Card/Character";

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [
        Character
      ], 
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Grid characters={this.state.characters} />
      </div>
    );
  }
}

export default App;
