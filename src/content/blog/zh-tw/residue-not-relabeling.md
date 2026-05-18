---
title: "殘餘,而非重新標記:τCG 中的對通道根壁殘餘位址"
description: "昨日論文(論文 #35,強子六槽分辨)將活躍清單之外的殘餘命名為 P_pair^addr。論文 #35 的條件性肯定為:τCG + P_pair^addr ⇒ Tr_num(H_∧²) = 6π^5。今天的論文嘗試在同調位址層面對 P_pair^addr 進行更強的邊界缺陷路徑構造。兩份先前草稿已退役:v1 集索引雙射 Φ_+(A_3) ≅ Ω_2(S_4^FPA)(本質上是重新標記 — 兩側均按 {1,2,3,4} 中的對 i<j 索引);v2 '缺陷算子' 框架(相對於實際同調內容過度承諾)。v3 實現為真正的結構性進展。關鍵結構轉變:從一個基本有序腔的邊界(電子 P_4 扇區,論文 #27)— 原始面 {12, 23, 34} — 轉移到完整帶標號腔排列,其六個對角線 H_ij = {x_i = x_j} 恰好是 A_3 編辮排列的反射超平面。單腔邊界 ⇒ P_4(電子);完整帶標號腔壁 ⇒ K_4(強子)。相應對數殘餘生成元 a_ij 居於一階 Orlik-Solomon 代數 A^1_OS(A_3) 中,帶標準 Arnold-Orlik-Solomon 迴路關係 a_ij ∧ a_ik − a_ij ∧ a_jk + a_ik ∧ a_jk = 0(i<j<k),由 ∂ 應用於相依三元組 {H_ij, H_ik, H_jk} 導出。對通道根壁殘餘位址:D_ij := a_ij ⊗ p_ij ∈ A^1_OS(A_3) ⊗ P_addr,其中 P_addr := Span_C{p_ij} 為形式對位址向量空間;{p_ij} 與 ∧²4 的 {e_i ∧ e_j} 在選定框架下雙射對應 — 基數為 6 的兩個索引集之間的標號對應,*不是* C-線性同一;P_addr 上無誘導 SU(4)-作用;p_ij 為形式符號,不是向量或投影子。P_7 壁相容性:{D_12, D_13, D_23} ⊔ {D_14, D_24, D_34} 與 ∧²4 = ∧²C ⊕ (ℓ∧C) 匹配 — 給予 3+3 分裂以結構內容。有序 6! 跡仍不成立(定理 11):W(A_3) ≅ S_4 非 S_6;Orlik-Solomon 迴路關係;通道標籤非投影子。三路殘餘分解:P_pair^addr = P_pair^wall-res + P_pair^phys + P_pair^ord,僅 P_pair^wall-res 由本文同調實現。尖銳殘餘:'為何六個根壁對位址有物理實現及均勻有序跡?' 判定:部分正面 — 同調根壁殘餘位址構造;無 P_H' 推導;活躍清單不變。與論文 #25、#28、#34、#35 同一成熟度記錄。"
pubDate: 2026-05-18
---

