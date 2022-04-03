import { FC } from 'react';
import { getPosts } from '../api/requests';
import Page from '../components/Page';
import Post from '../components/Post';
import { withGreeting } from '../components/withGreeting';
import { useResourceRequest } from '../hooks/useResourceRequest';
import { GreetingComponentProps } from '../models/GreetingComponentProps';
import NotFoundPage from './NotFoundPage';

let PostsPage: FC<GreetingComponentProps> = ({ greet }) => {
    const [posts, error] = useResourceRequest(getPosts);

    if (error) return <NotFoundPage greet={greet}></NotFoundPage>;
    return (
        <Page greet={greet}>
            <h2>Posts</h2>
            {posts ? posts.map((post) => <Post key={post.id} post={post} greet={greet}></Post>) : 'Loading'}
        </Page>
    );
};

PostsPage = withGreeting(PostsPage);

export default PostsPage;
