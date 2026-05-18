---
title: "Pair-Channel Root-Wall Residue Addresses in Trace Configuration Geometry"
shortTitle: "Pair-Channel Root-Wall Residue Addresses"
doi: "10.5281/zenodo.20264444"
date: 2026-05-18
order: 36
category: foundations
description: "Boundary-defect-route construction sequel to Paper #35 (Hadronic Six-Slot Resolution, DOI:10.5281/zenodo.20262722), which named the residual P_pair^addr outside the active ledger. Two prior drafts retired: v1 set-indexing bijection Φ_+(A_3) ≅ Ω_2(S_4^FPA) (essentially a relabeling); v2 'Defect Operators' framing (overpromise). **Key structural shift**: from the boundary of one fundamental ordered chamber (electron P_4 sector, Paper #27) — primitive faces {12, 23, 34} — to the **full labeled chamber arrangement**, whose six diagonals H_ij = {x_i = x_j} are exactly the type-A_3 reflection hyperplanes of the braid arrangement. **Definition 3 (Root-wall residue algebra)**: Orlik-Solomon exterior incidence algebra A^*_OS(A_3) with generators {a_ij : 1 ≤ i < j ≤ 4} in lex order, square-free a_ij ∧ a_ij = 0, and standard Arnold-Orlik-Solomon circuit relations a_ij ∧ a_ik − a_ij ∧ a_jk + a_ik ∧ a_jk = 0 (i<j<k) derived from ∂ on the dependent triple {H_ij, H_ik, H_jk}. **Definition 6 (Pair-channel root-wall residue address)**: P_addr := Span_C{p_ij} is the formal pair-address vector space; basis {p_ij} in chosen-frame bijection with {e_i ∧ e_j} of ∧²4 — labeling correspondence between index sets of cardinality 6, NOT C-linear identification; no SU(4)-action induced on P_addr; the p_ij are formal symbols. The pair-channel root-wall residue-address generators are D_ij := a_ij ⊗ p_ij ∈ A^1_OS(A_3) ⊗ P_addr — cohomological, NOT QFT defect operators / Hilbert-space projectors / pair-Fock basis. **Proposition 10 (P_7 wall compatibility)**: {D_12, D_13, D_23} ⊔ {D_14, D_24, D_34} matches ∧²4 = ∧²C ⊕ (ℓ∧C) — structural content behind the 3+3 split noted in Paper #35. **Theorem 11 (Residue addresses do not derive the ordered trace)**: three independent obstructions — (i) W(A_3) ≅ S_4 (order 24) not S_6 (order 720); (ii) Orlik-Solomon circuit relations — algebra not free on six commuting slots; (iii) p_ij not automatic orthogonal projectors with unit counting trace. **Three-way residual decomposition (§7)**: P_pair^addr = P_pair^wall-res + P_pair^phys + P_pair^ord where only P_pair^wall-res is cohomologically realized by this paper via A^1_OS(A_3) ⊗ P_addr; P_pair^phys (physical defect realization — QFT operators, projectors, pair-Fock) and P_pair^ord (uniform ordered-saturation trace measure on Ord(Ω_2(S_4^FPA))) remain residual. **No-representation-scan license** (§7 Remark 12): construction specific to P_7/FPA four-slot carrier and type-A_3 chamber-wall arrangement; does NOT authorize d! · Vol_FS(P(R)) for arbitrary R. **Sharpened residual**: old (Paper #35) 'why physical pair-channel addressability?' → new 'why physical realization and uniform ordered trace over six root-wall pair addresses?' Verdict: partial positive — cohomological root-wall residue-address construction; no derivation of P_H'; no active-ledger change. Active TCG/τCG postulate ledger UNCHANGED: P_0–P_4, P_{5'}, P_6, P_7, P_H', P_{SO(10)}. Same maturity register as Papers #25 (Bitwistor Pair Channels, DOI:10.5281/zenodo.20111389), #28 (Compatible Pure-Spinor Polarizations, DOI:10.5281/zenodo.20129212), #34 (τCG Specification, DOI:10.5281/zenodo.20262057), and #35 (Hadronic Six-Slot Resolution, DOI:10.5281/zenodo.20262722): partial-positive mechanism note that names what successor theory must construct, without claiming the construction has been performed. Six failure modes F1-F6 (full-chamber vs fundamental-chamber confusion; weight-root conflation; ordered-trace failure; gauge-frame objection; physical-operator gap; QCD/proton specificity)."
---

## Abstract

