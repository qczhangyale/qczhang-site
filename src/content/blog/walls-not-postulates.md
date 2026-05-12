---
title: "Walls, Not Postulates: How P7 Narrows the Pure-Spinor Compatibility Residual"
description: "Yesterday's pure-spinor polarization paper closed an action-level question conditionally: the Standard Model algebra appears as the intersection of two stabilizers inside Spin(10), but only if a compatible pure-spinor polarization exists. That conditional left a residual: $P_{\\rm pol}^{D_5}$, derive the compatible polarization. A new note today shows the compatibility residual is substantially narrowed by existing TCG data — the P7 end-wall postulate supplies the lepton line, and requiring the visible $SU(2)_L$ to survive forces the form of the weak half of the polarization. The result is a partial positive: the compatible polarization $W_+ = (\\ell \\wedge C) \\oplus (\\mathbf{2}_L \\otimes r_+)$ is almost canonical, determined by the end-wall lepton line $\\ell$, the color three-plane $C$, and the requirement of preserving the observed left-handed weak factor, up to the expected $SU(2)_R$ gauge choice and conjugate orientation. The stabilizer intersection $SU(5)_{W_+} \\cap (SU(4)_C \\times SU(2)_L \\times SU(2)_R) \\simeq S(U(3) \\times U(2))$ is the Standard Model group, with hypercharge $Y = T_{3R} + (B-L)/2$ in Pati-Salam normalization, and the explicit determinant-reduction proof shows that the $SU(5)_{W_+}$ condition forces $a^2 b^2 = 1$ on the two $U(1)$ phases, reducing them to a single $U(1)_Y$. The construction uses only the two TCG-native Spin(10) representations ($\\mathbf{10}$ and $\\mathbf{16}$); no import of standard heavy $SO(10)$ Higgs sectors. Status: partial positive, residual sharpened — from 'derive an arbitrary compatible polarization' to 'derive a pure-spinor condensate in the wall-and-$SU(2)_L$-compatible orbit'. The active TCG/FPA postulate ledger is unchanged; $P_{\\rm pol}^{D_5}$ remains a named residual outside the active framework ledger, not a new framework axiom. The remaining gap is purely action-level: produce the condensate from a Spin(10)-invariant action without smuggling in the orientation by hand."
pubDate: 2026-05-12
---

[The previous pure-spinor polarization note](/papers/30-pure-spinor-polarization/) closed an algebraic question with a structural reformulation. The Spin(10) envelope of Twistor Configuration Geometry (TCG) gives the right algebraic completion of the active gauge ledger, $A_3 \oplus A_1^L \oplus A_1^R \subset D_5$, but it leaves a dynamical residual: which mechanism actually selects the Standard Model subgroup, given that a Spin(10)-invariant scalar potential on the TCG-native fields $\mathbf{10}_H \oplus \mathbf{16}_H$ cannot single out a left/right VEV direction (the *invariant-potential orbit obstruction*, closed as OBSTRUCTED with theorem-level proof)?

That note's answer was: the Standard Model group can be read as the intersection
$$G_{\rm SM} = G_{\rm PS} \cap G_\lambda$$
of two stabilizers — the Pati-Salam subgroup $G_{\rm PS} = SU(4)_C \times SU(2)_L \times SU(2)_R$ supplied by the Spin(10) envelope, and the $SU(5)$-type stabilizer $G_\lambda$ of a pure chiral spinor $\lambda \in \mathbf{16}$. The root-system intersection theorem then gives
$$\mathfrak{su}(5)_\lambda \cap \bigl(\mathfrak{su}(4)_C \oplus \mathfrak{su}(2)_L \oplus \mathfrak{su}(2)_R\bigr) = \mathfrak{su}(3)_C \oplus \mathfrak{su}(2)_L \oplus \mathfrak{u}(1)_Y,$$
**provided** the pure-spinor polarization $W = W_3 \oplus W_2$ is compatible with the Pati-Salam vector split $V_{10} = V_6 \oplus V_4$. That conditional ("provided") is the residual:
$$P_{\rm pol}^{D_5}: \text{ derive a TCG-native pure-spinor polarization compatible with the } D_3 \oplus D_2 \text{ split.}$$

