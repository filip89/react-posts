import { Navigate, Route, Routes } from 'react-router-dom';
import Page from './components/Page';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/posts" replace></Navigate>} />
                <Route path="posts" element={<Page>posts</Page>} />
                <Route path="post/:id" element={<Page>post</Page>} />
                <Route path="*" element={<Page>error</Page>} />
            </Routes>
        </>
    );
}

export default App;
