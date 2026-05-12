---
title: "凝聚,而非取向:为何本土 Spin(10) 作用量无法选择壁兼容纯旋量"
description: "在规范侧作用量级三篇先前论文之后 — 纯旋量极化短文(交集机制)、兼容极化短文(P7 壁 + 可见 $SU(2)_L$ 将兼容轨道收窄至 $W_+$)、以及作用于 $\\mathbf{16} + \\mathbf{10}$ 的 TCG-本土 Spin(10) 不变作用量能否强制 $W_+$ 为真空的问题 — 今天的论文以干净的定理级否定闭合该问题。证明三个独立的阻断。第一(§3),来自 $\\mathbf{16} \\otimes \\mathbf{16} \\supset \\mathbf{10}$ 通道的自然 Yukawa 耦合 $y H_a Q^a(\\lambda) + \\mathrm{h.c.}$ 在纯旋量轨迹上恒等消失 — 该通道**正是**纯旋量势所强制消失的量。第二(§4),具有 Spin(10) 不变 $V_{\\rm wall}(H)$ 的单矢量 $H \\in \\mathbf{10}$ 只选择矢量轨道(通用紧实形稳定子 $\\mathrm{Spin}(9)$),而非 Pati-Salam 壁旗 $\\mathbf{4} = C \\oplus \\ell$ 或弱左二平面 $\\mathbf{2}_L \\otimes r_+$。第三(§5),埃尔米特变体 $\\lambda^\\dagger \\Gamma^a \\lambda H_a$ 不是有效的 Spin(10) 不变耦合,因为 $\\mathbf{16} \\otimes \\overline{\\mathbf{16}} = \\mathbf{1} \\oplus \\mathbf{45} \\oplus \\mathbf{210}$ 不包含 $\\mathbf{10}$。组合推论:在 TCG-本土纪律下,没有任何自然低阶 $\\mathbf{16}+\\mathbf{10}$ Spin(10) 不变作用量模板把 $W_+$ 作为强制真空代表。纯旋量凝聚可达成;兼容纯旋量凝聚不可达成,除非引入额外结构性输入。残余 $P_{\\rm pol}^{D_5}$ 干净地分裂为 $P_{\\rm pol}^{D_5,\\rm compat}$(兼容性分量,由兼容极化分析大幅收窄)和 $X_{\\rm wall-pol}$(壁 + $SU(2)_L$ 数据的作用量级动力学源,现在被定理级阻断界定)。活跃 TCG/FPA 假设清单不变。规范侧弧现在与电子侧弧形式对等:两者都有定理级作用量级阻断短文,在活跃框架清单之外命名精确残余。"
pubDate: 2026-05-12
---

[昨天的兼容极化短文](/zh-cn/papers/31-compatible-pure-spinor-polarizations/)大幅收窄了规范侧残余 $P_{\rm pol}^{D_5}$。P7 壁假设已提供轻子线 $\ell \subset \mathbf{4}$ 及色/轻子分裂 $\mathbf{4} = C \oplus \ell$。可见 $SU(2)_L$ 保持强制任何兼容极化的弱半部分形式为 $\mathbf{2}_L \otimes r$。合起来这些将兼容纯旋量代表约束至形式
$$W_+ = (\ell \wedge C) \oplus (\mathbf{2}_L \otimes r_+) \subset V_{10,\mathbb{C}},$$
直到预期的 $SU(2)_R$ 规范选择与共轭取向。剩余的 G1 问题更尖锐:作用于 TCG-本土场 $\lambda \in \mathbf{16}$ 和 $H_a \in \mathbf{10}$ 的 Spin(10) 不变作用量能否强制这个特定的兼容代表作为真空,而不通过手工塞入壁取向?

今天的短文给出定理级否定答案。该框架可以产生纯旋量凝聚。但它无法选择壁兼容的那个。

## 自然作用量模板及其失败之处

自然模板为
$$V(\lambda, H) = V_{\rm pure}(\lambda) + V_{\rm wall}(H) + V_{\rm couple}(\lambda, H),$$
其中[纯旋量极化短文](/zh-cn/papers/30-pure-spinor-polarization/)中的示意纯旋量势
$$V_{\rm pure}(\lambda) = \kappa \sum_a |Q^a(\lambda)|^2 + \lambda_0 (\lambda^\dagger \lambda - v_R^2)^2, \quad Q^a(\lambda) = \lambda^T C \Gamma^a \lambda,$$
强制纯旋量轨迹 $Q^a = 0$ 和归一化 $\lambda^\dagger \lambda = v_R^2$。到此为止还好 — 纯旋量凝聚是可达成的。

但 $V_{\rm pure}$ 选择一个轨道,而非该轨道内的代表。给定手征的非零射影纯旋量构成单个具有 $U(5)$ 型稳定子的齐次簇。选择 $\lambda \in \mathbf{16}$ 而非 $\overline{\mathbf{16}}$ 区分 $S_+$ 和 $S_-$ 手征纯旋量族,但它不标记 P7 壁线 $\ell$、色平面 $C$ 或可见 $SU(2)_L$ 因子。需要更多的东西来从其余中选出 $W_+$。

