import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useStats } from '../contexts/StatsContext';
import './EmployeeList.css';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const { updateStats } = useStats();

  useEffect(() => {
    // Fetch employee data from the mock server
    fetch('http://localhost:8080/employee')
      .then(response => response.json())
      .then(data => {
        setEmployees(data);
        updateStats('totalEmployees', data.length); 
      })
      .catch(error => console.error('Error fetching employees', error));
  }, [updateStats]);

  return (
    <div className="list_container">
      {employees.map(employee => (
        <div key={employee.id} className="employee_card">
          <Link to={`/employees/${employee.id}`}>
            <img className="employee_image" src={employee.image} alt={employee.employee_name} />
            <p className="employee_name">{employee.employee_name}</p>
            <p className="employee_title">{employee.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;
