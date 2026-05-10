---
title: "Obstruction, Not Derivation: Where the Electron Prefactor Story Stops"
description: "The previous note in this series showed the electron boundary prefactor 1 - 1/(2π) is the connected effective action of nilpotent boundary defects, sectorwise. The closure question — whether the sectorwise prescription is forced by an action principle, equivalently whether the matching sectors of P_4 are BFV superselection sectors — has now been attempted. The verdict is negative-conditional. Two obstructions: matching monomials in the hard-core residue algebra are nilpotent (b_S² = 0) and so cannot be idempotent projectors, and natural corner-aware boundary theories encode incidence relations among strata rather than block-diagonal sector decompositions. A consistent sectorwise model can be declared by hand, but the declaration is exactly what the derivation would have to supply. The residual postulate P_BFV^sec bundles sector orthogonality, BRST/BFV preservation, unit augmentation, and uniform sector measure into one named assumption — clarifying the obstruction without weakening it. Active TCG/FPA postulate ledger unchanged. Arc (3) of the unification map converts from open to closed-conditional with explicit obstruction."
pubDate: 2026-05-10
---

A trilogy of short notes finished today. Three days, three papers, all on the same narrow technical question: the linear electron-boundary prefactor $\langle B_e \rangle = 1 - 1/(2\pi)$ in the FPA realization of Twistor Configuration Geometry. The first paper attacked the framework's hardest open structural question — why one combinatorial output describes couplings and the other masses — by identifying the two algebras that supply the required counts and conjecturing a Wilsonian localization principle separating them. The second paper sharpened the residual sub-postulate of that conjecture from an arbitrary linear-operator selection to the standard $W = \log Z$ structure of QFT, with linearity following exactly from nilpotency in the residue algebra. The third paper, posted today, asks whether the sectorwise application of $W = \log Z$ used in the second paper is itself derivable from a boundary action principle.

The answer is no, and the no comes with an explicit obstruction.

## What the question actually was

Recall the algebraic setup. At the electron stratum $r = 4$, the hard-core adjacent-residue algebra is

$$
\mathcal{A}_\partial^{\rm hc}(4) \;=\; \mathbb{C}[b_1, b_2, b_3] \big/ (b_1^2,\, b_2^2,\, b_3^2,\, b_1 b_2,\, b_2 b_3),
$$

and a single-edge boundary defect is $X_e = b_e \delta_0(\phi_e)$. The previous paper showed that nilpotency $b_e^2 = 0$ makes $\log(1 - X_e) = -X_e$ exact, not Taylor-truncated. For each matching sector $M$, the sectorwise connected effective action

$$
W_M^{\rm def} \;=\; \log \prod_{e \in M}(1 - X_e) \;=\; -\sum_{e \in M} X_e
$$

is then an exact algebraic identity, and averaging over $\mathrm{Match}(P_4) = \{\varnothing, 12, 23, 34, 12 \mid 34\}$ recovers $\langle B_e \rangle = 1 - 1/(2\pi)$. The full multiplicative alternative produces a $0.51\%$ disconnected correction that the existing electron-Yukawa formula match excludes within the TCG formula ledger.

But that argument relies on a load-bearing word: *sectorwise*. The connected logarithm is taken inside each matching sector before averaging over sectors. Taking the logarithm only after summing over matchings would define a different free energy and would not reproduce the framework's $P_4$. So the sectorwise prescription is not optional. It is a structural hypothesis about how the boundary theory decomposes.

The closure question is whether this hypothesis is forced. In standard quantum field theory, $W = \log Z$ is forced by the standard tree-level argument applied to a connected spacetime. In the FPA boundary setting, however, the relevant "spacetime" is the configuration-space corner stratification of $\mathrm{Conf}^{\rm lab}_4(I)$, with hard-core polar-normal residue selection. For the sectorwise $W = \log Z$ to be a theorem rather than a postulate, the matching sectors $M \in \mathrm{Match}(P_4)$ must be BFV superselection sectors of the boundary theory: the boundary state space must decompose as an orthogonal direct sum, and the BRST/BFV differential must preserve the decomposition. If both, the connected functional factorizes sectorwise and $W_\partial = \bigoplus_M W_M$ follows.

The question is therefore: does the natural BV–BFV theory on the chamberwise FM/AS compactification produce that superselection structure?

## The first obstruction: matching monomials are nilpotent

The most natural place to look for sector projectors is inside the residue algebra itself. If $\mathcal{A}_\partial^{\rm hc}(4)$ contained central orthogonal idempotents $e_M$ — one for each matching, with $e_M e_{M'} = \delta_{MM'} e_M$ and $\sum_M e_M = 1$ — then the algebra would split into orthogonal blocks indexed by matchings, and the boundary state space would inherit that block decomposition under any reasonable representation.

