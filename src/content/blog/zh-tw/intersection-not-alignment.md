---
title: "交集,而非對齊:純旋量極化如何重新框定 Spin(10) 破缺"
description: "Spin(10) 包絡閉合了扭量構型幾何中代數的 SU(2)_R 缺口,但留下一個動力學殘餘:哪個機制實際破缺 SU(2)_R 並產生觀測到的標準模型群?在 TCG-本土場 10_H + 16_H/16-bar_H 上的不變純量勢上週以阻斷閉合 — 一個乾淨的定理級證明表明 Spin(10)-不變勢選擇軌道,而非命名的左/右真空期望值方向,故任何對齊都需要額外的結構性輸入。一篇新短文研究一個不同的機制:不要求希格斯真空期望值挑出右手中微子方向,而要求真空為純旋量極化。16 中的非零純手徵旋量具有 SU(5) 型穩定子。標準模型代數則作為該 SU(5) 與 Spin(10) 包絡已提供的 Pati-Salam 子群的交集出現。交集定理在根系層面證明:Φ(A_4) ∩ Φ(D_3 ⊕ D_2) = A_2 ⊕ A_1,而剩餘的 Cartan 方向 Y ∝ diag(-1/3, -1/3, -1/3, 1/2, 1/2) 正是 Pati-Salam 歸一化下的超荷 Y = T_3R + (B-L)/2。純旋量約束僅使用本土 16 ⊗ 16 ⊃ 10 雙線性通道;不引入標準 SO(10) 希格斯扇區。狀態:部分肯定 — 該機制在結構上與真空期望值對齊不同,但殘餘被重新框定而非閉合。新殘餘 P_pol^D5 命名了剩餘的目標:推導一個與 D_3 ⊕ D_2 Pati-Salam 分裂相容的 TCG-本土純旋量極化。活躍 TCG/FPA 假設清單不變。重新框定指向一個具體的幾何下一步:從手徵扭量旗 CP^1 ⊂ CP^2 ⊂ CP^3 推導。"
pubDate: 2026-05-11
---

一週前落在本計劃中的 Spin(10) 包絡論文閉合了一個具體的代數問題:該框架的 $A_3 \oplus A_1$ 規範資料位於 $D_5 \supset D_3 \oplus D_2 \cong A_3 \oplus A_1^L \oplus A_1^R$ 之中,等價地 $\mathfrak{so}(10) \supset \mathfrak{su}(4)_C \oplus \mathfrak{su}(2)_L \oplus \mathfrak{su}(2)_R$。標準模型超荷公式 $Y = T_{3R} + (B-L)/2$ 所需的缺失內部 $\mathfrak{su}(2)_R$ 作為假設等價代數完成被提供。手徵旋量 $\mathbf{16}$ 恰好打包一個標準模型世代。

