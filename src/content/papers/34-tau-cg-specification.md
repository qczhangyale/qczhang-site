---
title: "τCG: A Trace-Selector Package Specification for the Twistor Configuration Geometry Residual Classification"
shortTitle: "τCG Specification"
doi: "10.5281/zenodo.20262057"
date: 2026-05-17
order: 34
category: foundations
description: "Successor-theory specification proposing Trace Configuration Geometry (τCG) as the constructive response to the obstruction trilogy's trace/measure-selection diagnostic. The boundary-superselection obstruction (DOI:10.5281/zenodo.20110780), pure-spinor condensation obstruction (DOI:10.5281/zenodo.20141601), and representation-slot measure obstruction (DOI:10.5281/zenodo.20149827) classified the three TCG residuals P_BFV^sec, X_wall-pol, G3 at theorem level as trace/measure-selection problems, not representation-theoretic problems. **This note proposes a single missing object** — the physical trace-selector package T_phys = (Tr_num, Sel_phys) — and tests a first candidate (the labeled-resolution trace) against five TCG sector measures. The split avoids the type mismatch in which a single number-valued trace would have to output a Lie subgroup: Tr_num : C_num → R≥0 handles numerical sector weights, while Sel_phys : C_pol → Sub(G_PS) handles polarization-sector stabilizer outputs over the Pati-Salam group G_PS = SU(4)_C × SU(2)_L × SU(2)_R. **Five test results.** (1) Bulk chamber factorials Tr_num(B_r) = r! via π_0(Conf_r^lab(I)) = S_r — PASSES, reproducing FPA bulk weights π + π² + 4π³ in the 1/α formula. (2) Hard-core boundary Tr_num(∂_r^hc) = F_{r+1} = |Match(P_r)| — PASSES conditional on hard-core selection AND uniform square-free basis trace; the uniform basis trace is a trace/measure choice in addition to the hard-core selection. (3) Electron prefactor Tr_num(E_4^pol) = 1 - 1/(2π) via sectorwise average |M| = 1 on Match(P_4) — CONDITIONAL on residual P_BFV^sec (four explicit conditions: hard-core matching sectors, uniform sector measure, sectorwise connected generator, normalized delta contribution). (4) Hadronic 6! multiplier Tr_num(H_∧²) = 6π^5 — OPEN, formalized as the canonical six-slot physical resolution conjecture: a finite labeled resolution of P(∧²4) (not topological covering, since CP^5 is simply connected) equipped with a slot-labeling map natural w.r.t. SU(4) representation structure (Weyl/normalizer action) pre-wall and SU(3)_C × U(1)_{B-L} decomposition post-wall, basis-independent; either such a natural object exists or it does not (falsifiable). (5) Pure-spinor stabilizer Sel_phys(W_+) = G_SM via stabilizer intersection SU(5)_{W_+} ∩ G_PS ≃ S(U(3) × U(2)) — CONDITIONAL on residual X_wall-pol. Spin tower D_spin not yet constructed. **Verdict: partial positive — unifying language at the trace-selector level, no derivation, no active-ledger change.** Active TCG/FPA postulate ledger UNCHANGED: P_0–P_4, P_{5'}, P_6, P_7, P_H', P_{SO(10)}. **Minimal extension discipline (§11)**: no new structure unless it closes a named residual. Seven failure modes F1-F7 including F6 functoriality failure (T_phys may fail to extend to genuine functor — most important formal risk, reason Definition 1 is called specification datum / pre-datum rather than functor) and F7 uniform-measure ambiguity. **Related-work positioning**: τCG distinct from Migdal Geometric QCD series (arXiv:2511.13688, 2602.21129, 2605.02373) — not a confining-string construction or planar-QCD derivation, but a trace/measure-selection specification for TCG residuals. **Strongest thesis: τCG is not yet a theory; it is a successor-specification datum whose central task is to construct T_phys. τCG names the common missing object; it does not yet build it.** Same maturity register as the bitwistor pair-channel note (DOI:10.5281/zenodo.20111389) and the compatible-polarization note (DOI:10.5281/zenodo.20129212)."
---

## Abstract

