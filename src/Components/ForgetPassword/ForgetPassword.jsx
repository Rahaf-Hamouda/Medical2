import './ForgetPassword.css';
import { FaUser, FaLock } from "react-icons/fa";


const Password = () => {
    return (
        <div className="wrapper">
            <form action="">
                <h1 >Here you can reset your password.</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="email" placeholder="Email" required />
                </div>
                <div className="input-box">
                    <input type="New password" placeholder="Password" required />
                    <FaLock className="icon" />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Password;
