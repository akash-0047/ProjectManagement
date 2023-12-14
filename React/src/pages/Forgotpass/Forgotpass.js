import React from 'react'
import { Link } from 'react-router-dom';
import email from '../../assets/img/email.svg';
import password from '../../assets/img/password.svg';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
const Forgotpass = () => {
  return (
    <div className="login">
    <div className="login_inner">

        <div className="form_wrapper">
            <div className="login_form">
                <div className="login_form_inner">

                <form>
                  <div className='title_wrapper'>
                    <h1 className="login_title">Forgot Password</h1>
                    <div className='desc'>We'll email you link to reset your password.</div>
                  </div>
              
                    <div className="form_field_wrapper">
                        <TextField
                        id="input-with-icon-textfield"
                        InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                        <img src={email} alt='email'/> 
                        </InputAdornment>
                        ),
                        }}
                        placeholder="Email"
                        variant="outlined"
                        />
                    </div>
                    <div className="form_field_wrapper forgotpass">
                        <Link className="ato" href="/login">Login</Link>
                    </div>
          
                    <button  type="submit" className='btn btn-primary'>
                            Send Link
                    </button>
                </form>

                </div>
            </div>
        </div>
    </div>
  </div> 
  )
}

export default Forgotpass
