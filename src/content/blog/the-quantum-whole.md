---
title: "From Relation to Reality: The Quantum Whole"
description: "From the Taichi Diagram to entanglement and probability — a guide to Release III, Wave A"
pubDate: 2026-09-03
pinned: true
---

> 一陰一陽之謂道。  
> *One yin and one yang: this is called the Way.*

A familiar modern rendering of the Taichi Diagram looks simple: one circle, two flowing regions, and two small “eyes,” each carrying the color of the other side. Yet its visual lesson is deeper than the coexistence of opposites. The two sides are distinguishable, but neither is presented as a completely self-sufficient object. Each receives its identity within one whole, bends around its complement, and includes a trace of what it is not.

That makes the diagram a natural starting point for a question at the heart of quantum theory:

> **Can two distinguishable parts belong to a whole whose state cannot be reduced to separate descriptions of the parts?**

This is the question of quantum entanglement. But the same image also raises another question. The eyes suggest that each side contains a local trace of the other. Is that already enough for entanglement? And if entanglement is present, does probability follow automatically?

Complementarity-First Foundational Release III, Wave A, is devoted to these questions. It consists of two papers and one reproducibility dataset. Together they build a conditional route from reciprocal internal structure to complex phase evolution, entanglement, and finite Born-form readout, and then test that architecture in a source-complete synthetic spatial-biphoton model.

These are inspirations, not equations. The release does **not** claim that the Taichi Diagram anticipated quantum mechanics, that a familiar symbol proves entanglement, or that visual resemblance can replace mathematical analysis. Its governing rule is the same one used in the previous Complementarity-First releases:

> **A suggestive picture is not a derivation. Every arrow must say what was present, what was added, what followed, and what remains open.**

## Why this wave matters

Textbooks usually introduce several central ingredients of quantum mechanics separately:

- states evolve through complex, norm-preserving equations;
- composite systems can become entangled;
- measurements produce normalized probabilities quadratic in amplitudes.

These rules work extraordinarily well. The foundational question is why they belong together.

Wave A asks whether they can be organized around one deeper idea: a **coherent relational whole**. Its central proposal is not simply

$$
\text{entanglement} \longrightarrow \text{probability}.
$$

The more careful structure is

$$
\text{coherent relational whole}
\longrightarrow
\begin{cases}
\text{entanglement across a system cut},\\
\text{Born-form weights across an event cut},\\
\text{a classical-looking shadow across an access cut}.
\end{cases}
$$

A *system cut* divides the whole into subsystems and asks whether their state factors. An *event cut* divides a measurement into possible channels and asks how conserved capacity is distributed among them. An *access cut* describes what remains visible when part of the whole—often the environment—is ignored.

The three cuts are related, but they are not the same operation. This distinction is the conceptual center of the release.

In plain language:

> **Entanglement is the relation already present in the whole. Probability is the pattern of answers produced when we ask that whole a particular experimental question.**

## From an earlier conjecture to a three-cut architecture

Foundational Release I introduced an intuition sometimes called a “projection of a projection”:

$$
\text{complete relational state}
\longrightarrow
\text{accessible state}
\longrightarrow
\text{observed probability}.
$$

That earlier work deliberately did not call this a derivation of the Born rule. Release II supplied further conditional ingredients—one-time carriers, positive duality, singlet completion, exchange dynamics, and quantum-clock structure—while continuing to leave the physical Hamiltonian and probability law as separate boundaries.

Wave A matters because it now assigns different mathematical jobs to the two arrows. Restricting a globally entangled state can explain why a local observer sees a mixed, classical-looking shadow. It does not by itself explain why the surviving alternatives must receive Born weights. The second task requires an event decomposition and a valuation rule.

The advance is therefore not the disappearance of every assumption. It is a sharper map of the problem:

> **Entanglement may explain the origin of local mixture-like appearance; conserved relational capacity plus modular event readout supplies a conditional route to Born-form weights.**

This is the point at which an earlier guiding conjecture becomes a typed architecture with separate theorems, countermodels, and open arrows.

## The eyes are not yet entanglement

The first paper begins with the simplest mathematical version of the two-eye idea. It uses two reciprocal alternatives, which can be read schematically as “yellow contains green” and “green contains yellow.” On the two-branch support, the state has the form

$$
\rho_{p,\chi}
=
\begin{pmatrix}
1-p & \chi\\
\bar\chi & p
\end{pmatrix}.
$$

The two quantities play very different roles.

The number $p$ describes the local branch weights: how much of each reciprocal arrangement is present when the two alternatives are read directly. The complex number $\chi$ describes the coherent link between them: whether the two alternatives remain joined as phase-related parts of one state.

