import React, { useState } from 'react'
import './Sign.css'
import { Link } from 'react-router-dom'

function SignIn({ onLogInSuccess }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState('');
    const [err, setErr] = useState("")
    const changeUsername = (event) => {
        setUsername(event.target.value);
    }
    const changePassword = (event) => {
        setPassword(event.target.value)
    }
    const validateUser = (e) => {
        e.preventDefault();
        fetch("http://localhost:3001/signIn", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": username,
                'password': password
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data === "success") {
                    onLogInSuccess();

                }
            }
            )
            .catch(
                setErr("Sorry, your password was incorrect.")
            )
    }
    return (

        <div className="signContainer">
            <div className="d-flex justify-content-center h-100 m-2 mt-4">
                <div className="card">

                    <div className="card-header">
                        <h3>Sign In</h3>
                        <div className="d-flex justify-content-end social_icon">
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><span><i className="fab fa-facebook-square"></i></span></a>
                            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer"><span><i className="fab fa-google-plus-square"></i></span></a>
                            <a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer"><span><i className="fab fa-twitter-square"></i></span></a>
                        </div>
                    </div>

                    <div className="card-body">
                        <form onSubmit={validateUser}>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input value={username} onChange={changeUsername} type="text" className="form-control" placeholder="username" />

                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input value={password} onChange={changePassword} type="password" className="form-control" placeholder="password" />
                            </div>
                            <div className="row align-items-center remember">
                                <input type="checkbox" />Remember Me
					</div>
                            <div className="form-group">
                                <input
                                    type="submit"
                                    value="Login"
                                    className="btn float-right login_btn btn-warning"
                                />
                            </div>
                            <span className="text-danger">{err}</span>
                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-center links">
                            Don't have an account?<Link to="/register">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SignIn
