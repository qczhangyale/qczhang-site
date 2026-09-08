---
title: "The Geometry of Comparison"
description: "From reciprocal phase to electromagnetic gauge geometry, Lorentzian twistor incidence, and connection selection — a guide to Release III, Wave B"
pubDate: 2026-09-08
pinned: true
---

I am pleased to announce **Wave B of Complementarity-First Foundational Release III**, consisting of three open-access preprints in the Reciprocal Internal Complementarity program.

Wave A investigated whether a reciprocal relation could conditionally support some of the mathematical structures associated with quantum theory: complex phase, Schrödinger-type evolution, entanglement, finite Born-form readout, and a synthetic spatial-biphoton model.

Wave B turns outward.

Once a system has phase, how can phases at different locations be compared? When does a circular phase freedom become gauge geometry? How can the light-cone relationships of spacetime be encoded in positive physical records? And when does a gravitational action actually select a connection rather than merely permit one?

The three Wave B papers approach these questions from electromagnetism, twistor geometry, and finite Lorentzian gravity:

| Paper      | Central question                                                                                     |
| ---------- | ---------------------------------------------------------------------------------------------------- |
| **RIC–EM** | How can reciprocal phase conditionally support compact electromagnetic gauge geometry?               |
| **RIC–TI** | When can Lorentzian twistor incidence be represented and faithfully transported by positive records? |
| **RIC–LC** | When does a finite Lorentzian action select its geometric connection?                                |

Together, they form a study of what might be called **the geometry of comparison**.

---

## What if relation comes before object?

Physics is usually introduced through objects: particles, fields, waves, spacetime points. Relations are then added to describe how those objects interact.

Complementarity-First explores the opposite explanatory order. It asks whether a completed relation, containing two distinguishable but mutually defining roles, can be treated as conceptually prior to the objects that later represent it.

The **Taichi Diagram** is a useful visual metaphor. Its two regions are distinguishable, yet neither is presented as an isolated whole. Each is defined within a larger reciprocal structure and carries an internal reference to the other.

The scientific proposal is not that an ancient diagram somehow contains modern physics. The diagram motivates a precise mathematical question:

> What structures become possible when complementary roles are distinguishable, mutually dependent, and capable of reciprocal exchange or reversal?

A relation by itself does not automatically produce quantum mechanics, electromagnetism, spacetime, or gravity. Additional structures are required at every stage: positive measures, localization, transport laws, reality conditions, actions, boundary data, and operational interpretations.

In this program, the word **conditional** is therefore not a decorative qualification. It is an accounting principle. Every claimed transition must identify what has been derived, what has been supplied, and what remains open.

---

## Why comparison is a physical problem

Imagine that every city owns a clock, but there is no agreed procedure for comparing the clocks. Knowing the reading in one city tells us nothing about the reading elsewhere until we establish a synchronization rule.

Or imagine that every point on Earth carries a small compass. A compass direction can be described locally, but comparing directions at different points requires a rule for transporting one local frame to another.

A **connection** is the mathematical version of such a rule. It tells us how to compare local descriptions at neighboring locations.

If something is transported around a closed loop and returns changed, that mismatch records **curvature** or holonomy. In different theories, the objects being transported can be very different:

* an electromagnetic phase,
* a spinor or twistor,
* a local Lorentz frame,
* or another internal geometric record.

The word “connection” is shared, but the physical meanings must not be silently identified. An electromagnetic connection is not automatically a gravitational connection, and an abstract transformation preserving an incidence relation is not automatically a physically implementable process.

Wave B investigates these distinctions rather than hiding them.

---

## Paper I: Reciprocal Electromagnetism

### A circle is not yet electricity

#### *Reciprocal Internal Complementarity and the Conditional Emergence of Compact $U(1)$ Gauge Geometry*

