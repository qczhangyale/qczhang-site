---
title: "Why the Most Precisely Measured Number in Physics Looks Like a Sum of Volumes"
description: "When Wolfgang Pauli was dying he reportedly told his colleagues that his first question for God would be 'Why 137?' He was talking about 1/α — the inverse fine-structure constant, the most precisely measured dimensionless number in physics. A century after Sommerfeld first wrote it down, no one has explained it. A short paper in the TCG program offers a partial answer: 1/α = π + π² + 4π³ to two parts per million, and the three terms turn out to be the volumes of the three projective spaces in Penrose's twistor flag, weighted by a single rule. The paper does not derive the constant from first principles. But it gives the formula a place inside a structure, where for ninety years it has had none."
pubDate: 2026-05-08
---

In the spring of 1916, the German physicist Arnold Sommerfeld was finishing a paper on relativistic effects in the hydrogen atom. He had derived an expression for the splitting between energy levels, and pulling out the dimensionless prefactor he found it was always multiplied by a number close to $1/137$. He gave the number a symbol — $\alpha$ — and called it the *Feinstrukturkonstante*, the fine-structure constant. He didn't know what it meant.

Nobody else did either. The constant turned out to govern the strength of electromagnetism: the rate at which charged particles interact through photons. Its inverse $1/\alpha \approx 137.036$ appears anywhere quantum electrodynamics is computed. We have measured it to twelve significant figures. It is the most precisely known dimensionless number in physics.

We do not know why it has the value it does.

Wolfgang Pauli kept a small piece of paper with "137" written on it on his desk for decades. There is a story — possibly apocryphal — that on his deathbed Pauli said his first question for God would be "Why 137?" Richard Feynman, in *QED*, called the constant "a magic number that comes to us with no understanding by man" and wrote that "all good theoretical physicists put this number up on their wall and worry about it."

The history of trying to derive 137 is long and mostly a history of failure. Arthur Eddington in the 1930s claimed it was *exactly* 137, an integer fixed by the dimension of a Clifford algebra. Higher-precision measurements falsified that. Various authors over the decades have noticed that $1/\alpha \approx 137.036$ sits suspiciously close to $\pi + \pi^2 + 4\pi^3 = 137.036303$. The match is at 2.2 parts per million. It has been written off as numerology more than once.

A short paper I posted to Zenodo a few weeks ago argues that we should not write it off — not because the match is special as a numerical match, but because the three terms have a specific geometric origin in Penrose's twistor space.

## What's Suspicious About π + π² + 4π³

The standard sceptical answer to a closed-form match is that vocabulary is flexible. Take $\pi$ alone, allow polynomials of low degree with small integer coefficients, and the trial space of candidate formulas is in the millions. Match one constant by accident is not surprising.

The match $1/\alpha = \pi + \pi^2 + 4\pi^3$ has been studied under exactly this lens for years, and the standard objection is real. Why these three terms and not others? Why these coefficients (1, 1, 4) and not others? The answer "because they happen to give 137" is circular; it would equally explain any match.

What changes, in the TCG paper, is that the three terms aren't independent choices in a flexible vocabulary. They are the three Fubini–Study volumes of the three projective spaces in a *specific* geometric structure — Penrose's twistor flag — weighted by a *single* rule that has nothing to do with hitting the number 137.

Here is the structure.

## A Quick Tour of Twistor Space

In 1967 Roger Penrose proposed that the natural arena for relativistic physics is not four-dimensional spacetime but a complex three-dimensional space he called *twistor space*, technically $\mathbb{CP}^3$. (The notation reads "complex projective three-space.") A point in $\mathbb{CP}^3$ corresponds, roughly, to a light ray in spacetime. Penrose's program was to recast all of physics in terms of twistors, with mass-zero fields living naturally on $\mathbb{CP}^3$ and spacetime emerging as a derived concept. The program produced beautiful mathematics — twistor diagrams, the Penrose transform, an industry of papers in mathematical physics — but it never produced the Standard Model. It became a specialized branch of theoretical physics rather than a unified theory.

Twistor space has natural sub-spaces. Inside $\mathbb{CP}^3$ sits $\mathbb{CP}^2$ (a complex projective plane). Inside $\mathbb{CP}^2$ sits $\mathbb{CP}^1$ (a complex projective line, which is just the Riemann sphere). The chain $\mathbb{CP}^1 \subset \mathbb{CP}^2 \subset \mathbb{CP}^3$ is called a *flag*, in the language of geometers. It's a standard object. Every projective space has a Fubini–Study volume — a natural way of measuring how big it is — and the three volumes are particularly simple:

$$
\mathrm{Vol}(\mathbb{CP}^1) = \pi, \qquad \mathrm{Vol}(\mathbb{CP}^2) = \frac{\pi^2}{2}, \qquad \mathrm{Vol}(\mathbb{CP}^3) = \frac{\pi^3}{6}.
$$

Each is a power of $\pi$ divided by a factorial. The pattern $\pi^n / n!$ continues for higher $\mathbb{CP}^n$ if you want it.

