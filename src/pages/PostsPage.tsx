import { FC, useEffect, useState } from 'react';
import { postsRequest } from '../api/getPosts';
import Page from '../components/Page';
import Post from '../components/Post';
import { withGreeting } from '../components/withGreeting';
import { GreetingComponentProps } from '../models/GreetingComponentProps';
import { Post as PostModel } from '../models/Post';

let PostsPage: FC<GreetingComponentProps> = ({ greet }) => {
    const [posts, setPosts] = useState<PostModel[]>([]);

    useEffect(() => {
        postsRequest.then((posts) => setPosts(posts));
    }, []);

    return (
        <Page greet={greet}>
            <h2>Posts</h2>
            {posts.map((post) => (
                <Post key={post.id} post={post} greet={greet}></Post>
            ))}
        </Page>
    );
};

PostsPage = withGreeting(PostsPage);

export default PostsPage;
