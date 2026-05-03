---
title: "The Falsifiable Prediction: A Spin-1 Fifth Force, Testable on a Tabletop"
description: "The TCG framework's principal forward prediction is a spin-1 fifth force coupled at α_Y ≈ 1.88×10⁴ in the 5–10 μm range. Unlike most ambitious theoretical frameworks, this prediction can be killed in the next two to three iterations of tabletop optomechanical experiments — most of which are already in design."
pubDate: 2026-05-08
---

Theoretical physics works at scales where forward predictions are hard to come by. Frameworks that try to address foundational questions — the structure of spacetime, the origin of mass, the values of the dimensionless constants — typically operate at energies or distances far beyond what laboratory experiments can probe. This is not a failure of imagination on the theorists' part; it is the geometry of the problem. The deeper one reaches, the harder it gets to find a quantity that is both calculable from the framework and measurable on a benchtop.

Yet a forward prediction at experimental sensitivity is what gives a framework empirical traction. Without one, even a beautiful theoretical structure can stay a long time in the no-man's-land between elegant mathematics and physics: anchored to postdiction, but never tested by what it forecasts.

[Twistor Configuration Geometry (TCG)](/papers/03-tcg-fpa-model/) — the framework that proposes the dimensionless constants of nature are structural invariants of a combinatorial geometry on Penrose's projective twistor space — has one such prediction. It is concrete. It sits at experimentally accessible sensitivity. And it can be tested in the next two to three iterations of an experimental program that has been running on tabletops for over thirty years.

This post explains what the prediction is, why it has the specific value it has, and what would happen — to the framework — under different experimental outcomes.

## A Tower of Couplings, Not a Free Parameter

The TCG framework rests on seven structural postulates. The last one (P6) governs how integer-spin couplings scale across the framework's geometric strata. The result is a *tower*:

$$
\frac{Q_s}{Q_2} \;\propto\; \alpha^{\,2s - 4}
$$

where $Q_s$ is the coupling at integer spin $s$ and $\alpha \approx 1/137$ is the fine-structure constant. Crucially, this tower is not a free parameter. Two of its rungs are *already* anchored against measured physics:

- $s = 0$ (scalar) is anchored to observation O1
- $s = 2$ (graviton) is anchored to observation O2 — gravity itself

This means the framework cannot freely choose the spin-1 entry. It is a *consequence* of the tower's structural form, fixed by the two anchors. Setting $s = 1$:

$$
\alpha_Y \;\equiv\; \frac{Q_1}{Q_2} \;=\; \alpha^{-2} \;\approx\; 1.88 \times 10^{4}.
$$

Translation: the framework predicts a spin-1 force coupling roughly 18,800 times stronger than gravity at the same scale. The remaining tower entries ($s = 3, 4$) are predicted to be effectively decoupled from current experiments — too weak to detect with any planned program. So among five integer-spin rungs, only one — the spin-1 entry — is both (a) not already anchored to known physics and (b) within experimental reach.

The framework makes one forward prediction at sensitivity. Just one. Its value is fixed by O1 and O2, not chosen.

## What "At the Same Scale" Means

A force at gravity-strength sounds astronomically weak. But the prediction is not for a long-range force. It is a *short-range* fifth force — meaning the spin-1 mediator is massive, and the force falls off exponentially beyond a characteristic length $\lambda$:

$$
V(r) \;\propto\; \frac{e^{-r/\lambda}}{r}, \qquad \lambda \;=\; \hbar / (m c).
$$

The framework specifies:

$$
\lambda \;\lesssim\; 7\text{–}8\;\mu\text{m},
$$

corresponding to a mediator mass roughly $m \gtrsim 20\text{–}40$ meV. These are micrometer ranges — about the size of a red blood cell, smaller than most human hairs.

In this regime, gravity itself is mind-bogglingly weak. The Newtonian gravitational attraction between two milligram test masses 5 μm apart is on the order of $10^{-23}$ newtons — about a billion-billion times below what any conventional force sensor can measure. To probe it at all requires *optomechanical sensing*: laser-cooled cantilevers, levitated nanoparticles, or torsion oscillators tuned to within nanograms of their thermal noise floor.

For three decades, the Eöt-Wash group at the University of Washington and successor labs at Stanford, Trento, Vienna, and elsewhere have been pushing this technique to ever-shorter distances. The current state of the art:

- **Geraci et al. 2008.** Set a bound at $\lambda \approx 10\,\mu\text{m}$ that the TCG prediction sits at the *exact boundary* of. The next iteration of this experiment is, in principle, already capable of seeing or excluding the prediction.
- **Venugopalan et al. 2026.** Recent binding result places the TCG prediction at about $500\times$ below the current limit at $\lambda = 5\,\mu\text{m}$. Closing that gap is what the next two to three experimental iterations are aimed at.

In other words: if the prediction is right, the next few years of these tabletop experiments — improvements that are funded, in design, and publicly anticipated — should detect it.

> Most "fifth force" claims in the past four decades have been false alarms. The Fischbach reanalysis of the Eötvös data (1986). The early submillimeter excess hints. The torsion-balance anomalies. Each was eventually traced to systematics. What makes the TCG prediction different is not that it is more likely to be true — it is that it is more concrete in what would falsify it. A null result at $\alpha_Y \approx 1.88 \times 10^4$ in the 5–10 μm window is a clean kill, not a parameter-space adjustment.

