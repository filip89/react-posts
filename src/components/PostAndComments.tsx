import { FC } from 'react';
import { withGreeting } from '../hoc/withGreeting';
import { GreetingComponentProps } from '../models/GreetingComponentProps';
import { Post as PostModel } from '../models/resources/Post';
import Comment from './Comment';
import Post from './Post';

interface PostAndCommentsProps extends GreetingComponentProps {
    post: PostModel;
}

let PostAndComments: FC<PostAndCommentsProps> = ({ post, greet }) => {
    return (
        <div>
            <Post post={post} greet={greet}></Post>
            <div>
                {post.comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} greet={greet}></Comment>
                ))}
            </div>
        </div>
    );
};

PostAndComments = withGreeting(PostAndComments);

export default PostAndComments;
