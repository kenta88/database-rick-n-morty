import React from "react";
import PropTypes from 'prop-types';

import "./Card.css";

function Card({ character, isSelected, onSelectChange }) {
    const onClickButton = () => {
        onSelectChange(character.id, isSelected);
    }
    const selectedClass = isSelected ? "selected" : "";
    return (
        <div className={`card ${selectedClass}`}>
            <img src={character.image} alt={character.name} />
            <div className="card-info">
                <p className="card-info__name">
                    <span>Name:</span>
                    {character.name}
                </p>
                <p className="card-info__generics">
                    {character.species} <span>from</span> {character.location.name}
                </p>
            </div>
            <button className="favourite" onClick={onClickButton}>
                {isSelected ? "Remove" : "Add"}
            </button>
        </div>
    );
}

Card.propTypes = {
    character: PropTypes.object.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onSelectChange: PropTypes.func.isRequired,
}

export default Card;
