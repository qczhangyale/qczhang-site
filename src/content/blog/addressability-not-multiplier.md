---
title: "Addressability, Not Multiplier: The Hadronic Six-Slot Resolution Problem in τCG"
description: "The τCG specification paper (Paper #34) introduced the physical trace-selector package T_phys = (Tr_num, Sel_phys) and named the hadronic 6! slot multiplier as the central open construction. Today's paper performs the first construction test. Two-sided structure. Negative half: minimal τCG data — P(∧²4) + SU(4)-equivariant Fubini-Study geometry + P_7 wall split — cannot determine a canonical degree-6! finite labeled resolution. Three obstructions combine: SU(4) is connected so cannot act nontrivially on a six-element slot set (induced W(SU(4)) ≅ S_4 ↪ S_6 has image order 24 < 720); P_7 wall gives 3+3 split, not six ordered slots; Berezin saturation requires unnormalized top monomial + basis decomposition. Theorem 6 (minimal-data form) combines all three — explicitly NOT a universal no-go. Conditional positive half: the top FPA/P_7 stratum supplies a four-slot label carrier S_4^FPA = {1,2,3,4}; its complete pair-slot set Ω_2(S_4^FPA) is the edge set of the complete graph K_4 (six elements {12, 13, 14, 23, 24, 34}), distinct from the path graph P_4 adjacent edges used in the electron arc. Under the pair-channel addressability principle P_pair^addr — promoting these six pair channels to physically addressable boundary-defect slots — the ordered-slot resolution has degree |Ord(Ω_2)| = 6!, and Proposition 12 gives Tr_num(H_∧²) = 6π^5. Combined verdict: minimal τCG fails; τCG + P_pair^addr succeeds; exact residual = P_pair^addr. Old residual 'why does 6! multiply π^5/5!?' replaced by sharper 'why are the six complete pair channels physically addressable boundary defects?' P_pair^addr is structurally parallel to P_BFV^sec (electron, Paper #27) and X_wall-pol (gauge, Paper #32); three named trace/measure-selection residuals across the three arcs. Verdict: partial positive, no derivation, no active-ledger change. Same maturity register as Papers #25, #28, #34. The first τCG construction test sharpens the residual rather than closing it."
pubDate: 2026-05-17
---

