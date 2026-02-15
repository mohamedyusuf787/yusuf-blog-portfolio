import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import auth from "../../config/firebase"
import { useState, useEffect } from 'react'
import { signOut } from 'firebase/auth'
import logo from "../../assets/logo.png"
import {FaBars, FaTimes} from "react-icons/fa"

function Navbar() {
  const navigate = useNavigate();
  const [log, setLog] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      setLog(!!user);
    });
    return () => unsub();
  }, []);

  function logOut() {
    signOut(auth);
    setOpen(false);
  }

  return (
    <>
      {/* Top Navbar */}
      <div className="mx-3 mt-5 px-5 py-4 flex justify-between items-center 
                      border border-white rounded-full bg-dark relative z-50">

        {/* Logo */}
        <img src={logo} alt="logo" className="w-24" />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link className="text-white" to="/">Home</Link>
          <Link className="text-white" to="/blogs">Blogs</Link>
          <Link className="text-white" to="/about">About</Link>

          {log ? (
            <button className="button-style" onClick={logOut}>Logout</button>
          ) : (
            <button className="button-style" onClick={() => navigate("/login")}>
              Login
            </button>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-500 ease-in-out
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="mx-3 mt-3 p-6 bg-white rounded-2xl flex flex-col gap-4 text-right">
          <Link onClick={() => setOpen(false)} to="/">Home</Link>
          <Link onClick={() => setOpen(false)} to="/blogs">Blogs</Link>
          <Link onClick={() => setOpen(false)} to="/about">About</Link>

          {log ? (
            <button onClick={logOut} className="button-style">
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
                setOpen(false);
              }}
              className="button-style"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
