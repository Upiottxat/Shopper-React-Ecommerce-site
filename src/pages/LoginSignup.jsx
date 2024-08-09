import React, { useState } from 'react';
import useLoginSignup from '../hooks/useLoginSignup';

const LoginSignup = () => {
    const [LoginSignup, setLoginSignup] = useState("Login");
    const { register, login, loading } = useLoginSignup()
    const [registerFormData, setregisterFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",

    });
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegisterForm = (e) => {
        const { name, value } = e.target;
        setregisterFormData(prev => ({ ...prev, [name]: value }));
    };
    const registerUser = async (e) => {

        e.preventDefault()
        await register(registerFormData)
    }



    const handleLogin = async (e) => {
        e.preventDefault()
        await login({ email, password })
    }
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            marginBottom: '10rem'
        }}>
            <div style={{
                maxWidth: '400px',
                width: '100%', // Ensures it doesn't overflow on small screens
                padding: '20px', // Optional padding for some spacing
                borderRadius: '8px' // Optional rounded corners
            }}>
                <ul className="nav  nav-justified mb-3" id="ex1" role="tablist">
                    <li className="nav-item" role="presentation" onClick={() => { setLoginSignup("Login") }}>
                        <a className={`nav-link active  rounded ${LoginSignup === "Login" ? "bg-danger text-white" : ""}`} id="tab-login" data-mdb-pill-init href="#-login" role="tab"
                            aria-controls="-login" aria-selected="true">Login</a>
                    </li>
                    <li className="nav-item" role="presentation" onClick={() => { setLoginSignup("signup") }}>
                        <a className={`nav-link rounded ${LoginSignup !== "Login" ? "bg-danger text-white" : ""}`} id="tab-register" data-mdb-pill-init href="#-register" role="tab"
                            aria-controls="-register" aria-selected="false">Register</a>
                    </li>
                </ul>

                <div className="tab-content">
                    {
                        LoginSignup === "Login" ? <div className="tab-pane fade show active" id="-login" role="tabpanel" aria-labelledby="tab-login">
                            <form onSubmit={handleLogin}>
                                <div className="text-center mb-3 ">
                                    <p>Sign in with:</p>
                                    <button type="button " data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                        <i className="fab fa-facebook-f text-danger"></i>
                                    </button>

                                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                        <i className="fab fa-google text-danger" ></i>
                                    </button>

                                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                        <i className="fab fa-twitter text-danger"></i>
                                    </button>

                                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                        <i className="fab fa-github text-danger"></i>
                                    </button>
                                </div>

                                <p className="text-center">or:</p>

                                <div data-mdb-input-init className="form-outline mb-4">
                                    <label className="form-label" htmlFor="loginName">Email</label>
                                    <input type="email" id="loginName" className="form-control" placeholder='Email ' value={email} onChange={(e) => {
                                        setEmail(e.target.value);
                                    }} />

                                </div>

                                <div data-mdb-input-init className="form-outline mb-4">
                                    <label className="form-label" htmlFor="loginPassword">Password</label>
                                    <input type="password" id="loginPassword" className="form-control" placeholder='Password' value={password} onChange={(e) => {
                                        setPassword(e.target.value)
                                    }} />

                                </div>

                                <div className="row mb-4">
                                    <div className="col-md-6 d-flex justify-content-center">
                                        <div className="form-check mb-3 mb-md-0">
                                            <input className="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                                            <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                                        </div>
                                    </div>

                                    <div className="col-md-6 d-flex justify-content-center">
                                        <a href="#!">Forgot password?</a>
                                    </div>
                                </div>

                                <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-danger btn-block mb-4">
                                    {loading ? <React.Fragment> <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                        <span class="visually-hidden">Loading...</span></React.Fragment> : <React.Fragment></React.Fragment>}
                                    Sign in</button>

                                <div className="text-center">
                                    <p>Not a member? <a href="#!">Register</a></p>
                                </div>
                            </form>
                        </div>
                            : <div className="tab-content" id="-register" role="tabpanel" aria-labelledby="tab-register">
                                <form onSubmit={registerUser}>
                                    <div className="text-center mb-3">
                                        <p>Sign up with:</p>
                                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn  btn-floating mx-1 ">
                                            <i className="fab fa-facebook-f "></i>
                                        </button>

                                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                            <i className="fab fa-google"></i>
                                        </button>

                                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                            <i className="fab fa-twitter"></i>
                                        </button>

                                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                            <i className="fab fa-github"></i>
                                        </button>
                                    </div>

                                    <p className="text-center">or:</p>

                                    <div data-mdb-input-init className="form-outline mb-4">
                                        <label className="form-label" htmlFor="registerName">Name</label>
                                        <input type="text" value={registerFormData.fullName} onChange={handleRegisterForm} name='fullName' id="registerName" className="form-control" />

                                    </div>



                                    <div data-mdb-input-init className="form-outline mb-4">
                                        <label className="form-label" htmlFor="registerEmail">Email</label>
                                        <input type="email" value={registerFormData.email} onChange={handleRegisterForm} name='email' id="registerEmail" className="form-control" />

                                    </div>

                                    <div data-mdb-input-init className="form-outline mb-4">
                                        <label className="form-label" htmlFor="registerPassword">Password</label>
                                        <input type="password" value={registerFormData.password} onChange={handleRegisterForm} name='password' id="registerPassword" className="form-control" />

                                    </div>

                                    <div data-mdb-input-init className="form-outline mb-4">
                                        <label className="form-label" htmlFor="registerRepeatPassword">Repeat password</label>
                                        <input type="password" value={registerFormData.confirmPassword} onChange={handleRegisterForm} name='confirmPassword' id="registerRepeatPassword" className="form-control" />

                                    </div>

                                    <div className="form-check d-flex justify-content-center mb-4">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
                                            aria-describedby="registerCheckHelpText" />
                                        <label className="form-check-label" htmlFor="registerCheck">
                                            I have read and agree to the terms
                                        </label>
                                    </div>

                                    <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-danger btn-block mb-3">
                                        {loading ? <React.Fragment> <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                            <span class="visually-hidden">Loading...</span></React.Fragment> : <React.Fragment></React.Fragment>}
                                        Register </button>
                                </form>
                            </div>
                    }


                </div>
            </div>
        </div>
    );
}

export default LoginSignup;
