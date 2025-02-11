import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // 🛠️ Check if already logged in
    useEffect(() => {
        if (localStorage.getItem('isLoggedIn')) {
            alert('You are already logged in!');
            navigate('/login'); // Redirect back to login if needed
        }
    }, [navigate]);

    const handleLogin = () => {
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (!storedUser) {
            alert('No registered user found. Please register first.');
            return;
        }

        if ((email === storedUser.email || email === storedUser.username) && password === storedUser.password) {
            alert('Login successful!');
            localStorage.setItem('isLoggedIn', true);
            navigate('/login'); // 🚀 Redirect back to login page after login
        } else {
            alert('Invalid email/username or password');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input type="text" placeholder="Email or Username" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
