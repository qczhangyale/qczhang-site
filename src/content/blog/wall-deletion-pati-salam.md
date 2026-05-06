---
title: "Why Quark Charges Come in Thirds: A Geometric Bridge to Pati–Salam Unification"
description: "A new paper finds that the Pati–Salam (B−L)/2 generator hides inside Twistor Configuration Geometry — the first time TCG produces gauge-algebraic content of any kind. The bridge falls one rung short of the full Standard Model, but the missing rung is sharply identified."
pubDate: 2026-05-05
pinned: true
---

In 1973, Jogesh Pati and Abdus Salam noticed something striking. The Standard Model treats quarks and leptons as fundamentally distinct objects — quarks come in three colors, leptons come in none. But what if those three colors and the lepton's "no-color" were really four versions of the same thing? Then $SU(3)$ color, plus a fourth slot for the lepton, would extend to $SU(4)$. They proposed exactly this: a unification group $SU(4) \times SU(2)_L \times SU(2)_R$ in which the lepton is "the fourth color." Their proposal predicted a new abelian charge, $(B-L)/2$, that takes a specific value: $+1/6$ for quarks and $-1/2$ for leptons. Half a century later, the Pati–Salam construction remains one of the cleanest motivations for the strange fractional charges of the Standard Model — a quark's $+2/3$ and $-1/3$ are not random integers in disguise; they are pieces of a deeper unification structure.

A new paper, posted today on Zenodo, finds that this exact $(B-L)/2$ structure hides inside Twistor Configuration Geometry — the program for deriving the constants of nature from a stratified configuration space over twistor space. The bridge is more conservative than a full Standard Model derivation; it lands one rung short of full hypercharge. But it is the first time TCG produces gauge-algebraic content of any kind, and the structure it uncovers is unmistakably Pati–Salam.

## The Setup: Chambers Become Weyl Chambers

To explain what's new, start with what TCG was. The framework, in the form developed in the FPA model construction paper, takes a configuration space of $r$ ordered points on an oriented interval, decomposes it into $r!$ ordering chambers, and identifies the chamber count with a coupling-sector observable. The bookkeeping is rich: stratum $n=2$ has $2! = 2$ chambers, stratum $n=3$ has $4! = 24$ chambers. These counts feed into formulas for the fine-structure constant $\alpha$, the strong coupling, and the cosmological constant.

The construction paper makes a passing observation: $r! = |W(A_{r-1})|$, the order of the Weyl group of the type-$A$ root system. This is a small remark — the chamber count happens to equal a Weyl-group order — but it points at a much richer structure. The Weyl group of $A_{r-1}$ doesn't just have an order; it acts on a Cartan subalgebra, with simple roots, weights, and a classification of representations. If TCG chambers are Weyl chambers in this stronger sense, the framework inherits all of that machinery.

The new paper takes that step. It names the strengthening explicitly as a postulate — P7, the *Weyl-lift postulate* — and then asks: what does the resulting Cartan structure deliver?

## The Surprise: $A_3$ Is the Right Algebra

With the rank rule $r_n = 2n - 2$, the relevant strata carry root systems of trivial, $A_1$, and $A_3$ type — the algebras $\mathfrak{su}(2)$ and $\mathfrak{su}(4)$, with total rank $0 + 1 + 3 = 4$. That total rank exactly matches the Standard Model rank ($SU(3) \times SU(2) \times U(1)$ has rank $2 + 1 + 1 = 4$).

But the algebras don't match. TCG's $\mathfrak{su}(2) \oplus \mathfrak{su}(4)$ is not the same as the Standard Model's $\mathfrak{su}(3) \oplus \mathfrak{su}(2) \oplus \mathfrak{u}(1)$. One has dimension $3 + 15 = 18$; the other has dimension $8 + 3 + 1 = 12$. The naive identification fails.

