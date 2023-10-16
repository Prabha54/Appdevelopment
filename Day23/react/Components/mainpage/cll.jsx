import React, { useState } from 'react';
import './cll.css'; // Import your CSS file
import Sidebar from '../Sidebar';
import Header from '../Header/Header';
import { posttax } from '../../services/api';

function EmployeeSalary() {
  const [employeeName, setEmployeeName] = useState('');
  const [salary, setSalary] = useState('');
  const [tax, setTax] = useState(0);
  const [netSalary, setNetSalary] = useState(0);

  const calculateTax = async() => {
    const salaryValue = parseFloat(salary);

    var calculatedTax = 0;
    if (!isNaN(salaryValue)) {

      if (salaryValue > 200000) {
       calculatedTax = salaryValue * 0.05;
      }

      setTax(calculatedTax);
      setNetSalary(salaryValue - calculatedTax);
    } else {
      setTax(0);
      setNetSalary(0);
    }

    const res=await posttax({employeeName,salary,tax:calculatedTax,netsalary:salaryValue - calculatedTax});
    console.log(res.data);
  };



  return (
    <div className="">
      <Header />
      <div className="container">

        <h3>Employee Salary Calculation</h3>

        <div className="form-group">
          <label>Employee Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Employee Name"
            value={employeeName}
            onChange={(event) => setEmployeeName(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Salary</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Salary"
            value={salary}
            onChange={(event) => setSalary(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Tax</label>
          <input type="text" className="form-control" placeholder="Tax" value={tax.toFixed(2)} readOnly />
        </div>

        <div className="form-group">
          <label>Net Salary</label>
          <input type="text" className="form-control" placeholder="Net Salary" value={netSalary.toFixed(2)} readOnly />
        </div>

        <button type="button" onClick={calculateTax} className="btn btn-primary mt-4">
          Calculate
        </button>
      </div>
    </div>
  );
}

export default EmployeeSalary;
