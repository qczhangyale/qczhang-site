---
title: "Residue, Not Relabeling: Pair-Channel Root-Wall Residue Addresses in τCG"
description: "Yesterday's paper (Paper #35, Hadronic Six-Slot Resolution) named the residual P_pair^addr outside the active ledger. The conditional positive of Paper #35 is: τCG + P_pair^addr ⇒ Tr_num(H_∧²) = 6π^5. Today's paper attempts a stronger boundary-defect-route construction of P_pair^addr at the cohomological-address level. Two prior drafts retired: v1 set-indexing bijection Φ_+(A_3) ≅ Ω_2(S_4^FPA) (essentially a relabeling — both sides are indexed by pairs i<j in {1,2,3,4}); v2 'Defect Operators' framing (overpromised relative to actual cohomological content). The v3 implementation is real structural advance. Key structural shift: from the boundary of one fundamental ordered chamber (electron P_4 sector, Paper #27) — primitive faces {12, 23, 34} — to the full labeled chamber arrangement, whose six diagonals H_ij = {x_i = x_j} are exactly the type-A_3 reflection hyperplanes of the braid arrangement. Single chamber boundary ⇒ P_4 (electron); full labeled chamber walls ⇒ K_4 (hadronic). The corresponding logarithmic residue generators a_ij live in the degree-1 Orlik-Solomon algebra A^1_OS(A_3) with standard Arnold-Orlik-Solomon circuit relations a_ij ∧ a_ik − a_ij ∧ a_jk + a_ik ∧ a_jk = 0 (i<j<k) derived from ∂ on the dependent triple {H_ij, H_ik, H_jk}. Pair-channel root-wall residue addresses: D_ij := a_ij ⊗ p_ij ∈ A^1_OS(A_3) ⊗ P_addr, where P_addr := Span_C{p_ij} is the formal pair-address vector space; {p_ij} in chosen-frame bijection with {e_i ∧ e_j} of ∧²4 — labeling correspondence between index sets of cardinality 6, NOT C-linear identification; no SU(4)-action induced on P_addr; p_ij are formal symbols, not vectors or projectors. P_7 wall compatibility: {D_12, D_13, D_23} ⊔ {D_14, D_24, D_34} matches ∧²4 = ∧²C ⊕ (ℓ∧C) — structural content behind the 3+3 split. Ordered 6! trace still does not follow (Theorem 11): W(A_3) ≅ S_4 not S_6; Orlik-Solomon circuit relations; channel labels not projectors. Three-way residual decomposition: P_pair^addr = P_pair^wall-res + P_pair^phys + P_pair^ord, where only P_pair^wall-res is cohomologically realized by this paper. Sharpened residual: 'why physical realization and uniform ordered trace over six root-wall pair addresses?' Verdict: partial positive — cohomological root-wall residue-address construction; no derivation of P_H'; no active-ledger change. Same maturity register as Papers #25, #28, #34, #35."
pubDate: 2026-05-18
---

[Yesterday's hadronic six-slot resolution paper](/blog/addressability-not-multiplier/) sharpened the residual in the $P_{H'}$ Lenz reading from *"why does $6!$ multiply $\pi^5/5!$?"* to *"why are the six complete pair channels of the $P_7$ four-slot carrier physically addressable boundary-defect slots?"* It named this residual $P_{\rm pair}^{\rm addr}$ and proved the conditional positive
$$\tau\text{CG} + P_{\rm pair}^{\rm addr} \Rightarrow \mathrm{Tr}_{\rm num}(H_{\wedge^2}) = 6\pi^5.$$
$P_{\rm pair}^{\rm addr}$ was placed explicitly outside the active TCG/τCG ledger, as a labeled successor-construction target.

**Today's paper attempts a stronger boundary-defect-route construction of $P_{\rm pair}^{\rm addr}$ at the cohomological-address level.**

## What went wrong in the first attempts

Two prior drafts were retired before this v3 implementation.

**v1 (set-indexing bijection).** Observed that
$$\Phi_+(A_3) \cong \Omega_2(S_4^{\rm FPA})$$
i.e. the six positive roots of $A_3$ are in bijection with the six unordered pairs $\{i,j\}$ in $\{1, 2, 3, 4\}$. But both sides are by *definition* indexed by pairs $i<j$ — that's the same combinatorial set. The "construction" was just a relabeling: it identified two copies of the same six pair labels without producing any boundary-defect operators. Also conflated weights $\varepsilon_i + \varepsilon_j$ (of $\wedge^2 \mathbf{4}$) with roots $\varepsilon_i - \varepsilon_j$ (of the $A_3$ adjoint), which live in different representations.

