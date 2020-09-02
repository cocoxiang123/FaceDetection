import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Register({ onLogInSuccess }) {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const changeName = (e) => {
        setName(e.target.value)
    }
    const changeUsername = (e) => {
        setUsername(e.target.value);
    }
    const changePassword = (e) => {
        setPassword(e.target.value);
    }
    const registerUser = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": username,
                'name': name,
                'password': password,

            })
        })
            .then(res => res.json())
            .then(user => {
                if (user) {
                    console.log(user);
                    onLogInSuccess();
                }
            })
            .catch(err => {
                console.log(err)
            }

            )
    }
    return (
        <div className="signContainer">
            <div className="d-flex justify-content-center h-100">
                <div className="card m-2 mt-4">
                    <div className="card-header">
                        <h3>Register</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={registerUser}>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input value={name} onChange={changeName} type="text" className="form-control" placeholder="Name" />

                            </div>
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
                            <div className="form-group">
                                <input
                                    type="submit"
                                    value="Register"
                                    className="btn float-right login_btn btn-warning"
                                />
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-center links">
                            Already have an account?<Link to='/signIn'>Sign In</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
