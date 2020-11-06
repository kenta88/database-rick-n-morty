import React from "react";
import Proptypes from "prop-types";

import "./SearchBox.css";


class SearchBox extends React.Component {
    constructor() {
        super();
        this.state = {
            searchKey: ""
        };
    }

    onInputChange = (e) => {
        this.setState({searchKey: e.target.value})
    }

    onClickSubmit = () => {
        this.props.onSubmit(this.state.searchKey);
    }

    render() {
        return(
            <div className="container search-box">
            <input type="text" placeholder="Search" onChange={this.onInputChange}/>
            <button onClick={this.onClickSubmit}>
                {'>'}
            </button>
        </div>
        );
    }
}

SearchBox.propTypes = {
    onSubmit: Proptypes.func.isRequired,
}

export default SearchBox;
