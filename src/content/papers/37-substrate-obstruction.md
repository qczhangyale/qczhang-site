---
title: "Why CP³? A Substrate-Level Obstruction Theorem for Twistor-Incidence Attractors"
shortTitle: "Substrate-Level Obstruction"
doi: "10.5281/zenodo.20709751"
date: 2026-06-15
order: 37
category: foundations
description: "First substrate-level work in DAEDALUS. The 36 prior TCG (Twistor Configuration Geometry) papers all take CP³ as primitive datum; this paper asks whether CP³ itself can be derived from a more primitive relational substrate. Proves at theorem level that under minimal twistor-incidence data (C, R, Φ) — information units, binary incidence relation, putative network-to-twistor map — no canonical CP³ attractor is determined. **Four sequential obstructions** combine: (1) symmetry-group target degeneracy at fixed SU(4) (SU(4) acts on multiple homogeneous flag varieties Gr(1,4) ≅ CP³, Gr(2,4), Gr(3,4) ≅ CP³); (2) twistor-space presupposition (CP³ as twistor space presupposes a 4D conformal structure — Minkowski in the Penrose interpretation or S⁴ in the Atiyah-Hitchin-Singer interpretation, generalizing to arbitrary conformally anti-self-dual Riemannian 4-manifolds); (3) projective-rank degeneracy (pure incidence data without rank-counting constraint do not discriminate CP³ from CP^n at other ranks); (4) order-parameter ambiguity on CP³ (Fubini-Study Kähler form, AHS twistor-fibration structure CP³ → S⁴, projective-incidence relation Z^α π_α = 0, conformal SU(2,2) structure — four candidate order parameters). Theorem 12 combines all four under the minimal-data form. Names labeled successor target P_sub^{CP³} = P_tw^{CP³} + P_ord^{CP³} outside the active ledger. **Two framings dichotomy made explicit (§1)**: configurable framing (Paper #16) dissolves the substrate question by declining its presupposition; substrate-derivation framing (this paper) takes the question seriously and proves it obstructed. Complementary defenses of the CP³ starting datum. Positioning against five pre-geometric quantum gravity programs (Quantum Graphity, Causal Set Theory, Group Field Theory, twistorial loop quantum gravity, Wolfram Physics Project). Verdict: partial positive — substrate-level obstruction theorem; no derivation of CP³ from incidence data; no active-ledger change. Active TCG/τCG postulate ledger UNCHANGED: P_0–P_4, P_{5'}, P_6, P_7, P_H', P_{SO(10)}. Same maturity register as the obstruction trilogy (Papers #27, #32, #33). Five failure modes F1-F5."
---

## Abstract

The [Twistor Configuration Geometry (TCG) corpus](/papers/03-tcg-fpa-model/) takes complex projective three-space $\mathbb{CP}^3$ as a starting datum throughout its 36-paper construction. Substrate-derivation programs — twistor-incidence networks, information-theoretic ontologies, and related pre-geometric proposals — ask whether $\mathbb{CP}^3$ itself can be derived from a more primitive substrate as an emergent attractor of an incidence-network functional rather than postulated.

This note proves at theorem level that, under minimal twistor-incidence data $(C, R, \Phi)$, **no canonical $\mathbb{CP}^3$ attractor is determined**.

## Two framings of "why CP³?"

