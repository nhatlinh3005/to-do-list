import React, { Component } from 'react'

export class Form extends Component {
    render() {
        return (
            <div className="row">
                <div className="input-group mb-3 col-sm-5 offset-md-7">
                    <input type="text" className="form-control" placeholder="Task name"  />
                    <div class="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Level
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Low</a>
                            <a className="dropdown-item" href="#">Medium</a>
                            <a className="dropdown-item" href="#">Hight</a>
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary">Submit</button>
                    <button type="button" class="btn btn-light">Cancel</button>
                </div>
            </div>
        )
    }
}

export default Form