Yesterday's note named $P_{\rm pol}^{D_5}$ but did not derive it. A generic pure-spinor stabilizer is conjugate to $SU(5)$ inside $\mathrm{Spin}(10)$, but conjugate-not-aligned. The compatibility part was left as an open mathematical target: derive a polarization that aligns with the framework's already-chosen $D_3 \oplus D_2$ splitting.

A new note today shows the compatibility residual is substantially narrowed by existing TCG data — without adding any new postulate.

## The P7 wall already supplies what we need

The TCG framework's P7 postulate ([Wall Deletion and the Pati-Salam Levi Subalgebra in TCG](/papers/19-wall-deletion/)) supplies the Pati-Salam color/lepton split of the $SU(4)_C$ fundamental:
$$\mathbf{4} = C \oplus \ell, \qquad \dim C = 3, \quad \dim \ell = 1.$$
The lepton line $\ell \subset \mathbf{4}$ is not introduced anew here — it is the same lepton-as-fourth-color line already selected by the P7 wall structure.

Under the standard Spin(10) vector branching
$$\mathbf{10} \to (\mathbf{6}, \mathbf{1}, \mathbf{1}) \oplus (\mathbf{1}, \mathbf{2}_L, \mathbf{2}_R), \qquad \mathbf{6} = \wedge^2 \mathbf{4},$$
the Pati-Salam vector split $V_{10} = V_6 \oplus V_4$ corresponds to $\wedge^2 \mathbf{4} \oplus (\mathbf{2}_L \otimes \mathbf{2}_R)$. A compatible pure-spinor polarization $W = W_3 \oplus W_2$ with $\dim_\mathbb{C} W_3 = 3$ and $\dim_\mathbb{C} W_2 = 2$ requires a maximal isotropic three-plane $W_3$ inside the six-dimensional $\wedge^2 \mathbf{4}$.

**Proposition 1** identifies the natural candidate. Set
$$W_3^+ := \ell \wedge C \subset \wedge^2 \mathbf{4}.$$
For two elements $\ell \wedge c_1$ and $\ell \wedge c_2$ of $W_3^+$, the wedge pairing satisfies
$$(\ell \wedge c_1) \wedge (\ell \wedge c_2) = 0$$
because $\ell$ appears twice. So $W_3^+$ is isotropic. Its dimension is $\dim \ell \cdot \dim C = 1 \cdot 3 = 3$, which equals the maximal isotropic dimension of $\wedge^2 \mathbf{4}$ (six-dimensional with a nondegenerate quadratic form). Therefore $W_3^+$ is *maximal* isotropic. The conjugate choice $W_3^- = \wedge^2 C$ is also maximal isotropic (since $\wedge^4 C = 0$ when $\dim C = 3$).

So P7 already gives the color part of a compatible pure-spinor polarization. The 3+1 color/lepton split *is* the datum needed to build the polarization's color half.

## Visible $SU(2)_L$ forces the weak part

The weak-vector part is $V_4 = \mathbf{2}_L \otimes \mathbf{2}_R$. A compatible polarization needs a maximal isotropic two-plane $W_2 \subset V_4$.

Asking that the polarization preserve the visible $SU(2)_L$ factor is enough to force the form of $W_2$. The relevant lemma: as an $SU(2)_L$-module,
$$L \otimes R \cong L \oplus L,$$
with $R$ acting as the multiplicity space. By Schur, any $SU(2)_L$-invariant complex two-dimensional subspace has the form $L \otimes r$ for some line $r \subset R$. The isotropy follows because the right $SU(2)_R$ symplectic form $\epsilon_R$ is alternating:
$$q_4(u \otimes r_0, u' \otimes r_0) = \epsilon_L(u, u') \cdot \epsilon_R(r_0, r_0) = 0.$$
Since $L \otimes R$ has complex dimension 4 and $W_2$ has complex dimension 2, $W_2$ is maximal isotropic over $\mathbb{C}$.

Two important caveats:

