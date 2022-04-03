import { FC } from 'react';
import { withGreeting } from '../hoc/withGreeting';
import { GreetingComponentProps } from '../models/GreetingComponentProps';

interface UserArticleProps extends GreetingComponentProps {
    headerContent: React.ReactNode;
    text: string;
}

let UserArticle: FC<UserArticleProps> = ({ headerContent, text }) => {
    return (
        <article>
            <header>
                {headerContent}
            </header>
            <p>{text}</p>
        </article>
    );
};

UserArticle = withGreeting(UserArticle);

export default UserArticle;
