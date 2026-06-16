---
title: "What Lives Below CP³?"
description: "It took thirty-six papers to ask where CP³ comes from. The Twistor Configuration Geometry corpus takes complex projective three-space as a starting datum throughout: every postulate in the active ledger (P_0–P_4, P_{5'}, P_6, P_7, P_H', P_{SO(10)}) presupposes it; every dimensionless invariant uses its Fubini-Study volumes; the within-TCG obstruction trilogy works inside structures that already presuppose it. The substrate question — can CP³ be derived from a more primitive relational substrate rather than postulated? — is the question one structural level below the corpus. Today's paper takes that question seriously and proves at theorem level that under minimal twistor-incidence data (C, R, Φ) no canonical CP³ attractor is determined. Four sequential obstructions combine: SU(4) target degeneracy across flag varieties; twistor-space presupposition requiring a 4D conformal anchor; projective-rank degeneracy; order-parameter ambiguity among the Fubini-Study form, AHS twistor-fibration, projective-incidence, and conformal SU(2,2). Names labeled successor target P_sub^{CP³} = P_tw^{CP³} + P_ord^{CP³} outside the active ledger. Two framings of 'why CP³?' made explicit: the configurable framing dissolves the question by declining its presupposition; substrate-derivation framing (today) grants the question and proves it obstructed — complementary defenses. Positioning against Quantum Graphity, Causal Sets, Group Field Theory, twistorial loop quantum gravity, Wolfram Physics. Partial positive: substrate-level obstruction theorem; no derivation of CP³; no active-ledger change."
pubDate: 2026-06-15
---

It took thirty-six papers to ask where $\mathbb{CP}^3$ comes from.

Penrose's projective twistor space is the substrate of the Twistor Configuration Geometry corpus. Every postulate in the active ledger
$$P_0\text{--}P_4, \quad P_{5'}, \quad P_6, \quad P_7, \quad P_{H'}, \quad P_{SO(10)}$$
is stated in terms of it. Every dimensionless invariant uses its Fubini–Study volumes and chamber counts — from $1/\alpha = \pi + \pi^2 + 4\pi^3$ to the proton–electron Lenz ratio $6\pi^5$. Even [the obstruction trilogy](/blog/obstruction-not-derivation/), which proved theorem-level no-gos for several within-TCG derivations, lived inside structures that already presupposed it.

The substrate question lives one floor down. Today's paper finally walks down the stairs.

## Why ask at all?

Pre-geometric quantum gravity proposes a particular kind of move. Quantum Graphity, Group Field Theory, Causal Set Theory, twistorial loop quantum gravity, and Wolfram-style hypergraph rewriting all start somewhere more primitive than spacetime and try to recover geometry as something emergent — an attractor of a functional, a phase of a condensate, an embedding of a partial order, a continuum limit of rewriting rules. The projective analog is the obvious question: can $\mathbb{CP}^3$ itself emerge from a substrate, rather than being postulated?

There are two ways to handle that question.

[The Configurable Universe paper](/blog/configurable-universe/) refuses it. It reads TCG's constants as structural invariants of a chamber inside a fixed configuration space $\bigsqcup_{n=1}^{3} \mathbb{CP}^n \times \mathcal{K}_{r_n}(I)$. The chamber is part of the structural specification, not something the framework is trying to derive. The question "why this chamber rather than another?" is held to be ill-posed because it presupposes alternatives the configurable view does not require. On that framing, the substrate question is dissolved by refusing its presupposition.

The other handling is to grant the question and see what happens. That is what today's paper does.

## Minimal twistor-incidence data

