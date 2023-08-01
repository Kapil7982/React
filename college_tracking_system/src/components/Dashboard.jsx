import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StudentTable from './StudentTable';
import StudentForm from './StudentForm';
import './Dashboard.css';

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [sortBy, setSortBy] = useState('first_name');
  const [sortOrder, setSortOrder] = useState('ascending');
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:8080/students');
      const sortedData = response.data.sort((a, b) => a.first_name.localeCompare(b.first_name));
      setStudents(sortedData);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };
  

  const handleSort = () => {
    let sortedStudents = [...students];
    sortedStudents.sort((a, b) => {
      const keyA = a[sortBy];
      const keyB = b[sortBy];
      if (sortOrder === 'ascending') {
        if (sortBy === 'age' || sortBy === 'tenth_score' || sortBy === 'twelfth_score') {
          return keyA - keyB; 
        } else {
          return keyA.localeCompare(keyB);
        }
      } else {
        if (sortBy === 'age' || sortBy === 'tenth_score' || sortBy === 'twelfth_score') {
          return keyB - keyA; 
        } else {
          return keyB.localeCompare(keyA);
        }
      }
    });
    setStudents(sortedStudents);
  };
  
  

  return (
    <div className="dashboard">
      <div className="controls">
        <select className="sortby" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="first_name">First Name</option>
          <option value="gender">Gender</option>
          <option value="age">Age</option>
          <option value="tenth_score">10th Score</option>
          <option value="twelfth_score">12th Score</option>
        </select>
        <select className="sortorder" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
        <button className="sort" onClick={handleSort}>Sort</button>
        <button className="togglebtn" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Dashboard' : 'Add Student'}
        </button>
      </div>
      {showForm ? <StudentForm fetchStudents={fetchStudents} /> : <StudentTable students={students} />}
    </div>
  );
};

export default Dashboard;
