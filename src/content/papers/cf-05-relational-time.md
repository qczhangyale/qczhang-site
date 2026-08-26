---
title: "Relational Time without a Free Arrow: Record Capacity, Negentropy Transport, and Finite Autonomous Maintenance"
shortTitle: "Relational Time"
doi: "10.5281/zenodo.21926033"
date: 2026-08-18
order: 5
series: cf
release: 1
code: CFQF-Q2
category: cf-quantum
description: "A relational clock can order change without an external time parameter — but ordering is not yet a thermodynamic arrow. This paper separates the resources an arrow actually requires: writable capacity, kinetic persistence, active repair, syndrome disposal, controller order, fuel, waste, and an open boundary."
keyFormula: "ΔN(M) = ΔS(E_res) − ΔI(M : E_res)"
---

## Abstract

Relational clocks can order conditional change in a globally stationary or microscopically reversible description, but ordering is not yet a thermodynamic arrow. We formulate the missing step as a resource-accounting problem for records, separating clock readability, writable register capacity, kinetic persistence, active repair, syndrome disposal, controller order, fuel, waste, and open boundary support. A finite stationary history gives exact conditional motion, while an elementary obstruction shows that a functional monotone under every transformation and inverse in a two-sided reversible group is constant on each orbit. For a pointer-preserving controlled interaction, the acquired record information obeys $I(S{:}R_{\rm mem})'=S(R_{\rm mem}')-S(R_{\rm mem})$ and is bounded by the initial writable capacity $\log_2d_{\rm mem}-S(R_{\rm mem})$. For closed reversible memory–reservoir dynamics, the identity $\Delta\mathcal{N}_M=\Delta S(E_{\rm res})-\Delta I(M{:}E_{\rm res})$ distinguishes local purification from reservoir entropy and correlation transport. Exact finite real models then exhibit reversible redundant writing, a finite controller with a hold window and exact recurrence, symmetric barrier protection, reversible three-bit majority repair, and the conditional syndrome burden $H(Y\mid L)=3h_2(q)-h_2(3q^2-2q^3)$ when the reference word is known (or the input $X$ is retained together with the decoded datum $D=X\oplus L$). A separate staged frozen-composition chemical-affinity benchmark evaluates a stationary binary reset at successive externally specified fuel–waste compositions, giving a nominal error increase from one to five percent; it is not a joint autonomous stochastic process. Across cycles, marginal syndrome entropies do not generally add; the fresh burden is $H(Y^n\mid Z)=\sum_kH(Y_k\mid Y^{<k},Z)$, where $Z$ denotes all retained side information. In a closed classical cyclic-reset architecture whose sole information sink is a finite waste register $W$, we prove $H(Y^n\mid Z)\leq\log_2d_W-H(W_0)$, with $W_0$ initially independent of $(Y^n,Z)$; a finite cycle bound follows only when every cycle has a uniform positive fresh burden. The contribution is the integrated, assumption-controlled dependency architecture, its exact finite exemplars, and a separately scoped phenomenological benchmark. The results neither derive a fundamental thermodynamic arrow nor impose a universal finite-memory lifetime. The finite constructions and resource architecture also do not select complex over real representations.

## The conceptual shift

> The arrow of time is not supplied merely by a variable that tells time. It depends on the physical economy of creating, protecting and exporting records.

A film running backward still contains an ordered succession of frames. What makes it look wrong is not the absence of sequence but the behaviour of records, heat and waste. The past is not only what comes earlier in an ordering — it is what has left stable evidence.

A reversible interaction can create records; it can also erase them by running backward. A finite controller can maintain a record for a long interval and still eventually recur. A subsystem can become more entropic because correlations have moved elsewhere, even when the complete dynamics remains reversible.

## Where it sits in the release

CFQF-Q2 takes a relational foundation directly from [CF-F1](/papers/cf-01-relational-unity/) and quantum-foundations context from [CFQF-Q4](/papers/cf-02-complementarity-before-quantum/).

**[Download paper (Zenodo)](https://doi.org/10.5281/zenodo.21926033)** — 42 pages. CC-BY-4.0.
