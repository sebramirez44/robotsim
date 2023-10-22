"use client";
import Navbar from '../_components/navbar'
// import 'react-multi-carousel/lib/styles.css';
import React, { useRef, useState, useEffect } from 'react';
import { auth, logInWithEmailAndPassword } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function LogIn() {
  const [user, loading, error] = useAuthState(auth);
  const [formEmail, setFormEmail] = useState("");
  const [formPassword, setFormPassword] = useState("");
  useEffect(() => {
    if (loading) {
        return;
    }
    // if (user) navigate("/dashboard");
  }, [user, loading]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await logInWithEmailAndPassword(auth, formEmail, formPassword);
      // Redirect or do something else on successful login
      console.log("successful login!!!")
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="root-layoutLogin">
        <Navbar/>
        <form onSubmit={handleSubmit}>
            <div className="loginWindowContainer">
                <div className="loginWindow">
                    <h1>Log In</h1>
                    <label htmlFor="username">Enter your email:</label>
                    <input id="username" name="username" type="email" value={formEmail} onChange={(e) => setFormEmail(e.target.value)}/>
                    <label htmlFor="password">Enter your password:</label>
                    <input id="password" name="password" type="password" value={formPassword} onChange={(e) => setFormPassword(e.target.value)} />
                    <button>Log In</button>
                </div>
                    
            </div>
        </form>

    </div>
  )
}