---
title: "DAEDALUS: The Engine That Tells Numerology from Physics"
description: "Eddington spent his later years trying to derive 1/α from the integer 137. Dirac proposed the Large Numbers Hypothesis, falsified by fifty years of geological evidence. The history of dimensional-analysis numerology is mostly a history of failure. Here is one attempt at a principled distinction — a search engine with explicit filters, a track record of nulls, and a candid accounting of where it succeeds and fails."
pubDate: 2026-05-06
---

In 1951, the physicist Friedrich Lenz wrote a two-sentence letter to *Physical Review* noting that the proton-to-electron mass ratio is almost exactly $6\pi^5$. No theory, no derivation, just the observation. Seventy-five years later, no one has derived it from first principles. But it isn't alone.

Eddington spent his later years trying to derive $1/\alpha$ from the integer 137. Dirac proposed the Large Numbers Hypothesis, which connected gravitational and electromagnetic ratios via a time-varying $G$ — falsified by fifty years of geological evidence. Various authors have noted that $1/\alpha \approx 137.036$ sits suspiciously close to $\pi + \pi^2 + 4\pi^3$, that $m_p/m_e$ is close to $6\pi^5$, that the cosmological constant in Planck units sits near $\alpha^4(m_e/m_{\rm Pl})^5$ — and so on, indefinitely.

This kind of work has a name: numerology. Among working physicists, the name is an insult.

The objection isn't that the patterns don't exist. They do. The objection is that nobody has found a principled way to distinguish "these patterns reflect deep physics" from "with so many fundamental constants and so many simple closed-form expressions, some of them coincide by chance."

[DAEDALUS](/papers/09-daedalus-methodology/) — the **D**imensional **A**nalysis **E**ngine for **D**iscovering **A**lgebraic **L**inks in **U**nderlying **S**ymmetries — is an attempt at exactly that distinction. It is a computational tool that systematically searches for polynomial relations among fundamental constants, *and* applies explicit filters to weed out spurious matches.

This post documents what the engine does, the obstacles it ran into, and its track record so far.

## What the Engine Does

DAEDALUS takes two inputs: a list of constants ($\alpha$, $\hbar$, $c$, $G$, $m_e$, $k_B$, $\Lambda$, …) and a target-value dictionary (the physical quantities we want to match).

The engine then enumerates all dimensionless combinations of those constants — every permutation, with a set of exponents, constrained to lie in certain ranges. For each combination, it checks whether the value matches any target in the dictionary.

This is brute-force enumeration in the literal sense. On a database of 17 constants, the engine produced **307,900 raw hits**.

If each raw hit were declared a discovery, this paper would be classical numerology. The point is what happens next.

## The Saturation Problem

The engine produced hundreds of thousands of hits. Even with no underlying physics, you'd expect some numbers to coincide by chance. The question is: how many? At what tolerance?

We call this the *saturation problem*: naive dimensional analysis produces "coincidences" in such quantities that no signal can survive among them. At every scale, you can find apparently simple relations — provided you're willing to tune exponents and tolerances.

> If a program can find a thousand striking-looking matches, and the vast majority are pure chance, then any individual match is unconvincing. This is why "$137 \approx \pi + \pi^2 + 4\pi^3$" sounds exciting but is silently rejected by serious physicists — they know implicitly that, in a large enough search space, this kind of thing must happen.

To avoid this, you have to do two things: (1) shrink the search space; (2) impose structural constraints on the survivors. That is what the DAEDALUS two-level filter does.

## The Two-Level Filter

**(1) Numerical filter.** Restrict the target dictionary — allow searching only for "physically privileged" targets ($\alpha$, $\alpha_G$, $\Lambda$, $m_p/m_e$, $\eta$, and other quantities known to be important), not any number. Also restrict the number of constants allowed per relation (seven, not arbitrary). This compresses the search space from astronomical to tractable.

**(2) Structural filter.** Surviving candidates must satisfy:

- Integer exponents (no "tuned" values like 0.737)
- Physically meaningful sign structure (mass ratios positive, etc.)
- Standard prefactors consistent with quantum field theory (factors of $4\pi$, $1/(4\pi)$, $1/4$, etc. — typical QFT factors, not arbitrary decimals)

The second layer is the philosophically contested part. It encodes physical priors about which kinds of relations count as plausible. We are entirely candid about this: those priors are choices, not derivations from anything more fundamental. A different prior set would yield a different set of survivors. We argue ours is reasonable (the priors correspond to what field theory would natively expect), but that is an argument, not a theorem.

## Applied to the 17-Constant Database

Run on the standard 17-constant database (covering electromagnetism, gravity, particle physics), the engine produces: 307,900 raw hits. After the numerical filter: a few thousand. After the structural filter: **0–3 privileged-target hits per 7-constant subset**.

Meaning: in a search space where naive analysis would produce hundreds of thousands of "striking coincidences," the fully-filtered search produces fewer than a dozen signals — and those either match measurements within four orders of precision or they don't.

The ones that *don't* are equally important. We document six systematic null results: families of relations DAEDALUS suggested it might find a match for, that turn out not to. Heavy-quark Yukawas don't yield integer exponents the way the electron Yukawa does. CKM angles don't participate in any surviving relation. The chiral symmetry-breaking scale doesn't pass the filter cleanly.

The nulls matter as much as the positives. They tell us where the engine succeeds and where it fails — which is what any methodology paper should provide.

## The Track Record

To date, the relations discovered through DAEDALUS that have been published total **four** ($\alpha_G \approx \alpha^8 y_e^5$, the [$\Lambda$ formula](/papers/05-lambda-formula/), the [$\eta$ relation](/papers/06-eta-relation/), the [electron-Yukawa closed form](/papers/13-electron-yukawa/)), all at sub-1% precision. Each was reported independently in its own paper.

The track record is not saying "this framework is correct." It's saying: running this specific filter protocol on this specific constant database produces this specific surviving set, and they hold up under further checks (exponent stability, error propagation, look-elsewhere corrections).

Anyone else willing to adopt the same prior set, running the same engine, should arrive at the same survivors. That is the entire claim of this methodology paper: a reproducible, auditable search protocol that explicitly states its own assumptions.

## Not Numerology. But…

What separates DAEDALUS's output from traditional numerology isn't that it found a particularly "beautiful" formula. It's that the few formulas it did find passed the filter, and hundreds of thousands of candidates didn't.

But we don't pretend objectivity. The structural filter encodes our judgments about what counts as physically reasonable. A different researcher, with different judgments, would get a different set of survivors. That's honest.

The next step in the research — taken up by the broader [Twistor Configuration Geometry program](/papers/03-tcg-fpa-model/) — is to give those survivors a common geometric origin. If the nine surviving relations all read out from a single combinatorial space (chamber-style compactifications on Penrose's twistor space $\mathbb{CP}^3$), then the question "why these numbers and not others" has an answer.

But even without that broader framework, this methodology paper makes a neutral and concrete contribution: it converts "discovery of coincidences" from a one-off, irreproducible activity into a process with rules, filters, and a record of nulls.

The full corpus is on Zenodo, CC-BY-4.0; see [all sixteen papers](/papers/) on this site.
