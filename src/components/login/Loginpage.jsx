// import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Login.css";
import { Link } from 'react-router-dom'
import Login_with_other_methods from "./Login_with_other_methods";

export default function App() {
  const [auth, setAuth] = useState(false);
  const [pass, setPass] = useState(false);

  // const [show, setShow] = useState(false);
  const [showBtn, setShowBtn] = useState(true);
  const [arr, setArr] = useState([]);

  const [obj, setObj] = useState({
    email: "",
    password: "",
    auth: ""
  });

  const [validateform, setValidateFrom] = useState({});

  const validate = (store) => {
    if (obj.password === "") {
      store.password = "invalid password";
    }
    if (!obj.email) {
      store.email = "invalid username"
    }
    if (obj.auth === "") {
      store.auth = "invalid authcode"
    }
    return store;
  }


  const newObj = {
    password: "",
    email: "",
    auth: ""
  }

  const handleClick = (e) => {
    e.preventDefault();

    if (e.target.id === "pass") {
      setPass(true);
    } else {
      setAuth(true);
    }

    setShowBtn(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const store = {};
    setObj(newObj);
    setArr([...arr, obj]);
    setValidateFrom(validate(store));
  };

  const handleEmail = (e) => {
    // setEmail({ ...email,[e.target.name]: e.target.value });
    // setInput({...input, [e.target.name]: e.target.value});
    setObj({ ...obj, [e.target.name]: e.target.value })
    // setObj({...obj, email})
  };

  // const handleInput = (e) => {
  //   setInput({...input, [e.target.name]: e.target.value});
  //   // setObj({...obj, input})
  // };

  return (
    <>
      <section className="vh-100 backgroundimage">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            {/* <h1 className='text-info position-relative'>Employee Login</h1> */}
            <div className="col-md-9 col-lg-6 col-xl-5 my-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sampleimage"
              />
            </div>
            <div className="parentcol-md-8 col-lg-6 col-xl-4 offset-xl-1 mainform d-grid ">
              {/* form */}

              <form className="formdetails mt-5 " onSubmit={handleSubmit}>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    name="email"
                    placeholder="username"
                    value={obj.email}
                    onChange={handleEmail}
                  />
                  <span className="emailvalidate" style={{ color: 'red' }}>{validateform.email}</span>
                  {/* ///////////////////////////////////////////////////////////////////////////////// */}
                  {showBtn && (
                    <div className="d-flex justify-content-evenly my-4">
                      <button
                        className="password btn btn-success"
                        id="pass"
                        onClick={handleClick}
                      >
                        password
                      </button>
                      <button
                        className="authcode btn btn-warning"
                        id="auth"
                        onClick={handleClick}
                      >
                        auth code
                      </button>
                    </div>
                  )}
                  {/* //////////////////////////////////////////////////////////////////////////////////////// */}
                  <div className="submitdiv">

                    {pass || auth ? (
                      <input
                        type={pass ? "password" : "number"}
                        name={auth ? "auth" : "password"}
                        className="passwrd"
                        placeholder={pass ? "password" : "authcode"}
                        value={pass ? obj.password : obj.auth}
                        onChange={handleEmail}
                      />
                    )
                      : (
                        ""
                      )}

                    {
                      pass ? <span style={{ color: 'red' }}>{validateform.password}</span> : <span style={{ color: 'red' }}>{validateform.auth}</span>
                    }

                    {auth || pass ? (
                      <button type="submit" className="btn btn-primary">

                        <Link to="/home" className="text-white">
                        Login
                        </Link>

                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="btn btn-secondary"
                        disabled
                      >
                        Login
                      </button>
                    )}
                    <Login_with_other_methods />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}