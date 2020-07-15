import React from 'react'
import { Link } from 'react-router-dom'

function Register({ onLogInSuccess }) {
    return (
        <div className="signContainer">
            <div className="d-flex justify-content-center h-100">
                <div className="card m-2 mt-4">
                    <div className="card-header">
                        <h3>Register</h3>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Name" />

                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="username" />

                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="password" className="form-control" placeholder="password" />
                            </div>
                            <div className="form-group">
                                <input
                                    type="submit"
                                    value="Register"
                                    className="btn float-right login_btn btn-warning"
                                    onClick={onLogInSuccess} />
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
