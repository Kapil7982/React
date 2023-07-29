import axios from "axios";
import { useEffect, useState } from "react";
import '../styles/EmployeeTable.css';

const EmployeeTable = () =>{

    const [employees, setEmployees] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:8080/employees').then((response)=>{
            setEmployees(response.data);
        });
    },[]);

    const handleDeleteEmployee = (employeeId) => {
        axios.delete(`http://localhost:8080/employees/${employeeId}`).then(() => {
          setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== employeeId));
        });
      };

    return (
        
        <div>
            <h2>Employee Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Marital Status</th>
                    </tr>
                </thead>

                <tbody>
                    {employees.map((employee) =>(
                        <tr key={employee.id}>
                            <td><img src={employee.image} alt={employee.name} style={{width:'100px'}}/></td>
                            <td>{employee.name}</td>
                            <td>{employee.age}</td>
                            <td>{employee.address}</td>
                            <td>{employee.department}</td>
                            <td>{employee.salary}</td>
                            <td>{employee.isMarried ? 'Married' : 'Single'}</td>
                            <td>
                                <button onClick={() => handleDeleteEmployee(employee.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeTable;