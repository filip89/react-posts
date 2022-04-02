import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { withGreeting } from './components/withGreeting';
import { GreetingComponentProps } from './models/GreetingComponentProps';
import NotFoundPage from './pages/NotFoundPage';
import PostPage from './pages/PostPage';
import PostsPage from './pages/PostsPage';

let App: FC<GreetingComponentProps> = ({ greet }) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/posts" replace></Navigate>} />
                <Route path="posts" element={<PostsPage greet={greet}></PostsPage>} />
                <Route path="post/:id" element={<PostPage greet={greet}></PostPage>} />
                <Route path="*" element={<NotFoundPage greet={greet}></NotFoundPage>} />
            </Routes>
        </>
    );
};

App = withGreeting(App);

export default App;