緊接其後的下游論文(Paper #29 v2)將剩餘開放內容分裂為兩個位於活躍 TCG/FPA 框架清單之外的殘餘標籤:$P_{SO(10)}^{\rm br}$(破缺真空 + 弱邊界不對稱性)和 $P_{\rm fam}$(世代三化)。破缺殘餘提出動力學問題:一旦 $SU(2)_R$ 在代數層面被提供,什麼機制在低能下實際破缺它並產生觀測到的規範群?

最自然的首次嘗試是在 TCG-本土場 $\mathbf{10}_H$ 和 $\mathbf{16}_H/\overline{\mathbf{16}}_H$ 上的 Spin(10)-不變希格斯勢。希望:真空方程在 $(\bar{\mathbf{4}}, \mathbf{1}, \mathbf{2}) \subset \mathbf{16}$ 中選擇一個類右手中微子的真空期望值方向,把 $SU(4)_C \times SU(2)_L \times SU(2)_R$ 破缺至 $SU(3)_C \times SU(2)_L \times U(1)_Y$,同時保留超荷組合。

該嘗試上週以一項乾淨的定理級阻斷閉合。

## 為什麼直接的希格斯勢路徑失敗

結構性陳述如下。設 $G = \mathrm{Spin}(10)$,設 $V$ 是 TCG-本土表示 $\mathbf{10}, \mathbf{16}, \overline{\mathbf{16}}$ 的任何直和上的 $G$-不變純量勢。則 $V$ 不能相對於嵌入子群 $A_3 \oplus A_1^L \oplus A_1^R \subset D_5$ 選擇一個特定的真空方向,除非該嵌入(或等價的對齊張量)作為額外結構被提供。

原因是不變性。如果 $x_0 \in R$ 是 $V$ 的極小點,那麼對每個 $g \in G$,$g x_0$ 也是。該勢只選擇一個軌道 $G \cdot x_0$ 及其穩定子共軛類,而不是相對於外部命名的 $D_2$ 因子的軌道命名代表元。「左可見」與「右隱藏」的區分在完整 Spin(10) 作用下不是不變的,除非額外張量把 $G$ 約化到保持該區分的子群。所以所需的真空方向需要額外的對齊資料 — 可稱為 $P_{SO(10)}^{\rm br,align}$,一個對齊假設,結果不弱於它所要推導的殘餘。

這是一個真實的無解。它不說 Spin(10) 破缺不可能。它說直接的希格斯勢路徑不能在不把破缺方向作為輸入偷運進來的情況下推導破缺方向。

今天發表到 Zenodo 的一篇新短文嘗試一個不同的機制。

## 穩定子的交集,而非真空期望值對齊

純旋量的想法比 $SO(10)$ 統一更古老。Cartan 在 1938 年引入純旋量;Chevalley 在 1954 年發展了它們的代數理論。$\mathrm{Spin}(10)$ 的手徵旋量 $\lambda \in \mathbf{16}$ 稱為*純*的,如果其零子空間

$$
N_\lambda := \{v \in V_{10,\mathbb{C}} : v \cdot \lambda = 0\}
$$

具有極大複數維度 5。等價地,在伽馬矩陣記號中,純旋量滿足

$$
\lambda^T C \Gamma^a \lambda = 0, \quad a = 1, \ldots, 10
$$

(帶有這十個方程在代數上相依的通常告誡)。純旋量決定一個極大各向同性五平面 $W \subset V_{10,\mathbb{C}}$ — Spin(10) 矢量表示的一個複極化。

結構上重要的事實是,純旋量*具有一個特定的穩定子*。在複群 $\mathrm{Spin}(10,\mathbb{C})$ 上,純旋量線的穩定子是帶 Levi 因子 $GL(5,\mathbb{C})$ 的拋物子群。在緊實形上,線穩定子是 $U(5)$ 型;一旦施加歸一化並固定旋量相位,穩定子變為 $SU(5)$ 型。我們寫為 $SU(5)_\lambda \subset \mathrm{Spin}(10)$。

現在使用 $D_5$ 內可用的兩個結構:由 TCG 包絡提供的 Pati-Salam 子群 $G_{\rm PS} = SU(4)_C \times SU(2)_L \times SU(2)_R$,以及由純旋量真空提供的 $SU(5)_\lambda$。所提出的機制:

$$
G_{\rm SM} = G_{\rm PS} \cap G_\lambda.
$$

標準模型群是這兩個穩定子的交集。不是由勢挑出的真空期望值,而是當兩個結構同時存在時所保留的公共子群。

## 交集定理

該論斷在根系層面可證明。把 $D_5$ 根實現在 $\mathbb{R}^5$ 中為 $\pm e_i \pm e_j$($1 \le i < j \le 5$)。選擇 Pati-Salam 分裂 $\mathbb{R}^5 = \mathbb{R}^3 \oplus \mathbb{R}^2$,使得:

- 支撐在 $\{e_1, e_2, e_3\}$ 上的根構成 $D_3 \cong A_3 = \mathfrak{su}(4)_C$
- 支撐在 $\{e_4, e_5\}$ 上的根構成 $D_2 \cong A_1 \oplus A_1 = \mathfrak{su}(2)_L \oplus \mathfrak{su}(2)_R$

與此分裂相容的純旋量極化分解為 $W = W_3 \oplus W_2$,其中 $\dim_\mathbb{C} W_3 = 3$ 且 $\dim_\mathbb{C} W_2 = 2$(求和給出所需極大各向同性維數 $5 = 3 + 2$)。其 $\mathfrak{su}(5)_\lambda$ 對應 $A_4$ 根子系

$$
\Phi(A_4) = \{e_i - e_j : 1 \le i \neq j \le 5\}.
$$

根系的交集然後是快速的計算:

$$
\Phi(A_4) \cap \Phi(D_3 \oplus D_2) = \{e_i - e_j : 1 \le i \neq j \le 3\} \cup \{\pm(e_4 - e_5)\}.
$$

第一個集合是 $A_2 = \mathfrak{su}(3)_C$;第二個是 $A_1 = \mathfrak{su}(2)_L$。交集是 $\mathfrak{su}(3)_C \oplus \mathfrak{su}(2)_L$。到此為止這只是標準模型的半單部分。

有趣的問題是 Cartan 交集。$\mathbb{R}^5$ 內 $A_4$ Cartan 是跡零 4 平面 $\{(x_1, \ldots, x_5) : \sum x_i = 0\}$。$A_2 \oplus A_1$ Cartan 在其中跨越 3 平面。一個 Cartan 方向剩餘。短計算表明它可以寫為

$$
Y \propto \mathrm{diag}\left(-\tfrac{1}{3}, -\tfrac{1}{3}, -\tfrac{1}{3}, \tfrac{1}{2}, \tfrac{1}{2}\right),
$$

至常規符號和歸一化。該生成元與前三項上的 $A_2$ 根以及倖存的 $A_1$ 根 $e_4 - e_5$ 對易。在 Pati-Salam Cartan 中,它正是與 $B-L$ 成比例的 $SU(4)_C$ 生成元和破缺的 $SU(2)_R$ Cartan 的組合:

$$
Y = T_{3R} + \frac{B-L}{2}.
$$

這是 Pati-Salam 歸一化下的標準模型超荷。所以這額外的阿貝爾 Cartan 方向不是任意的 $U(1)$;它*是*超荷。

因此,在上述相容性假設下:

$$
\mathfrak{su}(5)_\lambda \cap (\mathfrak{su}(4)_C \oplus \mathfrak{su}(2)_L \oplus \mathfrak{su}(2)_R) = \mathfrak{su}(3)_C \oplus \mathfrak{su}(2)_L \oplus \mathfrak{u}(1)_Y.
$$

在群層面這就是標準模型規範群,至標準 $\mathbb{Z}_6$ 有限商。標準模型群作為 $\mathrm{Spin}(10)$ 內同時存在的兩個結構的交集出現 — 而不是作為所選希格斯真空期望值的軌道。

## TCG-本土作用量級勢

純旋量約束可由作用量級勢強制。對手徵旋量場 $\lambda \in \mathbf{16}$:

$$
V_{\rm pure}(\lambda) = \kappa \sum_{a=1}^{10} \left|\lambda^T C \Gamma^a \lambda\right|^2 + \lambda_0 \left(\lambda^\dagger \lambda - v_R^2\right)^2, \quad \kappa, \lambda_0 > 0.
$$

其極小點服從 $\lambda^T C \Gamma^a \lambda = 0$(純性)和 $\lambda^\dagger \lambda = v_R^2$(歸一化)。雙線性 $\lambda^T C \Gamma^a \lambda$ 是 $\mathbf{16} \otimes \mathbf{16}$ 到 $\mathbf{10}$ 表示的投影,可用因為標準分支 $\mathbf{16}_s \otimes \mathbf{16}_s = \mathbf{10} \oplus \mathbf{120} \oplus \mathbf{126}$ 包含對稱矢量通道。

所以該構造*只*使用 Paper #29 v2 審計中已識別為 TCG-本土的兩個表示:旋量 $\mathbf{16}$ 和矢量 $\mathbf{10}$。不引入標準重 $SO(10)$ 破缺表示 $\mathbf{45}$、$\mathbf{54}$、$\mathbf{126}$、$\overline{\mathbf{126}}$、$\mathbf{210}$。$\mathbf{10}$ 還包含 $P_{H'}$ 配對通道對象 $\mathbf{6} = \wedge^2 \mathbf{4}$ 和電弱雙重態 $(\mathbf{1}, \mathbf{2}, \mathbf{2})$,所以同一矢量表示支持強子和弱希格斯扇區的相容性。

也指示了使用場 $H_a \in \mathbf{10}$ 的輔助矢量形式,帶有明確的符號約定告誡:上面的正定 $V_{\rm pure}$ 是首要作用量級候選;$H_a$ 形式只表明相關不變量本土地處於 $\mathbf{10}$ 通道中。

## 這條路徑改進了什麼 — 以及沒有改進什麼

與直接的希格斯真空期望值路徑的比較在結構上具啟發性。

| 方面 | 希格斯真空期望值對齊 | 純旋量極化 |
|---|---|---|
| 機制類型 | 在表示內挑出真空期望值 | 兩個穩定子的交集 |
| 選擇問題 | 「在 $(\bar{\mathbf{4}}, \mathbf{1}, \mathbf{2}) \subset \mathbf{16}$ 中選擇類 $\nu_R$ 分量」 | 「選擇相容的 $W_3 \oplus W_2$ 極化」 |
| 超荷起源 | 經由真空期望值方向手動插入 | 兩個穩定子的公共 Cartan 方向 |
| 概念內容 | 標準 SO(10) 建模 | 幾何交集(Cartan-Chevalley) |
| 作用量級 | 希格斯勢 + 對齊輸入 | 純旋量勢 + 相容性假設 |
| 狀態 | 阻斷(定理級軌道阻斷) | 部分肯定(機制重新框定) |

這不是推導。該短文對此明確。純旋量極化提供 $SU(5)_\lambda$ 穩定子,*而且*如果該極化與 Pati-Salam 矢量分裂 $V_{10} = V_6 \oplus V_4$ 相容,交集是標準模型。「如果」就是殘餘。

一般純旋量穩定子在 $\mathrm{Spin}(10)$ 內共軛於 $SU(5)$,但不需要與已選 $D_3 \oplus D_2$ 分裂對齊。推導對齊 — 等價地,推導相容極化 $W = W_3 \oplus W_2$ — 是新殘餘:

> **$P_{\rm pol}^{D_5}$**:TCG 選擇一個與 $D_3 \oplus D_2$ 分裂相容的純旋量極化。

這比之前的 $P_{SO(10)}^{\rm br,align}$ 殘餘(「在 $\mathbf{16}_H$ 中選擇右手中微子方向」)更銳利。它指向一個具體的幾何目標:從 TCG 一開始建立的手徵 Penrose 扭量旗

$$
\mathbb{CP}^1 \subset \mathbb{CP}^2 \subset \mathbb{CP}^3
$$

推導相容極化。該推導是否可行是下一個數學問題。該短文不回答。

## 仍有五個缺口

新殘餘更銳利,但不閉合。剩下五個缺口:

- **G1**:相容極化。一般純旋量不需要與 Pati-Salam 分裂對齊;TCG 必須推導相容性。
- **G2**:手徵扭量起源。最可能的源頭是旗 $\mathbb{CP}^1 \subset \mathbb{CP}^2 \subset \mathbb{CP}^3$,但目前沒有定理從中推導 $D_5$ 純旋量極化。
- **G3**:真空動力學。勢 $V_{\rm pure}$ 選擇純旋量軌道但不選擇唯一軌道代表元;完整構造必須解釋為何實際真空選擇相容的那個。
- **G4**:世代三化。純旋量路徑仍每個 $\mathbf{16}$ 打包一個世代;$P_{\rm fam}$ 不變。
- **G5**:弱邊界歸一化。$P_{5'}$($g_{2,W}^2 = 4/(3\pi)$)不變,仍然經驗上銳利但不是定理級。

活躍 TCG/FPA 假設清單不變:

$$
P_0, \ldots, P_4, \quad P_{5'}, \quad P_6, \quad P_7, \quad P_{H'}, \quad P_{SO(10)}.
$$

$P_{\rm pol}^{D_5}$ 是此清單之外的殘餘標籤,而非新框架公理。

## 這對統一圖意味著什麼

該框架的結構性弧現在在規範側產生了**兩個**作用量級結果:直接希格斯勢路徑的乾淨阻斷判定(定理級軌道阻斷),以及經由純旋量極化的部分肯定機制重新框定。兩者都尊重前幾篇論文確立的反逃避紀律 — 無重新標記,無隱藏假設,無尋它處擴展,活躍清單被保留。

本論文之後,統一圖的三條弧保持對稱成熟:

| 弧 | 閉合短文 | 命名殘餘(不在活躍清單) |
|---|---|---|
| 規範包絡 | Paper #29 v2 + 本論文 | $P_{\rm pol}^{D_5}$(由 $P_{SO(10)}^{\rm br}$ 銳化)+ $P_{\rm fam}$ |
| 電子 $P_4$ | Paper #27 | $P_{\rm BFV}^{\rm sec}$ |
| 強子 $P_{H'}$ | Paper #28 | G1/G2 有動機;G3/G4/F6 開放 |

每條弧有下一個真正進展的具體結構性目標:
- **規範**:從手徵扭量旗推導相容純旋量極化
- **電子**:帶分扇區轉移的帶角擴展對數 BV-BFV 理論
- **強子**:$S_6$ 槽測度推導、電子歸一化、味/同位旋特異性

這些是不同的數學問題,但它們共享共同的結構深度:每一個都要求該框架容納一個動力學/幾何/邊界原理,這是當前 TCG 原始資料本身不提供的。

論文 *Pure-Spinor Polarization and Standard-Model Breaking in the Spin(10) Envelope of Twistor Configuration Geometry*(《扭量構型幾何 Spin(10) 包絡中的純旋量極化與標準模型破缺》)發表於 Zenodo(DOI [10.5281/zenodo.20116476](https://doi.org/10.5281/zenodo.20116476);CC-BY-4.0)。它很短 — 九頁,十六條參考文獻(九條 DAEDALUS 論文 + Cartan 1938、Chevalley 1954、Berkovits 2000、Baez-Huerta 2010、Slansky 1981、Mohapatra 2003、Pati-Salam 1974)。一個命題(純旋量穩定子),一個交集定理及顯式 Cartan 推導,一個作用量級勢,五個缺口,一個殘餘。它不推導 Spin(10) 破缺;它把殘餘重新框定為一個更銳利的幾何目標。該目標是否可從手徵扭量旗觸及,是該框架規範側下一個數學問題。
