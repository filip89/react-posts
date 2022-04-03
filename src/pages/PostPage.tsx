import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { postRequest } from '../api/getPost';
import Page from '../components/Page';
import Post from '../components/Post';
import { withGreeting } from '../components/withGreeting';
import { GreetingComponentProps } from '../models/GreetingComponentProps';
import { Post as PostModel } from '../models/Post';

let PostPage: FC<GreetingComponentProps> = ({ greet }) => {
    const params = useParams<{ id: string }>();
    const postIdParam = params?.id?.match(/\d+/)?.input;
    const postId = postIdParam && parseInt(postIdParam);
    const [post, setPost] = useState<PostModel>();

    useEffect(() => {
        if (!postId) return;
        postRequest(postId).then((post) => setPost(post));
    }, []);

    return (
        <Page greet={greet}>
            <h2>Post</h2>
            {post && <Post post={post} greet={greet}></Post>}
        </Page>
    );
};

PostPage = withGreeting(PostPage);

export default PostPage;
