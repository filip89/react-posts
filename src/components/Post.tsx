import { FC } from 'react';
import { GreetingComponentProps } from '../models/GreetingComponentProps';
import { Post as PostModel } from '../models/Post';
import Comment from './Comment';
import { withGreeting } from './withGreeting';

interface PostProps extends GreetingComponentProps {
    post: PostModel;
}

let Post: FC<PostProps> = ({ post, greet }) => {
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

Post = withGreeting(Post);

export default Post;