短文证明在 TCG-本土 $\mathbf{16}+\mathbf{10}$ 纪律内*没有*这种更多的东西可用。

## 三个独立的阻断

**定理 1 — Yukawa 消失**。来自 $\mathbf{16} \otimes \mathbf{16} \supset \mathbf{10}$ 双线性通道的自然 Spin(10) 不变矢量通道耦合
$$V_{\rm couple}^{\rm hol}(\lambda, H) = y H_a Q^a(\lambda) + \bar{y} H_a^\dagger \overline{Q^a(\lambda)}$$
在纯旋量轨迹上恒等消失,因为 $Q^a(\lambda) = 0$ *按定义即是纯旋量约束*。该耦合是纯旋量势刚强制消失的量。它无法区分 $W_+$ 与任何其他纯旋量代表。

拉格朗日乘子的锐化使这更尖锐:如果 $H_a$ 被当作强制 $Q^a = 0$ 的乘子,它在约束被满足时从壳上作用量中消失。消失是结构性的,非调谐人为。

**定理 3 — 单矢量无法编码壁旗**。具有 Spin(10) 不变势 $V_{\rm wall}(H)$ 的单矢量场 $H_a \in \mathbf{10}$ 只能选择 Spin(10) 矢量轨道。在紧实形中,通用非零矢量稳定子为 $\mathrm{Spin}(9) \subset \mathrm{Spin}(10)$;复化情形中,零或各向同性矢量稳定子为抛物子群。这两者都不包含兼容极化所需的数据:
$$\mathbf{4} = C \oplus \ell, \qquad \ell \wedge C \subset \wedge^2 \mathbf{4}, \qquad \mathbf{2}_L \otimes r_+ \subset \mathbf{2}_L \otimes \mathbf{2}_R.$$
这是*旗*数据 — Pati-Salam 分解加弱取向选择 — 而非矢量轨道数据。要动力学地编码该旗,需要变换为投影子、伴随、或更高张量的序参量 — 正是 TCG-本土纪律明确禁止的更高 SO(10) 破缺表示($\mathbf{45}/\mathbf{54}/\mathbf{126}/\overline{\mathbf{126}}/\mathbf{210}$)。

混合不变量漏洞封闭备注涵盖自然候选 $|H_a \Gamma^a \lambda|^2$。此类项可以把 $H$ 与纯旋量湮灭子 $W_\lambda$ 相关联 — 例如,强制 $H$ 位于 $W_\lambda$ 内或与其正交 — 但仍无法产生缺失的壁旗。它们把矢量与纯旋量相关联;不产生 Pati-Salam-旗加弱-取向数据。

**定理 6 — $\mathbf{16} \otimes \overline{\mathbf{16}}$ 中无 $\mathbf{10}$**。最后的希望是埃尔米特变体
$$V_{\rm couple}^{\rm Herm} = y_2 \lambda^\dagger \Gamma^a \lambda H_a,$$
它不必在纯旋量轨迹上消失。但此表达式不是单一手征 $\mathbf{16}$ 的 Spin(10) 不变标量耦合。埃尔米特双线性表示为
$$\mathbf{16} \otimes \overline{\mathbf{16}} = \mathrm{End}(\mathbf{16}) = \mathbf{1} \oplus \mathbf{45} \oplus \mathbf{210}$$
(Slansky 1981 标准分解;维数检验:$16^2 = 256 = 1 + 45 + 210$)。此分解中没有 $\mathbf{10}$。所以 $\lambda^\dagger \Gamma^a \lambda H_a$ 不是有效的 Spin(10) 不变矢量通道标量耦合。唯一可用的单手征旋量矢量通道耦合是全纯 $Q^a(\lambda)$,定理 1 已经把它杀死。

## 推论及其意义

合并三个阻断:在 TCG-本土纪律下(仅 $\mathbf{16}+\mathbf{10}$ 场,不引入 $\mathbf{45}/\mathbf{54}/\mathbf{126}/\overline{\mathbf{126}}/\mathbf{210}$),没有任何由本土矢量通道和纯旋量约束构造的自然低阶 $\mathbf{16}+\mathbf{10}$ Spin(10) 不变作用量模板 — 包含多项式不变量 $|Q|^2$、$H \cdot Q$、$H^2$、$\lambda^\dagger \lambda$ 和 $\mathbf{1} \oplus \mathbf{45} \oplus \mathbf{210}$ 中的埃尔米特双线性 — 把兼容代表 $W_+$ 作为强制真空。

**纯旋量凝聚:可达成**。
**兼容纯旋量凝聚:不可达成**,除非引入编码 P7 壁和 $SU(2)_L$ 保持极化数据的额外结构性输入。

## 残余重新表述

残余 $P_{\rm pol}^{D_5}$ 干净地分裂:
> $P_{\rm pol}^{D_5} \leadsto P_{\rm pol}^{D_5,\rm compat} + X_{\rm wall-pol}.$

