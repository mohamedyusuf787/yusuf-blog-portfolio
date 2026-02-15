import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import auth from "../config/firebase.js"

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        auth.onAuthStateChanged((user)=>{
            if(user){
                navigate("/")
            }

        })
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();

        // Simulate login process
        signInWithEmailAndPassword(auth,email,password).then((res)=>{
        navigate('/');
        console.log('User logged in:', { email, password });
        })
        .catch((err)=>{
            console.log("User not registered,Please sign in",err)
        })

        // Redirect to homepage/dashboard after login
        // Replace '/home' with your homepage route
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleLogin} className="p-10 bg-white rounded-lg shadow-md" style={{ width: "75%" }}>
                <h2 className="text-2xl font-bold mb-5 text-gray-800">Login</h2>
                <div className="mb-4">
                    <label className="block text-gray-700">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1 p-2 w-full border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="mt-1 p-2 w-full border rounded"
                    />
                </div>
                <p className='text-blue-600 cursor-pointer my-2' onClick={() => navigate("/signup")}>New user? Register here</p>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 ease-in-out">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
