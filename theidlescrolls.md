---
layout: theidlescrolls
title: The Idle Scrolls | Samantha Says
section: Game
---
<div class="gameLeft">
    <center><span class="unselectable" id="playerName" onclick="playerName()">Adventurer</span>
    <p class="unselectable">Gold:<br>
    <span id="goldAmount">0</span><br>
    <span id="goldPerSecond">0</span></p>
    <div class="unselectable" id="enemyClicker"></div>
    <span class="unselectable" id="enemyName">Loading...</span></center>
</div>
<div class="gameRight">
    <div class="tab">
        <button class="tablinks unselectable" onclick="rightMenu(event, 'Character')"><img src="assets/images/TIS/ON-icon-Bank.webp"></button>
        <button class="tablinks unselectable" id="defaultOpen" onclick="rightMenu(event, 'Marketplace')"><img src="assets/images/TIS/ON-icon-Vendor.webp"></button>
        <button class="tablinks unselectable" onclick="rightMenu(event, 'Blacksmith')"><img src="assets/images/TIS/ON-icon-Smithy.webp"></button>
    </div>
    <div id="Character" class="tabcontent">
        <h3>Character</h3>
        <p>things and stuff</p>
    </div>
    <div id="Marketplace" class="tabcontent">
        <h3>Marketplace</h3>
        <p>stuff and things</p>
    </div>
    <div id="Blacksmith" class="tabcontent">
        <h3>Blacksmith</h3>
        <p>stuff and stuff</p>
    </div>
</div>
<div class="unselectable" id="upgradeContainer"></div>
<div class="unselectable" id="marketplaceContainer"></div>