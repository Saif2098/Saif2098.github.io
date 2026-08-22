---
title: "Home"
layout: homelay
sitemap: false
permalink: /
---

{% include hero.html notice="I am looking for a research internship in Summer 2027." %}

<div class="home-band" markdown="0">
<div class="band-col">
{% include news-card.html %}
</div>
<div class="band-col">
<h3>Biography</h3>
<div class="band-body">
<p>I am a Ph.D. candidate in Computer Science at the University of Illinois Urbana-Champaign, advised by <a href="https://elahe.web.illinois.edu/">Prof. Elahé Soltanaghai</a> in the <a href="https://isens.cs.illinois.edu/">iSens Lab</a>.</p>

<p>I received my B.S. in Electrical Engineering with a minor in Computer Science from the Lahore University of Management Sciences (LUMS) in 2022, graduating top of my class. As an undergraduate I worked with <a href="https://scholar.google.com/citations?user=pd9S_mcAAAAJ&amp;hl=en">Prof. Muhammad Tahir</a> and <a href="https://scholar.google.com/citations?user=uvDhvwgAAAAJ&amp;hl=en">Prof. Momin Uppal</a> on RF sensing with software-defined radios and passive RFID. After graduating, I spent a semester at LUMS's <a href="https://lums.edu.pk/academic-report/ar2025/centre-city.php">Centre for Urban Informatics, Technology &amp; Policy</a>, building a transformer-based analysis pipeline for a World Bank–funded urban policy project.</p>
</div>
</div>
</div>

## My Research

My research lies at the intersection of wireless systems and machine learning. More broadly, I am interested in using learning to model and understand physical systems, particularly in problems where the structure and constraints of the underlying system need to shape how the machine learning method is designed.

Within this broader space, my Ph.D. research focuses on building **physics-grounded machine learning models for wireless propagation**. Accurate wireless simulation is difficult because real-world measurements are often sparse, while high-fidelity physical simulation can be computationally expensive and require detailed knowledge of the environment.

I explore how learned representations can bridge this gap by incorporating structure from wireless physics, measurement processes, and simulation into the model itself. My work spans neural fields, neural operators, differentiable simulation, and wireless digital twins, with the broader goal of making high-fidelity wireless modeling faster, more scalable, and useful for real-world decision making.

A recurring theme in my work is learning from imperfect but useful sources of information: sparse real-world measurements, lower-fidelity simulation, or simplified representations of physical environments that would otherwise be too expensive to model explicitly.
