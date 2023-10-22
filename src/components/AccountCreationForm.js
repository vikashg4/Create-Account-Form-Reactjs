import React, { useState } from 'react';
import '../form.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import Form from "react-bootstrap/Form";

import { FaSignInAlt } from 'react-icons/fa';
import Slider from './Slider';
import { useNavigate } from 'react-router-dom';


function AccountCreationForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    industry: '',
    mobile: '',
    password: '',
    termsAccepted: false,
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };


  return (
    <div className="container p-5 "  >
      <div className="row  position-relative  " style={{ height: '100vh', backgroundColor: 'black', borderRadius: 22 }}>
        <div className=" col-md-6 col-sm-12 col-lg-6   shadow card box1  "  >
          <div   >
            <h1 className=' text-white text-center  '> Manage your Money Anywhere </h1>
            <div className='  text-white text-center mt-4 text-gray  '>View all the analytics and grow your business from anywhere! </div>
            <Slider />
          </div>
        </div>

        <div className="col-md-6 col-sm-12 col-lg-6 card shadow box2  "   >
          <h2 className='headingtext text-center  '>Create an account</h2>
          <div className="button-row d-flex justify-content-around p-4"
          >
            <button type="button" class="  btn-lg headbtn1" > Merchant</button>
            <button type="button" class="   btn-lg headbtn2 ">Agent </button>
          </div>
          <form onSubmit={handleSubmit} className="d-flex flex-column  ">
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Name"
                className="form-control grey-background"
              />
            </div>
            <div className="form-group">
              <select
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="form-control grey-background"
              >
                <option value="">Select a company</option>
                <option value="Company 1">Company 1</option>
                <option value="Company 2">Company 2</option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="form-control grey-background"
              />
            </div>
            <div className="form-group">
              <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="form-control grey-background"
              >
                <option value="">Select an industry</option>
                <option value="Industry 1">Industry 1</option>
                <option value="Industry 2">Industry 2</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="form-group">
              <div className="password-input">


                <div className="input-container">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter Password"
                    className="form-control grey-background"
                  />
                  <span className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                  </span>
                </div>



              </div>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="form-check-input"
              />
              <label className="form-check-label termcondts">
                I accept the <span className='text-black fw-bold '> Privacy Policy</span>
              </label>
            </div>
            <button type="submit" className="  submitbtn ">
              Create an Account
            </button>

            <div className="login-link text-center mt-4 cursor-pointer" onClick={() => navigate('/Login')} style={{ cursor: 'pointer' }} >
              Already have an account? <FaSignInAlt /> Log In
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AccountCreationForm;
