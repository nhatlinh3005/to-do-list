import React, { Component } from 'react'
import Search from './Search'
import Sort from './Sort'

export class Control extends Component {
    render() {
        return (
            <div className="row">
                <Search />
                <Sort />
                <div className="input-group mb-3 col-sm-5 row">
                    <button type="button" class="btn btn-primary col-sm-12">Add Task</button>
                </div>
            </div>
        )
    }
}

export default Control
