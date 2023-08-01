import React, { useState } from 'react';
import axios from 'axios';
import './StudentForm.css';

const StudentForm = ({ fetchStudents }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    age: '',
    tenth_score: '',
    twelfth_score: '',
    preferred_branch: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.first_name) {
      setError('First name missing');
      return;
    }
    if (parseInt(formData.age) > 50) {
      setError('Age should not be greater than 50');
      return;
    }
    if (parseInt(formData.tenth_score) > 100 || parseInt(formData.twelfth_score) > 100) {
      setError('10th and 12th score should not be greater than 100');
      return;
    }

    try {
      await axios.post('http://localhost:8080/students', formData);
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        gender: '',
        age: '',
        tenth_score: '',
        twelfth_score: '',
        preferred_branch: '',
      });
      setError('');
      fetchStudents();
    } catch (error) {
      console.error('Error creating student:', error);
    }
  };

  return (
    <div className="addstudent">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first_name">First Name:</label>
          <input type="text" className="first_name" name="first_name" value={formData.first_name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="last_name">Last Name:</label>
          <input type="text" className="last_name" name="last_name" value={formData.last_name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" className="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Gender:</label>
          <label>
            <input type="radio" className="gender" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} />
            Male
          </label>
          <label>
            <input type="radio" className="gender" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} />
            Female
          </label>
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" className="age" name="age" value={formData.age} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="tenth_score">10th Score:</label>
          <input type="number" className="tenth_score" name="tenth_score" value={formData.tenth_score} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="twelfth_score">12th Score:</label>
          <input type="number" className="twelfth_score" name="twelfth_score" value={formData.twelfth_score} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="preferred_branch">Preferred Branch:</label>
          <select className="preferred_branch" name="preferred_branch" value={formData.preferred_branch} onChange={handleChange}>
            <option value="">Select Branch</option>
            <option value="Sports">Sports</option>
            <option value="Arts">Arts</option>
            <option value="Science">Science</option>
            <option value="Commerce">Commerce</option>
            <option value="Law">Law</option>
          </select>
        </div>
        {error && <div className="error">{error}</div>}
        <div>
          <input type="submit" value="Submit" className="submit" />
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
