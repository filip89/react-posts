import { FC } from 'react';
import { Comment as CommentModel } from '../models/Comment';
import { GreetingComponentProps } from '../models/GreetingComponentProps';
import { withGreeting } from './withGreeting';

interface CommentProps extends GreetingComponentProps {
    comment: CommentModel;
}

let Comment: FC<CommentProps> = ({ comment }) => {
     return (
        <article>
            <header>{comment.name}</header>
            <p>{comment.body}</p>
        </article>
    );
};

Comment = withGreeting(Comment);

export default Comment;
