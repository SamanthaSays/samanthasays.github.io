---
layout: default
title: Minecraft Mods
section: mods
image: /assets/images/games/MC-cover.webp
game: Minecraft
description: The Minecraft mods used by Samantha Says. I manage my mods and resource packs manually. My top 6 are marked with a heart.
tag: Modlist
updated: 2024-02-21
---

<h1>{{ page.title }}</h1>
<p class="postDate">Updated: {{ page.updated | date_to_string }}</p>

<p class="changelog" onclick="changelog()">Changelog</p>

<dl id="changelog" style="display: none">
    <dt>21 Feb 2024</dt>
        <dd>- Removed Starlight.</dd>
    <dt>21 Jan 2024</dt>
        <dd>- Added Ambient Environment.</dd>
        <dd>- Added Partical Rain.</dd>
    <dt>21 Jun 2023</dt>
        <dd>- Removed LazyDFU.</dd>
    <dt>14 Apr 2023</dt>
        <dd>- Created page.</dd>
</dl>

I manage my mods and resource packs manually. It's fairly simple to do, so I never sought a reason to move to a mod manager for Minecraft.

Remember to not just blindly copy somebody else's mod list. Make sure each mod is one that you really want! Because of this, my installed dependencies are not listed.

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