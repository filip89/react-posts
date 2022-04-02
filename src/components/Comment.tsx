import { FC } from 'react';
import { useGreeting } from '../hooks/useGreeting';
import { Comment as CommentModel } from '../models/Comment';
import { GreetingComponentProps } from '../models/GreetingComponentProps';

interface CommentProps extends GreetingComponentProps {
    comment: CommentModel;
}

const Comment: FC<CommentProps> = ({ comment, greet }) => {
    useGreeting('Comment', greet);

    return (
        <article>
            <header>{comment.name}</header>
            <p>{comment.body}</p>
        </article>
    );
};

export default Comment;
