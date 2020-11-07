import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";

import "./Grid.css";

class Grid extends React.Component {
    constructor() {
        super();
        this.state = {
            favourites: [],
        }
    }

    onSelectChange = (id, isSelected) => {
        let nextFavourites = [...this.state.favourites];
        if(!isSelected) {
            nextFavourites.push(id);
        } else {
            nextFavourites = nextFavourites.filter((selectedId) => selectedId !== id)
        }

        this.setState({
            favourites: nextFavourites,
        })
    }

    render() {
        const { characters, isLoading } = this.props;
        const { favourites } = this.state;
        return (
            <div className="container grid">
                {characters.map((character) => (
                    <Card
                        key={character.id}
                        character={character}
                        isSelected={favourites.includes(character.id)}
                        onSelectChange={this.onSelectChange}
                    />
                ))}
                {isLoading && (
                    <div className="loading">
                        <p>Loading ...</p>
                    </div>
                )}
            </div>
        );
    }
}

Grid.propTypes = {
    characters: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

export default Grid;
