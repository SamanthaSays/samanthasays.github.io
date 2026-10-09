---
layout: default
title: Minecraft Dungeons II Mods
section: mods
image: /assets/images/games/MCD2-cover.webp
game: Minecraft Dungeons II
description: The Minecraft Dungeons II mods used by Samantha Says. All mods are installed and managed through Vortex.
tag: Modlist
updated: 2026-10-09
---

<h1>{{ page.title }}</h1>
<p class="postDate">Updated: {{ page.updated | date_to_string }}</p>

<p class="changelog" onclick="changelog()">Changelog</p>

<dl id="changelog" style="display: none">
    <dt>09 October 2026</dt>
        <dd>- Created page.</dd>
</dl>

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
        {% include mods/minecraftdungeons2.html %}
    </tbody>
</table>

<script src="/assets/js/tableSort.js"></script>