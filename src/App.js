import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateEmployee from '../src/pages/createEmployee/CreateEmployee'
import EmployeeList from '../src/pages/employeeList/EmployeeList'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='content'>
        <Router>
          <Routes>
            <Route path="/" element={<CreateEmployee />} />
            <Route path="/employee-list" element={<EmployeeList />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
