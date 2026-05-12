---
title: "Compatible Pure-Spinor Polarizations from P7 Wall Data in the Spin(10) Envelope of Twistor Configuration Geometry"
shortTitle: "Compatible Pure-Spinor Polarizations"
doi: "10.5281/zenodo.20129212"
date: 2026-05-12
order: 31
category: foundations
description: "Direct follow-up to the pure-spinor polarization note (DOI:10.5281/zenodo.20116476). the pure-spinor polarization note established the CONDITIONAL intersection mechanism G_{SM} = G_{PS} ∩ G_λ requiring a compatible pure-spinor polarization — residual P_{pol}^{D_5}. This paper attacks the compatibility part using ONLY existing TCG data — no new postulates. Two structural inputs: (a) the P7 wall postulate [Zhang Wall Deletion, DOI:10.5281/zenodo.20045987] supplies the lepton line ℓ ⊂ 4 and the color/lepton split 4 = C ⊕ ℓ; (b) preservation of visible SU(2)_L (a compatibility input from P_{5'} left-handedness, NOT derived here) forces the weak half of the polarization to be 2_L ⊗ r for a line r ⊂ 2_R. **Proposition 1**: W_3^+ = ℓ ∧ C ⊂ ∧^2 4 is a 3-dimensional maximal isotropic subspace for the wedge-pairing quadratic form. **Lemma**: any SU(2)_L-invariant complex 2-dimensional subspace of L ⊗ R has the form L ⊗ r and is automatically maximal isotropic over C. **Theorem 3**: the resulting polarization W_+ = (ℓ ∧ C) ⊕ (2_L ⊗ r_+) is a maximal isotropic 5-plane in V_{10,C}, hence determines a projective pure spinor. **Proposition 5 (Determinant reduction)**: for g_4 = diag(A, a) ∈ SU(4)_C preserving 4 = C ⊕ ℓ and g_R ∈ SU(2)_R preserving r_+ with phase b, the SU(5)_{W_+} stabilizer condition imposes a^2 b^2 = 1, reducing two U(1) phases to one U(1)_Y. **Proposition 6 (Hypercharge)**: the surviving abelian generator is Y = T_{3R} + (B-L)/2 in Pati-Salam normalization, with Q_{EM} = T_{3L} + Y. The stabilizer intersection SU(5)_{W_+} ∩ (SU(4)_C × SU(2)_L × SU(2)_R) ≃ S(U(3) × U(2)) is the Standard Model group up to standard finite quotient. Charge decomposition W_+ ≅ (3, 1)_{-1/3} ⊕ (1, 2)_{+1/2} matches the SU(5) fundamental 5 (trace-zero 3(-1/3) + 2(+1/2) = 0). Matter content (clarifying Remark in §5) remains in the chiral spinor 16 of Spin(10), whose decomposition under SU(5) ⊃ G_{SM} is the usual 5-bar ⊕ 10 ⊕ 1 packaging one full generation; the 5 that appears in W_+ is the POLARIZATION's fundamental representation, not a matter multiplet. **Verdict: partial positive — compatibility residual substantially constrained, condensation/action remains open.** Residual sharpened from P_{pol}^{D_5} ('derive an arbitrary compatible polarization') to 'derive a pure-spinor condensate in the wall-and-SU(2)_L-compatible orbit'. Five open gaps G1-G5 (pure-spinor condensation, compatibility-as-theorem, conjugate orientation W_+ vs W_-, breaking scale + P_{5'}, family triplication unchanged). Active TCG/FPA postulate ledger UNCHANGED: P_0-P_4, P_{5'}, P_6, P_7, P_{H'}, P_{SO(10)}. P_{pol}^{D_5} remains a residual label outside the active ledger, NOT a new framework axiom. Same maturity register as the bitwistor pair-channel note and the pure-spinor polarization note: partial positive mechanism progress on a named residual, no derivation, no active-ledger change."
---

## Abstract

The Spin(10) envelope of Twistor Configuration Geometry (TCG) closes the algebraic missing-$SU(2)_R$ gap at postulate-envelope level, but it leaves the breaking-vacuum residual. A previous pure-spinor polarization note [Zhang Pure-Spinor Polarization, DOI:10.5281/zenodo.20116476] reformulated this problem as an intersection mechanism: a pure spinor in the chiral $\mathbf{16}$ has an $SU(5)$-type stabilizer, and a compatible $SU(5)$ stabilizer intersects the Pati-Salam subgroup in the Standard Model group. The remaining residual is the compatibility question: $P_{\rm pol}^{D_5}$, derive a compatible pure-spinor polarization.

This paper attacks the compatibility part of $P_{\rm pol}^{D_5}$ using only existing TCG data — no new postulates. We show that the existing P7 end-wall deletion [Zhang Wall Deletion, DOI:10.5281/zenodo.20045987] supplies the lepton line $\ell \subset \mathbf{4}$, hence the color/lepton split $\mathbf{4} = C \oplus \ell$. Under the Spin(10) vector branching
$$\mathbf{10} \longrightarrow (\mathbf{6}, \mathbf{1}, \mathbf{1}) \oplus (\mathbf{1}, \mathbf{2}_L, \mathbf{2}_R), \quad \mathbf{6} = \wedge^2 \mathbf{4}$$
the P7 wall postulate supplies the lepton line $\ell$, and **given this line the color part $\ell \wedge C$ of a maximal isotropic five-plane is canonical** (Proposition 1).

