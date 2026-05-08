---
title: "Nine Numbers in Physics That Shouldn't Have Closed Forms"
description: "From Eddington to Dirac to Koide, physicists have a long history of finding numerical patterns in fundamental constants — and a long history of being wrong about them. So when nine independently-measured constants of nature turn out to admit clean algebraic expressions in a small vocabulary of π, factorials, and the golden ratio, the standard reaction is to file it away with the older failures. A new review argues we shouldn't. The pattern is more specific, more precise, and more falsifiable than any of the historical near-misses. Whether it survives the next decade of measurement is now a real empirical question."
pubDate: 2026-05-08
---

In 1937, the physicist Arthur Eddington wrote a paper claiming that the inverse fine-structure constant — the dimensionless number $1/\alpha$, which controls the strength of electromagnetism — was exactly 137. Not approximately 137, *exactly* 137. He had a derivation. It involved counting elements of a 16-dimensional algebra. It was wrong, in the sense that high-precision measurement eventually showed $1/\alpha = 137.0359...$, not the integer 137. But the mistake left a mark. For most of the twentieth century, "Eddington" was the word physicists used to dismiss anyone who tried to derive a fundamental constant from a closed-form expression.

A few people kept trying anyway. Paul Dirac proposed in 1937 that gravity weakens over cosmic time, motivated by a suspicious numerical coincidence between the age of the universe and the ratio of electromagnetic to gravitational forces. Geological evidence falsified that within fifty years. In 1951, the German physicist Friedrich Lenz wrote a two-sentence letter to *Physical Review* observing that the proton-to-electron mass ratio is almost exactly $6\pi^5$. The letter contained no theory, no derivation. It just stopped. Seventy-five years later, no one has explained the match; it's still 1.88 × 10⁻⁵ accurate.

The history of trying to find closed forms for the constants of physics, in other words, is mostly a history of failure. Numerologists fish in a large pond and occasionally pull up something that looks like a fish. Most of these turn out, on closer inspection, to be coincidences in a vocabulary too generous to constrain.

