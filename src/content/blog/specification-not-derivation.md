---
title: "Specification, Not Derivation: τCG and the Trace-Selector Package"
description: "The three obstruction theorems of May 2026 — boundary-superselection (#27), pure-spinor condensation (#32), and representation-slot measure (#33) — proved at theorem level that all three TCG residuals share a common structural form: they are trace/measure-selection problems, not representation-theoretic problems. Today's paper takes that diagnostic and turns it into a constructive specification. We propose Trace Configuration Geometry (τCG, with Greek τ for trace replacing T for Twistor) and its central object: the physical trace-selector package T_phys = (Tr_num, Sel_phys). The split — number-valued trace for bulk/boundary/electron/hadronic + Lie-group-valued selector for pure-spinor — avoids the type mismatch in which a single number-valued trace would have to output a Lie subgroup. Five test results: bulk chamber factorials r! PASSES via π_0(Conf_r^lab(I)) = S_r; hard-core boundary Fibonacci F_{r+1} PASSES with explicit hard-core + uniform basis trace conditions; electron prefactor 1 - 1/(2π) CONDITIONAL on residual P_BFV^sec (four explicit conditions); hadronic 6π^5 OPEN, formalized as the canonical six-slot physical resolution conjecture (finite labeled resolution of P(∧²4) with naturality conditions w.r.t. SU(4) pre-wall and SU(3)_C × U(1)_{B-L} post-wall, basis-independent — either such a natural object exists or it does not, falsifiable); pure-spinor stabilizer G_SM CONDITIONAL on residual X_wall-pol via the known SU(5)_{W_+} ∩ G_PS ≃ S(U(3) × U(2)) intersection. Verdict: partial positive — unifying language at the trace-selector level, no derivation, no active-ledger change. Active TCG/FPA postulate ledger UNCHANGED. Minimal-extension discipline: no new structure unless it closes a named residual. Seven failure modes F1-F7 including F6 functoriality failure (T_phys may fail to extend to genuine functor — most important formal risk, reason Definition 1 is called specification datum / pre-datum). Related-work positioning: τCG distinct from Migdal Geometric QCD series — different theoretical regime. Strongest thesis: τCG names the common missing object; it does not yet build it. Same maturity register as Papers #25 (bitwistor pair channels) and #28 (compatible polarizations)."
pubDate: 2026-05-17
---

