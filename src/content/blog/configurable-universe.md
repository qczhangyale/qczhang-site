---
title: "What If the Constants of Physics Aren't Free Parameters?"
description: "A new geometric framework offers a third path between multiverse selection and brute coincidence — and it makes a falsifiable prediction. An introduction to Twistor Configuration Geometry and the Configurable Universe research program."
pubDate: 2026-05-03
---

In 1951, the physicist Friedrich Lenz noticed that the proton-to-electron mass ratio is almost exactly $6\pi^5$. He wrote a letter to *Physical Review* consisting of one equation, two sentences, and one reference. He had no theory. Just an observation: $m_p/m_e \approx 6\pi^5$, accurate to all precision of his day's measurements.

Seventy-five years later, no one has explained Lenz's observation. The Standard Model treats $m_p/m_e$ as input. Lattice QCD computes it numerically but cannot derive *why* it sits so close to a simple expression in the geometric constant $\pi$. The current value $1836.152673$ differs from $6\pi^5 \approx 1836.118$ by about one part in fifty thousand.

For most physicists, that is where the story ends: a curious near-miss, nothing more. Numerology has a deserved bad reputation.

But what if Lenz's observation isn't isolated? What if there are *nine* such "coincidences" — across electromagnetism, the weak force, the strong force, lepton masses, hadronic masses, gravity, and cosmology — each precise to better than one percent, all expressible in the same tiny vocabulary of low $\pi$-powers, factorials, Fibonacci numbers, and the golden ratio?

That is the empirical situation a sixteen-paper publication arc on Twistor Configuration Geometry (TCG), now on Zenodo, takes seriously. Twelve papers documented individual observations as they were discovered, one closed-form ratio per paper at sub-percent precision. Four consolidation papers (May 2026) synthesize the empirical body, articulate a mathematical framework, propose a philosophical interpretation, and catalog the falsifiable predictions. The radical question the arc asks is not "what mechanism produces these patterns?" but: *what if the patterns are telling us that the fundamental constants of nature aren't really parameters at all?*

## Nine Numbers, One Grammar

Six examples (the full set of nine is in [the Review](/papers/01-daedalus-review/)):

- $1/\alpha \approx \pi + \pi^2 + 4\pi^3 = 137.036304$ — vs. measured $137.035999$ (2.2 ppm)
- $\sin^2\theta_W$ at low $Q^2$ $\approx 3/(4\pi) = 0.23873$ — vs. ~0.2386 (0.05%)
- $y_e \approx (1 - 1/(2\pi))\, e^{-4\pi} = 2.93 \times 10^{-6}$ — vs. $2.94 \times 10^{-6}$ (0.09%)
- $M_W/v \approx 1/\sqrt{3\pi} = 0.32574$ — vs. $0.32641$ (0.21%)
- $m_\pi / m_e \approx 2(\pi + \pi^2 + 4\pi^3) = 274.07$ — vs. $273.13$ (0.4%)
- $\alpha_G \equiv G m_e^2/(\hbar c) \approx \alpha^8 y_e^5$ — matches at 0.024%

A note on provenance: **most of these nine relations were first identified in the present series of papers**, each documented in its own primary publication during the research marathon described below. Two have partial antecedents. The closed form $1/\alpha \approx \pi + \pi^2 + 4\pi^3$ may have been noted as a numerical curiosity in earlier sources, but its origin as a chamber-weighted Fubini–Study sum on twistor strata is the present work's contribution. The relation $m_\pi/m_e \approx 2(\pi + \pi^2 + 4\pi^3)$ is a recasting of Nambu's 1952 observation $m_\pi/m_e \approx 2/\alpha$, with the factor 2 newly identified as the Fibonacci matching count $F_3$ at the $n=2$ stratum. The other seven — including the cosmological-constant relation that started the program, $\alpha_G \approx \alpha^8 y_e^5$, the simultaneous prediction of $\alpha_s$ and $\sin^2\theta_W$ from a single CP³ construction, the electron-Yukawa closed form, the lepton-mass golden-ratio scaling, and most recently $M_W/v \approx 1/\sqrt{3\pi}$ — are *original discoveries* of this research program.

Three things make this empirical body striking, and their conjunction matters more than any single one.

**The patterns span sectors of physics that have nothing to do with each other.** QED, QCD, chiral symmetry breaking, electroweak, gravity, cosmology — independently measured, independently theorized.

**The nine constants themselves span more than 120 orders of magnitude.** $\Lambda \, \ell_{\rm Pl}^2$ is about $10^{-122}$. $\alpha_G$ is about $10^{-45}$. $y_e$ is about $10^{-6}$. $m_\pi/m_e$ is about $10^2$.

