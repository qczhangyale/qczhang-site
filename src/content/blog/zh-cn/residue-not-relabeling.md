---
title: "残余,而非重新标记:τCG 中的对通道根壁残余地址"
description: "昨日论文(论文 #35,强子六槽分辨)将活跃清单之外的残余命名为 P_pair^addr。论文 #35 的条件性肯定为:τCG + P_pair^addr ⇒ Tr_num(H_∧²) = 6π^5。今天的论文尝试在同调地址层面对 P_pair^addr 进行更强的边界缺陷路径构造。两份先前草稿已退役:v1 集索引双射 Φ_+(A_3) ≅ Ω_2(S_4^FPA)(本质上是重新标记 — 两侧均按 {1,2,3,4} 中的对 i<j 索引);v2 '缺陷算子' 框架(相对于实际同调内容过度承诺)。v3 实现为真正的结构性进展。关键结构转变:从一个基本有序腔的边界(电子 P_4 扇区,论文 #27)— 原始面 {12, 23, 34} — 转移到完整带标号腔排列,其六个对角线 H_ij = {x_i = x_j} 恰好是 A_3 编辫排列的反射超平面。单腔边界 ⇒ P_4(电子);完整带标号腔壁 ⇒ K_4(强子)。相应对数残余生成元 a_ij 居于一阶 Orlik-Solomon 代数 A^1_OS(A_3) 中,带标准 Arnold-Orlik-Solomon 回路关系 a_ij ∧ a_ik − a_ij ∧ a_jk + a_ik ∧ a_jk = 0(i<j<k),由 ∂ 应用于相依三元组 {H_ij, H_ik, H_jk} 导出。对通道根壁残余地址:D_ij := a_ij ⊗ p_ij ∈ A^1_OS(A_3) ⊗ P_addr,其中 P_addr := Span_C{p_ij} 为形式对地址向量空间;{p_ij} 与 ∧²4 的 {e_i ∧ e_j} 在选定框架下双射对应 — 基数为 6 的两个索引集之间的标号对应,*不是* C-线性同一;P_addr 上无诱导 SU(4)-作用;p_ij 为形式符号,不是向量或投影子。P_7 壁兼容性:{D_12, D_13, D_23} ⊔ {D_14, D_24, D_34} 与 ∧²4 = ∧²C ⊕ (ℓ∧C) 匹配 — 给予 3+3 分裂以结构内容。有序 6! 迹仍不成立(定理 11):W(A_3) ≅ S_4 非 S_6;Orlik-Solomon 回路关系;通道标签非投影子。三路残余分解:P_pair^addr = P_pair^wall-res + P_pair^phys + P_pair^ord,仅 P_pair^wall-res 由本文同调实现。尖锐残余:'为何六个根壁对地址有物理实现及均匀有序迹?' 判定:部分正面 — 同调根壁残余地址构造;无 P_H' 推导;活跃清单不变。与论文 #25、#28、#34、#35 同一成熟度记录。"
pubDate: 2026-05-18
---

