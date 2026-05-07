---
title: "DAEDALUS: A Dimensional-Analysis Engine for Discovering Algebraic Links Among Fundamental Constants"
shortTitle: "DAEDALUS methodology"
doi: "10.5281/zenodo.20062462"
date: 2026-05-07
order: 9
category: method
description: "The methodological apparatus underlying the DAEDALUS empirical body. Discovery engine + saturation-problem analysis + numerical and structural filters + Monte-Carlo permutation tests calibrated against Rydberg and Bohr radius. v2 adds a multi-relation look-elsewhere audit with trial-space cardinality estimates, independence reduction, three procedural safeguards, and Bayes-factor calculation."
---

## Abstract

We describe DAEDALUS (Dimensional Analysis Engine for Discovering Algebraic Links in Underlying Symmetries), a systematic computational tool for searching for polynomial relations among fundamental physical constants. The engine enumerates all dimensionless combinations of a given set of constants and tests them against a dictionary of target values. We identify a fundamental obstacle — the *saturation problem* — in which naive dimensional analysis produces hundreds of thousands of apparent "coincidences" that are statistically inevitable rather than physically meaningful. To address this, we introduce a two-level filter: (1) a *numerical filter* that restricts the search to physically privileged targets and limits the number of constants per relation, and (2) a *structural filter* that requires surviving candidates to have integer exponents, physical sign structure, and standard prefactors consistent with quantum field theory. Applied to a 17-constant database spanning electromagnetism, gravity, and particle physics, the engine produces 307,900 raw hits but only 0–3 privileged-target hits per 7-constant subset after filtering.

A Monte Carlo permutation test (100 trials with scrambled $\Lambda$ values) yields a 27% false-positive rate for any structural survivor but only 1% for the specific QFT-coherent form of the published cosmological-constant formula. We calibrate the methodology by running an analogous form-specific permutation test on two textbook-accepted dimensional relations — the Rydberg constant $R_\infty = \alpha^2 m_e c / (4\pi\hbar)$ and the Bohr radius $a_0 = \hbar / (\alpha m_e c)$ — obtaining form-specific recovery rates of 1.0% and 0.5% respectively, of comparable order to the 1% rate found independently for the cosmological-constant formula, indicating that the form-specific rate is a property of the procedure rather than a number tuned to a single sector.

We report the engine's track record: four published relations, six systematic null results, and a clear map of where dimensional analysis succeeds and fails. The structural filter is specified algorithmically, but we emphasize that it encodes physical priors that are themselves choices — different priors would yield different survivors.

In v2 (May 2026), we extend the look-elsewhere analysis from the single-relation case to the multi-relation case (Section 7), providing trial-space cardinality estimates under three formula-grammar levels, an independence reduction of the broader empirical body to ~5–6 statistically independent matches, three procedural safeguards that pre-register the strict grammar, and Bayes-factor calculations giving $3 \times 10^2$ to $3 \times 10^5$ in favor of the framework being non-trivial. The audit refines the program's headline claim and converts the informal look-elsewhere narrative into a formal pre-registration mechanism.

## DOI

[https://doi.org/10.5281/zenodo.20062462](https://doi.org/10.5281/zenodo.20062462)
