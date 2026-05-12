---
title: "凝聚,而非取向:為何本土 Spin(10) 作用量無法選擇壁相容純旋量"
description: "在規範側作用量級三篇先前論文之後 — 純旋量極化短文(交集機制)、相容極化短文(P7 壁 + 可見 SU(2)_L 將相容軌道收窄至 W_+)、以及作用於 16 + 10 的 TCG-本土 Spin(10) 不變作用量能否強制 W_+ 為真空的問題 — 今天的論文以乾淨的定理級否定閉合該問題。證明三個獨立的阻斷。第一(§3),來自 16 ⊗ 16 ⊃ 10 通道的自然 Yukawa 耦合 y H_a Q^a(λ) + h.c. 在純旋量軌跡上恆等消失 — 該通道**正是**純旋量勢所強制消失的量。第二(§4),具有 Spin(10) 不變 V_{wall}(H) 的單矢量 H ∈ 10 只選擇矢量軌道(通用緊實形穩定子 Spin(9)),而非 Pati-Salam 壁旗 4 = C ⊕ ℓ 或弱左二平面 2_L ⊗ r_+。第三(§5),埃爾米特變體 λ^† Γ^a λ H_a 不是有效的 Spin(10) 不變耦合,因為 16 ⊗ 16-bar = 1 ⊕ 45 ⊕ 210 不包含 10。組合推論:在 TCG-本土紀律下,沒有任何自然低階 16+10 Spin(10) 不變作用量模板把 W_+ 作為強制真空代表。純旋量凝聚可達成;相容純旋量凝聚不可達成,除非引入額外結構性輸入。殘餘 P_{pol}^{D_5} 乾淨地分裂為 P_{pol}^{D_5,compat}(相容性分量,由相容極化分析大幅收窄)和 X_{wall-pol}(壁 + SU(2)_L 數據的作用量級動力學源,現在被定理級阻斷界定)。活躍 TCG/FPA 假設清單不變。規範側弧現在與電子側弧形式對等:兩者都有定理級作用量級阻斷短文,在活躍框架清單之外命名精確殘餘。"
pubDate: 2026-05-12
---

[昨天的相容極化短文](/zh-tw/papers/31-compatible-pure-spinor-polarizations/)大幅收窄了規範側殘餘 $P_{\rm pol}^{D_5}$。P7 壁假設已提供輕子線 $\ell \subset \mathbf{4}$ 及色/輕子分裂 $\mathbf{4} = C \oplus \ell$。可見 $SU(2)_L$ 保持強制任何相容極化的弱半部分形式為 $\mathbf{2}_L \otimes r$。合起來這些將相容純旋量代表約束至形式
$$W_+ = (\ell \wedge C) \oplus (\mathbf{2}_L \otimes r_+) \subset V_{10,\mathbb{C}},$$
直到預期的 $SU(2)_R$ 規範選擇與共軛取向。剩餘的 G1 問題更尖銳:作用於 TCG-本土場 $\lambda \in \mathbf{16}$ 和 $H_a \in \mathbf{10}$ 的 Spin(10) 不變作用量能否強制這個特定的相容代表作為真空,而不通過手工塞入壁取向?

今天的短文給出定理級否定答案。該框架可以產生純旋量凝聚。但它無法選擇壁相容的那個。

## 自然作用量模板及其失敗之處

自然模板為
$$V(\lambda, H) = V_{\rm pure}(\lambda) + V_{\rm wall}(H) + V_{\rm couple}(\lambda, H),$$
其中[純旋量極化短文](/zh-tw/papers/30-pure-spinor-polarization/)中的示意純旋量勢
$$V_{\rm pure}(\lambda) = \kappa \sum_a |Q^a(\lambda)|^2 + \lambda_0 (\lambda^\dagger \lambda - v_R^2)^2, \quad Q^a(\lambda) = \lambda^T C \Gamma^a \lambda,$$
強制純旋量軌跡 $Q^a = 0$ 和歸一化 $\lambda^\dagger \lambda = v_R^2$。到此為止還好 — 純旋量凝聚是可達成的。

但 $V_{\rm pure}$ 選擇一個軌道,而非該軌道內的代表。給定手徵的非零射影純旋量構成單個具有 $U(5)$ 型穩定子的齊次簇。選擇 $\lambda \in \mathbf{16}$ 而非 $\overline{\mathbf{16}}$ 區分 $S_+$ 和 $S_-$ 手徵純旋量族,但它不標記 P7 壁線 $\ell$、色平面 $C$ 或可見 $SU(2)_L$ 因子。需要更多的東西來從其餘中選出 $W_+$。

短文證明在 TCG-本土 $\mathbf{16}+\mathbf{10}$ 紀律內*沒有*這種更多的東西可用。

## 三個獨立的阻斷

