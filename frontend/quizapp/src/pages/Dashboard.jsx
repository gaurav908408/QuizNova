import "../css/Dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();

    const username = localStorage.getItem("username") || "Student";

    const openQuiz = (category) => {
        navigate("/quiz/" + category);
    };

    return (

        <div className="dashboard">

            {/* Header */}

            <div className="header">

                <div>
                    <h1>🎓 NPTEL Quiz Portal</h1>
                    <h2>👋 Welcome, {username}</h2>
                </div>

                <button
                    className="logout"
                    onClick={() => {
                        localStorage.clear();
                        navigate("/");
                    }}
                >
                    Logout
                </button>

            </div>

            {/* Title */}

            <h2 className="title">
                📚 Choose Your Quiz Category
            </h2>

            {/* Cards */}

            <div className="cards">

                <div
                    className="card"
                    onClick={() => openQuiz("Java")}
                >
                    ☕
                    <h3>Java</h3>
                </div>

                <div
                    className="card"
                    onClick={() => openQuiz("C")}
                >
                    💻
                    <h3>C Programming</h3>
                </div>

                <div
                    className="card"
                    onClick={() => openQuiz("Python")}
                >
                    🐍
                    <h3>Python</h3>
                </div>

                <div
                    className="card"
                    onClick={() => openQuiz("IOT")}
                >
                    🌐
                    <h3>IoT</h3>
                </div>

                {/* About Developer */}

                <div
                    className="card"
                    onClick={() => navigate("/about")}
                >
                    👨‍💻
                    <h3>About Developer</h3>
                </div>

            </div>

        </div>

    );

}

export default Dashboard;