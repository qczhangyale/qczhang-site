---
title: "Condensation, Not Orientation: Why a Native Spin(10) Action Cannot Select the Wall-Compatible Pure Spinor"
description: "After three earlier papers on the gauge-side action-level layer — the pure-spinor polarization note (intersection mechanism), the compatible-polarization note (P7 wall + visible $SU(2)_L$ narrow the compatible orbit to $W_+$), and the question of whether a TCG-native Spin(10)-invariant action on $\\mathbf{16} + \\mathbf{10}$ can force $W_+$ as vacuum — today's paper closes that question with a clean theorem-level negative. Three independent obstructions are proven. First (§3), the natural Yukawa coupling $y H_a Q^a(\\lambda) + \\mathrm{h.c.}$ from the $\\mathbf{16} \\otimes \\mathbf{16} \\supset \\mathbf{10}$ channel vanishes identically on the pure-spinor locus — the channel IS exactly the quantity the pure-spinor potential forces to vanish. Second (§4), a single vector $H \\in \\mathbf{10}$ with a Spin(10)-invariant $V_{\\rm wall}(H)$ selects only a vector orbit (generic compact stabilizer $\\mathrm{Spin}(9)$), not the Pati-Salam wall flag $\\mathbf{4} = C \\oplus \\ell$ or the weak-left two-plane $\\mathbf{2}_L \\otimes r_+$. Third (§5), the Hermitian variant $\\lambda^\\dagger \\Gamma^a \\lambda H_a$ is not a valid Spin(10)-invariant coupling because $\\mathbf{16} \\otimes \\overline{\\mathbf{16}} = \\mathbf{1} \\oplus \\mathbf{45} \\oplus \\mathbf{210}$ contains no $\\mathbf{10}$. The combined corollary: under TCG-native discipline, no natural low-degree $\\mathbf{16}+\\mathbf{10}$ Spin(10)-invariant action template has $W_+$ as a forced vacuum representative. Pure-spinor condensation is achievable; compatible pure-spinor condensation is not, without an additional structural input. Residual reformulation: $P_{\\rm pol}^{D_5}$ splits cleanly into $P_{\\rm pol}^{D_5,\\rm compat}$ (compatibility component, substantially narrowed by the compatible-polarization analysis) and $X_{\\rm wall-pol}$ (action-level dynamical source of wall + $SU(2)_L$ data, now theorem-level obstruction-bounded). Active TCG/FPA postulate ledger unchanged. The gauge-side arc now has formal parity with the electron-side arc: both have theorem-level action-level obstruction notes that name precise residuals outside the active framework ledger."
pubDate: 2026-05-12
---