> If you forced yourself to write formulas using only $\pi$-powers, factorials, Fibonacci numbers, and $\varphi$, you could construct many short expressions — but the chance that nine would match measured constants spanning 124 orders of magnitude is exponentially small, even after generous look-elsewhere adjustments.

**None of these nine constants has any current theoretical derivation.** The Standard Model treats $\alpha$, $\sin^2\theta_W$, the Yukawa couplings, and the QCD scale as input. General Relativity treats Newton's $G$ as input. The cosmological constant $\Lambda$ has the famous "120-order-of-magnitude" problem with no accepted resolution; the hierarchy problem (why $M_W/M_{\rm Pl}$ is small) sits in the same family. These are the deepest unsolved puzzles of modern physics.

So the nine patterns are not random relations among already-explained quantities. They are patterns among the *most mysterious unexplained numbers in physics*, all speaking the same mathematical language across 124 orders of magnitude. Whatever produces such regularity is not in the theoretical apparatus we currently have.

The standard responses to fundamental constants divide into three camps. **Brute fact:** these are coincidences, ignore them. **Anthropic / multiverse:** many universes exist, we live in one where the constants happen to permit observers. **Derivation:** a future theory will compute the constants from more fundamental principles.

The TCG arc proposes a fourth response: the constants aren't parameters needing to be set, derived, or selected. They are *structural invariants of a chamber within a configuration-space construction*, in the same sense that the dimension of a vector space is an invariant of the space's structure.

## Parameters Versus Invariants

The temperature of a gas is a parameter — it could be different; external conditions set it.

The dimension of a vector space is an invariant — it isn't set; it *is* what makes the space the space it is. A 4-dimensional vector space couldn't have been 3-dimensional without ceasing to be the same object.

Physics already uses this distinction quietly. The Euler characteristic of a torus is an invariant of its topology, not a tunable parameter. The integer Hall conductance is the first Chern number of the band structure — small perturbations cannot change it without changing the topology. The critical exponents of the 3D Ising model are universality-class invariants, not microscopic parameters.

The configurable view holds that $\alpha$, $\sin^2\theta_W$, the Yukawa couplings, $\Lambda$, and the rest belong in this second category. Asking "why $\alpha = 1/137$?" on this view is more like asking "why is SO(3) three-dimensional?" than like "why is the room temperature 22 °C?"

## Twistor Configuration Geometry: The Construction

The mathematical realization is built from two ingredients.

*Twistor.* Penrose's projective twistor space CP³, introduced in 1967 as a more fundamental setting than 4D spacetime, with revival in modern scattering-amplitude work (Witten, BCFW, the amplituhedron).

*Configuration geometry.* Chamberwise compactifications (Fulton–MacPherson, Axelrod–Singer) of spaces of labeled points on an oriented interval, organized into $r!$ chambers — one per ordering — at each rank $r$.

TCG combines them into a stratified space:

$$
\mathfrak{X}_{\rm FPA} \;=\; \bigsqcup_{n=1,2,3} \mathbb{CP}^n \times \mathcal{K}_{r_n}(I), \qquad r_n = 2n - 2.
$$

The construction yields four combinatorial primitives as theorems (no extra postulates):

- $r_n = 2n - 2$ — line-deformation cohomology dimension
- $r_n!$ — chamber count
- $F_{r_n + 1}$ — Fibonacci matching count
- $\pi + \pi^2 + 4\pi^3$ — chamber-weighted Fubini–Study sum

The fourth — the chamber-weighted volume sum at $n \le 3$ — is the same expression that matches $1/\alpha$ to 2.2 ppm.

Seven structural postulates (active ledger P0–P4, P5', P6 as of May 2026; the original P5 contact-scale postulate has been retired and replaced by the dimensionless weak-sector boundary condition P5': $g_{2,W}^2 = 4/(3\pi)$) plus phenomenological identifications map these primitives to the nine empirical observations. Nine measured dimensionless relations reduce, in TCG's reading, to combinations of *four combinatorial primitives* plus a small structural-postulate set. That is the empirical compression the framework achieves.

## We Are in a Chamber

If TCG's identifications are right, the universe corresponds to a specific chamber within the FPA stratification. Not a chamber inside a multiverse. *The* chamber, singular. The universe is its chamber, in the same sense a 4-dimensional vector space is 4-dimensional. The constants are invariants of that chamber.

This view, articulated in [the philosophical companion paper](/papers/02-configurable-universe/), commits to four claims:

**(C1)** One mathematical structure within which the universe is a chamber. No physically realized multiverse is required.

