import { Navigate, Route, Routes } from 'react-router-dom';
import Page from './components/Page';
import NotFoundPage from './pages/NotFoundPage';
import PostPage from './pages/PostPage';
import PostsPage from './pages/PostsPage';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/posts" replace></Navigate>} />
                <Route path="posts" element={<PostsPage></PostsPage>} />
                <Route path="post/:id" element={<PostPage></PostPage>} />
                <Route path="*" element={<NotFoundPage></NotFoundPage>} />
            </Routes>
        </>
    );
}

export default App;
