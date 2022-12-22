var game = {
    logs: 0,
    totalLogs: 0,
    totalClicks: 0,
    clickValue: 1,
    version: "0.000a",

    addToLogs: function(amount) {
        this.logs += amount;
        this.totalLogs += amount;
        display.updateLogs();
    },

    getLogsPerSecond: function() {
        var logsPerSecond = 0;
        for (i = 0; i < building.name.length; i++) {
            logsPerSecond += building.income[i] * building.count[i];
        }
        return logsPerSecond;
    }
}

var building = {
    name: [
        "Lumberjack",
        "Lumbermill",
        "Oblivion"
    ],
    image: [
        "WoodcuttersAxe.webp",
        "Lumbermill.webp",
        "Oblivion.webp"
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
        if (game.logs >= this.cost[index]) {
            game.logs -= this.cost[index];
            this.count[index] += 1;
            this.cost[index] = Math.round(this.cost[index] * 1.10);
            display.updateLogs();
            display.updateMarketplace();
            display.updateUpgrades();
        }
    }
}

var upgrade = {
    name: [
        "Steel Axes"
    ],
    description: [
        "Lumberjacks are twice as efficient"
    ],
    image: [
        "SteelIngot.webp"
    ],
    type: [
        "building"
    ],
    cost: [
        300
    ],
    buildingIndex: [
        0
    ],
    requirement: [
        10
    ],
    bonus: [
        2
    ],
    purchased: [
        false
    ],
    purchase: function(index) {
        if (!this.purchased[index] && game.logs >= this.cost[index]) {
            if (this.type[index] == "building" && building.count[this.buildingIndex[index]] >= this.requirement[index]) {
                game.logs -= this.cost[index];
                building.income[this.buildingIndex[index]] *= this.bonus[index];
                this.purchased[index] = true;
                display.updateUpgrades();
                display.updateLogs();
            } else if (this.type[index] == "click" && game.totalClicks >= this.requirement[index]) {
                game.logs -= this.cost[index];
                game.clickValue *= this.bonus[index];
                this.purchased[index] = true;
                display.updateUpgrades();
                display.updateLogs();
            }
        }
    }
}

var achievement = {
    name: [
        "The first achievement!",
        "You bought from the marketplace!",
        "The last achievement!"
    ],
    description: [
        "You clicked the log. Good job.",
        "Purchase from the marketplace.",
        "Have 1,000 logs!"
    ],
    image: [
        "QueenBeeStatue.webp",
        "QueenBeeStatue.webp",
        "QueenBeeStatue.webp"
    ],
    type: [
        "click",
        "building",
        "logs"
    ],
    requirement: [
        1,
        1,
        1000
    ],
    objectIndex: [
        -1,
        0,
        -1
    ],
    awarded: [
        false,
        false,
        false
    ],
    earn: function(index) {
        this.awarded[index] = true;
    }
}

var display = {
    updateLogs: function() {
        document.getElementById("logs").innerHTML = game.logs;
        document.getElementById("logsPerSecond").innerHTML = game.getLogsPerSecond();
        document.title = game.logs + " logs - The Idle Scrolls | Samantha Says";
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
    updateAchievements: function() {
        document.getElementById("achievementContainer").innerHTML = "";
        for (i = 0; i < achievement.name.length; i++) {
            if (achievement.awarded[i]) {
                document.getElementById("achievementContainer").innerHTML += '<img src="assets/images/TIS/'+achievement.image[i]+'" title="'+achievement.name[i]+' &#10; '+achievement.description[i]+'">';
            }
        }
    }
}

function saveGame() {
    var gameSave = {
        logs: game.logs,
        totalLogs: game.totalLogs,
        totalClicks: game.totalClicks,
        clickValue: game.clickValue,
        version: game.version,
        buildingCount: building.count,
        buildingIncome: building.income,
        buildingCost: building.cost,
        upgradePurchased: upgrade.purchased,
        achievementAwarded: achievement.awarded
    };
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

function loadGame () {
    var savedGame = JSON.parse(localStorage.getItem("gameSave"));
    if (localStorage.getItem("gameSave") !== null) {
        if (typeof savedGame.logs !== "undefined") game.logs = savedGame.logs;
        if (typeof savedGame.totalLogs !== "undefined") game.totalLogs = savedGame.totalLogs;
        if (typeof savedGame.totalClicks !== "undefined") game.totalClicks = savedGame.totalClicks;
        if (typeof savedGame.clickValue !== "undefined") game.clickValue = savedGame.clickValue;
        if (typeof savedGame.version !== "undefined") game.version = savedGame.version;
        if (typeof savedGame.buildingCount !== "undefined") {
            for (i = 0; i < savedGame.buildingCount.length; i++) {
                building.count[i] = savedGame.buildingCount[i];
            }
        }
        if (typeof savedGame.buildingIncome !== "undefined") {
            for (i = 0; i < savedGame.buildingIncome.length; i++) {
                building.income[i] = savedGame.buildingIncome[i];
            }
        }
        if (typeof savedGame.buildingCost !== "undefined") {
            for (i = 0; i < savedGame.buildingCost.length; i++) {
                building.cost[i] = savedGame.buildingCost[i];
            }
        }
        if (typeof savedGame.upgradePurchased !== "undefined") {
            for (i = 0; i < savedGame.upgradePurchased.length; i++) {
                upgrade.purchased[i] = savedGame.upgradePurchased[i];
            }
        }
        if (typeof savedGame.achievementAwarded !== "undefined") {
            for (i = 0; i < savedGame.achievementAwarded.length; i++) {
                achievement.awarded[i] = savedGame.achievementAwarded[i];
            }
        }
    }
}

function resetGame() {
    if (confirm("Are you sure you want to reset your game?")) {
        var gameSave = {};
        localStorage.setItem("gameSave", JSON.stringify(gameSave));
        location.reload();
    }
}

document.getElementById("logClicker").addEventListener("click", function() {
    game.totalClicks++;
    game.addToLogs(game.clickValue);
}, false)

window.onload = function() {
    loadGame();
    display.updateLogs();
    display.updateUpgrades();
    display.updateMarketplace();
    display.updateAchievements();
}

setInterval(function() {
    for (i = 0; i < achievement.name.length; i++) {
        if (achievement.type[i] == "logs" && game.totalLogs >= achievement.requirement[i]) achievement.earn(i);
        else if (achievement.type[i] == "click" && game.totalClicks >= achievement.requirement[i]) achievement.earn(i);
        else if (achievement.type[i] == "building" && building.count[achievement.objectIndex[i]] >= achievement.requirement[i]) achievement.earn(i);
    }
    game.logs += game.getLogsPerSecond();
    game.totalLogs += game.getLogsPerSecond();
    display.updateLogs();
    display.updateAchievements();
}, 1000);

setInterval(function() {
    display.updateLogs();
    display.updateUpgrades();
}, 10000);

setInterval(function() {
    saveGame();
}, 30000);

document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.which == 83) {
        event.preventDefault();
        saveGame();
        alert("Game saved!")
    }
}, false)

alert("This game is a work in progress! Current version: 0.000a")