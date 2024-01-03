---
layout: default
title: Simplicia Palenix
section: characters
description: Lore, Builds, and Fashion of Simplicia Palenix, an original character by Samantha Says that apprears as a Magicka Arcanist in The Elder Scrolls Online.
permalink: /characters/simplicia palenix
image: /assets/images/characters/Simplicia Palenix.webp
priority: 3
race: Imperial
class: Arcanist
type: Magicka
theme: Apocrypha
tags: Character Post ESO
---

<table class="character">
    <tr>
        <th colspan="4">
            <img style="max-width: 100%; max-height: 100%" src="/assets/images/characters/Simplicia Palenix.webp" alt="Simplicia Palenix">
        </th>
    </tr><tr>
        <th>Race</th>
        <td>Imperial</td>
        <th>Gender</th>
        <td>Female</td>
    </tr><tr>
        <th>Born</th>
        <td colspan="3">5th of Midyear, 2E 557</td>
    </tr><tr>
        <th>Resided in</th>
        <td colspan="3">Vlastarus,<br>West Weald, Cyrodiil</td>
    </tr><tr>
        <th>Appears in</th>
        <td colspan="3">ESO</td>
    </tr>
</table>

<h1>Simplicia Palenix</h1>
<p style="font-style: italic">"Leramil the Wise claims that the Daedric Prince of Fate, Hermaeus Mora, needs my help to stop a threat that could destroy both Mora's realm of Apocrypha and the mortal realm of Nirn."</p>

<ul style="font-weight: bold">
<li>Builds</li>
<ul>
    <li style="font-weight: normal">Coming soon</li>
</ul>
{% for post in site.categories.builds %}
{% if post.character == "Simplicia Palenix" %}
<ul>
    <li><a href="#{{ post.title }}">{{ post.title }}</a></li>
</ul>
{% endif %}
{% endfor%}
<li>Fashion</li>
{% for post in site.categories.fashion %}
{% if post.character == "Simplicia Palenix" %}
<ul>
    <li><a href="#{{ post.title }}">{{ post.title }}</a></li>
</ul>
{% endif %}
{% endfor%}
</ul>

Simplicia Palenix, born and raised in Vlastarus, Cyrodiil, had a natural curiosity as a child. In her early teenage years, she joined the University of Gwylim as one of its youngest members. While some of the University's scholars and students fled to Elinhir when the Three Banners War broke out, Simplicia chose to adventure across Tamriel and beyond, gathering notes for the United Explorers of Scholarly Pursuits.

Very quickly into her adventures, she received a letter from Leramil the Wise, claiming that the Lord of Secrets, Hermaeus Mora, has foreseen that only with Simplicia's assistance can she save Nirn. Empowered by the secrets of Apocrypha and the forbidden knowledge of Hermaeus Mora, she was gifted the powers of the Arcanist. Now capable of powerful new destructive, restorative, and defensive magic, she use her new combat prowess to protect Nirn by channeling the arcane, ancient runes, and lost tomes of power. Of course, any knowledge she can gather for the United Explorers guild will be most welcome, too.

In The Elder Scrolls Online, she appears as a Magicka Arcanist and uses Apocrypha themed skills and items.

<h2 class="builds" id="builds">Builds</h2>
Coming soon.
{% for post in site.categories.builds %}
{% if post.character == "Simplicia Palenix" %}
<h3 id="{{ post.title }}">{{ post.title }}</h3>
<div class="buildContainer">
    {{ post.content }}
</div>
{% endif %}
{% endfor%}

<h2 class="fashion" id="fashion">Fashion</h2>
{% for post in site.categories.fashion %}
{% if post.character == "Simplicia Palenix" %}
<h3 id="{{ post.title }}">{{ post.title }}</h3>
<div class="fashionContainer">
    {{ post.content }}
</div>
{% endif %}
{% endfor%}