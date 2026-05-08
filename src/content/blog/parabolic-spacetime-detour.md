---
title: "Looking for SU(2)_R, Finding Spacetime: A Lie-Algebraic Detour"
description: "Pati–Salam unification leaves a visible gap — the right-handed weak isospin algebra SU(2)_R is missing from the Lie sub-algebra that twistor configuration geometry naturally lands on. The obvious next move is to delete the middle node of the A_3 Dynkin diagram instead of an end node. The shape comes out right: sl_2 ⊕ sl_2 ⊕ u(1). The physics doesn't. The two sl_2 factors aren't internal weak isospin at all — they are the left- and right-handed Lorentz spinor algebras of complexified spacetime. The same root system carries Pati–Salam color/lepton structure and the spinor structure of the twistor Grassmannian, side by side, separated only by which simple root you delete."
pubDate: 2026-05-08
---

In 1894, Élie Cartan classified the simple Lie algebras over the complex numbers. By 1944, Eugene Dynkin had reduced Cartan's bookkeeping to a calculus of small diagrams: a few dots and edges encode the algebra, and operations on the diagram encode operations on the algebra. The most consequential of these operations is deletion. Remove a node from a Dynkin diagram, and you get a sub-algebra — a "Levi" algebra — whose representation theory governs how the original algebra breaks when its symmetry is partially gauged or partially broken. Every grand unified theory is, at root, a story about which node you delete from which diagram.

The diagram for A_3 is three dots in a row, joined by edges: • — • — •. Its compact real form is su(4), and su(4) is the unification algebra of the model that Jogesh Pati and Abdus Salam proposed in 1974: lepton number is treated as a fourth color, and the Standard Model's gauge content descends from a single 4×4 unitary group. That diagram, that algebra, has been a fixture of unified-theory writing for half a century.

A few weeks ago I posted a paper showing that the chamber count at the top stratum of Twistor Configuration Geometry is exactly 24, the order of the Weyl group of A_3, and that under a single new postulate the algebra reconstructs su(4) with the right grading to host Pati and Salam's quartet. The Levi reduction in that paper goes through deleting one of the *end* nodes of the diagram. The result is su(3) ⊕ u(1) — color plus baryon-minus-lepton number, the Pati–Salam parts list.

But the Standard Model is bigger than that. It has a left-handed weak SU(2)_L and a right-handed analog SU(2)_R that doesn't show up in the end-deletion picture. So where does SU(2)_R come from?

The most natural-looking answer is sitting in the Dynkin diagram itself: don't delete an end node, delete the *middle* one.

## The Conjecture That Almost Works

Cut the middle of • — • — •, and you get two disconnected pieces: • and •. Each is an A_1 diagram — the diagram of su(2). Together with a u(1) for the central deleted root, the structure is sl_2 ⊕ sl_2 ⊕ u(1). That is, on its face, exactly the shape of SU(2)_L × SU(2)_R × U(1)_Y. The conjecture writes itself: the wall-deletion paper takes the end node, lands at Pati–Salam minus right-isospin; a parallel reduction takes the middle node, lands at the missing left-right electroweak sector. Two cuts of the same diagram, two halves of the Standard Model. The tidiness is almost suspicious.

I spent a few days in the algebra checking this. The shape is right. The physics isn't.

## What the Calculation Says

The fundamental representation of su(4) is four-dimensional. Each Levi reduction comes with a specific u(1) generator that grades that fundamental. For the end-deletion case, the relevant u(1) generator has eigenvalues (1/4, 1/4, 1/4, −3/4) on the four basis vectors — a 3+1 split that lines up exactly with three colors of quarks plus one lepton, the diagonal of (B−L). That eigenvalue pattern is the entire reason Pati–Salam works.

For the middle-deletion case, the u(1) generator has eigenvalues (1/2, 1/2, −1/2, −1/2) — a 2+2 split, not a 3+1 split. There is no way to interpret 2+2 as quarks-and-lepton. There is no quark-singlet structure inside it. Whatever this u(1) is grading, it is not Pati–Salam's (B−L)/2 and not the Standard Model's hypercharge.

That alone would be enough to retire the conjecture. But the more interesting question is: if it's not internal weak hypercharge, what is it?

## The Geometric Reveal

