import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  updateEmployee } from '../redux/actions';
import { useParams } from 'react-router-dom';

function UpdateEmp() {
    let[employee , setEmployee] = useState({})
    let empData = useSelector((state) => state.empData.employee);
    const {id}= useParams();
    let dispatch = useDispatch();

    useEffect(() => {
        const oldEmp = empData.find(emp => emp.empid === Number(id));
        if (oldEmp) {
            setEmployee(oldEmp);
        }
    }, [id, empData]);
    


    let getInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setEmployee({...employee,[name]:value})
    }

    let submitData = (e) => {
        e.preventDefault();
        if(!employee.name || !employee.email ) {
            alert("fill all the fields");
        return;
    }   
        dispatch(updateEmployee(employee));
    }
    return (
        <div>
            <h1>Edit Employee</h1>
            <form onSubmit={(e) => submitData(e)}>
                <table border={1}>
                    <tr>
                        <td>Name</td>
                        <td><input type="text" name="name" value={employee.name ? employee.name : ""} onChange={(e) => getInput(e)} />
                        </td>
                    </tr>

                    <tr>
                        <td>Email</td>
                        <td><input type="email" name="email" value={employee.email || ""} onChange={(e) => getInput(e)} placeholder='Enter you Email id' />
                        </td>
                    </tr>

                    <tr>
                        <td>Age</td>
                        <td><input type="number" name="age" value={employee.age || ""}  onChange={(e) => getInput(e)} />
                        </td>
                    </tr>

                    <tr>
                        <td></td>
                        <td>
                            <input type="submit" name="submit" />
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    )
}

export default UpdateEmp;