A minimal twistor-incidence network is a triple
$$\mathcal{G} = (C, R, \Phi)$$
of information units $C$, a binary incidence relation $R \subseteq C \times C$, and a putative network-to-twistor map $\Phi$ assigning effective twistor data $Z^\alpha = (\omega^A, \pi_{A'})$ to large-scale incidence structures. The pair $(C, R)$ is exactly the Quantum Graphity primitive. The map $\Phi$ and the $\mathbb{CP}^3$ target are the twistor-incidence ambition's extra moves.

This is the substrate stripped down: no metric, no manifold, no coordinate embedding presupposed. The question is whether anything inside it forces the projective target to be $\mathbb{CP}^3$.

## The four obstructions

It does not.

**Obstruction 1 (target degeneracy at fixed SU(4)).** Even granting that the relevant continuous symmetry is $\mathrm{SU}(4)$, the group acts on multiple homogeneous flag varieties — $\mathrm{Gr}(1, 4) \cong \mathbb{CP}^3$, $\mathrm{Gr}(2, 4)$, $\mathrm{Gr}(3, 4) \cong \mathbb{CP}^3$, partial-flag varieties. Pure $\mathrm{SU}(4)$ data alone do not single out $\mathbb{CP}^3$.

**Obstruction 2 (twistor-space presupposition).** The word "twistor" presupposes a four-dimensional conformal structure. The two standard interpretations are Penrose's compactified Minkowski $\mathbb{M}^c$ and the Atiyah–Hitchin–Singer interpretation via the Riemannian 4-sphere $S^4$. Without one of them — or some other conformally anti-self-dual 4-manifold whose AHS twistor space the construction supplies — the chain
$$\text{incidence data} \to \text{twistors} \to \mathbb{CP}^3$$
has no second arrow. "Twistor of an undefined spacetime" is a symbol without operational content.

**Obstruction 3 (projective-rank degeneracy).** Pure incidence-network data without a counting constraint do not discriminate $\mathbb{CP}^3$ from $\mathbb{CP}^n$ at other ranks under the corresponding $\mathrm{SU}(n+1)$ symmetry. This is the projective analog of the unresolved "[why $6!$?](/blog/addressability-not-multiplier/)" multiplier question in the hadronic arc.

**Obstruction 4 (order-parameter ambiguity).** Even granting $n = 3$, four canonical structures on $\mathbb{CP}^3$ are inequivalent and each supplies a distinct candidate "attractor" target:

- the Fubini–Study Kähler form $\omega_{\rm FS}$;
- the AHS twistor-fibration structure $\mathbb{CP}^3 \to S^4$ associated with the self-dual conformal geometry of $S^4$;
- the projective-incidence relation $Z^\alpha \pi_\alpha = 0$;
- the conformal $\mathrm{SU}(2, 2)$ structure.

These are not the same choice of what the substrate functional is supposed to extremize. The ambiguity is *order-parameter inequivalence*, not cohomology-class inequivalence — on $\mathbb{CP}^3$, $H^2(\mathbb{CP}^3, \mathbb{R}) \cong \mathbb{R}$, so any closed real invariant 2-form is proportional to the hyperplane class. The choices live one level higher than that.

The four obstructions are sequential. No single substrate input closes all four. A four-dimensional conformal anchor substantially constrains the symmetry/rank/target ambiguity, but does not close the order-parameter ambiguity. An order-parameter rule does not supply a twistor anchor.

## Theorem 12

Under minimal twistor-incidence data, no canonical $\mathbb{CP}^3$ attractor is determined.

This is a *minimal-data form*, not a universal no-go. It does not claim that no future twistor-incidence framework can derive $\mathbb{CP}^3$. It claims that minimal twistor-incidence data of the kind currently sketched in the substrate-derivation literature cannot.

What it does, instead, is identify the minimum extra structure that would be required:
$$\boxed{P_{\rm sub}^{\mathbb{CP}^3} = P_{\rm tw}^{\mathbb{CP}^3} + P_{\rm ord}^{\mathbb{CP}^3}}$$

$P_{\rm tw}^{\mathbb{CP}^3}$ is the twistor sub-residual — the requirement of a four-dimensional conformal anchor whose twistor space is $\mathbb{CP}^3$. (Minkowski and $S^4$ supply this. Generic conformally anti-self-dual 4-manifolds do not — their AHS twistor spaces are complex 3-folds but generally not $\mathbb{CP}^3$.) $P_{\rm ord}^{\mathbb{CP}^3}$ is the order-parameter sub-residual — the selection rule among the four candidate canonical structures.

Both are **labeled successor-construction targets outside the active ledger**. Neither is a new framework axiom. The active ledger does not move.

## Two defenses, not one argument

The configurable framing and today's substrate-derivation framing are not steps in a single argument. They are two stances toward the same question.

The configurable framing declines the question. The substrate-derivation framing grants the question and finds it obstructed. Either route concludes that $\mathbb{CP}^3$ stays as TCG's primitive datum. Combined, the two protections are multiplicative: a reader who finds one defense unconvincing can fall back on the other; a reader who finds both unconvincing has identified a question outside the framework's current scope, not a defect within it.

## Four arcs, four named residuals

The substrate residual completes the named-residual table.

| Arc | Residual | Source |
|---|---|---|
| Electron $P_4$ | $P_{\rm BFV}^{\rm sec}$ | [Boundary Superselection Obstruction](/papers/27-boundary-superselection-obstruction/) |
| Gauge envelope | $X_{\rm wall\text{-}pol}$ | [Pure-Spinor Condensation Obstruction](/papers/32-pure-spinor-condensation-obstruction/) |
| Hadronic $P_{H'}$ | $P_{\rm pair}^{\rm wall\text{-}res} + P_{\rm pair}^{\rm phys} + P_{\rm pair}^{\rm ord}$ | [Hadronic Six-Slot Resolution](/papers/35-hadronic-six-slot-resolution/) → [Pair-Channel Root-Wall Residue Addresses](/papers/36-pair-channel-root-wall-residue-addresses/) |
| **Substrate** | $P_{\rm sub}^{\mathbb{CP}^3}$ | **Today** |

The first three arcs work inside structures presupposing $\mathbb{CP}^3$. The fourth arc asks where that presupposition comes from. Each carries a named successor target outside the active TCG/τCG ledger. None is a new framework axiom.

## Verdict

**Partial positive — substrate-level obstruction theorem; no derivation of $\mathbb{CP}^3$ from incidence data; no active-ledger change.**

Active TCG/$\tau$CG postulate ledger UNCHANGED:
$$P_0\text{--}P_4, \quad P_{5'}, \quad P_6, \quad P_7, \quad P_{H'}, \quad P_{SO(10)}.$$

The paper, *Why $\mathbb{CP}^3$? A Substrate-Level Obstruction Theorem for Twistor-Incidence Attractors*, is on Zenodo (DOI [10.5281/zenodo.20709751](https://doi.org/10.5281/zenodo.20709751); CC-BY-4.0). Twelve pages, 18 references.

The companion paper, uploaded the same day, asks what happens if you import the AHS-$S^4$ anchor explicitly. That is the [substrate-arc construction test](/blog/from-cp3-to-s4/) — and it has a price.
