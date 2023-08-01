import React from 'react';
import './StudentTable.css';

const StudentTable = ({ students }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Age</th>
          <th>10th Score</th>
          <th>12th Score</th>
          <th>Preferred Branch</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.first_name}</td>
            <td>{student.last_name}</td>
            <td>{student.email}</td>
            <td>{student.gender}</td>
            <td>{student.age}</td>
            <td>{student.tenth_score}</td>
            <td>{student.twelfth_score}</td>
            <td>{student.preferred_branch}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
