import { FC, useState, useRef } from "react";
import './Ball.css'
import data from './answers.json'

interface BallProps {
    increaseClicks: () => void;
}

const Ball = ({increaseClicks}: BallProps) => {
    const [answer, setAnswer] = useState('');
    const ballRef = useRef<HTMLDivElement>(null);
    const answerRef = useRef<HTMLDivElement>(null);
    const eightRef = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        answerRef.current?.classList.remove('fadeIn');
        eightRef.current?.classList.add('fadeOut');
        answerRef.current?.classList.add('fadeOut');
        ballRef.current?.classList.add('ball-shake');
        increaseClicks();
        setTimeout(() => {
            setAnswer(data.answers[getRandomNumber(20)])
            ballRef.current?.classList.remove('ball-shake');
            answerRef.current?.classList.remove('fadeOut');
            answerRef.current?.classList.add('fadeIn');
        }, 500)
    }

    const onQuestionChange = () => {
        if (!answer) return;
        answerRef.current?.classList.remove('fadeIn');
        answerRef.current?.classList.add('fadeOut');
        setTimeout(() => {
            setAnswer('');
        }, 500)
    }

    const getRandomNumber = (max: number) => {
        return Math.floor(Math.random() * max)
    }

    const instructionText = !answer ? 'Think of a question and tap the ball to get the answer' : 'Don\'t like the answer? Tap the ball to ask again'

    return (<div className="wrapper" >
        <div className="instruction">{instructionText}</div>
        <div className="backdrop" onClick={onQuestionChange}></div>
        <div className="ball" ref={ballRef} onClick={handleClick}>
            {!answer && <div className="eight fadeIn" ref={eightRef}>8</div>}
            {answer && <div className="answer-wrap" ref={answerRef}><div className="answer"><div>{answer}</div></div></div>}
        </div>
        <div className="reset-instruction">{answer && "Tap outside the ball to ask another question"}</div>
    </div>)
}

export default Ball;