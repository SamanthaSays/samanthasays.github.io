---
layout: default
title: Oblivion Remastered Mods
section: mods
image: /assets/images/games/OBR-cover.webp
game: Oblivion
description: The Oblivion Remastered mods used by Samantha Says. All mods are installed and managed through Vortex.
tag: Modlist
updated: 2025-04-28
---

<h1>{{ page.title }}</h1>
<p class="postDate">Updated: {{ page.updated | date_to_string }}</p>

<p class="changelog" onclick="changelog()">Changelog</p>

<dl id="changelog" style="display: none">
    <dt>28 April 2025</dt>
        <dd>- Added Local Map Toggle Key.</dd>
        <dd>- Added No Ayleid Well Messagebox.</dd>
        <dd>- Added No Objective Marker On Compass.</dd>
        <dd>- Added No Text Compass for Better HUD.</dd>
        <dd>- Added Remove Chromatic Aberration.</dd>
        <dd>- Removed Better Inputs.</dd>
    <dt>26 April 2025</dt>
        <dd>- Added Additional Map Markers.</dd>
        <dd>- Added Ascension Remastered.</dd>
        <dd>- Added Ascension Remastered - Slower Skill Leveling.</dd>
        <dd>- Added Balanced NPC Level Cap.</dd>
        <dd>- Added Balanced Unleveled Rewards.</dd>
        <dd>- Added Better Inputs.</dd>
        <dd>- Added Complete Clutter and Crop Ownership.</dd>
        <dd>- Added Empty Starting Map.</dd>
        <dd>- Added Hooded Outlaws.</dd>
        <dd>- Added Less Ugly Black Infoboxes.</dd>
        <dd>- Added No Creature Treasure Loot.</dd>
        <dd>- Added No Sneak Vignette.</dd>
    <dt>25 April 2025</dt>
        <dd>- Created page.</dd>
</dl>

All mods are installed and managed through <a target="_blank" href="https://www.nexusmods.com/about/vortex">Vortex</a>.

Remember to not just blindly copy somebody else's mod list. Make sure each mod is one that you really want!

Additionally, I use the NVIDIA Overlay game filter RTX Dynamic Vibrance at 10% intensity and 100% saturation boost.

<table class="modlist">
    <thead>
    <tr>
        <th class="order order-active">Mod</th>
        <th class="order order-inactive">Category</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
        {% include mods/obr.html %}
    </tbody>
</table>

<script src="/assets/js/tableSort.js"></script>