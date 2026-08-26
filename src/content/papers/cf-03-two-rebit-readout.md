---
title: "Real-Gate Readout of the Two-Rebit Tomographic Defect: Connected Pulses, CNOT Parity, and Copy-Depth Resources"
shortTitle: "Two-Rebit Readout"
doi: "10.5281/zenodo.21926013"
date: 2026-08-18
order: 3
series: cf
release: 1
code: CFQF-Q1
category: cf-quantum
description: "For two rebits, real product effects span only nine of the ten dimensions of the state carrier, leaving one product-invisible coordinate. This paper treats access to it as a copy-depth, control-topology and orientation-resource problem — and gives two exact meters that read it out after reunion."
keyFormula: "s(ρ) = tr[(J ⊗ J)ρ]   ⟹   s = 2p⁺(XZ) − 1"
---

## Abstract

For two rebits, real product effects span a nine-dimensional hyperplane in the ten-dimensional symmetric state carrier, leaving one product-invisible coordinate $s(\rho)=\operatorname{tr}[(J\otimes J)\rho]$, whose magnitude is the established rebit concurrence. We formulate access to this coordinate as a copy-depth, control-topology, and orientation-resource problem. With an i.i.d. source but coherent copy depth one per round, arbitrary separated real-local processing with product ancillas, classical communication, postselection, and real terminal effects has no direct linear sensitivity to $s$; this gives nonidentifiability for unrestricted mixed states, though not under every state promise. After reunion, two exact direct meters are available. A connected pulse

$$U_*=\exp\!\left(\frac{\pi}{4}J\otimes X\right)$$

followed by one local population detector gives $s=1-2p_*$. A single CNOT instead maps $J\otimes J$ to $X\otimes Z$, so one local $X/Z$ parity statistic gives $s=2p_{XZ}^{(+)}-1$. The connected pulse compiles exactly as CNOT–$R_y(\pi/2)$–CNOT; the two protocols are therefore Pareto alternatives rather than a unique minimum. For continuous control, one generator $K\in\mathfrak{so}(4)$ gives full state observability exactly when $[K,J\otimes J]\neq0$, assuming access to the complete product-effect span. Two identical copies recover $|s|$ by separated local collective measurement, while any finite number of identical copies remains orientation-blind under separated real-local collective processing with no oriented shared resource; an oriented shared rebit reference supplies the missing sign standard. Exact detector-response, pulse-angle, and general implemented-gate calibration formulas are derived. These results concern controlled state readout within real quantum theory; they neither restore local tomography nor imply process tomography, empirical inequivalence with complex quantum theory, or a reconstruction of the complex formalism.

## The resource hierarchy

| resource available | what becomes accessible |
|---|---|
| separated real-local, copy depth one | nothing — no direct linear sensitivity to $s$ |
| two identical copies, separated collective | $\lvert s\rvert$ only; sign remains hidden |
| oriented shared rebit reference | the missing sign standard |
| reunion + connected pulse or CNOT | $s$ exactly |

The joint gate does not create the coordinate. It *transduces* an already existing global quantity into a population or parity signal — observability is a property of a state together with an interface, a control topology, a copy depth, and a reference structure.

## Where it sits in the release

CFQF-Q1 takes its quantum-reconstruction context from [CFQF-Q4](/papers/cf-02-complementarity-before-quantum/) and supplies the two-rebit observability context to [CFQF-Q3](/papers/cf-04-certificate-objectivity/), whose countermodel uses the same hidden coordinate.

**[Download paper (Zenodo)](https://doi.org/10.5281/zenodo.21926013)** — 18 pages. CC-BY-4.0.
