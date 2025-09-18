---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

[**Download CV as PDF**](/files/cv.pdf){: .btn .btn--success}

## Education
*   **Ph.D. in Computer Science**, University of Illinois Urbana-Champaign, 2022 - Present
*   **B.S. in Electrical Engineering**, Lahore University of Management Sciences, 2018 - 2022
    *   *Graduated with High Distinction*

## Work Experience
*   **Research Assistant**
    *   *Wireless, Sensing, & Embedded Networked Systems Lab, UIUC (Advisor: Prof. Elahe Soltanaghai)*
    *   *Jan 2023 - Present*
    *   Researching joint communication & sensing for wireless and cellular networks.
    *   Collecting Channel State Information and Angle of Arrival data using the Nexmon-CSI framework and TI FMCW radars.
    *   Designing and implementing deep generative models (NeRF) to characterize wireless multipath propagation in indoor environments.

*   **Research Assistant**
    *   *Center for Urban Informatics, Technology, & Policy, LUMS (Advisor: Prof. Momin Uppal)*
    *   *Aug 2022 - Nov 2022*
    *   Contributed to a World Bank-funded ($1.5M) project on Community-Based Insights for Better City Management.
    *   Scraped and analyzed ~500,000 tweets on social issues (smog, women's mobility) using a BERT-based NLP pipeline for topic modeling and sentiment analysis.
    *   Developed an interactive GUI to present findings to stakeholders.

*   **Undergraduate Research Assistant**
    *   *Smart Data Systems & Applications Lab, LUMS (Advisor: Prof. M. Tahir)*
    *   *Jan 2021 - May 2022*
    *   Worked on wireless environment sensing using USRP Software-Defined Radios and RFID tags.
    *   Developed a soil moisture sensing system using WiFi band RSSI measurements from USRP and ADLAM-PLUTO SDRs.
    *   Estimated human respiration rate using WiFi CSI and extended the work to mobile individuals using RFID backscatter tags.

## Honors & Awards
*   **Qualcomm Innovation Fellowship Finalist, North America** (2025)
*   **Ray Ozzie Computer Science Fellowship** (2023-2024)
*   **National Management Foundation (NMF) Gold Medal**, LUMS (2022)
*   **Dean's Honor List**, LUMS (All 8 Semesters, 2018-2022)

## Skills
*   **Programming:** Python, C++, MATLAB, Go
*   **Frameworks:** PyTorch, TensorFlow, Keras, MATLAB Toolboxes
*   **Hardware:** Software-Defined Radios (SDRs), USRP, RFID Readers, FMCW Radars

## Publications
{% for post in site.publications reversed %}
  {% include archive-single-cv.html %}
{% endfor %}

## Teaching
{% for post in site.teaching reversed %}
  {% include archive-single-cv.html %}
{% endfor %}
