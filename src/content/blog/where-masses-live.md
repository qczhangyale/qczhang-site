---
title: "Where Masses Live: A Bulk–Boundary Conjecture for Twistor Configuration Geometry"
description: "The TCG framework has a deep postulate problem. It assigns gauge couplings to one combinatorial structure and lepton masses to another, and the two assignments are separately stipulated. A new note attacks this — the framework's hardest open question — by showing that the two required counts come from two distinct algebras on the same configuration space, and conjecturing that the physical assignment is forced by an old idea due to Wilson: marginal dimensionless operators live in the interior, relevant dimensional operators live on the boundary. The slogan: mass is a logarithmic residue of collision. Not a derivation. Not a new postulate. A precise localization conjecture with five identifiable failure modes."
pubDate: 2026-05-09
---

In 1971, Kenneth Wilson published a pair of papers that turned renormalization-group theory into the standard organizational tool of modern physics. The mathematics was technical, but the central idea is simple. Operators in a quantum field theory come in three varieties, classified by how their effective strength behaves as one zooms out to longer distance scales. *Irrelevant* operators die away. *Relevant* operators grow. *Marginal* operators stay the same. The classification has units: relevant operators carry positive mass dimension and break conformal invariance at low energy, marginal operators are dimensionless and preserve scale invariance, irrelevant operators are negative-dimension and shrink. Mass terms are relevant. Gauge-coupling terms are marginal. This distinction — and the asymmetry it creates between the bulk dynamics and the boundary or defect dynamics of a field theory — has appeared in every major development since: AdS/CFT correspondence, defect conformal field theory, the holographic renormalization group, the boundary state formalism, and the rigorous BV–BFV machinery for theories on manifolds with corners.

A note I posted to Zenodo today applies this old distinction to the framework's hardest open structural question.

## The framework's hardest gap

Twistor Configuration Geometry (TCG) is a research program in which several Standard Model dimensionless invariants are read as chamber-weighted volumes on stratified twistor moduli. Its FPA realization — the construction at the heart of the framework — supplies two theorem-level combinatorial outputs at each stratum $n$ with line-deformation rank $r_n = 2n - 2$:

$$Z_{\rm bulk}(r_n) \;=\; r_n!, \qquad Z_\partial(r_n) \;=\; F_{r_n + 1}.$$

The first is the count of labeled ordering chambers in a configuration of $r_n$ points on an oriented interval. The second is the count of hard-core adjacent-pair matchings in such a chamber. Both numbers are theorem-level outputs of standard configuration-space combinatorics, well documented in the Fulton–MacPherson 1994 compactification literature and its real-coordinate variant due to Axelrod and Singer the same year.

The framework currently uses these two outputs in a specific way:

$$\text{gauge couplings} \;\longleftrightarrow\; r_n!, \qquad \text{lepton masses, Yukawas} \;\longleftrightarrow\; F_{r_n + 1}.$$

The combinatorics on each side is theorem-level. The *assignment* — which combinatorial structure gets identified with which physical observable — is not. The framework's reference paper itself flags this; the DAEDALUS Review and the Methodology audit both record the sector-assignment as the framework's deepest open structural question. It is distinct from the individual numerical gaps the framework already has — the gauge-kinetic boundary condition $g_{2,W}^2 = 4/(3\pi)$, or the hadronic identity $m_p / m_e \approx 6\pi^5$ — and it is distinct from the recent gauge-algebraic completion arc that closes the framework's $\mathfrak{su}(2)_R$ gap with a Spin(10) envelope. Those are problems about specific numbers. The sector assignment is a problem about *organization*. Why should one combinatorial output describe couplings and the other describe masses, and not the other way around?

After repeated structural passes on the framework, the answer has always been the same: it works because we declare it to. That is not a derivation. It is the deepest postulate burden the framework carries.

## Two algebras on one space

The new note begins a derivation. The strategy is to separate three layers — what is theorem, what is selection, and what is conjecture — and to make each one explicit.

