import { FC, useState } from "react";
import './Ball.css'
import data from './answers.json'
import Button from '../Button/Button'

const Ball: FC = () => {
    const [answer, setAnswer] = useState('')

    const handleClick = () => {
        setAnswer(data.answers[getRandomNumber(20)])
    }

    const getRandomNumber = (max: number) => {
        return Math.floor(Math.random() * max)
    }

    const instructionText = !answer ? 'Think of a question and click the ball... to get the answer' : 'Don\'t like the answer? Click the ball to ask again'

    return (<div className="wrapper">
        <div className="instruction">{instructionText}</div>
        <div className="btn-wrapper">{answer && <Button text={"Change question"} onClick={() => setAnswer('')} />}</div>
        <div className="ball" onClick={handleClick}>
            {!answer && <span className="eight">8</span>}
            {answer && <span className="answer">{answer}</span>}
        </div>
    </div>)
}

export default Ball;