The [hadronic six-slot resolution note](/papers/35-hadronic-six-slot-resolution/) sharpened the residual in the $P_{H'}$ Lenz reading from "why does $6!$ multiply $\pi^5/5!$?" to "why are the six complete pair channels of the $P_7$ four-slot carrier physically addressable boundary-defect slots?" — a residual labeled $P_{\rm pair}^{\rm addr}$ and explicitly placed outside the active TCG/$\tau$CG ledger. This note attacks $P_{\rm pair}^{\rm addr}$ at the boundary-defect level.

The key shift is from the boundary of one fundamental ordered chamber, whose primitive faces are the adjacent path edges of $P_4$ used in the electron boundary sector, to the full labeled $A_3$ braid arrangement of the FPA top stratum, whose six root walls $H_{ij} = \{x_i = x_j\}$ form the edge set of the complete graph $K_4$. The corresponding logarithmic residue generators live in the degree-1 Orlik–Solomon algebra $A^1_{\rm OS}(A_3)$. Coupling each root-wall residue to a matching formal antisymmetric pair-channel address label associated with the FPA/$P_7$ four-slot carrier defines elements

$$D_{ij} := a_{ij} \otimes \mathsf{p}_{ij} \in A^1_{\rm OS}(A_3) \otimes \mathcal{P}_{\rm addr}.$$

These are cohomological root-wall residue-address generators, NOT QFT defect operators, Hilbert-space projectors, or a semisimple address algebra.

## Three-way residual decomposition

$$\boxed{P_{\rm pair}^{\rm addr} = P_{\rm pair}^{\rm wall\text{-}res} + P_{\rm pair}^{\rm phys} + P_{\rm pair}^{\rm ord}}$$

- $P_{\rm pair}^{\rm wall\text{-}res}$ — cohomologically realized via $A^1_{\rm OS}(A_3) \otimes \mathcal{P}_{\rm addr}$ (this paper)
- $P_{\rm pair}^{\rm phys}$ — physical defect realization (QFT operators, projectors, pair-Fock): NOT derived
- $P_{\rm pair}^{\rm ord}$ — uniform ordered-saturation trace measure on $\mathrm{Ord}(\Omega_2(S_4^{\rm FPA}))$: NOT derived

## Sharpened residual

**Old residual (Paper #35):** *"why physical pair-channel addressability?"*

**New residual (this paper):** *"why physical realization and uniform ordered trace over six root-wall pair addresses?"*

## Status table

| Stage | Result | Status |
|---|---|---|
| Set-indexing bijection (v1 retired) | mere relabeling | superseded |
| Full FPA chamber arrangement → $A_3$ braid arrangement | 6 root walls $H_{ij}$ | passes |
| Root-wall residue algebra $A^*_{\rm OS}(A_3)$ | standard Arnold-OS circuit relations | passes |
| Pair-channel residue-address generators $D_{ij}$ | cohomological | **PARTIAL POSITIVE** |
| $P_7$ wall compatibility | $\{D_{12}, D_{13}, D_{23}\} \sqcup \{D_{14}, D_{24}, D_{34}\}$ | passes |
| Physical defect operators / projectors / pair-Fock | not derived | residual $P_{\rm pair}^{\rm phys}$ |
| Uniform $6!$ ordered trace | $W(A_3) = S_4$ not $S_6$; OS circuit relations | residual $P_{\rm pair}^{\rm ord}$ |
| Active ledger | UNCHANGED | — |

## Verdict

**Partial positive — boundary-defect-route construction supplies cohomological pair-channel root-wall residue-address generators; physical defect realization and 6! trace remain residual; no derivation of $P_{H'}$; no active-ledger change.**

Active TCG/$\tau$CG postulate ledger UNCHANGED:
$$P_0\text{--}P_4, \quad P_{5'}, \quad P_6, \quad P_7, \quad P_{H'}, \quad P_{SO(10)}.$$

Same maturity register as [the bitwistor pair-channel note](/papers/25-bulk-boundary-localization/), [the compatible-polarization note](/papers/31-compatible-pure-spinor-polarizations/), [the τCG specification](/papers/34-tau-cg-specification/), and [the hadronic six-slot resolution note](/papers/35-hadronic-six-slot-resolution/).

**$P_{\rm pair}^{\rm wall\text{-}res}$, $P_{\rm pair}^{\rm phys}$, and $P_{\rm pair}^{\rm ord}$ are labeled successor-construction targets, NOT new framework axioms.**

## Six failure modes

- **F1.** Full-chamber versus fundamental-chamber confusion
- **F2.** Weight-root conflation ($A_3$ roots $\varepsilon_i - \varepsilon_j$ vs $\wedge^2 \mathbf{4}$ weights $\varepsilon_i + \varepsilon_j$)
- **F3.** Ordered-trace failure (remains $P_{\rm pair}^{\rm ord}$)
- **F4.** Gauge-frame objection (4-slot must come from FPA/$P_7$ carrier, not arbitrary basis)
- **F5.** Physical-operator gap (cohomological ≠ QFT defect operator)
- **F6.** QCD/proton specificity not addressed

## DOI

[https://doi.org/10.5281/zenodo.20264444](https://doi.org/10.5281/zenodo.20264444)
