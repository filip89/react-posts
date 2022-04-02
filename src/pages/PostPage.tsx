import { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';
import Page from '../components/Page';

const PostPage: FunctionComponent = () => {
    const params = useParams<{ id: string }>();

    return (
        <Page>
            <h2>Post {params.id}</h2>
        </Page>
    );
};

export default PostPage;
