---
layout: default
title: Daggerfall Mods
section: mods
image: /assets/images/games/DF-cover.webp
game: Daggerfall
description: The Daggerfall mods used by Samantha Says. All mods are installed and managed through Vortex.
tag: Modlist
updated: 2023-12-29
---

<h1>{{ page.title }}</h1>
<p class="postDate">Updated: {{ page.updated | date_to_string }}</p>

<p class="changelog" onclick="changelog()">Changelog</p>

<dl id="changelog" style="display: none">
    <dt>29 Dec 2023</dt>
        <dd>- Created page.</dd>
</dl>

All mods are installed and managed through <a target="_blank" href="https://www.nexusmods.com/about/vortex">Vortex</a>.

Daggerfall is played through <a target="_blank" href="https://github.com/Interkarma/daggerfall-unity/releases">Daggerfall Unity</a>.

Remember to not just blindly copy somebody else's mod list. Make sure each mod is one that you really want! Because of this, my installed dependencies are not listed.

Mods marked with a ♥ heart are my top 10 favourites.

<table class="modlist">
    <thead>
    <tr>
        <th class="order order-active">Mod</th>
        <th class="order order-inactive">Category</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
        {% include mods/daggerfall.html %}
    </tbody>
</table>

<script src="/assets/js/tableSort.js"></script>