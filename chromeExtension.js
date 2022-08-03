const saveInputButtonElement = document.getElementById("input-button");
const urlFieldElement = document.querySelector("#input-element");
const urlListElement = document.querySelector("#unordered-list-element");

/*
 * Main difference between let and const:
 *
 * const CANNOT be reassigned after initial assignment
 * e.g., const = 0 and then const = 1 will lead to a declaration error
 */
let myLeads = [];

saveInputButtonElement.addEventListener("click", function()
{
    console.log("Button clicked from addEventListener!");

    /*
     * Gets the value from the HTML id and the JavaScript 
     */
    myLeads.push(urlFieldElement.value);
})

for (let i = 0 ; i < myLeads.length ; i++)
    {
        urlListElement.textContent += myLeads[i] + " ";
    }
