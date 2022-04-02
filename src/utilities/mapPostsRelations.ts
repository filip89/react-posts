import { Comment } from '../models/Comment';
import { Post } from '../models/Post';
import { User } from '../models/User';

export function mapPostsRelations(posts: Post[], comments: Comment[] = [], users: User[] = []): Post[] {
    posts.forEach((post) => {
        post.comments = comments.filter((comment) => comment.postId === post.id);
        post.user = users.find((user) => user.id === post.userId);
    });
    return posts;
}
