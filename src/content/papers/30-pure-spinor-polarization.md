---
title: "Pure-Spinor Polarization and Standard-Model Breaking in the Spin(10) Envelope of Twistor Configuration Geometry"
shortTitle: "Pure-Spinor Polarization"
doi: "10.5281/zenodo.20116476"
date: 2026-05-11
order: 30
category: foundations
description: "Gauge-side action-level mechanism paper for the $P_{SO(10)}^{\\rm br}$ residual of Paper #29 v2. After the direct Higgs-potential route closed as OBSTRUCTED with a theorem-level invariant-potential orbit obstruction proof, this paper investigates a different mechanism: pure-spinor polarization. A nonzero pure chiral spinor $\\lambda \\in \\mathbf{16}$ determines a maximal isotropic polarization of the Spin(10) vector space and has a stabilizer of $SU(5)$ type (compact phase-fixed; parabolic with Levi $GL(5,\\mathbb{C})$ over $\\mathrm{Spin}(10,\\mathbb{C})$). For a pure-spinor polarization $W = W_3 \\oplus W_2$ compatible with the Pati-Salam vector split $V_{10} = V_6 \\oplus V_4$, the root-system intersection $\\Phi(A_4) \\cap \\Phi(D_3 \\oplus D_2) = A_2 \\oplus A_1$ gives the SM semisimple part $\\mathfrak{su}(3)_C \\oplus \\mathfrak{su}(2)_L$, and the leftover Cartan direction $Y \\propto \\mathrm{diag}(-1/3, -1/3, -1/3, 1/2, 1/2)$ is exactly the hypercharge $Y = T_{3R} + (B-L)/2$ in Pati-Salam normalization. Therefore $\\mathfrak{su}(5)_\\lambda \\cap (\\mathfrak{su}(4)_C \\oplus \\mathfrak{su}(2)_L \\oplus \\mathfrak{su}(2)_R) = \\mathfrak{su}(3)_C \\oplus \\mathfrak{su}(2)_L \\oplus \\mathfrak{u}(1)_Y$ under the compatibility hypothesis. TCG-native action-level potential $V_{\\rm pure}(\\lambda) = \\kappa \\sum_a |\\lambda^T C \\Gamma^a \\lambda|^2 + \\lambda_0 (\\lambda^\\dagger \\lambda - v_R^2)^2$ has normalized pure spinors as minima; uses only the TCG-native representations $\\mathbf{16}$ and $\\mathbf{10}$ via the bilinear channel $\\mathbf{16} \\otimes \\mathbf{16} \\supset \\mathbf{10}$ (standard $\\mathbf{16}_s \\otimes \\mathbf{16}_s = \\mathbf{10} \\oplus \\mathbf{120} \\oplus \\mathbf{126}$). Does NOT import standard $SO(10)$ breaking representations $\\mathbf{45}$, $\\mathbf{54}$, $\\mathbf{126}$, $\\overline{\\mathbf{126}}$, $\\mathbf{210}$. **Verdict: partial positive — mechanism reformulation, not theorem-level closure.** Reformulates the residual from $P_{SO(10)}^{\\rm br,align}$ ('choose right-handed VEV direction in $\\mathbf{16}_H$') to a sharper polarization-compatibility target $P_{\\rm pol}^{D_5}$ ('derive a TCG-native pure-spinor polarization compatible with the $D_3 \\oplus D_2$ Pati-Salam split'). Five open gaps G1-G5 (compatible polarization, chiral twistor origin, vacuum dynamics, family triplication unchanged, $P_{5'}$ normalization unchanged). $P_{\\rm pol}^{D_5}$ named as residual target outside active framework ledger, NOT a new framework axiom. Active TCG/FPA postulate ledger UNCHANGED: $P_0$-$P_4$, $P_{5'}$, $P_6$, $P_7$, $P_{H'}$, $P_{SO(10)}$. Same maturity register as Paper #28 (Bitwistor Pair Channels): partial positive mechanism reformulation."
---

## Abstract

The Spin(10) envelope of Twistor Configuration Geometry (TCG) closes the algebraic missing-$SU(2)_R$ gap by embedding the existing $A_3 \oplus A_1$ gauge data into $D_5 \supset D_3 \oplus D_2 \cong A_3 \oplus A_1^L \oplus A_1^R$ [Zhang Spin10 Envelope, DOI:10.5281/zenodo.20091562]. The downstream paper [Zhang Spin10 Downstream v2, DOI:10.5281/zenodo.20115884] splits the remaining residual into $P_{SO(10)}^{\rm br}$ (breaking vacuum + weak-boundary asymmetry) and $P_{\rm fam}$ (family triplication). A direct action-level attack on $P_{SO(10)}^{\rm br}$ via Spin(10)-invariant scalar potential on the TCG-native fields $\mathbf{10}_H \oplus \mathbf{16}_H/\overline{\mathbf{16}}_H$ closes as OBSTRUCTED with theorem-level proof (invariant-potential orbit obstruction): a $G$-invariant potential selects orbits, not named left/right VEV directions, so any alignment requires additional structural input.

