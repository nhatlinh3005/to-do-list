import React, { Component } from 'react'

export class Search extends Component {
    render() {
        return (
            <div className="input-group mb-3 col-sm-4">
                <input type="text" className="form-control" placeholder="Search"  />
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button">Go!</button>
                </div>
            </div>
        )
    }
}

export default Search