It does not. The matching monomial basis $\{1, b_1, b_2, b_3, b_1 b_3\}$ of $\mathcal{A}_\partial^{\rm hc}(4)$ labels matchings, but the labels are *nilpotent*, not idempotent. For any nonempty matching $S = \{i_1, \ldots, i_k\}$, the product $b_S = b_{i_1} \cdots b_{i_k}$ satisfies

$$
b_S^2 \;=\; b_{i_1}^2 \cdots b_{i_k}^2 \;=\; 0
$$

by the defining relations $b_i^2 = 0$. If $b_S$ were idempotent, then $b_S^2 = b_S$ would force $b_S = 0$ — contradicting the nonzero hypothesis. So the only idempotent in the algebra is the unit $1$, which corresponds to the empty matching and doesn't separate the others.

This is the algebraic obstruction. The hard-core residue algebra is a *square-free incidence ring* (Stanley–Reisner-type for the matching complex of $P_r$), not a *semisimple direct-sum algebra* of superselection sectors. Passing from the matching basis to a canonical orthogonal sector decomposition requires an additional quantization or semisimplification step that the algebra structure does not supply. In particular, the $b_i$'s and their products cannot themselves serve as projectors $\Pi_M$.

## The second obstruction: corner theories naturally mix strata

Even if one looks past the algebra and tries to construct a sectorwise BV–BFV theory directly, the natural-default behavior of corner-aware boundary field theories on FM/AS compactifications goes the wrong way.

The FM/AS compactification is a manifold-with-corners construction whose boundary strata encode nested collision data and incidence relations among those data. In Cattaneo–Mnev–Reshetikhin BV–BFV theory, the boundary phase space and boundary differential are induced by the variational boundary terms of the bulk action, and block-diagonality is a property of a specific boundary condition rather than a consequence of having a boundary at all. In Costello–Gwilliam factorization-algebra language, local-to-global maps are gluing maps, not superselection projectors. In cohomological or cellular models of corner stratifications, face and incidence differentials relate boundary strata of *adjacent codimension* — the natural default differential reads as

$$
Q_\partial \;:\; \mathcal{H}_M \;\longrightarrow\; \bigoplus_{M'} \mathcal{H}_{M'},
$$

with possible incidence maps between sectors, rather than the block-diagonal $Q_\partial \Pi_M = \Pi_M Q_\partial$ that sectorwise factorization requires.

To force block-diagonality, one would have to impose the sector-preserving condition on $Q_\partial$ as additional boundary data — a *boundary condition* selecting which sector transitions are allowed. That selection is exactly the missing content. It is not a consequence of working with a corner-aware BV–BFV theory; it is a separate input that such a theory could take or refuse.

This is not a no-go theorem. It is a structural observation: the natural default of the relevant machinery does not deliver superselection. Future corner-extended logarithmic BV–BFV constructions could, in principle, produce a theory whose specific boundary conditions force matching-sector preservation. But that would be a positive result of a future construction, not a consequence of the existing framework.

## The construction one can make, and what it costs

A consistent sectorwise model is not hard to assemble by hand. Declare the polar-normal boundary state space to be a direct sum

$$
\mathcal{H}_{\partial,4}^{\rm pol} \;=\; \bigoplus_{M \in \mathrm{Match}(P_4)} L^2((S^1)^M)
$$

with orthogonal projectors $\Pi_M$. Declare the boundary symplectic form and BRST differential to be sector-diagonal, $\Omega_\partial = \bigoplus_M \Omega_M$ and $Q_\partial = \bigoplus_M Q_M$. Then $Q_\partial \Pi_M = \Pi_M Q_\partial$ holds tautologically, the matching sectors are superselected by construction, and the sectorwise factorization $W_\partial = \bigoplus_M W_M$ with $W_M = \log Z_M$ follows from the standard connected-effective-action argument applied locally in each block. Averaging the result over $\mathrm{Match}(P_4)$ with the unit augmentation $\epsilon$ and uniform measure recovers $\langle B_e \rangle = 1 - 1/(2\pi)$, precisely as the previous paper derived.

But the construction is a declaration, not a derivation. The block-diagonal form of $\Omega_\partial$ and $Q_\partial$ is the superselection input — exactly what the closure attempt was supposed to justify. Without it, a global boundary theory could form a total partition function first and take a global logarithm, or could include incidence maps between matching sectors. Both options are compatible with general boundary-field-theory expectations unless additional structure forbids them. The sectorwise prescription is one consistent choice, not a forced one.

## The residual postulate, and what it accounts for

The cleanest statement of the residual structural assumption bundles the four pieces of the construction:

