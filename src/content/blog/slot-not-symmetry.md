---
title: "Slot, Not Symmetry: Why the 6! in the Hadronic Lenz Invariant Is Not Weyl-Derived"
description: "Hadronic geometry from the bitwistor pair-channel note gave the Lenz identification 6π^5 = 6! · Vol_FS(P(∧^2 4)) under TCG/FPA Fubini-Study normalization, with P(∧^2 4) ≅ CP^5 and Vol_FS(CP^5) = π^5/5! canonical. The 6! slot multiplier was flagged as residual G3. Today's paper closes that question with a clean theorem-level negative: 6! is not derivable from canonical SU(4)-equivariant data. Three independent obstructions, plus one auxiliary proposition. First (§3), |W(SU(4))| = |S_4| = 24, not 720; the induced S_4 action on the six pair-channel coordinate labels of ∧^2 4 is faithful but proper inside S_6, and treating the six labels as freely permutable forgets the incidence structure they inherit from four fundamental labels. Second (§4), no canonical SU(4)-equivariant projective invariant from FS + Chern-Weil data selects 6! without an additional slot-frame choice. Third (§5), Gaussian traces give det K (= 1 for K = I), and Berezin integration with η = Σ bar-θ θ produces ∫ η^6 = 6! only via the unnormalized top monomial — normalized η^6/6! and exponential e^η both give 1; the factorial survives only by withholding canonical normalization. Auxiliary (§6): geometric quantization C(k+5,5) skips 720, and the P_7 wall gives a 3+3 split with at most |S_3 ≀ S_2| = 72 residual symmetry. Corollary (§7): G3 obstruction in relative form — 6! is not derived from canonical TCG/FPA structures, but the obstruction is not absolute impossibility; future derivation must identify additional six-slot frame, boundary trace, state-sum, defect sector, or nonstandard measure normalization, recorded as new input rather than hidden inside P_H'. Verdict: theorem-level OBSTRUCTED. Residual G3 stays outside the active ledger, reclassified as a trace/measure-selection input. The hadronic arc now joins the electron and gauge arcs at theorem-level obstruction maturity. Three-arc symmetric parity completed. Active TCG/FPA postulate ledger unchanged."
pubDate: 2026-05-13
---

The Lenz observation $m_p/m_e \approx 6\pi^5$ has had a compact hadronic reading in the framework since [the bitwistor pair-channel note](/blog/algebra-not-vacuum/): the antisymmetric two-bitwistor pair-channel space $\mathbb{P}(\wedge^2 \mathbf{4})$ is canonically isomorphic to $\mathbb{CP}^5$, and under the TCG/FPA Fubini–Study normalization convention $[\omega_{FS}] = \pi H$ the geometric half $\mathrm{Vol}_{FS}(\mathbb{CP}^5) = \pi^5/5!$ is canonical. The remaining factor $6!$ — the "$G3$" subgap — was the one piece that the bitwistor reading did not derive. Today's paper closes that question with a clean theorem-level negative.

**The 6! is not Weyl-derived. It is not projective-geometry-derived. It is not Berezin-derived. It is not quantization-derived. It is not P_7-wall-derived. It is a slot-frame / measure-selection input.**

## The temptation, and why it fails

The temptation is the dimension count: $\dim \wedge^2 \mathbf{4} = 6$, so why not identify the $6!$ with the symmetric group $S_6$ permuting these six basis vectors? Three reasons it fails, in increasing sharpness.

**Theorem 1 — Weyl symmetry is $S_4$, not $S_6$.** The actual weights of $\wedge^2 \mathbf{4}$ live in the $A_3$ weight lattice. Their pair-channel coordinate labels, inherited from a choice of basis of $\mathbf{4}$, are the unordered pairs
$$\{12, 13, 14, 23, 24, 34\}.$$
The Weyl group of $SU(4)$ is $|W(A_3)| = |S_4| = 24$, and the canonically induced action on the six pair labels is
$$S_4 \hookrightarrow \mathrm{Sym}\{12,13,14,23,24,34\} \cong S_6, \qquad \sigma \cdot (ij) = (\sigma(i), \sigma(j)).$$
This embedding is faithful (if $\sigma$ fixes every unordered pair, comparing $\{1,2\}$ with $\{1,3\}$ forces $\sigma(1) = 1$, and similarly for other elements). Its image has order $24$, not $720$. **Treating the six labels as freely permutable forgets the incidence structure that the pairs inherit from four fundamental labels**, and that forgetting is an extra slot-frame choice, not Weyl symmetry. Whatever produces $6!$, it is not $|W(SU(4))|$.

