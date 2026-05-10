---
title: "Connected Residues: How the Electron Prefactor Stops Being a Truncation"
description: "The previous note showed that the electron boundary prefactor 1 - 1/(2π) follows from a localization conjecture with four sub-postulates — three motivated, one empirically supported. A new companion note attacks the residual one by showing that the linear form is not an arbitrary truncation of a multiplicative formula but the exact connected effective action W = log Z of nilpotent boundary defects, taken sectorwise. Single-edge nilpotency makes log(1 - X) = -X exact in the residue algebra, not approximate. The slogan: the electron prefactor is a connected boundary self-energy, not a Taylor truncation. Not a derivation of the boundary action. Not a new postulate. All four sub-postulates of the localization conjecture for P_4 are now structurally motivated."
pubDate: 2026-05-10
---

The previous note in this series concluded with a slogan: *mass is a logarithmic residue of collision*. Three syllables — "log Res" — do a great deal of work in that sentence. A logarithmic differential along a divisor; a residue map peeling off the singular part; an averaged expectation over a finite set of matchings. Each of these is well-defined in the framework's hard-core boundary residue algebra. Their composition is well-defined too. But there is one specific point at which the composition needs a rule, and the previous note left that rule as an empirical input.

The matching algebra at $r = 4$ — the line-deformation rank for the electron's stratum $n = 3$ — contains both single-edge matchings and the two-edge matching $\{12 \mid 34\}$. The single-edge case is unambiguous; the framework's relation $b_e^2 = 0$ on adjacent-pair residues forces the boundary defect $X_e = b_e \delta_0(\phi_e)$ to be nilpotent, and the formal series $e^{-X_e} = 1 - X_e$ truncates after one term. The two-edge case is where two natural prescriptions diverge. The first, naive prescription is multiplicative: take the partition function over disjoint defects to be $\prod_e (1 - X_e)$, and average. The second is connected: pass through $W = \log Z$ first, average the log, and read off only the linked sum. The two prescriptions disagree at the half-percent level on the framework's electron Yukawa identity, and the framework's existing match prefers the connected one.

That much had been established. What had *not* been established was whether the connected prescription was a free empirical choice, lightly anchored, or a textbook QFT principle in disguise. The new note shows it is the latter.

## What the connected prescription actually is

The relation $W = \log Z$ between a partition function and a connected effective action is not a free choice in field theory. It is the relation that defines connected correlation functions, that generates one-particle-irreducible diagrams, and from which mass terms and self-energies are read. A two-point function $\langle \phi(x) \phi(y) \rangle$ contains a disconnected term — the vacuum expectation value squared — which is removed by passing to $W$. A self-energy diagram is a *connected* two-point insertion. From the moment one writes a Lagrangian containing a mass term, one is implicitly using the connected piece of the path integral.

The standard textbook setting for this principle is the bulk path integral of an interacting field theory on a connected spacetime. The framework's setting is different in two specific ways. First, it is a boundary defect theory rather than a bulk theory. Second, it is decomposed into matching sectors before any spacetime average is taken. The new note's contribution is to import the bulk principle into this sector-decomposed boundary algebra explicitly — and to show that the import has a striking consequence for the algebraic structure of the linear electron prefactor.

## Why the linear form is exact, not truncated

In the framework's hard-core boundary residue algebra at $r = 4$,

$$
\mathcal{A}_\partial^{\rm hc}(4) \;=\; \mathbb{C}[b_1, b_2, b_3] \big/ (b_i^2,\; b_i b_{i+1}),
$$

each generator $b_e$ is a primitive adjacent-pair residue and squares to zero. The boundary defect attached to each edge is

$$
X_e \;=\; b_e\, \delta_0(\phi_e),
$$

which inherits the nilpotency: $X_e^2 = 0$. This is a small algebraic fact with disproportionately large consequences. The Taylor series

$$
\log(1 - X_e) \;=\; -X_e - \tfrac{1}{2} X_e^2 - \tfrac{1}{3} X_e^3 - \cdots
$$

truncates after the first term. The right-hand side is exactly $-X_e$ — not approximately, not to leading order, but as an algebraic identity in the residue algebra.

What follows is the central observation. For any matching $M = \{e_1, \ldots, e_k\}$ on $P_4$ with disjoint edges, the boundary defect partition function in the matching sector $M$ is

$$
Z_M^{\rm def} \;=\; \prod_{e \in M} (1 - X_e),
$$

and because the $X_e$ commute pairwise inside the residue algebra and each squares to zero, the connected effective action is

$$
W_M^{\rm def} \;=\; \log Z_M^{\rm def} \;=\; \sum_{e \in M} \log(1 - X_e) \;=\; -\sum_{e \in M} X_e \quad \text{(exactly)}.
$$

The connected boundary prefactor

$$
B_e^{\rm conn} \;:=\; 1 + W_M^{\rm def} \;=\; 1 - \widehat{\rho}_M, \qquad \widehat{\rho}_M \;=\; \sum_{e \in M} b_e\, \delta_0(\phi_e),
$$

is therefore an *exact identity* in the residue algebra, not a Taylor truncation. The linearity is no longer an approximation that requires apology. It is a theorem-level consequence of the nilpotency of single-edge boundary defects.

Averaging over the five matchings of $P_4$ — the empty matching, three single-edge matchings, and the two-edge matching $\{12 \mid 34\}$ — gives a mean dimer count of

