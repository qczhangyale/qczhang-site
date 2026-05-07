---
title: "What If Gravity Isn't a Fundamental Force?"
description: "Newton's G and the cosmological constant Λ — physics's two deepest hierarchy puzzles — both reduce to combinations of the fine-structure constant α and the electron Yukawa coupling y_e. Gravity, in this reading, isn't fundamental; it's a derived expression of QED and the electron's coupling to the Higgs field."
pubDate: 2026-05-04
---

Of the four fundamental forces, gravity is by far the strangest.

It's the only one we don't have a quantum theory for. It doesn't fit into the Standard Model. It is roughly forty orders of magnitude weaker than electromagnetism — a discrepancy known as the *hierarchy problem* — and there is no accepted explanation for why. The cosmological constant, which gravity also encodes, sits about 120 orders of magnitude below where naive quantum field theory predicts it should — the *cosmological-constant problem* — and there is no accepted explanation for that either.

These two are typically named as the deepest unsolved problems in fundamental physics. They are usually treated as separate problems, approached by separate research programs: supersymmetry and extra dimensions for the hierarchy problem; quintessence, dark energy, anthropic landscapes for the cosmological constant.

Suppose, instead, that they aren't separate at all. Suppose gravity isn't a fundamental force, and these aren't really problems about gravity — they are symptoms of a single fact about something else.

The dimensionless gravitational coupling between two electrons is

$$
\alpha_G \;\equiv\; \frac{G m_e^2}{\hbar c} \;\approx\; \alpha^8 \, y_e^5,
$$

a product of the fine-structure constant raised to the eighth power and the electron Yukawa coupling raised to the fifth — with no $G$ on the right-hand side, no Planck mass, no gravitational input. This holds at 0.024% precision against the CODATA measurement. The cosmological constant in Planck units is

$$
\Lambda \, \ell_{\rm Pl}^2 \;\approx\; \frac{\alpha^4}{4\pi}\!\left(\frac{m_e}{m_{\rm Pl}}\right)^{\!5}\!,
$$

at 1.9% precision. Combining the two reductions, $\Lambda \propto \alpha^{16} y_e^{15/2} / (4\pi \bar{\lambda}_e^2)$, with the electron Compton wavelength as the only length scale.

If these formulas are physical, gravity is not an independent interaction. Both its strength $G$ and its vacuum energy contribution $\Lambda$ are determined by QED ($\alpha$) and the electron's coupling to the Higgs field ($y_e$). The hierarchy problem and the cosmological-constant problem reduce to a single question: **why is $y_e \approx 3 \times 10^{-6}$ so small?**

Below: where this comes from, what it implies for cosmology, and what we'd see if it's right.

## The Hierarchy Problem in Numbers

The dimensionless gravitational coupling for two electrons is $\alpha_G \approx 1.75 \times 10^{-45}$. The dimensionless electromagnetic coupling for two electrons is $\alpha \approx 7.3 \times 10^{-3}$. The ratio is $4 \times 10^{42}$ — gravity is forty-two orders of magnitude weaker than electromagnetism between any two electrons. This isn't a small effect; it is the famous "hierarchy problem": why is gravity so absurdly weaker than the other forces?

Standard responses fall into a few buckets. **Supersymmetry** posits that loop contributions to the Higgs mass cancel between fermions and bosons, stabilizing the electroweak scale far below the Planck scale. **Extra-dimensional models** (e.g., Randall–Sundrum) localize gravity in extra dimensions where it's diluted. **Anthropic / multiverse** arguments hold that the hierarchy is a selection effect across many possible universes.

Each is a research program of decades. None has been confirmed. SUSY at the LHC has produced no superpartners up to several TeV. Extra dimensions have produced no signals at LHC or in short-range gravity tests. The anthropic argument has produced no falsifiable prediction.

Suppose, then, the question is wrong.

## Gravity from QED and the Electron Yukawa

Two empirical relations form the basis of an alternative reading.