Twistor Configuration Geometry (TCG), in its FPA realization, organizes a set of measured dimensionless relations through chamber counts, hard-core boundary matchings, Fubini–Study volumes, and Spin(10) / pure-spinor structures. The recent obstruction trilogy — [the boundary-superselection obstruction note](/papers/27-boundary-superselection-obstruction/), [the pure-spinor condensation obstruction note](/papers/32-pure-spinor-condensation-obstruction/), and [the representation-slot measure obstruction note](/papers/33-representation-slot-measure-obstruction/) — showed at theorem level that the three named residuals on the electron, gauge, and hadronic arcs share a common structural form: a missing physical trace or measure-selection principle. The framework's canonical equivariant geometry produces orbits and projective volumes but does not produce labeled-slot frames, orientation choices, or unit-trace normalizations.

This note proposes a successor-theory specification — **Trace Configuration Geometry** (τCG) — in which the underlying configuration-geometry skeleton of TCG is preserved but the organizing principle is shifted from twistor-arena invariants to a single physical **trace-selector package**

$$\mathfrak{T}_{\rm phys} = (\mathrm{Tr}_{\rm num}, \mathrm{Sel}_{\rm phys})$$

over physically resolved sectors. The numerical component $\mathrm{Tr}_{\rm num}: \mathcal{C}_{\rm num} \to \mathbb{R}_{\geq 0}$ handles bulk, boundary, electron, and hadronic targets (numerical sector weights); the sector-selector component $\mathrm{Sel}_{\rm phys}: \mathcal{C}_{\rm pol} \to \mathrm{Sub}(G_{\rm PS})$ handles polarization-sector targets (Lie-group / stabilizer outputs) over the Pati–Salam group $G_{\rm PS} = SU(4)_C \times SU(2)_L \times SU(2)_R$. **Splitting $\mathfrak{T}_{\rm phys}$ avoids the type mismatch in which a single number-valued rule would have to output a Lie subgroup.**

We call this specification *Trace Configuration Geometry* with the convention that the Greek letter $\tau$ (for "trace") replaces the "T" of "Twistor" in TCG — preserving the configuration-geometry skeleton but shifting the organizing principle from twistor-arena invariants to trace-selector outputs over physically resolved sectors.

## Position of this note

**τCG is a successor-theory specification, not a new derivation.** Its contribution is the extraction of a minimal common target problem: construct $\mathfrak{T}_{\rm phys}$ so that it supplies the missing physical measures without changing the active TCG ledger. Same maturity register as [the bitwistor pair-channel note](/papers/28-bitwistor-pair-channels/) and [the compatible-polarization note](/papers/31-compatible-pure-spinor-polarizations/): a partial-positive mechanism note that names what successor theory must construct, without claiming the construction has been performed.

**Related work.** τCG is distinct from contemporary geometric-QCD and twistor-string approaches such as Migdal's planar Makeenko–Migdal loop-equation program (arXiv:2511.13688, arXiv:2602.21129, arXiv:2605.02373). τCG is *not* a confining-string construction or a derivation of planar QCD; it is a trace/measure-selection specification for the existing TCG residual ledger.

## The candidate: labeled-resolution trace

The simplest candidate for $\mathrm{Tr}_{\rm num}$ is a trace over a physically addressable labeled resolution. For a geometric sector $X$ with measure $\mu_X$ and labeled physical resolution $\pi_X: \widetilde{X}_{\rm phys} \to X$ (finite of degree $d_X$), define

$$\mathrm{Tr}_{\rm num}(X) = \int_{\widetilde{X}_{\rm phys}} \pi_X^* \mu_X.$$

When $\pi_X$ is a finite uniform cover, this reduces to $\mathrm{Tr}_{\rm num}(X) = d_X \cdot \mathrm{Vol}(X)$.

The present note restricts to finite uniform labeled resolutions. Non-finite, non-uniform, and stacky resolutions require a pushforward / Radon–Nikodym formulation, left out of scope (cf. failure mode F7).

## Five test results

**Test 1 (Bulk chamber factorials, §5).** The configuration space of $r$ labeled points on an oriented interval has $r!$ ordering chambers, so $\pi_0(\mathrm{Conf}_r^{\rm lab}(I)) \cong S_r$ and

$$\mathrm{Tr}_{\rm num}(B_r) = |S_r| = r!.$$

For the FPA ranks $r_n = 2n-2$, this reproduces the chamber weights used in the construction of the $1/\alpha$ formula: $I_{\rm bulk}[1] = \sum_{n=1}^3 r_n! \cdot \mathrm{Vol}_{FS}(\mathbb{CP}^n) = \pi + \pi^2 + 4\pi^3$. **PASSES.**

**Test 2 (Hard-core boundary Fibonacci, §6).** The hard-core adjacent boundary algebra has basis monomials in bijection with matchings of the path graph $P_r$, so $\dim \mathcal{A}_\partial^{\rm hc}(r) = |\mathrm{Match}(P_r)| = F_{r+1}$. With the uniform square-free basis trace (unit counting functional),

$$\mathrm{Tr}_{\rm num}(\partial_r^{\rm hc}) = F_{r+1}.$$

**PASSES** conditional on (i) hard-core selection and (ii) uniform basis trace. The uniform basis trace is a trace/measure choice in addition to the hard-core selection itself.

**Test 3 (Electron polar-normal connected trace, §7).** For $r = 4$, $\mathrm{Match}(P_4) = \{\emptyset, 12, 23, 34, 12|34\}$ with sectorwise average $\langle|M|\rangle = (0+1+1+1+2)/5 = 1$. The sectorwise connected generator gives

$$\langle B_e^{\rm conn} \rangle = 1 - \frac{1}{2\pi}.$$

**CONDITIONAL** on residual $P_{\rm BFV}^{\rm sec}$ from the boundary-superselection obstruction note: (i) hard-core matching sectors as BFV superselection, (ii) uniform sector measure on $\mathrm{Match}(P_4)$, (iii) sectorwise connected generator rather than global free energy, (iv) normalized delta contribution $1/(2\pi)$.

**Test 4 (Hadronic 6! slot multiplier, §8).** The canonical Fubini–Study volume of $\mathbb{P}(\wedge^2 \mathbf{4}) \cong \mathbb{CP}^5$ is $\pi^5/5!$. The Lenz hadronic identification requires the multiplier:

$$6! \cdot \mathrm{Vol}_{FS}(\mathbb{P}(\wedge^2 \mathbf{4})) = 6\pi^5.$$

The Weyl group $W(SU(4)) \cong S_4$ has induced action on the six pair labels of order $24$, not $720$; the $P_7$ wall gives a $3+3$ split but not an ordered six-slot frame. We formalize the open conjecture:

**Definition (Six-slot physical resolution).** A *canonical six-slot physical resolution* is a finite labeled resolution $\pi_H: \widetilde{H}_{\rm phys} \to \mathbb{P}(\wedge^2 \mathbf{4})$ (not necessarily a topological covering space — since $\mathbb{CP}^5$ is simply connected — but behaving as a degree-$6!$ cover for trace purposes), equipped with a slot-labeling map satisfying three naturality conditions: (i) pre-$P_7$-wall, natural w.r.t. the $SU(4)$ representation structure and its Weyl/normalizer action on the six pair channels; (ii) post-$P_7$-wall, natural w.r.t. the induced $SU(3)_C \times U(1)_{B-L}$ decomposition; (iii) basis-independent.

**Conjecture (Hadronic slot trace).** $\mathrm{Tr}_{\rm num}$ derives the $6!$ Lenz multiplier only if it is realized as a labeled-resolution trace over a canonical six-slot physical resolution.

**OPEN.** Either such a natural object exists, or it does not (falsifiable). This is the sharpest test of τCG and the central cliffhanger.

**Test 5 (Pure-spinor polarization, §9).** The compatible polarization $W_+ = (\ell \wedge C) \oplus (\mathbf{2}_L \otimes r_+) \subset V_{10,\mathbb{C}}$ from the compatible-polarization note has stabilizer intersection

$$SU(5)_{W_+} \cap G_{\rm PS} \simeq S(U(3) \times U(2)),$$

with Lie algebra $\mathfrak{su}(3)_C \oplus \mathfrak{su}(2)_L \oplus \mathfrak{u}(1)_Y$ and $Y = T_{3R} + (B-L)/2$. The sector selector outputs $\mathrm{Sel}_{\rm phys}(W_+) = G_{\rm SM}$ (locally; globally $S(U(3) \times U(2))$ up to standard finite-center quotient). **CONDITIONAL** on residual $X_{\rm wall-pol}$ from the pure-spinor condensation obstruction note.

## Status table

| Sector | Target | Status |
|---|---|---|
| Bulk chambers $\mathrm{Tr}_{\rm num}(B_r)$ | $r!$ | **passes** |
| Hard-core boundary $\mathrm{Tr}_{\rm num}(\partial_r^{\rm hc})$ | $F_{r+1}$ | **passes** (hard-core + uniform basis trace) |
| Electron boundary $\mathrm{Tr}_{\rm num}(E_4^{\rm pol})$ | $1 - 1/(2\pi)$ | conditional on $P_{\rm BFV}^{\rm sec}$ |
| Hadronic pair $\mathrm{Tr}_{\rm num}(H_{\wedge^2})$ | $6! \cdot \mathrm{Vol}_{FS}(\mathbb{CP}^5)$ | **open** (residual $G3$, formalized) |
| Pure-spinor $\mathrm{Sel}_{\rm phys}(W_+)$ | $G_{\rm SM}$ | conditional on $X_{\rm wall-pol}$ |
| Spin tower $\mathcal{D}_{\rm spin}$ | $d_s = 2(s+2)$ | not yet constructed |

## Minimal extension discipline

**No new structure is added unless it closes a named residual.**

- Supertwistors only if they derive $\mathcal{D}_{\rm spin}$ or fermionic saturation structure
- Higher-form gauge fields only if they construct $\mathfrak{T}_{\rm phys}$ or sector-decomposed action
- Fully extended factorization algebras only if they produce missing sector projectors / corner traces
- Kaluza–Klein corner modes only if they derive $P_6$ and the spin-1 fifth-force coupling
- Extra Spin(10) Higgs representations only if they arise from existing τCG data

This discipline matches the anti-evasion guards of the obstruction trilogy and the 2026-05-01 framework closure verdict.

## Seven failure modes F1–F7

F1 (trace-selector package not unique); F2 (hadronic six-slot resolution may not exist canonically); F3 (electron sectorwise trace requires corner BV–BFV machinery, literature gap K4); F4 (pure-spinor condensate requires action-level machinery beyond $\mathbf{16}+\mathbf{10}$ template); F5 (look-elsewhere expansion forbidden); **F6 (functoriality failure** — $\mathfrak{T}_{\rm phys}$ may fail to extend to a genuine functor; most important formal risk and reason Definition 1 is called *specification datum* / *pre-datum* rather than functor); **F7 (uniform-measure ambiguity** — Radon–Nikodym density may be required).

## Verdict

**Partial positive — unifying language at the trace-selector level, no derivation, no active-ledger change.**

Active TCG/FPA postulate ledger UNCHANGED:

$$P_0\text{–}P_4, \quad P_{5'}, \quad P_6, \quad P_7, \quad P_{H'}, \quad P_{SO(10)}.$$

The 2026-05-01 framework closure verdict is preserved. Same maturity register as the bitwistor pair-channel note and the compatible-polarization note.

**Strongest thesis:** τCG is not yet a theory; it is a successor-specification datum whose central task is to construct the physical trace-selector package $\mathfrak{T}_{\rm phys} = (\mathrm{Tr}_{\rm num}, \mathrm{Sel}_{\rm phys})$. Its first candidate, the labeled-resolution trace, passes the bulk and hard-core boundary tests, conditionally organizes the electron and pure-spinor sectors, and leaves the hadronic degree-$6!$ six-slot resolution as the key open construction.

**τCG names the common missing object; it does not yet build it.**

## DOI

[https://doi.org/10.5281/zenodo.20262057](https://doi.org/10.5281/zenodo.20262057)
