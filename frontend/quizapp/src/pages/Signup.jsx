import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../css/Signup.css";

function Signup() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    const changeValue = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const signup = async (e) => {

        e.preventDefault();

        // Name Validation
        if (user.name.trim() === "") {
            alert("Please Enter Full Name");
            return;
        }

        // Email Validation
        if (user.email.trim() === "") {
            alert("Please Enter Email");
            return;
        }

        const emailPattern =
            /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        if (!emailPattern.test(user.email)) {
            alert("Please Enter Valid Email");
            return;
        }

        // Password Validation
        if (user.password.trim() === "") {
            alert("Please Enter Password");
            return;
        }

        if (user.password.length < 6) {
            alert("Password must be at least 6 characters");
            return;
        }

        try {

           await axios.post("https://quiznova-2-n2v3.onrender.com/signup", user);

            alert("Signup Successful");

            navigate("/");

        } catch (err) {

            alert("Signup Failed");

        }

    };

    return (

        <div className="signup-container">

            <form className="signup-card" onSubmit={signup}>

                <h1>QuizNova</h1>

                <h2>Create Account</h2>

                <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    value={user.name}
                    onChange={changeValue}
                />

                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={user.email}
                    onChange={changeValue}
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={user.password}
                    onChange={changeValue}
                />

                <button type="submit">
                    Sign Up
                </button>

                <p>
                    Already have an account?
                    <Link to="/"> Login</Link>
                </p>

            </form>

        </div>

    );

}

export default Signup;