Every Levi sub-algebra of a complex Lie algebra has a homogeneous space attached to it: the quotient of the corresponding group by the parabolic subgroup. For A_3, the homogeneous space attached to *middle-root* parabolic deletion is one of the most studied objects in twentieth-century geometry. It is the Grassmannian G(2,4) — the moduli space of complex two-planes inside complex four-space. Roger Penrose's 1967 introduction of twistor theory placed this Grassmannian at the center of physics: every two-plane in his "twistor space" T = C^4 corresponds to a single point in compactified complexified Minkowski space. G(2,4) is, literally, complexified spacetime.

The tangent space at any point of G(2,4) decomposes naturally into two factors — what mathematicians call Π* and (C^4/Π) for the chosen plane Π. The Levi action on these two factors is exactly the action of GL(2) × GL(2). Strip the determinant factors, and the semisimple part is SL(2) × SL(2). Complexify the Lorentz algebra so(1,3) and you find — this is a textbook calculation, going back to the early twentieth century — that it splits as sl_2(C)_L ⊕ sl_2(C)_R, the algebras of left-handed and right-handed Weyl spinors. They are not internal symmetries. They are the two chiralities of spacetime spin.

So the two sl_2 factors that fall out of middle-root deletion of A_3 are not the missing internal SU(2)_R. They are the left and right Lorentz spinor algebras of complexified spacetime. The 2+2 grading from the central u(1) is not weak hypercharge; it is the natural parabolic grading that distinguishes the two spinor factors. The conjecture fails for the most informative reason a conjecture can fail: it produces real structure, just not the structure you were looking for.

## One Root System, Two Physical Worlds

Step back from the calculation, and what's left is a small but striking observation about A_3.

The same complex root system carries two completely different physics readings, depending on which node you delete. End-root deletion gives the *internal* Pati–Salam structure: three colors of quark and one lepton, graded by (B−L). Middle-root deletion gives the *external* Lorentz/twistor structure: the two-plane geometry of complexified spacetime, graded by spinor chirality. The first reading uses the compact real form of the algebra. The second uses the complexified form. Both readings are mathematically natural; both attach to existing pieces of our framework — the Grassmannian G(2,4) already plays a role in the electroweak-boundary paper from earlier this month, and the related Plücker space CP^5 plays a role in the hadronic-extensions paper. Until this week, those uses of G(2,4) were inputs we accepted as given. After this week, they are derivations: G(2,4) is exactly SL_4 quotiented by the middle-root parabolic, and that's why it's there.

This is more than bookkeeping. It says that internal Lie content and external spacetime content in the framework are not two separate machines bolted together. They are two parabolic readings of one root system, both available for free once the root system itself is in place. The Standard Model's gauge sector and Lorentzian spacetime are, in this picture, dual aspects of a single piece of mathematics rather than independent ingredients.

## What It Doesn't Solve

The internal SU(2)_R gap — the one Pati and Salam left open in 1974 and that the wall-deletion paper inherited last month — is *not* closed by this observation. Middle-root deletion of A_3 doesn't supply right-handed weak isospin; it supplies spinor structure of spacetime, which is something else. So the gap remains, and four candidate sources for the missing internal SU(2)_R are surveyed in the paper without any of them endorsed: chiral doubling at a deeper stratum, embedding into so(10) via the spin(6) ⊕ spin(4) chain, a possible spinor-internal correspondence, or simple acceptance that the framework lands at a Pati–Salam Levi sub-algebra and the missing factor is genuinely missing rather than waiting to be derived.

The note is short — ten pages, fourteen references, one diagram cut into two ways. It is a structural observation, not a new postulate, and the active postulate ledger of the framework is unchanged. Its principal contribution is negative in the obvious sense (the natural conjecture fails) and positive in the less obvious one (one root system, two readings; G(2,4) explained). The unification map's gaps are smaller than they were, but not because a missing piece has been filled in — because the search space for SU(2)_R has been narrowed and the architectural unity of the framework has been tightened.

The paper, *End and Middle Parabolics of A_3 in Twistor Configuration Geometry: Internal Color versus Spacetime Incidence*, is on Zenodo (DOI [10.5281/zenodo.20090828](https://doi.org/10.5281/zenodo.20090828); CC-BY-4.0). It reads as a clarifying companion to the wall-deletion and electroweak-boundary papers, and is best taken with those.