[昨日的强子六槽分辨论文](/zh-cn/blog/addressability-not-multiplier/) 将 $P_{H'}$ Lenz 读数中的残余从 *"为何 $6!$ 乘 $\pi^5/5!$?"* 尖锐化为 *"$P_7$ 四槽载体的六个完整对通道为何是物理可寻址的边界缺陷槽?"* 它将这一残余命名为 $P_{\rm pair}^{\rm addr}$ 并证明条件性肯定
$$\tau\text{CG} + P_{\rm pair}^{\rm addr} \Rightarrow \mathrm{Tr}_{\rm num}(H_{\wedge^2}) = 6\pi^5.$$
$P_{\rm pair}^{\rm addr}$ 被明确置于活跃 TCG/τCG 清单之外,作为带标号后继构造目标。

**今天的论文尝试在同调地址层面对 $P_{\rm pair}^{\rm addr}$ 进行更强的边界缺陷路径构造。**

## 前两次尝试为何不够

在 v3 实现之前,两份先前草稿被退役。

**v1(集索引双射)。** 观察到
$$\Phi_+(A_3) \cong \Omega_2(S_4^{\rm FPA})$$
即 $A_3$ 的六个正根与 $\{1, 2, 3, 4\}$ 中的六个无序对 $\{i,j\}$ 双射对应。但两侧*按定义*都由对 $i<j$ 索引 — 那就是同一个组合集合。"构造" 仅是重新标记:它识别了六个对标号的两份副本而未产生任何边界缺陷算子。也混淆了权 $\varepsilon_i + \varepsilon_j$($\wedge^2 \mathbf{4}$ 的权)与根 $\varepsilon_i - \varepsilon_j$($A_3$ 伴随的根),它们居于不同表示。

**v2("缺陷算子")。** 做出了真正的结构性进展 — 完整 FPA 腔排列与 Orlik-Solomon 残余代数 — 但将结果框架化为 "具体的对通道缺陷算子",这是过度承诺。$\mathsf{p}_{ij}$ 一侧公开是名义的(形式地址符号,而非投影子),而 QFT/TQFT 中的 "缺陷算子" 是指沿余维 $k$ 子流形插入并源出非平凡物理的算子。实际算子内容完全居于同调残余一侧。

## v3 构造

**关键结构转变。** 强子六对集是 $K_4$ 的边集,而非电子边界扇区中所用的 $P_4$ 相邻边。所有六个对来自何处?

并非来自一个基本有序腔的边界。*那*仅给出相邻碰撞:
$$0 < x_1 < x_2 < x_3 < x_4 < 1 \Rightarrow \text{原始面 } \{12, 23, 34\} = P_4.$$

六个对来自**完整带标号腔排列** — 连接所有 $4!$ 个有序腔的全局壁配置。碰撞壁为
$$H_{ij} = \{x_i = x_j\}, \quad 1 \le i < j \le 4,$$
这六个壁恰好是编辫排列的 $A_3$ 型反射超平面。它们的无序对索引形成 $K_4$ 的边集。

$$\text{单腔边界} \Rightarrow P_4 \quad (\text{电子扇区})$$
$$\text{完整带标号腔壁} \Rightarrow K_4 \quad (\text{强子扇区})$$

**这保留电子扇区框架。** 完整腔构造不会回溯地改变[电子 $P_4$ 分析](/zh-cn/blog/walls-not-postulates/) — 两个简化都是同一个 FPA 顶层的下游;它们是同一四标号载体的不同边界简化。

**根壁残余代数。** 定义 3 给出 Orlik-Solomon 外部关联代数 $A^*_{\rm OS}(A_3)$,生成元 $\{a_{ij} : 1 \le i < j \le 4\}$ 按字典序,平方零关系 $a_{ij} \wedge a_{ij} = 0$,以及对每个三元组 $i<j<k$ 的**标准 Arnold-Orlik-Solomon 回路关系**:
$$a_{ij} \wedge a_{ik} - a_{ij} \wedge a_{jk} + a_{ik} \wedge a_{jk} = 0.$$
这由边界映射 $\partial$ 应用于相依三元组 $\{H_{ij}, H_{ik}, H_{jk}\}$ 导出 — Orlik-Terao(1992)中的标准表述,以及编辫排列补集上同调的标准形式。

**对通道根壁残余地址。** 定义 6 引入
$$\mathcal{P}_{\rm addr} := \mathrm{Span}_{\mathbb{C}}\{\mathsf{p}_{ij} : 1 \le i < j \le 4\}$$
为形式对地址向量空间。基 $\{\mathsf{p}_{ij}\}$ 与 $\wedge^2 \mathbf{4}$ 的反对称基 $\{e_i \wedge e_j\}$ 在**选定框架下双射对应**:

- 这是基数为 6 的两个索引集之间的标号对应
- 它**不是** $\mathcal{P}_{\rm addr}$ 与 $\wedge^2 \mathbf{4}$ 之间的 $\mathbb{C}$-线性同一
- $\mathcal{P}_{\rm addr}$ 上无诱导 $SU(4)$-作用
- $\mathsf{p}_{ij}$ 为形式符号,不是 $\wedge^2 \mathbf{4}$ 的向量或对线 $\mathbb{C}(e_i \wedge e_j)$ 的投影子

**对通道根壁残余地址生成元**为
$$D_{ij} := a_{ij} \otimes \mathsf{p}_{ij} \in A^1_{\rm OS}(A_3) \otimes \mathcal{P}_{\rm addr}.$$

这些是**同调**残余地址生成元 — 明确*不是* QFT 缺陷算子、Hilbert 空间投影子或对-Fock 基。将它们转化为物理缺陷算子或投影子需要本文未提供的额外边界动力学。

## $P_7$ 壁兼容性

在[$P_7$ 壁分裂](/zh-cn/blog/wall-deletion-pati-salam/) $\mathbf{4} = C \oplus \ell$ 配以 $\ell = \langle e_4 \rangle$ 下,六个对地址分裂为
$$\{D_{12}, D_{13}, D_{23}\} \sqcup \{D_{14}, D_{24}, D_{34}\}$$
与 $\wedge^2 \mathbf{4} = \wedge^2 C \oplus (\ell \wedge C)$ 匹配 — 三个色-色对地址 + 三个色-轻子对地址。这就是[强子六槽分辨论文](/zh-cn/blog/addressability-not-multiplier/) 中 $3+3$ 分裂背后的真正结构内容。

## 为何有序 $6!$ 迹仍不成立

定理 11 记录残余地址系统*不*提供均匀有序 $6!$ 迹的三个独立原因:

1. **Weyl 群对称性过小。** $W(A_3) \cong S_4$ 阶 $24$,不是 $S_6$ 的 $720 = 6!$。诱导作用于六个对标号是 $S_4$ 作用于 $\{1, \dots, 4\}$ 中的无序对,而非完整对称群作用于六个字母。
2. **Orlik-Solomon 回路关系。** 残余服从上述三角关系;由六个 $D_{ij}$ 生成的代数在六个交换槽上非自由。
3. **通道标签非投影子。** $\mathsf{p}_{ij}$ 是形式地址符号。它们不自动成为带单位计数迹的正交幂等投影子。

## 三路残余分解

$$\boxed{P_{\rm pair}^{\rm addr} = P_{\rm pair}^{\rm wall\text{-}res} + P_{\rm pair}^{\rm phys} + P_{\rm pair}^{\rm ord}}$$

- $P_{\rm pair}^{\rm wall\text{-}res}$ — 六个对通道标号由 $A^1_{\rm OS}(A_3) \otimes \mathcal{P}_{\rm addr}$ 中的根壁对数残余地址建模。**本文同调实现此片段。**
- $P_{\rm pair}^{\rm phys}$ — 物理缺陷实现(QFT 缺陷算子、投影子、对-Fock 基)。**此处未推导。**
- $P_{\rm pair}^{\rm ord}$ — $\mathrm{Ord}(\Omega_2(S_4^{\rm FPA}))$ 上的均匀有序饱和迹测度。**此处未推导。**

加入 $P_{\rm pair}^{\rm phys} + P_{\rm pair}^{\rm ord}$,论文 #35 的条件性迹结果接续:
$$\int_{\widetilde{H}_{\rm pair}} \pi_H^* \left(\frac{\omega_{\rm FS}^5}{5!}\right) = 6! \cdot \frac{\pi^5}{5!} = 6\pi^5.$$

## 尖锐残余

**旧残余(论文 #35):** *"$P_7$ 四槽载体的六个完整对通道为何是物理可寻址的边界缺陷?"*

**新残余(本文):** *"为何六个根壁对地址有物理实现及均匀有序迹?"*

新残余更尖锐,因为同调地址半部分已实现,孤立出物理算子缺口($P_{\rm pair}^{\rm phys}$)和有序迹缺口($P_{\rm pair}^{\rm ord}$)作为两个未解决的后继目标。

## 判定与成熟度记录

**部分正面 — 同调根壁残余地址构造;无 $P_{H'}$ 推导;活跃清单不变。**

活跃 TCG/$\tau$CG 假设清单不变:
$$P_0\text{--}P_4, \quad P_{5'}, \quad P_6, \quad P_7, \quad P_{H'}, \quad P_{SO(10)}.$$

与[双扭量对通道短文](/zh-cn/blog/pair-channel/)(论文 #25)、[兼容极化短文](/zh-cn/blog/walls-not-postulates/)(论文 #28)、[τCG 规范](/zh-cn/blog/specification-not-derivation/)(论文 #34)以及[强子六槽分辨](/zh-cn/blog/addressability-not-multiplier/)(论文 #35)同一成熟度记录:部分正面机制短文,命名后继理论必须构造的内容,而不声称构造已完成。

τCG 构造弧现有其第二个具体结果:论文 #35 命名了缺失的可寻址性原则;论文 #36 为地址半部分提供具体同调模型,将其与物理实现及有序迹分离。残余分解现为三路且粒度更细。

论文 *跡构型几何中的对通道根壁残余地址* 在 Zenodo 上(DOI [10.5281/zenodo.20264444](https://doi.org/10.5281/zenodo.20264444);CC-BY-4.0)。十页,11 个参考文献(9 个 DAEDALUS 带版本特定 DOI + Orlik-Terao 1992 + Fulton-MacPherson 1994)。

残余,而非重新标记。六个对通道标号并非任意 — 它们是完整 FPA 腔结构已供应的 $A_3$ 编辫排列六个反射超平面上的对数残余。物理实现仍是下一步。
