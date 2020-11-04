import React from "react";
import Proptypes from "prop-types";

import "./Paginator.css";

const Paginator = ({ currentPage, onChange, totalPages }) => {

    const onClickPrev = () => {
        const nextPage = currentPage - 1;
        if(nextPage > 0) {
            onChange(nextPage);
        }
    };

    const onClickNext = () => {
        const nextPage = currentPage + 1;
        if(nextPage <= totalPages) {
            onChange(nextPage);
        }
    };

    return(
        <div className="container paginator">
            <button onClick={onClickPrev}>Prev</button>
            <p>
                Page <span>{currentPage}</span> of {totalPages}
            </p>
            <button onClick={onClickNext}>Next</button>
        </div>
    );
};

Paginator.propTypes = {
    currentPage: Proptypes.number.isRequired,
    totalPages: Proptypes.number.isRequired,
    onChange: Proptypes.func.isRequired,
}

export default Paginator;
