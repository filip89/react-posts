import { FC } from 'react';
import { withGreeting } from '../hoc/withGreeting';
import { GreetingComponentProps } from '../models/GreetingComponentProps';
import { Post as PostModel } from '../models/resources/Post';
import Comment from './Comment';
import Post from './Post';
import './PostAndComments.scss';

interface PostAndCommentsProps extends GreetingComponentProps {
    post: PostModel;
}

let PostAndComments: FC<PostAndCommentsProps> = ({ post, greetIngPrefix }) => {
    return (
        <div className="post-comments">
            <div className="post-comments__item">
                <Post post={post} greetIngPrefix={greetIngPrefix}></Post>
            </div>
            <div>
                {post.comments.map((comment) => (
                    <div className="post-comments__item post-comments__comment" key={comment.id}>
                        <Comment comment={comment} greetIngPrefix={greetIngPrefix}></Comment>
                    </div>
                ))}
            </div>
        </div>
    );
};

PostAndComments = withGreeting(PostAndComments);

export default PostAndComments;
