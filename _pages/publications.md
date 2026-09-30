---
title: "Publications"
layout: gridlay
sitemap: false
permalink: /publications/
---

## Publications

<div class="pub-list" markdown="0">

<h3 class="pub-group">Conference</h3>

{% bibliography --query @inproceedings %}

{% capture preprint_count %}{% bibliography_count --query @unpublished %}{% endcapture %}
{% if preprint_count != "0" %}
<h3 class="pub-group">Preprints</h3>

{% bibliography --query @unpublished %}
{% endif %}

<h3 class="pub-group">Talks</h3>

<ul>
{% for talk in site.data.talks %}
<li>
<div class="pub-item{% if talk.image %} pub-item--thumb{% endif %}">
  {% if talk.image %}
  <a class="pub-thumb" href="{{ site.url }}{{ site.baseurl }}/{{ talk.slides }}" target="_blank" tabindex="-1" aria-hidden="true">
    <img src="{{ site.url }}{{ site.baseurl }}/images/publications/{{ talk.image }}" alt="" loading="lazy">
  </a>
  {% endif %}
  <div class="pub-info">
    <div class="pub-meta">
      <span class="pub-venue">{{ talk.venue }}</span>
      <span class="pub-status">{{ talk.location }}{% if talk.location %} &middot; {% endif %}{{ talk.date }}</span>
    </div>
    <h4 class="pub-title">{{ talk.title }}</h4>
    <div class="pub-actions">
      {% if talk.slides %}<a href="{{ site.url }}{{ site.baseurl }}/{{ talk.slides }}" target="_blank" class="pub-link">Slides</a>{% endif %}
      {% if talk.slides_pptx %}<a href="{{ site.url }}{{ site.baseurl }}/{{ talk.slides_pptx }}" class="pub-link" download>PPTX</a>{% endif %}
      {% if talk.paper %}<a href="{{ talk.paper }}" target="_blank" class="pub-link">Paper</a>{% endif %}
    </div>
  </div>
</div>
</li>
{% endfor %}
</ul>

</div>