A paper I posted to Zenodo a few weeks ago — the DAEDALUS Review — argues that something unusual is happening with a specific group of nine numerical relations. Not because the matches are particularly precise individually (some are; some aren't), but because they cluster: nine relations across six independent sectors of physics, all closed-form, all in a small specific vocabulary, all unexplained. The probability that this clusters by accident is not zero, but it's much smaller than the probability that any individual match arose by accident. The review is a consolidation of these nine relations and an honest accounting of where they sit between physics and numerology.

This post is a tour through the pattern.

## What "Constants of Physics" Means

Step one is technical, but worth a paragraph. The dimensionless constants of physics are numerical ratios that survive any choice of units. The mass of the electron in kilograms is a unit-dependent quantity; if we measured everything in Planck units it would be a different number. But the *ratio* of the electron mass to the Planck mass — call it $m_e/m_{\rm Pl}$ — is unitless, and it would be the same number to any civilization in any galaxy that worked out fundamental physics. Same for $1/\alpha$ (the inverse fine-structure constant, around 137), the strong-coupling constant, the weak mixing angle, the cosmological constant in Planck units, the various Yukawa couplings of the Standard Model, and so on. There are roughly two dozen of these in modern physics, and the conventional reading is that each one is an *input* — a free parameter, fixed somehow, with no expected closed-form expression.

The conventional reading has nothing to say about why any of them have the values they do. It just records them.

## The Pattern

Across six sectors of physics, here are nine of these dimensionless quantities and their closed-form expressions:

- The fine-structure constant. Empirical $1/\alpha = 137.035999$. Closed form: $\pi + \pi^2 + 4\pi^3 = 137.0363$. Precision: 2.2 parts per million.
- The cosmological constant in Planck units. Empirical $\Lambda \ell_{\rm Pl}^2 \approx 2.85 \times 10^{-122}$. Closed form: $(\alpha^4/4\pi)(m_e/m_{\rm Pl})^5$. Precision: 1.9% (the only entry above sub-percent).
- The gravitational coupling. Empirical $\alpha_G = G m_e^2 / \hbar c \approx 1.75 \times 10^{-45}$. Closed form: $\alpha^8 y_e^5$, where $y_e$ is the electron's coupling to the Higgs field. Precision: 0.024%.
- The strong-coupling number, $\alpha_s^{-1}(M_Z) \approx 8.46$. Closed form: a chamber-weighted ratio derived from the same geometric machinery. Precision: 0.3%.
- The weak mixing angle at low energy. Empirical $\sin^2\theta_W(0) \approx 0.2386$. Closed form: $3/(4\pi) = 0.2387$. Precision: 0.03%.
- The electron Yukawa coupling, $y_e \approx 2.94 \times 10^{-6}$. Closed form: $(1 - 1/(2\pi)) \, e^{-4\pi}$. Precision: 0.09%.
- The muon-to-tau mass ratio, satisfying golden-ratio scaling. Predicted muon mass: 0.24% accuracy. Predicted tau mass: 0.54%. (More on this in a separate post.)
- The pion-to-electron mass ratio, $m_\pi/m_e \approx 273.13$. Closed form: $2(\pi + \pi^2 + 4\pi^3) = 274.07$. Precision: 0.05%.
- The W-boson mass over the Higgs vacuum expectation value, $M_W/v \approx 0.32636$. Closed form: $1/\sqrt{3\pi} = 0.32574$. Precision: 0.21%.

Eight of nine at sub-percent. One (the cosmological constant) at 1.9%. The cosmological-constant entry is the loosest match, but a 1.9% closed form for a quantity that disagrees with naive quantum field theory by 122 orders of magnitude is, on its own, remarkable.

The constants on the left side of each relation are independently measured. CODATA produces $\alpha$ from precision atomic-physics measurements; the Particle Data Group produces $M_W$ from collider physics; the cosmology community produces $\Lambda$ from supernova distances and microwave-background fluctuations. None of these communities talks to the others about closed forms. Each measurement program is its own independent activity. The right-hand sides — the closed forms — are simple expressions in $\pi$, the golden ratio $\varphi$, small Fibonacci numbers, and small rationals. The vocabulary is constrained.

## Why This Is Different From Eddington

The Eddington-style worry is that any sufficiently flexible mathematical vocabulary can match any number. Take $\pi$ alone, allow yourself low-degree polynomials in $\pi$ with small integer coefficients, and the trial space is already in the millions. Match one constant to a few parts per million, and the probability of accidental success is not negligible.

The DAEDALUS Review takes this worry seriously. A companion paper, the DAEDALUS Methodology, performs an explicit "look-elsewhere" audit: it estimates, under three different formal grammars, how many distinct closed-form expressions could appear in each grammar. The strict grammar — pre-registered atoms only, restricted operations — admits between $10^2$ and $10^3$ candidate expressions. The constrained grammar (more atoms, more operations) admits $10^7$ to $10^{12}$. The broad grammar (everything goes) admits up to $10^{17}$.

The conclusion: under the strict grammar, six of the nine matches survive as statistically defensible. The pattern is real at that level. Under the broad grammar — where Eddington-style fishing would live — the pattern dissolves into the noise. So the question becomes: which grammar are we in?

The review argues for the strict one, on the grounds that the right-hand sides actually use only a small set of primitives ($\pi$, $\varphi$, small Fibonacci, small rationals), pre-registered before the matches are found. The framework that proposes the closed forms — Twistor Configuration Geometry — identifies these primitives as outputs of a specific configuration-space construction. In that picture, the limited vocabulary isn't a chosen restriction; it's a structural fact about which mathematical objects the framework can produce.

That argument is itself contestable, but it's a real argument, not numerology. The review is honest about its dependence on the strict-grammar reading.

## The Cabibbo Comparison

There is a useful precedent. In 1963 Nicola Cabibbo noticed that the rate of strange-quark decay was about $\sin^2\theta_C$ times the rate of down-quark decay, where $\theta_C \approx 13°$ was a single number. The "Cabibbo angle" had no derivation. The Standard Model, when assembled in the 1970s, took the Cabibbo angle as an empirical input. Sixty years later it's still an empirical input. We do not have a derivation.

Nobody calls the Cabibbo angle numerology. We call it a parameter we don't yet understand.

The DAEDALUS Review proposes the same status for the nine relations: they are empirical regularities at the *Cabibbo level* — real, surviving across decades of measurement, constraining future theory, but not yet derived. The Koide formula for charged-lepton masses (1981) sits in this status. There are a handful of others. They are not failed theories; they are tightenings of empirical input that the field has not yet absorbed into a deeper structure.

What the review claims is not that the nine relations are a derivation. It claims they are nine new entries in the Cabibbo-level catalog: regularities that look like the empirical signature of structural underpinning, not the empirical signature of accident.

## How This Will Be Settled

Two things will determine whether this pattern is real or coincidence. The first is precision over time. Of the nine relations, $1/\alpha = 137.035999$ vs $\pi + \pi^2 + 4\pi^3 = 137.0363$ has the most-measured left side. CODATA tightens the experimental value of $\alpha$ every few years. If $1/\alpha$ moves *away* from $\pi + \pi^2 + 4\pi^3$ as the uncertainty shrinks — if the residual grows — the structural reading is falsified. If it stays where it is, with the residual shrinking only because the experimental uncertainty shrinks but the central value stable, the reading survives.

The second is temporal variation. The strongest empirical commitment of the structural reading is that fundamental constants don't vary in time. Atomic-clock comparisons across decades, quasar absorption spectra from the early universe, lunar laser ranging — all of these put bounds on how much $\alpha$ and $m_p/m_e$ can have varied since the Big Bang. The current bounds are tight (parts per $10^{16}$ per year for $\alpha$). They will get tighter. The structural reading predicts they will keep tightening and never find variation. If a non-zero variation is detected, the entire program is dead.

These are real falsification criteria. They are why the review insists on the difference between numerology and empirical regularity at Cabibbo level: numerology has nothing to lose if a measurement comes in differently. The structural reading has everything to lose.

## What This Is, In the End

The DAEDALUS Review is not an argument that physics has been solved, or that some new theory has been derived, or that the Standard Model is wrong. It is an argument that nine independently-measured dimensionless ratios admit closed-form expressions in a constrained vocabulary, that this clustering is unlikely under the conventional "free parameters" reading, and that the pattern looks more like the trailing edge of a structural framework than like accident.

If you take only one thing from it: the constants of physics may not be inputs. They may be outputs of a structure we haven't yet identified. Whether that structure is Twistor Configuration Geometry — the candidate framework the review accompanies — or something else, or nothing at all, will be settled by precision measurements over the next decade or two. The structural reading makes a falsifiable bet: the constants stay where they are, the residuals shrink with experimental uncertainty rather than grow, and no temporal variation is found.

If that bet wins, we will need to find the structure. If it loses, the nine matches were coincidences after all, and the review will be filed alongside Eddington's. We will know within twenty years.

---

*The paper "DAEDALUS: A Review of Nine Numerical Observations on Fundamental Constants and a Twistor Configuration Geometry Framework" is on Zenodo at DOI [10.5281/zenodo.19984246](https://doi.org/10.5281/zenodo.19984246), CC-BY-4.0.*
