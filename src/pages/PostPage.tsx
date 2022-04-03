import { FC } from 'react';
import { getPost } from '../api/requests';
import Page from '../components/Page';
import Post from '../components/Post';
import { withGreeting } from '../components/withGreeting';
import { useIntParam } from '../hooks/useIntParam';
import { useResourceRequest } from '../hooks/useResourceRequest';
import { GreetingComponentProps } from '../models/GreetingComponentProps';
import NotFoundPage from './NotFoundPage';

let PostPage: FC<GreetingComponentProps> = ({ greet }) => {
    const postId = useIntParam('id');
    const request = postId ? getPost(postId) : Promise.reject();
    const [post, error] = useResourceRequest(request);

    if (error) return <NotFoundPage greet={greet}></NotFoundPage>;
    return (
        <Page greet={greet}>
            <h2>Post</h2>
            {post ? <Post post={post} greet={greet}></Post> : 'Loading'}
        </Page>
    );
};

PostPage = withGreeting(PostPage);

export default PostPage;
