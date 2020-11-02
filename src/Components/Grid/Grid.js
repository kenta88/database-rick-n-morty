import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";

import "./Grid.css";

function Grid({ characters, isLoading }) {
    return (
        <div className="container grid">
            {characters.map((character) => (
                <Card key={character.id} character={character} />
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