**定理 1 — Yukawa 消失**。來自 $\mathbf{16} \otimes \mathbf{16} \supset \mathbf{10}$ 雙線性通道的自然 Spin(10) 不變矢量通道耦合
$$V_{\rm couple}^{\rm hol}(\lambda, H) = y H_a Q^a(\lambda) + \bar{y} H_a^\dagger \overline{Q^a(\lambda)}$$
在純旋量軌跡上恆等消失,因為 $Q^a(\lambda) = 0$ *按定義即是純旋量約束*。該耦合是純旋量勢剛強制消失的量。它無法區分 $W_+$ 與任何其他純旋量代表。

拉格朗日乘子的銳化使這更尖銳:如果 $H_a$ 被當作強制 $Q^a = 0$ 的乘子,它在約束被滿足時從殼上作用量中消失。消失是結構性的,非調諧人為。

**定理 3 — 單矢量無法編碼壁旗**。具有 Spin(10) 不變勢 $V_{\rm wall}(H)$ 的單矢量場 $H_a \in \mathbf{10}$ 只能選擇 Spin(10) 矢量軌道。在緊實形中,通用非零矢量穩定子為 $\mathrm{Spin}(9) \subset \mathrm{Spin}(10)$;複化情形中,零或各向同性矢量穩定子為拋物子群。這兩者都不包含相容極化所需的數據:
$$\mathbf{4} = C \oplus \ell, \qquad \ell \wedge C \subset \wedge^2 \mathbf{4}, \qquad \mathbf{2}_L \otimes r_+ \subset \mathbf{2}_L \otimes \mathbf{2}_R.$$
這是*旗*數據 — Pati-Salam 分解加弱取向選擇 — 而非矢量軌道數據。要動力學地編碼該旗,需要變換為投影子、伴隨、或更高張量的序參量 — 正是 TCG-本土紀律明確禁止的更高 SO(10) 破缺表示($\mathbf{45}/\mathbf{54}/\mathbf{126}/\overline{\mathbf{126}}/\mathbf{210}$)。

混合不變量漏洞封閉備註涵蓋自然候選 $|H_a \Gamma^a \lambda|^2$。此類項可以把 $H$ 與純旋量湮滅子 $W_\lambda$ 相關聯 — 例如,強制 $H$ 位於 $W_\lambda$ 內或與其正交 — 但仍無法產生缺失的壁旗。它們把矢量與純旋量相關聯;不產生 Pati-Salam-旗加弱-取向數據。

**定理 6 — $\mathbf{16} \otimes \overline{\mathbf{16}}$ 中無 $\mathbf{10}$**。最後的希望是埃爾米特變體
$$V_{\rm couple}^{\rm Herm} = y_2 \lambda^\dagger \Gamma^a \lambda H_a,$$
它不必在純旋量軌跡上消失。但此表達式不是單一手徵 $\mathbf{16}$ 的 Spin(10) 不變純量耦合。埃爾米特雙線性表示為
$$\mathbf{16} \otimes \overline{\mathbf{16}} = \mathrm{End}(\mathbf{16}) = \mathbf{1} \oplus \mathbf{45} \oplus \mathbf{210}$$
(Slansky 1981 標準分解;維數檢驗:$16^2 = 256 = 1 + 45 + 210$)。此分解中沒有 $\mathbf{10}$。所以 $\lambda^\dagger \Gamma^a \lambda H_a$ 不是有效的 Spin(10) 不變矢量通道純量耦合。唯一可用的單手徵旋量矢量通道耦合是全純 $Q^a(\lambda)$,定理 1 已經把它殺死。

## 推論及其意義

合併三個阻斷:在 TCG-本土紀律下(僅 $\mathbf{16}+\mathbf{10}$ 場,不引入 $\mathbf{45}/\mathbf{54}/\mathbf{126}/\overline{\mathbf{126}}/\mathbf{210}$),沒有任何由本土矢量通道和純旋量約束構造的自然低階 $\mathbf{16}+\mathbf{10}$ Spin(10) 不變作用量模板 — 包含多項式不變量 $|Q|^2$、$H \cdot Q$、$H^2$、$\lambda^\dagger \lambda$ 和 $\mathbf{1} \oplus \mathbf{45} \oplus \mathbf{210}$ 中的埃爾米特雙線性 — 把相容代表 $W_+$ 作為強制真空。

**純旋量凝聚:可達成**。
**相容純旋量凝聚:不可達成**,除非引入編碼 P7 壁和 $SU(2)_L$ 保持極化數據的額外結構性輸入。

## 殘餘重新表述

殘餘 $P_{\rm pol}^{D_5}$ 乾淨地分裂:
> $P_{\rm pol}^{D_5} \leadsto P_{\rm pol}^{D_5,\rm compat} + X_{\rm wall-pol}.$

