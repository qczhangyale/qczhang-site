---
title: "From CP³ to S⁴"
description: "You can close the twistor sub-residual of the substrate-level obstruction theorem. You just have to pay in S⁴. The companion substrate-level obstruction note (uploaded the same day) established at theorem level that under minimal twistor-incidence data no canonical CP³ attractor is determined, and named the labeled successor target P_sub^{CP³} = P_tw^{CP³} + P_ord^{CP³} outside the active ledger. P_tw^{CP³} records the requirement of a 4D conformal anchor whose twistor space is CP³; P_ord^{CP³} records the order-parameter selection rule on CP³. Today's companion paper proposes the Atiyah-Hitchin-Singer twistor construction of CP³ as the twistor space of S⁴ as the candidate closure of P_tw^{CP³}. AHS-S⁴ anchor postulate: four-dimensional conformal manifold S⁴ with self-dual Einstein metric, together with identification CP³ ≅ P(S_-) via the projectivized negative-chirality spinor bundle. Total space real dimension 6, complex dimension 3. Isometry group Spin(5) ≅ Sp(2) acts on CP³ via the twistor fibration. Closure pattern: Obstruction 2 closes (chain 'incidence data + S⁴ → twistors → CP³' no longer self-referential); Obstruction 1 conditionally replaced via symmetry-group replacement SU(4) → Spin(5) ≅ Sp(2) (SU(4)-flag-variety degeneracy breaks under Sp(2) action); Obstruction 3 conditionally replaced via rank forcing (P(S_-) → S⁴ has CP¹ fibers over 4-real-dimensional base → complex dimension 3, with AHS identification P(S_-) ≅ CP³); Obstruction 4 does NOT close — AHS supplies twistor-fibration structure as one candidate order parameter but does not select it over Fubini-Study Kähler, projective-incidence, or conformal SU(2,2). New sub-residual P^{S⁴}_anchor (Definition 9): why S⁴ specifically among compact conformally anti-self-dual Riemannian 4-manifolds whose AHS twistor spaces are candidate targets? Hitchin's classification narrows the answer to S⁴ (yielding CP³) and CP² (yielding flag variety F_{1,2}(C³)); only S⁴ yields CP³. Conditional closure theorem (Theorem 10): P_sub^{CP³,AHS} = P^{S⁴}_anchor + P_ord^{CP³}. Total residual count unchanged (two before and after); content shifts from 'why an anchor with CP³ as twistor space?' to 'why S⁴ specifically?'. Substrate arc structurally parallel to hadronic arc — but at a weaker substrate-anchor maturity register because closure is conditional on external AHS-S⁴ input rather than internal TCG/FPA combinatorial machinery."
pubDate: 2026-06-15
---

You can close the twistor sub-residual. You just have to pay in $S^4$.

[The companion paper](/blog/what-lives-below-cp3/) proved at theorem level that under minimal twistor-incidence data no canonical $\mathbb{CP}^3$ attractor is determined. It named the labeled successor target
$$P_{\rm sub}^{\mathbb{CP}^3} = P_{\rm tw}^{\mathbb{CP}^3} + P_{\rm ord}^{\mathbb{CP}^3}$$
outside the active ledger, and listed what would have to be added to close it: a four-dimensional conformal anchor whose twistor space is $\mathbb{CP}^3$, and an order-parameter selection rule on $\mathbb{CP}^3$.

What if you just write down the conformal anchor explicitly?

## The AHS-S⁴ anchor

The Atiyah–Hitchin–Singer twistor construction supplies one. Let $S^4$ be the round four-sphere with its self-dual Einstein metric. The bundle of negative-chirality Weyl spinors over $S^4$ is a complex rank-2 vector bundle $S_- \to S^4$; its projectivization is a $\mathbb{CP}^1$-fibration over $S^4$, and the standard identification reads
$$\mathbb{P}(S_-) \cong \mathbb{CP}^3.$$
The total space has real dimension $4 + 2 = 6$, complex dimension $3$. The fibration $\mathbb{CP}^3 \to S^4$ is twistor-theoretic: each point $p \in S^4$ corresponds to a $\mathbb{CP}^1 \subset \mathbb{CP}^3$ encoding the projective spinor data at $p$. The isometry group of $S^4$ is $\mathrm{Spin}(5) \cong \mathrm{Sp}(2)$, and it acts on $\mathbb{CP}^3$ via the twistor fibration.

