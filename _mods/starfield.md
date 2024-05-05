---
layout: default
title: Starfield Mods
section: mods
image: /assets/images/games/SF-cover.webp
game: Starfield
description: The Starfield mods used by Samantha Says. All mods are installed and managed through Vortex.
tag: Modlist
updated: 2023-12-28
---

<h1>{{ page.title }}</h1>
<p class="postDate">Updated: {{ page.updated | date_to_string }}</p>

<p class="changelog" onclick="changelog()">Changelog</p>

<dl id="changelog" style="display: none">
    <dt>21 Nov 2023</dt>
        <dd>- Added No Legendary Pickup Notification.</dd>
        <dd>- Added StarUI Outpost.</dd>
        <dd>- Added StarUI Ship Builder.</dd>
        <dd>- Added StarUI Workbench.</dd>
        <dd>- Removed Crowd NPC Eye Ambient Occlusion Fix.</dd>
        <dd>- Removed Starfield Upscaler.</dd>
    <dt>26 Sep 2023</dt>
        <dd>- Removed Weapon Swap Stuttering Fix.</dd>
    <dt>21 Sep 2023</dt>
        <dd>- Added Address Library for SFSE Plugins.</dd>
        <dd>- Added Compact Crew Menu UI.</dd>
        <dd>- Added Discord Rich Presence.</dd>
        <dd>- Added StarUI HUD.</dd>
        <dd>- Added Weapon Swap Stuttering Fix.</dd>
    <dt>17 Sep 2023</dt>
        <dd>- Added Crowd NPC Eye Ambient Occlusion Fix.</dd>
    <dt>8 September 2023</dt>
        <dd>- Created page.</dd>
</dl>

All mods are installed and managed through <a target="_blank" href="https://www.nexusmods.com/about/vortex">Vortex</a>.

Remember to not just blindly copy somebody else's mod list. Make sure each mod is one that you really want! Because of this, my installed dependencies are not listed.

You can purchase Starfield at <a target="_blank" href="https://greenmangaming.sjv.io/samanthasays-starfield">Green Man Gaming</a> through my affiliate link.

<table class="modlist">
    <thead>
    <tr>
        <th class="order order-active">Mod</th>
        <th class="order order-inactive">Category</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
        {% include mods/starfield.html %}
    </tbody>
</table>

<script src="/assets/js/tableSort.js"></script>