The three obstruction theorems of the past two weeks — [the boundary-superselection obstruction](/blog/walls-not-postulates/) (Paper #27, electron arc), [the pure-spinor condensation obstruction](/blog/condensation-not-orientation/) (Paper #32, gauge arc), and [the representation-slot measure obstruction](/blog/slot-not-symmetry/) (Paper #33, hadronic arc) — closed the three-arc symmetric maturity with a striking common diagnosis. **All three named residuals — $P_{\rm BFV}^{\rm sec}$, $X_{\rm wall-pol}$, $G3$ — are trace/measure-selection problems, not representation-theoretic problems.** The framework's canonical equivariant geometry produces orbits and projective volumes (representation theory) but does not produce labeled-slot frames, orientation choices, or unit-trace normalizations (measure selection).

Today's paper takes that cross-arc diagnostic and turns it into a constructive specification. We introduce **Trace Configuration Geometry** (τCG), with the convention that the Greek letter $\tau$ (for "trace") replaces the "T" of "Twistor" in TCG — preserving the configuration-geometry skeleton but shifting the organizing principle from twistor-arena invariants to trace-selector outputs over physically resolved sectors.

## The central object: trace-selector package

The single missing object is the **physical trace-selector package**

$$\mathfrak{T}_{\rm phys} = (\mathrm{Tr}_{\rm num}, \mathrm{Sel}_{\rm phys}).$$

The split avoids a type mismatch flagged in two independent fresh-session GPT reviews: a single number-valued trace cannot also output a Lie subgroup. The cleanest fix is to separate the two roles:

$$\mathrm{Tr}_{\rm num}: \mathcal{C}_{\rm num} \longrightarrow \mathbb{R}_{\geq 0}$$

handles numerical sector weights (bulk chambers, boundary matchings, the electron prefactor, the hadronic Lenz invariant), while

$$\mathrm{Sel}_{\rm phys}: \mathcal{C}_{\rm pol} \longrightarrow \mathrm{Sub}(G_{\rm PS})$$

handles polarization-sector stabilizer outputs over the Pati–Salam group $G_{\rm PS} = SU(4)_C \times SU(2)_L \times SU(2)_R$.

This is **not yet a category-theoretic functor** — that would require source/target categories, morphism actions, and compatibility axioms not yet defined. We therefore call $(\mathfrak{X}, \mathcal{A}_{\rm bulk}, \mathcal{A}_\partial^{\log}, \mathcal{P}_{D_5}, \mathfrak{T}_{\rm phys}, \mathcal{D}_{\rm spin})$ a **τCG specification datum** (or *pre-datum*), with the terminology to be upgraded only when a successor construction provides the categorical structure.

## The first candidate: labeled-resolution trace

The simplest candidate for $\mathrm{Tr}_{\rm num}$ is a trace over a physically addressable labeled resolution. For a geometric sector $X$ with measure $\mu_X$ and a finite labeled resolution $\pi_X: \widetilde{X}_{\rm phys} \to X$ of degree $d_X$:

$$\mathrm{Tr}_{\rm num}(X) = \int_{\widetilde{X}_{\rm phys}} \pi_X^* \mu_X = d_X \cdot \mathrm{Vol}(X) \quad \text{(finite uniform case)}.$$

The note restricts to finite uniform resolutions; non-finite and non-uniform cases require Radon–Nikodym pushforward, left out of scope.

## Five test results

**Test 1 — Bulk chamber factorials.** The configuration space of $r$ labeled points on an oriented interval has $r!$ ordering chambers, so $\pi_0(\mathrm{Conf}_r^{\rm lab}(I)) \cong S_r$ and

$$\mathrm{Tr}_{\rm num}(B_r) = |S_r| = r!.$$

For the FPA ranks $r_n = 2n-2$, this reproduces the chamber weights $\pi + \pi^2 + 4\pi^3$ in the $1/\alpha$ formula. **PASSES.**

**Test 2 — Hard-core boundary Fibonacci.** The hard-core algebra has basis monomials in bijection with matchings of the path graph $P_r$, so $\dim \mathcal{A}_\partial^{\rm hc}(r) = F_{r+1}$. With the **uniform square-free basis trace** (unit counting functional — a linear unit-counting trace on the basis, *not* a multiplicative augmentation, the distinction is load-bearing):

$$\mathrm{Tr}_{\rm num}(\partial_r^{\rm hc}) = F_{r+1}.$$

**PASSES** conditional on (i) hard-core selection and (ii) uniform basis trace. The uniform basis trace is a trace/measure choice in addition to the hard-core selection itself.

**Test 3 — Electron polar-normal connected trace.** For $r = 4$, $\mathrm{Match}(P_4) = \{\emptyset, 12, 23, 34, 12|34\}$ with average matching size $\langle|M|\rangle = (0+1+1+1+2)/5 = 1$. The sectorwise connected trace gives

$$\langle B_e^{\rm conn} \rangle = 1 - \frac{1}{2\pi}.$$

**CONDITIONAL** on residual $P_{\rm BFV}^{\rm sec}$, with four explicit assumptions: hard-core matching sectors, uniform sector measure, sectorwise connected generator, normalized delta contribution.

**Test 4 — Hadronic 6! slot multiplier.** The canonical Fubini–Study volume of $\mathbb{P}(\wedge^2 \mathbf{4}) \cong \mathbb{CP}^5$ is $\pi^5/5!$. The Lenz identification $6\pi^5 = 6! \cdot \mathrm{Vol}_{FS}(\mathbb{P}(\wedge^2 \mathbf{4}))$ requires the $6!$ multiplier. The obstruction theorem (Paper #33) proved this is not derivable from canonical $SU(4)$-equivariant data: $W(SU(4)) \cong S_4$ has induced action on the six pair labels of order $24$, not $720$; the $P_7$ wall gives a $3+3$ split but not an ordered six-slot frame.

We formalize the central open conjecture:

**Definition (Six-slot physical resolution).** A *canonical six-slot physical resolution* is a finite labeled resolution $\pi_H: \widetilde{H}_{\rm phys} \to \mathbb{P}(\wedge^2 \mathbf{4})$ (not necessarily a topological covering space — since $\mathbb{CP}^5$ is simply connected — but behaving as a degree-$6!$ cover for trace purposes), equipped with a slot-labeling map $\lambda: \widetilde{H}_{\rm phys} \to \{\text{ordered frames of the six pair channels}\}$ satisfying: (i) pre-$P_7$-wall, natural w.r.t. the $SU(4)$ representation structure and its Weyl/normalizer action on the six pair channels; (ii) post-$P_7$-wall, natural w.r.t. the induced $SU(3)_C \times U(1)_{B-L}$ decomposition of $\wedge^2 \mathbf{4} = \wedge^2 C \oplus (\ell \wedge C)$; (iii) basis-independent.

**Conjecture (Hadronic slot trace).** $\mathrm{Tr}_{\rm num}$ derives the hadronic $6!$ multiplier only if it is realized as a labeled-resolution trace over a canonical six-slot physical resolution.

**OPEN.** Either such a natural object exists, or it does not. This is the sharpest test of τCG, falsifiable, and the central cliffhanger.

**Test 5 — Pure-spinor polarization.** The compatible polarization $W_+ = (\ell \wedge C) \oplus (\mathbf{2}_L \otimes r_+) \subset V_{10,\mathbb{C}}$ from [the compatible-polarization note](/blog/walls-not-postulates/) has stabilizer intersection

$$SU(5)_{W_+} \cap G_{\rm PS} \simeq S(U(3) \times U(2)),$$

with Lie algebra $\mathfrak{su}(3)_C \oplus \mathfrak{su}(2)_L \oplus \mathfrak{u}(1)_Y$ and hypercharge $Y = T_{3R} + (B-L)/2$. The sector selector outputs $\mathrm{Sel}_{\rm phys}(W_+) = G_{\rm SM}$ (locally; globally $S(U(3) \times U(2))$ up to standard finite-center quotient). **CONDITIONAL** on residual $X_{\rm wall-pol}$ from [the pure-spinor condensation obstruction note](/blog/condensation-not-orientation/).

In this note $\mathrm{Sel}_{\rm phys}$ is only tested on the single sector $W_+$; a full τCG theory must define its action on morphisms, sector refinements, and competing polarizations.

## Minimal extension discipline

τCG should not be extended by aesthetic preference. The rule:

$$\boxed{\text{No new structure is added unless it closes a named residual.}}$$

In particular: supertwistors only if they derive $\mathcal{D}_{\rm spin}$; higher-form gauge fields only if they construct $\mathfrak{T}_{\rm phys}$; fully extended factorization algebras only if they produce missing sector projectors; Kaluza–Klein corner modes only if they derive $P_6$ and the spin-1 fifth-force coupling; extra Spin(10) Higgs representations only if they arise from existing τCG data.

This matches the anti-evasion guards of the obstruction trilogy and the 2026-05-01 framework closure verdict.

## Seven failure modes

F1 (trace-selector package not unique); F2 (hadronic six-slot resolution may not exist canonically); F3 (electron sectorwise trace requires corner BV–BFV machinery, literature gap K4); F4 (pure-spinor condensate requires action-level machinery beyond $\mathbf{16}+\mathbf{10}$ template); F5 (look-elsewhere expansion forbidden).

**F6 (functoriality failure).** $\mathfrak{T}_{\rm phys}$ may fail to extend to a genuine functor on any natural category if no morphism action, composition law, or compatibility/naturality condition can be defined. In that case τCG remains a useful trace-language heuristic and specification checklist, not a category-theoretic successor datum. **This is the most important formal risk** and the reason Definition 1 is called a *specification datum* (or *pre-datum*) rather than a functor.

**F7 (uniform-measure ambiguity).** Even when a finite labeled resolution exists, the physical measure on its sheets may not be uniform. Then $\mathrm{Tr}_{\rm num}(X) = d_X \cdot \mathrm{Vol}(X)$ is not forced, and a non-trivial Radon–Nikodym multiplicity density is required.

## Related work

τCG is **distinct from contemporary geometric-QCD and twistor-string programs** such as Migdal's planar Makeenko–Migdal loop-equation framework (arXiv:2511.13688, arXiv:2602.21129, arXiv:2605.02373). τCG is *not* a confining-string construction or a derivation of planar QCD; it is a trace/measure-selection specification for the existing TCG residual ledger. The two programs share twistor-flavored vocabulary but operate in different theoretical regimes.

## Status table and verdict

| Sector | Target | Status |
|---|---|---|
| Bulk chambers | $r!$ | **passes** |
| Hard-core boundary | $F_{r+1}$ | **passes** (hard-core + uniform basis trace) |
| Electron boundary | $1 - 1/(2\pi)$ | conditional on $P_{\rm BFV}^{\rm sec}$ |
| Hadronic pair channel | $6! \cdot \mathrm{Vol}_{FS}(\mathbb{CP}^5)$ | **open** (residual $G3$, formalized) |
| Pure-spinor breaking | $G_{\rm SM}$ | conditional on $X_{\rm wall-pol}$ |
| Spin tower | $d_s = 2(s+2)$ | not yet constructed |

**Verdict: partial positive — unifying language at the trace-selector level, no derivation, no active-ledger change.** Active TCG/FPA postulate ledger UNCHANGED:

$$P_0\text{–}P_4, \quad P_{5'}, \quad P_6, \quad P_7, \quad P_{H'}, \quad P_{SO(10)}.$$

The 2026-05-01 framework closure verdict is preserved. Same maturity register as [the bitwistor pair-channel note](/blog/algebra-not-vacuum/) (Paper #25) and [the compatible-polarization note](/blog/walls-not-postulates/) (Paper #28): a partial-positive specification note that names what successor theory must construct, without claiming the construction has been performed.

## The strongest thesis

τCG is **not yet a theory.** It is a successor-specification datum whose central task is to construct the physical trace-selector package $\mathfrak{T}_{\rm phys} = (\mathrm{Tr}_{\rm num}, \mathrm{Sel}_{\rm phys})$. Its first candidate, the labeled-resolution trace, passes the bulk and hard-core boundary tests, conditionally organizes the electron and pure-spinor sectors, and leaves the hadronic degree-$6!$ six-slot resolution as the key open construction.

**τCG names the common missing object; it does not yet build it.**

That distinction matters. After two independent fresh-session reviews (both NEEDS_MAJOR initially, both moving to NEEDS_MINOR then READY after revisions), the paper's claim level is now what it should be: a specification of what successor theory must do, with one concrete falsifiable conjecture (the six-slot resolution) as the central open construction.

The paper, *τCG: A Trace-Selector Package Specification for the Twistor Configuration Geometry Residual Classification*, is on Zenodo (DOI [10.5281/zenodo.20262057](https://doi.org/10.5281/zenodo.20262057); CC-BY-4.0). Thirteen pages, one definition + one conjecture + one proposition at the cliffhanger, seven failure modes, sixteen references. Refinement trail: GPT initial mLTCFT draft → Claude house-style rewrite (rebrand to τCG with Greek τ) → two independent GPT NEEDS_MAJOR reviews (functor terminology overpromising, codomain type mismatch, etc.) → Claude application of 8 major revisions (split into trace-selector package, pre-datum framing, hadronic conjecture formalized) → two further independent GPT NEEDS_MINOR reviews → Claude application of 6 precision edits + 3 minor tweaks → READY.

Specification, not derivation. The framework names the missing trace-selector object. Successor theory must build it.
