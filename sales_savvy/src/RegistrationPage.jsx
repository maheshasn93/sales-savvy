import React, { useState } from 'react';
import './assets/styles.css';
import { useNavigate } from 'react';

export default function RegistrationPage() {
    //State variables to handle user inputs

    const[username, setUsername] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[role, setRole] = useState('CUSTOMER');
    const[error, setError] = useState('');


    //Function to handle for submission
    const handleSignUp = async (e) => {
        e.preventDefault(); // Prevents default from submission behavior
        setError(null);

        try {

            // Send user input to the server
            const response = await fetch('http://localhost:8080/api/users/register', { 
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password, role }),
            });

                const data = await response.json();

                if(response.ok) {
                    console.log('User registered successfully: ', data);
                    // Redirect to login page

                    window.location.href = '/login';
                }else {
                    throw new Error(data.error || 'Registration failed');
                }
        }catch (err){
            setError(err.message); //Display error message;
        }
    };

    return (
        <div className="page-container">
            <div className="form-container">
                <h1 className="form-title">Register</h1>
                {error && <p className="error-message">{error}</p>}

                <form onSubmit={handleSignUp} className="form-content">
                    <div className="form-group">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input id = "username" type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} required className="form-input"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input id = "email" type="text" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required className="form-input"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input id = "password" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required className="form-input"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="role" className="form-label">Role</label>
                        <select id ="role" value={role} onChange={(e) => setRole(e.target.value)} required className="form-select">
                            <option value="CUSTOMER">Customer</option>
                            <option value="ADMIN">Admin</option>
                        </select>
                    </div>
                    <button type="submit" className="form-button">Sign Up</button>
                </form>
                <p className="form-footer">Already a user?{' '}
                <a href="/login" className="form-link">Log in here</a>
                </p>
            </div>
        </div>
    );
}