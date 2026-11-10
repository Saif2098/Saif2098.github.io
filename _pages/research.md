---
title: "Research"
layout: gridlay
sitemap: false
permalink: /research/
---

## Research

<article class="proj-card" id="winerf" markdown="0">
<h3 class="proj-title">WiNeRF — Learning Wireless Channels from Sparse WiFi Measurements</h3>
<p class="proj-meta">
<span class="proj-status">EWSN 2026</span>
</p>

<div class="proj-intro">
<figure class="proj-figure">
<img src="{{ site.url }}{{ site.baseurl }}/images/research/winerf-teaser.png" alt="WiNeRF: cone-based sampling regions over a room-scale grid, plus an environment RSSI map and AoA profile" loading="lazy">
</figure>
<!-- Suggested image (v7): a simplified version of the WiNeRF system overview showing
     sparse measurements, cone-based neural-field modeling, and channel prediction.
     Currently using Figure 1 extracted from the EWSN camera-ready PDF. -->
<p class="proj-lead">Can we build accurate wireless channel models without dense site surveys or detailed 3D maps? I developed <strong>WiNeRF</strong>, a physics-grounded neural field that learns a continuous, complex-valued wireless channel directly from sparse commodity WiFi CSI.</p>
</div>

<div class="proj-body">
<p>WiNeRF treats the antenna array's finite angular resolution and phase uncertainty as inductive constraints rather than assuming access to precise propagation geometry. The learned channel can be queried at previously unseen locations and used directly for downstream wireless tasks including beamforming, Angle-of-Arrival estimation, and coverage mapping.</p>

<p>Across approximately <strong>30,000 synchronized CSI and pose measurements</strong> collected by a mobile robot in three indoor environments, WiNeRF achieved a <strong>5.3 dB median prediction SNR</strong> and improved prediction SNR by approximately <strong>3.0–6.7 dB over prior neural baselines</strong>.</p>
</div>

<div class="proj-actions">
<a href="https://ewsn.org/file-repository/ewsn2026/ewsn26-final38.pdf" target="_blank" class="btn-pill btn-pdf">Paper</a>
<a href="{{ site.url }}{{ site.baseurl }}/papers/talks/winerf-ewsn2026-slides.pdf" target="_blank" class="btn-pill btn-website">Slides</a>
</div>
</article>

<article class="proj-card" id="canopytwin" markdown="0">
<h3 class="proj-title" id="foliart">FoliaRT: Reusable Neural Electromagnetic Canopy Modeling for Wireless Ray Tracing</h3>
<p class="proj-meta">
<span class="proj-status">Submitted to ACM SenSys 2027</span>
<span class="proj-fact">Wireless digital twins</span>
</p>
<div class="proj-intro">
<figure class="proj-figure proj-figure--wide">
<a href="{{ site.url }}{{ site.baseurl }}/images/research/foliart-overview.png" target="_blank" rel="noopener">
<img src="{{ site.url }}{{ site.baseurl }}/images/research/foliart-overview.png" alt="FoliaRT system overview: offline physics-based canopy-response generation and neural training, followed by online canopy-aware ray tracing and downstream tasks." loading="lazy">
</a>
</figure>
<p class="proj-lead">Conventional ray tracers often model vegetation with simplified attenuation approximations, overlooking directional scattering. <strong>FoliaRT</strong> learns reusable canopy electromagnetic responses conditioned on compact morphology descriptors, predicting transmission, absorption, and directional scattering without detailed foliage reconstruction.</p>
</div>
<div class="proj-body">
<p>I developed a <strong>PyTorch-based electromagnetic multiple-scattering model</strong> to generate training data for physics-guided neural predictors. Integrated into <strong>differentiable Sionna RT</strong>, the learned canopy model supports canopy-aware propagation, wireless coverage prediction, and vegetation sensing across different scenes.</p>
<p>On real-world <strong>AERPAW UAV measurements</strong>, FoliaRT reduced median received-power prediction error by <strong>53%, from 4.2 dB to 2.0 dB</strong>, compared with the ITU-R vegetation baseline. Canopy-response inference is approximately <strong>35,000× faster</strong> than the physics model.</p>
</div>
</article>

<article class="proj-card" id="pu-hno" markdown="0">
<h3 class="proj-title" id="rayno">RayNO: Physics Unrolled Neural Operator for Accelerating High-Fidelity Wireless Ray Tracing</h3>
<p class="proj-meta">
<span class="proj-status">NeurIPS 2026</span>
</p>

<div class="proj-intro">
<figure class="proj-figure proj-figure--wide">
<a href="{{ site.url }}{{ site.baseurl }}/images/research/rayno-architecture.png" target="_blank" rel="noopener">
<img src="{{ site.url }}{{ site.baseurl }}/images/research/rayno-architecture.png" alt="RayNO architecture: geometry and material conditioning, shared encoder, and staged specular transport, edge diffraction, and scattering operators." loading="lazy">
</a>
</figure>
<p class="proj-lead">High-fidelity radio maps are expensive to simulate, while inexpensive finite-ray simulations are faster but contain noise and can miss fine propagation structure. <strong>RayNO</strong> uses multi-fidelity learning and a physics-unrolled neural-operator architecture that progressively refines wireless fields through stages associated with reflection, diffraction, and scattering rather than treating radio-map prediction as generic image-to-image regression.</p>
</div>

