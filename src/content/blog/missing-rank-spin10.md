---
title: "The Missing Rank: Closing a Pati–Salam Gap with Spin(10)"
description: "Half a century ago, Jogesh Pati and Abdus Salam proposed a unification scheme that came one rank short of the Standard Model. Last week's wall-deletion paper inherited the same gap. Two attempts to fill it from inside Twistor Configuration Geometry — middle-deletion of A_3 and chiral doubling at the lower stratum — both failed for different reasons. The classical answer turns out to be a 1949 result of Borel and de Siebenthal: the Lie algebra so(10) contains exactly the missing factor as a regular maximal subalgebra, and its sixteen-dimensional chiral spinor packages one whole Standard Model family — including a right-handed neutrino — into a single irreducible representation. This is not a derivation. It is the cleanest available postulate."
pubDate: 2026-05-08
---

In 1974, Jogesh Pati and Abdus Salam proposed that the three colors of quarks and the lepton might be four shades of a single thing. Their unification group, $SU(4) \times SU(2)_L \times SU(2)_R$, treats lepton number as a fourth color and pairs up left-handed and right-handed weak isospins as separate but parallel factors. The proposal has aged unusually well. The $SU(4)$ part survives in the modern grand-unified-theory literature as one of the main routes to the Standard Model. The pair of weak isospins survives in the left–right-symmetric model of Mohapatra and Senjanović from 1980, where the right-handed neutrino enters as a partner to the left-handed one and a seesaw mechanism explains why ordinary neutrinos are so light. Half a century has passed and the Pati–Salam algebra is still a fixture of unified-theory thinking.

A paper I posted to Zenodo last month — the wall-deletion paper of Twistor Configuration Geometry (TCG) — landed at the Pati–Salam algebra by a different route. The compact form of the rank-three classical Lie algebra $A_3$ is exactly $\mathfrak{su}(4)$, and $A_3$ is the natural Weyl-arrangement structure carried by the top stratum of the framework's stratified configuration space. End-root deletion of $A_3$ — the simplest Levi reduction available — gives $\mathfrak{su}(3) \oplus \mathfrak{u}(1)_{(B-L)/2}$, which is three colors of quarks plus one lepton with the correct relative-charge structure. Combined with the $\mathfrak{su}(2)_L$ that comes for free from the lower stratum, the framework reaches four of the five rank generators of full Pati–Salam unification. The single missing factor is the right-handed weak isospin $\mathfrak{su}(2)_R$ — the same factor Pati and Salam themselves wrote down by hand in 1974 and the same factor Mohapatra and Senjanović needed to mass the right-handed neutrino in 1980. Without it, the Standard Model's hypercharge formula

$$Y \;=\; T_{3R} \,+\, \tfrac{B-L}{2}$$

cannot be assembled, and the right-handed quark and lepton singlets do not have a home.

The natural question is where to look for the missing factor. The natural answer is to look inside the same root system that supplied the existing pieces.

## Two attempts that didn't work

The first thing to try is a second cut of the same Dynkin diagram. The $A_3$ diagram is three dots in a row, joined by edges: $\bullet$—$\bullet$—$\bullet$. End-root deletion gives Pati–Salam color. *Middle*-root deletion gives two disconnected dots, which look like two copies of $A_1$, and the conjecture writes itself: maybe one of those copies is $\mathfrak{su}(2)_L$ and the other is $\mathfrak{su}(2)_R$.

I worked this out earlier last week and posted it as a short clarifying note. The shape is right but the physics is wrong. The two $A_1$ factors at middle-root deletion of $A_3$ are not internal weak isospins. They are the left and right Lorentz spinor algebras of complexified spacetime, $\mathfrak{sl}_2(\mathbb{C})_L \oplus \mathfrak{sl}_2(\mathbb{C})_R$. The homogeneous space attached to middle-root deletion is the Grassmannian $G(2, 4)$, which Roger Penrose put at the center of physics in 1967 when he introduced twistor space. The pair of $A_1$'s describes spinor chirality, not internal isospin. Middle deletion answers a question about *spacetime*, not unification.

