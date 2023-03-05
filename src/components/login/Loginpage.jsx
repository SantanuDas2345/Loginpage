import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Loginpage = () => {

  const [auth, setAuth] = useState(false);
  const [pass, setPass] = useState(false);

  const [show, setShow] = useState(false);
  const [input, setInput] = useState('');
  const [email, setEmail] = useState('');

  const [obj, setObj] = useState({
    email: '',
    password: ''
  });

  const handleClick = (e) => {
    e.preventDefault();

    if (e.target.id === 'pass') {
      setPass(true);
    }
    else {
      setAuth(true);
    }
  }

  const handleLogin = (e) => {
    e.preventDefault();

  }

  const handleEmail = (e) => {
    setEmail({ [e.target.name]: e.target.value });
    setObj({ ...obj, email });
  }

  const handleInput = (e) => {
    setInput({ [e.target.name]: e.target.value });
    setObj({ ...obj, input });
  }


  return (
    <>
      <section className="vh-100 backgroundimage">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            {/* <h1 className='text-info position-relative'>Employee Login</h1> */}
            <div className="col-md-9 col-lg-6 col-xl-5 my-5">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid" alt="Sampleimage" />
            </div>
            <div className="parentcol-md-8 col-lg-6 col-xl-4 offset-xl-1 mainform d-grid">

              {/* form */}

              <form className="formdetails">
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3" className="form-control form-control-lg"
                    name="email" placeholder="username" value={obj.name} onChange={handleEmail} />

                  <div className='d-flex justify-content-evenly my-4'>
                    {pass || auth ? "" : <button className='password btn btn-success' id="pass" onClick={handleClick} >password</button> &&
                                         <button className="authcode btn btn-warning" id="auth" onClick={handleClick}>auth code</button>
                    }
                  </div>
                  <div className="submitdiv">
                    <Link to='/' className='text-white alternateloginlink pb-4'>login with other methods</Link>
                    {
                      pass || auth ? <input type={pass ? "password" : 'number'} name="password" className="passwrd"
                        placeholder={pass ? "password" : "authcode"} value={obj.name} onChange={handleInput} /> : ''
                    }

                    {auth || pass ? <button type="submit" className="btn btn-primary">{

                    }
                      <Link to="/home" className="text-white">Login</Link></button> : <button type="submit" className="btn btn-secondary" disabled>Login</button>}

                    <span className="mt-2 text-white">Need help?</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Loginpage
