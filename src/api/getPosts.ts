import { batchGETRequests } from './batchRequests';
import { mapPostsRelations } from './responseMapper';
import { urls } from './urls';

export const postsRequest = batchGETRequests(urls.posts, urls.comments, urls.users).then(([post, comments, users]) =>
    mapPostsRelations(post, comments, users)
);
