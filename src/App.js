import React from 'react';
import Header from "./Components/Header/Header";
import Grid from "./Components/Grid/Grid";
import Paginator from "./Components/Paginator/Paginator";
import SearchBox from "./Components/SearchBox/SearchBox";

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      totalPages: 1,
      isLoading: false,
      characters: [], 
    };
  }

  componentDidMount = () => {
    this.fetchCharacters();
  }

  componentDidUpdate = (prevProps, prevState) => {
    if(prevState.currentPage !== this.state.currentPage) {
      this.fetchCharacters();
    }
  }

  fetchCharacters = async () => {
    try {
      this.setState({isLoading: true});

      const url = new URL("https://rickandmortyapi.com/api/character");

      const params = {
        page: this.state.currentPage,
      };

      Object.keys(params).forEach((key) => {
        url.searchParams.append(key, params[key]);
      })

      const response = await fetch(url);
      const json = await response.json();
      this.setState({
        characters: json.results,
        totalPages: json.info.pages,
      });
    } catch(e) {
      console.log(e);
    } finally {
      this.setState({isLoading: false});
    }
  }

  onPaginatorChange = (nextPage) => {
    this.setState({currentPage: nextPage});
  }

  render() {
    const {characters, isLoading, currentPage, totalPages} = this.state;
    return (
      <div className="App">
        <Header />
        <SearchBox />
        <Grid characters={characters} isLoading={isLoading}/>
        <Paginator 
          currentPage={currentPage}
          onChange={this.onPaginatorChange}
          totalPages={totalPages}
        />
      </div>
    );
  }
}

export default App;
