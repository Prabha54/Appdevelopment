import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/userSlice';
import Header from '../Header/Header';
import NavBar from '../../Navbar/Navbar';
import './Dashboard.css';
const Dashboard = () => {
    // const user=useSelector(selectUser)
    const user=localStorage.getItem('username')
  return (
    <>
    <div>
        <Header/>
        <h1 className='text-center' style={{marginTop:"50px"}}> 
            Welcome {user} !!
        </h1>
    </div>
    
     <div className="bigimg">
     <img src='https://www.ernstheating.com/wp-content/uploads/2021/03/hvac-tax-credits.jpg' style={{width:'150vw',height:'90vh',marginTop:'10px',marginLeft:'5px'}}></img>
    </div>
    <br></br>
    <br></br>

    <div className='theory'>
      <div className='main'>
    Income tax is a tax imposed by a government on an individual's or entity's earnings or income. It is one of the primary sources of revenue for governments and is used to fund public services and programs, such as infrastructure, education, healthcare, and social welfare.
    <br></br>
    <br></br>
    </div>
    <div className='bold'>
    Taxable Income:
    <br></br>
    <br></br>
    </div>
      <div className='main'>
      Income tax is typically assessed on a person's or organization's taxable income, which includes various sources of earnings, such as wages, salaries, interest, dividends, business profits, and capital gains. It may also account for deductions and credits, which can reduce the overall tax liability.
    <br></br>
    <br></br>
    </div>
    <div className='bold'>
    Tax Rates: 
    <br></br>
    <br></br>
    </div>
    <div className='main'>
    Income tax is levied at different rates depending on the amount of income earned. Tax rates are often progressive, meaning that higher incomes are subject to higher tax rates. Governments use tax brackets to determine how much tax is owed at different income levels.

    <br></br>
    <br></br>
    </div>
    <div className='bold'>
    Tax Deductions: 
    <br></br>
    <br></br>
    </div>
    <div className='main'>
    Taxpayers can often reduce their taxable income through deductions. These deductions can include expenses related to home mortgage interest, educational expenses, medical expenses, and contributions to retirement accounts. Reducing taxable income can lead to lower tax liability.    <br></br>
    <br></br>
    </div>
    <div className='bold'>
    Filing and Compliance: 
    <br></br>
    <br></br>
    </div>
      <div className='main'>
      In most countries, individuals and businesses are required to file an income tax return, which reports their income, deductions, and credits. Accurate and timely filing, along with paying any taxes owed, is a legal obligation.
    <br></br>
    <br></br>
    </div>
    <div className='bold'>
    Government Revenue:
    <br></br>
    <br></br>
    </div>
    <div className='main'>
    Income tax is a significant source of revenue for governments at the federal, state, and local levels. It funds public services, infrastructure projects, and social safety net programs, among others.    <br></br>
    <br></br>
    </div>
    <div className='bold'>
    Progressive Taxation:
    <br></br>
    <br></br>
    </div>
    <div className='main'>
    Many income tax systems are designed to be progressive, meaning that those with higher incomes pay a higher percentage of their income in taxes. This progressive structure is intended to redistribute wealth and provide a safety net for lower-income individuals.
    <br></br>
    <br></br>
    </div>
    <div className='bold'>
    Tax Planning:
    <br></br>
    <br></br>
    </div>
    <div className='main'>
    Taxpayers often engage in tax planning to legally minimize their tax liability. Strategies can include investing in tax-advantaged accounts, taking advantage of deductions, and structuring income in a tax-efficient manner.
    <br></br>
    <br></br>
    </div>
    <div className='main'>
    It's important to understand that income tax laws and regulations vary by country and can be quite complex. The specific rules, rates, and deductions may differ significantly from one jurisdiction to another. It is advisable to seek advice from tax professionals or consult the tax authority in your region to ensure compliance with the tax code and to optimize your financial situation.
    <br></br>
    <br></br>
    </div>
    </div>
    </>

  )
}
  
export default Dashboard