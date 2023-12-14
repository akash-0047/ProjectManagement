import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import Visibility from '@mui/icons-material/Visibility';
import passwordVisibilityOff from '../../assets/img/hide-password.svg';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const [error, setError] = useState();
    const [failed, setFailed] = useState();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const validate = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let errors = {}
        if (email === "") {
            errors.email = "Email is required"
        } else if (!emailRegex.test(email)) {
            errors.email = "Enter valid email"
        }
        if (password === "") {
            errors.pass = "Password is required"
        }
        setError(errors)
        if (Object.keys(errors).length > 0) {
            return false
        }
        return true
    }

    const hanldeSubmit = () => {
        const isValid = validate()
        if (isValid) {
            const payload = { email: email, password: password }
            axios
                .post(`${process.env.REACT_APP_API_BASEURL}/Authentication/Login`, payload).then((res) => {
                    const token = res?.data?.data?.token;
                    localStorage.setItem("token", token);
                    navigate("/main/Product-list");
                }).catch(error => {
                    setFailed(error?.response?.data?.message)
                })
        }
    }
    return (
        <div className="login">
            <div className="login_inner">

                <div className="form_wrapper">
                    <div className='login_logo_wrap'>
                        <img src={logo} alt='logo' />
                        <p>Online project Management</p>
                    </div>
                    <div className="login_form">
                        <div className="login_form_inner">

                            <form>
                                <div className='title_wrapper'>
                                    <div className='desc'>Login to get started</div>
                                </div>
                                {failed && (
                                <div className='login_fail'>
                                    <p>{failed}</p>
                                </div>
                            )}
                                <div className="form_field_wrapper">
                                    <label>Email</label>
                                    <TextField
                                        error={error?.email}
                                        id="input-with-icon-textfield"
                                        variant="outlined"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        helperText={error?.email}
                                    />
                                </div>
                                <div className="form_field_wrapper">
                                    <label>Password</label>
                                    <TextField
                                        error={error?.pass}
                                        id="input-with-icon-textfield"
                                        type={showPassword ? 'text' : 'password'}

                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    {showPassword ? <img src={passwordVisibilityOff} alt='password' onClick={handleClickShowPassword} /> : <Visibility onClick={handleClickShowPassword} />}


                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="outlined"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        helperText={error?.pass}
                                    />
                                </div>

                                <div className="form_field_wrapper forgotpass">
                                    <Link className="ato" href="/forgotpass">Forgot Passowrd?</Link>
                                </div>


                                <button type="button" className='btn btn-primary' onClick={hanldeSubmit}> Login</button>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
