---
title: "m_p/m_e ≈ 6π⁵: A 75-Year-Old Coincidence, Reframed"
description: "The proton-to-electron mass ratio is almost exactly 6π⁵. Friedrich Lenz noticed this in 1951; nothing has explained it in seventy-five years. A new paper shows the formula has a home — not as an extension of the TCG flag, but as a Pati–Salam representation-volume invariant. The naive geometric reading fails; a representation-theoretic one works. The Lenz coefficient is the chamber-weighted volume of P(∧²4), the projective space of antisymmetric color-lepton states. This is not a derivation, but it gives the formula a sharp address inside the program."
pubDate: 2026-05-08
---

In the spring of 1951, the German physicist Friedrich Lenz wrote one of the strangest letters ever published in *Physical Review*. The entire submission was three sentences long. The first introduced the observation; the second gave the equation; the third was a citation. He had no theory. He had no derivation. He just noticed that the proton-to-electron mass ratio — a number that had been measured to about three or four significant figures by then — was almost exactly $6\pi^5$.

The match was striking enough at 1951 precision. With seventy-five years of additional measurement it has only sharpened. The CODATA 2022 recommended value is

$$
\frac{m_p}{m_e} \;=\; 1836.152\,673\,426(32),
$$

measured to twelve significant figures. Computing the geometric expression Lenz wrote down:

$$
6\pi^5 \;=\; 1836.118\,108\ldots
$$

The two agree to about two parts in a hundred thousand. That is not a typo. And in seventy-five years, despite the proton mass being one of the most studied quantities in physics — the entire industry of lattice QCD computes it from the strong interaction with sub-percent precision — no one has explained why the ratio sits so close to such a clean closed form in $\pi$.

The Standard Model treats $m_p/m_e$ as an input. Lattice QCD computes the proton mass numerically but does not derive *why* the answer is what it is. Lenz's observation has, for three quarters of a century, been a kind of footnote: a numerical curiosity that the field has been unable to either dismiss as coincidence or absorb into theory.

A new paper I posted to Zenodo today does not derive Lenz's formula. It does something narrower but useful: it gives the formula a sharp address inside Twistor Configuration Geometry — the program for organizing the constants of nature as invariants of a stratified configuration space over twistor space. The paper is honest about the limits: the address is structural, not derivational. But the framework now has a place for $6\pi^5$ that it did not have last week.

The path to that address has a wrong turn that has to be closed first.

## The Wrong Turn: Adding a Fourth Stratum

The TCG framework, in its FPA realization, organizes its outputs around three projective spaces, the chain $\mathbb{CP}^1 \subset \mathbb{CP}^2 \subset \mathbb{CP}^3$. The spaces have a "rank rule" $r_n = 2n-2$ — the rank-$r_n$ data live on the $n$-th projective space — and the framework's outputs at each stratum are weighted volumes:

$$
r_n! \cdot \mathrm{Vol}_{\mathrm{FS}}(\mathbb{CP}^n).
$$

For $n = 1, 2, 3$ these terms equal $\pi$, $\pi^2$, $4\pi^3$, summing to $\pi + \pi^2 + 4\pi^3 \approx 137.04$ — the empirical $1/\alpha$ at 2.2 ppm. That sum is one of the quietly impressive matches in the framework.

Now look at $6\pi^5$. With $r_4 = 2(4)-2 = 6$ and $\mathrm{Vol}_{\mathrm{FS}}(\mathbb{CP}^5) = \pi^5/120$, you get

$$
6\pi^5 \;=\; r_4! \cdot \mathrm{Vol}_{\mathrm{FS}}(\mathbb{CP}^5) \;=\; 720 \cdot \frac{\pi^5}{120}.
$$

The temptation is overwhelming: just add a fourth stratum. Extend the flag to $\mathbb{CP}^1 \subset \mathbb{CP}^2 \subset \mathbb{CP}^3 \subset \mathbb{CP}^4$. Read $6\pi^5$ as the chamber-weighted volume at the new top.

The temptation has to be resisted, on two grounds.

**First, the arithmetic doesn't work.** The native $n=4$ volume is $r_4! \cdot \mathrm{Vol}_{\mathrm{FS}}(\mathbb{CP}^4) = 30\pi^4 \approx 2922$. That is *not* $6\pi^5 \approx 1836$. The Lenz expression mixes indices: it uses the line-deformation rank $r_4 = 6$ from the would-be $n=4$ stratum but the volume of $\mathbb{CP}^5$ from the would-be $n=5$. Adding $30\pi^4$ to the existing fine-structure functional would also push $1/\alpha$ to roughly $3060$, breaking the empirical match.

