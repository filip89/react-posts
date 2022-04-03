import { useMemo, useState } from 'react';
import { ChangeEvent, FC } from 'react';
import { getPosts } from '../api/requests';
import Page from '../components/Page';
import Post from '../components/Post';
import { withGreeting } from '../components/withGreeting';
import { useResourceRequest } from '../hooks/useResourceRequest';
import { GreetingComponentProps } from '../models/GreetingComponentProps';
import { filterPostsByUserData } from '../utils/filterPostsByUserData';
import NotFoundPage from './NotFoundPage';

let PostsPage: FC<GreetingComponentProps> = ({ greet }) => {
    const [posts, error] = useResourceRequest(getPosts);
    const [searchFilter, setSearchFilter] = useState('');
    const filteredPosts = useMemo(() => {
        if (!searchFilter || !posts) return posts;
        return filterPostsByUserData(posts, searchFilter);
    }, [posts, searchFilter]);

    function handleSearchChange(event: ChangeEvent<HTMLInputElement>): void {
        setSearchFilter(event.target.value);
    }

    if (error) return <NotFoundPage greet={greet}></NotFoundPage>;
    return (
        <Page greet={greet}>
            <h2>Posts</h2>
            <input value={searchFilter} onChange={handleSearchChange} placeholder="Search by user data"></input>
            {filteredPosts
                ? filteredPosts.map((post) => <Post key={post.id} post={post} greet={greet}></Post>)
                : 'Loading'}
        </Page>
    );
};

PostsPage = withGreeting(PostsPage);

export default PostsPage;
