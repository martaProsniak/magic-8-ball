import { FC } from 'react';
import './Button.css'

interface IButtonProps {
    text: string,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: FC<IButtonProps> = ({ text, onClick }) => {
    return <button onClick={onClick} className='btn'>{text}</button>;
};

export default Button;