This separation gives the release one of its clearest results. Two states can have exactly the same local weights and exactly the same visible “eye” content, yet differ in entanglement.

If

$$
\chi=0,
$$

then the state is a dephased mixture of the two reciprocal alternatives. The eyes remain in the local description, but the coherent connection is gone.

If

$$
\chi\neq0,
$$

then, within this declared two-qubit sector, the state is entangled. The amount of entanglement is controlled directly by the magnitude of the coherent link.

This leads to a compact interpretation:

> **The eyes encode reciprocal local inclusion and the capacity for coherent completion. The coherent link realizes entanglement.**

The distinction matters because ordinary correlation is not enough. Two variables can match perfectly because they were prepared by a common classical instruction. Entanglement requires more: the alternatives must remain parts of a single coherent state that cannot be replaced by independent local states or an ordinary classical mixture.

## Why quantum motion turns instead of explodes

The first paper then asks a different question: why does quantum evolution use complex phase rotation rather than unrestricted growth, decay, or drift?

Start with a real two-dimensional carrier whose two coordinates are exchanged by complementarity. Reciprocity alone does not select one kind of motion. The allowed generators include four broad possibilities:

- **elliptic motion**, which rotates;
- **hyperbolic motion**, which grows in one direction and shrinks in another;
- **nilpotent motion**, which shears or drifts;
- **frozen motion**, which does not move.

So complementarity by itself does not give the Schrödinger equation.

An additional physical requirement changes the situation: suppose a nontrivial orbit must remain bounded both forward and backward in time. Exponential growth or decay and unbounded shear are then excluded. The surviving branch is elliptic rotation.

A rotation on a real plane naturally supplies an operator whose square is minus one. In complex notation, that operator is represented by $i$. At this restricted scope, the real rotational equation can therefore be written in the one-frequency Schrödinger form

$$
i\hbar\frac{d\psi}{dt}=E\psi.
$$

This gives a possible geometric meaning to the imaginary unit: $i$ records the quarter-turn structure of stable reciprocal phase motion.

But the paper makes an important correction that is easy to miss. One real two-plane becomes only **one complex line**. Its evolution is merely a global phase at the level of physical rays. A single phase line cannot provide an observable relative phase between alternatives and cannot by itself generate entanglement.

To obtain a genuine two-alternative quantum sector, the construction must add a second phase block and align the two complex structures. In projective language, the carrier must move from the trivial space $\mathbb{CP}^{0}$ to a nontrivial $\mathbb{CP}^{1}$.

A useful picture is this: one clock hand turning alone gives only a phase convention. Two aligned phase channels can be compared. Their relative phase can interfere, and an interaction can move amplitude coherently between them.

The paper therefore supplies—not derives from bare complementarity—a standard exchange interaction. Starting from one reciprocal branch, the state follows the exact orbit

$$
|\psi(t)\rangle
=
\cos(\kappa t)|YG\rangle
-i\sin(\kappa t)|GY\rangle.
$$

At the beginning, the state is separable. Halfway through the first one-way transfer, at $\kappa t=\pi/4$, both alternatives are present coherently and the state is maximally entangled. At $\kappa t=\pi/2$, the reciprocal roles have fully exchanged and the state is separable again.

This is not a claim that Complementarity-First has derived the physical Hamiltonian, the value of $\hbar$, the coupling $\kappa$, mass, potential, or the spatial Schrödinger operator. It is a type-correct bridge showing how bounded reciprocal phase geometry, once placed on an explicitly enlarged carrier and supplied with an interaction, takes Schrödinger form and generates entanglement.

## Entanglement comes before readout—but not before every weight

The dialogue that led to these papers began with a strong intuition: entanglement seems more fundamental than probability.

Wave A supports that intuition in a qualified sense. Entanglement is structurally earlier than **measurement readout**. We can ask whether a composite state factors before choosing a particular detector basis. Probability, by contrast, requires a declared event interface: which alternatives the apparatus separates and how the apparatus responds to them.

But entanglement does not come before every mathematical weight. The state already contains normalized coefficients such as $p$ or the Schmidt weights. Those numbers describe the geometry of the state. They are not yet, by themselves, a physical theory of detector frequencies or objective chance.

The paper therefore separates three layers:

| Layer | What it describes | What it does not yet explain |
|---|---|---|
| Relational weight | How a normalized state is distributed among branches or modes | Why a detector must respond with those frequencies |
| Born-form readout | Normalized weights assigned to declared measurement channels | Why one particular outcome occurs |
| Objective chance | A law or interpretation for actual individual events and histories | Still open in this wave |