**Theorem 2 — No projective invariant selects 6!.** The next hope is projective geometry. The Fubini–Study top integral $\int_{\mathbb{CP}^5} \omega_{FS}^5/5! = \pi^5/5!$ is canonical (in the chosen convention). The tangent Chern class is $c(T\mathbb{CP}^5) = (1+H)^6$, with $c_j = \binom{6}{j} H^j$ from the Euler sequence. **No natural $SU(4)$-equivariant projective invariant constructed from these standard structures selects the ordered six-slot factor $6!$ without an additional normalization or slot-frame choice.** One can always multiply by $720$ by hand, but that puts the factor into the integrand rather than deriving it from $\mathbb{CP}^5$, $\omega_{FS}$, or the $SU(4)$ representation.

**Theorem 4 — Berezin selects 6! only by withholding the canonical normalization.** The third hope is an action-level trace. A Gaussian path integral over a six-dimensional complex field with kinetic operator $K$ gives $\det K$ or $(\det K)^{-1}$ — for $K = I$, just $1$. Berezin integration with $\eta = \sum_{i=1}^6 \bar\theta_i \theta_i$ gives
$$\int d^6\bar\theta\, d^6\theta\, \eta^6 = 6!, \qquad \int d^6\bar\theta\, d^6\theta\, \frac{\eta^6}{6!} = 1, \qquad \int d^6\bar\theta\, d^6\theta\, e^\eta = 1.$$
The $6!$ appears only when one uses the unnormalized top monomial $\eta^6$. The normalized top form $\eta^6/6!$ and the exponential convention $e^\eta$ both give unity. **The factorial survives only by withholding the canonical normalization** — an external slot-frame choice equivalent to the labeled-slot input.

## Two more escape routes, both closed

The paper checks two further routes that might rescue $6!$ from canonical data: geometric quantization, and the $P_7$ wall structure inherited from [the wall-deletion note](/papers/19-wall-deletion-pati-salam/).

Geometric quantization of $\mathbb{CP}^5$ with the hyperplane bundle $\mathcal{O}(k)$ gives $\dim H^0(\mathbb{CP}^5, \mathcal{O}(k)) = \binom{k+5}{5}$ — degree-$k$ homogeneous polynomials in six variables. The representation-level choice $k = 1$ gives $6$ (the dimension of $\wedge^2 \mathbf{4}$), not $720$. Around $720$ the sequence jumps from $\binom{11}{5} = 462$ to $\binom{12}{5} = 792$, so no integer $k$ produces $6!$ as a holomorphic-section count.

The $P_7$ wall gives the Pati–Salam split $\mathbf{4} = C \oplus \ell$, hence
$$\wedge^2 \mathbf{4} \cong \wedge^2 C \oplus (\ell \wedge C),$$
a meaningful $3+3$ decomposition of color–color and lepton–color pair channels. The naturally derived residual symmetry is a single diagonal $S_3$ fixing the lepton label (the color $S_3 \subset S_4$ acts on both blocks). Even granting independent block permutations or an extra block exchange, the residual order is bounded by $|S_3 \wr S_2| = 72$ — still far below $720$.

## The corollary, in its honest relative form