## What Confirmation Would Mean

If a spin-1 fifth force is detected at $\alpha_Y \approx 1.88 \times 10^4$ in the 5–10 μm range, three things would follow.

First, it would mean the dimensionless constants of nature are not independently chosen parameters. The integer-spin coupling tower is a structural consequence of the framework's chamber geometry. Detecting the spin-1 entry — at the predicted strength — would be evidence that whatever underlying structure produces the tower is real. The empirical anchor would then sit not just on [nine sub-percent algebraic relations among existing constants](/papers/01-daedalus-review/) but on a forward prediction confirmed.

Second, it would imply a new fundamental interaction. The mediator would be a vector boson with mass on the order of tens of meV — not coupled to color or to the usual electroweak charges. Its phenomenology would have to be worked out, but the prediction is specific enough — strength, range, spin — to constrain that work substantially. A new gauge boson at this mass and coupling would have implications for stellar cooling, supernova bounds, and dark-matter searches.

Third, it would be evidence that gravity itself is *not* a fundamental interaction. The framework, building on the [emergent-gravity paper](/papers/08-emergent-gravity/), reads gravity as the $s = 2$ entry in the same tower. The spin-1 entry would not sit "alongside" gravity in the usual sense; both would be features of a deeper combinatorial-geometric structure on Penrose's twistor space. Newton's $G$ would lose its status as an independent constant of nature.

## What Falsification Would Mean

If two or three more iterations of these experiments push sensitivity past the predicted strength at the predicted range — and find nothing — the prediction is dead.

The framework would have several escape routes. Each costs structural coherence:

**(1) Move the prediction out of the experimental window.** The spin-1 force could be claimed to live at shorter ranges (sub-μm) or longer ranges (above 10 μm). But the strength prediction $\alpha_Y = \alpha^{-2}$ does not depend on the range. A null result at the predicted *strength* across the entire window rules out the prediction whatever the range.

**(2) Argue the spin-1 entry is screened.** Some additional mechanism could be claimed to suppress detection — environmental effects, mixing with another sector, an unexpected symmetry. But this introduces a free parameter the framework explicitly does not have.

**(3) Abandon postulate P6.** The integer-spin coupling tower is built on P6. Removing it salvages the framework's structural side but removes its principal forward prediction — and with it, the framework's testability.

None of these escapes leaves the framework what it currently is. A null result at the predicted strength would force a substantial revision — and would do so on a timescale of years, not decades.

This is the asymmetry that matters. TCG has put one specific bet on the table: a spin-1 force at $\alpha_Y \approx 1.88 \times 10^4$ in the 5–10 μm range. Confirm it, and a research program built over five years gets the empirical anchor it needs to be taken seriously. Falsify it, and the framework falls.

## Why This Pattern Is Unusual

Forward predictions in foundational physics that can be tested in a few years' time are uncommon, for good reasons. The natural observables of the field — the unification scale, the cosmological-constant problem, the structure of quantum gravity — live at energies or distances we cannot reach directly. A framework that does eventually produce one such prediction at a value and a range checkable on a benchtop is in a small minority.

Higgs's 1964 prediction had to wait 48 years for confirmation. Yukawa's pions took 12 years. Einstein's gravitational deflection of starlight was confirmed 4 years after general relativity. The W and Z bosons came 22 years after the electroweak unification. Each of these was a specific, falsifiable forward prediction — and each was eventually tested within a working physicist's career.

The TCG spin-1 prediction belongs to that category. It is at a specific strength and a specific range. If the next two to three iterations of these tabletop experiments find nothing at the predicted strength, the prediction is gone. That is what makes the prediction meaningful in Popper's sense — not a question of whether the framework is *correct*, but of whether it has put itself in a position where experiments can answer.

## What This Post Does Not Claim

The framework is not yet derived from first principles. The seven structural postulates remain postulates, not theorems. The choices that go into the construction (which strata to weight, which compactification to use, how to organize the chamber lattice) are calibrated against existing data; they are not yet shown to be uniquely required by any deeper principle.

What this post claims is more modest. *If* the framework's structural choices reflect something real about the deeper geometry of physics — and if the empirical body of [nine sub-percent relations spanning 124 orders of magnitude](/papers/01-daedalus-review/) is more than a sequence of coincidences — then the spin-1 fifth-force prediction follows. And that prediction can be tested, in tabletop experiments, in the next few years.

The full case is laid out across the [Predictions and No-Go Consequences](/papers/04-predictions-no-go/) and [Emergent Gravity](/papers/08-emergent-gravity/) papers, with the underlying spin-1 derivation specifically in the latter.

## A Note on Honesty

Strong-form vindication of TCG awaits this prediction's confirmation. The framework's empirical foothold — the nine sub-percent relations among independently-measured constants — is real but indirect: postdiction, not prediction. A correlation that spans 124 orders of magnitude is more than nothing, but it is less than a forward bet that survives experimental contact.

Until and unless the spin-1 fifth force is detected at the predicted strength, the framework remains in the medium-form state: empirically anchored but structurally open. The next two to three years of optomechanical short-range tests will tell us which form it really sits in.