What's striking — and the paper's principal observation — is that $\mathfrak{su}(4)$ is exactly the algebra in which $\mathfrak{su}(3) \oplus \mathfrak{u}(1)$ embeds as a Levi subalgebra. The $A_3$ Dynkin diagram is a chain of three nodes; deleting an end node leaves $A_2$, which is $\mathfrak{su}(3)$. The deleted node contributes a $\mathfrak{u}(1)$ Cartan generator. Combined with the un-deleted $A_1 = \mathfrak{su}(2)$ from stratum $n=2$, you arrive at $\mathfrak{su}(3) \oplus \mathfrak{su}(2) \oplus \mathfrak{u}(1)$ — the abstract Lie algebra of the Standard Model gauge group.

The paper calls this operation **wall deletion**. Geometrically, it corresponds to projecting the $A_3$ Cartan along the deleted-root direction.

## What the U(1) Is — and Isn't

Here's where it gets interesting. The Standard Model has a specific $U(1)$ — weak hypercharge $Y$ — with definite values on each fermion: $+1/6$ for the left-handed quark doublet, $+2/3$ for $u_R$, $-1/3$ for $d_R$, $-1/2$ for the lepton doublet, $-1$ for $e_R$. These values aren't arbitrary; they encode the embedding of $U(1)_Y$ into a larger structure.

The wall-deletion construction produces a $U(1)$ generator. The paper computes it explicitly: it's the fundamental weight $\omega_3 = \tfrac{1}{4}(1, 1, 1, -3)$ in the standard $\mathbb{R}^4$ realization of $A_3$. Acting on the fundamental representation $\mathbf{4}$ — which decomposes as three components plus one — it takes the eigenvalues $(1/4, 1/4, 1/4, -3/4)$. The eigenvalue ratio between the triplet and the singlet is $1 : -3$.

That ratio matches Pati–Salam $(B-L)/2$ exactly. In the Pati–Salam picture, quarks have $(B-L)/2 = +1/6$ and leptons have $(B-L)/2 = -1/2$; the ratio is $1 : -3$. The TCG wall-deletion direction is proportional to $(B-L)/2$ — same ratio, just rescaled by a factor of $3/2$ in the standard normalization.

This is the paper's main finding, and it is sharp. The wall-deleted $U(1)$ is not Standard Model hypercharge $Y$. It's the Pati–Salam abelian generator $(B-L)/2$, the thing that comes out of $SU(4) \to SU(3) \times U(1)_{B-L}$. To check the identification beyond the fundamental, the paper computes the $\omega_3$ eigenvalues on the antisymmetric $\mathbf{6}$ — the representation in which two quarks combine to form a "diquark" — and finds $(B-L)/2 = +1/3$ there, exactly matching the Pati–Salam diquark charge. Same identification, second representation, same answer.

## What's Missing

If TCG gave you weak hypercharge $Y$, the construction would be a derivation of the Standard Model gauge group. It doesn't. Instead, it gives you $(B-L)/2$ — one piece of the Pati–Salam picture. To recover full Standard Model hypercharge, you also need $T_{3R}$, the diagonal generator of an additional $SU(2)_R$ factor in the Pati–Salam group:

$$Y = T_{3R} + \frac{B-L}{2}$$

TCG doesn't supply that $SU(2)_R$. The strata $n = 1, 2, 3$ give you one $SU(2)$ at stratum $n = 2$ (which the paper identifies with $SU(2)_L$), but no second one.

The paper is honest about what this means. It correctly reproduces SM hypercharges on left-handed multiplets — the ones where $T_{3R} = 0$, so $Y = (B-L)/2$ exactly. For the left-handed quark doublet, both Pati–Salam and SM say $Y = +1/6$, and TCG delivers it. For the lepton doublet, $Y = -1/2$, again delivered.

For the right-handed multiplets, where $T_{3R} \neq 0$, TCG falls short. The right-handed up-quark $u_R$ has SM hypercharge $Y = +2/3$, decomposed as $T_{3R} = +1/2$ plus $(B-L)/2 = +1/6$. TCG delivers the $+1/6$ correctly but is short the $+1/2$ contribution. Same for $d_R$ ($Y = -1/3$, missing $T_{3R} = -1/2$) and $e_R$ ($Y = -1$, missing $T_{3R} = -1/2$).

