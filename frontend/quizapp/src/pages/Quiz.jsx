import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../css/Quiz.css";

function Quiz() {

    const { category } = useParams();

    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});

    useEffect(() => {
        loadQuestions();
    }, [category]);

    const loadQuestions = async () => {

        try {

            const result = await axios.get(
                "http://localhost:8080/question/" + category
            );

            setQuestions(result.data);

        } catch (error) {

            console.log(error);

        }

    };

    const handleAnswer = (questionId, answer) => {

        setAnswers((prev) => ({
            ...prev,
            [questionId]: answer
        }));

    };

    const submitQuiz = async () => {

        const answerList = Object.keys(answers).map((id) => ({
            questionId: Number(id),
            selectedAnswer: answers[id]
        }));

        const requestBody = {

            userId: 1,
            category: category,
            answers: answerList

        };

        try {

            const response = await axios.post(
                "http://localhost:8080/submitQuiz",
                requestBody
            );

            alert(
                "Score : " + response.data.score +
                "\nCorrect : " + response.data.correctAnswers +
                "\nWrong : " + response.data.wrongAnswers
            );

            console.log(response.data);

        } catch (error) {

            console.log(error);
            console.log(error.response);
            console.log(error.response?.data);

            alert("Quiz Submit Failed");

        }

    };

    return (

        <div className="quiz-container">

            <h1 className="quiz-title">
                {category} Quiz
            </h1>

            {

                questions.map((q, index) => (

                    <div
                        className="question-card"
                        key={q.id}
                    >

                        <h3>
<h3>
    {index + 1}. {q.question.replace(/\s*\(Practice #\d+\)/, "")}
</h3>                        </h3>

                        <label className="option">

                            <input
                                type="radio"
                                name={"q" + q.id}
                                value={q.option1}
                                onChange={(e) =>
                                    handleAnswer(q.id, e.target.value)
                                }
                            />

                            {q.option1}

                        </label>

                        <label className="option">

                            <input
                                type="radio"
                                name={"q" + q.id}
                                value={q.option2}
                                onChange={(e) =>
                                    handleAnswer(q.id, e.target.value)
                                }
                            />

                            {q.option2}

                        </label>

                        <label className="option">

                            <input
                                type="radio"
                                name={"q" + q.id}
                                value={q.option3}
                                onChange={(e) =>
                                    handleAnswer(q.id, e.target.value)
                                }
                            />

                            {q.option3}

                        </label>

                        <label className="option">

                            <input
                                type="radio"
                                name={"q" + q.id}
                                value={q.option4}
                                onChange={(e) =>
                                    handleAnswer(q.id, e.target.value)
                                }
                            />

                            {q.option4}

                        </label>

                    </div>

                ))

            }

            <div className="submit-box">

                <button
                    className="submit-btn"
                    onClick={submitQuiz}
                >
                    Submit Quiz
                </button>

            </div>

        </div>

    );

}

export default Quiz;