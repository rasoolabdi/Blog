import http from "./httpService";

export async function getPostBySlug(slug) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slug}`);
    const { data } = await res.json();
    const { post } = data || {};
    return post;
}

export async function getPosts(options) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list` , options);
    const { data } = await res.json();
    const { posts } = data || {};
    return posts;
};

export function likedPostsApi(postId) {
    return http.post(`/post/like/${postId}`).then(({ data }) => data.data);
};

export function bookmarkedPostsApi(postId) {
    return http.post(`/post/bookmark/${postId}`).then(({ data }) => data.data);
}