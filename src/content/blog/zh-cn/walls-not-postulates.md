---
title: "端壁,而非假设:P7 如何收窄纯旋量兼容性残余"
description: "昨天的纯旋量极化论文以条件性方式闭合了一个作用量级问题:标准模型代数作为 Spin(10) 内两个稳定子的交集出现,但前提是存在一个兼容的纯旋量极化。该条件性留下一个残余 $P_{\\rm pol}^{D_5}$,即推导兼容极化。今天的新短文表明,兼容性残余在很大程度上被现有 TCG 资料所收窄 — P7 端壁假设提供轻子线,而要求可见 $SU(2)_L$ 保持则强制极化弱半部分的形式。结果是部分肯定:兼容极化 $W_+ = (\\ell \\wedge C) \\oplus (\\mathbf{2}_L \\otimes r_+)$ 几乎是典范的,由端壁轻子线 $\\ell$、色三平面 $C$ 以及保持观测的左手弱因子的要求决定,直到预期的 $SU(2)_R$ 规范选择和共轭取向。稳定子交集 $SU(5)_{W_+} \\cap (SU(4)_C \\times SU(2)_L \\times SU(2)_R) \\simeq S(U(3) \\times U(2))$ 即标准模型群,超荷 $Y = T_{3R} + (B-L)/2$ 为 Pati-Salam 归一化,且显式行列式约简证明表明 $SU(5)_{W_+}$ 条件强制两个 $U(1)$ 相位上 $a^2 b^2 = 1$,将其约简为单个 $U(1)_Y$。构造仅使用两个 TCG-本土 Spin(10) 表示($\\mathbf{10}$ 和 $\\mathbf{16}$);不引入标准重 $SO(10)$ 希格斯扇区。状态:部分肯定,残余锐化 — 从『推导任意兼容极化』到『推导一个在端壁与 $SU(2)_L$ 兼容轨道中的纯旋量凝聚』。活跃 TCG/FPA 假设清单不变;$P_{\\rm pol}^{D_5}$ 仍是活跃框架清单之外的命名残余,而非新框架公理。剩下的缺口纯属作用量级:从 Spin(10) 不变作用量产生该凝聚,而不通过手工塞入取向。"
pubDate: 2026-05-12
---

[上一篇纯旋量极化短文](/zh-cn/papers/30-pure-spinor-polarization/)以一个结构性重构闭合了一个代数问题。扭量构型几何(TCG)的 Spin(10) 包络给出活跃规范清单的正确代数完成,$A_3 \oplus A_1^L \oplus A_1^R \subset D_5$,但留下一个动力学残余:鉴于 TCG-本土场 $\mathbf{10}_H \oplus \mathbf{16}_H$ 上的 Spin(10) 不变标量势无法挑选出一个左/右真空期望值方向(*不变势轨道阻断*,以定理级证明判定为阻断),哪种机制实际选择标准模型子群?

那篇短文的答案是:标准模型群可读作两个稳定子的交集
$$G_{\rm SM} = G_{\rm PS} \cap G_\lambda,$$
即由 Spin(10) 包络提供的 Pati-Salam 子群 $G_{\rm PS} = SU(4)_C \times SU(2)_L \times SU(2)_R$ 与手征旋量 $\lambda \in \mathbf{16}$ 的 $SU(5)$ 型稳定子 $G_\lambda$ 的交集。根系交集定理则给出
$$\mathfrak{su}(5)_\lambda \cap \bigl(\mathfrak{su}(4)_C \oplus \mathfrak{su}(2)_L \oplus \mathfrak{su}(2)_R\bigr) = \mathfrak{su}(3)_C \oplus \mathfrak{su}(2)_L \oplus \mathfrak{u}(1)_Y,$$
**前提是**纯旋量极化 $W = W_3 \oplus W_2$ 与 Pati-Salam 矢量分裂 $V_{10} = V_6 \oplus V_4$ 兼容。该条件性(『前提是』)即是残余:
$$P_{\rm pol}^{D_5}: \text{ 推导一个与 } D_3 \oplus D_2 \text{ 分裂兼容的 TCG-本土纯旋量极化。}$$

