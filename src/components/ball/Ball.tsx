import { FC, useState, useEffect } from "react";
import './Ball.css'
import data from './answers.json'

const Ball: FC = () => {
    const [answer, setAnswer] = useState('');

    const handleClick = () => {
        setAnswer(data.answers[getRandomNumber(20)])
    }

    const getRandomNumber = (max: number) => {
        return Math.floor(Math.random() * max)
    }

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [z, setZ] = useState(0);

    function handleMotionEvent(event: DeviceMotionEvent) {
        console.log("handle motion event", event);

        const x = event.accelerationIncludingGravity?.x ?? 0;
        const y = event.accelerationIncludingGravity?.y ?? 0;
        const z = event.accelerationIncludingGravity?.z ?? 0;

        setX(x);
        setY(y);
        setZ(z);
    }

    useEffect(() => {
        window.addEventListener("devicemotion", handleMotionEvent, true);
    }, [x, y, z]);


    const instructionText = !answer ? 'Think of a question and tap the ball to get the answer' : 'Don\'t like the answer? Tap the ball to ask again'

    return (<div className="wrapper" >
        <div className="instruction">{instructionText}</div>
        <div className="backdrop" onClick={() => setAnswer('')}></div>
        <div className="ball" onClick={handleClick}>
            {!answer && <span className="eight">8</span>}
            {answer && <div className="answer-border"><div className="answer-wrap"><div className="answer"><div>{answer}</div></div></div></div>}
        </div>
        <div className="reset-instruction">{answer && "Tap outside the ball to ask another question"}</div>
    </div>)
}

export default Ball;