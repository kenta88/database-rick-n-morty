import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";

import "./Grid.css";

function Grid({ characters, isLoading }) {
    const favourites = [1, 5];
    return (
        <div className="container grid">
            {characters.map((character) => (
                <Card
                    key={character.id}
                    character={character}
                    isSelected={favourites.includes(character.id)}
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

Grid.propTypes = {
    characters: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

export default Grid;
