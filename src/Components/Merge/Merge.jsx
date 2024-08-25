import { useState, useEffect } from 'react';
import Login from "../Login/Login";
import Register from "../Register/Register";
import ForgetPassword from "../ForgetPassword/ForgetPassword";
import Loading from "../Loading/Loading";
import Intro from '../Intro/Intro';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';

const Merge = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isRegister, setIsRegister] = useState(false);
    const [currentPage, setCurrentPage] = useState('login');
    const [users, setUsers] = useState(() => {
        const savedUsers = localStorage.getItem('users');
        return savedUsers ? JSON.parse(savedUsers) : [];
    });

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    const handleToggle = () => {
        setIsRegister(!isRegister);
        setCurrentPage('login');
    };

    const handleForgetPassword = () => {
        setCurrentPage('forgetPassword');
    };

    const handleBackToLogin = () => {
        setCurrentPage('login');
    };

    const handleRegister = (username, password) => {
        const newUser = { username, password };
        const updatedUsers = [...users, newUser];
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        setCurrentPage('login');
        console.log('Registered Users:', updatedUsers); 
    };

    const handleLoginSuccess = (username, password) => {
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            setCurrentPage('intro');
        } else {
            alert('Invalid credentials');
        }
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            {currentPage === 'login' && (
                isRegister ? (
                    <Register toggle={handleToggle} onRegister={handleRegister} />
                ) : (
                    <Login toggle={handleToggle} onForgetPassword={handleForgetPassword} onLoginSuccess={handleLoginSuccess} />
                )
            )}
            {currentPage === 'forgetPassword' && (
                <ForgetPassword onBack={handleBackToLogin} />
            )}
            {currentPage === 'intro' && (
                <>
                    <Navbar />
                    <Intro />
                    <Services/>
                </>
            )}
        </div>
    );
};

export default Merge;