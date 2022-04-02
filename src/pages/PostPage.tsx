import { FC } from 'react';
import { useParams } from 'react-router-dom';
import Page from '../components/Page';
import { withGreeting } from '../components/withGreeting';
import { GreetingComponentProps } from '../models/GreetingComponentProps';

let PostPage: FC<GreetingComponentProps> = ({ greet }) => {
    const params = useParams<{ id: string }>();

    return (
        <Page greet={greet}>
            <h2>Post {params.id}</h2>
        </Page>
    );
};

PostPage = withGreeting(PostPage);

export default PostPage;
