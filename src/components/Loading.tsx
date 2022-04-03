import { FC } from 'react';
import { withGreeting } from '../hoc/withGreeting';
import { GreetingComponentProps } from '../models/GreetingComponentProps';

let Loading: FC<GreetingComponentProps> = () => {
    return <span>Loading</span>;
};

Loading = withGreeting(Loading);

export default Loading;
