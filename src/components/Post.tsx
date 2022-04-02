import { FC } from 'react';
import { useGreeting } from '../hooks/useGreeting';
import { GreetingComponentProps } from '../models/GreetingComponentProps';
import { Post as PostModel } from '../models/Post';
import Comment from './Comment';

interface PostProps extends GreetingComponentProps {
    post: PostModel;
}

const Post: FC<PostProps> = ({ post, greet }) => {
    useGreeting('Post', greet);

    return (
        <div>
            <article>
                <div>{post.user?.name}</div>
                <header>{post.title}</header>
                <p>{post.body}</p>
            </article>
            {post.comments.map((comment) => (
                <Comment key={comment.id} comment={comment} greet={greet}></Comment>
            ))}
        </div>
    );
};

export default Post;
