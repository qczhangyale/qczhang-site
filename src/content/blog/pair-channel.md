---
title: "The Pair Channel: Bitwistor Geometry Behind the Lenz Ratio"
description: "The Lenz observation m_p/m_e ≈ 6π⁵ has a representation-volume reading inside Twistor Configuration Geometry: 6! · Vol_FS(P(∧²4)) = 6π⁵, where ∧²4 is the antisymmetric two-index Pati–Salam representation. The reading is a single anchor — a pre-registered second-observable audit closed negatively last week — and four subgaps remained open: why ∧²4 appears at all; how a two-index representation can be relevant to a three-quark baryon; why the full S_6 representation-slot measure; why the ratio is normalized by the electron mass. A new note shows that bitwistor geometry partially addresses the first two. Full antisymmetric bitwistor space P(∧²4) ≅ CP^5 preserves the Lenz invariant; the decomposable simple-bitwistor locus G(2,4) (Klein quadric) does not. The off-shell pair-channel reading lives on the full projective space, justified quantum-mechanically as the antisymmetric two-particle Hilbert space whose generic non-simple points represent entangled pair states. The baryon projection 4 ⊗ ∧²4 → ∧³4 ≅ 4̄ then contains the color-singlet three-quark channel after Pati–Salam breaking. G3 and G4 remain unaddressed — the 6! slot factor is not the Weyl group of SU(4), and nothing selects the electron as denominator. Verdict: partial positive for two of four subgaps; no theorem-level derivation. The hadronic side now has a structural-motivation companion parallel to what the electron side has."
pubDate: 2026-05-10
---

In the spring of 1951, Friedrich Lenz noticed that the proton-to-electron mass ratio is almost exactly $6\pi^5$. The match was striking at 1951 measurement precision; with seventy-five years of additional measurement it has only sharpened. A recent paper in this program reframed the formula as a Pati–Salam representation-volume invariant: $6! \cdot \mathrm{Vol}_{FS}(\mathbb{P}(\wedge^2 \mathbf{4})) = 6\pi^5$, where $\wedge^2 \mathbf{4}$ is the antisymmetric two-index representation of the $SU(4)_C$ color/lepton fundamental. The framework's hadronic postulate $P_{H'}$ stated that this volume invariant is the structural reading of the Lenz ratio.

