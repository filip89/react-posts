export const URL_DOMAIN = 'https://jsonplaceholder.typicode.com';

const urls = {
    posts: `${URL_DOMAIN}/posts`,
    comments: `${URL_DOMAIN}/comments`,
    post: (postId: number) => `${URL_DOMAIN}/posts/${postId}`,
    postComments: (postId: number) => `${URL_DOMAIN}/posts/${postId}/comments`,
    users: `${URL_DOMAIN}/users`,
};

export { urls };
