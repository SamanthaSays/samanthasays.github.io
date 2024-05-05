---
layout: default
title: ESO Mods
section: mods
image: /assets/images/games/ESO-cover.webp
game: The Elder Scrolls Online
description: The ESO mods used by Samantha Says. All add-ons are installed and managed through Minion 3. My top 10 are marked with a heart.
tag: Modlist
updated: 2024-04-26
---

<h1>{{ page.title }}</h1>
<p class="postDate">Updated: {{ page.updated | date_to_string }}</p>

<p class="changelog" onclick="changelog()">Changelog</p>

<dl id="changelog" style="display: none">
    <dt>26 Apr 2024</dt>
        <dd>- Removed Votan's Keybinder.</dd>
    <dt>11 Apr 2024</dt>
        <dd>- Removed ESO Treasure Box.</dd>
    <dt>30 Mar 2024</dt>
        <dd>- Replaced Reshade with NVIDIA Overlay.</dd>
    <dt>16 Nov 2023</dt>
        <dd>- Added Jukebox - Menu Music Randomizer.</dd>
    <dt>19 Oct 2023</dt>
        <dd>- Removed Thief Tools.</dd>
    <dt>24 Jul 2023</dt>
        <dd>- Added ESO Trading Hub.</dd>
        <dd>- Removed Tamriel Trade Centre.</dd>
    <dt>13 Apr 2023</dt>
        <dd>- Created page.</dd>
</dl>

All add-ons are installed and managed through <a target="_blank" href="https://www.minion.gg">Minion 3</a>.

Remember to not just blindly copy somebody else's add-on selection. Make sure each add-on is one that you really want! Because of this, my installed Libraries are not listed.

Additionally, I use 2 NVIDIA Overlay game filters. RTX Dynamic Vibrance at 10% intensity and 100% saturation boost, and Sharpen+ at 0 intensity and 50 texture details.

You can purchase The Elder Scrolls Online at <a target="_blank" href="https://greenmangaming.sjv.io/samanthasays-eso">Green Man Gaming</a> through my affiliate link.

Add-ons marked with a ♥ heart are my top 10 favourites.

<table class="modlist">
    <thead>
    <tr>
        <th class="order order-active">Add-on</th>
        <th class="order order-inactive">Category</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    {% include mods/eso.html %}
    </tbody>
</table>

<script src="/assets/js/tableSort.js"></script>