Now: take these three volumes, and weight each one by the factorial of a number called $r_n = 2n - 2$. (The TCG paper explains where this rank rule comes from; it's the dimension of the line-deformation space on each $\mathbb{CP}^n$, fixed by the geometry, not chosen.) For $n = 1, 2, 3$, the ranks are $r_1 = 0$, $r_2 = 2$, $r_3 = 4$. Their factorials are $0! = 1$, $2! = 2$, $4! = 24$.

Multiply each volume by its weight:

$$
1 \cdot \pi = \pi, \qquad 2 \cdot \frac{\pi^2}{2} = \pi^2, \qquad 24 \cdot \frac{\pi^3}{6} = 4\pi^3.
$$

Sum the three:

$$
\pi + \pi^2 + 4\pi^3 = 137.036303.
$$

The empirical $1/\alpha$ is $137.035999$.

The match is at 2.2 parts per million. And the right-hand side of the formula is no longer "three terms of a flexible $\pi$-polynomial." It's the chamber-weighted Fubini–Study volume sum across Penrose's twistor flag, with weights from the rank rule.

The vocabulary is forced. The geometry is forced. The match is what comes out.

## What the Rank Rule Means

The rule $r_n = 2n - 2$ is the rank of the line-deformation space at each projective dimension. To unpack: a line in $\mathbb{CP}^n$ is a copy of $\mathbb{CP}^1$ embedded inside; deforming it slightly — pushing it in different directions — gives a vector space of deformations. For $\mathbb{CP}^1$ itself there are no deformations (the line is the whole space), so $r_1 = 0$. For $\mathbb{CP}^2$ a line has two deformation directions, so $r_2 = 2$. For $\mathbb{CP}^3$ a line has four, so $r_3 = 4$.

The factorial of each rank counts the number of orderings — the chambers — of a configuration of $r_n$ labeled points. This is a standard combinatorial structure that appears in many parts of mathematics: scattering amplitudes, configuration spaces, Coxeter group theory. The TCG framework postulates that physics' chambers are exactly these line-deformation chambers, and that the chamber-weighted sum produces dimensionless physical constants. The fine-structure constant is the first and simplest output.

What this gives us, when it works, is not a derivation of $1/\alpha$ — the 2.2 ppm residual is not zero — but a *home* for the formula. The expression $\pi + \pi^2 + 4\pi^3$ is no longer a free-floating closed-form match. It is a specific calculation in Penrose's twistor flag, with the answer fixed by the geometry. The remaining 2.2 ppm gap is a *target*: any future correction mechanism (radiative, structural, or otherwise) would have to reproduce that specific gap with its specific sign and magnitude, not just "a small correction."

## What This Buys

For the past century, derivations of $1/\alpha$ have failed because they were either too rigid (Eddington's exact 137, falsified by precision) or too loose (numerology in a flexible $\pi$-vocabulary, dismissed by sceptical accounting). The TCG reading is a third option: an approximate closed form anchored in a specific geometric structure, with a constrained vocabulary the structure doesn't choose.

Three things this changes.

First, the look-elsewhere problem shrinks. Closed forms in arbitrary $\pi$-polynomials are easy to find by accident; closed forms that arise as chamber-weighted volume sums on a particular twistor flag are not. The trial space of "single chamber-weighted sum on a twistor flag" is small.

Second, the formula connects to other things. The same twistor flag governs the rest of the TCG framework: the line-deformation bundle on top of it is where the $W$-boson mass formula $g_{2,W}^2 = 4/(3\pi)$ lives, and the Plücker ambient space for the Grassmannian of twistor lines turns out to host the Pati-Salam representation reading of the proton-electron mass ratio. So the same geometry that gives us 137 is shared with the geometry that gives us the weak sector and the hadronic sector. That is a non-trivial unification.

Third, it makes the question precise. We no longer ask "what's a good closed form for $\alpha$?" — that question is too loose. We ask "why does the rank rule $r_n = 2n - 2$ describe physics?" That question has a specific answer in algebraic geometry (line-deformation cohomology), and the TCG framework can be tested by asking whether the rest of its structure also matches the empirical body. The review of nine numerical relations across six sectors says it does, at varying levels of precision.

## What This Doesn't Buy

The 2.2 parts-per-million residual is real. The geometric reading does not predict it; it identifies the structural target $\pi + \pi^2 + 4\pi^3$ but does not produce a correction term. A complete theory would have to either close the gap or explain it.

The framework also does not derive the rank rule from a deeper principle. The rule $r_n = 2n - 2$ is taken as input from algebraic geometry (line-deformation cohomology on $\mathbb{CP}^n$), but the framework does not yet explain why the *rank rule* is the right thing to weight the Fubini–Study volumes by. A physicist evaluating the framework will see this as a postulate. It is more constrained than "$1/\alpha \approx 137$" but still not derived.

## What's Settled, and When

Sommerfeld didn't know why $\alpha$ was about $1/137$. We still don't. But we have a different question now than we did a century ago. Sommerfeld's question was "what does this number mean?" The TCG paper rephrases it: "where does this number live, and is the place we found it the right place?"

The answer to the first half is twistor space — specifically the chamber-weighted volume sum across the three projective spaces of Penrose's flag. The answer to the second half won't be settled by argument. It will be settled by precision: by whether $1/\alpha$ stays at $137.035999$ as CODATA tightens the bound; by whether the other eight closed forms in the framework's empirical body hold up; by whether someone produces a derivation that closes the 2.2 ppm gap.

For ninety years, $1/\alpha$ has been a number physicists worry about. Pauli's question is still open. But the formula now has an address. That is not nothing. It might even be the start of an answer.

---

*The paper "An Approximate Closed Form for 1/α as a Sum of Fubini–Study Volumes on Penrose's CP³" is on Zenodo at DOI [10.5281/zenodo.19980960](https://doi.org/10.5281/zenodo.19980960), CC-BY-4.0.*
