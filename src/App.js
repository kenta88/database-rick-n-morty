import React from 'react';
import Header from "./Components/Header/Header";
import Grid from "./Components/Grid/Grid";

import Character from "./Components/Card/Character";

import './App.css';

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      characters: [
        Character
      ], 
    };
  }

  componentDidMount = () => {
    this.fetchCharacters();
  }

  fetchCharacters = async () => {
    try {
      this.setState({isLoading: true});
      await timeout(3000);
    } catch(e) {

    } finally {
      this.setState({isLoading: false});
    }
  }

  render() {
    const {characters, isLoading} = this.state;
    return (
      <div className="App">
        <Header />
        <Grid characters={characters} isLoading={isLoading}/>
      </div>
    );
  }
}

export default App;
