/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.querySelector("#run").addEventListener("click", async() => {
        const response = await (await fetch("http://localhost:3000/heroes")).json();
        const inputField = document.querySelector("#hero-id");
        const userInput = inputField.value;
        const tpl = document.querySelector("#tpl-hero");
        const target = document.querySelector("#target");

        if (parseInt(userInput) < response.length && parseInt(userInput) >= 1)
        for (let hero of response) if (parseInt(userInput) === hero.id) {
            const currentLi = document.importNode(tpl.content, true);
            currentLi.querySelector(".name").textContent = `${hero.name}`;
            currentLi.querySelector(".alter-ego").textContent = `${hero.alterEgo}`;
            for (let i = 0; i < hero.abilities.length; i++) {
                if (i !== hero.abilities.length - 1) currentLi.querySelector(".powers").textContent += `${hero.abilities[i]}, `;
                else currentLi.querySelector(".powers").textContent += `${hero.abilities[i]}.`;
            }
            target.appendChild(currentLi);
            break;
        }
    });
})();
