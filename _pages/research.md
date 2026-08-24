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
<span class="proj-fact">First author</span>
<span class="proj-fact">In collaboration with Intel</span>
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
</div>
</article>

<article class="proj-card" id="canopytwin" markdown="0">
<h3 class="proj-title">CanopyTwin — Physics-Grounded Vegetation Modeling for Wireless Digital Twins</h3>
<p class="proj-meta">
<span class="proj-status">Ongoing research</span>
<span class="proj-fact">Neural operators</span>
<span class="proj-fact">Wireless digital twins</span>
</p>

<div class="proj-intro">
<p class="proj-lead">Vegetation remains difficult for scene-scale wireless simulation. Practical ray tracers often approximate foliage through penetration loss, effective material properties, or simplified scattering behavior, while explicitly resolving the many interactions among leaves, branches, and other structures can become prohibitively expensive at scene scale.</p>
<!-- TODO: project image -->
<!-- Suggested image (v7): a conceptual diagram contrasting explicit leaf/branch geometry
     with a compact learned vegetation scattering operator. Add a <figure class="proj-figure">
     directly above the lead paragraph; it floats right automatically. -->
</div>

<div class="proj-body">
<p>I am currently designing a <strong>physics-grounded neural-operator model</strong> that learns the aggregate scattering behavior of vegetation from high-fidelity physical simulation. The goal is to replace expensive leaf- and branch-level interaction modeling with a compact learned representation that can eventually be integrated into wireless digital twins for fast and differentiable propagation modeling.</p>

<p>This project is currently in the <strong>architecture and model-design stage</strong>. Current work focuses on identifying the right physical abstraction and learning formulation for complex multi-interaction scattering inside vegetation.</p>
</div>
</article>

<article class="proj-card" id="pu-hno" markdown="0">
<h3 class="proj-title">PU-HNO — Physics-Unrolled Neural Operators for Radio Maps</h3>
<p class="proj-meta">
<span class="proj-status">Submitted to NeurIPS 2026</span>
<span class="proj-fact">Second author</span>
</p>

<div class="proj-intro">
<figure class="proj-figure">
<img src="{{ site.url }}{{ site.baseurl }}/images/research/puhno-teaser.png" alt="PU-HNO's three-stage neural-operator architecture: specular transport, edge diffraction, and scattering, with staged supervision" loading="lazy">
</figure>
<!-- Figure 3 extracted from arXiv:2608.18495, matching the v7 suggestion:
     the three-stage PU-HNO architecture showing reflection/specular structure,
     diffraction refinement, and scattering refinement. -->
<p class="proj-lead">High-fidelity radio maps are expensive to simulate, while inexpensive finite-ray simulations are faster but contain noise and can miss fine propagation structure. <strong>PU-HNO</strong> uses a physics-unrolled neural-operator architecture that progressively refines wireless fields through stages associated with reflection, diffraction, and scattering rather than treating radio-map prediction as generic image-to-image regression.</p>
</div>

<div class="proj-body">
<p>I contributed to <strong>dataset generation and model development</strong>. The model achieved approximately <strong>3.5 dB RMSE</strong> and <strong>0.82 outage F1</strong> against high-fidelity references. In one downstream access-point-placement experiment on a <strong>10,000 m² floorplan</strong>, using the PU-HNO prediction resulted in approximately <strong>92 Mbps</strong> throughput compared with <strong>16 Mbps</strong> using a CNN prediction, despite relatively similar image-similarity scores.</p>
</div>

<div class="proj-actions">
<a href="https://arxiv.org/abs/2608.18495" target="_blank" class="btn-pill btn-arxiv">arXiv</a>
<a href="https://arxiv.org/pdf/2608.18495" target="_blank" class="btn-pill btn-pdf">PDF</a>
</div>
</article>

<article class="proj-card" id="wiviz" markdown="0">
<h3 class="proj-title">WiViz — Making Invisible Wireless Mechanisms Understandable</h3>
<p class="proj-meta">
<span class="proj-status">Ongoing</span>
<span class="proj-fact">HCI + Wireless</span>
</p>

<div class="proj-intro">
<p class="proj-lead">Wireless interfaces usually show outcomes—signal bars, throughput, or coverage maps—but hide the physical mechanisms that produced them. <strong>WiViz</strong> explores whether interactive, mechanism-revealing visualizations can help non-experts reason about wireless behavior.</p>
<!-- TODO: project image -->
<!-- Suggested image (v7): a WiViz scene showing transmitter, receiver, propagation paths,
     and an environmental interaction such as blockage or reflection. Add a
     <figure class="proj-figure"> directly above the lead paragraph; it floats right automatically. -->
</div>

<div class="proj-body">
<p>WiViz uses an interactive 3D environment built with Unity and Sionna RT to expose mechanisms such as propagation, blockage, reflection, multipath, and interference. In an initial <strong>24-participant study</strong>, users of the mechanism-revealing visualization correctly identified underlying wireless mechanisms <strong>80.6% of the time versus 24.2% with an outcome-only representation</strong>.</p>

<p>I currently lead the design of the next WiViz user study, which focuses on <strong>wireless literacy, mechanistic reasoning, and transfer to unfamiliar scenarios</strong>, and I occasionally contribute to implementation.</p>
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
