---
title: "Which Wall?"
description: "The wall-deletion note showed that deleting one node from the A₃ Dynkin diagram pulls the Pati–Salam color group out of the chamber structure — but only if you delete an end node, and it left open which wall the framework chooses and why (its question Q2). Today's note answers it, and the answer is a clean lesson in picking-for-a-reason versus deriving. First the deflation: bare A₃ does not force the color wall. The most natural symmetry invariant — the cubic U(1) anomaly on the fundamental 4 — vanishes for the center node and is nonzero for the ends, so 'minimize the anomaly' selects the center wall, the wrong one. The Pati–Salam wall is genuinely not smuggled in, but it is not free either. What selects it is the most ordinary principle in the symmetry-breaking toolkit: minimal breaking. The end-node deletion breaks 6 of su(4)'s 15 generators against the center's 8 — fewer broken generators, larger residual symmetry — so a self-energy that costs broken generators picks the color wall. But minimal breaking is a supplied ansatz, not a theorem (different Higgs potentials select different little groups), so the closure is conditional. It lands at Pati–Salam color, not the full Standard Model; it does not close the deeper action-level residual X_wall-pol; and it adds no new postulate. The value is methodological: the wall the framework needs is the one a standard energetic principle selects — a reason for the wall, not a proof of it."
pubDate: 2026-06-25
---

The [wall-deletion note](/papers/19-wall-deletion-pati-salam/) left a question hanging. To pull the Pati–Salam color group out of [the framework](/papers/03-tcg-fpa-model/)'s chamber structure, you delete a single node from the $A_3$ Dynkin diagram — and the abelian factor that survives turns out to be the Pati–Salam $(B-L)/2$ generator, not Standard Model hypercharge. But $A_3$ has three nodes, and only the two *end* nodes leave an $\mathfrak{su}(3)$. Deleting the center node gives $\mathfrak{su}(2)\oplus\mathfrak{su}(2)$ instead. So which wall does the framework delete — and what, internally, chooses it? The wall-deletion note registered this as its open question Q2 and left it there. Today's short note answers it. The answer is a small, clean lesson in the difference between picking something for a reason and deriving it.

## Three walls

Under postulate $P_7$, the $n = 3$ stratum of the chamber construction carries the root system $A_3 \cong \mathfrak{su}(4)$. Deleting one simple root reduces $\mathfrak{su}(4)$ to a smaller subalgebra — a *Levi* — together with a leftover $\mathfrak{u}(1)$. There are three single-node deletions, and the fundamental $\mathbf 4$ tells them apart:

| delete | $U(1)$ charges on $\mathbf 4$ | $\mathbf 4 \to$ | unbroken | broken gens |
|---|---|---|---|---|
| $\alpha_1$ | $(\tfrac34,-\tfrac14,-\tfrac14,-\tfrac14)$ | $\mathbf 1\oplus\mathbf 3$ | $\mathfrak{su}(3)\oplus\mathfrak{u}(1)$ | $6$ |
| $\alpha_2$ | $(\tfrac12,\tfrac12,-\tfrac12,-\tfrac12)$ | $\mathbf 2\oplus\mathbf 2$ | $\mathfrak{su}(2)\oplus\mathfrak{su}(2)\oplus\mathfrak{u}(1)$ | $8$ |
| $\alpha_3$ | $(\tfrac14,\tfrac14,\tfrac14,-\tfrac34)$ | $\mathbf 3\oplus\mathbf 1$ | $\mathfrak{su}(3)\oplus\mathfrak{u}(1)$ | $6$ |

The two end nodes are mirror images — charge conjugates of each other — and both give $\mathfrak{su}(3)\oplus\mathfrak{u}(1)$, with the $\mathfrak{u}(1)$ proportional to $(B-L)/2$: the Pati–Salam color wall. The center node gives the inequivalent left–right pattern $\mathfrak{su}(2)\oplus\mathfrak{su}(2)\oplus\mathfrak{u}(1)$. So Q2 is really a binary — the color wall, or the left–right wall.

## The obvious invariant points the wrong way

There is a deflationary objection to clear first. *You delete the end node because you want $SU(3)$ color — that is not a derivation, it is the answer written in by hand.* Is there any reason, intrinsic to $A_3$, to prefer the end node?

The natural place to look is the cubic anomaly. For a $U(1)$ acting on the $\mathbf 4$, the gauge-invariant cubic charge sum $\sum q^3$ is the canonical thing to compute. Work it out: the center node gives $\sum q^3 = 0$, and the end nodes give $\pm\tfrac{3}{8}$. The center node is *vectorlike* — its charges come in $\pm$ pairs — while the end nodes are chiral.