The second thing to try is to double the $A_1$ that we already have at a deeper stratum. The lower stratum of the framework already supplies one copy of $A_1$ — the existing $\mathfrak{su}(2)_L$. If some chirality structure at that stratum produces a left-and-right-handed pair, we'd have $\mathfrak{su}(2)_L \oplus \mathfrak{su}(2)_R$ from the same place. But this fails on a textbook obstruction. To get two commuting $A_1$'s — which is what an $\mathfrak{su}(2)_L \oplus \mathfrak{su}(2)_R$ pair requires — you need two *orthogonal* simple roots, equivalently two disconnected nodes in the diagram. The natural candidate $A_2$ has two simple roots that are *not* orthogonal: their commutator is nonzero, $[E_{12}, E_{23}] = E_{13} \neq 0$, and the closure of the two corresponding $\mathfrak{sl}_2$ subalgebras is the whole $\mathfrak{sl}_3$, not a direct sum. The $A_2$ outer automorphism gives an *equivalence* between the two $\mathfrak{sl}_2$'s but doesn't produce two independent copies; the real-form duality between compact $\mathfrak{su}(2)$ and split $\mathfrak{sl}_2(\mathbb{R})$ produces alternatives, not a direct sum, and the split form is non-compact anyway. After working through the candidates, the $A_2$-internal route closes negatively.

After two days of looking inside the existing $A_1 \subset A_2 \subset A_3$ chain, the conclusion was that no piece of it supplies internal $\mathfrak{su}(2)_R$.

## What Borel and de Siebenthal already knew

The classical answer comes from a 1949 paper by Armand Borel and Jean de Siebenthal that I had not read carefully enough until this week. Their classification of the maximal subalgebras of simple Lie algebras gives, for the rank-five algebra $D_5 = \mathfrak{so}(10)$, exactly the regular maximal subalgebra

$$D_5 \;\supset\; D_3 \oplus D_2.$$

What makes this useful is a pair of accidental low-rank isomorphisms that have been textbook material since the early twentieth century. The rank-three orthogonal algebra $D_3$ is the same as the rank-three special-linear algebra $A_3$, which is the same as the Pati–Salam $\mathfrak{su}(4)$. The rank-two orthogonal algebra $D_2$ is *not* simple — it is exactly $A_1 \oplus A_1$, the algebra of two disconnected $\mathfrak{su}(2)$'s. Stringing the isomorphisms together,

$$\mathfrak{so}(10) \;\supset\; \mathfrak{so}(6) \oplus \mathfrak{so}(4) \;\cong\; \mathfrak{su}(4)_C \oplus \mathfrak{su}(2)_L \oplus \mathfrak{su}(2)_R.$$

That is full Pati–Salam, exactly. The two $\mathfrak{su}(2)$'s are commuting because they live in different orthogonal blocks of the $D_5$ root system; the missing rank-one factor that the framework couldn't find inside its existing root datum sits inside the orthogonal envelope as a separate piece.

The rank arithmetic is the cleanest way to see why this works. The framework's existing gauge content has total rank $3 + 1 = 4$. Full Pati–Salam has rank $5$. The smallest simple Lie algebra of rank $5$ whose regular maximal subalgebra contains both $A_3$ and a doubled $A_1$ is $D_5$. Borel and de Siebenthal classified this completion seven decades ago.

## The sixteen-spinor

The reason to take $\mathfrak{so}(10)$ seriously, beyond the rank completion, is what its chiral spinor representation does. The rank-five orthogonal algebra has two chiral spinors of dimension $2^4 = 16$, and one of them branches under Pati–Salam as

$$\mathbf{16} \;\longrightarrow\; (\mathbf{4}, \mathbf{2}, \mathbf{1}) \,\oplus\, (\bar{\mathbf{4}}, \mathbf{1}, \mathbf{2}).$$

The first piece is the left-handed quark and lepton doublets, all three colors plus the lepton, paired up by $\mathfrak{su}(2)_L$. The second piece is the conjugates of the right-handed singlets — the right-handed up- and down-type quarks, the right-handed electron, and a fourth field that is a Standard Model singlet but transforms inside the right-handed Pati–Salam doublet: the right-handed neutrino. That last component carries $T_{3R} = -1/2$ and $(B - L)/2 = -1/2$, so its hypercharge $Y = T_{3R} + (B - L)/2 = -1$ would put it in the position of the right-handed electron — *except* that the $\mathfrak{su}(2)_R$ representation theory pairs it with the right-handed neutrino, with the actual neutrino's quantum numbers $T_{3R} = +1/2$, $(B - L)/2 = -1/2$, $Y = 0$ recovered from the doublet partner. Sixteen complex components house one full Standard Model family, including the right-handed neutrino that the Standard Model itself does not predict.

