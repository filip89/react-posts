import { FC } from 'react';
import { useParams } from 'react-router-dom';
import Page from '../components/Page';
import { useGreeting } from '../hooks/useGreeting';
import { GreetingComponentProps } from '../models/GreetingComponentProps';

const PostPage: FC<GreetingComponentProps> = ({ greet }) => {
    useGreeting('PostPage', greet);
    const params = useParams<{ id: string }>();

    return (
        <Page greet={greet}>
            <h2>Post {params.id}</h2>
        </Page>
    );
};

export default PostPage;