**Second, the Lie algebra goes the wrong way.** A companion paper introduced last week (the wall-deletion paper) shows that the framework's chamber count $r_3! = 24$ at $n = 3$ already carries the structure of the $A_3$ root system, whose Lie algebra is $\mathfrak{su}(4)$. This is the Pati–Salam unification group — the algebra that puts the lepton in alongside the three quark colors as a "fourth color." If the framework went one step further to $n = 4$, the chamber count $r_4! = 720$ would correspond to $A_5$, whose Lie algebra is $\mathfrak{su}(6)$. That isn't Pati–Salam. It isn't anything the framework needs.

So Pati–Salam $SU(4)$ motivates *rank-four* data, not *stratum-four* data. The naive flag extension closes negatively. The Lenz expression has to come from somewhere else.

## The Right Turn: A Representation Space

Here is where a different kind of geometry enters.

The Pati–Salam unification group $SU(4)$ has, like every Lie group, a list of natural representation spaces. The simplest is the fundamental, the four-dimensional $\mathbf{4}$ — the "three colors plus one lepton" of the unified picture. Past that come representations built from products and antisymmetrizations: $\mathbf{4} \otimes \mathbf{4}$, the antisymmetric piece $\wedge^2 \mathbf{4}$, the symmetric piece $\mathrm{Sym}^2 \mathbf{4}$, the adjoint $\mathbf{15}$, and so on.

The dimension of $\wedge^2 \mathbf{4}$ is $\binom{4}{2} = 6$. So the projectivization $\mathbb{P}(\wedge^2 \mathbf{4})$ — the space of one-dimensional rays in $\wedge^2 \mathbf{4}$ — is $\mathbb{CP}^5$. This is canonical: any time you have a six-dimensional complex vector space, its projectivization is a $\mathbb{CP}^5$.

Now compute the chamber-weighted volume the way the framework does for its own strata, but for this representation space:

$$
\dim(\wedge^2\mathbf{4})! \cdot \mathrm{Vol}_{\mathrm{FS}}\big(\mathbb{P}(\wedge^2\mathbf{4})\big) \;=\; 6! \cdot \mathrm{Vol}_{\mathrm{FS}}(\mathbb{CP}^5) \;=\; 720 \cdot \frac{\pi^5}{120} \;=\; 6\pi^5.
$$

That is the Lenz expression. Not as a fourth-stratum extension. As the chamber-weighted volume of the projectivized antisymmetric color-lepton representation of Pati–Salam $SU(4)$.

There is a structural observation that makes this much more than a coincidence of dimensions.

## The Plücker Connection

The space $\mathbb{P}(\wedge^2 \mathbb{C}^4) \cong \mathbb{CP}^5$ has a very specific role in geometry. It is the **Plücker ambient space** for the Grassmannian $G(2, 4)$ — the space of complex two-planes in $\mathbb{C}^4$, the moduli space of twistor lines.

The Plücker embedding takes a two-plane spanned by vectors $v, w \in \mathbb{C}^4$ and sends it to the wedge product $v \wedge w \in \wedge^2 \mathbb{C}^4 \cong \mathbb{C}^6$. Up to overall scale, this gives a point in $\mathbb{CP}^5$. The Grassmannian $G(2, 4)$ embeds as a four-dimensional hypersurface in $\mathbb{CP}^5$, cut out by a single quadratic equation.

Why does this matter? Because $G(2, 4)$ is not a generic Grassmannian. It is the *moduli space of twistor lines* — the space whose points label the projective lines $\mathbb{P}^1 \hookrightarrow \mathbb{CP}^3$ that are the heart of Penrose's twistor program. Every line in twistor space is a point in $G(2, 4)$. And the line-deformation bundle on which the framework's most recent electroweak postulate lives ($P5'$, $g_{2,W}^2 = 4/(3\pi)$) sits over this same $G(2, 4)$.

So the $\mathbb{CP}^5$ that appears in $6\pi^5 = 6! \cdot \mathrm{Vol}(\mathbb{CP}^5)$ is not an arbitrary fifth projective space chosen because it happens to give the right number. It is the projective space inside which the moduli of twistor lines naturally embeds. The same geometry that gives the framework its electroweak ratio gives the framework its proton-to-electron ratio.

The paper records this as the strongest non-numerical argument for taking the Pati–Salam reframing seriously. $\mathbb{CP}^5$ as Plücker ambient: that is the structural anchor.

## A New Postulate: $P_H'$

The paper introduces this as a new postulate in the framework's ledger:

$$
P_H' : \quad \mathcal{L}_H \;=\; \dim(\wedge^2\mathbf{4})! \cdot \mathrm{Vol}_{\mathrm{FS}}\big(\mathbb{P}(\wedge^2\mathbf{4})\big) \;=\; 6\pi^5,
$$

identified phenomenologically with $m_p/m_e$. Like the $P5'$ replacement of two weeks ago, $P_H'$ is a *phenomenological boundary condition*, not a theorem. The chamber-weighted volume identity is mathematically exact — there is no fitting parameter, no normalization knob. The identification with $m_p/m_e$ is empirical.

The active TCG postulate ledger now reads $P0$–$P4$, $P5'$, $P6$, $P7$, $P_H'$: seven core postulates plus the wall-deletion Weyl-lift and the new hadronic representation-volume condition. The framework gains a hadronic-sector handle; nothing else changes.

## What the Paper Does Not Do

The paper is explicit about five things it does not derive.

**Why the electron, not the muon.** Pati–Salam $SU(4)$ unifies leptons and colors, but it does not single out the electron. The Lenz observation uses $m_e$ as the lepton-sector reference; choosing $m_\mu$ or $m_\tau$ instead would give numbers far from any clean closed form. The framework selects the electron *a posteriori* through the empirical match, not through a structural argument inside $P_H'$ alone. (A separate argument from earlier in the program — the "electron as architectural particle" paper — gives five simultaneous reasons why the electron is uniquely placed, but $P_H'$ does not invoke that argument internally.)