<div class="proj-body">
<p>I contributed to <strong>dataset generation and model development</strong>. The model achieved <strong>3.47 dB RMSE</strong> and <strong>0.82 outage F1</strong> against high-fidelity references. In one downstream access-point-placement experiment on a <strong>10,000 m² floorplan</strong>, using the RayNO prediction resulted in approximately <strong>92 Mbps</strong> throughput compared with <strong>16 Mbps</strong> using a CNN prediction, despite relatively similar image-similarity scores.</p>
</div>

<div class="proj-actions">
<a href="https://arxiv.org/abs/2608.18495" target="_blank" class="btn-pill btn-arxiv">arXiv</a>
<a href="https://arxiv.org/pdf/2608.18495" target="_blank" class="btn-pill btn-pdf">PDF</a>
</div>
</article>

<article class="proj-card" id="wiviz" markdown="0">
<h3 class="proj-title">WiViz: Interactive Visualizations for Wireless Literacy</h3>
<p class="proj-meta">
<span class="proj-status">Submitted to ACM HotMobile 2027</span>
<span class="proj-fact">HCI + Wireless</span>
</p>

<div class="proj-intro">
<figure class="proj-figure">
<a href="{{ site.url }}{{ site.baseurl }}/images/research/wiviz-interface.png" target="_blank" rel="noopener">
<img src="{{ site.url }}{{ site.baseurl }}/images/research/wiviz-interface.png" alt="WiViz interface showing signal propagation over time, augmented-reality controls, and interaction with the indoor scene." loading="lazy">
</a>
</figure>
<p class="proj-lead">Wireless interfaces usually show outcomes—signal bars, throughput, or coverage maps—but hide the physical mechanisms that produced them. <strong>WiViz</strong> is an interactive, mechanism-centered visualization system designed to help non-experts understand wireless propagation and reason about its behavior.</p>
</div>
<div class="proj-body">
<p>The submitted paper, <em>Wireless Literacy: Building Mental Models for Reasoning About Everyday Wireless Systems</em>, introduces a broader research agenda spanning mechanistic understanding, operational reasoning, and understanding wireless capabilities. WiViz is an initial case study within this agenda, using Unity and Sionna RT to connect indoor propagation paths and signal animations to outcomes such as coverage and connectivity.</p>
<p>In a preliminary <strong>24-participant study</strong>, WiViz supported <strong>80.6% mechanism-correct explanations versus 24.2% with heatmaps</strong> and <strong>87.5% decision accuracy versus 65.2%</strong>. The study also revealed misconceptions introduced by simplified representations, motivating abstractions that are understandable and physically faithful.</p>
<p>I lead the current user-study design and evaluation and contribute to the Unity/Sionna RT implementation.</p>
</div>

<div class="proj-actions">
<a href="https://isens.cs.illinois.edu/projects/invisibleWireless" target="_blank" class="btn-pill btn-website">Group Project Page</a>
<a href="https://immerse.illinois.edu/symposium-posters/82376" target="_blank" class="btn-pill btn-bib">Poster</a>
</div>
<!-- The iSens page covers the group's visualization research broadly rather than
     WiViz specifically, so it is labelled as the group project page, not as WiViz.
     The IMMERSE link is a symposium poster; it was previously mislabelled "Demo". -->
</article>

## Earlier Research

<div class="mini-grid" markdown="0">
<div class="mini-card">
<h4>WiSM — Non-Intrusive Soil Moisture Sensing Using WiFi Signals</h4>
<p>Developed a contactless RF sensing system for estimating surface soil moisture from reflected WiFi-band OFDM signals using USRP software-defined radios. The system related received signal strength to dielectric properties through Topp's Equation and was evaluated indoors and in the field over approximately <strong>0–30% soil moisture</strong>.</p>
</div>
<div class="mini-card">
<h4>Breathing-Rate Estimation with Passive UHF RFID</h4>
<p>Investigated respiration monitoring under free body movement using passive UHF RFID phase measurements. The project combined multi-tag motion information, signal processing, and an LSTM-based approach to study how breathing information could be separated from motion-induced corruption.</p>
</div>
<div class="mini-card">
<h4>Urban Social Media Analysis</h4>
<p>Built machine-learning and data-analysis components for a World Bank-funded urban-policy project at LUMS. The work included a BERT-based topic and sentiment analysis pipeline over approximately <strong>500,000 tweets</strong> and an interactive dashboard for stakeholders.</p>
</div>
</div>

## Selected Software Projects

<div class="mini-grid" markdown="0">
<div class="mini-card">
<h4>Raft Key-Value Store</h4>
<p>Implemented a fault-tolerant replicated key-value store in Go using the Raft consensus protocol.</p>
</div>
<div class="mini-card">
<h4>Blockchain Collectibles Marketplace</h4>
<p>Developed a blockchain-based collectibles marketplace.</p>
<div class="pub-actions">
<a href="https://github.com/Saif2098/Pokemon-Blockchain" target="_blank" class="btn-pill btn-git">GitHub</a>
</div>
</div>
</div>
