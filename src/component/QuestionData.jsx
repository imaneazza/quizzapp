import QuestionTimer from "./QuestionTimer.jsx";
import Answes from "./Answes.jsx";
import {useState} from "react";
import question from "../question.js";

export default function QuestionData({onSelect, index, handleSkipAnswer}) {
    const [answerSt, setAnswerSt] = useState({
        currentAnswer: null,
        isCorrect: null
    })
    let timer = 3000;
    if (answerSt.currentAnswer) {
        timer = 1000;
    }
    if (answerSt.isCorrect != null) {
        timer = 2000;
    }

    function handleSelectAnswer(selectedAnswer) {
        console.log('called')
        setAnswerSt({
            currentAnswer: selectedAnswer,
            isCorrect: null
        })

        setTimeout(() => {
            setAnswerSt({
                currentAnswer: selectedAnswer,
                isCorrect: selectedAnswer == question[index].answers[0]
            })
            setTimeout(() => onSelect(selectedAnswer), 2000)


        }, 1000)
    }

    let answerState = '';
    if (answerSt.currentAnswer && answerSt.isCorrect !== null) {
        answerState = answerSt.isCorrect ? 'correct' : 'wrong'
    } else if (answerSt.currentAnswer) {
        answerState = 'answered'
    }
    return <div id="question">
        <QuestionTimer
            key={timer}
            onfinishTimer={answerSt.currentAnswer == null ? handleSkipAnswer : null}
            timer={timer} mode={answerState}/>
        <h2>{question[index].text}</h2>
        <Answes selectedAnswer={answerSt.currentAnswer}
                answerState={answerState}
                handleSelectAnswer={handleSelectAnswer}
                answersdata={question[index].answers}/>
    </div>

}
