import {useCallback, useState} from "react";
import question from "../question.js";
import QuestionData from "./QuestionData.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
    const [answers, setAnswers] = useState([])

    const activeQuestionIndex = answers.length

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        console.log('called')
        setAnswers(prevState => {
            return [...prevState, selectedAnswer]
        })
    }, [])
    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])

    const quizisCompleted = activeQuestionIndex == question.length

    if (quizisCompleted) {
        return <Summary userAnswers={answers}/>
    }


    console.log(answers)
    return (
        <div id={'quiz'}>
            <QuestionData
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                handleSkipAnswer={handleSkipAnswer}
                onSelect={handleSelectAnswer}
            />
        </div>

    )
}
