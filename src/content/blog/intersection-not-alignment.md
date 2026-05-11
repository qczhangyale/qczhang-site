---
title: "Intersection, Not Alignment: How Pure-Spinor Polarization Reframes Spin(10) Breaking"
description: "The Spin(10) envelope closes the algebraic SU(2)_R gap in Twistor Configuration Geometry but leaves a dynamical residual: which mechanism actually breaks SU(2)_R and produces the observed Standard Model group? An invariant scalar potential on the TCG-native fields 10_H + 16_H/16-bar_H closed as obstructed last week — a clean theorem-level proof showed that a Spin(10)-invariant potential selects orbits, not named left/right VEV directions, so any alignment requires additional structural input. A new note investigates a different mechanism: instead of asking a Higgs VEV to single out a right-handed-neutrino direction, ask whether the vacuum is a pure-spinor polarization. A nonzero pure chiral spinor in 16 has stabilizer of SU(5) type. The Standard Model algebra then appears as the intersection of this SU(5) with the Pati-Salam subgroup already supplied by the Spin(10) envelope. The intersection theorem is proved at the root-system level: Φ(A_4) ∩ Φ(D_3 ⊕ D_2) = A_2 ⊕ A_1, and the leftover Cartan direction Y ∝ diag(-1/3, -1/3, -1/3, 1/2, 1/2) is exactly the hypercharge Y = T_3R + (B-L)/2 in Pati-Salam normalization. The pure-spinor constraint uses only the native 16 ⊗ 16 ⊃ 10 bilinear channel; no import of standard SO(10) Higgs sectors. Status: partial positive — the mechanism is structurally different from VEV alignment, but the residual is reformulated rather than closed. New residual P_pol^D5 names the remaining target: derive a TCG-native pure-spinor polarization compatible with the D_3 ⊕ D_2 Pati-Salam split. Active TCG/FPA postulate ledger unchanged. The reformulation points to a specific geometric next step: derivation from the chiral twistor flag CP^1 ⊂ CP^2 ⊂ CP^3."
pubDate: 2026-05-11
---

The Spin(10) envelope paper that landed in this program a week ago closed a specific algebraic question: the framework's $A_3 \oplus A_1$ gauge data sit inside $D_5 \supset D_3 \oplus D_2 \cong A_3 \oplus A_1^L \oplus A_1^R$, equivalently $\mathfrak{so}(10) \supset \mathfrak{su}(4)_C \oplus \mathfrak{su}(2)_L \oplus \mathfrak{su}(2)_R$. The missing internal $\mathfrak{su}(2)_R$ that the framework needs for the Standard Model hypercharge formula $Y = T_{3R} + (B-L)/2$ is supplied as a postulate-equivalent algebraic completion. The chiral spinor $\mathbf{16}$ packages exactly one Standard Model family.

