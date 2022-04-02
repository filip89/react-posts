import { FC } from 'react';
import Page from '../components/Page';
import { useGreeting } from '../hooks/useGreeting';
import { GreetingComponentProps } from '../models/GreetingComponentProps';

const NotFoundPage: FC<GreetingComponentProps> = ({ greet }) => {
    useGreeting('NotFoundPage', greet);

    return (
        <Page greet={greet}>
            <h2>Not found</h2>
        </Page>
    );
};

export default NotFoundPage;