First, **$SU(2)_L$ preservation is a compatibility input, not derived**. It is the same physical observation that $P_{5'}$ ($g_{2,W}^2 = 4/(3\pi)$) targets the left-handed weak factor only. The lemma forces the *form* of any $SU(2)_L$-preserving polarization to be $L \otimes r$; it does not force the polarization to preserve $SU(2)_L$ in the first place. Other polarizations exist (e.g., 2-planes mixing $L_+ \otimes R_+$ with $L_- \otimes R_-$); they would break $SU(2)_L$. Choosing the $SU(2)_L$-preserving family is the physical input.

Second, the line $r \subset \mathbf{2}_R$ is not a free continuous parameter in the same sense as $\ell$. All lines in $\mathbf{2}_R$ are related by $SU(2)_R$; choosing one is the standard spontaneous breaking $SU(2)_R \to U(1)_R$, with $r_+$ vs $r_-$ corresponding to the sign convention for $T_{3R}$.

## The compatible polarization

Combining the two structural inputs:
$$W_+ = (\ell \wedge C) \oplus (\mathbf{2}_L \otimes r_+) \subset \wedge^2 \mathbf{4} \oplus (\mathbf{2}_L \otimes \mathbf{2}_R) = V_{10, \mathbb{C}}.$$
This is a maximal isotropic 5-plane (Theorem 3: direct sum of MIS in orthogonal blocks $V_6 \oplus V_4$ gives MIS of total). It determines a projective pure spinor of $\mathrm{Spin}(10)$. The conjugate $W_- = (\wedge^2 C) \oplus (\mathbf{2}_L \otimes r_-)$ gives the opposite orientation.

The stabilizer intersection is the Standard Model group. To see this explicitly, restrict to elements of $G_{\rm PS}$ that preserve the splits induced by P7 and the chosen $SU(2)_R$ Cartan. An $SU(4)_C$ element $g_4 = \mathrm{diag}(A, a)$ with $A \in U(3)$, $a \in U(1)$, $\det(A) \cdot a = 1$ preserves $\mathbf{4} = C \oplus \ell$; an $SU(2)_R$ element preserving $r_+$ acts on it by phase $b \in U(1)$. The induced action on $\ell \wedge C$ has determinant $a^3 \det(A) = a^2$; the induced action on $\mathbf{2}_L \otimes r_+$ has determinant $b^2$. The $SU(5)_{W_+}$ stabilizer condition (trace-zero on the $\mathbf{5}$-fundamental $W_+$) imposes
$$a^2 b^2 = 1,$$
reducing the two $U(1)$ phases $(a, b)$ to a single $U(1)$. That surviving $U(1)$ is generated by the standard hypercharge:
$$Y = T_{3R} + \frac{B-L}{2},$$
with $Q_{\rm EM} = T_{3L} + Y$. The charge decomposition
$$W_+ \cong (\mathbf{3}, \mathbf{1})_{-1/3} \oplus (\mathbf{1}, \mathbf{2})_{+1/2}$$
is exactly the $SU(5)$ fundamental $\mathbf{5}$ under the Standard Model subgroup (trace-zero $3 \cdot (-1/3) + 2 \cdot (+1/2) = 0$).

One clarifying caveat: this $\mathbf{5}$ is the polarization $W_+$'s fundamental representation, *not* a matter multiplet. Standard Model matter still lives in the chiral spinor $\mathbf{16}$ of $\mathrm{Spin}(10)$, whose decomposition under $SU(5) \supset G_{\rm SM}$ is the usual $\overline{\mathbf{5}} \oplus \mathbf{10} \oplus \mathbf{1}$ packaging one full generation.

## What's narrowed, and what's not

The new note does not close $P_{\rm pol}^{D_5}$. It substantially narrows it.

Before today's note, the residual read: *"derive an arbitrary compatible pure-spinor polarization"*. The polarization could be any $W$ aligned with the Pati-Salam split, with no constraint on its color/lepton orientation, weak orientation, or charge content beyond the bare maximal-isotropic condition. After today's note, the residual reads: *"derive a pure-spinor condensate in the wall-and-$SU(2)_L$-compatible orbit"*. The compatible orbit is now specified — by the end-wall lepton line $\ell$, the color three-plane $C$, and the requirement of preserving the observed left-handed weak factor — up to the expected $SU(2)_R$ gauge choice and conjugate orientation.

The remaining residual is **purely action-level**. Concretely: produce a Spin(10)-invariant action whose vacuum manifold contains the orbit of $W_+$ as a pure-spinor condensate, without smuggling in the orientation by hand. The schematic potential
$$V_{\rm pure}(\lambda) = \kappa \sum_{a=1}^{10} |\lambda^T C \Gamma^a \lambda|^2 + \lambda_0 \bigl(\lambda^\dagger \lambda - v_R^2\bigr)^2$$
already enforces the pure-spinor constraint and a normalization, with minima on the pure-spinor orbit. What it does not by itself enforce is that the chosen orbit representative is the wall-and-$SU(2)_L$-compatible one.

Five explicit gaps remain. G1: pure-spinor condensation (action-level). G2: compatibility as boundary condition or theorem (rather than imposed input). G3: conjugate orientation $W_+$ vs $W_-$ (tied to the chiral $\mathbf{16}$ vs $\overline{\mathbf{16}}$ choice). G4: breaking scale and $P_{5'}$ value. G5: family triplication unchanged.

## What this means for the structural arc

The construction uses only the two TCG-native Spin(10) representations — the spinor $\mathbf{16}$ and the vector $\mathbf{10}$ via $\mathbf{6} = \wedge^2 \mathbf{4} \subset \mathbf{10}$. It does not import the standard heavy $SO(10)$ breaking representations $\mathbf{45}$, $\mathbf{54}$, $\mathbf{126}$, $\overline{\mathbf{126}}$, $\mathbf{210}$. The same restraint as in [yesterday's note](/papers/30-pure-spinor-polarization/).

The active TCG/FPA postulate ledger is **unchanged**:
$$P_0, \ldots, P_4, \quad P_{5'}, \quad P_6, \quad P_7, \quad P_{H'}, \quad P_{SO(10)}.$$
$P_{\rm pol}^{D_5}$ remains a residual label outside this ledger — not a new framework axiom — sharpened but not closed.

After this paper, the gauge arc of the unification map reads:

| Arc | Closure note(s) | Named residual (NOT in active ledger) |
|---|---|---|
| Gauge envelope | [Spin(10) downstream-breaking note](/papers/29-spin10-downstream-breaking-family/) + [pure-spinor polarization](/papers/30-pure-spinor-polarization/) + this paper | $P_{\rm pol}^{D_5}$ (narrowed to action-level core) + $P_{\rm fam}$ |
| Electron $P_4$ | [Boundary-superselection obstruction note](/papers/27-boundary-superselection-obstruction/) | $P_{\rm BFV}^{\rm sec}$ |
| Hadronic $P_{H'}$ | [Bitwistor pair-channel note](/papers/28-bitwistor-pair-channels/) | G1/G2 motivated; G3/G4/F6 open |

The gauge-side arc now has *three* action-level notes (Papers #29 v2 + #30 + this one), each narrowing the residual without closing it. The shared open layer across all three arcs remains the same: action-level / dynamical-completion / vacuum-mechanism construction. On the gauge side, the next genuine advance would be a Spin(10)-invariant action whose vacuum is forced into the compatible orbit — a goal now substantially sharper than it was three days ago.

The paper, *Compatible Pure-Spinor Polarizations from P7 Wall Data in the Spin(10) Envelope of Twistor Configuration Geometry*, is on Zenodo (DOI [10.5281/zenodo.20129212](https://doi.org/10.5281/zenodo.20129212); CC-BY-4.0). It is short — nine pages, ten references — with one proposition, one lemma, one theorem, one determinant-reduction proposition, and one hypercharge proposition. Three Claude review passes plus a GPT-5.5 Pro fresh-session review (verdict: publish with minor precision revisions) brought the §6 stabilizer-intersection from slogan-level to theorem-level, with explicit determinant calculation showing the $SU(5)_{W_+}$ condition $a^2 b^2 = 1$. The title was changed before upload from an earlier "...from the TCG Twistor Flag" framing — both Claude and GPT independently flagged that as overpromising, since the body uses P7 wall data, not the twistor flag directly.

Walls, not new postulates. The compatible polarization is almost there. What remains is to write the action.
