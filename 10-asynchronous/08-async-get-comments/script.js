/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

const asyncGetComments = async(postId) => {
    return await window.lib.getComments(postId);
};

const asyncGetPosts = async() => {
    return await window.lib.getPosts();
};

(() => {
    document.querySelector("#run").addEventListener("click", () => {
        const posts = asyncGetPosts();
        for (let post of posts) post.comments = asyncGetComments(post.id);
        console.log(posts);
    });
})();
