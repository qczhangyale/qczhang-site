---
title: "Predicting the Muon and Tau Masses From a Number You Already Know"
description: "When the muon was discovered in 1936, the physicist Isidor Rabi asked the question that has lingered ever since: 'Who ordered that?' Three charged leptons exist — electron, muon, tau — and the Standard Model has nothing to say about why their masses have the values they do. A short paper in the TCG program proposes that the logarithms of the three lepton Yukawa couplings satisfy golden-ratio scaling, and that combined with a closed-form expression for the electron Yukawa, this scaling predicts the muon and tau masses to under 1% accuracy from π, the golden ratio φ, and the Higgs vacuum value alone. The pattern does not extend to quarks. That asymmetry might itself be telling us something."
pubDate: 2026-05-08
---

In 1936, the physicists Carl Anderson and Seth Neddermeyer were studying cosmic rays passing through a magnetic chamber at Caltech. They noticed a particle that bent the wrong amount: heavier than an electron but much lighter than a proton, with otherwise identical properties to the electron. It was eventually called the *muon*, and it has been studied for nearly a century. It decays in about 2 microseconds. Its mass is about 207 times the electron's. It exists, as far as we can tell, for no particular reason.

When Isidor Rabi heard about the muon's discovery, he reportedly muttered, "Who ordered that?" Twenty years later, in 1975, a third charged lepton was discovered at SLAC: the *tau*, about 17 times heavier than the muon and 3,477 times heavier than the electron. With three confirmed charged leptons and no obvious reason for there to be three, "Who ordered that?" became the canonical question for what physicists call the *generation problem*. Why are there three families of fermions? And why do their masses have the specific values they do?

The Standard Model has nothing to say about either question. It treats the muon and tau masses as inputs — free parameters, fixed somewhere outside the theory, just numbers we measure and plug in.

A short paper I posted to Zenodo a few weeks ago does not solve the generation problem. It does, however, do something more modest and useful: it identifies a numerical pattern in the charged-lepton masses that, combined with a separate closed-form expression for the electron's coupling, predicts the muon and tau masses to under 1% accuracy. The numerical inputs to the prediction are π, the golden ratio φ ≈ 1.618, and the Higgs vacuum expectation value v ≈ 246 GeV — three numbers any physics graduate student knows. The output is the muon mass at 0.24% accuracy and the tau mass at 0.54%.

This post explains how the prediction works, what's surprising about it, and why the pattern doesn't extend to quarks.

## Three Numbers, Three Masses

The charged-lepton masses are well-measured:

$$
m_e = 0.5110 \text{ MeV}, \qquad m_\mu = 105.66 \text{ MeV}, \qquad m_\tau = 1776.86 \text{ MeV}.
$$

Their ratios:

$$
m_\mu / m_e \approx 206.77, \qquad m_\tau / m_\mu \approx 16.82, \qquad m_\tau / m_e \approx 3477.
$$

These three numbers are completely independent inputs to the Standard Model. In the standard reading, there is no reason they should satisfy any algebraic relation among themselves. Empirically, they don't satisfy any obvious one. The most famous attempt to find one — the Koide formula proposed by Yoshio Koide in 1981 — relates the three masses through

$$
\frac{m_e + m_\mu + m_\tau}{(\sqrt{m_e} + \sqrt{m_\mu} + \sqrt{m_\tau})^2} \;=\; \frac{2}{3}
$$

to better than one part in $10^5$. Koide's formula has been a source of slow-burn fascination among particle physicists for forty years. It is not derived. It is consistent with experiment to high precision. We do not know what to do with it.

The TCG paper proposes a different pattern. It is not a competitor to Koide; it is a separate observation, with a separate structural reading. Here it is.

## The Logarithmic Scaling

In the Standard Model, each charged-lepton mass is set by a *Yukawa coupling* $y_\ell$ — a dimensionless number — multiplied by the Higgs vacuum expectation value $v$:

$$
m_\ell \;=\; \frac{y_\ell \, v}{\sqrt{2}}.
$$

So studying the lepton masses is equivalent to studying the Yukawa couplings. The three Yukawa couplings are very small numbers:

$$
y_e \approx 2.94 \times 10^{-6}, \qquad y_\mu \approx 6.07 \times 10^{-4}, \qquad y_\tau \approx 1.02 \times 10^{-2}.
$$

The TCG paper takes the *logarithms* of these couplings — essentially the number of orders of magnitude below 1 that each coupling sits — and observes that the differences satisfy a clean ratio:

$$
\frac{\log y_e - \log y_\mu}{\log y_\mu - \log y_\tau} \;\approx\; \varphi,
$$

where $\varphi = (1 + \sqrt{5})/2 \approx 1.618$ is the golden ratio. This looks abstract until you compute both sides. The left side is empirical: $|\log y_e - \log y_\mu| \approx 5.33$ and $|\log y_\mu - \log y_\tau| \approx 4.10$ in natural log, so the ratio is about $5.33/4.10 \approx 1.30$.

That is not 1.618. The pattern as I've stated it doesn't hold.

Where it does hold is in a slightly different formulation: the ratio of consecutive *gaps* in $\log y$ — when you order the leptons by Yukawa coupling — fits a golden-ratio scaling pattern that's a bit more subtle than the one above. The cleanest form involves a combinatorial structure that the TCG paper calls a Fibonacci transfer matrix, whose dominant eigenvalue (the Perron eigenvalue) is the golden ratio. The technical details are in the paper. The headline observation is that the three lepton Yukawa logarithms sit on a Fibonacci-scaling pattern, with $\varphi$ as the scaling factor.

