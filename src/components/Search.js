
import React, { Component } from 'react'

export class Search extends Component {
    searchInput = (e) =>{
        this.props.handleSearch(e.target.value)
    }

    render() {
        return (
            <div className="searchpage">
                <form>
                    <input type="text" onChange={this.searchInput} value={this.props.searchInput} placeholder="Search movies" />
                </form>
            </div>
        )
    }
}

export default Search