That is the strongest motivation for $\mathfrak{so}(10)$. Without $\mathfrak{su}(2)_R$, the right-handed sector of the $\mathbf{16}$ cannot be assembled. With $\mathfrak{su}(2)_R$, one Standard Model family — three colors, three charged-lepton states, three right-handed counterparts, one right-handed neutrino — fits in a single irreducible representation of a single simple Lie algebra. The framework's missing $\mathfrak{su}(2)_R$ is not a stray rank-one factor that needs an independent justification; it is the second half of a chiral spinor.

## Postulate, not derivation

The Spin(10) envelope is not derivable from the framework's existing machinery. The wall-deletion paper's underlying postulate, $P_7$, supplies parabolic-Levi reductions of an existing root datum. Spin(10) requires a different operation: a regular-subalgebra completion of $A_3 \oplus A_1$ inside a larger ambient root system. These are two different algebraic procedures, classified by two different parts of the Lie-theory literature, and the existing postulates do not produce the second one.

The paper therefore states the completion as a new postulate, with two forms. The minimal algebraic form is the envelope completion itself. The stronger spinorial form requires that the framework's gauge data carry one Standard Model family as a single irreducible chiral spinor representation, which forces $D_5$ among simple classical candidates by minimality of the spinor dimension. The spinorial form is the better physical motivation; the algebraic form is the cleaner ledger entry. Both are stated and the spinorial one is named the preferred reading.

What the paper does not do is propose a new measured ratio. It would be tempting to add a Fubini–Study volume invariant on the projectivization $\mathbb{P}(\mathbf{16}) \cong \mathbb{CP}^{15}$, which would give the dimensionless number $16 \pi^{15}$ in the same way that the framework's hadronic-extensions paper extracted the proton-electron ratio from $6 \pi^5$ on $\mathbb{P}(\wedge^2 \mathbf{4}) \cong \mathbb{CP}^5$. But $16 \pi^{15}$ is not close to any measured Standard Model dimensionless ratio at any accuracy, and adding the invariant without a target would weaken the framework's statistical-audit discipline. The $\mathbf{16}$ functions as a structural derivation target, not a numerical observable. The Spin(10) postulate extends the gauge-structure ledger, not the constant-formula grammar.

The paper lists six explicit gaps that adoption of the postulate does not close: the minimality of the orthogonal envelope, the choice of $D_5$ over larger $D_n$ alternatives, the breaking mechanism of $\mathfrak{su}(2)_R$, the asymmetry of the existing electroweak boundary condition between $\mathfrak{su}(2)_L$ and $\mathfrak{su}(2)_R$, the family count, and the absence of a new testable invariant. Each of these is a concrete research target that would convert the postulate into a derivation if settled. None of them is settled.

## What it closes and what it doesn't

The Spin(10) envelope is the cleanest available completion of the framework's gauge-algebraic content given what failed inside the existing $A_1 \subset A_2 \subset A_3$ chain. It is not a derivation and the paper is explicit about that. What it does is anchor the missing factor to the second half of a chiral spinor in a single simple Lie algebra — supplying architectural content beyond a bare insertion — and recover the existing hadronic representation-volume invariant as the electroweak-singlet block of the $\mathfrak{so}(10)$ vector. Both of those are real structural moves. Neither of them produces a new measured number.

The paper, *The Spin(10) Envelope of Twistor Configuration Geometry: A Postulate-Equivalent Completion of the SU(2)_R Gap*, is on Zenodo (DOI [10.5281/zenodo.20091562](https://doi.org/10.5281/zenodo.20091562); CC-BY-4.0). It is short — eleven pages, eighteen references, three pillars, six gaps. It reads as a closing companion to the wall-deletion and parabolic-note papers, and is best taken with both. The unification map's gauge-algebraic core arc closes here. What remains open is symmetry breaking, family-count phenomenology, and the gauge-kinetic boundary conditions on the existing left-handed weak sector — the next set of research arcs the framework owes itself.