**(C2)** The chamber's properties are determined by the structure of the configuration space, not by external selection. The view does not answer "why this chamber rather than another?" — it holds the question presupposes alternatives the view does not require, and is therefore ill-posed.

**(C3)** Constants are structural invariants, not free parameters.

**(C4)** Chamber invariants admit empirical verification through their algebraic structure. Constants that are invariants should display non-random patterns; constants that are free parameters should not.

The closest existing positions are Tegmark's Mathematical Universe Hypothesis (MUH) and Ladyman/French Ontic Structural Realism (OSR). The configurable view inherits MUH's structural reading but rejects its Level 4 multiverse. It is OSR specialized to the question of fundamental constants. What is novel is the specific construction (TCG) and the empirical anchoring through nine observed algebraic patterns.

## The Fine-Tuning Problem, Dissolved (Not Solved)

The fine-tuning problem asks why the constants are "just right" for stars, chemistry, observers. The standard responses (anthropic, brute fact, derivation) all assume the constants *could* have been different and ask why they happen to be these particular values.

The configurable view denies the assumption.

> Asking "why these constants?" is structurally analogous to asking "why is SO(3) three-dimensional and not five?" SO(5) exists too — but it isn't SO(3); it's a different object. Similarly, chambers with different constants exist as mathematical objects — but they aren't this universe; they're different universes.

This isn't *solving* fine-tuning. It is *dissolving* it, by reconstructing the question's presupposition as ill-formed. As Einstein dissolved "what is the velocity of the aether?" by showing the question had no operational meaning, the configurable view dissolves "why these constants?" by showing its presupposition (that constants could vary while the universe stayed the same) doesn't hold.

## Sixteen Papers, One Program: A Research Marathon

What you are reading is the synthesis of a research marathon, not a sprint. Over several months — beginning with the cosmological-constant relation as an isolated curiosity and proceeding, one observation at a time, through the gravitational-coupling formula, the η relation, the fine-structure twistor-volume sum, the Penrose-volume integral, the electron-Yukawa expression, the super-flag construction, the lepton-mass golden-ratio scaling, and others — each closed-form ratio was documented in its own primary publication. At the time of writing, each was apparently disconnected from the others.

Only after twelve such papers had accumulated did a unified mathematical framework emerge that could read them as facets of a single combinatorial structure. That structure is Twistor Configuration Geometry. The arc culminated in four consolidation papers in May 2026 that articulate the framework, classify the empirical body, propose the philosophical interpretation, and catalog the falsifiable predictions.

The order matters. TCG is a *post hoc* synthesis. That has a virtue: the empirical body is not a fit to a pre-specified theoretical structure, since the observations were each documented before the structure existed. It also has a cost: the framework was built knowing what it had to fit, which limits how much we can claim about its predictive power until forward predictions are tested. The framework's honest status as a "medium-form" research program — strong empirical compression, weak forward-prediction track record — reflects this history exactly.

## The Testable Prediction

For experimentalists, the most important question is: does the framework predict anything testable?

Yes. One thing.

Postulate P6 assigns spin-$s$ vacuum operators a degree $d_s = 2(s+2)$ in the chamber's combinatorial weight. The $\Lambda$ relation (O1) sits at $s=0$; $\alpha_G$ (O2) sits at $s=2$. The intermediate $s=1$ case is the principal forward prediction: a vector-mediated short-range fifth force with relative Yukawa-potential strength

$$
\alpha_Y \approx 1.88 \times 10^4 \quad \text{relative to gravity}
$$

in a window roughly $\lambda \lesssim 5$–10 µm and $m \gtrsim 25$–28 meV.

The prediction is not yet experimentally accessible. At $\lambda = 5$ µm, the current binding bound from optomechanical short-range gravity tests (Geraci et al. 2008 at Northwestern; Venugopalan et al. 2026 at Stanford with Gratta) is roughly $\alpha_Y \lesssim 10^7$ — about 500× above the prediction. Reaching the prediction requires roughly two and a half decades of sensitivity improvement. Whether that is achievable in 5 years or 15 is an experimental question this article does not adjudicate.

What matters is that the prediction is concrete and falsifiable. If no signal is found at the predicted strength after sensitivity is reached, the prediction — and with it postulate P6 — is falsified. If the signal is found, the framework is strongly vindicated.

