import { useMemo, useState } from 'react';
import { FC } from 'react';
import { getPostsRequest } from '../api/requests';
import Loading from '../components/Loading';
import Page from '../components/Page';
import PostAndComments from '../components/PostAndComments';
import { withGreeting } from '../hoc/withGreeting';
import { useResourceRequest } from '../hooks/useResourceRequest';
import { GreetingComponentProps } from '../models/GreetingComponentProps';
import { filterPostsByUserData } from '../utils/filterPostsByUserData';
import ErrorPage from './ErrorPage';
import './PostsPage.scss';
import SearchInput from '../components/Search';

let PostsPage: FC<GreetingComponentProps> = ({ greetIngPrefix }) => {
    const [posts, error] = useResourceRequest(getPostsRequest());
    const [searchFilter, setSearchFilter] = useState<string>();
    const filteredPosts = useMemo(() => {
        if (!searchFilter || !posts) return posts;
        return filterPostsByUserData(posts, searchFilter);
    }, [posts, searchFilter]);

    const handleSearchChange = (value: string) => setSearchFilter(value);

    if (error) return <ErrorPage greetIngPrefix={greetIngPrefix}></ErrorPage>;
    return (
        <Page greetIngPrefix={greetIngPrefix} title="Posts">
            <div className="posts-page">
                <div className="posts-page__search">
                    <SearchInput onChange={handleSearchChange} greetIngPrefix={greetIngPrefix}></SearchInput>
                </div>
                {filteredPosts ? (
                    filteredPosts.map((post) => (
                        <div className="posts-page__post-comments" key={post.id}>
                            <PostAndComments post={post} greetIngPrefix={greetIngPrefix}></PostAndComments>
                        </div>
                    ))
                ) : (
                    <Loading greetIngPrefix={greetIngPrefix}></Loading>
                )}
            </div>
        </Page>
    );
};

PostsPage = withGreeting(PostsPage);

export default PostsPage;
