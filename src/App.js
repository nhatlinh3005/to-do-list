import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="container">
            <div className="title">
				<h1>Project 01 - ToDo List  ReactJS</h1>
			</div>
			<div className="row">
                <div className="input-group mb-3 col-sm-4">
                    <input type="text" className="form-control" placeholder="Search"  />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">Go!</button>
                    </div>
                </div>
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
                <div className="input-group mb-3 col-sm-5 row">
                    <button type="button" class="btn btn-primary col-sm-12">Add Task</button>
                </div>
                <div className="input-group mb-3 col-sm-5 offset-md-7">
                    <input type="text" className="form-control" placeholder="Task name"  />
                    <div class="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown button
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary">Primary</button>
                    <button type="button" class="btn btn-light">Light</button>
                </div>
            </div>
        </div>
    );
}

export default App;
