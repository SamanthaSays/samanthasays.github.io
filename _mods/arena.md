---
layout: default
title: Arena Mods
section: mods
image: /assets/images/games/Arena-cover.webp
game: Arena
description: The Arena mods used by Samantha Says. All mods are installed and managed through Vortex.
tag: Modlist
updated: 2024-8-16
---

<h1>{{ page.title }}</h1>
<p class="postDate">Updated: {{ page.updated | date_to_string }}</p>

All mods are installed and managed through <a target="_blank" href="https://www.nexusmods.com/about/vortex">Vortex</a>.

Remember to not just blindly copy somebody else's mod list. Make sure each mod is one that you really want!

<table class="modlist">
    <thead>
    <tr>
        <th class="order order-active">Mod</th>
        <th class="order order-inactive">Category</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
        {% include mods/arena.html %}
    </tbody>
</table>

<script src="/assets/js/tableSort.js"></script>