The **AHS-$S^4$ anchor postulate** says: take $S^4$ as the four-dimensional conformal manifold, and use the AHS identification $\mathbb{CP}^3 = \mathbb{P}(S_-)$ as the twistor space. Supply this as substrate input.

With that one move, three of the four obstructions of the obstruction note go away — or at least move.

## Three obstructions, conditionally

**Obstruction 2 closes.** The substrate-derivation chain
$$\text{incidence data} + S^4 \to \text{twistors} \to \mathbb{CP}^3$$
is no longer self-referential. The twistor identification has operational content because $S^4$ is supplied as explicit input. $P_{\rm tw}^{\mathbb{CP}^3}$ closes conditionally on the anchor.

**Obstruction 1 conditionally replaces.** The relevant symmetry group is no longer the full $\mathrm{SU}(4)$ but $\mathrm{Spin}(5) \cong \mathrm{Sp}(2)$ — the isometry of $S^4$ acting on $\mathbb{CP}^3$ via the twistor fibration. Under that action, the $\mathrm{SU}(4)$-flag-variety degeneracy ($\mathbb{CP}^3$ versus $\mathrm{Gr}(2, 4)$ versus $\mathrm{Gr}(3, 4)$) breaks: the $\mathrm{Sp}(2)$-equivariant homogeneous 6-manifolds with $\mathbb{CP}^1$-fibration over $S^4$ are exhausted by the twistor fibration $\mathbb{P}(S_\pm) \cong \mathbb{CP}^3$. This is **conditional replacement**, not derivation: the substitution is licensed by the choice of $S^4$, which is itself supplied as input.

**Obstruction 3 conditionally replaces.** $\mathbb{P}(S_-) \to S^4$ has $\mathbb{CP}^1$ fibers over a 4-real-dimensional base, yielding total complex dimension $3$. AHS-$S^4$ supplies the stronger identification $\mathbb{P}(S_-) \cong \mathbb{CP}^3$ at the level of complex projective varieties. The rank and the target are fixed conditionally on the choice of $S^4$.

## Obstruction 4 stays open

**Obstruction 4 does not close.** The AHS construction equips $\mathbb{CP}^3$ with the twistor-fibration structure $\mathbb{CP}^3 \to S^4$ inherited from the self-dual conformal/quaternionic-Kähler geometry of $S^4$. This is one of the four candidate order parameters from Obstruction 4 — but the other three candidates do not disappear. The Fubini–Study Kähler form $\omega_{\rm FS}$, the projective-incidence relation $Z^\alpha \pi_\alpha = 0$, and the conformal $\mathrm{SU}(2, 2)$ structure still sit on $\mathbb{CP}^3$ as alternative choices for what the substrate functional is supposed to extremize. The AHS construction provides one such choice; it does not force its selection over the others.

The relevant ambiguity here is **order-parameter inequivalence**, not cohomology-class inequivalence — on $\mathbb{CP}^3$, $H^2(\mathbb{CP}^3, \mathbb{R}) \cong \mathbb{R}$ leaves no room for the second kind. The choices live one level higher than de Rham classes.

$P_{\rm ord}^{\mathbb{CP}^3}$ remains.

## The new sub-residual

The conditional closure of $P_{\rm tw}^{\mathbb{CP}^3}$ has a cost. The choice of $S^4$ — specifically, over other compact conformally anti-self-dual Riemannian 4-manifolds whose AHS twistor spaces are complex 3-folds — is itself a substrate input. The conditional closures of Obstructions 1, 2, 3 are all conditional on that choice.

The new sub-residual records the cost:
$$P^{S^4}_{\rm anchor} = \text{"why } S^4 \text{ specifically?"}$$