[Yesterday's τCG specification paper](/blog/specification-not-derivation/) introduced the physical trace-selector package $\mathfrak{T}_{\rm phys} = (\mathrm{Tr}_{\rm num}, \mathrm{Sel}_{\rm phys})$ as the constructive response to the obstruction trilogy's trace/measure-selection diagnostic. It named the hadronic $6!$ slot multiplier as the sharpest open construction test and formalized the canonical six-slot physical resolution as the central conjecture. **Today's paper performs that first construction test.**

The answer is a clean two-sided result: minimal τCG cannot determine the six-slot resolution, but τCG plus a pair-channel addressability principle can. The exact residual is now sharper and more physical.

## The hadronic trace problem

The Lenz reading of the proton–electron mass ratio inside TCG goes through the Pati–Salam antisymmetric pair-channel space
$$R = \wedge^2 \mathbf{4}, \quad \mathbb{P}(R) \cong \mathbb{CP}^5, \quad \mathrm{Vol}_{FS}(\mathbb{P}(R)) = \frac{\pi^5}{5!}.$$

The Lenz invariant requires
$$6\pi^5 = 6! \cdot \mathrm{Vol}_{FS}(\mathbb{P}(R)).$$

The geometric half is canonical. The factorial half is not. [The representation-slot measure obstruction (Paper #33)](/blog/slot-not-symmetry/) already showed at theorem level that no canonical $SU(4)$-equivariant data — Weyl symmetry, projective geometry, Chern–Weil theory, geometric quantization, Gaussian integration, normalized Berezin integration — produces the $6!$ multiplier. The τCG specification reformulated the question: $\mathrm{Tr}_{\rm num}$ derives the $6!$ only if it is realized as a labeled-resolution trace over a **canonical six-slot physical resolution**. Today's paper asks whether such an object exists.

## Negative half: minimal τCG cannot supply it

Three independent obstructions combine.

**Proposition 3 — Connected $SU(4)$ has no nontrivial finite slot action.** The Pati–Salam group $SU(4)$ is connected and compact. By a basic topological lemma (orbit map of connected group on discrete set has connected image, hence singleton image), $SU(4)$ cannot act nontrivially on a finite six-element slot set. The familiar six pair labels $ij$ are *not* an intrinsic $SU(4)$-equivariant finite set — they appear only after a maximal torus and weight basis are chosen. The induced Weyl action gives
$$W(SU(4)) \cong S_4 \hookrightarrow S_6$$
with image of order $24$, not $720$.

**Proposition 4 — $P_7$ wall gives a $3+3$ split, not ordered six slots.** The wall postulate supplies $\mathbf{4} = C \oplus \ell$ with $\dim C = 3$, $\dim \ell = 1$, giving
$$\wedge^2 \mathbf{4} = \wedge^2 C \oplus (\ell \wedge C).$$
This is structurally important — it is exactly the bitwistor pair-channel reading of $P_{H'}$ — but the two three-dimensional summands are $SU(3)_C$-modules; further splitting into lines requires choosing a maximal torus or basis of $C$, which the wall data does not supply.

**Proposition 5 — Berezin saturation requires extra structure.** The integral $\int d^6\bar\theta d^6\theta \, \eta^6 = 6!$ with $\eta = \sum \bar\theta_a \theta_a$ resembles the FPA bulk chamber mechanism, but it requires (a) six Grassmann pairs (basis decomposition) and (b) the unnormalized top monomial $\eta^6$. The normalized $\eta^6/6!$ and the exponential $e^\eta$ both give $1$. The factorial is a trace convention, not a canonical $SU(4)$-equivariant derivation.

**Theorem 6 (minimal-data form).** Combining the three propositions:

> Under the minimal τCG data — $\mathbb{P}(\wedge^2 \mathbf{4})$ + $SU(4)$-equivariant Fubini–Study geometry + $P_7$ wall split — no degree-$6!$ finite labeled resolution is determined. Any construction producing the factor $6!$ requires additional slot-frame or trace-normalization data not contained in the minimal geometry.

**Crucially**: this is a minimal-data obstruction, NOT a universal no-go over all possible future τCG structures. It bounds the minimal case precisely; it does not rule out an extended τCG with additional data.

## Conditional positive half: pair-channel addressability supplies it

The negative half identifies the precise additional data needed: a *physically addressable* six-slot set, not arbitrary basis labels. The conditional positive half shows how the FPA framework can supply exactly this.

**The FPA top-stratum four-slot carrier.** The TCG/FPA construction at rank $r_3 = 2 \cdot 3 - 2 = 4$ contains four labeled configuration slots:
$$S_4^{\rm FPA} = \{1, 2, 3, 4\}.$$
This is the type-$A_3$ Weyl datum underlying the Pati–Salam $SU(4)$ interpretation. It is FPA-internal, not an arbitrary internal basis.

**The complete pair-slot set.** Define
$$\Omega_2(S) = \{\{i,j\} : i, j \in S, i < j\}$$
as the edge set of the complete graph $K_S$. For $|S| = 4$,
$$\Omega_2(S_4^{\rm FPA}) = \{12, 13, 14, 23, 24, 34\}, \quad |\Omega_2| = \binom{4}{2} = 6.$$

**Key distinction.** The hadronic complete pair-slot set $\Omega_2(S_4^{\rm FPA})$ is the **edge set of the complete graph $K_4$**, NOT the adjacent hard-core edges of the path graph $P_4$ used in the [electron boundary sector](/blog/walls-not-postulates/). The electron arc uses $\{12, 23, 34\}$ — only adjacent edges (matchings). The hadronic arc uses $\{12, 13, 14, 23, 24, 34\}$ — all binary pairs (complete graph). Different graphs, different sectors.

**The pair-channel addressability principle.** Define:

> **$P_{\rm pair}^{\rm addr}$**: the hadronic bitwistor/pair sector has boundary defect operators $D_{ij}$ for $\{i,j\} \in \Omega_2(S_4^{\rm FPA})$, addressing the six binary pair channels of the top-stratum carrier. The physical trace sums uniformly over ordered saturations.

This is stronger than minimal $SU(4)$ equivariance (it asserts the FPA label resolution survives into the hadronic boundary trace as addressable pair data). It is weaker than choosing a preferred ordering (no order is selected; the trace sums over $\mathrm{Ord}(\Omega_2)$).

**Proposition 12 (Conditional six-slot trace).** Under $P_{\rm pair}^{\rm addr}$, the ordered-slot resolution
$$\widetilde{H}_{\rm pair} = \mathbb{P}(\wedge^2 \mathbf{4}) \times \mathrm{Ord}(\Omega_2(S_4^{\rm FPA}))$$
has degree $|\mathrm{Ord}(\Omega_2)| = 6!$, and the labeled-resolution trace gives
$$\int_{\widetilde{H}_{\rm pair}} \pi_H^* \left(\frac{\omega_{FS}^5}{5!}\right) = 6! \cdot \mathrm{Vol}_{FS}(H_{\wedge^2}) = 6\pi^5.$$

The $6!$ is no longer an unexplained multiplier. It is the **degree of an ordered physical address resolution**.

## The combined verdict

$$\boxed{\text{minimal } \tau\text{CG fails;} \quad \tau\text{CG} + P_{\rm pair}^{\rm addr} \text{ succeeds;} \quad \text{exact residual} = P_{\rm pair}^{\rm addr}.}$$

**Old residual:** *"Why does $6!$ multiply $\pi^5/5!$?"*

**New residual:** *"Why are the six complete pair channels of the $P_7$ four-slot carrier physically addressable boundary defects?"*

This converts an unexplained multiplier into a concrete physical-addressability question. The Lenz formula is no longer a numerological coincidence with a hidden combinatorial factor — it has a structural interpretation conditional on $P_{\rm pair}^{\rm addr}$. The new residual is more physical and (we hope) more attackable.

## Three named trace/measure-selection residuals across the three arcs

The three structural arcs (electron, gauge, hadronic) now each have a precisely named trace/measure-selection residual outside the active ledger:

| Arc | Residual | Note |
|---|---|---|
| Electron $P_4$ | $P_{\rm BFV}^{\rm sec}$ | [Paper #27](/blog/walls-not-postulates/) |
| Gauge envelope | $X_{\rm wall-pol}$ | [Paper #32](/blog/condensation-not-orientation/) |
| Hadronic $P_{H'}$ | $P_{\rm pair}^{\rm addr}$ (replaces/sharpens $G3$) | **This paper** |

All three are labeled successor-construction targets, NOT new framework axioms. The active TCG/τCG postulate ledger remains
$$P_0\text{–}P_4, \quad P_{5'}, \quad P_6, \quad P_7, \quad P_{H'}, \quad P_{SO(10)}.$$

## Five failure modes

- **F1.** Pair-address failure: the six pair labels could be only formal, not physically addressable defect slots.
- **F2.** Gauge-frame objection: acceptable only if the four slots are inherited from the FPA label resolution, not an arbitrary internal basis.
- **F3.** Uniform ordered-trace ambiguity: the trace might not carry uniform weight on $\mathrm{Ord}(\Omega)$; a non-uniform measure would alter the multiplier.
- **F4.** Look-elsewhere expansion forbidden: $P_{\rm pair}^{\rm addr}$ must be restricted to physically realized boundary pair-channel sectors of the TCG/FPA label resolution; generalizing to arbitrary representations would allow $d! \cdot \mathrm{Vol}_{FS}(\mathbb{P}(R))$ for many unrelated $R$, expanding the formula grammar.
- **F5.** QCD/flavor specificity: the slot-measure multiplier does not identify the proton, derive confinement, or explain flavor/isospin specificity.

## Maturity register and what's next

This is the **first construction test** of the τCG specification, and the answer is the right kind of partial positive: it does not derive $P_{H'}$, but it sharpens the residual from a naked multiplier into a concrete physical-addressability question. Same maturity register as [the bitwistor pair-channel note (Paper #25)](/blog/algebra-not-vacuum/), [the compatible-polarization note (Paper #28)](/blog/walls-not-postulates/), and [the τCG specification (Paper #34)](/blog/specification-not-derivation/): partial-positive mechanism note that names what successor theory must construct, without claiming the construction has been performed.

The next hadronic trace problem is whether $P_{\rm pair}^{\rm addr}$ can be derived independently from a deeper boundary action, a corner-extended factorization algebra, or a genuine pair-channel detector/defect theory. The framework has now articulated exactly what would constitute progress on the hadronic arc.

The paper, *The Hadronic Six-Slot Resolution Problem in Trace Configuration Geometry*, is on Zenodo (DOI [10.5281/zenodo.20262722](https://doi.org/10.5281/zenodo.20262722); CC-BY-4.0). Ten pages, two theorems plus three obstruction propositions plus the conditional positive proposition, five failure modes, ten references. Refinement trail: two separate short notes (negative + conditional positive) → GPT recommendation to combine → Claude TCG-house-style draft → GPT NEEDS_MINOR (5 precision items) → Claude application → Claude independent review (READY + 2 cosmetic items) → Claude cosmetic cleanups → GPT final READY check → upload.

Addressability, not multiplier. The six is not a coincidence; it is the count of pair-channel addresses — if pair-channel addresses are physical.
