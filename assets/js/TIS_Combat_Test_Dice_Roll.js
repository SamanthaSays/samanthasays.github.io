let dice = document.getElementById('dice');

function rollDice() {
    let result = Math.floor(Math.random() * 6 + 1);
    dice.dataset.side = result;
    dice.classList.toggle("reRoll");
}

dice.addEventListener("click", rollDice);