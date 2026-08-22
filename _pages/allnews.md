---
title: "News"
layout: gridlay
sitemap: false
permalink: /allnews.html
---

## News

<div class="news-card" markdown="0">
<div class="news-list">
{% for article in site.data.news %}
<div class="news-row">
<div class="news-date">{{ article.date }}</div>
<div class="news-headline">{{ article.headline }}</div>
</div>
{% endfor %}
</div>
</div>