**Why a 2-body representation matches a 3-quark proton.** The representation $\wedge^2 \mathbf{4}$ is a two-body sector — under the Pati–Salam decomposition, it splits as $(\bar{\mathbf{3}}, +2/3) \oplus (\mathbf{3}, -2/3)$, an antisymmetric color piece and a quark-lepton mixed piece. A proton is a three-quark $|uud\rangle$ bound state. The paper does not construct the proton state from the representation theory. Some bridge — perhaps a three-body factorization through pairs of two-body states — is needed.

**Why $S_6$ and not the Weyl group.** The chamber count $6! = 720$ in the Lenz expression is *not* the order of the Pati–Salam Weyl group, which is $|S_4| = 24$. The factorial is what the framework calls a "representation-slot count" — what you get if you treat the six basis vectors of $\wedge^2 \mathbf{4}$ as labeled FPA configuration slots. Why this and not the Weyl-group action on the six two-subsets is one of the open derivation questions.

**Second-hadronic-prediction audit closed negatively (v2).** The postulate $P_H'$ organizes one number, $m_p/m_e$. To become more than a beautiful one-off reading, it should organize at least one second hadronic ratio under the same strict grammar $X_R = \dim(R) \cdot \pi^{\dim(R)-1}$. A pre-registered audit in v2 of the paper tested three candidates — kaon/pion $(m_K/m_\pi)^2 \approx 4\pi$ at $-0.44\%$, Schwinger $\alpha/(2\pi)$, and top Yukawa $y_t \approx 1$ — and none survives without post-hoc grammar generalization. $P_H'$ is therefore reclassified as a *single-anchor phenomenological structural reading of the Lenz ratio* rather than a candidate generative rule. The kaon/pion $\sqrt{4\pi}$ match remains empirically interesting but is not a $P_H'$ hit.

**Look-elsewhere discipline.** The paper commits explicitly to adding *exactly one* new object to the framework's audit-side strict grammar — the representation-volume invariant of $P_H'$ — not arbitrary $SU(4)$ representation volumes. The audit's prior trial-space estimate is preserved.

## What This Buys

For seventy-five years the Lenz formula has lived as a numerical curiosity. Eddington-style coincidences are the kind of thing physicists usually file away with a slight wince — too clean to ignore, too unexplained to use, often dismissed as numerology.

This paper does not change that for the rest of the unexplained pattern collection. But for $6\pi^5$ specifically, the paper does something narrow and specific: it gives the formula a place inside an architecture. The same Pati–Salam $SU(4)$ structure that the framework already produces at the top of its existing flag carries with it, by representation theory alone, a $\mathbb{CP}^5$. The same $\mathbb{CP}^5$ is the ambient space of the moduli of twistor lines — the geometry that controls the rest of the program. And the chamber-weighted volume of that $\mathbb{CP}^5$ is exactly $6\pi^5$, with no parameters.

The paper does not turn Lenz from numerology into physics. But it converts Lenz from a free-floating coincidence into a postulate-level structural commitment with a sharp open question. That is a smaller move than a derivation, and a much larger move than nothing. Whether the question can be answered — whether a Pati–Salam-based hadronic state-sum will eventually produce $6\pi^5$ as a derived theorem rather than a postulated identity — is for future work.

For now, the formula has an address.

---

*The paper "Pati-Salam Representation Volumes and the Lenz Proton-Electron Ratio in Twistor Configuration Geometry" was posted to Zenodo on 2026-05-07 under DOI [10.5281/zenodo.20102322](https://doi.org/10.5281/zenodo.20102322). It is the eighteenth paper in the DAEDALUS / TCG arc, available CC-BY-4.0.*
