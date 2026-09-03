---
title: "Synthetic Taichi-Encoded Spatial Biphoton Models: Counterfactual Entanglement Tests, Reciprocal-Mode Compression, and a Prospective Blind Witness Protocol"
shortTitle: "Synthetic Taichi Biphoton Models"
doi: "10.5281/zenodo.22239426"
date: 2026-09-02
order: 20
series: cf
release: 3
code: RIC-P2
category: cf-ric
description: "A recognizable quantum image need not determine the entanglement of the state that produced it. In a fully specified synthetic biphoton model, complete joint-pixel dephasing leaves the picture and both eyes intact while making the state separable — so the visible eyes are neither the leading Schmidt subspace nor an entanglement witness."
keyFormula: "rectangle defect = 1 − purity  (linear entropy / I-concurrence)"
---

## Abstract

A recognizable quantum image need not determine the entanglement of the bipartite state that produced it. This paper studies that distinction in a fully specified synthetic spatial-biphoton model whose pump amplitude follows a Taichi Diagram morphology. The morphology is engineered preparation data, not a spontaneous image of entanglement and not historical evidence for quantum mechanics. The analysis separates pump morphology, the signal–idler tensor partition, reference-relative phase, and the complete complex joint kernel. For a normalized pure kernel, an integrated rectangle-defect identity equals one minus the reduced-state purity; in coordinate form it is the linear-entropy or I-concurrence invariant. A displayed diagonal nevertheless fails to determine entanglement, as exact separable and maximally entangled controls show.

The source-admitted finite model fixes cell-center coordinates, quadrature, exact Taichi Diagram masks, eye locations, Gaussian convention, phase maps, normalization, interventions, scan grids, and resolution grids. At the declared 18 × 18 grid per arm, the baseline has purity 0.441336, effective Schmidt number 2.265849, entropy 1.473719 nats, eye-region capacity 3.614 percent, and leading-two Schmidt weight 78.730 percent. Host continuation lowers the Schmidt number to 2.108193, whereas support excision raises it to 2.358247. A deterministic random midpoint phase leaves the complete joint intensity unchanged to numerical precision but changes the Schmidt number to 108.558946 and reduces fidelity with the zero-phase state to 0.000857. Complete joint-pixel dephasing preserves the image and both eyes while producing a separable state. Optimal Schmidt truncation requires 10 modes for 95 percent weight and 78 modes for 99 percent, yet an equal-weight two-mode projector already exceeds its separable bound; after the top-two local filter its target fidelity is 0.889270.

The paper gives a leakage-aware partial-transpose test, a two-copy purity test, explicit prospective mode-sorter and Hong–Ou–Mandel or local Z/X/Y analyzer maps, and exact one-sided binomial design calculations. A deterministic 80-block mock TRAIN/CALIBRATION/HOLDOUT execution is included, but the block-resolved experimental data and code described by the motivating article were not obtained or analyzed. The central result is both positive and negative: compact calibrated measurements can witness coherence in the full synthetic kernel, while the visible Taichi Diagram eye regions neither determine the leading Schmidt subspace nor constitute an entanglement witness.

## Many modes to reconstruct, few modes to witness

Two numbers from the same model pull in opposite directions, and the paper keeps them apart:

- **Reconstruction is expensive.** Optimal Schmidt truncation needs 10 modes for 95 percent of the weight, and 78 for 99 percent.
- **Witnessing is cheap.** An equal-weight two-mode projector already exceeds its separable bound.

Recovering the state is a much harder task than certifying that it is coherent. The blind protocol is built on the second fact, not the first.

## What the model is, and is not

The morphology is engineered preparation data. The block-resolved data and code of the motivating 2023 biphoton experiment were not obtained or analyzed, and the mock TRAIN/CALIBRATION/HOLDOUT run demonstrates software ordering rather than experimental certification.

## Where it sits in the release

RIC-P2 applies and stress-tests the architecture of [RIC-P1](/papers/cf-19-reciprocal-internal-complementarity/). Its synthetic model, scripts and outputs are frozen in [RIC-D1](/papers/cf-21-ric-exact-checks-archive/).

**[Download paper (Zenodo)](https://doi.org/10.5281/zenodo.22239426)** — CC-BY-4.0.
