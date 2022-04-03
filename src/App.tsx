import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { withGreeting } from './hoc/withGreeting';
import { GreetingComponentProps } from './models/GreetingComponentProps';
import ErrorPage from './pages/ErrorPage';
import PostPage from './pages/PostPage';
import PostsPage from './pages/PostsPage';

let App: FC<GreetingComponentProps> = ({ greetIngPrefix }) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/posts" replace></Navigate>} />
                <Route path="posts" element={<PostsPage greetIngPrefix={greetIngPrefix}></PostsPage>} />
                <Route path="post/:id" element={<PostPage greetIngPrefix={greetIngPrefix}></PostPage>} />
                <Route path="*" element={<ErrorPage greetIngPrefix={greetIngPrefix}>No such route</ErrorPage>} />
            </Routes>
        </>
    );
};

App = withGreeting(App);

export default App;
