import { FC } from 'react';
import { Link } from 'react-router-dom';
import { GreetingComponentProps } from '../models/GreetingComponentProps';
import { Post as PostModel } from '../models/resources/Post';
import { withGreeting } from '../hoc/withGreeting';
import './Post.scss';
import Card from './Card';

interface PostProps extends GreetingComponentProps {
    post: PostModel;
}

let Post: FC<PostProps> = ({ post, greet }) => {
    return (
        <Card greet={greet}>
            <header className="post-header">
                <div className="post-header__author">{post.user?.name || 'Unknown'}</div>
                <h3>
                    <Link className="post-header__link" to={'/post/' + post.id}>
                        {post.title}
                    </Link>
                </h3>
            </header>
            <p>{post.body}</p>
        </Card>
    );
};

Post = withGreeting(Post);

export default Post;