**DOI:** [10.5281/zenodo.22365919](https://doi.org/10.5281/zenodo.22365919)

The electromagnetic paper begins with the simplest geometric structure inherited from the reciprocal program: a bounded two-dimensional phase plane.

In such a plane, norm-preserving phase changes form a circle. Mathematically, this circular symmetry is represented by the compact group $U(1)$.

That observation is important, but it is not yet electromagnetism.

A circular internal phase can exist without space, without a gauge field, without electric charge, and without Maxwell’s equations. To obtain gauge geometry, the phase must first be **localized**: instead of one phase space existing globally, a phase frame is attached to every point of a supplied base space.

This produces the possibility of a line bundle—roughly, a continuously organized family of local phase spaces.

But even a line bundle is not automatically a gauge theory. One must additionally declare that different local phase choices can represent the same physical situation. Only then does a change of local frame acquire the operational interpretation of a gauge transformation.

A further rule is needed to compare phases along paths. That rule is the connection. Its curvature records the accumulated failure of local phase comparisons to close around loops.

The paper therefore studies a conditional ladder:

$$
\begin{aligned}
&\text{bounded reciprocal phase}\\
&\quad +\ \text{localization}\\
&\quad +\ \text{physical equivalence of local frames}\\
&\quad +\ \text{unitary path comparison}\\
&\quad +\ \text{Lorentzian and action data}\\
&\Longrightarrow\ \text{compact gauge geometry and conditional Maxwell dynamics}.
\end{aligned}
$$

The central lesson is that several circular structures commonly denoted by $U(1)$ must remain distinct:

$$
U(1)_{\mathrm{RIC}}
\neq
U(1)_{\mathrm g}
\neq
U(1)_{\mathrm d}.
$$

Here they represent, respectively:

* the internal reciprocal phase-frame type;
* electromagnetic gauge-frame freedom;
* electric–magnetic duality rotation.

They may eventually be related by explicit mathematical maps, but identical notation is not sufficient to identify them.

### A clock analogy

Suppose every location carries a clock face.

The existence of the clock face gives a circle of possible readings. That is analogous to the internal phase circle.

Allowing each location to choose where “twelve o’clock” is placed resembles local frame freedom.

Declaring that different choices of twelve o’clock describe the same physical situation introduces gauge equivalence.

A synchronization protocol between nearby clocks acts like a connection.

Finally, carrying the synchronization rule around a loop and finding a mismatch resembles curvature.

The clock face alone does not determine any of the later steps. In the same way, a compact internal phase is compatible with gauge geometry but does not, by itself, establish electromagnetism.

### What the paper does not claim

RIC–EM does not derive:

* physical spacetime or its dimensionality;
* a unique electromagnetic connection;
* the electromagnetic coupling constant;
* the elementary unit of electric charge;
* the observed matter representations;
* electrons, photons, atoms, or quantum electrodynamics;
* a new experimentally confirmed prediction.

Its result is a controlled reconstruction: it shows how compact gauge geometry can arise from reciprocal phase **once the required localization and operational structures are stated explicitly**.

---

## Paper II: Reciprocal Twistor Incidence

### From the geometry of light to the physics of records

#### *Reciprocal Internal Complementarity and the Conditional Construction of Lorentzian Twistor Incidence*

##### *Typed carriers, positive records, and faithful transport*

**DOI:** [10.5281/zenodo.22648626](https://doi.org/10.5281/zenodo.22648626)

Twistor theory is an established mathematical framework in which lightlike relationships can be encoded through complex geometry.

Instead of beginning with ordinary spacetime coordinates alone, one can represent spacetime events and light rays through intersections among certain complex subspaces. In the Wave B construction, a supplied two-complex-dimensional carrier is paired with an independent **anti-dual** partner. Together they form a four-complex-dimensional space equipped with an indefinite incidence form.

Within an appropriate chart, special two-dimensional planes are labelled by Hermitian $2\times2$ matrices,

$$
X=tI+x_1\sigma_x+x_2\sigma_y+x_3\sigma_z.
$$

Their determinant has the familiar Lorentzian form

$$
\det X=t^2-x_1^2-x_2^2-x_3^2.
$$

Two corresponding incidence planes intersect when the determinant of their difference vanishes. This reproduces the mathematical null-separation condition associated with lightlike relationships.

But this geometric construction immediately raises a second question:

> If an abstract transformation preserves Lorentzian incidence, can it also be implemented as a physical operation on positive records?

The answer is not automatically yes.

The incidence form is indefinite. It cannot simply be reinterpreted as a probability norm. To discuss preparations, readouts, and physical operations, the paper therefore introduces a separate positive metric and positive rank-two records whose supports encode the incidence planes.

This separation is essential:

* the indefinite form describes incidence;
* the positive form describes record normalization and operational admissibility.

They may act on the same underlying vector space, but they perform different jobs.

---

### Six calibration families and a rigid operation

The paper studies one common physical operation acting on six carefully chosen incidence-plane records.

Think of these six records as calibration cards placed in different orientations. The machine is not merely asked to move one known card correctly. It must transport all six support structures correctly using the same underlying process.

Under the stated assumptions, this requirement is remarkably rigid: every successful microscopic amplitude of the operation must be proportional to the intended incidence transformation.

In the fixed encoding, exact deterministic transport is therefore possible only when the transformation preserves both:

1. the indefinite incidence geometry; and
2. the positive record geometry.

A transformation may preserve the abstract Lorentzian incidence relation while failing the second requirement. Such a transformation can still be represented by a **flagged filter**: some attempts succeed, while others produce an explicitly retained failure outcome.

This distinction matters. Discarding the failed attempts would change the operational question. A postselected success is not the same as a deterministic process.

The paper does **not** conclude that Lorentz transformations universally require postselection. The result applies to one declared positive-record encoding at a fixed positive metric. Other encodings, passive coordinate changes, or different physical realizations are separate questions.

---

### Certification is not full tomography

RIC–TI also uncovers a subtle information-theoretic boundary.

Suppose we want to determine whether a machine performs one specified transformation. A sufficiently rich pair of overlapping code spaces can identify that target transformation exactly under the paper’s assumptions.

But suppose instead that we want to reconstruct an entirely unknown operation with no target specified in advance. Then the same incidence-supported probes are not enough.

All records supported on the null incidence planes span only a 15-dimensional part of the 16-dimensional space of Hermitian operators. One operator direction remains invisible. The paper constructs two genuinely different physical channels that agree on every null-supported preparation but differ when tested in the missing direction.

This is similar to illuminating an object from many angles while one internal layer remains transparent to every available wavelength. The measurements may be sufficient to verify a particular expected structure, yet insufficient to reconstruct every possible alternative.

That distinction is broadly important:

> Exact certification of a specified target does not automatically imply unrestricted process tomography.

### What the paper does not claim

RIC–TI does not derive:

* the complex carrier from reciprocity alone;
* a physical preparation or measurement apparatus;
* the positive metric from the incidence form;
* actual laboratory controllability;
* primitive physical spacetime;
* units of length or time;
* gravitational dynamics;
* a finite-noise experimental certification theorem.

The standard twistor ingredients are not presented as new. The contribution lies in the integrated, type-controlled relationship among incidence geometry, positive records, faithful common-process transport, flagged implementation, and the explicit tomography obstruction.

---

## Paper III: Reciprocal Lorentzian Connections

### A solution is not the whole action

#### *Reciprocal Internal Complementarity and the Conditional Selection of Lorentzian Connections*

**DOI:** [10.5281/zenodo.22648586](https://doi.org/10.5281/zenodo.22648586)

The third paper enters a finite Lorentzian gravity model.

In many geometric theories of gravity, a **connection** determines how local frames are compared from one region to another. One can sometimes construct a connection directly from a metric. In a first-order formulation, however, the metric or coframe and the connection are initially treated as independent variables. The action must then determine whether the independent connection is driven back to the geometric one.

This raises a deceptively simple question:

> If two actions agree whenever the connection is already geometric, are they physically equivalent?

Not necessarily.

Imagine two landscapes that have exactly the same height along one chosen hiking trail. If we inspect only that trail, the landscapes appear identical. But their slopes away from the trail may be completely different. A ball placed slightly off the path could roll differently in each landscape.

The geometric connection defines the trail. The independent connection directions describe movement away from it. Agreement on the trail—often called agreement “on shell” or on a selected section—does not determine the full surrounding action.

---

### Two actions, one geometric section, different stationary structures

RIC–LC studies two complete finite actions on a specified Lorentzian complex.

Both agree on the geometric connection section. They also share important first-order data there. But when the connection is varied independently, their stationary structures differ.

One completion has a nonsingular reference connection Hessian and a locally unique geometric stationary section.

The other possesses an exact six-parameter family of stationary connections at flatness.

This is not a small technical difference. It means that the geometric-section value alone does not determine whether an action uniquely selects its connection.

The paper then investigates what happens away from flatness. After eliminating 54 normal connection directions, six common directions remain. The reduced action difference contains the square of a parameter measuring obstruction to the declared flat embedding.

Under explicit analytic hypotheses and within seven stated coordinate boxes, any nonzero value of this parameter selects the geometric connection uniquely in the chosen chart. At exact flatness, the six-parameter family remains.

In plain language:

> Flatness permits an ambiguity. Within the certified finite domains, departure from flatness lifts that ambiguity and conditionally selects the geometric connection.

The sensitivity of the full connection problem grows approximately as

$$
\frac{1}{\gamma^2}
$$

as the declared nonflatness parameter $\gamma$ approaches zero. The limit is therefore singular: the system becomes increasingly difficult to invert near exact flatness, and no bounded full inverse exists through $\gamma=0$.

The reduced leading matrix has three positive and three negative directions. The stationary point is consequently not being advertised as an energy minimum. Stationarity, uniqueness, positivity, and physical stability are different statements.

---

### Why the finite details matter

The model retains:

* all twenty triangular faces;
* all ten boundary-face contributions;
* all sixty independent real Lorentz-connection directions;
* the declared logarithm branch;
* the full normal relaxation term;
* and the distinction between the two off-shell actions.

The accompanying analytic supplement and verification workflow reconstruct finite coefficient data, domain bounds, and selected inequalities using exact arithmetic where applicable.

These computations support the declared finite theorem. They do not turn it into a general result about every mesh, every gravitational action, or the continuum.

### What the paper does not claim

RIC–LC does not derive:

* the coframe or soldering field from primitive reciprocity;
* a unique fundamental gravitational action;
* the allowed variation space of nature;
* solutions of the metric vacuum equations;
* full general relativity;
* gravitational matter coupling;
* graviton polarizations;
* arbitrary-mesh convergence;
* a continuum or quantum-gravity limit.

It establishes a conditional connection-selection result in one completely specified finite Lorentzian model.

---

## Three papers, three important separations

The unity of Wave B does not come from declaring electromagnetism, twistor theory, and gravity to be the same thing. It comes from exposing three closely related category errors.

### A phase symmetry is not yet a gauge field

RIC–EM shows that a compact phase circle becomes gauge geometry only after localization, operational frame equivalence, path comparison, and further spacetime and action structures are supplied.

### A geometric transformation is not yet a physical operation

RIC–TI shows that preserving an indefinite incidence relation does not guarantee deterministic implementation on normalized positive records. Physical realization must respect an additional positive structure and account for every failure outcome.

### Agreement on a geometric solution is not equality of actions

RIC–LC shows that two actions can coincide on a geometric connection section while possessing different independent-connection stationary structures.

These distinctions form a common methodological message:

> Mathematical resemblance is not physical identity. Every bridge must be typed, and every additional assumption must be visible.

---

## What has advanced in Wave B?

The three papers produce different kinds of progress.

RIC–EM constructs a precise route from reciprocal phase to compact gauge geometry while identifying the exact point at which electromagnetic interpretation enters.

RIC–TI connects Lorentzian incidence geometry to an operational model of positive records. It proves a finite support-rigidity result, separates deterministic transport from flagged filtering, and identifies a one-direction obstruction to unrestricted tomography.

RIC–LC moves from kinematics and transport to an independently varied finite action. It demonstrates concretely that off-shell structure matters and gives a conditional theorem in which nonflatness lifts a six-parameter connection ambiguity.

Together they extend the Reciprocal Internal Complementarity program from the internal organization of phase toward three external questions:

$$
\boxed{
\text{How are local descriptions compared?}
}
$$

$$
\boxed{
\text{Which comparisons can be physically implemented?}
}
$$

$$
\boxed{
\text{Which comparison rule is selected by an action?}
}
$$

That is why **the geometry of comparison** is an appropriate theme for Wave B.

---

## What Wave B does not yet establish

Wave B is not presented as a completed unified theory.

It does not show that one primitive reciprocal relation, without further assumptions, derives quantum mechanics, electromagnetism, spacetime, and gravity. It does not derive the Standard Model, observed particle content, coupling constants, general relativity, or quantum gravity.

It also does not establish that every circular symmetry, every connection, or every appearance of curvature has one physical meaning. Electromagnetic phase curvature, twistor incidence, and Lorentzian frame curvature remain different typed structures unless explicit intertwiners are proved.

The two Reciprocal TCG papers should also be distinguished from the full public **Twistor Configuration Geometry** corpus. Reaching twistor incidence and finite Lorentzian connection models does not derive the full TCG postulate ledger, its empirical dimensionless-constant relations, or its prospective predictions.

These are public preprints rather than peer-reviewed journal articles. Their mathematical arguments and computational packages are available for scrutiny, reproduction, criticism, and future refinement.

The boundaries are part of the result.

---

## From Wave A to Wave B

The first two waves of Foundational Release III can now be read as a developing sequence.

**Wave A asked how relation acquires phase.**

It investigated reciprocal complex structure, Schrödinger normal form, composition, entanglement, finite Born-form readout, and a synthetic optical realization.

**Wave B asks how phase and incidence acquire geometry.**

It investigates localization, gauge-frame comparison, twistor incidence, operational transport, finite actions, and connection selection.

The emerging research ladder is not one unconditional derivation. It is a map of conditional transitions:

$$
\begin{aligned}
\text{reciprocal relation}
&\longrightarrow
\text{phase and composition}\\
&\longrightarrow
\text{localized comparison}\\
&\longrightarrow
\text{connection and incidence}\\
&\longrightarrow
\text{curvature and action}.
\end{aligned}
$$

At every arrow, Wave B asks the same question:

> What new structure has actually been obtained, and what had to be supplied to obtain it?

---

## The next frontier

The deeper question remains open.

Are quantum theory, electromagnetism, Lorentzian gravity, and Twistor Configuration Geometry genuinely different realizations of one mathematically defined Reciprocal Internal Complementarity structure?

Or do they merely use similar ideas—phase, pairing, transport, duality, curvature—without sharing a nontrivial common origin?

Answering that question requires more than placing the four sectors beside one another or writing their connections in a block-diagonal matrix. A genuine common-origin result would need to explain at least one previously independent selector, compatibility condition, or obstruction across multiple sectors.

Among the principal unresolved bridges are:

* the origin of localization;
* the construction of a coframe or soldering map;
* the relationship among the different transport laws;
* the reconciliation of their distinct variation spaces;
* and the transition from finite mathematical models to physical and continuum interpretation.

These are not editorial details. They identify the work that a stronger theory must perform.

Wave B does not close that program. It makes the next questions sharper.

---

## Conclusion

Complementarity-First begins with the possibility that relation is not merely something objects possess, but part of what makes stable physical description possible.

Wave A explored how a reciprocal relation can conditionally support phase, quantum composition, entanglement, and readout.

Wave B explores the next step: how local descriptions are compared, how geometric transformations become operational processes, and how an action can select one connection from many possibilities.

Its central message is simple:

> A circle is not yet electromagnetism.<br />
> An incidence symmetry is not yet a physical operation.<br />
> A geometric solution is not yet the full action.

By keeping those distinctions visible, the three papers offer a more disciplined route from relation toward geometry—one in which successes, assumptions, and remaining gaps can all be examined separately.

<hr id="zenodo-index" />

## Wave B papers

**RIC–EM**

*Reciprocal Internal Complementarity and the Conditional Emergence of Compact $U(1)$ Gauge Geometry*
DOI: [10.5281/zenodo.22365919](https://doi.org/10.5281/zenodo.22365919)

**RIC–TI**

*Reciprocal Internal Complementarity and the Conditional Construction of Lorentzian Twistor Incidence: Typed Carriers, Positive Records, and Faithful Transport*
DOI: [10.5281/zenodo.22648626](https://doi.org/10.5281/zenodo.22648626)

**RIC–LC**

*Reciprocal Internal Complementarity and the Conditional Selection of Lorentzian Connections*
DOI: [10.5281/zenodo.22648586](https://doi.org/10.5281/zenodo.22648586)

Further information about the Complementarity-First research program is available through the author’s research website, **[qczhang.com](https://qczhang.com/)**.
