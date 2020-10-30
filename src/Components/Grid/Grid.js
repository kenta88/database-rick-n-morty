import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";

import "./Grid.css";

function Grid({ characters }) {
    return (
        <div className="container grid">
            {characters.map((character) => (
                <Card key={character.id} character={character} />
            ))}
        </div>
    );
}

Grid.propTypes = {
    characters: PropTypes.array.isRequired,
};

export default Grid;
