import React, { Component } from 'react'
import Search from './Search'

export class Sort extends Component {
    render() {
        return (
            <div className="input-group mb-3 col-sm-3">
                <div class="dropdown">
                    <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sort By
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
                <button type="button" class="btn btn-success">
                    Name DESC <span class="badge badge-light">4</span>
                </button>
            </div>
        )
    }
}

export default Sort
