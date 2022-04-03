import { FC } from 'react';
import { getPost } from '../api/requests';
import Page from '../components/Page';
import PostAndComments from '../components/PostAndComments';
import { withGreeting } from '../hoc/withGreeting';
import { useIntParam } from '../hooks/useIntParam';
import { useResourceRequest } from '../hooks/useResourceRequest';
import { GreetingComponentProps } from '../models/GreetingComponentProps';
import ErrorPage from './ErrorPage';

let PostPage: FC<GreetingComponentProps> = ({ greetIngPrefix }) => {
    const postId = useIntParam('id');
    const request = postId ? getPost(postId) : Promise.reject();
    const [post, error] = useResourceRequest(request);

    if (error) return <ErrorPage greetIngPrefix={greetIngPrefix}>Resource not found</ErrorPage>;
    return (
        <Page greetIngPrefix={greetIngPrefix} title="Post">
            {post ? <PostAndComments post={post} greetIngPrefix={greetIngPrefix}></PostAndComments> : 'Loading'}
        </Page>
    );
};

PostPage = withGreeting(PostPage);

export default PostPage;
