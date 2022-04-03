import { FC } from 'react';
import { Link } from 'react-router-dom';
import { GreetingComponentProps } from '../models/GreetingComponentProps';
import { Post as PostModel } from '../models/resources/Post';
import { withGreeting } from '../hoc/withGreeting';
import UserArticle from './UserArticle';

interface PostProps extends GreetingComponentProps {
    post: PostModel;
}

let Post: FC<PostProps> = ({ post, greet }) => {
    return (
        <UserArticle
            headerContent={
                <div>
                    <div>{post.user?.name || 'Unknown'}</div>
                    <Link to={'/post/' + post.id}>
                        <h3>{post.title}</h3>
                    </Link>
                </div>
            }
            greet={greet}
            text={post.body}
        ></UserArticle>
    );
};

Post = withGreeting(Post);

export default Post;
