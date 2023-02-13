import { FC } from "react";
import './Ball.css'
import data from './answers.json'

const Ball: FC = () => {

    const handleClick = () => {
        alert(data.answers[getRandomNumber(20)])
    }

    const getRandomNumber = (max: number) => {
        return Math.floor(Math.random() * max)
    }

    return <div className="wrapper"><div className="ball" onClick={handleClick}><span className="eight">8</span></div></div>
}

export default Ball;