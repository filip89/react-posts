import { FC, useEffect, useState } from 'react';
import { urls } from '../api/urls';
import Page from '../components/Page';
import Post from '../components/Post';
import { withGreeting } from '../components/withGreeting';
import { GreetingComponentProps } from '../models/GreetingComponentProps';
import { Post as PostModel } from '../models/Post';
import { mapPostsRelations } from '../utilities/mapPostsRelations';

let PostsPage: FC<GreetingComponentProps> = ({ greet }) => {
    const [posts, setPosts] = useState<PostModel[]>([]);

    useEffect(() => {
        const requests = [urls.posts, urls.comments, urls.users].map((url) => fetch(url));
        Promise.all(requests)
            .then(([postsRes, commentsRes, usersRes]) =>
                Promise.all([postsRes.json(), commentsRes.json(), usersRes.json()])
            )
            .then(([posts, comments, users]) => setPosts(mapPostsRelations(posts, comments, users)));
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
