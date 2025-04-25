---
layout: default
title: Oblivion Remastered Mods
section: mods
image: /assets/images/games/OBR-cover.webp
game: Oblivion
description: The Oblivion Remastered mods used by Samantha Says. All mods are installed and managed through Vortex.
tag: Modlist
updated: 2025-04-25
---

<h1>{{ page.title }}</h1>
<p class="postDate">Updated: {{ page.updated | date_to_string }}</p>

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