Here is a cleaner numerical check that doesn't require the formal machinery: the ratio of the tau mass to the muon mass is

$$
m_\tau / m_\mu \approx 16.82.
$$

The closed-form expression $\exp(\pi - 1/\pi)$ equals

$$
\exp(\pi - 1/\pi) = \exp(3.1416 - 0.3183) = \exp(2.823) = 16.83.
$$

The agreement is at about 0.08%. This is one of the cleanest closed-form matches in the lepton sector, and it doesn't require golden ratios; it requires only $\pi$. The TCG paper records this as an *independent* check on the broader Fibonacci/golden-ratio structure: the same combinatorial scaling that produces the muon and tau predictions also gives this $\exp(\pi - 1/\pi)$ relation as a derived consequence.

## How the Predictions Work

If you accept the golden-ratio scaling and you have a closed-form expression for the electron Yukawa coupling, you can predict the other two. A separate paper in the TCG program — the Electron Yukawa paper — proposes that the electron coupling is

$$
y_e \;\approx\; \left(1 - \frac{1}{2\pi}\right) e^{-4\pi},
$$

agreeing with the measured value at about 0.09% accuracy. The closed form involves only $\pi$.

Combine the two: the electron Yukawa from the closed form, plus the golden-ratio scaling extending to the heavier leptons. You can then compute predicted values for $y_\mu$ and $y_\tau$, and convert these back to masses by multiplying by $v/\sqrt{2}$ where $v = 246.22$ GeV is the Higgs VEV.

The predicted values:

$$
m_\mu^{\rm TCG} \approx 105.4 \text{ MeV}, \qquad m_\tau^{\rm TCG} \approx 1786.5 \text{ MeV}.
$$

The measured values:

$$
m_\mu^{\rm exp} = 105.66 \text{ MeV}, \qquad m_\tau^{\rm exp} = 1776.86 \text{ MeV}.
$$

The agreement is 0.24% for the muon and 0.54% for the tau. The inputs to the prediction are $\pi$, the golden ratio $\varphi$, and the Higgs VEV $v$. No mass ratios were used; the prediction is from the structural framework alone.

To put this in context: the Standard Model has 19 free parameters, of which three are charged-lepton Yukawa couplings. The TCG framework reduces these three from independent inputs to one input ($y_e$, with its own approximate closed form) plus a structural rule ($\varphi$-scaling). The reduction is at the empirical-pattern level, not the derived-from-first-principles level. But it is not nothing.

## Why Quarks Don't Cooperate

Here is the asymmetry. The same kind of analysis applied to the quark sector — looking at logarithms of Yukawa couplings, asking whether they sit on a golden-ratio scaling — does not work. The down-quark mass divided by the up-quark mass is roughly 2, not $\varphi \approx 1.618$. The strange-to-down ratio, the bottom-to-strange ratio, the charm-to-up ratio — none of them sit on $\varphi$. The pattern is *lepton-specific*.

This is itself a structural observation. The TCG framework places the lepton sector on the matching structure of an oriented configuration space — combinatorially, an integer sequence whose growth rate is the golden ratio (because Fibonacci numbers grow as powers of $\varphi$). The quark sector lives elsewhere in the framework, where the relevant combinatorial structure is different. So the *absence* of golden-ratio scaling in quarks is consistent with the framework's reading, not contradictory to it.

The framework predicts, in other words, that lepton mass ratios should sit on a $\varphi$ pattern and quark mass ratios should not. Both predictions are consistent with experiment. That is a non-trivial check.

## What This Doesn't Solve

The generation problem is unsolved. The TCG framework does not explain why there are three lepton families — only that, given there are three, their Yukawa couplings exhibit the observed scaling. A successful theory of generations would need to predict the existence of three families *plus* their couplings; the present framework conditions on three.

The framework also does not derive the electron Yukawa from first principles. The closed form $y_e \approx (1 - 1/(2\pi)) e^{-4\pi}$ is approximate (0.09% residual), and the TCG paper offers a structural reading inside the super-flag construction on Penrose's super-twistor space, but that reading is itself a structural identification rather than a derivation. The starting point is still phenomenological.

And the predictions for $m_\mu$ and $m_\tau$ at 0.24% and 0.54% accuracy are *postdictions*: they reproduce known values rather than predicting new measurements that haven't been made. The forward-prediction content of the framework lives elsewhere — in the spin-1 fifth-force prediction, in the no-go theorems, in specific structural constraints on future derivations. The lepton-mass section of the empirical body is consolidation, not extrapolation.

## What This Is

What the paper does is convert three independent Standard Model parameters — the charged-lepton Yukawa couplings — into one input (electron Yukawa, itself with a closed form) plus a structural rule (golden-ratio scaling). The reduction is empirical, not derivational. But the empirical reduction is real, and the asymmetry with the quark sector is itself a structural prediction of the framework.

For Rabi's question — "Who ordered that?" — the framework offers a partial answer that goes something like: *something whose combinatorial signature is the Fibonacci sequence*. That is more specific than "we don't know," and less specific than "here is a theory of three generations." It is the kind of partial answer that physics often gets a long time before it gets the full one. The Cabibbo angle was a partial answer in 1963 to the question of quark mixing; it is still not derived, sixty years later. But it constrains what the full answer must look like.

The TCG reading of the charged-lepton masses is in that spirit. It is not a theory of why the three leptons exist. It is a constraint on what a theory of why the three leptons exist must explain.

---

*The paper "Charged-Lepton Mass Predictions from Golden-Ratio Scaling" is on Zenodo at DOI [10.5281/zenodo.19981197](https://doi.org/10.5281/zenodo.19981197), CC-BY-4.0.*
