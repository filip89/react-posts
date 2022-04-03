import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { GreetingComponentProps } from '../models/GreetingComponentProps';
import { withGreeting } from '../hoc/withGreeting';

interface PageProps extends GreetingComponentProps {
    children: React.ReactNode;
}

let Page: FunctionComponent<PageProps> = ({ children }) => {
    return (
        <>
            <header>
                <h1>
                    <Link to="/posts">POSTS APP</Link>
                </h1>
            </header>
            <main>{children}</main>
        </>
    );
};

Page = withGreeting(Page);

export default Page;
