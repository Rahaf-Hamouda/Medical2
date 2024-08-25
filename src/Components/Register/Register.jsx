import './Register.css';
import { useRef, useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Register = ({ toggle, onRegister }) => {
    const form = useRef();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [country, setCountry] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        if (password !== passwordAgain) {
            alert('Passwords do not match');
            return;
        }

        emailjs.sendForm('service_eqvoikh', 'template_z6rcspd', form.current, 'R0laHzufbWjKs_NxS')
            .then((result) => {
                console.log('SUCCESS!', result.text);
                e.target.reset();
                alert('Done!');
                onRegister(username, password); 
            }, (error) => {
                console.log('FAILED...', error.text);
            });
    };

    return (
        <div className="wrapper_Register">
            <form action="" ref={form} onSubmit={sendEmail}>
                <h1>Sign up</h1>
                <div className="input-box">
                    <input 
                        type="text" 
                        placeholder="Username" 
                        name='from_name' 
                        required 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input 
                        type="email" 
                        placeholder="Email" 
                        name='your_email' 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-box">
                    <input 
                        type="password" 
                        placeholder="Password" 
                        name="your_password" 
                        required 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FaLock className="icon" />
                </div>
                <div className="input-box">
                    <input 
                        type="password" 
                        placeholder="Password Again" 
                        name="your_passwordAgain" 
                        required 
                        value={passwordAgain}
                        onChange={(e) => setPasswordAgain(e.target.value)}
                    />
                    <FaLock className="icon" />
                </div>
                <div className="input-box">
                    <input 
                        type="number" 
                        placeholder="Age" 
                        name="your_age" 
                        required 
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <div className="input-box">
                    <input 
                        list="genders" 
                        placeholder="Gender" 
                        name="your_gender" 
                        required 
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    <datalist id="genders">
                        <option value="Male" />
                        <option value="Female" />
                    </datalist>
                </div>
                <div className="input-box">
                    <input 
                        list="countrys" 
                        placeholder="Choose a country" 
                        name="your_country" 
                        required 
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />
                    <datalist id="countrys">
                        <option value="Damascus" />
                        <option value="Rural Damascus" />
                    </datalist>
                </div>
                <button type="submit">Sign up</button>
                <button onClick={toggle}>Back to Login</button>
            </form>
        </div>
    );
}

export default Register;












//import { FaUser } from "react-icons/fa";
//import { FaLock } from "react-icons/fa";
//import emailjs from '@emailjs/browser';
//import { useRef } from 'react';


//const Register = () => {
//    const form = useRef();

//    const sendEmail = (e) => {
//        e.preventDefault();

//        emailjs.sendForm('service_eqvoikh', 'template_z6rcspd', form.current, 'R0laHzufbWjKs_NxS')
//            .then((result) => {
//                console.log('SUCCESS!', result.text);
//                e.target.reset();
//                alert('Done!');
//            }, (error) => {
//                console.log('FAILED...', error.text);
//            });
//    };
//    return (
//        <div className="wrapper_Register">
//            <form action="" ref={form} onSubmit={sendEmail}>
//                <h1>Sign in</h1>
//                <div className="input-box">
//                    <input type="text" placeholder="Username" name='from_name' required />
//                    <FaUser />
//                </div>
//                <div className="input-box">
//                    <input type="email" placeholder="Email" name='your_email' required />
//                </div>
//                <div className="input-box">
//                    <input type="password" placeholder="Password" name="your_password" required />
//                    <FaLock />
//                </div>
//                <div className="input-box">
//                    <input type="password" placeholder="Password Again" name="your_passwordAgain" required />
//                    <FaLock />
//                </div>
//                <div className="input-box">
//                    <input type="number" placeholder="Age" name="your_age" required />
//                </div>
//                <div className="input-box">
//                    <input list="genders" placeholder="Gender" name="your_gender" required />
//                    <datalist id="genders">
//                        <option value="Male" />
//                        <option value="Female" />
//                    </datalist>
//                </div>
//                <div className="input-box">
//                    <input list="countrys" placeholder="Choose a country" name="your_country" required />
//                    <datalist id="countrys">
//                        <option value="Damascus" />
//                        <option value="Rural Damascus" />
//                    </datalist>
//                    <button type="submit">Sign in</button>
//                </div>
//            </form>
//        </div>
//    );
//}

//export default Register;
