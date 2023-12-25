import { useState } from 'react';
import { useStats } from '../contexts/StatsContext';
import axios from 'axios'
import './Admin.css';

const Admin = () => {
  const { updateStats } = useStats();
  const [formData, setFormData] = useState({
    employee_name: '',
    employee_id: '',
    title: '',
    salary: '',
    image: '',
    username: '',
    password: '',
    tasks: '',
    status: '',
    team:'',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
		console.log(formData);
		axios.post('http://localhost:8080/employee', formData)
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
    updateStats('totalNew', 1);
  };

  return (
    <div className="createEmployee">
      <h2>Admin Panel</h2>
      <form className="createEmployee" onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Employee Name"
				name="employee_name"
				onChange={handleChange}
			/>
			<input
				type="text"
				placeholder="Employee id"
				name="employee_id"
				onChange={handleChange}
			/>
			<select name="title" onChange={handleChange}>
				<option value="intern">Intern</option>
				<option value="Jr Software Developer">Jr Software Developer</option>
				<option value="Sr Software Developer">Sr Software Developer</option>
				<option value="Team Lead">Team Lead</option>
			</select>
			<input
				type="number"
				placeholder="Salary"
				name="salary"
				onChange={handleChange}
			/>
			<input
				type="text"
				placeholder="Image"
				name="image"
				onChange={handleChange}
			/>
			<input
				type="text"
				placeholder="User Name"
				name="username"
				onChange={handleChange}
			/>
			<input
				type="password"
				placeholder="Password"
				name="password"
				onChange={handleChange}
			/>
			<input
				type="text"
				placeholder="Enter tasks separated by commas"
				name="tasks"
				onChange={handleChange}
			/>
			<select name="status" id="status" onChange={handleChange}>
				<option value="">Select Status</option>
				<option value="terminated">Terminated</option>
				<option value="working">Working</option>
			</select>
			<select name="team" id="team" onChange={handleChange}>
				<option value="">Select team</option>
				<option value="frontend">Frontend</option>
				<option value="backend">Backend</option>
				<option value="qa">QA</option>
			</select>
			<input className="createUser" type="submit" value={'submit'} />
		</form>
    </div>
  );
};

export default Admin;
