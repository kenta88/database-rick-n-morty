import React from "react";

import "./SearchBox.css";

const SearchBox = () => {
    return(
        <div className="container search-box">
            <input type="text" placeholder="Search"/>
            <button>
                {'>'}
            </button>
        </div>
    );
};

export default SearchBox;