$$
\overline{|M|}_{\mathrm{Match}(P_4)} \;=\; \frac{0 + 1 + 1 + 1 + 2}{5} \;=\; 1,
$$

and with $\langle \delta_0 \rangle = 1/(2\pi)$ on the polar-normal $S^1$, the connected expectation is

$$
\langle B_e^{\rm conn} \rangle \;=\; 1 - \frac{1}{2\pi},
$$

which is the framework's $P_4$. The multiplicative alternative, in contrast, is

$$
\langle Z^{\rm def} \rangle \;=\; \frac{1 + 3(1 - a) + (1 - a)^2}{5} \;=\; 1 - a + \tfrac{1}{5} a^2 \;=\; 1 - \frac{1}{2\pi} + \frac{1}{5(2\pi)^2},
$$

which differs from the framework's value by a $0.51\%$ disconnected correction. The framework's existing electron-Yukawa formula match at $0.09\%$ excludes this correction within its own ledger. The choice between connected and multiplicative is no longer an empirical free parameter. It is the standard QFT distinction between $W$ and $Z$, applied to a sector-decomposed boundary algebra in which the single-edge logarithm happens to be exact.

> *The electron prefactor is a connected boundary self-energy, not a Taylor truncation.*

## What the note does and does not derive

What the note does: it converts the residual sub-postulate $P_e^{\rm conn}$ — the only one of the four sub-postulates of the localization conjecture that the previous note left as empirically supported rather than physically motivated — into a sectorwise application of the standard connected-effective-action principle of QFT. The linearity of the electron boundary prefactor is an exact consequence of nilpotency in the residue algebra, not an arbitrary truncation. The numerical value $1 - 1/(2\pi)$ then follows from the matching algebra and the polar-normal $S^1$ phase together with the connected-log prescription — and the connected-log prescription is no longer an arbitrary operator selection.

What the note does not: it does not derive the full BV–BFV boundary action that would justify the sectorwise log prescription on first principles. The applicability of the bulk QFT principle $W = \log Z$ to a sector-decomposed boundary algebra is itself part of the residual postulate, recorded explicitly as the fourth of five failure modes. It does not derive the hard-core selection rule, the polar-normal enhancement, or the real-slice identity defect — those were motivated in the previous note. It does not change the active TCG/FPA postulate ledger. The four sub-postulates of the localization conjecture for $P_4$ remain sub-postulates of the conjecture, not new framework axioms. What changes is that all four are now structurally motivated. The hardest of the four — the connected projection rule — has been reduced from "arbitrary linear-operator selection" to "sectorwise importation of the standard $W = \log Z$ structure of QFT, with linearity following exactly from nilpotency."

## Five failure modes

The note is explicit about where the result could fail. The first three are inherited from the previous note: full-boundary dominance (whether FM/AS geometry forces the hard-core sector or whether the hard-core selection is a separate decision); real-normal obstruction (whether the polar $S^1$ phase requires a complex-normal enhancement that is itself postulated); and identity-defect ambiguity (the choice of $\delta_0$ as Lebesgue-normalized rather than Haar-normalized, which changes the $1/(2\pi)$ factor). The fourth, sharpened in the new note, is connectedness ambiguity: the import of $W = \log Z$ from bulk QFT to a sector-decomposed boundary algebra is itself a structural assumption, and the proof that the *sectorwise* log prescription is the right one — rather than, say, a global log over the full matching-averaged partition function — would require an action-level BV–BFV construction that the present note does not supply. The fifth concerns the augmentation $\epsilon$ used to extract a scalar from the algebra, the uniform counting measure on $\mathrm{Match}(P_4)$, and the equal phase-circle measure across edges; all three are choices that should be derived from a boundary action rather than postulated.

These are not vague worries. Each is the kind of question that an explicit calculation could settle.

## Where the program stands

After this note, the framework's $P_4$ — the linear electron boundary prefactor $\langle B_e \rangle = 1 - 1/(2\pi)$ — has been decomposed into four sub-postulates of the localization conjecture, all four of which are now structurally motivated:

- $P_\partial^{\rm hc}$: the hard-core adjacent-pair selection, motivated as a binary relevant-residue principle on FM/AS boundary geometry.
- $P_\partial^{\mathbb{C}\text{-norm}}$: the polar-normal $S^1$ phase, motivated as the oriented real blow-up of a complexified collision divisor.
- $P_e^{\rm id}$: the real-slice identity defect, motivated as the Poincaré-dual real-slice direction of the polar-normal structure.
- $P_e^{\rm conn}$: the connected projection rule, motivated as the standard QFT connected-effective-action principle $W = \log Z$, taken sectorwise and with linearity following exactly from the nilpotency of single-edge defects.

The action-level derivation of the sectorwise log prescription itself — from a BV–BFV construction on the hard-core polar-normal residue sector — remains the next research target, now flagged as a high-priority arc.

The paper, *Connected Boundary Residues and the Electron Prefactor in Twistor Configuration Geometry*, is on Zenodo (DOI [10.5281/zenodo.20102577](https://doi.org/10.5281/zenodo.20102577); CC-BY-4.0). It is short — eleven pages, twelve references, one connected-log identity, one expectation calculation, five failure modes. It does not close the framework's hardest gap. It moves the gap by one level, from "arbitrary operator postulate" to "sectorwise importation of standard QFT structure." The remaining work is to derive that importation from a boundary action, on the residue algebra that the previous note already showed is the right one.