If one additionally imposes preservation of the visible $SU(2)_L$ factor — **a compatibility input, not derived here**; it is the same physical observation that $P_{5'}$ ($g_{2,W}^2 = 4/(3\pi)$) targets the left-handed weak factor only — the weak part of any compatible maximal isotropic plane is forced to be $\mathbf{2}_L \otimes r$ for a line $r \subset \mathbf{2}_R$; all such $r$ are gauge-equivalent under $SU(2)_R$ (Lemma).

**Theorem 3 (Compatible pure-spinor polarizations)**: The subspaces
$$W_+ = (\ell \wedge C) \oplus (\mathbf{2}_L \otimes r_+), \qquad W_- = (\wedge^2 C) \oplus (\mathbf{2}_L \otimes r_-)$$
are maximal isotropic 5-planes in $V_{10,\mathbb{C}}$, hence each determines a projective pure spinor of $\mathrm{Spin}(10)$.

**Proposition 5 (Determinant reduction)**: Let $g_4 \in SU(4)_C$ preserve the split $\mathbf{4} = C \oplus \ell$, so $g_4 = \mathrm{diag}(A, a)$ with $\det(A) \cdot a = 1$; let $g_R \in SU(2)_R$ preserve $r_+$ with phase $b$; let $g_L \in SU(2)_L$ be arbitrary. Then $g_4$ acts on $\ell \wedge C$ with determinant $a^3 \det(A) = a^2$, and $(g_L, g_R)$ acts on $\mathbf{2}_L \otimes r_+$ with determinant $b^2$. The $SU(5)_{W_+}$ stabilizer condition imposes
$$a^2 b^2 = 1,$$
reducing the original two-parameter abelian family $(a, b)$ to one $U(1)$.

**Proposition 6 (Hypercharge)**: The surviving abelian generator is
$$Y = T_{3R} + \frac{B-L}{2}$$
in Pati-Salam normalization (where $Q_{\rm EM} = T_{3L} + Y$). On $\ell \wedge C$ the eigenvalue is $-1/3$ (from $-1/2 + 1/6$); on $\mathbf{2}_L \otimes r_+$ it is $+1/2$. The trace-zero check $3(-1/3) + 2(+1/2) = 0$ matches the constraint $a^2 b^2 = 1$ of Proposition 5 with $a = e^{-i\theta/2}$, $b = e^{i\theta/2}$.

The Standard Model intersection follows:
$$SU(5)_{W_+} \cap \bigl(SU(4)_C \times SU(2)_L \times SU(2)_R\bigr) \simeq S(U(3) \times U(2)) \simeq G_{\rm SM}$$
up to the standard finite quotient. The charge decomposition
$$W_+ \cong (\mathbf{3}, \mathbf{1})_{-1/3} \oplus (\mathbf{1}, \mathbf{2})_{+1/2}$$
matches the $SU(5)$ fundamental $\mathbf{5}$ under the Standard Model subgroup. **Remark (§5)**: this $\mathbf{5}$ is the polarization's fundamental representation, not a matter multiplet. Standard Model matter remains in the chiral spinor $\mathbf{16}$ of $\mathrm{Spin}(10)$, whose decomposition under $SU(5) \supset G_{\rm SM}$ is the usual $\overline{\mathbf{5}} \oplus \mathbf{10} \oplus \mathbf{1}$ packaging one full generation.

**Status: partial positive — compatibility residual substantially constrained.** The TCG wall-deletion data and the visible left-handed weak factor almost completely determine the compatible pure-spinor polarization. The compatible polarization is no longer arbitrary: it is determined by the end-wall lepton line, the color three-plane, and the requirement of preserving the observed left-handed weak factor, up to the expected $SU(2)_R$ gauge choice and conjugate orientation. The remaining residual is no longer a choice of right-handed-neutrino VEV direction, but the **action-level existence of a pure-spinor condensate in this compatible orbit**.

The construction uses only the two TCG-native Spin(10) representations $\mathbf{10}$ and $\mathbf{16}$ via $\mathbf{6} = \wedge^2 \mathbf{4} \subset \mathbf{10}$ and the $SU(5)$ stabilizer of a pure spinor in $\mathbf{16}$. Does **NOT** import standard heavy $SO(10)$ breaking representations $\mathbf{45}$, $\mathbf{54}$, $\mathbf{126}$, $\overline{\mathbf{126}}$, $\mathbf{210}$ [Slansky 1981, Pati-Salam 1974].

Five open gaps remain (§7): G1 pure-spinor condensation (action-level); G2 compatibility as boundary condition or theorem; G3 conjugate orientation $W_+$ vs $W_-$; G4 breaking scale and $P_{5'}$ value; G5 family triplication.

The active TCG/FPA postulate ledger is **unchanged**: $P_0$-$P_4$, $P_{5'}$, $P_6$, $P_7$, $P_{H'}$, $P_{SO(10)}$. $P_{\rm pol}^{D_5}$ remains a residual label outside the active ledger, **not** a new framework axiom — sharpened but not closed. Same maturity register as Papers #28 [Zhang Bitwistor, DOI:10.5281/zenodo.20111389] and #30 [Zhang Pure-Spinor Polarization, DOI:10.5281/zenodo.20116476]: partial positive mechanism progress on a named residual, no derivation, no active-ledger change.

## DOI

[https://doi.org/10.5281/zenodo.20129212](https://doi.org/10.5281/zenodo.20129212)
