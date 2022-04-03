import { FC } from 'react';
import Page from '../components/Page';
import { withGreeting } from '../hoc/withGreeting';
import { GreetingComponentProps } from '../models/GreetingComponentProps';

interface ErrorPage extends GreetingComponentProps {
    children?: React.ReactNode;
}

let ErrorPage: FC<ErrorPage> = ({ children, greet }) => {
    return (
        <Page greet={greet} title="Error">
            {children}
        </Page>
    );
};

ErrorPage = withGreeting(ErrorPage);

export default ErrorPage;
