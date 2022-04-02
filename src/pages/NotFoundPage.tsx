import { FC } from 'react';
import Page from '../components/Page';
import { withGreeting } from '../components/withGreeting';
import { GreetingComponentProps } from '../models/GreetingComponentProps';

let NotFoundPage: FC<GreetingComponentProps> = ({ greet }) => {
    return (
        <Page greet={greet}>
            <h2>Not found</h2>
        </Page>
    );
};

NotFoundPage = withGreeting(NotFoundPage);

export default NotFoundPage;
