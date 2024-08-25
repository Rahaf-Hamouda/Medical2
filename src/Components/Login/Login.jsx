import './Login.css';
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from 'react';

const Login = ({ toggle, onForgetPassword, onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        onLoginSuccess(username, password); 
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleLogin}>
                <h1>Login</h1>
                <div className="input-box">
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        name="user_name"
                        placeholder="Username"
                        required
                    />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="user_password"
                        placeholder="Password"
                        required
                    />
                    <FaLock className="icon" />
                </div>
                <div className="remember-forget">
                    <label>
                        <input type="checkbox" name="remember_me" />Remember me
                    </label>
                    <a href="#" onClick={onForgetPassword}>Forget Password?</a>
                </div>
                <button type="submit">Login</button>
                <div className="register-link">
                    <p>Do not have an account?
                        <a href="#" onClick={toggle}> Register</a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