This is why neither of the two slogans below is adequate on its own:

$$
\text{entanglement} = \text{probability},
$$

or

$$
\text{decoherence} = \text{the Born rule}.
$$

Entanglement constrains the joint statistics that measurements can reveal. It does not automatically select the numerical readout rule, and it does not explain why a single event becomes actual.

## How finite Born-form weights arise conditionally

The first paper gives a bounded answer to the probability question.

Suppose the reciprocal flow preserves a positive quadratic capacity

$$
Q(x).
$$

Suppose a measurement separates the state into passive, repeatable, lossless channels represented by projections $P_i$. The capacity entering channel $i$ is then

$$
Q(P_i x).
$$

Finally, suppose the detector response is **modular**: independent channel capacities add, and the response is nonnegative. Under these assumptions, the response must be linear in the conserved capacity. Normalization gives

$$
p_i=\frac{Q(P_i x)}{Q(x)}.
$$

This has the form of the Born rule for a finite pure projective measurement.

The importance of the result lies as much in its limits as in its formula. The event projectors and the modular response are additional physical premises. They do not follow from the Taichi Diagram, the two eyes, entanglement, or quadratic geometry alone. The theorem does not yet establish the general density-operator trace rule, arbitrary quantum effects, measurement instruments, continuous spectra, collapse, branching ontology, or objective chance.

What it does show is that a conserved relational capacity, combined with a particular kind of event separation and additive detector response, is sufficient to produce Born-form weights.

In Feynman-style language: if a lossless apparatus divides one conserved “amount of possibility” into independent channels, and if the detector counts those amounts additively, then the probability of a channel is its share of the whole.

## Why the classical world can look like a local shadow

Entanglement is often described as fragile. That can sound as though nature rarely creates it. The release makes a subtler distinction.

Global entanglement may be abundant. What is difficult is keeping entanglement concentrated in a small, clean, controllable pair while preventing the environment from learning which alternative occurred.

Suppose two branches of a state become correlated with two different environmental records. If the environment cannot distinguish the branches, their phase relation remains accessible. If the environmental records become nearly orthogonal—meaning that the surroundings contain reliable “which-branch” information—the local coherent link is suppressed.

From the viewpoint of an observer who ignores the environment, the state becomes approximately diagonal. It looks like a classical statistical mixture. Yet the total system plus environment can remain in a pure entangled state.

The process is therefore often not

$$
\text{entanglement}\longrightarrow\text{nothing},
$$

but rather

$$
\text{localized pair entanglement}
\longrightarrow
\text{distributed system–environment entanglement}.
$$

This is the sense in which probability-like classical behavior can be the **local shadow of a larger entangled whole**.

The phrase remains carefully limited. Decoherence explains why interference becomes locally inaccessible and why stable classical-looking alternatives appear. It does not independently derive the Born rule, and it does not explain why one outcome rather than another is recorded in an individual run.

## A quantum image is not the quantum state