**(1) Configurable framing** ([Paper #16, Configurable Universe](/papers/02-configurable-universe/)): TCG's constants are read as structural invariants of a chamber within the configuration space $\bigsqcup_{n=1}^{3} \mathbb{CP}^n \times \mathcal{K}_{r_n}(I)$. The question "why this chamber rather than another?" is held to be **ill-posed** because it presupposes alternatives the configurable view does not require. On this framing, the substrate question is **dissolved by refusing its presupposition**.

**(2) Substrate-derivation framing** (this paper): the question *is* posed — can $\mathbb{CP}^3$ be derived from a more primitive relational substrate? This paper takes this framing and proves obstruction within it.

Paper #16 and this paper are **complementary defenses**, not competing accounts: dissolve the question (Paper #16) or take it seriously and find it obstructed (this paper). Either route concludes $\mathbb{CP}^3$ stays as TCG's primitive datum.

## Four sequential obstructions

**Obstruction 1 (Proposition 4):** Symmetry-group target degeneracy at fixed $\mathrm{SU}(4)$. $\mathrm{SU}(4)$ acts on multiple homogeneous flag varieties: $\mathrm{Gr}(1, 4) \cong \mathbb{CP}^3$, $\mathrm{Gr}(2, 4)$, $\mathrm{Gr}(3, 4) \cong \mathbb{CP}^3$ (by duality), and partial-flag varieties. Pure $\mathrm{SU}(4)$ symmetry data underdetermine which is the critical attractor.

**Obstruction 2 (Proposition 6):** Twistor-space presupposition. $\mathbb{CP}^3$ as twistor space presupposes a 4D conformal structure. Two standard interpretations: the Penrose interpretation (Lorentzian Minkowski) and the Atiyah-Hitchin-Singer interpretation (Riemannian $S^4$); the AHS construction generalizes to arbitrary conformally anti-self-dual 4-manifolds. Any chain "incidence data → twistors → $\mathbb{CP}^3$" is self-referential without an independent 4D conformal anchor.

**Obstruction 3 (Proposition 8):** Projective-rank degeneracy. Pure incidence-network data with no rank-counting constraint do not discriminate $\mathbb{CP}^3$ from $\mathbb{CP}^n$ at other ranks under $\mathrm{SU}(n+1)$ symmetry.

**Obstruction 4 (Proposition 10):** Order-parameter ambiguity on $\mathbb{CP}^3$. Four canonical structures supply distinct candidate order parameters:
- (a) Fubini-Study Kähler form $\omega_{\rm FS}$
- (b) AHS twistor-fibration structure $\mathbb{CP}^3 \to S^4$ associated with the self-dual conformal/quaternionic-Kähler geometry of the base $S^4$
- (c) projective-incidence relation $Z^\alpha \pi_\alpha = 0$
- (d) conformal $\mathrm{SU}(2, 2)/S(\mathrm{U}(2) \times \mathrm{U}(2))$ structure

The relevant ambiguity is **order-parameter inequivalence** (not cohomology-class inequivalence: $H^2(\mathbb{CP}^3, \mathbb{R}) \cong \mathbb{R}$).

## Combined obstruction theorem (minimal-data form)

**Theorem 12.** Under minimal twistor-incidence data, no canonical $\mathbb{CP}^3$ attractor is determined. The four obstructions are sequential, not independent; no single substrate input closes all four.

**Crucially**, this is a minimal-data form, NOT a universal no-go: the theorem identifies what minimum structure is required, not that no such structure can exist.

## Labeled successor target

$$\boxed{P_{\rm sub}^{\mathbb{CP}^3} = P_{\rm tw}^{\mathbb{CP}^3} + P_{\rm ord}^{\mathbb{CP}^3}}$$

where $P_{\rm tw}^{\mathbb{CP}^3}$ is the four-dimensional conformal anchor sub-residual (with additional input that the anchor's twistor space be $\mathbb{CP}^3$ specifically) and $P_{\rm ord}^{\mathbb{CP}^3}$ is the order-parameter-selection sub-residual.

**$P_{\rm sub}^{\mathbb{CP}^3}$, $P_{\rm tw}^{\mathbb{CP}^3}$, and $P_{\rm ord}^{\mathbb{CP}^3}$ are labeled successor-construction targets outside the active TCG/τCG ledger, NOT new framework axioms.**

## Four-arc named-residual table now extended

| Arc | Residual | Source paper |
|---|---|---|
| Electron $P_4$ | $P_{\rm BFV}^{\rm sec}$ | [Paper #27](/papers/27-boundary-superselection-obstruction/) |
| Gauge envelope | $X_{\rm wall\text{-}pol}$ | [Paper #32](/papers/32-pure-spinor-condensation-obstruction/) |
| Hadronic $P_{H'}$ | $P_{\rm pair}^{\rm addr}$ → three-way ([Paper #36](/papers/36-pair-channel-root-wall-residue-addresses/)) | Papers #35, #36 |
| **Substrate** | **$P_{\rm sub}^{\mathbb{CP}^3}$** | **This paper** |

## Verdict

**Partial positive — substrate-level obstruction theorem; no derivation of CP³ from incidence data; no active-ledger change.**

Active TCG/τCG postulate ledger UNCHANGED:
$$P_0\text{--}P_4, \quad P_{5'}, \quad P_6, \quad P_7, \quad P_{H'}, \quad P_{SO(10)}.$$

The 2026-05-01 framework closure verdict is preserved.

## Five failure modes

- **F1.** Substrate-deferral (theorem is minimal-data form, not universal no-go)
- **F2.** Quantum-Graphity equivalence (TIN ≡ QG with twistor relabeling absent additional substrate structure)
- **F3.** Look-elsewhere expansion forbidden (substrate question for $\mathbb{CP}^3$ specific; analogous questions for other primitives require independent obstruction analysis)
- **F4.** Self-referential twistor identification (substrate chain cannot use $\mathbb{CP}^3$ structure to define the Minkowski it claims to derive)
- **F5.** TCG-stability claim outside scope (paper does NOT claim TCG is incorrect; substrate question is orthogonal to TCG's internal correctness)

## DOI

[https://doi.org/10.5281/zenodo.20709751](https://doi.org/10.5281/zenodo.20709751)
