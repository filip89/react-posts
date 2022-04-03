import { FC } from 'react';
import { getPost } from '../api/requests';
import Page from '../components/Page';
import PostAndComments from '../components/PostAndComments';
import { withGreeting } from '../hoc/withGreeting';
import { useIntParam } from '../hooks/useIntParam';
import { useResourceRequest } from '../hooks/useResourceRequest';
import { GreetingComponentProps } from '../models/GreetingComponentProps';
import ErrorPage from './ErrorPage';

let PostPage: FC<GreetingComponentProps> = ({ greet }) => {
    const postId = useIntParam('id');
    const request = postId ? getPost(postId) : Promise.reject();
    const [post, error] = useResourceRequest(request);

    if (error) return <ErrorPage greet={greet}>Resource not found</ErrorPage>;
    return (
        <Page greet={greet} title="Post">
            {post ? <PostAndComments post={post} greet={greet}></PostAndComments> : 'Loading'}
        </Page>
    );
};

PostPage = withGreeting(PostPage);

export default PostPage;
