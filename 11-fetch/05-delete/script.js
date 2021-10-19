/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: delete an element
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.querySelector("#run").addEventListener("click", async() => {
        const heroId = document.querySelector("#hero-id").value;
        const result = await fetch(`http://localhost:3000/heroes/${heroId}`, {
            method: 'DELETE',
        });
        console.log(result);
    })
})();