The framework also has one strict no-go theorem (the weak-angle relation cannot be on-shell, 60σ excluded), three structural constraints (electron-specificity in the $\Lambda$ relation, the dimensionless gauge-kinetic-normalization target P5': $g_{2,W}^2 = 4/(3\pi)$ for the weak sector, specific signed residual $\Delta_\alpha = -3.046 \times 10^{-4}$ in the $\alpha$ relation), and an $\mathcal{I}[f]$ guardrail against post-hoc fitting — all detailed in [the predictions paper](/papers/04-predictions-no-go/).

## What's Missing — and Why the Work Matters Anyway

The framework does not derive the constants from first principles. It compresses them, which is useful but not the same as deriving them.

It does not yet show how dynamical physics — fields, equations of motion, gauge structure, spacetime emergence, quantization — arises from the chamber structure. This dynamical-derivation gap is the largest open task. Five upgrade paths (helix-dependent functional, boundary operator, contact construction, lepton mass operator, spin-degree field complex) are listed in the framework reference; none is complete.

The configurable interpretation rests on the conditional "if TCG (or a successor construction) is right." Until the dynamical-derivation gap is bridged, that conditional is not yet established.

Three reasons the work matters anyway. **The patterns are real:** nine sub-percent algebraic relations among independently measured constants, spanning 124 orders of magnitude, in a tiny vocabulary, deserve careful documentation regardless of interpretation. **The conceptual reframe is sharper than the existing options:** a fourth response to fine-tuning, denying the presupposition rather than answering the question, is at minimum a useful philosophical contribution. **The view is honestly falsifiable**, which is rare for positions of this kind: temporal variation of constants, structural relations failing under tighter measurement, or a null spin-1 result after sensitivity is reached, all kill it.

## For Further Reading

All sixteen papers are on Zenodo under CC-BY-4.0. See [the full bibliography](/papers/) on this site, or jump directly:

**The four consolidation papers (May 2026) — start here**

1. [DAEDALUS Review](/papers/01-daedalus-review/) — empirical body and Cabibbo-scenario classification
2. [The Configurable Universe](/papers/02-configurable-universe/) — philosophical companion
3. [Twistor Configuration Geometry: the FPA Model](/papers/03-tcg-fpa-model/) — mathematical framework reference
4. [Predictions and No-Go Consequences](/papers/04-predictions-no-go/) — predictive ledger

**The twelve development papers (in research-marathon order)**

5. [Λ formula](/papers/05-lambda-formula/) — the program's starting point
6. [η relation](/papers/06-eta-relation/) — baryon asymmetry vs electron rest energy
7. [α_G ≈ α⁸ y_e⁵](/papers/07-alpha-g-formula/) — the cleanest sub-percent fit
8. [Emergent gravity / electroweak](/papers/08-emergent-gravity/) — original spin-1 derivation
9. [DAEDALUS methodology](/papers/09-daedalus-methodology/)
10. [The electron as architectural particle](/papers/10-electron-architect/)
11. [α twistor-volume note](/papers/11-alpha-twistor-volume/)
12. [Stratified Penrose-volume integral](/papers/12-alpha-s-sin2thetaW/) — α_s and sin²θ_W from one CP³
13. [Electron Yukawa observation](/papers/13-electron-yukawa/)
14. [Super-flag construction on CP^(3|4)](/papers/14-super-flag-construction/)
15. [Lepton-mass golden-ratio predictions](/papers/15-lepton-golden-ratio/)
16. [Super-Calabi–Yau reading of the Λ exponent](/papers/16-super-cy-lambda/)

**Recommended paths**

- *New reader:* (1) → (2) → (3) → (4), then (11)–(16) for twistor details
- *Technical / mathematical-physics:* (3) → (1) → (11) → (12) → (14) → rest
- *Philosophy / foundations:* (2) → (1) Cabibbo-scenario section → (4)
- *Experimentalist evaluating spin-1 fifth-force:* (4) → (8) → (3)

## The Bottom Line

Not a new theory of physics. A structural reframing of what fundamental constants *are*.

The empirical observation is concrete: nine sub-percent algebraic relations, spanning 124 orders of magnitude, in a tiny vocabulary, in numbers physics has no current derivation for.

The proposed interpretation is structural: constants as chamber invariants of a stratified configuration space over Penrose's CP³.

The philosophical implication is dissolutionary: fine-tuning isn't solved; its presupposition is reconstructed as ill-formed.

The testable prediction is sharp: spin-1 fifth force at $\alpha_Y \approx 1.88 \times 10^4$, in 5–10 µm range, reachable with anticipated optomechanical sensitivity improvements.

The honest framing: medium-form research program. Strong-form vindication awaits the spin-1 confirmation or another forward-prediction success.

Friedrich Lenz wrote his two-sentence letter in 1951 with no theory to offer. Seventy-five years later, his observation still has no accepted explanation. But the broader pattern of which it is one example — nine such "coincidences" across the sectors of physics, all expressible in the same tiny algebraic vocabulary — has begun to look like something that may not be coincidence after all.
