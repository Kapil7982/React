
import axios from 'axios';
import React, {useState} from 'react';
import '../styles/EmployeesForm.css';


const EmployeeForm = () =>{

    const [employee, setEmployee] = useState({
        image:'',
        name:'',
        age:'',
        address:'',
        department:'',
        salary:'',
        isMarried:false,
    });

    const handleInputChanges = (e)=>{

        const {name,value,type,checked, files}  = e.target;
        const inputValue = type==='checkbox' ? checked : type=== 'file' ? files[0] : value;
        if(type === 'file')
        {
            const reader = new FileReader();
            reader.onload = () =>{
                setEmployee({...employee, [name]: reader.result});
            };
            reader.readAsDataURL(inputValue);
        }
        else
        {
            setEmployee({ ...employee, [name]: inputValue });
        }
        
    };

    const handleSubmit = (e)=>{
        e.preventDefault();

          const employeeData = {
            image: employee.image,
            name: employee.name,
            age: employee.age,
            address: employee.address,
            department: employee.department,
            salary: employee.salary,
            isMarried: employee.isMarried,
            
          };
        

        axios.post('http://localhost:8080/employees', employeeData).then((response) =>{
            console.log('Employee added:', response.data);


            setEmployee({
                image:'',
                name:'',
                age:'',
                address:'',
                department:'',
                salary:'',
                isMarried:false,
            });
        });
    };

    return (

        <div className="form-container">
            <h2>Employee Form</h2>
            <form action="" onSubmit={handleSubmit}>

                <label> 
                    Image:
                    <input type="text" name='image' value={employee.image} onChange={handleInputChanges}/>
                </label>
                <br/>
                <label> 
                    Name:
                    <input type="text" name='name' value={employee.name} onChange={handleInputChanges}/>
                </label>
                <br/>
                <label> 
                    Age:
                    <input type="number" name='age' value={employee.age} onChange={handleInputChanges}/>
                </label>
                <br/>
                <label> 
                    Address:
                    <input type="text" name='address' value={employee.address} onChange={handleInputChanges}/>
                </label>
                <br/>
                <label> 
                    Department:
                    <select name="department" value={employee.department} onChange={handleInputChanges}>
                        <option value="">Select Department</option>
                        <option value="HR">HR</option>
                        <option value="IT">IT</option>
                        <option value="Finance">Finance</option>
                    </select>
                </label>
                <br/>
                <label> 
                    Salary:
                    <input type="number" name='salary' value={employee.salary} onChange={handleInputChanges}/>
                </label>
                <br/>
                <label> 
                    Marital Status:
                    <input type="checkbox" name='isMarried' checked={employee.isMarried} onChange={handleInputChanges}/>
                </label>
                <br/>
                <button type='submit'>Submit</button>
            </form>

        </div>
    );
};

export default EmployeeForm