Combining the three theorems and the auxiliary proposition: **under canonical TCG/FPA structures — projective geometry, Weyl symmetry, Chern–Weil, geometric quantization, Gaussian/Berezin action-level trace, and $P_7$ wall structure — the $6!$ multiplier is not derivable.** It remains an FPA-style labeled-slot residual, the original $G3$ subgap of $P_{H'}$.

A precise scope note matters here: this is a *relative obstruction*, not an absolute impossibility theorem. It rules out derivation from the current canonical data. Any successful future derivation must identify an additional six-slot frame, boundary trace, state-sum, defect sector, or nonstandard measure normalization, and that structure should be recorded as new input rather than hidden inside $P_{H'}$.

## What is residual

The residual classification after this paper:

> $G3$: $6!$ slot multiplier in the hadronic Lenz invariant — a trace/measure-selection input, not derivable from canonical $SU(4)$-equivariant TCG/FPA structures.

$P_{H'}$ stays active as a single-anchor phenomenological structural reading of the Lenz observation. Only the factorial slot multiplier is residual. The active TCG/FPA postulate ledger is **unchanged**:
$$P_0, \ldots, P_4, \quad P_{5'}, \quad P_6, \quad P_7, \quad P_{H'}, \quad P_{SO(10)}.$$

$G3$ is not added to the active ledger; it remains a labeled residual outside, just as $P_{\rm BFV}^{\rm sec}$ does on the electron side and $X_{\rm wall-pol}$ does on the gauge side.

## Three-arc symmetric maturity, completed

With today's paper the three structural arcs reach symmetric maturity:

| Arc | Structural-motivation closure | Action-level obstruction note | Named residual outside active ledger |
|---|---|---|---|
| Electron $P_4$ | bulk–boundary localization + connected-residues notes | [Boundary-superselection obstruction](/blog/walls-not-postulates/) | $P_{\rm BFV}^{\rm sec}$ |
| Gauge envelope | Spin(10) downstream-breaking + [pure-spinor polarization](/blog/intersection-not-alignment/) + [compatible-polarization](/blog/walls-not-postulates/) | [Pure-spinor condensation obstruction](/blog/condensation-not-orientation/) | $P_{\rm pol}^{D_5,\rm compat}$ + $X_{\rm wall-pol}$ + $P_{\rm fam}$ |
| Hadronic $P_{H'}$ | Pati–Salam representation-volumes + [bitwistor pair-channels](/blog/algebra-not-vacuum/) | **This paper** | $G3$ + $G4$ + $F6$ |

Each arc now has: motivating geometry; theorem-level action-level obstruction; named residual(s) outside the active framework ledger.

The **cross-arc pattern** that emerges from this completion is structurally significant. All three remaining residuals — $P_{\rm BFV}^{\rm sec}$ on the electron side, $X_{\rm wall-pol}$ on the gauge side, $G3$ on the hadronic side — classify as **trace/measure-selection problems**, not representation-theoretic problems. The framework's canonical equivariant geometry produces orbits and projective volumes (representation theory). It does not produce labeled-slot frames, orientation choices, or unit-trace normalizations (measure-selection).

This is a precise structural classification of where TCG-native machinery hits its limits: trace, measure, frame, and orientation data must come from boundary-level or auxiliary structure outside the bulk action. Whether such boundary structure exists in any canonical form (corner-extended logarithmic BV–BFV theory; chiral twistor flag bridge; multi-trace selection mechanism) is the genuine open mathematical question across all three arcs.

## Five failure modes

The obstruction is deliberately narrow. Five logically possible routes are recorded:

- **F1. Multi-trace selection mechanism.** A BV, BFV, factorization-algebra, or corner-extended trace might supply a new normalization. That would be additional structure — parallel to the electron-side corner / BV–BFV gap, not a derivation from current $SU(4)$ projective data.
- **F2. Non-equivariant slot frame.** A fixed ordered frame of the six pair-channel coordinates makes $6!$ immediate. But this is exactly the labeled-slot input under review.
- **F3. Hadronic-side boundary or auxiliary structure.** A boundary action, auxiliary state-sum, or defect sector could encode the factorial. Such a route would parallel the gauge-side compatible-polarization residual $X_{\rm wall-pol}$ and the electron-side $P_{\rm BFV}^{\rm sec}$, but would extend the framework.
- **F4. Accept $G3$ as imposed input.** The honest fallback is to keep $G3$ outside the active ledger. The Lenz invariant remains geometrically motivated and phenomenological, not action-derived at the factorial level.
- **F5. Look-elsewhere expansion.** Searching other representations such as $\mathbb{P}(\mathbf{10})$ or $\mathbb{P}(\mathbf{16})$ is forbidden by the anti-evasion discipline. The present note assesses the stated pair-channel invariant, not an unrestricted landscape of coincidences.

## A mature mathematical impasse

With three arcs at symmetric maturity, the project has reached what is most accurately called a **mature mathematical impasse**. Every direction the existing postulates can reach has been reached. Three theorem-level no-gos define the precise boundary of what canonical action principles on TCG-native fields can do. The remaining residuals are named, outside the active ledger, and precisely classified as trace/measure-selection problems.

This is unusual in theoretical physics. Most frameworks have open problems without theorem-level limits on what their postulates can do. The framework here has both: it has derived as much as it can derive from its active ledger, and it has proven sharp no-gos for what it cannot derive internally. Further mainline progress requires either fundamentally new theoretical input (corner-extended BV–BFV for the electron side; a chiral twistor flag bridge for the gauge side; a multi-trace selection mechanism for the hadronic side) or experimental confirmation of the $P_6$ spin-1 fifth-force prediction.

The empirical content is unaffected: nine derived dimensionless relations covering 124 orders of magnitude. The spin-1 fifth-force prediction ($\alpha_Y \approx 1.88 \times 10^4$, 5–10 μm range, ~500× below current experimental sensitivity) remains the framework's principal forward-falsifiable claim.

The paper, *The Representation-Slot Measure Obstruction in the Hadronic $P_{H'}$ Invariant of Twistor Configuration Geometry*, is on Zenodo (DOI [10.5281/zenodo.20149827](https://doi.org/10.5281/zenodo.20149827); CC-BY-4.0). Seven pages, three theorems, one auxiliary proposition, one corollary in relative-obstruction form, five failure modes, twelve references. Refinement trail: Tier-3 G3 prompt to GPT-5.5 Pro under strict anti-evasion guards → GPT G3 verdict OBSTRUCTED with four mechanisms tested → GPT draft → Claude house-style consistency pass + independent review (caught and fixed a theorem-numbering bug from the Remark sharing the counter) → GPT fresh-session review (verdict: mathematically coherent, internally honest, ready to post; five wording precision edits) → Claude application of all five round-2 edits → Claude final review.

Slot, not symmetry. The framework counts orbits; labeled-slot counts require structure outside the canonical equivariant geometry.
