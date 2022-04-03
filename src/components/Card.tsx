import { FC } from 'react';
import { withGreeting } from '../hoc/withGreeting';
import { GreetingComponentProps } from '../models/GreetingComponentProps';
import './Card.scss';

interface CardProps extends GreetingComponentProps {
    children: React.ReactNode;
}

let Card: FC<CardProps> = ({ children }) => {
    return <div className="card">{children}</div>;
};

Card = withGreeting(Card);

export default Card;
