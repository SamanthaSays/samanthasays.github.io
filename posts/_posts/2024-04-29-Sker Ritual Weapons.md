---
layout: post
title: Sker Ritual Weapons
section: posts
permalink: /posts/sker ritual weapons
description: The weapon statistics from Sker Ritual, a Call of Duty Zombies-like game by Wales Interactive.
image: /assets/images/Sker Ritual-banner.webp
tag: Sker Ritual
updated:
---

This is a rough tier list of the total possible damage that the weapons of Sker Ritual can deal without acquiring more ammo. Keep in mind that these calculations are against a single target at close range, so weapons with splash damage (like the God Killer) or penetration (like the Thunderbolt) can potentially deal more damage than what is displayed here.

Shotguns, like the RS10 and The Plague, fire 6 pellets. For the purposes of this table, it will be assumed that all 6 pellets hit.

Melee weapons are intentionally kept at the bottom of the table when sorting by total damage, since their total potential damage is infinite.

This list is currently a work in progress.

<div class="tableContainer">
    <table class="skerWeapons">
        <thead>
            <tr>
                <th><button id="skerTier0">T0</button></th>
                <th><button id="skerTier1">T1</button></th>
                <th><button id="skerTier2">T2</button></th>
                <th><button id="skerTier3">T3</button></th>
                <th><button id="skerTier4">T4</button></th>
                <th><button class="skerActive" id="skerTier5">T5</button></th>
            </tr>
        </thead>
    </table>
</div>

<div class="tableContainer">
    <table class="skerWeapons">
        <thead>
            <tr>
                <th><button id="weapon">Weapon</button></th>
                <th><button id="ammo">Ammo</button></th>
                <th><button id="damageBase">Damage (Base)</button></th>
                <th><button id="damageHeadshot">Damage (Headshot)</button></th>
                <th><button id="totalBase">Total Damage (Base)</button></th>
                <th><button id="totalHeadshot">Total Damage (Headshot)</button></th>
            </tr>
        </thead>
        <tbody id="tableContent"></tbody>
    </table>
</div>

<script src="/assets/js/skerWeapons.js"></script>