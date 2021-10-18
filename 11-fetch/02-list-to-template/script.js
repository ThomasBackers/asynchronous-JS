/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: list to template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    const tpl = document.querySelector("#tpl-hero");
    const target = document.querySelector("#target");

    document.querySelector("#run").addEventListener("click", async() => {
        const response = await (await fetch("http://localhost:3000/heroes")).json();
        response.forEach(hero => {
            const currentLi = document.importNode(tpl.content, true);
            currentLi.querySelector(".name").textContent = `${hero.name}`;
            currentLi.querySelector(".alter-ego").textContent = `${hero.alterEgo}`;
            for (let i = 0; i < hero.abilities.length; i++) {
                if (i !== hero.abilities.length - 1) currentLi.querySelector(".powers").textContent += `${hero.abilities[i]}, `;
                else currentLi.querySelector(".powers").textContent += `${hero.abilities[i]}.`;
            }
            target.appendChild(currentLi);
        });
    });
})();