The bulk algebra is unambiguous. For $r$ labeled points on an interval, the open configuration space decomposes as a disjoint union of $r!$ chambers, one for each ordering. The chamber-idempotent algebra
$$\mathcal{A}_{\rm bulk}(r) \;=\; \mathbb{C}[\pi_0(\operatorname{Conf}^{\rm lab}_r(I))]$$
has dimension $r!$ by inspection, and a Grassmann realization makes the same count visible as a top Berezin class: $\eta = \sum_i \bar\theta_i \theta_i$ satisfies $\eta^r = r! \cdot \prod_i \bar\theta_i \theta_i$, and the integral $\int d^r\bar\theta\, d^r\theta\, \eta^r = r!$. This is the standard story of the framework; the chamber count is what the FPA construction has always given.

The boundary algebra is less obvious, and requires a choice. When two of the $r$ points collide — when $x_i = x_{i+1}$ in some adjacent pair — the configuration sits on a divisor $D_i$ in the compactified configuration space. There are $r - 1$ such adjacent collision divisors, and their incidence graph is a path $P_r$ on $r$ vertices. The full Fulton–MacPherson boundary contains far more than these primitive adjacent pairs — it contains nested clusters and endpoint faces and higher collision strata — but the framework's mass-sector primitive uses only the adjacent-pair sector, and selects it with a *hard-core* rule: each primitive adjacent-pair residue can be used at most once (the relation $b_i^2 = 0$), and two adjacent-pair residues that share a collision vertex cannot both occur (the relation $b_i b_{i+1} = 0$).

The geometric reason is straightforward. The collision blocks $\{i, i+1\}$ and $\{i+1, i+2\}$ overlap but are neither nested nor disjoint, so under the standard nested-set compatibility of FM/AS / wonderful compactifications, their primitive residues are incompatible. The algebraic outcome is the quotient
$$\mathcal{A}_\partial^{\rm hc}(r) \;=\; \mathbb{C}[b_1, \ldots, b_{r-1}] \big/ (b_i^2,\; b_i b_{i+1}),$$
and it is a textbook calculation that the nonzero monomials in this algebra are exactly the matchings of the path graph $P_r$ — sets of edges with no two sharing a vertex. The matching count satisfies the Fibonacci recursion $M(P_r) = M(P_{r-1}) + M(P_{r-2})$, so $\dim \mathcal{A}_\partial^{\rm hc}(r) = F_{r+1}$.

This is the first piece of the note's content: the two combinatorial outputs $r!$ and $F_{r+1}$ are not free-floating numerology. They are the dimensions of two specific algebras attached to the same compactified configuration space — one in the interior, the other on a selected sector of the boundary. The algebras are theorem-level. The selection of the hard-core sector is a second decision, justified by the standard nested-set compatibility rule.

## The localization conjecture

The framework's actual physical question is not "what are these two numbers?" — those are settled. The question is "why should couplings live in the first algebra and masses in the second?" The note's main claim is that the answer is exactly Wilson's marginal/relevant distinction, applied to compactified configuration space.

Marginal dimensionless operators in a quantum field theory survive at the conformal/interior level. They do not require collisions or defects or boundary data. In the configuration-space picture, they should be represented by chamber classes — labels of the open ordering structure that the configuration sits in, with no information about how the configuration approaches a singular limit. Gauge couplings, being marginal and dimensionless, should therefore live in the bulk algebra. Their count is $r!$.

Relevant dimensional operators are different. They break conformal invariance. They mix left- and right-handed sectors of fermions. They couple to scale, and a scale appears in compactified configuration space exactly when the configuration approaches a collision divisor. In the language of logarithmic residues, the standard exact sequence
$$0 \;\to\; \Omega^\bullet \;\to\; \Omega^\bullet(\log D) \;\xrightarrow{\;\operatorname{Res}\;}\; \Omega^{\bullet-1}_D \;\to\; 0$$
makes the structure precise: forms with logarithmic singularities along $D$ map to ordinary forms on $D$ via the residue. Mass operators, being scale-breaking, should sit after the residue map — supported on the collision divisors rather than in the open interior. As a slogan,

> *Mass is a logarithmic residue of collision.*