这里 $P_{\rm pol}^{D_5,\rm compat}$ 是由[兼容极化分析](/zh-cn/papers/31-compatible-pure-spinor-polarizations/)大幅收窄的兼容性分量:一旦提供 P7 和可见 $SU(2)_L$,兼容极化即被约束至 $W_+$ 形式。而 $X_{\rm wall-pol}$ 是新命名的作用量级残余:
> $X_{\rm wall-pol}$:P7 壁加 $SU(2)_L$ 保持极化数据的 TCG-本土动力学源。

今天的定理表明 $X_{\rm wall-pol}$ 不由耦合至单一手征 $\mathbf{16}$ 纯旋量凝聚的单一 $\mathbf{10}$-矢量提供。

两者皆不在活跃框架清单中:
$$P_0, \ldots, P_4, \quad P_{5'}, \quad P_6, \quad P_7, \quad P_{H'}, \quad P_{SO(10)} \quad \text{(不变)}.$$

这很重要。结果不是隐藏的正向推导。它是阻断短文:命名缺失的作用量级资料,并将其保持在活跃清单之外。2026-05-01 的框架闭合判定被遵守 — 目的是记录作用量级层级的尖锐负面结果,而非通过将残余假设重新命名为推导内容来继续无限搜索。

## 五个失败模式

阻断是刻意狭窄的。记录了五条逻辑上可能的路径:

- **F1. 多场扩展**。第二矢量或额外张量序参量原则上可以编码超过单一矢量轨道。但此种扩展增加新的结构性假设;除非这些场独立于 TCG 清单推导,阻断仅被位移。
- **F2. 扭量旗到极化**。壁数据可能不来自体 Spin(10) 希格斯势,而来自手征 Penrose 扭量旗 $\mathbb{CP}^1 \subset \mathbb{CP}^2 \subset \mathbb{CP}^3$。这是[兼容极化短文](/zh-cn/papers/31-compatible-pure-spinor-polarizations/)中命名的 G2 未来路径。它在本论文范围之外,在此调用会把内部规范扇区与洛伦兹/扭量几何混淆 — 正是反逃避纪律在此语境下禁止的。
- **F3. 边界或辅助结构**。壁兼容极化可以编码在边界作用量或辅助 BV–BFV 扇区中,而非体希格斯势。这在结构上平行于[边界超选择阻断短文](/zh-cn/papers/27-boundary-superselection-obstruction/)中的电子侧 $P_{\rm BFV}^{\rm sec}$ 残余。
- **F4. 兼容性作为显式输入**。诚实的备选方案是把兼容性结果保留为强加但锐利收窄的残余($P_{\rm pol}^{D_5,\rm compat}$),并把 $X_{\rm wall-pol}$ 作为仍缺失的命名作用量级源。
- **F5. 寻它处扩展**。增加更高 SO(10) 破缺表示会解决不同的问题(常规 GUT 模型构造),并会瓦解本土 TCG 推导与标准统一机器之间的区别。明确禁止。

## 结构性弧的当前状态

本短文完成跨三条弧中两条的结构性平行:

| 弧 | 结构动机短文 | 作用量级阻断短文 |
|---|---|---|
| 规范包络 | [Spin(10) 下游破缺](/zh-cn/papers/29-spin10-downstream-breaking-family/) + [纯旋量极化](/zh-cn/papers/30-pure-spinor-polarization/) + [兼容极化](/zh-cn/papers/31-compatible-pure-spinor-polarizations/) | **本论文**($X_{\rm wall-pol}$ 残余) |
| 电子 $P_4$ | 体-边界局域化 + 连通残数 | [边界超选择阻断](/zh-cn/papers/27-boundary-superselection-obstruction/)($P_{\rm BFV}^{\rm sec}$ 残余) |
| 强子 $P_{H'}$ | [双扭量配对通道](/zh-cn/papers/28-bitwistor-pair-channels/) | (尚无) |

规范侧弧已匹配电子侧弧的双层结构:经结构动机闭合收窄,然后在作用量层级以精确命名残余在活跃清单之外作出定理级阻断。该框架的结构图现在是迄今最精确的版本,而活跃 TCG/FPA 假设清单与规范弧工作开始之前完全一致。

共同开放层仍相同:作用量级 / 动力学完成 / 真空机制构造。在规范侧,目前活跃的未来路径是 G2 — 从手征 Penrose 扭量旗推导兼容极化,在今天的定理已经界定的体 Spin(10) 作用量*之外*。

本论文,*扭量构型几何 Spin(10) 包络中的纯旋量凝聚阻断*,在 Zenodo 上(DOI [10.5281/zenodo.20141601](https://doi.org/10.5281/zenodo.20141601);CC-BY-4.0)。十页,三个定理,一个推论,五个失败模式,十二个参考文献。

凝聚,而非取向。作用量选择轨道;取向需要作用量不提供的结构。
