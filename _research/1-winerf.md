---
title: "WiNeRF"
excerpt: "Learns a continuous radiance-field representation of indoor wireless propagation from sparse channel measurements, enabling accurate multipath prediction without dense site surveys."
collection: research
tier: current
order: 1
status: "EWSN 2026 · Accepted"
link: "https://ewsn.org/file-repository/ewsn2026/ewsn26-final38.pdf"
link_label: "Read the paper"
---

WiNeRF trains a NeRF-style differentiable model of an indoor wireless environment from sparse Angle-of-Arrival and channel measurements, using a physics-inspired architecture built on Instant-NGP. Once trained, it predicts location-specific multipath characteristics anywhere in the scene, enabling dense channel prediction from a handful of real measurements — useful for link planning in mission-critical applications like AR/VR and robotics.
