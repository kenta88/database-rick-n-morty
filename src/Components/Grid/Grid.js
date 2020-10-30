import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";

import "./Grid.css";

function Grid({ characters, isLoading }) {
    return (
        <div className="container grid">
            {isLoading && (
                <p>Loading ...</p>
            )}
            {characters.map((character) => (
                <Card key={character.id} character={character} />
            ))}
        </div>
    );
}

Grid.propTypes = {
    characters: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

export default Grid;
