/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

const getCommentsCallback = (error, comments) => {
    if (!error) return comments;
    else console.log(error);
};

const getPostsCallback = (error, posts) => {
    // 3. For each item, calls the getComments function
    if (!error) for (let post of posts) {
        // 4. adds the comments obtained in a comments property of the item
        post.comments = window.lib.getComments(post.id, getCommentsCallback);
        // 5. display the posts in the console
        console.log(post)
    }
    else console.log(error);
};

(() => {
    // 1. on click on the button
    document.querySelector("#run").addEventListener("click", () => {
        // 2. call the getPosts function
        window.lib.getPosts(
            getPostsCallback
        );
    });
})();
