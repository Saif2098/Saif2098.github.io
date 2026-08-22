---
layout: archive
title: "Research"
permalink: /research/
redirect_from:
  - /portfolio/
author_profile: true
---

{% assign current = site.research | where: "tier", "current" | sort: "order" %}
{% assign earlier = site.research | where: "tier", "earlier" | sort: "order" %}

<div class="research-grid">
  {% for project in current %}
    <article class="research-card">
      <div class="research-card__head">
        <h2 class="research-card__title">
          <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
        </h2>
        {% if project.status %}<span class="research-card__status">{{ project.status }}</span>{% endif %}
      </div>
      <p class="research-card__excerpt">{{ project.excerpt }}</p>
      {% if project.link %}
        <a class="research-card__link" href="{{ project.link }}">{{ project.link_label | default: "Read the paper" }} &rarr;</a>
      {% endif %}
    </article>
  {% endfor %}
</div>

<h2 class="research-section-title">Earlier Projects</h2>

<ul class="earlier-list">
  {% for project in earlier %}
    <li class="earlier-list__item">
      <span class="earlier-list__title">
        {% if project.link %}
          <a href="{{ project.link }}">{{ project.title }}</a>
        {% else %}
          {{ project.title }}
        {% endif %}
      </span>
      <span class="earlier-list__excerpt">{{ project.excerpt }}</span>
    </li>
  {% endfor %}
</ul>