The first, identified using the DAEDALUS dimensional-analysis engine and reported in [Paper #7](/papers/07-alpha-g-formula/), is

$$
\alpha_G \;=\; \alpha^8 \cdot y_e^5,
$$

predicting Newton's constant $G \approx 6.6727 \times 10^{-11}\;\rm m^3\,kg^{-1}\,s^{-2}$, within 0.024% (240 ppm) of the CODATA 2022 measured value. The relation involves no gravitational quantities; it expresses gravity entirely in the dimensionless electromagnetic coupling $\alpha$ and the dimensionless electron Yukawa coupling $y_e = \sqrt{2}\,m_e/v$.

The second, reported in [Paper #5](/papers/05-lambda-formula/), is

$$
\Lambda \, \ell_{\rm Pl}^2 \;\approx\; \frac{\alpha^4}{4\pi}\!\left(\frac{m_e}{m_{\rm Pl}}\right)^{\!5},
$$

at 1.9% against the Planck 2018 measured cosmological constant. Here $m_e/m_{\rm Pl}$ involves $G$ implicitly through $m_{\rm Pl} = \sqrt{\hbar c/G}$ — but combined with the $\alpha_G$ formula, this rearranges into a $\Lambda$ written entirely in QED + electroweak quantities. The result, in [Paper #8](/papers/08-emergent-gravity/):

$$
\Lambda \;\approx\; \frac{\alpha^{16} \, y_e^{15/2}}{4\pi \, \bar{\lambda}_e^2},
$$

where $\bar{\lambda}_e = \hbar/(m_e c)$ is the reduced electron Compton wavelength — the only length scale on the right-hand side. **No $G$. No $m_{\rm Pl}$. No $\ell_{\rm Pl}$.**

If these formulas are physical, every gravitational quantity in the universe — the strength of the gravitational interaction, the vacuum energy that drives cosmic expansion, by extension all derived gravitational scales — is determined by the dimensionless coupling of QED and the dimensionless coupling of the electron to the Higgs field. There is no independent gravitational scale. There is no "fundamental" gravitational coupling. **Gravity is a derived expression of electromagnetism plus the electron's mass-generating mechanism.**

> The hierarchy problem and the cosmological-constant problem stop being two problems. They become two consequences of one fact: $y_e \approx 3 \times 10^{-6}$ is extraordinarily small.

The exponent on $y_e$ is 5 in the gravitational coupling and $15/2$ in the cosmological constant. Both come from one underlying source — the Fibonacci weighting $F(5) = 5$ on the dominant $n = 3$ stratum in the super-twistor framework, see [Paper #14](/papers/14-super-flag-construction/) — and that $y_e^5$ factor is what makes both quantities small. Squaring gives the 45 orders of magnitude in $\alpha_G$; the additional $\alpha^{16}$ factor on $\Lambda$ provides the rest of the 122 orders of magnitude.

In this picture, the famous hierarchies of physics — gravity vs. electromagnetism, observed dark energy vs. naive QFT prediction — aren't anomalies. They are exactly what you'd expect from a small $y_e$ raised to a small integer power.

## What It Means for Cosmology

If gravity is a derived expression of QED + electroweak, several consequences follow for cosmology.

**The cosmological constant has a definite predicted value.** Not a value to be tuned. Not a value to be selected anthropically. A value computed from $\alpha$ and $y_e$. The implied dark-energy scale is 2.25 meV, against the observed value of approximately 2.3 meV. The vacuum energy density admits a suggestive algebraic decomposition: $m_e^4/(16\pi^2)$ has the form of a one-loop electron vacuum energy; $\alpha^4$ matches the order of light-by-light scattering, the first genuinely nonlinear QED vacuum effect; $m_e/m_{\rm Pl}$ is a single-graviton-vertex suppression factor.

**The dark-energy equation of state is exactly $w = -1$.** No quintessence. No phantom field. No dynamical dark energy. The cosmological constant is genuinely constant. If DESI or Euclid measure even a small deviation from $w = -1$ — say, a 5σ detection of $w(z) \neq -1$ — the entire framework is falsified. The May 2024 DESI early-data hint of dark-energy evolution at 2–3σ will be resolved by DESI Y3 in 2025–2026 and Euclid by 2027.

**The fine-structure constant cannot drift in time.** If $\alpha$ drifted, then via $\alpha_G = \alpha^8 y_e^5$, $G$ would drift in a specific correlated way: $\delta G/G = 8\,\delta\alpha/\alpha$ (plus a smaller dependence on $\delta y_e/y_e$). The ESPRESSO spectrograph has been searching for $\alpha$-drift since 2018 and has found none at the $10^{-6}$ level over $\sim 10^9$ years; the framework is consistent with that bound but predicts that any future $\alpha$-drift detection would automatically imply correlated $G$-drift.

**Newton's constant has a predicted value, in tension with current measurement.** The $\alpha_G$ formula predicts $G = 6.6727 \times 10^{-11}\;\rm m^3\,kg^{-1}\,s^{-2}$. The CODATA 2022 recommended value is $6.67430 \times 10^{-11}$, with relative uncertainty about 22 ppm. The two differ at roughly 11σ. This is uncomfortably large to dismiss. Either the framework is wrong, or the CODATA value is biased. The recommended action: precision $G$ measurement campaigns at HUST (Wuhan), JILA (Boulder), and BIPM, all targeting sub-10-ppm precision through the late 2020s.

**Gravity is not a quantum interaction in the sense that QED is.** If gravity is a derived expression of QED + electroweak, there is nothing fundamental to "quantize" about gravity. The ongoing search for a quantum theory of gravity — string theory, loop quantum gravity, asymptotic safety, etc. — would, in this view, be looking for the wrong thing. The right question would become: how does the geometry of spacetime emerge from QED plus the electron's coupling to Higgs? That is a structurally different question.

## What It Doesn't Solve

This is not a solution to the hierarchy problem. It is a reduction of it.

The framework does not derive $y_e$ from any deeper structure. The smallness of the electron Yukawa — six orders of magnitude below unity — remains, in the gravity-not-fundamental view, an empirical input. We have shown that several other small numbers ($G$, $\Lambda$, the gravitational hierarchy) reduce to powers of $y_e$. We have not shown why $y_e$ is small.

The framework also does not derive *why* the electron, specifically, plays this role. As [the Electron-Architect paper](/papers/10-electron-architect/) argues, the electron is the unique Standard Model particle satisfying five simultaneous constraints — stability, electric charge, elementarity, nonzero Higgs coupling, minimality — that any analogous set of relations would require. But this is a structural argument, not a derivation from a deeper theory.

The framework also does not propose a microscopic mechanism. We do not have an answer for *how* QED and the electron Yukawa generate spacetime curvature in the way mass–energy is supposed to. The emergent-gravity reading is consistent with the empirical formulas, but the dynamical content — how do field equations on a curved background arise from QED on flat spacetime plus the electron's coupling to Higgs? — remains undeveloped.

These are not denials of the framework's claims. They are an honest accounting of where the framework stops. The empirical relations are concrete. Their re-reading as "gravity isn't fundamental" is interpretive. The interpretation is bold, but it sits on top of empirical observations whose mechanism we don't yet possess.

## How This Connects to TCG

The broader research program is Twistor Configuration Geometry (TCG). Within TCG, both $\alpha_G$ and $\Lambda$ admit a unified reading on a super-flag inside Witten's super-twistor space $\mathbb{CP}^{3|4}$. In that reading,

$$
Q_s \;\propto\; \mathcal{I}[1]^{-2(s+2)} \cdot y_e^{F(5)},
$$

where $Q_s$ is the strength of a vacuum operator of integer spin $s$, $\mathcal{I}[1] = \pi + \pi^2 + 4\pi^3 \approx 1/\alpha$ is the chamber-weighted Fubini–Study volume, and $F(5) = 5$ is the Fibonacci factor on the dominant $n = 3$ stratum. Setting $s = 2$ gives the gravitational coupling $\alpha_G \propto \alpha^8 y_e^5$. Setting $s = 0$ gives the cosmological constant $\Lambda \propto \alpha^4 y_e^5$ (with the additional $4\pi$ and Compton-wavelength factors). Setting $s = 1$ — the spin-1 case between them — gives a forward prediction: a vector-mediated short-range fifth force at $\alpha_Y \approx 1.88 \times 10^4$, in 5–10 µm range, currently 500× below experimental sensitivity. See [Paper #8](/papers/08-emergent-gravity/) for the derivation.

This is the framework's principal forward prediction. If a spin-1 short-range fifth force is seen with the predicted strength after sensitivity improves by 2.5 orders of magnitude, the gravity-not-fundamental view is strongly supported. If no signal is seen, the spin-degree-rule postulate (P6) is falsified, and the unified reading collapses.

## Bottom Line

Gravity reduces, in this empirical body, to combinations of $\alpha$ and $y_e$. Newton's $G$ is predicted (in 11σ tension with the current CODATA value). The cosmological constant is predicted (within 1.9% of measurement). The dark-energy equation of state is predicted (strictly $w = -1$).

If these reductions are physical, the hierarchy problem and the cosmological-constant problem are not problems about gravity. They are problems about $y_e$ — why is it so small?

The framework does not derive $y_e$. It compresses it. The TCG program proposes a structural answer — that $y_e$ is a chamber invariant of a configuration space over Penrose's twistor space $\mathbb{CP}^3$. Confirming that answer awaits further work, including experimental detection of the spin-1 fifth-force prediction.

Until that confirmation, the gravity-not-fundamental view is a research program rather than a theory. But it is a research program with definite empirical commitments, definite falsification paths, and a clear conceptual reframing of what we mean when we ask: *why is gravity so weak?*

The answer might simply be: gravity isn't a force at all, and the question doesn't refer to anything fundamental.
