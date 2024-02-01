import completed from "../assets/quiz-complete.png";
import question from "../question.js";

export default function Summary({userAnswers}) {


    return <div id="summary">
        <h2>Quiz Completed</h2>
        <img src={completed} alt="Quiz Completed"/>

        <div id="summary-stats">
            <p>
                <span className="number">10%</span>
                <span className="text">Skipped</span>
            </p>
            <p>
                <span className="number">10%</span>
                <span className="text">Answered Correctly</span>
            </p>
            <p>
                <span className="number">10%</span>
                <span className="text">Answered Incorrectly</span>
            </p>
        </div>
        <ol>
            {question.map(textquestion=>{
                return <li>
                    <h3>{textquestion.id}</h3>
                    <p className="question">{textquestion.text}</p>
                    <p className="user-answer"></p>
                </li>
            })}
        </ol>
    </div>
}