So if you reach for the obvious symmetry criterion — minimize the anomaly, prefer the clean vectorlike option — you select the **center** node. The wrong one. Bare $A_3$, judged by its most natural invariant, points *away* from the Pati–Salam wall.

This is worth sitting with, because it cuts both ways. It means the color wall is genuinely *not* smuggled in: nothing in the bare group theory forces it, and the first invariant you would try actively disfavors it. But it also means the color wall is not free. If $A_3$ does not select it, something else has to.

## The principle you have to supply

That something is an energetic principle, and it is the most ordinary one in the symmetry-breaking toolkit: minimal breaking.

Count the generators each deletion breaks. $\mathfrak{su}(4)$ has 15; the end-node Levi $\mathfrak{su}(3)\oplus\mathfrak{u}(1)$ has 9, so 6 break; the center-node Levi has 7, so 8 break. The end-node wall breaks *fewer* generators — equivalently, it preserves a *larger* residual symmetry. A symmetry-breaking energy generically costs broken generators, so a self-energy that increases with the number of broken generators prefers the end node. This is precisely Michel's picture of spontaneous symmetry breaking, in which the patterns are ordered by their residual symmetry and the maximal-residual-symmetry configurations are the canonical critical points of an invariant energy.

> The framework does not force the wall. It selects it — conditional on a principle you supply.

So the selection works, and it lands on the color wall. But notice what kind of statement it is. Minimal breaking is an *ansatz* on the selecting functional, not a theorem about $A_3$. And it is a well-known fact — Li catalogued it in 1974 — that invariant Higgs potentials with different quartic couplings select different little groups; maximal residual symmetry is the standard heuristic, not a universal law. The closure is therefore conditional: *if* the wall-selection energetics are minimal-breaking, the end node wins.

The cleanest way to see the structure is to sort the natural invariants by whether they could serve as a vacuum energy. On one side — broken-generator count, residual-symmetry dimension, minimal nilpotent orbit — every *energetic* criterion picks the end node. On the other — diagram symmetry, self-duality, balanced branching, vanishing anomaly — the criteria that favor the center are matters of canonicity and consistency, not vacuum energy. The anomaly entry is genuinely physical, but anomaly cancellation is a constraint on a theory's matter content, not a self-energy of a wall. A functional that *minimizes an energy* runs on the first column, and the first column says: color wall.

## What it settles, and what it doesn't

The honest accounting is short.

It is **conditional, not forced.** Refuse the minimal-breaking ansatz and Q2 reopens; the competing center-favoring criteria are laid out in the open, not swept aside.

It lands at **Pati–Salam color, not the Standard Model.** The wall fixes $\mathfrak{su}(3)\oplus\mathfrak{u}(1)_{(B-L)/2}$; the missing $\mathfrak{su}(2)_R$ and full hypercharge are a separate, untouched gap.

And it does **not** close the deeper residual. One structural layer below Q2 sits a different question — which compatible pure-spinor polarization the $\mathrm{Spin}(10)$ condensate actually selects, the residual called $X_{\rm wall\text{-}pol}$ — which was [proved obstructed](/papers/32-pure-spinor-condensation-obstruction/) at the level of the native action. Q2 — *which wall* — is logically prior to that; answering it supplies the boundary condition, but the action-level obstruction stays exactly where it was.

No new postulate is added. The [active ledger](/papers/39-structural-state-review/) does not move.

## Verdict

The result is a conditional closure of Q2: bare $A_3$ does not force the color wall — the obvious invariant even points the other way — but a minimal-breaking principle selects it, uniquely up to the charge-conjugation symmetry of the two end nodes.

It is worth being clear about the size of this. The physical kernel — that minimal breaking prefers the smaller coset $SU(3)\times U(1)$ over $SU(2)\times SU(2)\times U(1)$ — is textbook grand-unification lore. What the note contributes is not new physics but discipline: it shows that the wall the framework needs is the one a standard energetic principle selects, it is honest that bare symmetry does not force that selection, and it keeps the deeper residual visibly open rather than quietly absorbing it. The maturity register is that of a [conditional closure](/papers/38-ahs-conditional-closure/), not a derivation.

The upgrade that would change the register is clear: derive the minimal-breaking energetics from the framework's own postulates, rather than supplying them. That would turn the conditional selection into a forced one. Until then it is a reason for the wall — not a proof of it.

The note is *A Minimal-Breaking Principle Selects the Pati–Salam Wall*, on Zenodo (DOI [10.5281/zenodo.20839019](https://doi.org/10.5281/zenodo.20839019); CC-BY-4.0). Ten pages, ten references.
