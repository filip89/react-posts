import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { GreetingComponentProps } from '../models/GreetingComponentProps';
import { withGreeting } from '../hoc/withGreeting';
import './Page.scss';

interface PageProps extends GreetingComponentProps {
    children: React.ReactNode;
    title: string;
}

let Page: FunctionComponent<PageProps> = ({ title, children }) => {
    return (
        <div className="page-wrapper">
            <header className="page-header">
                <h1>
                    <Link className="page-header__link" to="/posts">
                        POSTS APP
                    </Link>
                </h1>
            </header>
            <main className="page-content">
                <div className="page-content__inner">
                    <h2 className="page-content__title">{title}</h2>
                    {children}
                </div>
            </main>
        </div>
    );
};

Page = withGreeting(Page);

export default Page;
