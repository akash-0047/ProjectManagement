import React from 'react'
import { Link } from 'react-router-dom';
import user from '../../assets/img/profile.svg';
import phone from '../../assets/img/phone.svg';
import email from '../../assets/img/email.svg';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
const Signup = () => {
    return (
        <div className="login">
            <div className="login_inner">

                <div className="form_wrapper">
                    <div className="login_form">
                        <div className="login_form_inner">

                            <form>
                                <div className='title_wrapper'>
                                    <h1 className="login_title">Register Account</h1>
                                    <div className='desc'>Sign up to continue to out web.</div>
                                </div>

                                <div className="form_field_wrapper">
                                    <TextField
                                        id="input-with-icon-textfield"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <img src={user} alt='user' />
                                                </InputAdornment>
                                            ),
                                        }}
                                        placeholder="Name"
                                        variant="outlined"
                                    />
                                </div>
                                <div className="form_field_wrapper">
                                    <TextField
                                        id="input-with-icon-textfield"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <img src={email} alt='email' />
                                                </InputAdornment>
                                            ),
                                        }}
                                        placeholder="Name"
                                        variant="outlined"
                                    />
                                </div>
                                <div className="form_field_wrapper">
                                    <TextField
                                        id="input-with-icon-textfield"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <img src={phone} alt='phone' />
                                                </InputAdornment>
                                            ),
                                        }}
                                        placeholder="Mobile Number"
                                        variant="outlined"
                                    />
                                </div>

                                <div className="form_field_wrapper">
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker />
                                    </LocalizationProvider>
                                </div>
                                <button type="submit" className='btn btn-primary'>
                                    Register Now
                                </button>
                                <div className='form_field_wrapper signuplink_block'>
                                    <Link className="ato signupa" href="/login">Alredy have an account? &nbsp;<span className="signup_txt">Login Now</span></Link>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
