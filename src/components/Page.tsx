import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface PageProps {
    children: React.ReactNode;
}

const Page: FunctionComponent<PageProps> = ({ children }) => {
    return (
        <>
            <header>
                <h1>
                    <Link to="/">POSTS APP</Link>
                </h1>
            </header>
            <main>{children}</main>
        </>
    );
};

export default Page;
