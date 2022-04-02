import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { useGreeting } from '../hooks/useGreeting';
import { GreetingComponentProps } from '../models/GreetingComponentProps';

interface PageProps extends GreetingComponentProps {
    children: React.ReactNode;
}

const Page: FunctionComponent<PageProps> = ({ children, greet }) => {
    useGreeting('Page', greet);

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
