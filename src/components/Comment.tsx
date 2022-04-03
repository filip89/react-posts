import { FC } from 'react';
import { Comment as CommentModel } from '../models/resources/Comment';
import { GreetingComponentProps } from '../models/GreetingComponentProps';
import { withGreeting } from '../hoc/withGreeting';
import UserArticle from './UserArticle';

interface CommentProps extends GreetingComponentProps {
    comment: CommentModel;
}

let Comment: FC<CommentProps> = ({ comment, greet }) => {
    return <UserArticle headerContent={<h4>{comment.name}</h4>} greet={greet} text={comment.body}></UserArticle>;
};

Comment = withGreeting(Comment);

export default Comment;