The second paper takes the foundational distinctions into a spatial biphoton model inspired by [a 2023 experiment](https://doi.org/10.1038/s41566-023-01272-3) in which a Taichi Diagram morphology was deliberately encoded in the pump field.

Here the warning becomes concrete:

> **A recognizable image is not the complete bipartite state that produced it.**

An ordinary intensity image records magnitudes. A quantum state also contains phase relations and a tensor structure connecting the signal photon to the idler photon. Two states can produce exactly the same visible intensity pattern while having radically different coherent structure.

The paper constructs a fully specified synthetic Taichi Diagram–encoded biphoton kernel. It fixes the grid, quadrature, exact Taichi Diagram boundary and eyes, Gaussian envelope, phase maps, interventions, scan ranges, resolution checks, and numerical conventions. That source completeness matters because small choices in an image model can otherwise change its Schmidt spectrum and witness values.

The model then asks a deceptively simple question: are the two visible eyes themselves the entangled modes?

The answer is no—not in the literal sense.

## The hidden matched modes behind the picture

A biphoton state can be decomposed into Schmidt modes. These are paired spatial patterns: when the signal photon occupies one mode, the idler photon occupies its matched partner. They are the natural “channels” of the entangled state.

Think of two orchestras playing a complicated piece. A photograph of the stage may show two bright spotlights, but the true musical pairing is carried by matched melodic lines across many instruments. The visible lights can affect the performance without being the underlying musical modes.

The synthetic baseline makes this distinction quantitative. Under the declared eye-region definition:

- the two literal eye regions carry about **3.614%** of the joint capacity;
- the leading two Schmidt modes carry about **78.730%** of the state weight.

The eyes matter to the prepared field, but they do not determine the leading Schmidt subspace.

The paper also performs two different operations that might casually be called “removing the eyes.” In one, the eye amplitudes are continued with the surrounding host region. In the other, the eye support is excised. These interventions move the effective Schmidt number in opposite directions. The lesson is methodological: a verbal counterfactual is not yet a mathematical operation.

## The same image can hide a radically different quantum whole

The strongest control in the second paper changes phase while preserving the complete joint intensity pixel by pixel.

The visible image—including both eyes—remains the same to numerical precision. Yet the effective Schmidt number changes from approximately

$$
K=2.27
$$

to

$$
K=108.56,
$$

and the fidelity with the original state falls to about

$$
0.000857.
$$

The leading Schmidt subspace is radically rearranged even though the displayed intensity is unchanged.

An even sharper control removes all off-diagonal coherence in the joint-pixel basis. The complete intensity image remains unchanged. Both eyes remain visible. But the resulting state is separable.

These controls establish a powerful negative result:

> **The literal Taichi Diagram eyes neither determine the leading Schmidt modes nor constitute an entanglement witness.**

This does not make the eyes irrelevant. Altering their support or amplitude changes the prepared kernel. It means only that entanglement belongs to the complete complex relation, not to a visible motif taken in isolation.

## Many modes to reconstruct, few modes to witness

A second important result concerns experimental economy.

To approximate the full synthetic state with high accuracy, many Schmidt modes are required:

- 10 modes capture 95% of the weight;
- 78 modes capture 99%;
- 196 modes capture 99.9%.

At first, this seems to imply that an experiment must reconstruct a very high-dimensional state before saying anything reliable about entanglement.

But state reconstruction and entanglement witnessing are different tasks. Reconstruction asks for a detailed copy of the whole state. A witness asks a narrower question: can a calibrated measurement rule out every separable state?

For the synthetic baseline, a carefully chosen two-mode projector already exceeds its separable bound. After filtering onto the leading two local modes, the target fidelity is about **0.8893**.

So the release finds a useful asymmetry:

> **Many modes may be needed to reconstruct the state, while a small number of independently calibrated modes may be enough to witness its entanglement.**

The word “calibrated” is essential. A compact witness is trustworthy only if the relevant modes and thresholds are fixed without using the same confirmatory data twice.

## Why the blind protocol matters

To make that separation operational, the second paper proposes a block-level workflow:

$$
\text{TRAIN}\longrightarrow\text{CALIBRATION}\longrightarrow\text{HOLDOUT}.
$$

The training blocks select or learn the reciprocal modes. The calibration blocks determine the actual separable threshold after accounting for imperfections. The holdout blocks are opened only once, after the analysis has been frozen.

The archive includes a deterministic 80-block mock execution. The mock demonstrates the order of operations and verifies the software pipeline. It is not evidence that the motivating experimental state passes the witness, because the actual block-resolved experimental fields, raw events, and reconstruction code were not obtained or analyzed for this release.

This distinction is important. “Blind” here means separation of roles within the declared dataset—not independent external replication, device-independent certification, or proof that every laboratory nuisance has been eliminated.

## Why the dataset is part of the scientific result

Wave A includes a separate reproducibility record, RIC-D1, because the central claims of the second paper depend on more than a displayed graph.

The archive contains the machine-readable model specification, deterministic code, numerical arrays, spectra, modes, intervention tables, resolution studies, figures, exact finite-sample designs, mock protocol records, independent mode-convention checks, licensing information, manifests, and a unified verifier.

It also includes finite-dimensional checks for the foundational paper: the one-block-to-two-block carrier transition, the difference between branch exchange and conjugating reciprocal reversal, the exchange orbit, and the entanglement formulas.

This does not turn a synthetic model into an experiment. It does something equally important for a foundational release: it lets another reader inspect exactly which conventions produced each number and rerun the declared checks.

The dataset therefore expresses a broader Complementarity-First principle:

> **A claim should be linked not only to an idea, but to its assumptions, source, calculation, and failure boundary.**

## What Wave A establishes—and what it does not

The release is important because it connects several ideas that are often discussed separately, while refusing to hide the additional structures needed between them.

| Question | Wave A’s bounded answer | Boundary that remains open |
|---|---|---|
| Why complex phase motion? | A nontrivial two-sided bounded reciprocal flow selects elliptic rotation and a restricted Schrödinger normal form | The physical Hamiltonian, $\hbar$, spatial dynamics, and universal quantum carrier are not derived |
| What makes reciprocal alternatives entangled? | A nonzero coherent link on a supplied positive composite makes the two-branch state nonseparable | The first physical composite and the interaction that activates the link remain supplied |
| Why Born-form weights? | Conserved positive capacity plus passive event channels and modular response yields a finite pure-projective quadratic valuation | General trace rules, arbitrary effects, instruments, and objective chance are not derived |
| Why does the world look classical? | Environmental records can suppress locally accessible coherence and produce a classical-looking reduced state | Decoherence does not select one actual outcome |
| Can a Taichi Diagram–shaped image certify entanglement? | No. The complete complex kernel and a valid witness are required | Actual experimental certification awaits actual data and a frozen holdout analysis |

The release’s strongest positive claim is an integrated conditional architecture:

$$
\begin{aligned}
&\text{bounded reciprocal phase structure}\\
&\quad\longrightarrow\text{restricted Schrödinger form}\\
&\quad\longrightarrow\text{coherent entangling dynamics}\\
&\quad\longrightarrow\text{finite Born-form readout under additional event assumptions}.
\end{aligned}
$$

Its strongest negative claim is equally important:

$$
\begin{aligned}
&\text{two eyes do not imply entanglement},\\
&\text{an image does not determine a quantum state},\\
&\text{entanglement does not by itself derive probability},\\
&\text{decoherence does not derive one actual outcome}.
\end{aligned}
$$

The release should therefore not be read as “quantum mechanics has been derived from the Taichi Diagram.” It should be read as a careful answer to a more useful question:

> **If reciprocal difference within one whole is taken seriously, what additional structures are sufficient to recover specific pieces of quantum architecture, and exactly where does the reconstruction stop?**

## The deeper picture

The most important conceptual result of Wave A can be stated without equations.

Entanglement is not merely a strange influence passing between two already complete objects. It is the failure of the whole to break into independent local states. Probability is not simply entanglement written as a number. It appears when that whole is presented to a particular set of event channels and a readout rule converts conserved relational capacity into normalized weights. Classical-looking behavior can appear when the observer has access to only a reduced part of a larger entangled structure.

This suggests a hierarchy:

$$
\boxed{
\text{coherent relational whole}
\;\text{is deeper than}\;
\text{entanglement and operational probability}
}
$$

Entanglement describes how the whole exceeds the separate descriptions of its parts. Probability describes how the whole distributes itself among possible records. Decoherence describes how much of that relation remains visible to a restricted observer.

The Taichi Diagram does not prove this hierarchy. It gives it an unforgettable visual question: two sides, two eyes, one whole. The papers replace that image with typed carriers, coherent links, generators, projectors, mode decompositions, countermodels, and reproducible calculations.

That movement—from image to question, from question to mathematics, and from mathematics to explicit limits—is why this release matters.

<hr id="zenodo-index" />

## Reading Release III, Wave A

1. [**Exact Checks and Reproducibility Archive for Reciprocal Internal Complementarity and Synthetic Taichi-Encoded Spatial Biphoton Models**](https://doi.org/10.5281/zenodo.22239387) — RIC-D1 dataset and exact-check archive.
2. [**Reciprocal Internal Complementarity: A Conditional Route from Taichi-Like Mutual Inclusion to Schrödinger Normal Form, Entanglement, and Finite Born-Form Readout**](https://doi.org/10.5281/zenodo.22239422) — RIC-P1 foundational paper.
3. [**Synthetic Taichi-Encoded Spatial Biphoton Models: Counterfactual Entanglement Tests, Reciprocal-Mode Compression, and a Prospective Blind Witness Protocol**](https://doi.org/10.5281/zenodo.22239426) — RIC-P2 application and methods paper.

### Earlier Complementarity-First background

- [**Complementarity-First: Relational Unity and the Genesis of Physical Structure**](https://doi.org/10.5281/zenodo.21925967)
- [**Complementarity Before Quantum Theory: Assumption Control, Countermodels, and Conditional Complex Closure**](https://doi.org/10.5281/zenodo.21926050)
- [**Complement-Twisted Positive Duality: From One-Time Signature to Singlet Completion and Exchange Dynamics**](https://doi.org/10.5281/zenodo.22072861)
- [**Quantum Clocks in Complementarity-First Geometry: Redshift, Equivalence, and the Universal Matter-Coupling Boundary**](https://doi.org/10.5281/zenodo.22072876)

---

*Release note.* Wave A opens Complementarity-First Foundational Release III with two public preprints and one supporting dataset. The papers have passed the project’s AI-assisted internal review and reproducibility process. This is not external human peer review, journal acceptance, experimental replication, certification of the motivating biphoton experiment, or worldwide novelty-priority clearance.
