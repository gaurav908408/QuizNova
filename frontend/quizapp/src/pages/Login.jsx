import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../css/login.css";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async (e) => {

        e.preventDefault();

        try {

const response = await axios.post(
    "https://quiznova-3-gam5.onrender.com/login",
    {
        email: email,
        password: password
    }
);               
            // Save user details
            localStorage.setItem("username", response.data.name);
            localStorage.setItem("userId", response.data.id);
            localStorage.setItem("email", response.data.email);

            alert("Login Successful");

            navigate("/dashboard");

        } catch (err) {

            if (err.response) {
                alert(err.response.data);
            } else {
                alert("Server Error");
            }

        }

    };

    return (

        <div className="login-container">

            <form className="login-card" onSubmit={login}>

                <h1>QuizNova</h1>

                <h2>Login</h2>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">
                    Login
                </button>

                <p>
                    Don't have an account?
                    <Link to="/signup"> Sign Up</Link>
                </p>

            </form>

        </div>

    );

}

export default Login;