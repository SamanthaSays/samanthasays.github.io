var game = {
    adventurerName: "Adventurer",
    totalClicks: 0,
    clickValue: 1,
    gold: 0,
    totalGold: 0,

    addToGold: function(amount) {
        this.gold += amount;
        this.totalGold += amount;
        display.updateGold();
    },

    getGoldPerSecond: function() {
        var goldPerSecond = 0;
        for (i = 0; i < building.name.length; i++) {
            goldPerSecond += building.income[i] * building.count[i];
        }
        return goldPerSecond;
    },
    currentEnemy: 0,
}

var enemy = {
    name: [
        "Giant Rat",
        "Enemy Two"
    ],
    image: [
        "LG-Skeever.webp",
        "Enemy Two.webp"
    ]
}

var building = {
    name: [
        "One",
        "Two",
        "Three"
    ],
    image: [
        "One.webp",
        "Two.webp",
        "Three.webp"
    ],
    count: [0, 0, 0],
    income: [
        1,
        15,
        100
    ],
    cost: [
        15,
        100,
        1000
    ],

    purchase: function(index) {
        if (game.gold >= this.cost[index]) {
            game.gold -= this.cost[index];
            this.count[index] += 1;
            this.cost[index] = Math.round(this.cost[index] * 1.10);
            display.updateGold();
            display.updateMarketplace();
            display.updateUpgrades();
        }
    }
}

document.getElementById("enemyClicker").addEventListener("click", function(event) {
    game.totalClicks++;
    game.addToGold(game.clickValue);
    createNumberOnEnemyClicker(event);
}, false)

function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function fadeOut(element, duration, finalOpacity, callback) {
    var opacity = 1;
    var elementFadingInterval = window.setInterval(function(){
        opacity -= 50 / duration;
        if (opacity <= finalOpacity) {
            clearInterval(elementFadingInterval);
            callback();
        }
        element.style.opacity = opacity;
    }, 50);
}

function createNumberOnEnemyClicker(event) {
    // Locate clicker
    var clicker = document.getElementById("enemyClicker");
    // Locate where it was clicked
    var clickerOffset = clicker.getBoundingClientRect();
    var position = {
        x: event.pageX - clickerOffset.left + randomNumber(-5, 5),
        y: event.pageY - clickerOffset.top
    };
    // Create number
    var element = document.createElement("div");
    element.textContent = "+" + game.clickValue;
    element.classList.add("number", "unselectable");
    element.style.left = position.x + "px";
    element.style.top = position.y + "px";
    // Add number to clicker
    clicker.appendChild(element);
    // Rise number
    var movementInterval = window.setInterval(function() {
        if (typeof element == "undefined" && element == null) clearInterval(movementInteral);
        position.y--;
        element.style.top = position.y + "px";
    }, 10);
    // Fade out
    fadeOut(element, 1000, 0, function(){
        element.remove();
    })
}

function rightMenu(evt, menuTab) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(menuTab).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

function playerName() {
    var name = prompt("Character name:", game.adventurerName);
    if (name == null || name == "") {
        game.adventurerName = game.adventurerName;
    } else {
        if (name.length>24) {
            alert("Please use with 24 characters or less");
            return false;
        }
        game.adventurerName = name;
    }
    document.getElementById("playerName").innerHTML = game.adventurerName;
}

function saveGame() {
    var gameSave = {
        adventurerName: game.adventurerName,
        totalClicks: game.totalClicks,
        clickValue: game.clickValue,
        gold: game.gold
    };
    localStorage.setItem("gameSave", btoa(JSON.stringify(gameSave)));
    saveAlert();
}

document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.which == 83) {
        event.preventDefault();
        saveGame();
    }
}, false)

setInterval(function() {
    saveGame();
}, 30000);

function saveAlert () {
    document.getElementById("saveAlert").style.display = "block";
    fadeOut(document.getElementById("saveAlert"), 3000, 0, function(){
    })
}

function loadGame () {
    var savedGame = JSON.parse(atob(localStorage.getItem("gameSave")));
    if (localStorage.getItem("gameSave") !== null) {
        if (typeof savedGame.adventurerName !== "undefined") game.adventurerName = savedGame.adventurerName;
        if (typeof savedGame.totalClicks !== "undefined") game.totalClicks = savedGame.totalClicks;
        if (typeof savedGame.clickValue !== "undefined") game.clickValue = savedGame.clickValue;
        if (typeof savedGame.gold !== "undefined") game.gold = savedGame.gold;
    }
}

window.onload = function() {
    loadGame();
    display.updateName();
    display.updateGold();
    display.updateEnemy();
}

var display = {
    updateName: function() {
        document.getElementById("playerName").innerHTML = game.adventurerName;
    },
    updateGold: function() {
        document.getElementById("goldAmount").innerHTML = game.gold;
        document.getElementById("goldPerSecond").innerHTML = game.getGoldPerSecond();
        document.title = game.gold + " gold - The Idle Scrolls | Samantha Says";
    },
    updateEnemy: function() {
        document.getElementById("enemyClicker").innerHTML = '<img src="assets/images/TIS/'+enemy.image[game.currentEnemy]+'"></img>';
        document.getElementById("enemyName").innerHTML = enemy.name[game.currentEnemy];
    },
    updateMarketplace: function() {
        document.getElementById("marketplaceContainer").innerHTML = "";
        for (i = 0; i < building.name.length; i++) {
            document.getElementById("marketplaceContainer").innerHTML += '<table class="marketplaceButton unselectable" onclick="building.purchase('+i+')"><tr><td id="image"><img src="assets/images/TIS/'+building.image[i]+'"></td><td id="nameAndCost"><p>'+building.name[i]+'</p><p>'+building.cost[i]+'</p></td><td id="amount"><span>'+building.count[i]+'</span></td></tr></table>'

        }
    },
    updateUpgrades: function() {
        document.getElementById("upgradeContainer").innerHTML = "";
        for (i = 0; i < upgrade.name.length; i++) {
            if (!upgrade.purchased[i]) {
                if (upgrade.type[i] == "building" && building.count[upgrade.buildingIndex[i]] >= upgrade.requirement[i]) {
                    document.getElementById("upgradeContainer").innerHTML += '<img src="assets/images/TIS/'+upgrade.image[i]+'" title="'+upgrade.name[i]+' &#10; '+upgrade.description[i]+' &#10; ('+upgrade.cost[i]+' logs)" onclick="upgrade.purchase('+i+')">';
                } else if (upgrade.type[i] == "click" && game.totalClicks >= upgrade.requirement[i]) {
                    document.getElementById("upgradeContainer").innerHTML += '<img src="assets/images/TIS/'+upgrade.image[i]+'" title="'+upgrade.name[i]+' &#10; '+upgrade.description[i]+' &#10; ('+upgrade.cost[i]+' logs)" onclick="upgrade.purchase('+i+')">';
                }
            }
        }
    },
}

function resetGame() {
    if (confirm("Are you sure you want to reset your game?")) {
        localStorage.removeItem("gameSave");
        location.reload();
    }
}