這裡 $P_{\rm pol}^{D_5,\rm compat}$ 是由[相容極化分析](/zh-tw/papers/31-compatible-pure-spinor-polarizations/)大幅收窄的相容性分量:一旦提供 P7 和可見 $SU(2)_L$,相容極化即被約束至 $W_+$ 形式。而 $X_{\rm wall-pol}$ 是新命名的作用量級殘餘:
> $X_{\rm wall-pol}$:P7 壁加 $SU(2)_L$ 保持極化數據的 TCG-本土動力學源。

今天的定理表明 $X_{\rm wall-pol}$ 不由耦合至單一手徵 $\mathbf{16}$ 純旋量凝聚的單一 $\mathbf{10}$-矢量提供。

兩者皆不在活躍框架清單中:
$$P_0, \ldots, P_4, \quad P_{5'}, \quad P_6, \quad P_7, \quad P_{H'}, \quad P_{SO(10)} \quad \text{(不變)}.$$

這很重要。結果不是隱藏的正向推導。它是阻斷短文:命名缺失的作用量級資料,並將其保持在活躍清單之外。2026-05-01 的框架閉合判定被遵守 — 目的是記錄作用量級層級的尖銳負面結果,而非通過將殘餘假設重新命名為推導內容來繼續無限搜索。

## 五個失敗模式

阻斷是刻意狹窄的。記錄了五條邏輯上可能的路徑:

- **F1. 多場擴展**。第二矢量或額外張量序參量原則上可以編碼超過單一矢量軌道。但此種擴展增加新的結構性假設;除非這些場獨立於 TCG 清單推導,阻斷僅被位移。
- **F2. 扭量旗到極化**。壁數據可能不來自體 Spin(10) 希格斯勢,而來自手徵 Penrose 扭量旗 $\mathbb{CP}^1 \subset \mathbb{CP}^2 \subset \mathbb{CP}^3$。這是[相容極化短文](/zh-tw/papers/31-compatible-pure-spinor-polarizations/)中命名的 G2 未來路徑。它在本論文範圍之外,在此調用會把內部規範扇區與勞侖茲/扭量幾何混淆 — 正是反逃避紀律在此語境下禁止的。
- **F3. 邊界或輔助結構**。壁相容極化可以編碼在邊界作用量或輔助 BV–BFV 扇區中,而非體希格斯勢。這在結構上平行於[邊界超選擇阻斷短文](/zh-tw/papers/27-boundary-superselection-obstruction/)中的電子側 $P_{\rm BFV}^{\rm sec}$ 殘餘。
- **F4. 相容性作為顯式輸入**。誠實的備選方案是把相容性結果保留為強加但銳利收窄的殘餘($P_{\rm pol}^{D_5,\rm compat}$),並把 $X_{\rm wall-pol}$ 作為仍缺失的命名作用量級源。
- **F5. 尋它處擴展**。增加更高 SO(10) 破缺表示會解決不同的問題(常規 GUT 模型構造),並會瓦解本土 TCG 推導與標準統一機器之間的區別。明確禁止。

## 結構性弧的當前狀態

本短文完成跨三條弧中兩條的結構性平行:

| 弧 | 結構動機短文 | 作用量級阻斷短文 |
|---|---|---|
| 規範包絡 | [Spin(10) 下游破缺](/zh-tw/papers/29-spin10-downstream-breaking-family/) + [純旋量極化](/zh-tw/papers/30-pure-spinor-polarization/) + [相容極化](/zh-tw/papers/31-compatible-pure-spinor-polarizations/) | **本論文**($X_{\rm wall-pol}$ 殘餘) |
| 電子 $P_4$ | 體-邊界局域化 + 連通殘數 | [邊界超選擇阻斷](/zh-tw/papers/27-boundary-superselection-obstruction/)($P_{\rm BFV}^{\rm sec}$ 殘餘) |
| 強子 $P_{H'}$ | [雙扭量配對通道](/zh-tw/papers/28-bitwistor-pair-channels/) | (尚無) |

規範側弧已匹配電子側弧的雙層結構:經結構動機閉合收窄,然後在作用量層級以精確命名殘餘在活躍清單之外作出定理級阻斷。該框架的結構圖現在是迄今最精確的版本,而活躍 TCG/FPA 假設清單與規範弧工作開始之前完全一致。

共同開放層仍相同:作用量級 / 動力學完成 / 真空機制構造。在規範側,目前活躍的未來路徑是 G2 — 從手徵 Penrose 扭量旗推導相容極化,在今天的定理已經界定的體 Spin(10) 作用量*之外*。

本論文,*扭量構型幾何 Spin(10) 包絡中的純旋量凝聚阻斷*,在 Zenodo 上(DOI [10.5281/zenodo.20141601](https://doi.org/10.5281/zenodo.20141601);CC-BY-4.0)。十頁,三個定理,一個推論,五個失敗模式,十二個參考文獻。

凝聚,而非取向。作用量選擇軌道;取向需要作用量不提供的結構。
