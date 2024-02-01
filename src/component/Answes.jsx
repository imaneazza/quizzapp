import {useRef} from "react";

export default function Answes({answersdata, selectedAnswer, answerState, handleSelectAnswer}) {
    const shuffled = useRef();
    if (!shuffled.current) {
        shuffled.current = [...answersdata]
        shuffled.current.sort((a, b) => Math.random() - 0.5)

    }
    return <ul id={'answers'}>
        {shuffled.current.map(ans => {
            let cssClass = '';
            const isSelected = selectedAnswer == ans
            if (answerState == 'answered' && isSelected) {
                cssClass = 'selected'
            }
            if ((answerState == 'correct' || answerState == 'wrong') && isSelected) {
                cssClass = answerState
            }

            return <li key={ans} className={'answer'}>
                <button className={cssClass}
                        disabled={answerState !== ''}
                        onClick={() => handleSelectAnswer(ans)}>{ans}</button>
            </li>
        })}
    </ul>
}
