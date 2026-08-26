---
title: "An Intrinsic Six-Sector Reynolds Cancellation Theorem for Local Regge Zero Germs"
shortTitle: "Six-Sector Reynolds Cancellation"
doi: "10.5281/zenodo.21926078"
date: 2026-08-18
order: 8
series: cf
release: 1
code: CUD-G2
category: cf-gravity
description: "The opposite question to its companion: why must a local Regge response be exactly zero? For a complete simply-transitive S₃ orbit of six incident sectors with exact equivariance, Reynolds averaging isolates the invariant component — cancellation is equivalent to absence of a trivial-isotype component."
keyFormula: "Σ(σ=1..6) α_σ = 6 · Π(S₃) α(σ₀)"
---

## Abstract

This article isolates an exact local cancellation mechanism in Lorentzian Regge calculus. The finite source convention is stated explicitly: squared-edge variables, a six-mode spatial perturbation map at $\tau = 7/10$ with anchor $T_0 = 7/5$, fixed Lorentzian angle branches, and an interior-hinge flat-linearized Regge response. For a hinge with six incident four-simplex sectors, let $\alpha_\sigma$ be the sector-angle derivative covector on the mode space $(XX, YY, ZZ, XY, XZ, YZ)$. If the sectors form a complete simply-transitive $S_3$ orbit and the source is exactly equivariant, then

$$\sum_{\sigma=1}^{6}\alpha_\sigma = 6\,\Pi_{S_3}\alpha_{\sigma_0}.$$

Thus cancellation in this branch is equivalent to absence of a trivial-isotype component; sectorwise stationarity remains a distinct mechanism. In the natural spatial permutation representation, the Reynolds projector has rank two and the test reduces to vanishing diagonal and off-diagonal coordinate sums. The theorem is realized by a rooted-Kuhn Boolean rank-1/rank-3 family and by a completed warped non-Boolean $S_3$ star. A source-only census covers 115 authenticated occurrences, representing 74 distinct triangle tuples: 43 are exact zeros, split into 31 orbit cancellations and 12 stationary cases. Prospectively frozen deterministic tests cover one recurrent Boolean occurrence, 18 catalog-transfer occurrences, and one non-Boolean occurrence, with maximum float64 decision residual $3.63 \times 10^{-15}$. A separate 90-digit reconstruction gives $2.51 \times 10^{-91}$. The result is conditional and finite-scope, not a global classification, arbitrary-mesh invariance, continuum limit, or nonzero-amplitude law.

## Two mechanisms, kept separate

The 43 exact zeros in the census do **not** share one explanation:

- **31 orbit cancellations** — the trivial-isotype component is absent, so the six sector covectors cancel under Reynolds averaging.
- **12 stationary cases** — sectorwise stationarity, a genuinely distinct mechanism.

Keeping them apart is the point. "Intrinsic" here means the theorem is stated in terms of the local orbit, its induced representation, and the restricted covectors — not a construction-history label or a preferred coordinate recipe. It does not mean every local Regge zero has been classified.

## Where it sits in the release

CUD-G2 takes its parent gravity architecture from [TCG-F1](/papers/cf-06-tcg-paired-incidence/). Its exact-zero mechanism is distinct from the nonzero source-sufficiency problem of [CUD-G1](/papers/cf-07-h2r-regge-transfer/); neither paper uses the other's mechanism as a substitute for its own argument.

**[Download paper (Zenodo)](https://doi.org/10.5281/zenodo.21926078)** — 15 pages. CC-BY-4.0.
