import { FC, useState } from "react";
import './Ball.css'
import data from './answers.json'

const Ball: FC = () => {
    const [answer, setAnswer] = useState('')

    const handleClick = () => {
        setAnswer(data.answers[getRandomNumber(20)])
    }

    const getRandomNumber = (max: number) => {
        return Math.floor(Math.random() * max)
    }

    return (<div className="wrapper">
        <div className="ball" onClick={handleClick}>
            {!answer && <span className="eight">8</span>}
            {answer && <span className="answer">{answer}</span>}
        </div>
    </div>)
}

export default Ball;