import completed from "../assets/quiz-complete.png";
import question from "../question.js";

export default function Summary({userAnswers}) {
    const skippedAnswers = userAnswers.filter(ans => ans == null);
    const correctAnswer = userAnswers.filter((ans, index) => ans == question[index].answers[0]);
    const wronganswers = userAnswers.filter((ans, index) => ans != null && ans != question[index].answers[0]);
    const skippedAnswershare = Math.round((skippedAnswers.length / userAnswers.length) * 100)
    const correctAnswershare = Math.round((correctAnswer.length / userAnswers.length) * 100)
    const wrongAnswershare = Math.round((wronganswers.length / userAnswers.length) * 100)

    return <div id="summary">
        <h2>Quiz Completed</h2>
        <img src={completed} alt="Quiz Completed"/>

        <div id="summary-stats">
            <p>
                <span className="number">{skippedAnswershare}%</span>
                <span className="text">Skipped</span>
            </p>
            <p>
                <span className="number">{correctAnswershare}%</span>
                <span className="text">Answered Correctly</span>
            </p>
            <p>
                <span className="number">{wrongAnswershare}%</span>
                <span className="text">Answered Incorrectly</span>
            </p>
        </div>
        <ol>
            {userAnswers.map((answer, index) => {
                let cssClass = 'user-answer';
                if (answer == null) {
                    cssClass += ' skipped'
                } else if (answer == question[index].answers[0]) {
                    cssClass += ' correct'
                } else {
                    cssClass += ' wrong'
                }
                return <li key={index}>
                    <h3>{index + 1}</h3>
                    <p className="question">{question[index].text}</p>
                    <p className={cssClass}>{answer ?? 'Skipped'}</p>
                </li>
            })}
        </ol>
    </div>
}
