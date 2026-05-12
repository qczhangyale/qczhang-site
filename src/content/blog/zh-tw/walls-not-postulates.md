---
title: "端壁,而非假設:P7 如何收窄純旋量相容性殘餘"
description: "昨天的純旋量極化論文以條件性方式閉合了一個作用量級問題:標準模型代數作為 Spin(10) 內兩個穩定子的交集出現,但前提是存在一個相容的純旋量極化。該條件性留下一個殘餘 P_{pol}^{D_5},即推導相容極化。今天的新短文表明,相容性殘餘在很大程度上被現有 TCG 資料所收窄 — P7 端壁假設提供輕子線,而要求可見 SU(2)_L 保持則強制極化弱半部分的形式。結果是部分肯定:相容極化 W_+ = (ℓ ∧ C) ⊕ (2_L ⊗ r_+) 幾乎是典範的,由端壁輕子線 ℓ、色三平面 C 以及保持觀測的左手弱因子的要求決定,直到預期的 SU(2)_R 規範選擇和共軛取向。穩定子交集 SU(5)_{W_+} ∩ (SU(4)_C × SU(2)_L × SU(2)_R) ≃ S(U(3) × U(2)) 即標準模型群,超荷 Y = T_{3R} + (B-L)/2 為 Pati-Salam 歸一化,且顯式行列式約簡證明表明 SU(5)_{W_+} 條件強制兩個 U(1) 相位上 a^2 b^2 = 1,將其約簡為單個 U(1)_Y。構造僅使用兩個 TCG-本土 Spin(10) 表示(10 和 16);不引入標準重 SO(10) 希格斯扇區。狀態:部分肯定,殘餘銳化 — 從「推導任意相容極化」到「推導一個在端壁與 SU(2)_L 相容軌道中的純旋量凝聚」。活躍 TCG/FPA 假設清單不變;P_{pol}^{D_5} 仍是活躍框架清單之外的命名殘餘,而非新框架公理。剩下的缺口純屬作用量級:從 Spin(10) 不變作用量產生該凝聚,而不通過手工塞入取向。"
pubDate: 2026-05-12
---

[上一篇純旋量極化短文](/zh-tw/papers/30-pure-spinor-polarization/)以一個結構性重構閉合了一個代數問題。扭量構型幾何(TCG)的 Spin(10) 包絡給出活躍規範清單的正確代數完成,$A_3 \oplus A_1^L \oplus A_1^R \subset D_5$,但留下一個動力學殘餘:鑑於 TCG-本土場 $\mathbf{10}_H \oplus \mathbf{16}_H$ 上的 Spin(10) 不變純量勢無法挑選出一個左/右真空期望值方向(*不變勢軌道阻斷*,以定理級證明判定為阻斷),哪種機制實際選擇標準模型子群?

那篇短文的答案是:標準模型群可讀作兩個穩定子的交集
$$G_{\rm SM} = G_{\rm PS} \cap G_\lambda,$$
即由 Spin(10) 包絡提供的 Pati-Salam 子群 $G_{\rm PS} = SU(4)_C \times SU(2)_L \times SU(2)_R$ 與手徵旋量 $\lambda \in \mathbf{16}$ 的 $SU(5)$ 型穩定子 $G_\lambda$ 的交集。根系交集定理則給出
$$\mathfrak{su}(5)_\lambda \cap \bigl(\mathfrak{su}(4)_C \oplus \mathfrak{su}(2)_L \oplus \mathfrak{su}(2)_R\bigr) = \mathfrak{su}(3)_C \oplus \mathfrak{su}(2)_L \oplus \mathfrak{u}(1)_Y,$$
**前提是**純旋量極化 $W = W_3 \oplus W_2$ 與 Pati-Salam 矢量分裂 $V_{10} = V_6 \oplus V_4$ 相容。該條件性(「前提是」)即是殘餘:
$$P_{\rm pol}^{D_5}: \text{ 推導一個與 } D_3 \oplus D_2 \text{ 分裂相容的 TCG-本土純旋量極化。}$$