So the bridge lands one rung short. TCG with strata $n \leq 3$ delivers a sub-algebra of Pati–Salam, missing the $SU(2)_R$ factor. From there, the Pati–Salam → SM breaking $SU(2)_R \times U(1)_{B-L} \to U(1)_Y$ is well-understood symmetry-breaking physics that TCG doesn't have to derive. But finding a TCG source for that missing $SU(2)_R$ — that's the principal open question the paper raises, pre-registered as Q4.

## The Open Questions

The paper pre-registers four diagnostic questions that any future development of this bridge will have to answer:

> **Q1 (resolved here)**: The wall-deleted $U(1)$ is the Pati–Salam $(B-L)/2$ generator, with explicit eigenvalue match on the $\mathbf{4}$ and the $\mathbf{6}$.
>
> **Q2 (open)**: What within TCG selects the end-deletion of $A_3$ rather than the center deletion? Both are mathematically possible; only one matches Pati–Salam.
>
> **Q3 (open)**: Does TCG predict the Standard Model fermion content — the specific representations and three generations?
>
> **Q4 (principal new gap)**: Where does the missing $SU(2)_R$ come from? Three candidate sources are listed; the most conservative is a "doubled stratum-2" modification that would also encode chirality automatically.

The Q4 doubled-stratum-2 candidate carries an interesting feature: if it's the answer, then chirality — left-handed versus right-handed — becomes derived from which copy of stratum $n = 2$ a configuration belongs to, rather than imposed by hand. That's a significant structural payoff if it works. But it carries a sharp pre-registered constraint: the second $A_1$ must not contribute to the chamber-volume functional, or else the existing TCG numerical anchors — the $\pi + \pi^2 + 4\pi^3$ relation that fixes $\alpha^{-1}$ at the electron scale — would shift, breaking what already works.

## Why It Matters

This isn't a discovery paper. There's no new prediction at experimentally accessible scales, no new numerical relation to test against measurement. The forward-prediction lineup of TCG — the spin-1 fifth force, the cosmological-constant relation, the lepton-mass golden-ratio pattern — is unchanged.

What the paper does is fill a structural slot that was previously empty. Before today, TCG had no gauge-group content. The chamber counts mapped to coupling observables, the matching counts mapped to mass observables, but the gauge group itself was absent from the framework. After today, TCG has a Pati–Salam sub-algebra reaching, conditional on the new postulate P7, with a sharp identification of which piece of physics ($(B-L)/2$) it captures and which piece ($T_{3R}$, hence full hypercharge) it doesn't.

For a research program whose stated long-term goal is *deriving more physics from TCG*, this is a step on a specific axis. The BDNC bundle, published earlier this week, was a step on the photon-physics axis. This paper is a step on the gauge-structure axis. The two are complementary; both work from the same TCG foundation; both reach conditional bridges to broader physical pictures.

The structural pattern that emerges is suggestive even where the bridge is incomplete. Pati–Salam unifies a quark color triplet and a lepton into a single $SU(4)$ multiplet, treating "lepton" as the "fourth color." That same structure appears here as the $A_3$ fundamental representation $\mathbf{4}$ at stratum $n=3$ — three color-equivalent components plus one singlet. The geometry doesn't have to know about quark–lepton unification, but the pattern matches.

What's not delivered is delivered honestly. Recovering the full Standard Model would require closing the missing-$SU(2)_R$ question, and the paper marks that as the principal open structural gap rather than papering over it. A reviewer can read the four pre-registered questions and tell exactly what TCG has reached, what it hasn't, and what would have to happen for it to reach further.

For a program that tries to derive the constants of nature from geometry, that level of explicit accounting is the right way to make progress. Discovery papers come when discoveries arrive. Structural papers come when the framework's reach gets one rung longer, and the rung above is named precisely. This is one of the latter.

The paper, *Wall Deletion in Twistor Configuration Geometry: A $(B-L)$ Quantization Bridge to Pati–Salam Unification*, is on Zenodo (DOI [10.5281/zenodo.20045987](https://doi.org/10.5281/zenodo.20045987), CC-BY-4.0). It is 19 pages, with three diagnostic-question tables and one explicit calculation that any reader can verify in five minutes.
