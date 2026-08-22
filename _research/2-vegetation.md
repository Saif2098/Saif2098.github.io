---
title: "Vegetation Channel Modeling"
excerpt: "A learned, physically-grounded model of how radio waves scatter off vegetation, so outdoor wireless simulators can handle real environments without simulating leaf-by-leaf geometry."
collection: research
tier: current
order: 2
status: "In progress"
---

Standard ray tracers model the world as flat surfaces, an assumption that breaks down for vegetation: a tree canopy is thousands of scatterers, each smaller than a wavelength. This project develops a learned scattering model attached to a tree's bounding surface that stands in for its full internal geometry, built as a custom material inside NVIDIA's differentiable ray tracer Sionna RT. The goal is a vegetation representation that is fast enough for scene-scale simulation, differentiable end to end, and traceable to electromagnetic theory — extending the same idea behind WiNeRF to outdoor, vegetated environments.
