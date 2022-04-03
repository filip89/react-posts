import { useMemo, useState } from 'react';
import { ChangeEvent, FC } from 'react';
import { getPosts } from '../api/requests';
import Page from '../components/Page';
import PostAndComments from '../components/PostAndComments';
import { withGreeting } from '../hoc/withGreeting';
import { useResourceRequest } from '../hooks/useResourceRequest';
import { GreetingComponentProps } from '../models/GreetingComponentProps';
import { filterPostsByUserData } from '../utils/filterPostsByUserData';
import ErrorPage from './ErrorPage';
import './PostsPage.scss';

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

    if (error) return <ErrorPage greet={greet}></ErrorPage>;
    return (
        <Page greet={greet} title="Posts">
            <div className="posts-page">
                <div className="posts-page__search-wrapper">
                    <input
                        className="search-input"
                        value={searchFilter}
                        onChange={handleSearchChange}
                        placeholder="Search by user data"
                    ></input>
                </div>
                {filteredPosts
                    ? filteredPosts.map((post) => (
                          <div className="posts-page__post-comments" key={post.id}>
                              <PostAndComments post={post} greet={greet}></PostAndComments>
                          </div>
                      ))
                    : 'Loading'}
            </div>
        </Page>
    );
};

PostsPage = withGreeting(PostsPage);

export default PostsPage;
