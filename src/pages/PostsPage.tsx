import { FC } from 'react';
import Page from '../components/Page';
import { useGreeting } from '../hooks/useGreeting';
import { GreetingComponentProps } from '../models/GreetingComponentProps';

const PostsPage: FC<GreetingComponentProps> = ({ greet }) => {
    useGreeting('PostsPage', greet);

    return (
        <Page greet={greet}>
            <h2>Posts</h2>
        </Page>
    );
};

export default PostsPage;