**v2 ("Defect Operators").** Made a real structural advance — the full FPA chamber arrangement and Orlik-Solomon residue algebra — but framed the result as "concrete pair-channel defect operators," which overpromised. The $\mathsf{p}_{ij}$ side was admittedly nominal (formal address symbols, not projectors), and "defect operator" in QFT/TQFT means an operator inserted along a codimension-$k$ submanifold sourcing nontrivial physics. The actual operator content lived entirely in the cohomological residue side.

## The v3 construction

**Key structural shift.** The hadronic six-pair set is the edge set of $K_4$, not the adjacent edges of $P_4$ used in the electron boundary sector. Where do all six pairs come from?

Not from the boundary of one fundamental ordered chamber. *That* gives only adjacent collisions:
$$0 < x_1 < x_2 < x_3 < x_4 < 1 \Rightarrow \text{primitive faces } \{12, 23, 34\} = P_4.$$

The six pairs come from the **full labeled chamber arrangement** — the global wall configuration connecting all $4!$ ordered chambers. The collision walls are
$$H_{ij} = \{x_i = x_j\}, \quad 1 \le i < j \le 4,$$
and these six walls are exactly the type-$A_3$ reflection hyperplanes of the braid arrangement. Their unordered pair indices form the edge set of $K_4$.

$$\text{single chamber boundary} \Rightarrow P_4 \quad (\text{electron sector})$$
$$\text{full labeled chamber walls} \Rightarrow K_4 \quad (\text{hadronic sector})$$

**This preserves the electron-sector framing.** The full-chamber construction does not retroactively change [the electron $P_4$ analysis](/blog/walls-not-postulates/) — both reductions are downstream of the same FPA top stratum; they are different boundary reductions of the same four-label carrier.

**Root-wall residue algebra.** Definition 3 gives the Orlik–Solomon exterior incidence algebra $A^*_{\rm OS}(A_3)$ with generators $\{a_{ij} : 1 \le i < j \le 4\}$ in lex order, square-free relations $a_{ij} \wedge a_{ij} = 0$, and the **standard Arnold–Orlik–Solomon circuit relation** for every triple $i<j<k$:
$$a_{ij} \wedge a_{ik} - a_{ij} \wedge a_{jk} + a_{ik} \wedge a_{jk} = 0.$$
This is derived from the boundary map $\partial$ applied to the dependent triple $\{H_{ij}, H_{ik}, H_{jk}\}$ — the standard presentation in Orlik–Terao (1992) and the standard cohomology of the braid-arrangement complement.

**Pair-channel root-wall residue address.** Definition 6 introduces
$$\mathcal{P}_{\rm addr} := \mathrm{Span}_{\mathbb{C}}\{\mathsf{p}_{ij} : 1 \le i < j \le 4\}$$
as a formal pair-address vector space. The basis $\{\mathsf{p}_{ij}\}$ is in **chosen-frame bijection** with the antisymmetric basis $\{e_i \wedge e_j\}$ of $\wedge^2 \mathbf{4}$:

- This is a labeling correspondence between two index sets of cardinality 6
- It is **NOT** a $\mathbb{C}$-linear identification of $\mathcal{P}_{\rm addr}$ with $\wedge^2 \mathbf{4}$
- No $SU(4)$-action is induced on $\mathcal{P}_{\rm addr}$
- The $\mathsf{p}_{ij}$ are formal symbols, not vectors of $\wedge^2 \mathbf{4}$ or projectors onto pair lines $\mathbb{C}(e_i \wedge e_j)$

The **pair-channel root-wall residue-address generators** are
$$D_{ij} := a_{ij} \otimes \mathsf{p}_{ij} \in A^1_{\rm OS}(A_3) \otimes \mathcal{P}_{\rm addr}.$$

These are **cohomological** residue-address generators — explicitly *not* QFT defect operators, Hilbert-space projectors, or a pair-Fock basis. Turning them into physical defect operators or projectors would require additional boundary dynamics not supplied here.

## $P_7$ wall compatibility

Under the [$P_7$ wall split](/blog/wall-deletion-pati-salam/) $\mathbf{4} = C \oplus \ell$ with $\ell = \langle e_4 \rangle$, the six pair addresses split as
$$\{D_{12}, D_{13}, D_{23}\} \sqcup \{D_{14}, D_{24}, D_{34}\}$$
matching $\wedge^2 \mathbf{4} = \wedge^2 C \oplus (\ell \wedge C)$ — three color-color + three color-lepton pair addresses. This is the genuine structural content behind the $3+3$ split noted in [the hadronic six-slot resolution paper](/blog/addressability-not-multiplier/).