昨天的短文命名了 $P_{\rm pol}^{D_5}$ 但沒有推導它。一般的純旋量穩定子在 $\mathrm{Spin}(10)$ 中共軛於 $SU(5)$,但共軛並不等同於對齊。相容性部分作為開放數學目標留下:推導一個與該框架已選 $D_3 \oplus D_2$ 分裂對齊的極化。

今天的新短文表明,相容性殘餘在很大程度上被現有 TCG 資料所收窄 — 不引入任何新假設。

## P7 端壁已經提供我們所需

TCG 框架的 P7 假設([TCG 中的壁刪除與 Pati-Salam Levi 子代數](/zh-tw/papers/19-wall-deletion/))提供 $SU(4)_C$ 基本表示的 Pati-Salam 色/輕子分裂:
$$\mathbf{4} = C \oplus \ell, \qquad \dim C = 3, \quad \dim \ell = 1.$$
這裡輕子線 $\ell \subset \mathbf{4}$ 不是新引入的 — 它是 P7 端壁結構已經選出的同一條輕子作第四色線。

在標準 Spin(10) 矢量分支下
$$\mathbf{10} \to (\mathbf{6}, \mathbf{1}, \mathbf{1}) \oplus (\mathbf{1}, \mathbf{2}_L, \mathbf{2}_R), \qquad \mathbf{6} = \wedge^2 \mathbf{4},$$
Pati-Salam 矢量分裂 $V_{10} = V_6 \oplus V_4$ 對應 $\wedge^2 \mathbf{4} \oplus (\mathbf{2}_L \otimes \mathbf{2}_R)$。相容純旋量極化 $W = W_3 \oplus W_2$,$\dim_\mathbb{C} W_3 = 3$、$\dim_\mathbb{C} W_2 = 2$,需要在六維 $\wedge^2 \mathbf{4}$ 內的一個極大各向同性三平面 $W_3$。

**命題 1** 識別了自然候選。設
$$W_3^+ := \ell \wedge C \subset \wedge^2 \mathbf{4}.$$
對 $W_3^+$ 中兩個元素 $\ell \wedge c_1$ 和 $\ell \wedge c_2$,楔積配對滿足
$$(\ell \wedge c_1) \wedge (\ell \wedge c_2) = 0$$
因為 $\ell$ 出現兩次。所以 $W_3^+$ 是各向同性的。其維數為 $\dim \ell \cdot \dim C = 1 \cdot 3 = 3$,正好等於 $\wedge^2 \mathbf{4}$(六維且二次型非退化)的極大各向同性維數。因此 $W_3^+$ 是*極大*各向同性的。共軛選擇 $W_3^- = \wedge^2 C$ 也是極大各向同性的(因為當 $\dim C = 3$ 時,$\wedge^4 C = 0$)。

所以 P7 已經給出相容純旋量極化的色部分。3+1 色/輕子分裂*正是*構造極化色半部分所需的資料。

## 可見 $SU(2)_L$ 強制弱部分

弱矢量部分為 $V_4 = \mathbf{2}_L \otimes \mathbf{2}_R$。相容極化需要 $V_4$ 內的一個極大各向同性二平面 $W_2$。

要求極化保持可見 $SU(2)_L$ 因子已足以強制 $W_2$ 的形式。相關引理:作為 $SU(2)_L$ 模,
$$L \otimes R \cong L \oplus L,$$
其中 $R$ 作為重數空間。由 Schur 引理,任何 $SU(2)_L$ 不變的複二維子空間形式為 $L \otimes r$,$r \subset R$ 為一條線。各向同性由右 $SU(2)_R$ 辛形式 $\epsilon_R$ 交替而成:
$$q_4(u \otimes r_0, u' \otimes r_0) = \epsilon_L(u, u') \cdot \epsilon_R(r_0, r_0) = 0.$$
由於 $L \otimes R$ 的複維數為 4 而 $W_2$ 的複維數為 2,$W_2$ 在 $\mathbb{C}$ 上是極大各向同性的。

兩個重要注意:

第一,**$SU(2)_L$ 保持是相容性輸入,非此處推導**。它是與 $P_{5'}$($g_{2,W}^2 = 4/(3\pi)$)僅作用於左手弱因子的同一物理觀測。該引理強制任何 $SU(2)_L$ 保持極化的*形式*為 $L \otimes r$;並未強制極化首先要保持 $SU(2)_L$。其他極化存在(例如混合 $L_+ \otimes R_+$ 與 $L_- \otimes R_-$ 的 2 平面);它們會破缺 $SU(2)_L$。選擇 $SU(2)_L$ 保持族是物理輸入。

第二,線 $r \subset \mathbf{2}_R$ 不是與 $\ell$ 同等意義上的自由連續參數。$\mathbf{2}_R$ 中所有線在 $SU(2)_R$ 下相關;選擇其一即是標準自發破缺 $SU(2)_R \to U(1)_R$,$r_+$ 與 $r_-$ 對應 $T_{3R}$ 符號約定。

## 相容極化

結合這兩個結構性輸入:
$$W_+ = (\ell \wedge C) \oplus (\mathbf{2}_L \otimes r_+) \subset \wedge^2 \mathbf{4} \oplus (\mathbf{2}_L \otimes \mathbf{2}_R) = V_{10, \mathbb{C}}.$$
這是一個極大各向同性 5 平面(定理 3:正交塊 $V_6 \oplus V_4$ 中極大各向同性子空間的直和是總體的極大各向同性子空間)。它決定 $\mathrm{Spin}(10)$ 的一個射影純旋量。共軛 $W_- = (\wedge^2 C) \oplus (\mathbf{2}_L \otimes r_-)$ 給出相反取向。

穩定子交集即標準模型群。顯式說明:限制於保持 P7 和所選 $SU(2)_R$ Cartan 誘導分裂的 $G_{\rm PS}$ 元素。$SU(4)_C$ 元素 $g_4 = \mathrm{diag}(A, a)$,$A \in U(3)$、$a \in U(1)$、$\det(A) \cdot a = 1$,保持 $\mathbf{4} = C \oplus \ell$;保持 $r_+$ 的 $SU(2)_R$ 元素以相位 $b \in U(1)$ 作用其上。誘導作用在 $\ell \wedge C$ 上的行列式為 $a^3 \det(A) = a^2$;誘導作用在 $\mathbf{2}_L \otimes r_+$ 上的行列式為 $b^2$。$SU(5)_{W_+}$ 穩定子條件($W_+$ 上 $\mathbf{5}$-基本表示零跡)強制
$$a^2 b^2 = 1,$$
將兩個 $U(1)$ 相位 $(a, b)$ 約簡為單個 $U(1)$。該剩餘 $U(1)$ 由標準超荷生成:
$$Y = T_{3R} + \frac{B-L}{2},$$
其中 $Q_{\rm EM} = T_{3L} + Y$。電荷分解
$$W_+ \cong (\mathbf{3}, \mathbf{1})_{-1/3} \oplus (\mathbf{1}, \mathbf{2})_{+1/2}$$
即標準模型子群下 $SU(5)$ 基本 $\mathbf{5}$(零跡 $3 \cdot (-1/3) + 2 \cdot (+1/2) = 0$)。

一個澄清注:此 $\mathbf{5}$ 是極化 $W_+$ 的基本表示,*非*物質多重態。標準模型物質仍位於 $\mathrm{Spin}(10)$ 的手徵旋量 $\mathbf{16}$ 中,其在 $SU(5) \supset G_{\rm SM}$ 下的分解為通常的 $\overline{\mathbf{5}} \oplus \mathbf{10} \oplus \mathbf{1}$,打包一個完整世代。

## 什麼被收窄,什麼沒有

新短文未閉合 $P_{\rm pol}^{D_5}$。它大幅收窄之。

今天的短文之前,殘餘為:*"推導任意相容的純旋量極化"*。極化可以是任何與 Pati-Salam 分裂對齊的 $W$,對其色/輕子取向、弱取向或電荷內容沒有任何約束,超出樸素的極大各向同性條件。今天的短文之後,殘餘為:*"推導一個在端壁與 $SU(2)_L$ 相容軌道中的純旋量凝聚"*。相容軌道現在被指定 — 由端壁輕子線 $\ell$、色三平面 $C$ 和保持觀測的左手弱因子的要求決定 — 直到預期的 $SU(2)_R$ 規範選擇和共軛取向。

剩餘殘餘純屬**作用量級**。具體而言:產生一個 Spin(10) 不變作用量,其真空流形包含 $W_+$ 軌道作為純旋量凝聚,而不通過手工塞入取向。示意勢
$$V_{\rm pure}(\lambda) = \kappa \sum_{a=1}^{10} |\lambda^T C \Gamma^a \lambda|^2 + \lambda_0 \bigl(\lambda^\dagger \lambda - v_R^2\bigr)^2$$
已強制純旋量約束和歸一化,極小點在純旋量軌道上。它本身並不強制所選軌道代表是端壁與 $SU(2)_L$ 相容的那個。

五個明確缺口:G1 純旋量凝聚(作用量級);G2 相容性作為邊界條件或定理(而非強加輸入);G3 共軛取向 $W_+$ 對 $W_-$(與手徵 $\mathbf{16}$ 對 $\overline{\mathbf{16}}$ 選擇關聯);G4 破缺尺度與 $P_{5'}$ 值;G5 世代三化不變。

## 這對結構性弧意味著什麼

構造僅使用兩個 TCG-本土 Spin(10) 表示 — 旋量 $\mathbf{16}$ 和矢量 $\mathbf{10}$,經由 $\mathbf{6} = \wedge^2 \mathbf{4} \subset \mathbf{10}$。它不引入標準重 $SO(10)$ 破缺表示 $\mathbf{45}$、$\mathbf{54}$、$\mathbf{126}$、$\overline{\mathbf{126}}$、$\mathbf{210}$。與[昨天的短文](/zh-tw/papers/30-pure-spinor-polarization/)同樣的克制。

活躍 TCG/FPA 假設清單**不變**:
$$P_0, \ldots, P_4, \quad P_{5'}, \quad P_6, \quad P_7, \quad P_{H'}, \quad P_{SO(10)}.$$
$P_{\rm pol}^{D_5}$ 仍是此清單之外的殘餘標籤 — 非新框架公理 — 銳化但未閉合。

本論文之後,統一圖的規範弧讀作:

| 弧 | 閉合短文 | 命名殘餘(不在活躍清單) |
|---|---|---|
| 規範包絡 | [Spin(10) 下游破缺短文](/zh-tw/papers/29-spin10-downstream-breaking-family/) + [純旋量極化](/zh-tw/papers/30-pure-spinor-polarization/) + 本論文 | $P_{\rm pol}^{D_5}$(收窄至作用量級核心)+ $P_{\rm fam}$ |
| 電子 $P_4$ | [邊界超選擇阻斷短文](/zh-tw/papers/27-boundary-superselection-obstruction/) | $P_{\rm BFV}^{\rm sec}$ |
| 強子 $P_{H'}$ | [雙扭量配對通道短文](/zh-tw/papers/28-bitwistor-pair-channels/) | G1/G2 有動機;G3/G4/F6 開放 |

規範側弧現在有*三*篇作用量級短文(Paper #29 v2 + #30 + 本論文),每一篇都收窄殘餘但不閉合之。三條弧的共同開放層仍相同:作用量級 / 動力學完成 / 真空機制構造。在規範側,下一個真正進展將是一個 Spin(10) 不變作用量,其真空被強制進入相容軌道 — 這一目標現在比三天前顯著銳化。

本論文,*扭量構型幾何 Spin(10) 包絡中由 P7 端壁資料得到的相容純旋量極化*,在 Zenodo 上(DOI [10.5281/zenodo.20129212](https://doi.org/10.5281/zenodo.20129212);CC-BY-4.0)。它很短 — 九頁,十個參考文獻 — 包含一個命題、一個引理、一個定理、一個行列式約簡命題和一個超荷命題。三輪 Claude 獨立審閱加一輪 GPT-5.5 Pro 全新對話審閱(判定:經小幅精度修訂後可發表)將 §6 穩定子交集從口號級提升至定理級,顯式行列式計算表明 $SU(5)_{W_+}$ 條件 $a^2 b^2 = 1$。上傳前標題從早期的「...來自 TCG 扭量旗」被改寫 — Claude 和 GPT 獨立都指出原標題過度承諾,因為正文使用 P7 端壁資料,非直接使用扭量旗。

端壁,而非新假設。相容極化幾乎到位。剩下要做的是寫下作用量。