昨天的短文命名了 $P_{\rm pol}^{D_5}$ 但没有推导它。一般的纯旋量稳定子在 $\mathrm{Spin}(10)$ 中共轭于 $SU(5)$,但共轭并不等同于对齐。兼容性部分作为开放数学目标留下:推导一个与该框架已选 $D_3 \oplus D_2$ 分裂对齐的极化。

今天的新短文表明,兼容性残余在很大程度上被现有 TCG 资料所收窄 — 不引入任何新假设。

## P7 端壁已经提供我们所需

TCG 框架的 P7 假设([TCG 中的壁删除与 Pati-Salam Levi 子代数](/zh-cn/papers/19-wall-deletion/))提供 $SU(4)_C$ 基本表示的 Pati-Salam 色/轻子分裂:
$$\mathbf{4} = C \oplus \ell, \qquad \dim C = 3, \quad \dim \ell = 1.$$
这里轻子线 $\ell \subset \mathbf{4}$ 不是新引入的 — 它是 P7 端壁结构已经选出的同一条轻子作第四色线。

在标准 Spin(10) 矢量分支下
$$\mathbf{10} \to (\mathbf{6}, \mathbf{1}, \mathbf{1}) \oplus (\mathbf{1}, \mathbf{2}_L, \mathbf{2}_R), \qquad \mathbf{6} = \wedge^2 \mathbf{4},$$
Pati-Salam 矢量分裂 $V_{10} = V_6 \oplus V_4$ 对应 $\wedge^2 \mathbf{4} \oplus (\mathbf{2}_L \otimes \mathbf{2}_R)$。兼容纯旋量极化 $W = W_3 \oplus W_2$,$\dim_\mathbb{C} W_3 = 3$、$\dim_\mathbb{C} W_2 = 2$,需要在六维 $\wedge^2 \mathbf{4}$ 内的一个极大各向同性三平面 $W_3$。

**命题 1** 识别了自然候选。设
$$W_3^+ := \ell \wedge C \subset \wedge^2 \mathbf{4}.$$
对 $W_3^+$ 中两个元素 $\ell \wedge c_1$ 和 $\ell \wedge c_2$,楔积配对满足
$$(\ell \wedge c_1) \wedge (\ell \wedge c_2) = 0$$
因为 $\ell$ 出现两次。所以 $W_3^+$ 是各向同性的。其维数为 $\dim \ell \cdot \dim C = 1 \cdot 3 = 3$,正好等于 $\wedge^2 \mathbf{4}$(六维且二次型非退化)的极大各向同性维数。因此 $W_3^+$ 是*极大*各向同性的。共轭选择 $W_3^- = \wedge^2 C$ 也是极大各向同性的(因为当 $\dim C = 3$ 时,$\wedge^4 C = 0$)。

所以 P7 已经给出兼容纯旋量极化的色部分。3+1 色/轻子分裂*正是*构造极化色半部分所需的资料。

## 可见 $SU(2)_L$ 强制弱部分

弱矢量部分为 $V_4 = \mathbf{2}_L \otimes \mathbf{2}_R$。兼容极化需要 $V_4$ 内的一个极大各向同性二平面 $W_2$。

要求极化保持可见 $SU(2)_L$ 因子已足以强制 $W_2$ 的形式。相关引理:作为 $SU(2)_L$ 模,
$$L \otimes R \cong L \oplus L,$$
其中 $R$ 作为重数空间。由 Schur 引理,任何 $SU(2)_L$ 不变的复二维子空间形式为 $L \otimes r$,$r \subset R$ 为一条线。各向同性由右 $SU(2)_R$ 辛形式 $\epsilon_R$ 交替而成:
$$q_4(u \otimes r_0, u' \otimes r_0) = \epsilon_L(u, u') \cdot \epsilon_R(r_0, r_0) = 0.$$
由于 $L \otimes R$ 的复维数为 4 而 $W_2$ 的复维数为 2,$W_2$ 在 $\mathbb{C}$ 上是极大各向同性的。

两个重要注意:

