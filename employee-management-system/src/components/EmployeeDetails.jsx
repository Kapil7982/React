import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStats } from '../contexts/StatsContext';
import { useAuth } from '../contexts/AuthContext';
import './EmployeeDetails.css';

const EmployeeDetails = () => {
  const { id } = useParams();
  const { updateStats } = useStats();
  const { isAuthenticated } = useAuth();
  const [employee, setEmployee] = useState({});
  const [isTerminated, setIsTerminated] = useState(false);

  useEffect(() => {
    // Fetch employee details based on the ID from the mock server
    fetch(`http://localhost:8080/employee/${id}`)
      .then(response => response.json())
      .then(data => setEmployee(data))
      .catch(error => console.error('Error fetching employee details', error));
  }, [id]);

  const handleTerminate = () => {
    // Update stats context to reflect termination
    setIsTerminated(true);
    updateStats('totalTerminated', 1);
  };

  const handlePromote = () => {
    // Update stats context to reflect promotion
    updateStats('totalPromoted', 1);
  };

  return (
    <div className="user_details">
      <h2>Employee Details</h2>
      <img className="user_image" src={employee.image} alt={employee.employee_name} />
      <p className="user_name">{employee.employee_name}</p>
      <p className="user_salary">{employee.salary}</p>
      <div className="tasks">
        <p className="task">{employee.tasks}</p>
      </div>
      <p className="status">{isTerminated ? 'Terminated' : 'Working'}</p>
      <p className="title">{employee.title}</p>
      {!isTerminated && isAuthenticated && (
        <>
          <button className="fire" onClick={handleTerminate}>Fire Employee</button>
          {employee.title !== 'Team Lead' && (
            <button className="promote" onClick={handlePromote}>Promote Employee</button>
          )}
        </>
      )}
    </div>
  );
};

export default EmployeeDetails;
