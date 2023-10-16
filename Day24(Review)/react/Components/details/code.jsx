// // SalaryIncomeDetails.js

// import React, { useState } from 'react';
// import './code.css';

// function SalaryIncomeDetails() {
//   // Define state variables to store user input
//   const [grossIncome, setGrossIncome] = useState('');
//   const [allowances, setAllowances] = useState('');
//   const [bonuses, setBonuses] = useState('');
//   const [commissions, setCommissions] = useState('');
//   const [otherIncome, setOtherIncome] = useState('');
//   const [paymentFrequency, setPaymentFrequency] = useState('monthly');

//   return (
//     <div className="salary-income-details">
//       <h2>Salary and Income Details</h2>
//       <form>
//         <div className="input-field">
//           <label>Gross Income:</label>
//           <input
//             type="number"
//             value={grossIncome}
//             onChange={(e) => setGrossIncome(e.target.value)}
//           />
//         </div>
//         <div className="input-field">
//           <label>Allowances:</label>
//           <input
//             type="number"
//             value={allowances}
//             onChange={(e) => setAllowances(e.target.value)}
//           />
//         </div>
//         <div className="input-field">
//           <label>Bonuses:</label>
//           <input
//             type="number"
//             value={bonuses}
//             onChange={(e) => setBonuses(e.target.value)}
//           />
//         </div>
//         <div className="input-field">
//           <label>Commissions:</label>
//           <input
//             type="number"
//             value={commissions}
//             onChange={(e) => setCommissions(e.target.value)}
//           />
//         </div>
//         <div className="input-field">
//           <label>Other Income:</label>
//           <input
//             type="number"
//             value={otherIncome}
//             onChange={(e) => setOtherIncome(e.target.value)}
//           />
//         </div>
//         <div className="input-field">
//           <label>Payment Frequency:</label>
//           <select
//             value={paymentFrequency}
//             onChange={(e) => setPaymentFrequency(e.target.value)}
//           >
//             <option value="monthly">Monthly</option>
//             <option value="bi-weekly">Bi-Weekly</option>
//             {/* Add more frequency options if needed */}
//           </select>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default SalaryIncomeDetails;
