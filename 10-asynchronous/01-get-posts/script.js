/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

const callback = (error, posts) => console.log(posts);

(() => {
    document.querySelector("#run").addEventListener("click", () => {
        window.lib.getPosts(callback);
    });
})();

/*
window.lib.getPosts(
    (error, posts) => console.log(posts)
);
*/
