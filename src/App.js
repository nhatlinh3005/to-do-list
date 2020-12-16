import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Table from './components/Table';
import Control from './components/Control';
import Form from './components/Form';

function App() {
    return (
        <div className="container">
            <Title />
            <Control />
			<Form />
            <Table />
        </div>
    );
}

export default App;
