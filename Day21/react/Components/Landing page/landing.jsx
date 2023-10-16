import React from 'react'
// import { Navbar } from '../Navbar/Navbar'
import './landing.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CategoryIcon from '@mui/icons-material/Category';
import PeopleIcon from '@mui/icons-material/People';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import CalculateIcon from '@mui/icons-material/Calculate';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import hmnav from '../homenav/hmnav';
import NavBar from '../homenav/hmnav';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';
import Contactus from '../Contactus/Contactus';
// import Abouta from ''

export const Landing = () => {
    const navigate=useNavigate();
  return (
    <>
    <NavBar/>
      <div className='landbody'>
            <div className="toptext">
                <h1>What is Tax Calculation?</h1>
            </div>
            <div className="toplandtext">
                <h3>Tax calculating, also known as tax calculation, is the process of determining the amount of taxes that an individual, business, or entity owes to the government. It involves evaluating various financial factors, income sources, deductions, credits, and tax rates to compute the final tax liability. Tax calculation is a crucial step in the taxation process, and it helps ensure that taxpayers accurately fulfill their tax obligations. </h3>
            </div>
            <div className="toplandimg">
                <img src='https://i.gifer.com/7d1x.gif' style={{width:'40vw',height:'40vh',marginTop:'20%',marginLeft:'5%'}}></img>
            </div>
            <div className="toplandbut">
                <Button style={{backgroundColor:'blue',color:'white'}} onClick={()=>{navigate('/login')}}>Get Started</Button>
            </div>
       
        {/* <div className="landrow">
            <div className="rowtext" style={{paddingleft:'50px'}}>
                Employees
                <div className="rowico">
                    <PeopleIcon style={{fontSize:'30px',marginLeft:'-45px'}}/>
                </div>
            </div>
            <div className="rowtext">
                Incomes
                <div className="rowico">
                    <CurrencyRupeeIcon style={{fontSize:'30px'}}/>
                </div>
            </div>
            <div className="rowtext">
                Tax Calculating
                <div className="rowico">
                    <CalculateIcon style={{fontSize:'30px'}}/>
                </div>
            </div>
            
        </div> */}
         <div className="midimage">
                <img src='https://image.slidesharecdn.com/incometaxintroduction-091025051833-phpapp01/95/income-tax-introduction-3-728.jpg?cb=1256447934' style={{width:'100vw',height:'100vh',marginTop:'7%'}}></img> 
            </div>
        
           <div style={{marginLeft:'40px',marginTop:'150px',width:'45%',fontSize:'90px'}}><h2> "Welcome to Clear Tax!We're thrilled to have you on board Get ready to explore all the amazing features and possibilities our app has to offer.If you ever need assistance or have any questions, our support team is just a click away. Don't hesitate to reach out.Thank you for choosing Clear Tax.Let's get started!"</h2></div> 
            <div className="downimage">
                <img src='https://cdn.dribbble.com/users/1478517/screenshots/4787799/__-1_____.gif' style={{width:'40vw',height:'40vh',marginTop:'13%'}}></img>   
            </div>
            <div className="downtext">
                <h3>    </h3>
                <h3></h3>
            </div>
            <div className="landdownbut">
                <Button style={{backgroundColor:'blue',color:'white',marginTop:'20%'}} onClick={()=>{navigate('/signup')}}>New User</Button>
            </div>
       
        <div className="landend">
            <div className="endtext">
                <Button style={{marginLeft:'20px',cursor:'pointer'}}onClick={()=>navigate('/FAQ')}>FAQ Section</Button>
            </div>
            <div className="endtext">
                <Button style={{marginLeft:'150px',cursor:'pointer'}}onClick={()=>navigate('/Terms')}>TermsAndConditions</Button>
            </div>
            <div className="endtext">
                <Button style={{marginLeft:'350px',cursor:'pointer'}} onClick={()=>navigate('/Contactus')} >Contact US</Button>
            </div>
            <div className="endtext">
            </div>
        </div>
           
    </div>
    </>
  )
}

