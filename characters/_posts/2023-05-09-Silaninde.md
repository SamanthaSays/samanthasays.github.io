---
layout: default
title: Silaninde
section: characters
description: Lore, Builds, and Fashion of Silaninde, an original character by Samantha Says that apprears as a Stamina Templar in The Elder Scrolls Online.
permalink: /characters/silaninde
image: /assets/images/characters/Silaninde.webp
priority: 2
race: Altmer
class: Templar
type: Stamina
theme: Soldier
tags: Character Post ESO
---

<table class="character">
    <tr>
        <th colspan="4">
            <img style="max-width: 100%; max-height: 100%" src="/assets/images/characters/Silaninde.webp" alt="Silaninde">
        </th>
    </tr><tr>
        <th>Race</th>
        <td>Altmer</td>
        <th>Gender</th>
        <td>Female</td>
    </tr><tr>
        <th>Born</th>
        <td colspan="3">22nd of First Seed, 2E 554</td>
    </tr><tr>
        <th>Died</th>
        <td colspan="3">Unknown, Three Banners War, 2E</td>
    </tr><tr>
        <th>Resided in</th>
        <td colspan="3">Vulkhel Guard,<br>Iluvamir, Summerset Isles</td>
    </tr><tr>
        <th>Appears in</th>
        <td colspan="3">ESO</td>
    </tr>
</table>

<h1>Silaninde</h1>
<p style="font-style: italic">"The Aldmeri Dominion is locked in an epic struggle for control of the Imperial City. The forces of Molag Bal hold the city in an iron grip, but enemy bannermen also vie for power. The Dominion needs my help."</p>

<ul style="font-weight: bold">
<li>Builds</li>
{% for post in site.categories.builds %}
{% if post.character == "Silaninde" %}
<ul>
    <li><a href="#{{ post.title }}">{{ post.title }}</a></li>
</ul>
{% endif %}
{% endfor%}
<li>Fashion</li>
{% for post in site.categories.fashion %}
{% if post.character == "Silaninde" %}
<ul>
    <li><a href="#{{ post.title }}">{{ post.title }}</a></li>
</ul>
{% endif %}
{% endfor%}
</ul>

Silaninde was born to a high standing family in Vulkhel Guard, a large port town in the Iluvamir region of Auridon, the second largest island in the Summerset Isles. Having grown up on stories of heroics performed by the Summerset Royal Navy, she idolised Altmeri soldiers. At the age of 20, Silaninde was assigned as a local guard of Vulkhek Guard, and her dedication to her craft quickly earned her an alaxon sphere, which remained in perfect condition until her death.

When Princess Ayrenn Arana Aldmeri of Alinor returned to formally claim her Queendom in 2E 580, Silaninde formed a parasocial love interest in her. Shortly after Queen Ayrenn's coronation, the Aldmeri Dominion was formed, and Silaninde joined to an immediately moderate rank of Legionary. She quickly rose to the rank of Centurion, and then steadily climbed to the final rank of a Grade 2 Grand Overlord. There are even rumours that she claimed the title of Emperor of Tamriel for several days during the war. Unfortunately, Silaninde was killed in battle and never got to see her dream of the Dominion winning the war.

In The Elder Scrolls Online, she appears as a Stamina Templar and uses a combination of sword, shield, and archery.

<h2 class="builds" id="builds">Builds</h2>
{% for post in site.categories.builds %}
{% if post.character == "Silaninde" %}
<h3 id="{{ post.title }}">{{ post.title }}</h3>
<div class="buildContainer">
    {{ post.content }}
</div>
{% endif %}
{% endfor%}

<h2 class="fashion" id="fashion">Fashion</h2>
{% for post in site.categories.fashion %}
{% if post.character == "Silaninde" %}
<h3 id="{{ post.title }}">{{ post.title }}</h3>
<div class="fashionContainer">
    {{ post.content }}
</div>
{% endif %}
{% endfor%}