[昨日的強子六槽分辨論文](/zh-tw/blog/addressability-not-multiplier/) 將 $P_{H'}$ Lenz 讀數中的殘餘從 *"為何 $6!$ 乘 $\pi^5/5!$?"* 尖銳化為 *"$P_7$ 四槽載體的六個完整對通道為何是物理可定址的邊界缺陷槽?"* 它將這一殘餘命名為 $P_{\rm pair}^{\rm addr}$ 並證明條件性肯定
$$\tau\text{CG} + P_{\rm pair}^{\rm addr} \Rightarrow \mathrm{Tr}_{\rm num}(H_{\wedge^2}) = 6\pi^5.$$
$P_{\rm pair}^{\rm addr}$ 被明確置於活躍 TCG/τCG 清單之外,作為帶標號後繼構造目標。

**今天的論文嘗試在同調位址層面對 $P_{\rm pair}^{\rm addr}$ 進行更強的邊界缺陷路徑構造。**

## 前兩次嘗試為何不夠

在 v3 實現之前,兩份先前草稿被退役。

**v1(集索引雙射)。** 觀察到
$$\Phi_+(A_3) \cong \Omega_2(S_4^{\rm FPA})$$
即 $A_3$ 的六個正根與 $\{1, 2, 3, 4\}$ 中的六個無序對 $\{i,j\}$ 雙射對應。但兩側*按定義*都由對 $i<j$ 索引 — 那就是同一個組合集合。"構造" 僅是重新標記:它識別了六個對標號的兩份副本而未產生任何邊界缺陷算子。也混淆了權 $\varepsilon_i + \varepsilon_j$($\wedge^2 \mathbf{4}$ 的權)與根 $\varepsilon_i - \varepsilon_j$($A_3$ 伴隨的根),它們居於不同表示。

**v2("缺陷算子")。** 做出了真正的結構性進展 — 完整 FPA 腔排列與 Orlik-Solomon 殘餘代數 — 但將結果框架化為 "具體的對通道缺陷算子",這是過度承諾。$\mathsf{p}_{ij}$ 一側公開是名義的(形式位址符號,而非投影子),而 QFT/TQFT 中的 "缺陷算子" 是指沿餘維 $k$ 子流形插入並源出非平凡物理的算子。實際算子內容完全居於同調殘餘一側。

## v3 構造

**關鍵結構轉變。** 強子六對集是 $K_4$ 的邊集,而非電子邊界扇區中所用的 $P_4$ 相鄰邊。所有六個對來自何處?

並非來自一個基本有序腔的邊界。*那*僅給出相鄰碰撞:
$$0 < x_1 < x_2 < x_3 < x_4 < 1 \Rightarrow \text{原始面 } \{12, 23, 34\} = P_4.$$

六個對來自**完整帶標號腔排列** — 連接所有 $4!$ 個有序腔的全局壁配置。碰撞壁為
$$H_{ij} = \{x_i = x_j\}, \quad 1 \le i < j \le 4,$$
這六個壁恰好是編辮排列的 $A_3$ 型反射超平面。它們的無序對索引形成 $K_4$ 的邊集。

$$\text{單腔邊界} \Rightarrow P_4 \quad (\text{電子扇區})$$
$$\text{完整帶標號腔壁} \Rightarrow K_4 \quad (\text{強子扇區})$$

**這保留電子扇區框架。** 完整腔構造不會回溯地改變[電子 $P_4$ 分析](/zh-tw/blog/walls-not-postulates/) — 兩個簡化都是同一個 FPA 頂層的下游;它們是同一四標號載體的不同邊界簡化。

**根壁殘餘代數。** 定義 3 給出 Orlik-Solomon 外部關聯代數 $A^*_{\rm OS}(A_3)$,生成元 $\{a_{ij} : 1 \le i < j \le 4\}$ 按字典序,平方零關係 $a_{ij} \wedge a_{ij} = 0$,以及對每個三元組 $i<j<k$ 的**標準 Arnold-Orlik-Solomon 迴路關係**:
$$a_{ij} \wedge a_{ik} - a_{ij} \wedge a_{jk} + a_{ik} \wedge a_{jk} = 0.$$
這由邊界映射 $\partial$ 應用於相依三元組 $\{H_{ij}, H_{ik}, H_{jk}\}$ 導出 — Orlik-Terao(1992)中的標準表述,以及編辮排列補集上同調的標準形式。

**對通道根壁殘餘位址。** 定義 6 引入
$$\mathcal{P}_{\rm addr} := \mathrm{Span}_{\mathbb{C}}\{\mathsf{p}_{ij} : 1 \le i < j \le 4\}$$
為形式對位址向量空間。基 $\{\mathsf{p}_{ij}\}$ 與 $\wedge^2 \mathbf{4}$ 的反對稱基 $\{e_i \wedge e_j\}$ 在**選定框架下雙射對應**:

- 這是基數為 6 的兩個索引集之間的標號對應
- 它**不是** $\mathcal{P}_{\rm addr}$ 與 $\wedge^2 \mathbf{4}$ 之間的 $\mathbb{C}$-線性同一
- $\mathcal{P}_{\rm addr}$ 上無誘導 $SU(4)$-作用
- $\mathsf{p}_{ij}$ 為形式符號,不是 $\wedge^2 \mathbf{4}$ 的向量或對線 $\mathbb{C}(e_i \wedge e_j)$ 的投影子

**對通道根壁殘餘位址生成元**為
$$D_{ij} := a_{ij} \otimes \mathsf{p}_{ij} \in A^1_{\rm OS}(A_3) \otimes \mathcal{P}_{\rm addr}.$$

這些是**同調**殘餘位址生成元 — 明確*不是* QFT 缺陷算子、Hilbert 空間投影子或對-Fock 基。將它們轉化為物理缺陷算子或投影子需要本文未提供的額外邊界動力學。

## $P_7$ 壁相容性

在[$P_7$ 壁分裂](/zh-tw/blog/wall-deletion-pati-salam/) $\mathbf{4} = C \oplus \ell$ 配以 $\ell = \langle e_4 \rangle$ 下,六個對位址分裂為
$$\{D_{12}, D_{13}, D_{23}\} \sqcup \{D_{14}, D_{24}, D_{34}\}$$
與 $\wedge^2 \mathbf{4} = \wedge^2 C \oplus (\ell \wedge C)$ 匹配 — 三個色-色對位址 + 三個色-輕子對位址。這就是[強子六槽分辨論文](/zh-tw/blog/addressability-not-multiplier/) 中 $3+3$ 分裂背後的真正結構內容。

## 為何有序 $6!$ 跡仍不成立

定理 11 記錄殘餘位址系統*不*提供均勻有序 $6!$ 跡的三個獨立原因:

1. **Weyl 群對稱性過小。** $W(A_3) \cong S_4$ 階 $24$,不是 $S_6$ 的 $720 = 6!$。誘導作用於六個對標號是 $S_4$ 作用於 $\{1, \dots, 4\}$ 中的無序對,而非完整對稱群作用於六個字母。
2. **Orlik-Solomon 迴路關係。** 殘餘服從上述三角關係;由六個 $D_{ij}$ 生成的代數在六個交換槽上非自由。
3. **通道標籤非投影子。** $\mathsf{p}_{ij}$ 是形式位址符號。它們不自動成為帶單位計數跡的正交冪等投影子。

## 三路殘餘分解

$$\boxed{P_{\rm pair}^{\rm addr} = P_{\rm pair}^{\rm wall\text{-}res} + P_{\rm pair}^{\rm phys} + P_{\rm pair}^{\rm ord}}$$

- $P_{\rm pair}^{\rm wall\text{-}res}$ — 六個對通道標號由 $A^1_{\rm OS}(A_3) \otimes \mathcal{P}_{\rm addr}$ 中的根壁對數殘餘位址建模。**本文同調實現此片段。**
- $P_{\rm pair}^{\rm phys}$ — 物理缺陷實現(QFT 缺陷算子、投影子、對-Fock 基)。**此處未推導。**
- $P_{\rm pair}^{\rm ord}$ — $\mathrm{Ord}(\Omega_2(S_4^{\rm FPA}))$ 上的均勻有序飽和跡測度。**此處未推導。**

加入 $P_{\rm pair}^{\rm phys} + P_{\rm pair}^{\rm ord}$,論文 #35 的條件性跡結果接續:
$$\int_{\widetilde{H}_{\rm pair}} \pi_H^* \left(\frac{\omega_{\rm FS}^5}{5!}\right) = 6! \cdot \frac{\pi^5}{5!} = 6\pi^5.$$

## 尖銳殘餘

**舊殘餘(論文 #35):** *"$P_7$ 四槽載體的六個完整對通道為何是物理可定址的邊界缺陷?"*

**新殘餘(本文):** *"為何六個根壁對位址有物理實現及均勻有序跡?"*

新殘餘更尖銳,因為同調位址半部分已實現,孤立出物理算子缺口($P_{\rm pair}^{\rm phys}$)和有序跡缺口($P_{\rm pair}^{\rm ord}$)作為兩個未解決的後繼目標。

## 判定與成熟度記錄

**部分正面 — 同調根壁殘餘位址構造;無 $P_{H'}$ 推導;活躍清單不變。**

活躍 TCG/$\tau$CG 假設清單不變:
$$P_0\text{--}P_4, \quad P_{5'}, \quad P_6, \quad P_7, \quad P_{H'}, \quad P_{SO(10)}.$$

與[雙扭量對通道短文](/zh-tw/blog/pair-channel/)(論文 #25)、[相容極化短文](/zh-tw/blog/walls-not-postulates/)(論文 #28)、[τCG 規範](/zh-tw/blog/specification-not-derivation/)(論文 #34)以及[強子六槽分辨](/zh-tw/blog/addressability-not-multiplier/)(論文 #35)同一成熟度記錄:部分正面機制短文,命名後繼理論必須構造的內容,而不聲稱構造已完成。

τCG 構造弧現有其第二個具體結果:論文 #35 命名了缺失的可定址性原則;論文 #36 為位址半部分提供具體同調模型,將其與物理實現及有序跡分離。殘餘分解現為三路且粒度更細。

論文 *跡構型幾何中的對通道根壁殘餘位址* 在 Zenodo 上(DOI [10.5281/zenodo.20264444](https://doi.org/10.5281/zenodo.20264444);CC-BY-4.0)。十頁,11 個參考文獻(9 個 DAEDALUS 帶版本特定 DOI + Orlik-Terao 1992 + Fulton-MacPherson 1994)。

殘餘,而非重新標記。六個對通道標號並非任意 — 它們是完整 FPA 腔結構已供應的 $A_3$ 編辮排列六個反射超平面上的對數殘餘。物理實現仍是下一步。
