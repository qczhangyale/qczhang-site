---
title: "A Minimal-Breaking Principle Selects the Pati–Salam Wall: A Conditional Closure of the Wall-Selection Question in Twistor Configuration Geometry"
shortTitle: "Wall Selection / Minimal Breaking"
doi: "10.5281/zenodo.20839019"
date: 2026-06-25
order: 41
category: foundations
description: "Answers the pre-registered wall-selection question Q2 of the Wall Deletion note: among the three single-node deletions of A₃ ≅ su(4) at stratum n = 3, which one does TCG select? Bare A₃ forces no selector — the cubic U(1) anomaly on the 4 favors the center node while the broken-generator count favors the end nodes (the gauge-level analog of the substrate order-parameter ambiguity). Conditional on a minimal-breaking (maximal-residual-symmetry) self-energy ansatz — a standard maximal-little-group heuristic in the Michel stratification of spontaneous symmetry breaking, though not forced — the end-node deletion SU(4) → SU(3)_C × U(1)_(B−L)/2 (Pati–Salam color) is selected uniquely up to charge conjugation over the center-node SU(2) × SU(2) × U(1), via the broken-generator count 6 < 8. The selector landscape splits into wall-self-energy criteria (which select the end node) and canonicity/representation/consistency criteria (which favor the center; the vanishing cubic anomaly is physical but not a wall self-energy). Gauge-arc-internal and ledger-free: the deeper action-level residual X_wall-pol is orthogonal and remains open, the missing su(2)_R is untouched, and minimal breaking is a supplied ansatz, not forced. Introduces NO new postulate and NO new active-ledger residual. Maturity register: conditional-closure construction note, peer of the AHS substrate closure."
keyFormula: "dim(su(4)/l) = 6, 8, 6  ⟹  SU(4) → SU(3)_C × U(1)_(B−L)/2"
---

## Abstract

The [Wall Deletion note](/papers/19-wall-deletion-pati-salam/) promoted the chamber decomposition of [Twistor Configuration Geometry (TCG)](/papers/03-tcg-fpa-model/) to a full type-$A$ Weyl-arrangement structure (postulate $P_7$) and showed that a single *wall deletion* at stratum $n = 3$ — the parabolic Levi reduction induced by deleting one simple root from the $A_3 \cong \mathfrak{su}(4)$ Dynkin diagram — lands at the Pati–Salam color subalgebra $\mathfrak{su}(3)\oplus\mathfrak{u}(1)_{(B-L)/2}$ *provided the deletion is at an end node*; the center node instead gives $\mathfrak{su}(2)\oplus\mathfrak{su}(2)\oplus\mathfrak{u}(1)$. That note pre-registered, as its principal open question (Q2), *what within TCG selects which simple root to delete?*

This note supplies a candidate selection principle. We organize the three single-node deletions as the sectors of a wall-selection functional and show: (i) the bare Weyl-arrangement data admit several inequivalent natural invariants that do not agree on a single deletion — the gauge-level analog of the order-parameter ambiguity of the [substrate obstruction theorem](/papers/37-substrate-obstruction/) — so no selection principle is forced by $A_3$ alone; (ii) conditional on a minimal-breaking (maximal-residual-symmetry) self-energy ansatz, the end-node deletion $SU(4)\to SU(3)_C\times U(1)_{(B-L)/2}$ is selected uniquely up to charge conjugation.

## The three wall deletions

| delete | $U(1)$ charges on $\mathbf 4$ | $\mathbf 4 \to$ | Levi | broken gens |
|---|---|---|---|---|
| $\alpha_1$ | $(\tfrac34,-\tfrac14,-\tfrac14,-\tfrac14)$ | $\mathbf 1\oplus\mathbf 3$ | $\mathfrak{su}(3)\oplus\mathfrak{u}(1)$ | $6$ |
| $\alpha_2$ | $(\tfrac12,\tfrac12,-\tfrac12,-\tfrac12)$ | $\mathbf 2\oplus\mathbf 2$ | $\mathfrak{su}(2)\oplus\mathfrak{su}(2)\oplus\mathfrak{u}(1)$ | $8$ |
| $\alpha_3$ | $(\tfrac14,\tfrac14,\tfrac14,-\tfrac34)$ | $\mathbf 3\oplus\mathbf 1$ | $\mathfrak{su}(3)\oplus\mathfrak{u}(1)$ | $6$ |

The end-node generator $\varpi_3 = \tfrac14(1,1,1,-3)$ is proportional to the Pati–Salam $(B-L)/2$ generator; the end nodes $\{\alpha_1,\alpha_3\}$ are exchanged by charge conjugation (the same color breaking). The center node $\alpha_2$ is the inequivalent left–right breaking.

## Minimal breaking selects the end node

Bare $A_3$ does not force a selector: the cubic $U(1)$ anomaly $\sum q^3$ on the $\mathbf 4$ favors the center node ($\sum q^3 = 0$), while the broken-generator count favors the end nodes ($6 < 8$). Conditional on a *minimal-breaking* self-energy ansatz $w(S) = \phi\!\left(\dim(\mathfrak{su}(4)/\mathfrak{l}_S)\right)$ with $\phi' > 0$ — a standard maximal-little-group heuristic in the Michel stratification of spontaneous symmetry breaking, though not forced (different invariant potentials can select different little groups) — the end-node orbit carries the minimal self-energy and is selected.

The natural invariants split into two classes. **Wall-self-energy** criteria (minimal broken-generator count, maximal residual symmetry, minimal Richardson orbit $[2,1,1]$) all select the end node; **canonicity / representation / consistency** criteria (diagram-automorphism fixedness, self-duality of $\mathrm{Gr}(2,4)$, balanced branching, vanishing cubic anomaly) favor the center. The anomaly entry is genuinely physical but is not a self-energy of the wall-deletion sector; a dynamical, energy-minimizing functional selects the Pati–Salam end node.

## What is and isn't closed

The result is gauge-arc-internal and **conditional, not forced** — minimal breaking is a supplied ansatz, and the competing center-node selectors are exhibited explicitly. The selection lands at the Pati–Salam color subalgebra, not the full Standard Model: the missing $\mathfrak{su}(2)_R$ / hypercharge is untouched. The deeper *action-level* residual $X_{\rm wall\text{-}pol}$ of the [Pure-Spinor Condensation Obstruction](/papers/32-pure-spinor-condensation-obstruction/) — which pure-spinor polarization representative the $\mathrm{Spin}(10)$ condensate selects — is orthogonal to Q2 and remains open. The [configurable-universe reading](/papers/02-configurable-universe/) is preserved unchanged.

## Verdict

**Conditional-closure construction note** — conditional closure of the wall-selection question Q2 of the [Wall Deletion note](/papers/19-wall-deletion-pati-salam/) via a minimal-breaking principle; the Pati–Salam end-node deletion is selected uniquely up to charge conjugation; the closure is conditional, not forced. No new postulate and no new active-ledger residual are introduced; the maturity register is that of the [AHS substrate closure](/papers/38-ahs-conditional-closure/). The natural upgrade is to derive the minimal-breaking energetics from the active ledger, which would turn the conditional selection into a forced one.

Active TCG/τCG postulate ledger UNCHANGED:
$$P_0\text{--}P_4, \quad P_{5'}, \quad P_6, \quad P_7, \quad P_{H'}, \quad P_{SO(10)}.$$

**[Download paper (Zenodo)](https://doi.org/10.5281/zenodo.20839019)** — 10 pages, 10 references. CC-BY-4.0.
