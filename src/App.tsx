import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useGreeting } from './hooks/useGreeting';
import { GreetingComponentProps } from './models/GreetingComponentProps';
import NotFoundPage from './pages/NotFoundPage';
import PostPage from './pages/PostPage';
import PostsPage from './pages/PostsPage';

const App: FC<GreetingComponentProps> = ({ greet }) => {
    useGreeting('App', greet);

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

export default App;
