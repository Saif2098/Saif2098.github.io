---
layout: archive
title: "Portfolio"
permalink: /portfolio/
author_profile: true
---

{% for project in site.data.portfolio %}
<div class="list__item">
  <article class="archive__item" itemscope="" itemtype="http://schema.org/CreativeWork">
    <h2 class="archive__item-title" itemprop="headline">
      {% if project.url %}
        <a href="{{ project.url | prepend: site.baseurl }}" rel="permalink">{{ project.title }}</a>
      {% else %}
        {{ project.title }}
      {% endif %}
    </h2>
    {% if project.excerpt %}
      <p class="archive__item-excerpt" itemprop="description">{{ project.excerpt }}</p>
    {% endif %}
  </article>
</div>
{% endfor %}