[Yesterday's compatible-polarization note](/papers/31-compatible-pure-spinor-polarizations/) substantially narrowed the gauge-side residual $P_{\rm pol}^{D_5}$. The P7 wall postulate already supplies the lepton line $\ell \subset \mathbf{4}$ and the color/lepton split $\mathbf{4} = C \oplus \ell$. Visible $SU(2)_L$ preservation forces the weak half of any compatible polarization to be $\mathbf{2}_L \otimes r$. Together these constrain the compatible pure-spinor representative to the form
$$W_+ = (\ell \wedge C) \oplus (\mathbf{2}_L \otimes r_+) \subset V_{10,\mathbb{C}},$$
up to the expected $SU(2)_R$ gauge choice and conjugate orientation. The remaining G1 question was sharper: can a TCG-native Spin(10)-invariant action on the native fields $\lambda \in \mathbf{16}$ and $H_a \in \mathbf{10}$ force this specific compatible representative as a vacuum, without smuggling in the wall orientation by hand?

Today's note gives a theorem-level negative answer. The framework can produce a pure-spinor condensate. It cannot select the wall-compatible one.

## The natural action template, and where it fails

The natural template is

$$V(\lambda, H) = V_{\rm pure}(\lambda) + V_{\rm wall}(H) + V_{\rm couple}(\lambda, H),$$

with the schematic pure-spinor potential of [the pure-spinor polarization note](/papers/30-pure-spinor-polarization/),

$$V_{\rm pure}(\lambda) = \kappa \sum_a |Q^a(\lambda)|^2 + \lambda_0 (\lambda^\dagger \lambda - v_R^2)^2, \quad Q^a(\lambda) = \lambda^T C \Gamma^a \lambda,$$

forcing the pure-spinor locus $Q^a = 0$ and the normalization $\lambda^\dagger \lambda = v_R^2$. So far so good — a pure-spinor condensate is achievable.

But $V_{\rm pure}$ chooses an orbit, not a representative within it. The nonzero projective pure spinors of a given chirality form a single homogeneous variety with $U(5)$-type stabilizer (parabolic with Levi $GL(5,\mathbb{C})$ over the complex group). Choosing $\lambda \in \mathbf{16}$ rather than $\overline{\mathbf{16}}$ distinguishes the $S_+$ and $S_-$ chiral pure-spinor families, but it does not label the P7 wall line $\ell$, the color plane $C$, or the visible $SU(2)_L$ factor. Something more is needed to select $W_+$ from the rest.

The note proves that *nothing more is available* within the TCG-native $\mathbf{16}+\mathbf{10}$ discipline.

## Three independent obstructions

**Theorem 1 — Yukawa-vanishing.** The natural Spin(10)-invariant vector-channel coupling
$$V_{\rm couple}^{\rm hol}(\lambda, H) = y H_a Q^a(\lambda) + \bar{y} H_a^\dagger \overline{Q^a(\lambda)}$$
arising from the bilinear channel $\mathbf{16} \otimes \mathbf{16} \supset \mathbf{10}$ vanishes identically on the pure-spinor locus, because $Q^a(\lambda) = 0$ *is the pure-spinor constraint by definition*. The coupling is the quantity the pure-spinor potential just forced to vanish. It cannot distinguish $W_+$ from any other pure-spinor representative.

A Lagrange-multiplier sharpening makes this even sharper: if $H_a$ is treated as a multiplier enforcing $Q^a = 0$, it vanishes from the on-shell action precisely when the constraint is satisfied. The vanishing is structural, not a tuning artifact.

**Theorem 3 — Single-vector cannot encode the wall flag.** A single vector field $H_a \in \mathbf{10}$ with a Spin(10)-invariant potential $V_{\rm wall}(H)$ can select only a Spin(10)-orbit of vectors. In the compact real form a generic nonzero vector has stabilizer $\mathrm{Spin}(9) \subset \mathrm{Spin}(10)$; in the complexified discussion, null or isotropic vector choices have parabolic stabilizers. Neither of these contains the data needed for the compatible polarization:

$$\mathbf{4} = C \oplus \ell, \qquad \ell \wedge C \subset \wedge^2 \mathbf{4}, \qquad \mathbf{2}_L \otimes r_+ \subset \mathbf{2}_L \otimes \mathbf{2}_R.$$

That is *flag* data — a Pati-Salam-decomposition-plus-weak-orientation choice — and it is not vector-orbit data. To encode the flag dynamically one would need an order parameter transforming as a projector, an adjoint, or a higher tensor — exactly the kind of higher SO(10) breaking representation ($\mathbf{45}/\mathbf{54}/\mathbf{126}/\overline{\mathbf{126}}/\mathbf{210}$) that the TCG-native discipline explicitly forbids.

A mixed-invariant loophole-closing remark covers the natural candidate $|H_a \Gamma^a \lambda|^2$. Such terms can correlate $H$ with the pure-spinor annihilator $W_\lambda$ — for example, forcing $H$ to lie in or be orthogonal to $W_\lambda$ — but they still do not supply the missing wall flag. They correlate a vector with a pure spinor; they do not generate Pati-Salam-flag-plus-weak-orientation data.

**Theorem 6 — No $\mathbf{10}$ in $\mathbf{16} \otimes \overline{\mathbf{16}}$.** The last hope is a Hermitian variant
$$V_{\rm couple}^{\rm Herm} = y_2 \lambda^\dagger \Gamma^a \lambda H_a,$$
which need not vanish on the pure-spinor locus. But this expression is not a Spin(10)-invariant scalar coupling for a single chiral $\mathbf{16}$. The Hermitian bilinear representation is

$$\mathbf{16} \otimes \overline{\mathbf{16}} = \mathrm{End}(\mathbf{16}) = \mathbf{1} \oplus \mathbf{45} \oplus \mathbf{210}$$

(Slansky 1981 standard decomposition; dimension check: $16^2 = 256 = 1 + 45 + 210$). There is no $\mathbf{10}$ in this decomposition. So $\lambda^\dagger \Gamma^a \lambda H_a$ is not a valid Spin(10)-invariant vector-channel scalar coupling. The only single-chiral-spinor vector-channel coupling available is the holomorphic $Q^a(\lambda)$, which Theorem 1 has already killed.

## The corollary, and what it means

Combining the three obstructions: under TCG-native discipline (only $\mathbf{16}+\mathbf{10}$ fields, no import of $\mathbf{45}/\mathbf{54}/\mathbf{126}/\overline{\mathbf{126}}/\mathbf{210}$), no natural low-degree $\mathbf{16}+\mathbf{10}$ Spin(10)-invariant action template — comprising the polynomial invariants $|Q|^2$, $H \cdot Q$, $H^2$, $\lambda^\dagger \lambda$, and the Hermitian bilinears in $\mathbf{1} \oplus \mathbf{45} \oplus \mathbf{210}$ — has the compatible representative $W_+$ as a forced vacuum.

**Pure-spinor condensation: achievable.**
**Compatible pure-spinor condensation: not achievable** without an additional structural input encoding the P7 wall and $SU(2)_L$-preserving polarization data.

## Residual reformulation

The residual $P_{\rm pol}^{D_5}$ splits cleanly:

> $P_{\rm pol}^{D_5} \leadsto P_{\rm pol}^{D_5,\rm compat} + X_{\rm wall-pol}.$

Here $P_{\rm pol}^{D_5,\rm compat}$ is the compatibility component substantially narrowed by [the compatible-polarization analysis](/papers/31-compatible-pure-spinor-polarizations/): once P7 and visible $SU(2)_L$ are supplied, the compatible polarization is constrained to the $W_+$ form. And $X_{\rm wall-pol}$ is the new named action-level residual:

> $X_{\rm wall-pol}$: a TCG-native dynamical source of the P7 wall + $SU(2)_L$-preserving polarization data.

Today's theorem says that $X_{\rm wall-pol}$ is not supplied by a single $\mathbf{10}$-vector coupled to a single chiral $\mathbf{16}$ pure-spinor condensate.

Neither is in the active framework ledger:

$$P_0, \ldots, P_4, \quad P_{5'}, \quad P_6, \quad P_7, \quad P_{H'}, \quad P_{SO(10)} \quad \text{(unchanged)}.$$

This is important. The result is not a hidden positive derivation. It is an obstruction note: it names the missing action-level datum and keeps it outside the active ledger. The 2026-05-01 framework closure verdict is respected — the purpose is to record a sharp negative result at the action-level layer, not to continue an open-ended search by renaming residual assumptions as derived content.

## Five failure modes

The obstruction is deliberately narrow. Five logically possible routes are recorded:

- **F1. Multi-field extension.** A second vector or additional tensorial order parameters could in principle encode more than a single vector orbit. But such an extension adds new structural assumptions; unless those fields are independently derived from the TCG ledger, the obstruction is merely displaced.
- **F2. Twistor-flag-to-polarization.** The wall data might come not from a bulk Spin(10) Higgs potential but from the chiral Penrose twistor flag $\mathbb{CP}^1 \subset \mathbb{CP}^2 \subset \mathbb{CP}^3$. This is the G2 future route named in [the compatible-polarization note](/papers/31-compatible-pure-spinor-polarizations/). It is outside the present paper's scope, and invoking it here would conflate the internal gauge sector with Lorentz/twistor geometry — which is exactly what the anti-evasion discipline forbids in this context.
- **F3. Boundary or auxiliary structure.** The wall-compatible polarization could be encoded in a boundary action or auxiliary BV–BFV sector rather than a bulk Higgs potential. This would be structurally parallel to the electron-side $P_{\rm BFV}^{\rm sec}$ residual from [the boundary-superselection obstruction note](/papers/27-boundary-superselection-obstruction/).
- **F4. Compatibility as explicit input.** The honest fallback is to retain compatibility as an imposed but sharply narrowed residual ($P_{\rm pol}^{D_5,\rm compat}$), with $X_{\rm wall-pol}$ as a named action-level source still missing.
- **F5. Look-elsewhere expansion.** Adding higher SO(10) breaking representations would solve a different problem (conventional GUT model-building) and would collapse the distinction between native TCG derivation and standard unification machinery. Explicitly forbidden.

## Where the structural arc stands now

This note completes a structural parallel across two of the three arcs:

| Arc | Structural-motivation note(s) | Action-level obstruction note |
|---|---|---|
| Gauge envelope | [Spin(10) downstream-breaking](/papers/29-spin10-downstream-breaking-family/) + [pure-spinor polarization](/papers/30-pure-spinor-polarization/) + [compatible-polarization](/papers/31-compatible-pure-spinor-polarizations/) | **This paper** ($X_{\rm wall-pol}$ residual) |
| Electron $P_4$ | bulk-boundary localization + connected-residues | [Boundary-superselection obstruction](/papers/27-boundary-superselection-obstruction/) ($P_{\rm BFV}^{\rm sec}$ residual) |
| Hadronic $P_{H'}$ | [bitwistor pair-channels](/papers/28-bitwistor-pair-channels/) | (none yet) |

The gauge-side arc has matched the electron-side arc's two-layer structure: narrowing via structural-motivation closure, then theorem-level obstruction at the action level with a precisely named residual outside the active ledger. The framework's structural picture is now its most precise version yet, and the active TCG/FPA postulate ledger remains exactly what it was before the gauge-arc work began.

The shared open layer is still the same: action-level / dynamical-completion / vacuum-mechanism construction. On the gauge side, the live future route is now G2 — derive the compatible polarization from the chiral Penrose twistor flag, *outside* the bulk Spin(10) action that today's theorem has bounded.

The paper, *Pure-Spinor Condensation Obstruction in the Spin(10) Envelope of Twistor Configuration Geometry*, is on Zenodo (DOI [10.5281/zenodo.20141601](https://doi.org/10.5281/zenodo.20141601); CC-BY-4.0). Ten pages, three theorems, one corollary, five failure modes, twelve references. Refinement trail: Tier-3 G1 prompt to GPT-5.5 Pro under strict anti-evasion guards → GPT G1 verdict OBSTRUCTED with three independent theorem-level no-gos → GPT draft paper → Claude house-style consistency pass + independent review → GPT fresh-session review (verdict: publish with minor precision revisions) → Claude application of six round-2 precision edits → Claude final review.

Condensation, not orientation. The action selects orbits; orientations require structure the action does not supply.
