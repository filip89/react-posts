import { FC } from 'react';
import Page from '../components/Page';
import { withGreeting } from '../hoc/withGreeting';
import { GreetingComponentProps } from '../models/GreetingComponentProps';

interface ErrorPage extends GreetingComponentProps {
    children?: React.ReactNode;
}

let ErrorPage: FC<ErrorPage> = ({ children, greetIngPrefix }) => {
    return (
        <Page greetIngPrefix={greetIngPrefix} title="Error">
            {children}
        </Page>
    );
};

ErrorPage = withGreeting(ErrorPage);

export default ErrorPage;
