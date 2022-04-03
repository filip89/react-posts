import { FC } from 'react';
import Page from '../components/Page';
import { withGreeting } from '../hoc/withGreeting';
import { GreetingComponentProps } from '../models/GreetingComponentProps';

interface ErrorPage extends GreetingComponentProps {
    message?: string;
}

let ErrorPage: FC<ErrorPage> = ({ message, greet }) => {
    return (
        <Page greet={greet}>
            <h2>Error</h2>
            <div>{message}</div>
        </Page>
    );
};

ErrorPage = withGreeting(ErrorPage);

export default ErrorPage;
