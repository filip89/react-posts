import { Comment } from '../models/resources/Comment';
import { Post } from '../models/resources/Post';
import { User } from '../models/resources/User';
import { batchGETRequests } from './batchRequests';
import { urls } from './urls';

export const getPost = (postId: number) => {
    return batchGETRequests(urls.post(postId), urls.postComments(postId), urls.users).then(([post, comments, users]) =>
        mapPostRelations(post, comments, users)
    );
};

export const getPosts = batchGETRequests(urls.posts, urls.comments, urls.users).then(([post, comments, users]) =>
    mapPostsRelations(post, comments, users)
);

function mapPostsRelations(posts: Post[], comments: Comment[] = [], users: User[] = []): Post[] {
    return posts.map((post) => mapPostRelations(post, comments, users));
}

function mapPostRelations(post: Post, comments: Comment[] = [], users: User[] = []): Post {
    post.comments = comments.filter((comment) => comment.postId === post.id);
    post.user = users.find((user) => user.id === post.userId);
    return post;
}