第一,**$SU(2)_L$ 保持是兼容性输入,非此处推导**。它是与 $P_{5'}$($g_{2,W}^2 = 4/(3\pi)$)仅作用于左手弱因子的同一物理观测。该引理强制任何 $SU(2)_L$ 保持极化的*形式*为 $L \otimes r$;并未强制极化首先要保持 $SU(2)_L$。其他极化存在(例如混合 $L_+ \otimes R_+$ 与 $L_- \otimes R_-$ 的 2 平面);它们会破缺 $SU(2)_L$。选择 $SU(2)_L$ 保持族是物理输入。

第二,线 $r \subset \mathbf{2}_R$ 不是与 $\ell$ 同等意义上的自由连续参数。$\mathbf{2}_R$ 中所有线在 $SU(2)_R$ 下相关;选择其一即是标准自发破缺 $SU(2)_R \to U(1)_R$,$r_+$ 与 $r_-$ 对应 $T_{3R}$ 符号约定。

## 兼容极化

结合这两个结构性输入:
$$W_+ = (\ell \wedge C) \oplus (\mathbf{2}_L \otimes r_+) \subset \wedge^2 \mathbf{4} \oplus (\mathbf{2}_L \otimes \mathbf{2}_R) = V_{10, \mathbb{C}}.$$
这是一个极大各向同性 5 平面(定理 3:正交块 $V_6 \oplus V_4$ 中极大各向同性子空间的直和是总体的极大各向同性子空间)。它决定 $\mathrm{Spin}(10)$ 的一个射影纯旋量。共轭 $W_- = (\wedge^2 C) \oplus (\mathbf{2}_L \otimes r_-)$ 给出相反取向。

稳定子交集即标准模型群。显式说明:限制于保持 P7 和所选 $SU(2)_R$ Cartan 诱导分裂的 $G_{\rm PS}$ 元素。$SU(4)_C$ 元素 $g_4 = \mathrm{diag}(A, a)$,$A \in U(3)$、$a \in U(1)$、$\det(A) \cdot a = 1$,保持 $\mathbf{4} = C \oplus \ell$;保持 $r_+$ 的 $SU(2)_R$ 元素以相位 $b \in U(1)$ 作用其上。诱导作用在 $\ell \wedge C$ 上的行列式为 $a^3 \det(A) = a^2$;诱导作用在 $\mathbf{2}_L \otimes r_+$ 上的行列式为 $b^2$。$SU(5)_{W_+}$ 稳定子条件($W_+$ 上 $\mathbf{5}$-基本表示零迹)强制
$$a^2 b^2 = 1,$$
将两个 $U(1)$ 相位 $(a, b)$ 约简为单个 $U(1)$。该剩余 $U(1)$ 由标准超荷生成:
$$Y = T_{3R} + \frac{B-L}{2},$$
其中 $Q_{\rm EM} = T_{3L} + Y$。电荷分解
$$W_+ \cong (\mathbf{3}, \mathbf{1})_{-1/3} \oplus (\mathbf{1}, \mathbf{2})_{+1/2}$$
即标准模型子群下 $SU(5)$ 基本 $\mathbf{5}$(零迹 $3 \cdot (-1/3) + 2 \cdot (+1/2) = 0$)。

一个澄清注:此 $\mathbf{5}$ 是极化 $W_+$ 的基本表示,*非*物质多重态。标准模型物质仍位于 $\mathrm{Spin}(10)$ 的手征旋量 $\mathbf{16}$ 中,其在 $SU(5) \supset G_{\rm SM}$ 下的分解为通常的 $\overline{\mathbf{5}} \oplus \mathbf{10} \oplus \mathbf{1}$,打包一个完整世代。

## 什么被收窄,什么没有

新短文未闭合 $P_{\rm pol}^{D_5}$。它大幅收窄之。

今天的短文之前,残余为:*"推导任意兼容的纯旋量极化"*。极化可以是任何与 Pati-Salam 分裂对齐的 $W$,对其色/轻子取向、弱取向或电荷内容没有任何约束,超出朴素的极大各向同性条件。今天的短文之后,残余为:*"推导一个在端壁与 $SU(2)_L$ 兼容轨道中的纯旋量凝聚"*。兼容轨道现在被指定 — 由端壁轻子线 $\ell$、色三平面 $C$ 和保持观测的左手弱因子的要求决定 — 直到预期的 $SU(2)_R$ 规范选择和共轭取向。

剩余残余纯属**作用量级**。具体而言:产生一个 Spin(10) 不变作用量,其真空流形包含 $W_+$ 轨道作为纯旋量凝聚,而不通过手工塞入取向。示意势
$$V_{\rm pure}(\lambda) = \kappa \sum_{a=1}^{10} |\lambda^T C \Gamma^a \lambda|^2 + \lambda_0 \bigl(\lambda^\dagger \lambda - v_R^2\bigr)^2$$
已强制纯旋量约束和归一化,极小点在纯旋量轨道上。它本身并不强制所选轨道代表是端壁与 $SU(2)_L$ 兼容的那个。

五个明确缺口:G1 纯旋量凝聚(作用量级);G2 兼容性作为边界条件或定理(而非强加输入);G3 共轭取向 $W_+$ 对 $W_-$(与手征 $\mathbf{16}$ 对 $\overline{\mathbf{16}}$ 选择关联);G4 破缺尺度与 $P_{5'}$ 值;G5 世代三化不变。

## 这对结构性弧意味着什么

构造仅使用两个 TCG-本土 Spin(10) 表示 — 旋量 $\mathbf{16}$ 和矢量 $\mathbf{10}$,经由 $\mathbf{6} = \wedge^2 \mathbf{4} \subset \mathbf{10}$。它不引入标准重 $SO(10)$ 破缺表示 $\mathbf{45}$、$\mathbf{54}$、$\mathbf{126}$、$\overline{\mathbf{126}}$、$\mathbf{210}$。与[昨天的短文](/zh-cn/papers/30-pure-spinor-polarization/)同样的克制。

活跃 TCG/FPA 假设清单**不变**:
$$P_0, \ldots, P_4, \quad P_{5'}, \quad P_6, \quad P_7, \quad P_{H'}, \quad P_{SO(10)}.$$
$P_{\rm pol}^{D_5}$ 仍是此清单之外的残余标签 — 非新框架公理 — 锐化但未闭合。

本论文之后,统一图的规范弧读作:

| 弧 | 闭合短文 | 命名残余(不在活跃清单) |
|---|---|---|
| 规范包络 | [Spin(10) 下游破缺短文](/zh-cn/papers/29-spin10-downstream-breaking-family/) + [纯旋量极化](/zh-cn/papers/30-pure-spinor-polarization/) + 本论文 | $P_{\rm pol}^{D_5}$(收窄至作用量级核心)+ $P_{\rm fam}$ |
| 电子 $P_4$ | [边界超选择阻断短文](/zh-cn/papers/27-boundary-superselection-obstruction/) | $P_{\rm BFV}^{\rm sec}$ |
| 强子 $P_{H'}$ | [双扭量配对通道短文](/zh-cn/papers/28-bitwistor-pair-channels/) | G1/G2 有动机;G3/G4/F6 开放 |

规范侧弧现在有*三*篇作用量级短文(Paper #29 v2 + #30 + 本论文),每一篇都收窄残余但不闭合之。三条弧的共同开放层仍相同:作用量级 / 动力学完成 / 真空机制构造。在规范侧,下一个真正进展将是一个 Spin(10) 不变作用量,其真空被强制进入兼容轨道 — 这一目标现在比三天前显著锐化。

本论文,*扭量构型几何 Spin(10) 包络中由 P7 端壁资料得到的兼容纯旋量极化*,在 Zenodo 上(DOI [10.5281/zenodo.20129212](https://doi.org/10.5281/zenodo.20129212);CC-BY-4.0)。它很短 — 九页,十个参考文献 — 包含一个命题、一个引理、一个定理、一个行列式约简命题和一个超荷命题。三轮 Claude 独立审阅加一轮 GPT-5.5 Pro 全新对话审阅(判定:经小幅精度修订后可发表)将 §6 稳定子交集从口号级提升至定理级,显式行列式计算表明 $SU(5)_{W_+}$ 条件 $a^2 b^2 = 1$。上传前标题从早期的『...来自 TCG 扭量旗』被改写 — Claude 和 GPT 独立都指出原标题过度承诺,因为正文使用 P7 端壁资料,非直接使用扭量旗。

端壁,而非新假设。兼容极化几乎到位。剩下要做的是写下作用量。