The downstream paper that followed it (Paper #29 v2) split the remaining open content into two residual labels outside the active TCG/FPA framework ledger: $P_{SO(10)}^{\rm br}$ (the breaking vacuum + weak-boundary asymmetry) and $P_{\rm fam}$ (family triplication). The breaking residual asks the dynamical question: once $SU(2)_R$ is supplied algebraically, what mechanism actually breaks it at low energy and produces the observed gauge group?

The natural first attempt is a Spin(10)-invariant Higgs potential on the TCG-native fields $\mathbf{10}_H$ and $\mathbf{16}_H/\overline{\mathbf{16}}_H$. The hope: that the vacuum equations select a right-handed-neutrino-like VEV direction in $(\bar{\mathbf{4}}, \mathbf{1}, \mathbf{2}) \subset \mathbf{16}$, breaking $SU(4)_C \times SU(2)_L \times SU(2)_R$ down to $SU(3)_C \times SU(2)_L \times U(1)_Y$ while preserving the hypercharge combination.

That attempt closed last week with a clean theorem-level obstruction.

## Why the direct Higgs potential route fails

Here is the structural statement. Let $G = \mathrm{Spin}(10)$ and let $V$ be a $G$-invariant scalar potential on any direct sum of the TCG-native representations $\mathbf{10}, \mathbf{16}, \overline{\mathbf{16}}$. Then $V$ cannot select a distinguished vacuum direction relative to the embedded subgroup $A_3 \oplus A_1^L \oplus A_1^R \subset D_5$ unless that embedding (or an equivalent alignment tensor) is supplied as additional structure.

The reason is the invariance. If $x_0 \in R$ is a minimum of $V$, then so is every $g x_0$ for $g \in G$. The potential selects only an orbit $G \cdot x_0$ and its stabilizer conjugacy class, not a named representative of that orbit relative to externally-named factors of $D_2$. The distinction between "left visible" and "right hidden" is not invariant under the full Spin(10) action unless an extra tensor reduces $G$ to a subgroup preserving that distinction. So the desired vacuum direction requires additional alignment data — what one might call $P_{SO(10)}^{\rm br,align}$, an alignment postulate that turns out to be not weaker than the residual it would derive.

This is a real no-go. It does not say Spin(10) breaking is impossible. It says the direct Higgs potential route cannot derive the breaking direction without smuggling that direction in as an input.

A new note posted to Zenodo today tries a different mechanism.

## Intersection of stabilizers, not VEV alignment

The pure-spinor idea is older than $SO(10)$ unification. Cartan introduced pure spinors in 1938; Chevalley developed their algebraic theory in 1954. A chiral spinor $\lambda \in \mathbf{16}$ of $\mathrm{Spin}(10)$ is called *pure* if its null subspace

$$
N_\lambda := \{v \in V_{10,\mathbb{C}} : v \cdot \lambda = 0\}
$$

has maximal complex dimension 5. Equivalently, in gamma-matrix notation, a pure spinor satisfies

$$
\lambda^T C \Gamma^a \lambda = 0, \quad a = 1, \ldots, 10
$$

(with the usual caveat that the ten equations are algebraically dependent). A pure spinor determines a maximal isotropic five-plane $W \subset V_{10,\mathbb{C}}$ — a complex polarization of the Spin(10) vector representation.

The structurally important fact is that a pure spinor *has a specific stabilizer*. Over the complex group $\mathrm{Spin}(10,\mathbb{C})$, the stabilizer of a pure-spinor line is a parabolic subgroup with Levi factor $GL(5,\mathbb{C})$. On the compact real form, the line stabilizer is $U(5)$-type; once a normalization is imposed and the spinor phase is fixed, the stabilizer becomes $SU(5)$-type. We write this as $SU(5)_\lambda \subset \mathrm{Spin}(10)$.

Now use the two structures available inside $D_5$: the Pati–Salam subgroup $G_{\rm PS} = SU(4)_C \times SU(2)_L \times SU(2)_R$ supplied by the TCG envelope, and the $SU(5)_\lambda$ supplied by a pure-spinor vacuum. The proposed mechanism:

$$
G_{\rm SM} = G_{\rm PS} \cap G_\lambda.
$$

The Standard Model group is the intersection of these two stabilizers. Not a VEV singled out by a potential, but the common subgroup preserved when both structures are present simultaneously.

## The intersection theorem

The claim is provable at the root-system level. Realize the $D_5$ roots in $\mathbb{R}^5$ as $\pm e_i \pm e_j$ for $1 \le i < j \le 5$. Choose the Pati–Salam split $\mathbb{R}^5 = \mathbb{R}^3 \oplus \mathbb{R}^2$, so that:

- Roots supported on $\{e_1, e_2, e_3\}$ form $D_3 \cong A_3 = \mathfrak{su}(4)_C$
- Roots supported on $\{e_4, e_5\}$ form $D_2 \cong A_1 \oplus A_1 = \mathfrak{su}(2)_L \oplus \mathfrak{su}(2)_R$

A pure-spinor polarization compatible with this split decomposes as $W = W_3 \oplus W_2$ with $\dim_\mathbb{C} W_3 = 3$ and $\dim_\mathbb{C} W_2 = 2$ (summing to the required maximal isotropic dimension $5 = 3 + 2$). Its $\mathfrak{su}(5)_\lambda$ corresponds to the $A_4$ root subsystem

$$
\Phi(A_4) = \{e_i - e_j : 1 \le i \neq j \le 5\}.
$$

The intersection of the root systems is then a quick computation:

$$
\Phi(A_4) \cap \Phi(D_3 \oplus D_2) = \{e_i - e_j : 1 \le i \neq j \le 3\} \cup \{\pm(e_4 - e_5)\}.
$$

The first set is $A_2 = \mathfrak{su}(3)_C$; the second is $A_1 = \mathfrak{su}(2)_L$. The intersection is $\mathfrak{su}(3)_C \oplus \mathfrak{su}(2)_L$. So far this is just the semisimple part of the Standard Model.

The interesting question is the Cartan intersection. The $A_4$ Cartan inside $\mathbb{R}^5$ is the trace-zero 4-plane $\{(x_1, \ldots, x_5) : \sum x_i = 0\}$. The Cartans of $A_2 \oplus A_1$ together span a 3-plane inside this. One Cartan direction remains. A short computation shows it can be written as

$$
Y \propto \mathrm{diag}\left(-\tfrac{1}{3}, -\tfrac{1}{3}, -\tfrac{1}{3}, \tfrac{1}{2}, \tfrac{1}{2}\right),
$$

up to conventional sign and normalization. This generator commutes with the $A_2$ roots on the first three entries and with the surviving $A_1$ root $e_4 - e_5$. In the Pati–Salam Cartan it is the combination of the $SU(4)_C$ generator proportional to $B-L$ and the broken $SU(2)_R$ Cartan:

$$
Y = T_{3R} + \frac{B-L}{2}.
$$

This is the Standard Model hypercharge in Pati–Salam normalization. So the additional abelian Cartan direction is not an arbitrary $U(1)$; it is *the* hypercharge.

Therefore, under the compatibility hypothesis above:

$$
\mathfrak{su}(5)_\lambda \cap (\mathfrak{su}(4)_C \oplus \mathfrak{su}(2)_L \oplus \mathfrak{su}(2)_R) = \mathfrak{su}(3)_C \oplus \mathfrak{su}(2)_L \oplus \mathfrak{u}(1)_Y.
$$

At the group level this is the Standard Model gauge group up to the standard $\mathbb{Z}_6$ finite quotient. The Standard Model group appears as the intersection of two structures that are both individually present inside $\mathrm{Spin}(10)$ — not as the orbit of a chosen Higgs VEV.

## A TCG-native action-level potential

The pure-spinor constraint can be enforced by an action-level potential. For a chiral spinor field $\lambda \in \mathbf{16}$:

$$
V_{\rm pure}(\lambda) = \kappa \sum_{a=1}^{10} \left|\lambda^T C \Gamma^a \lambda\right|^2 + \lambda_0 \left(\lambda^\dagger \lambda - v_R^2\right)^2, \quad \kappa, \lambda_0 > 0.
$$

Its minima obey $\lambda^T C \Gamma^a \lambda = 0$ (purity) and $\lambda^\dagger \lambda = v_R^2$ (normalization). The bilinear $\lambda^T C \Gamma^a \lambda$ is the projection of $\mathbf{16} \otimes \mathbf{16}$ onto the $\mathbf{10}$ representation, available because the standard branching $\mathbf{16}_s \otimes \mathbf{16}_s = \mathbf{10} \oplus \mathbf{120} \oplus \mathbf{126}$ contains the symmetric vector channel.

So the construction uses *only* the two representations already identified in Paper #29 v2's audit as TCG-native: the spinor $\mathbf{16}$ and the vector $\mathbf{10}$. No import of the standard heavy $SO(10)$ breaking representations $\mathbf{45}$, $\mathbf{54}$, $\mathbf{126}$, $\overline{\mathbf{126}}$, $\mathbf{210}$. The $\mathbf{10}$ also contains the $P_{H'}$ pair-channel object $\mathbf{6} = \wedge^2 \mathbf{4}$ and the electroweak bidoublet $(\mathbf{1}, \mathbf{2}, \mathbf{2})$, so the same vector representation supports both hadronic and weak Higgs sector compatibility.

An auxiliary-vector form using a field $H_a \in \mathbf{10}$ is also indicated, with explicit sign-convention caveats: the positive $V_{\rm pure}$ above is the primary action-level candidate; the $H_a$ formulation only shows that the relevant invariant lives natively in the $\mathbf{10}$ channel.

## What this route improves — and what it doesn't

The comparison with the direct Higgs VEV route is structurally illuminating.

| Aspect | Higgs VEV alignment | Pure-spinor polarization |
|---|---|---|
| Mechanism type | VEV singled out within a representation | Intersection of two stabilizers |
| Selection problem | "Choose $\nu_R$-like component in $(\bar{\mathbf{4}}, \mathbf{1}, \mathbf{2}) \subset \mathbf{16}$" | "Choose compatible $W_3 \oplus W_2$ polarization" |
| Hypercharge origin | Inserted by hand via VEV direction | Common Cartan direction of two stabilizers |
| Conceptual content | Standard SO(10) model building | Geometric intersection (Cartan–Chevalley) |
| Action-level | Higgs potential + alignment input | Pure-spinor potential + compatibility hypothesis |
| Status | OBSTRUCTED (theorem-level orbit obstruction) | Partial positive (mechanism reformulation) |

This is not a derivation. The note is explicit about that. A pure-spinor polarization supplies an $SU(5)_\lambda$ stabilizer, and *if* that polarization is compatible with the Pati–Salam vector split $V_{10} = V_6 \oplus V_4$, the intersection is the Standard Model. The "if" is the residual.

A generic pure-spinor stabilizer is conjugate to $SU(5)$ inside $\mathrm{Spin}(10)$ but need not be aligned with the already-chosen $D_3 \oplus D_2$ splitting. Deriving the alignment — equivalently, deriving the compatible polarization $W = W_3 \oplus W_2$ — is the new residual:

> **$P_{\rm pol}^{D_5}$**: TCG selects a pure-spinor polarization compatible with the $D_3 \oplus D_2$ split.

This is sharper than the prior $P_{SO(10)}^{\rm br,align}$ residual ("choose a right-handed-neutrino direction in $\mathbf{16}_H$"). It points to a specific geometric target: derive the compatible polarization from the chiral Penrose twistor flag

$$
\mathbb{CP}^1 \subset \mathbb{CP}^2 \subset \mathbb{CP}^3
$$

that TCG was built from in the first place. Whether that derivation can be done is the next mathematical question. The note does not answer it.

## Five gaps remain

The new residual is sharper, but it doesn't close. Five gaps remain:

- **G1**: Compatible polarization. A generic pure spinor need not align with the Pati–Salam split; TCG must derive compatibility.
- **G2**: Chiral twistor origin. The most plausible source is the flag $\mathbb{CP}^1 \subset \mathbb{CP}^2 \subset \mathbb{CP}^3$, but no theorem currently derives a $D_5$ pure-spinor polarization from it.
- **G3**: Vacuum dynamics. The potential $V_{\rm pure}$ selects a pure-spinor orbit but not a unique orbit representative; a complete construction must explain why the actual vacuum chooses the compatible one.
- **G4**: Family triplication. The pure-spinor route still packages one family per $\mathbf{16}$; $P_{\rm fam}$ is unchanged.
- **G5**: Weak-boundary normalization. $P_{5'}$ ($g_{2,W}^2 = 4/(3\pi)$) is unchanged and remains empirically sharp but not theorem-level.

The active TCG/FPA postulate ledger is unchanged:

$$
P_0, \ldots, P_4, \quad P_{5'}, \quad P_6, \quad P_7, \quad P_{H'}, \quad P_{SO(10)}.
$$

$P_{\rm pol}^{D_5}$ is a residual label outside this ledger, not a new framework axiom.

## What this means for the unification map

The framework's structural arc has now produced **two** action-level results on the gauge side: a clean OBSTRUCTED verdict for the direct Higgs potential route (theorem-level orbit obstruction), and a partial-positive mechanism reformulation via pure-spinor polarization. Both honor the anti-evasion discipline established across the previous papers — no relabeling, no hidden postulates, no look-elsewhere expansion, active ledger preserved.

After this paper, the three arcs of the unification map remain in symmetric maturity:

| Arc | Closure note(s) | Named residual (NOT in active ledger) |
|---|---|---|
| Gauge envelope | Paper #29 v2 + this paper | $P_{\rm pol}^{D_5}$ (sharpened from $P_{SO(10)}^{\rm br}$) + $P_{\rm fam}$ |
| Electron $P_4$ | Paper #27 | $P_{\rm BFV}^{\rm sec}$ |
| Hadronic $P_{H'}$ | Paper #28 | G1/G2 motivated; G3/G4/F6 open |

Each arc has a specific structural target for the next genuine advance:
- **Gauge**: derive compatible pure-spinor polarization from the chiral twistor flag
- **Electron**: corner-extended logarithmic BV–BFV theory with sector-decomposed transgression
- **Hadronic**: $S_6$ slot-measure derivation, electron normalization, flavor/isospin specificity

These are different mathematical problems but they share a common structural depth: each requires the framework to admit a dynamical / geometric / boundary principle that the current TCG primitives do not by themselves supply.

The paper, *Pure-Spinor Polarization and Standard-Model Breaking in the Spin(10) Envelope of Twistor Configuration Geometry*, is on Zenodo (DOI [10.5281/zenodo.20116476](https://doi.org/10.5281/zenodo.20116476); CC-BY-4.0). It is short — nine pages, sixteen references (nine DAEDALUS papers + Cartan 1938, Chevalley 1954, Berkovits 2000, Baez–Huerta 2010, Slansky 1981, Mohapatra 2003, Pati–Salam 1974). One proposition (pure-spinor stabilizer), one intersection theorem with explicit Cartan derivation, one action-level potential, five gaps, one residual. It does not derive Spin(10) breaking; it reformulates the residual to a sharper geometric target. Whether that target is reachable from the chiral twistor flag is the next mathematical question on the framework's gauge side.
