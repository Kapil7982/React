import React from 'react';
import './App.css';
import {BrowserRouter  as Router, Route, Link, Routes} from 'react-router-dom';
import EmployeeForm from './components/EmployeeForms';
import EmployeeTable from './components/EmployeeTable';

function App() {
  return (
    <Router>
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to='/'>Employee Form</Link>
          </li>
          <li>
            <Link to='/employees'>Employee Table</Link>
          </li>
        </ul>
      </nav>

      <hr/>
      <Routes>
      <Route exact path='/' Component={EmployeeForm}/>
      <Route exact path='/employees' Component={EmployeeTable}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
