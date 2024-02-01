import {useEffect, useState} from "react";

export default function QuestionTimer({timer, onfinishTimer, mode}) {
    const [remaining, setRemaining] = useState(timer)
    useEffect(() => {
        const timeout = setTimeout(onfinishTimer, timer)

        return () => clearTimeout(timeout)
    }, [onfinishTimer, timer]);
    useEffect(() => {
        const interval = setInterval(() => {
            setRemaining(prev => prev - 10)
        }, 10)

        return () => clearInterval(interval)
    }, [])

    return <progress id={'question-time'} value={remaining} max={timer} className={mode}/>

}