This paper investigates a different action-level mechanism: pure-spinor polarization. A nonzero pure chiral spinor $\lambda \in \mathbf{16}$ of $\mathrm{Spin}(10)$ determines a maximal isotropic polarization $W \subset V_{10,\mathbb{C}}$ of complex dimension 5. **Proposition 1 (Pure-spinor stabilizer)**: Over $\mathrm{Spin}(10,\mathbb{C})$, the stabilizer of a pure-spinor line is a parabolic subgroup with Levi factor $GL(5,\mathbb{C})$. On the compact real form, the stabilizer of the corresponding line is $U(5)$-type, while the stabilizer of a normalized representative with phase fixed is $SU(5)$-type [Cartan 1938, Chevalley 1954]. The proposed mechanism reads the Standard Model group as the intersection
$$G_{\rm SM} = G_{\rm PS} \cap G_\lambda$$
where $G_{\rm PS} = SU(4)_C \times SU(2)_L \times SU(2)_R$ is the Pati-Salam subgroup supplied by the TCG Spin(10) envelope, and $G_\lambda \simeq SU(5)$ is the stabilizer of a pure chiral spinor.

**Intersection theorem (§3, root-system computation)**: For a pure-spinor polarization $W = W_3 \oplus W_2$ compatible with the Pati-Salam vector split $V_{10} = V_6 \oplus V_4$, the root-system intersection is
$$\Phi(A_4) \cap \Phi(D_3 \oplus D_2) = \{e_i - e_j : 1 \le i \neq j \le 3\} \cup \{\pm(e_4 - e_5)\} = A_2 \oplus A_1,$$
giving the SM semisimple part $\mathfrak{su}(3)_C \oplus \mathfrak{su}(2)_L$. The leftover Cartan direction inside the $A_4$ Cartan
$$Y \propto \mathrm{diag}\left(-\tfrac{1}{3}, -\tfrac{1}{3}, -\tfrac{1}{3}, \tfrac{1}{2}, \tfrac{1}{2}\right)$$
commutes with the $A_2$ roots and the surviving $A_1$ root $e_4 - e_5$. In the Pati-Salam Cartan it is exactly $Y = T_{3R} + (B-L)/2$ in Pati-Salam normalization. Therefore under the compatibility hypothesis,
$$\mathfrak{su}(5)_\lambda \cap (\mathfrak{su}(4)_C \oplus \mathfrak{su}(2)_L \oplus \mathfrak{su}(2)_R) = \mathfrak{su}(3)_C \oplus \mathfrak{su}(2)_L \oplus \mathfrak{u}(1)_Y$$
up to standard $\mathbb{Z}_6$ finite quotient at the group level.

**Compatibility hypothesis (essential)**: A generic pure-spinor stabilizer is conjugate to $SU(5)$ inside $\mathrm{Spin}(10)$ but need not be aligned with the already-chosen $D_3 \oplus D_2$ Pati-Salam splitting. Deriving the compatible polarization is the residual addressed by this paper.

**TCG-native action-level potential (§4)**: The pure-spinor constraint $\lambda^T C \Gamma^a \lambda = 0$ ($a = 1, \ldots, 10$) lives in the native vector channel $\mathbf{16} \otimes \mathbf{16} \supset \mathbf{10}$ (standard decomposition $\mathbf{16}_s \otimes \mathbf{16}_s = \mathbf{10} \oplus \mathbf{120} \oplus \mathbf{126}$ supplies the symmetric vector part). A minimal positive potential is
$$V_{\rm pure}(\lambda) = \kappa \sum_{a=1}^{10} \left|\lambda^T C \Gamma^a \lambda\right|^2 + \lambda_0 \left(\lambda^\dagger \lambda - v_R^2\right)^2, \quad \kappa, \lambda_0 > 0,$$
whose minima are normalized pure spinors. A related auxiliary-vector realization through a field $H_a \in \mathbf{10}$ shows that the relevant invariant is native to the $\mathbf{10}$ vector channel (with sign-convention caveats; $V_{\rm pure}$ is the primary action-level candidate). The construction uses *only* the two TCG-native Spin(10) representations $\mathbf{16}$ and $\mathbf{10}$ — no import of standard heavy $SO(10)$ breaking representations $\mathbf{45}$, $\mathbf{54}$, $\mathbf{126}$, $\overline{\mathbf{126}}$, $\mathbf{210}$ [Slansky 1981, Mohapatra 2003].

**Status: partial positive, not theorem-level closure.** The route reformulates the residual from
$$P_{SO(10)}^{\rm br,align}: \text{ choose right-handed-neutrino VEV direction in } \mathbf{16}_H$$
to a sharper polarization-compatibility target
$$P_{\rm pol}^{D_5}: \text{ derive a TCG-native pure-spinor polarization compatible with the } D_3 \oplus D_2 \text{ split.}$$
The latter points to a specific geometric target: derivation of compatible polarization from the chiral Penrose twistor flag $\mathbb{CP}^1 \subset \mathbb{CP}^2 \subset \mathbb{CP}^3$ underlying TCG. Five open gaps G1-G5 (compatible polarization; chiral twistor origin; vacuum dynamics; family triplication unchanged; $P_{5'}$ normalization unchanged).

The active TCG/FPA postulate ledger is **unchanged**: $P_0$-$P_4$, $P_{5'}$, $P_6$, $P_7$, $P_{H'}$, $P_{SO(10)}$. $P_{\rm pol}^{D_5}$ is a residual label outside this ledger, NOT a new framework axiom. Same maturity register as Paper #28 (Bitwistor Pair Channels, [Zhang Bitwistor, DOI:10.5281/zenodo.20111389]): partial positive mechanism reformulation of a named residual, no derivation, no active-ledger change.

## DOI

[https://doi.org/10.5281/zenodo.20116476](https://doi.org/10.5281/zenodo.20116476)
