---
layout: default
title: Minecraft Mods
section: mods
image: /assets/images/games/MC-cover.webp
game: Minecraft
description: The Minecraft mods used by Samantha Says. I manage my mods and resource packs manually. My top 5 are marked with a heart.
tag: Modlist
updated: 2025-07-28
---

<h1>{{ page.title }}</h1>
<p class="postDate">Updated: {{ page.updated | date_to_string }}</p>

<p class="changelog" onclick="changelog()">Changelog</p>

<dl id="changelog" style="display: none">
    <dt>28 July 2025</dt>
        <dd>- Added DualBar.</dd>
        <dd>- Added Locator Heads.</dd>
        <dd>- Added Particle Effects.</dd>
        <dd>- Added Tooltips TXF.</dd>
        <dd>- Removed Falling Leaves.</dd>
        <dd>- Removed Music Delay Reducer.</dd>
        <dd>- Removed Simple Durability.</dd>
    <dt>19 February 2025</dt>
        <dd>- Added 3D Skin Layers.</dd>
        <dd>- Added Music Delay Reducer.</dd>
        <dd>- Added Not Enough Animations.</dd>
        <dd>- Split Cosmetic category into Audio and Visual.</dd>
    <dt>31 January 2025</dt>
        <dd>- Added Chat Heads.</dd>
        <dd>- Added Immediately Fast.</dd>
        <dd>- Added More Culling.</dd>
        <dd>- Removed Entity Culling.</dd>
    <dt>09 January 2025</dt>
        <dd>- Added Simple Durability.</dd>
    <dt>23 Dec 2024</dt>
        <dd>- Updated CurseForge links to Modrinth.</dd>
        <dd>- Added Cave Dust.</dd>
        <dd>- Added Distant Horizons.</dd>
        <dd>- Added Noisium.</dd>
        <dd>- Added OrthoCamera.</dd>
        <dd>- Removed Advancement Info.</dd>
        <dd>- Removed Bobby.</dd>
        <dd>- Removed Capes.</dd>
        <dd>- Removed Continuity.</dd>
        <dd>- Removed Custom Entity Models.</dd>
    <dt>21 Feb 2024</dt>
        <dd>- Removed Starlight.</dd>
    <dt>21 Jan 2024</dt>
        <dd>- Added Ambient Environment.</dd>
        <dd>- Added Particle Rain.</dd>
    <dt>21 Jun 2023</dt>
        <dd>- Removed LazyDFU.</dd>
    <dt>14 Apr 2023</dt>
        <dd>- Created page.</dd>
</dl>

I manage my mods and resource packs manually. It's fairly simple to do, so I never sought a reason to move to a mod manager for Minecraft.

Remember to not just blindly copy somebody else's mod list. Make sure each mod is one that you really want! Because of this, my installed dependencies are not listed. Ensure all mods are updated for the Minecraft version you are using.

Mods marked with a ♥ heart are my top 6 favourites.

<table class="modlist">
    <thead>
    <tr>
        <th class="order order-active">Mod</th>
        <th class="order order-inactive">Category</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
        {% include mods/minecraft.html %}
    </tbody>
</table>

<script src="/assets/js/tableSort.js"></script>