import React, { useState } from 'react';
import '../form.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import Form from "react-bootstrap/Form";

import { FaSignInAlt } from 'react-icons/fa';
import Slider from './Slider';
import { useNavigate } from 'react-router-dom';


function Login() {
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
                    <h2 className='headingtext text-center  '>Sign-In</h2>
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
                        <button type="submit" className="  submitbtn ">
                            LogIn            </button>

                        <div className="login-link text-center mt-4 " onClick={() => navigate('/')} style={{ cursor: 'pointer' }} >
                            Don't have an account? <FaSignInAlt />  Sign-Up
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