If this localization principle is correct, then under the ordinary BV–BFV machinery for theories on manifolds with corners (Cattaneo, Mnev, Reshetikhin 2014, with corner-extended refinements still under development), one would obtain a sharp identification: the marginal coupling sector localizes to the bulk algebra of dimension $r!$, and the relevant mass sector localizes to the hard-core boundary algebra of dimension $F_{r+1}$. The two sequences $(1, 2, 24)$ and $(1, 2, 5)$ that the framework currently uses at strata $n = 1, 2, 3$ would no longer be independent assignments. They would be joint consequences of one principle.

That principle is the *Bulk–Boundary Sector Localization Conjecture*. It is conjecture-level, not theorem-level. The note states this as a precise structural target rather than as established physics.

## What can go wrong

Five identifiable failure modes are listed in the paper, and they are precise mathematical or physical questions rather than vague obstructions.

The most dangerous is the first: **full-boundary dominance**. The framework needs the boundary BFV theory to see only the hard-core adjacent-pair sector, not the full FM/AS boundary with its nested clusters and endpoint faces. If a natural BV–BFV theory on the chamberwise compactification produces the full boundary algebra rather than the hard-core quotient, the Fibonacci sector remains a *selected* sub-complex rather than a *derived* one — the postulate burden moves rather than disappearing. This is the structurally decisive risk, and the note flags it explicitly.

The second is **interior mass representatives**: if relevant chirality-changing deformations admit equally natural representatives as interior classes, then the bulk-boundary distinction does not force the sector split. The conjecture would be undetermined rather than refuted.

The third concerns a side application of the same boundary-residue picture. Near a complexified collision divisor with polar normal $z = \rho e^{i\phi}$, the form $dz/z$ separates as $d\rho/\rho + i\, d\phi$, and the angular variable $\phi$ takes values on a circle $S^1$. A marked identity-holonomy defect on this circle has expectation $\int_{S^1} \delta_0(\phi)\, d\phi/(2\pi) = 1/(2\pi)$, which is suggestively close to the framework's electron boundary prefactor $\langle B_e \rangle = 1 - 1/(2\pi)$. Earlier conditional models for $\langle B_e \rangle$ added the $S^1$ phase factor by hand. In the new picture, it could appear naturally — but only if the FPA boundary theory admits a complex-normal coordinate or oriented real blow-up. The real interval compactification by itself produces only a hypersurface boundary; the $S^1$ phase requires an enhancement, and that is the third failure mode.

The remaining two are about embedding into a physical action principle and justifying the complex-normal enhancement. None of these is hand-waved; each is the kind of question that can be settled by explicit calculation.

## Postulate, not derivation — and not new

The note is careful about what it does not do. It does not derive the Standard Model sector assignment. It does not introduce a new postulate. The active TCG/FPA postulate ledger remains exactly what it was after the recent unification arc: $P_0$ through $P_4$, $P_{5'}$, $P_6$, $P_7$, the hadronic representation-volume invariant $P_{H'}$, and the Spin(10) envelope $P_{SO(10)}$. The new note targets $P_2$ and $P_3$ specifically — the two sector-localization postulates of the framework reference paper — and converts them into a single bulk–boundary localization conjecture. It does not by itself derive any of the other postulates.

What changes is the diagnosis of where the postulate burden sits. Before the note, the burden was distributed: the chamber-count side of the assignment said couplings, the matching-count side said masses, and both halves were stipulated separately. After the note, the burden is concentrated in two specific places — the selection of the hard-core adjacent-residue boundary theory (whether it is forced by FM/AS geometry or imposed by hand) and the BV–BFV localization of marginal versus relevant operators (whether the configuration-space version of Wilson's distinction is provable or only suggestive). Both are precise questions. Either could be answered.

The paper, *Bulk–Boundary Localization in Twistor Configuration Geometry: A Conjecture for the Coupling/Mass Sector Split*, is on Zenodo (DOI [10.5281/zenodo.20102027](https://doi.org/10.5281/zenodo.20102027); CC-BY-4.0). It is short — sixteen pages, fourteen references, two theorems, one conjecture, five failure modes (with F1 and F5 explicitly investigated and shown to close with partial positive results, naming small residual sub-postulates). It does not close the framework's hardest gap. It converts the gap from an arbitrary assignment into a localization principle with concrete falsification paths. That is the kind of progress the program owes itself, and the kind that future structural work can take seriously.
