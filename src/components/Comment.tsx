import { FC } from 'react';
import { Comment as CommentModel } from '../models/resources/Comment';
import { GreetingComponentProps } from '../models/GreetingComponentProps';
import { withGreeting } from '../hoc/withGreeting';
import Card from './Card';

interface CommentProps extends GreetingComponentProps {
    comment: CommentModel;
}

let Comment: FC<CommentProps> = ({ comment, greet }) => {
    return (
        <Card greet={greet}>
            <p>{comment.body}</p>
        </Card>
    );
};

Comment = withGreeting(Comment);

export default Comment;