That reading is a *single anchor*. A pre-registered second-observable audit closed negatively last week: under the strict grammar $X_R = \dim(R) \cdot \pi^{\dim(R)-1}$, no other observable survived without adding reciprocal, quotient, or normalization rules. So $P_{H'}$ remains a single-anchor phenomenological reading of one classical observation, not a generative hadronic representation-volume rule. The hadronic-extension paper listed four open subgaps:

- **G1**: why $\wedge^2 \mathbf{4}$ appears at all
- **G2**: how a two-index representation can be relevant to a three-quark proton
- **G3**: why the full $S_6$ representation-slot measure
- **G4**: why the ratio is normalized by the electron mass

A new short note investigates whether bitwistor geometry — Penrose's two-twistor antisymmetric tensor object — has anything useful to say about the first two. The answer is a partial positive, sharply qualified.

## The central distinction: full bitwistor space versus decomposable locus

A bitwistor is an antisymmetric two-twistor tensor $B^{AB} \in \wedge^2 \mathbb{C}^4$. Its projectivization is

$$
\mathbb{P}(\wedge^2 \mathbb{C}^4) \;\cong\; \mathbb{CP}^5,
$$

since $\wedge^2 \mathbb{C}^4$ is six-dimensional. So far this is just the projective representation space of $\wedge^2 \mathbf{4}$, with Fubini–Study volume $\mathrm{Vol}_{FS}(\mathbb{CP}^5) = \pi^5/5!$ — exactly what the Lenz formula needs:

$$
6! \cdot \mathrm{Vol}_{FS}(\mathbb{CP}^5) \;=\; \frac{6!}{5!} \pi^5 \;=\; 6\pi^5.
$$

But there is a second, more constrained object inside $\mathbb{P}(\wedge^2 \mathbb{C}^4)$ that is more familiar to twistor theorists: the *simple* or *decomposable* bitwistors, those of the form $B^{AB} = Z_1^{[A} Z_2^{B]}$, equivalently those satisfying the Plücker relation $B \wedge B = 0$. The simple bitwistors form the Klein quadric

$$
G(2,4) \;\subset\; \mathbb{CP}^5,
$$

which is the Grassmannian of projective lines in $\mathbb{CP}^3$ — the moduli space of *twistor lines*. This is the standard object of Penrose's twistor theory: each point of $G(2,4)$ is a complexified spacetime point, and the $G(2,4)$-versus-$\mathbb{CP}^5$ distinction is the difference between the on-shell line-moduli locus and the off-shell ambient bitwistor representation.

The Klein quadric is a smooth degree-two hypersurface of complex dimension 4 in $\mathbb{CP}^5$. Its Fubini–Study volume is

$$
\mathrm{Vol}_{FS}(G(2,4)) \;=\; \frac{\pi^4}{4!} \int_{G(2,4)} H^4 \;=\; \frac{\pi^4}{12},
$$

where $H$ is the Plücker hyperplane class and $\int H^4 = 2$ is the degree. This is *not* the volume the Lenz invariant uses. If $P_{H'}$ were forced to live on the simple-bitwistor locus only, the relevant volume would be $\pi^4/12$, not $\pi^5/5!$, and the $6\pi^5$ form would not appear. The Lenz reading therefore *requires* the full off-shell projective bitwistor representation space, with the simple-bitwistor locus a geometrically central but proper sublocus.

This is the central technical observation of the new note. It says exactly which version of "bitwistor" $P_{H'}$ uses, and why the more familiar version (the Klein quadric) does not work.

## The quantum-mechanical defense

A natural objection at this point is: why should non-simple bitwistors be admissible as physical states at all? In ordinary classical twistor theory, bitwistors *are* simple — they correspond to projective lines, which are pairs of points-in-twistor-space modulo equivalence. The non-simple part of $\wedge^2 \mathbb{C}^4$ does not parameterize any classical line.

The new note's defense is quantum-mechanical. In quantum mechanics, the state space of an antisymmetric two-particle sector is the *full* projective Hilbert space $\mathbb{P}(\wedge^2 V)$. The decomposable locus $G(2,V)$ corresponds to *simple wedge states* $Z_1 \wedge Z_2$ — the analogue of Slater determinants — but generic points of $\mathbb{P}(\wedge^2 V)$ represent superpositions or entangled antisymmetric pair states, which are physically meaningful in any multi-fermion quantum-mechanical setting. So if $P_{H'}$'s pair-channel measure lives on a quantum-pair-state Hilbert space rather than on a classical line-moduli space, the full $\mathbb{CP}^5$ is the natural object, and the Klein quadric is the simple-wedge classical sublocus inside it.

Hence the framing: *off-shell bitwistor pair-channel*. "Off-shell" here means *unconstrained by the Plücker simplicity relation* $B \wedge B = 0$. It does not mean off-shell in the QFT-propagator sense — that would be a different and unwarranted import.

## How a two-index pair channel reaches a three-quark baryon

This addresses G1. What about G2 — how can a two-index object describe a three-quark baryon?

Under the Pati–Salam decomposition $SU(4)_C \to SU(3)_C \times U(1)_{B-L}$, the fundamental $\mathbf{4}$ splits as a quark triplet plus a lepton singlet:

$$
\mathbf{4} \;=\; (\mathbf{3}, +1/3) \oplus (\mathbf{1}, -1).
$$

The antisymmetric pair representation then decomposes as

$$
\wedge^2 \mathbf{4} \;=\; (\bar{\mathbf{3}}, +2/3) \oplus (\mathbf{3}, -2/3),
$$

which has a direct pair-channel reading: an antisymmetric two-quark color sector at $B-L = +2/3$, plus a quark–lepton mixed sector at $B-L = -2/3$. This is not yet a proton. It is a two-body pair channel inside Pati–Salam color/lepton structure.

The baryonic relevance enters when the pair channel is coupled to one further fundamental. For $SU(4)$,

$$
\mathbf{4} \otimes \wedge^2 \mathbf{4} \;\cong\; \wedge^3 \mathbf{4} \oplus \mathbf{20},
$$

with $\wedge^3 \mathbf{4} \cong \bar{\mathbf{4}}$ supplying the totally antisymmetric three-fundamental projection. Under the same Pati–Salam breaking,

$$
\wedge^3 \mathbf{4} \;=\; (\mathbf{1}, +1) \oplus (\bar{\mathbf{3}}, -1/3),
$$

and the $(\mathbf{1}, +1)$ component is the *color-singlet three-quark baryon channel* — three quarks in totally antisymmetric color combination, which is exactly the singlet baryon construction. The pair-channel reading is therefore $qqq \sim q + (qq)$, with the $(qq)$ pair governed by $\wedge^2 \mathbf{4}$ and the $q + (qq)$ projection mapping into the color-singlet baryon channel via $\mathbf{4} \otimes \wedge^2 \mathbf{4} \to \wedge^3 \mathbf{4}$.

This is the new note's main partial-closure of G2. It does not derive a proton mass — it does not even derive *which* baryon. But it explains, at the representation-theory level, why a two-index representation can be relevant to three-quark baryon physics. The two-index object is the pair channel; the three-quark singlet is its image under tensoring with one more fundamental.

## What this does not address

Two of the four subgaps remain untouched.

**G3** asks why the full $S_6$ representation-slot measure appears in $6! \cdot \mathrm{Vol}_{FS}(\mathbb{CP}^5) = 6\pi^5$. The $6!$ factor is *not* the Weyl group of $SU(4)$, which has order $|W(A_3)| = |S_4| = 4! = 24$. So the $6!$ slot count is not a Weyl-group quantity; it is the FPA-style labeled-slot rule from the broader TCG framework, not forced by bitwistor representation theory alone. That subgap is the same as it was, and the bitwistor reading does not address it.

**G4** asks why the electron is the denominator. Bitwistor geometry can motivate the numerator's pair-channel structure, but nothing in the off-shell pair-channel reading selects $m_e$ over $m_\mu$, $m_\tau$, the electroweak vacuum expectation $v$, or the QCD scale $\Lambda_{\rm QCD}$. That subgap is also the same.

The note adds an explicit failure mode for what the baryon projection does *not* supply: $\mathbf{4} \otimes \wedge^2 \mathbf{4} \to \wedge^3 \mathbf{4}$ identifies a generic color-singlet three-quark channel, but it does not distinguish proton from neutron from $\Delta$, $\Lambda$, $\Sigma$, or any other baryon. Distinguishing the proton specifically requires flavor, spin, isospin, and QCD dynamics that the bitwistor pair-channel reading does not supply. So even granting G1+G2 partially closed, the construction does not pick out $m_p$ as the relevant baryon mass.

## What the trilogy looks like in retrospect

This note is the fourth structural-motivation paper in two days. The first three were on the electron side: the bulk–boundary localization conjecture for $P_4$, the connected-boundary residues sharpening of the residual sub-postulate, and the boundary-superselection obstruction note that converted the action-level closure attempt from "open" to "closed-conditional with explicit obstruction and named residual postulate." The fourth, this one, is the hadronic-side analog: not for $P_4$ but for $P_{H'}$, not via $W = \log Z$ but via off-shell bitwistor pair-channel geometry, not closing the Lenz ratio derivation but *partially clarifying* the representation-theory structure $P_{H'}$ uses.

The same maturity register applies in both cases: clarification, not derivation. On the electron side, all four sub-postulates of $P_4$ are now structurally motivated; the residual research target is a corner-extended logarithmic BV–BFV theory whose phase-space transgression is sector-decomposed in matching sectors. On the hadronic side, two of the four subgaps of $P_{H'}$ are now structurally motivated; the residual research targets are the $S_6$ slot-measure derivation, the electron-normalization derivation, and the flavor/isospin specificity. Both arcs share the same shape: postulate-equivalent structural completion with named residual gaps.

The active TCG/FPA postulate ledger is unchanged. $P_0$ through $P_4$, $P_{5'}$, $P_6$, $P_7$, $P_{H'}$, $P_{SO(10)}$. The bitwistor pair-channel reading is the structural content of the existing $P_{H'}$ postulate, not a new framework axiom, and not added to the ledger.

## A real-form caveat

One thing the new note is careful about: it does not identify Penrose-twistor indices with internal Pati–Salam color-lepton indices. The word "bitwistor" is used at the level of the complex $A_3$ representation $\wedge^2 \mathbb{C}^4$, which underlies both the external Penrose-twistor interpretation (where $\mathbb{C}^4$ is the spacetime twistor representation) and the internal Pati–Salam $SU(4)_C$ interpretation (where $\mathbf{4}$ is the color-lepton fundamental). These are two different physical readings of the same complex representation data inside the TCG architecture. The note explicitly does not claim that spacetime twistor indices are the same as internal color-lepton indices in the standard field-theoretic sense. The bitwistor language is a complex-representation-level structural observation, not a physical identification between external and internal symmetries.

This caveat costs nothing and prevents the strongest objection a reader might raise.

The paper, *Bitwistor Pair Channels and the Baryon-State Gap in $P_{H'}$*, is on Zenodo (DOI [10.5281/zenodo.20111389](https://doi.org/10.5281/zenodo.20111389); CC-BY-4.0). It is short — nine pages, twelve references, one proposition, one definition, six failure modes. Its verdict is *partial positive for G1 and G2; no theorem-level $P_{H'}$ derivation*. The structural narrative around the Lenz observation is sharper; the numerical content is unchanged. That is the kind of clarification the framework's hadronic side now has, parallel to what the electron side has — natural pause point for the day's writing.
