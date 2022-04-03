import { FC } from 'react';
import { withGreeting } from '../hoc/withGreeting';
import { GreetingComponentProps } from '../models/GreetingComponentProps';
import './UserArticle.scss';

interface UserArticleProps extends GreetingComponentProps {
    headerContent: React.ReactNode;
    text: string;
}

let UserArticle: FC<UserArticleProps> = ({ headerContent, text }) => {
    return (
        <article className="user-article">
            <header className="user-article__header">{headerContent}</header>
            <p>{text}</p>
        </article>
    );
};

UserArticle = withGreeting(UserArticle);

export default UserArticle;
