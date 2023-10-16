import Login from './Pages/Login';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Signup from './Pages/Signup';
// import Navbar from './Components/Navbar';
import Dashboard from './Components/dash/Dashboard';
import Home from './Pages/Home';

import { Landing } from './Components/Landing page/landing';

import AdminAuth from './Pages/Admin/AdminAuth';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import AboutUs from './Components/about/aboutus';
import Contactus from './Components/Contactus/Contactus';
import Terms from './Components/Terms/Terms';

// import Taxlaw from './Pages/Taxlaw';
import EmployeeSalary from './Components/mainpage/cll';
import SalaryIncomeDetails from './Components/details/code'
import FAQ from './Components/FAQ/faq';
import FeedbackPage from './Components/feedback/feedbk';
import Taxlaw from './Pages/Taxlaw';
import Deduction from './Components/deductions/deduct';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/login' element={<Login />} />

          <Route path='/signup' element={<Signup />} />
            {/* <Route path='/home' element={<Home />} /> */}
          <Route element={<AdminAuth />}>
            <Route path='/dashboard' element={<Dashboard />} />
            {/* <Route  path='/taxlaws' element={<Taxlaw/>}/> */}
            <Route path='/taxcalculator' element={<EmployeeSalary />} />
            <Route path='/salaryincome' element={<SalaryIncomeDetails />} />
            <Route path='/privacypolicy' element={<PrivacyPolicy />} />
            <Route path='/AboutUs' element={<AboutUs/>} />
            <Route path='/Contactus' element={<Contactus/>} />
            <Route path='/Terms' element={<Terms/>} />
            <Route path='/FAQ' element={<FAQ/>} />
            <Route path='/feedback' element={<FeedbackPage/>} />
            <Route path='/landing' element={<Landing/>} />
            <Route path='/taxlaws' element={<Taxlaw/>} />
            <Route path='/deduction' element={<Deduction/>} />


            




          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;