Hitchin's classification of compact Riemannian 4-manifolds with Kähler twistor spaces identifies $S^4$ (with twistor space $\mathbb{CP}^3$) and $\mathbb{CP}^2$ (with twistor space the flag variety $F_{1, 2}(\mathbb{C}^3)$) as the only such cases. Of those two, only $S^4$ produces $\mathbb{CP}^3$ as its twistor space. The substrate-derivation problem now narrows to choosing $S^4$ rather than $\mathbb{CP}^2$ — which is settled by the requirement that the twistor space be $\mathbb{CP}^3$, not the flag variety. Beyond the Kähler-twistor-space subfamily, other compact conformally anti-self-dual Riemannian 4-manifolds — hyperkähler surfaces, K3, complex tori, various conformal compactifications — have twistor spaces that are complex 3-folds but generally not $\mathbb{CP}^3$.

The substrate question has not been dissolved. It has been moved one level deeper, into a more concrete shape.

## Conditional closure theorem

$$\boxed{P_{\rm sub}^{\mathbb{CP}^3,\,\rm AHS} = P^{S^4}_{\rm anchor} + P_{\rm ord}^{\mathbb{CP}^3}}$$

$P^{S^4}_{\rm anchor}$ replaces $P_{\rm tw}^{\mathbb{CP}^3}$ as the more sharply named substrate-anchor-selection residual. $P_{\rm ord}^{\mathbb{CP}^3}$ is preserved from [the obstruction note](/blog/what-lives-below-cp3/) unchanged.

This is a conditional closure, not a derivation. The total residual count is unchanged (two sub-residuals before and after); the content shifts from *"why an anchor with $\mathbb{CP}^3$ as twistor space?"* to *"why $S^4$ specifically?"* The new question has a concrete mathematical handle — Hitchin's classification — that the old question did not.

## Internal versus external closure

The substrate arc now mirrors [the hadronic arc](/blog/residue-not-relabeling/) in shape: obstruction theorem → construction test that conditionally closes one sub-residual and names another.

But the closure strengths are not the same. The hadronic-arc closure is **internal** to the TCG/FPA combinatorial machinery. The cohomological realization of $P_{\rm pair}^{\rm wall\text{-}res}$ via the Orlik–Solomon algebra of the $A_3$ braid arrangement uses only structures that already lived in the FPA top stratum. The substrate-arc closure is **external** — it imports the AHS-$S^4$ anchor from outside the TCG corpus.

This is structural content, not a flaw. The substrate-derivation question lives one structural level below the active ledger, and closing it from inside the present TCG machinery would require substrate-side dynamics supplying $P^{S^4}_{\rm anchor}$. Today's paper does not supply that dynamics. What it supplies is the conditional closure that holds under the AHS-$S^4$ anchor, and a sharper formulation of the residual question that remains.

## Other anchors

AHS-$S^4$ is one canonical substrate-anchor candidate among several. Plücker / Grassmannian routes, the Hitchin–Karlhede–Lindström–Roček hyperkähler quotient construction, twistorial loop quantum gravity / spinor-network routes (in which $\mathbb{CP}^3$ enters as auxiliary twistor space rather than substrate target), and the family of AHS twistor spaces of general conformally anti-self-dual Riemannian 4-manifolds are all available. The paper acknowledges them as alternative closure routes. The question of *which* anchor substrate-side dynamics should select is what $P^{S^4}_{\rm anchor}$ records.

## Verdict

**Partial positive — AHS-$S^4$ conditional closure of $P_{\rm tw}^{\mathbb{CP}^3}$; new substrate-anchor residual $P^{S^4}_{\rm anchor}$ named outside the active ledger; order-parameter sub-residual $P_{\rm ord}^{\mathbb{CP}^3}$ preserved unchanged.**

Active TCG/$\tau$CG postulate ledger UNCHANGED:
$$P_0\text{--}P_4, \quad P_{5'}, \quad P_6, \quad P_7, \quad P_{H'}, \quad P_{SO(10)}.$$

The paper, *Conditional Closure of $P_{\rm tw}^{\mathbb{CP}^3}$ via the Atiyah–Hitchin–Singer Anchor in Trace Configuration Geometry*, is on Zenodo (DOI [10.5281/zenodo.20709846](https://doi.org/10.5281/zenodo.20709846); CC-BY-4.0). Ten pages, 13 references.

The pair of substrate-arc papers closes the structural symmetry the corpus had been building toward. Four arcs, four named residuals. A third paper today consolidates that state into a [structural-state review](/blog/completeness-is-not-correctness/).
