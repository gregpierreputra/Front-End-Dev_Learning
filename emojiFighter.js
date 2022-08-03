let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"];

let stageElement = document.getElementById("stage");
let fightButton = document.getElementById("fight-button");

fightButton.addEventListener("click", function()
{
    let fighter_1 = fighters[Math.floor(Math.random() * fighters.length)];
    let fighter_2 = fighters[Math.floor(Math.random() * fighters.length)];

    stageElement.textContent = fighter_1 + " vs " + fighter_2;
})