## Why the ordered $6!$ trace still does not follow

Theorem 11 records three independent reasons the residue-address system does *not* supply the uniform ordered $6!$ trace:

1. **Weyl group symmetry too small.** $W(A_3) \cong S_4$ has order $24$, not the $720 = 6!$ of $S_6$. The induced action on the six pair labels is the $S_4$ action on unordered pairs in $\{1, \dots, 4\}$, not the full symmetric group on six letters.
2. **Orlik–Solomon circuit relations.** The residues obey the triangle relation above; the algebra generated by the six $D_{ij}$ is not free on six commuting slots.
3. **Channel labels are not projectors.** The $\mathsf{p}_{ij}$ are formal address symbols. They do not automatically become orthogonal idempotent projectors with a unit counting trace.

## Three-way residual decomposition

$$\boxed{P_{\rm pair}^{\rm addr} = P_{\rm pair}^{\rm wall\text{-}res} + P_{\rm pair}^{\rm phys} + P_{\rm pair}^{\rm ord}}$$

- $P_{\rm pair}^{\rm wall\text{-}res}$ — six pair-channel labels modeled by root-wall logarithmic residue addresses in $A^1_{\rm OS}(A_3) \otimes \mathcal{P}_{\rm addr}$. **This paper cohomologically realizes this piece.**
- $P_{\rm pair}^{\rm phys}$ — physical defect realization (QFT defect operators, projectors, pair-Fock basis). **Not derived here.**
- $P_{\rm pair}^{\rm ord}$ — uniform ordered-saturation trace measure on $\mathrm{Ord}(\Omega_2(S_4^{\rm FPA}))$. **Not derived here.**

With $P_{\rm pair}^{\rm phys} + P_{\rm pair}^{\rm ord}$ added, the conditional trace result of Paper #35 follows:
$$\int_{\widetilde{H}_{\rm pair}} \pi_H^* \left(\frac{\omega_{\rm FS}^5}{5!}\right) = 6! \cdot \frac{\pi^5}{5!} = 6\pi^5.$$

## Sharpened residual

**Old residual (Paper #35):** *"why are the six complete pair channels of the $P_7$ four-slot carrier physically addressable boundary defects?"*

**New residual (this paper):** *"why physical realization and uniform ordered trace over six root-wall pair addresses?"*

The new residual is sharper because the cohomological-address half has been realized, isolating the physical-operator gap ($P_{\rm pair}^{\rm phys}$) and the ordered-trace gap ($P_{\rm pair}^{\rm ord}$) as the two unsolved successor targets.

## No-representation-scan license

The construction is specific to the $P_7$/FPA four-slot carrier and the type-$A_3$ chamber-wall arrangement. It is *not* a general rule assigning root-wall addresses, factorial traces, or representation-volume invariants to arbitrary representations. In particular it does not authorize new scans over $\mathbb{P}(R)$ for unrelated Spin(10) or Pati–Salam representations.

## Maturity register and verdict

**Partial positive — cohomological root-wall residue-address construction; no derivation of $P_{H'}$; no active-ledger change.**

Active TCG/$\tau$CG postulate ledger UNCHANGED:
$$P_0\text{--}P_4, \quad P_{5'}, \quad P_6, \quad P_7, \quad P_{H'}, \quad P_{SO(10)}.$$

Same maturity register as [the bitwistor pair-channel note](/blog/pair-channel/) (Paper #25), [the compatible-polarization note](/blog/walls-not-postulates/) (Paper #28), [the τCG specification](/blog/specification-not-derivation/) (Paper #34), and [the hadronic six-slot resolution](/blog/addressability-not-multiplier/) (Paper #35): partial-positive mechanism note that names what successor theory must construct, without claiming the construction has been performed.

The τCG construction arc now has its second concrete result: Paper #35 named the missing addressability principle; Paper #36 supplies a concrete cohomological model for the address half, separating it from physical realization and ordered trace. The residual decomposition is now three-way and granular.

The paper, *Pair-Channel Root-Wall Residue Addresses in Trace Configuration Geometry*, is on Zenodo (DOI [10.5281/zenodo.20264444](https://doi.org/10.5281/zenodo.20264444); CC-BY-4.0). Ten pages, 11 references (9 DAEDALUS with version-specific DOIs + Orlik–Terao 1992 + Fulton–MacPherson 1994).

Residue, not relabeling. The six pair-channel labels are not arbitrary — they are the logarithmic residues along the six reflection hyperplanes of the $A_3$ braid arrangement that the full FPA chamber structure already supplies. Physical realization remains the next step.