> **$P_{\rm BFV}^{\rm sec}$.** The hard-core polar-normal matching sectors of the electron boundary theory are orthogonal BFV superselection sectors. The boundary state space $\mathcal{H}_{\partial,4}^{\rm pol}$ decomposes as a direct sum over matchings with sector projectors $\Pi_M$; the boundary symplectic form and BRST differential are sector-diagonal; the trace is the unit augmentation $\epsilon(b_{i_1} \cdots b_{i_k}) = 1$ on matching monomials; and the matching-sector average is the uniform counting measure on $\mathrm{Match}(P_4)$ with normalized Haar measure $d\phi/(2\pi)$ on each polar-normal phase circle.

This is a precise structural statement. Given it, the sectorwise connected-log prescription of the previous paper follows as a theorem. Postulate-burden accounting is honest, however. $P_{\rm BFV}^{\rm sec}$ bundles four specific assumptions, all of which are implicit in the sectorwise $P_e^{\rm conn}$ that the previous paper named. Replacing one by the other does not weaken the residual burden. It clarifies it. The new statement identifies the *exact* mathematical structure a future derivation must supply, and that is the sense in which the closure note is useful — it sharpens the research handle without manufacturing a derivation.

The active TCG/FPA postulate ledger is unchanged. $P_{\rm BFV}^{\rm sec}$ is the structural content of the existing $P_e^{\rm conn}$ sub-postulate of the localization conjecture for $P_4$, not a new framework axiom. The full ledger remains $P_0$–$P_4$, $P_{5'}$, $P_6$, $P_7$, $P_{H'}$, $P_{SO(10)}$, exactly as it was before this trilogy of notes began.

## The literature gap

The corner-extended logarithmic BV–BFV theory required to formulate the question — whose boundary phase space is canonically the hard-core polar-normal matching-sector direct sum and whose transgression is block-diagonal in matching sectors — is not currently supplied by any published machinery. The components exist separately. FM/AS compactifications provide the corner geometry. Stanley–Reisner-type incidence algebras encode the face complex. Cattaneo–Mnev–Reshetikhin 2014 supplies the BV–BFV framework with boundary. Costello–Gwilliam 2017–2021 supplies factorization-algebra language for connected effective actions. Taken together these supply enough vocabulary to *state* the question precisely, but they do not supply the construction.

The honest conclusion is not that the corner-extended log BV–BFV theory is impossible. It is that it is not currently available, and should not be assumed silently. Five failure modes name what could go wrong: a future BV–BFV construction could close the obstruction positively; the trace and measure could acquire action-level justification from a stronger finite-state boundary TQFT; the right electron prefactor might turn out to be the global free energy $\log \langle Z \rangle_M$ rather than $\langle \log Z \rangle_M$, which would invalidate the sectorwise localization route entirely; a different boundary-theory ansatz with $b_i^2 \neq 0$ could reopen the algebra; the natural BFV theory could see the full FM/AS boundary rather than the hard-core subcomplex. Each is a precise question that a future construction could settle.

## Where the unification map stands

The trilogy converts arc (3) of the framework's unification map from "open" to "closed-conditional." After the gauge-algebraic envelope arc closed at the postulate-equivalent level last week (Spin(10), $\mathfrak{su}(2)_R$ supplied via $D_5 \supset D_3 \oplus D_2$), and after the sector-assignment arc closed all four sub-postulates of $P_4$ at the structural-motivation level over the last two days, this third arc — the action-level derivation of $P_4$ from a single boundary BV–BFV principle — now has a precise residual form. There is an explicit algebraic obstruction (matching monomials are nilpotent, not idempotent), an explicit structural obstruction (corner theories naturally mix strata via incidence), an explicit residual postulate ($P_{\rm BFV}^{\rm sec}$ with four bundled pieces), and an explicit literature gap (corner-extended log BV–BFV with sector-decomposed transgression is not currently in the published machinery).

The map's three arcs are now symmetric in maturity. Each has postulate-equivalent closure with named residual structure. They share a single open research target: the corner-extended log BV–BFV construction that would simultaneously supply the chamber idempotent algebra of the bulk side, the hard-core polar-normal residue algebra of the boundary side, and the sectorwise $W = \log Z$ restriction of the connected-effective-action structure as derived consequences of one boundary action principle.

The paper, *Boundary Superselection Obstruction for the Electron Prefactor in Twistor Configuration Geometry*, is on Zenodo (DOI [10.5281/zenodo.20110780](https://doi.org/10.5281/zenodo.20110780); CC-BY-4.0). It is short — eight pages, ten references, two theorems, one residual postulate, five failure modes. It does not close arc (3). It converts arc (3) from "open" to "closed-conditional with explicit obstruction and named residual postulate." That kind of progress — naming what's missing precisely instead of manufacturing a derivation — is what the framework's three-day publication arc reaches at its natural pause point. The work that comes next is the corner-extended log BV–BFV construction itself, or a different arc of the map entirely.
