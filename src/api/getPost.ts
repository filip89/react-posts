import { Post } from '../models/Post';
import { batchGETRequests } from './batchRequests';
import { mapPostRelations } from './responseMapper';
import { urls } from './urls';

export const postRequest = (postId: number) => {
    return batchGETRequests(urls.post(postId), urls.postComments(postId), urls.users).then(([post, comments, users]) =>
        mapPostRelations(post, comments, users)
    );
};
