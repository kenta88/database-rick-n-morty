import React from 'react';
import Header from "./Components/Header/Header";
import Grid from "./Components/Grid/Grid";

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      characters: [], 
    };
  }

  componentDidMount = () => {
    this.fetchCharacters();
  }

  fetchCharacters = async () => {
    try {
      this.setState({isLoading: true});
      const response = await fetch("https://rickandmortyapi.com/api/character/?page=1");
      const json = await response.json();
      this.setState({characters: json.results});
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({isLoading: false});
    }
  }

  render() {
    const {isLoading, characters} = this.state;
    return (
      <div className="App">
        <Header />
        <Grid characters={characters} isLoading={isLoading} />
      </div>
    );
  }
}

export default App;
