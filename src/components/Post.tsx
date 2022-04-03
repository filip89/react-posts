import { FC } from 'react';
import { Link } from 'react-router-dom';
import { GreetingComponentProps } from '../models/GreetingComponentProps';
import { Post as PostModel } from '../models/resources/Post';
import { withGreeting } from '../hoc/withGreeting';
import UserArticle from './UserArticle';
import './Post.scss';

interface PostProps extends GreetingComponentProps {
    post: PostModel;
}

let Post: FC<PostProps> = ({ post, greet }) => {
    return (
        <UserArticle
            headerContent={
                <div className="post-header">
                    <div className="post-header__author">{post.user?.name || 'Unknown'}</div>
                    <h3>
                        <Link className="post-header__link" to={'/post/' + post.id}>
                            {post.title}
                        </Link>
                    </h3>
                </div>
            }
            greet={greet}
            text={post.body}
        ></UserArticle>
    );
};

Post = withGreeting(Post);

export default Post;
