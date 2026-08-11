# components/common/ 計画

DESIGN.md の `components` トークンごとに、shadcn/ui のプリミティブを Don't Buy 風（ノート・付箋モチーフ）に書き換えた汎用コンポーネントを 実装する。

## ページ共通レイアウト

- [ ] **NotebookPage**（新規・shadcn非依存）: 全画面共通の土台。`neutral-paper` 罫線背景、左端 `secondary` 色マージンライン、ダークモード切り替えをまとめて提供する。DESIGN.md の Layout / Elevation 節を実装で集約する場所。

## DESIGN.md トークン対応

- [x] **input** → [Input](https://ui.shadcn.com/docs/components/base/input) + [Label](https://ui.shadcn.com/docs/components/base/label): `NoteInput`（背景なし・`primary` 色下線のみの「記入欄」。メール/パスワード/商品名/価格などで共通利用）
- [x] **button-primary / button-primary-hover / button-secondary** → [Button](https://ui.shadcn.com/docs/components/base/button): `sticky-note-button.tsx`（既存）に `variant="buy" | "save"` を追加し、両方のアクション種別を1コンポーネントでカバーする（付箋の傾き + ドロップシャドウは両方に必要なため）
- [x] **tab-toggle-active / tab-toggle-inactive** → [Tabs](https://ui.shadcn.com/docs/components/base/tabs): `ModeTabs`（Don't Buy / BUY 切替。アクティブ側のみ pill 塗りつぶし）
- [ ] **chip / chip-selected** → [Toggle Group](https://ui.shadcn.com/docs/components/base/toggle-group): `components/ui/toggle.tsx` に `chip` variant を追加（食費・娯楽・衣類などジャンル選択。選択中は `accent-buy` 塗り）
- [ ] **progress-bar-track / progress-bar-fill / progress-bar-fill-complete** → [Progress](https://ui.shadcn.com/docs/components/base/progress): `components/ui/progress.tsx` を Don't Buy トークンで書き換え（未達成は `accent-buy`、100%達成で `accent-save-deep` に自動切替）
- [x] **list-item** → 自前実装（[Separator](https://ui.shadcn.com/docs/components/base/separator) で区切るのみ、カード化しない）: `SavingHistoryList` / `SavingHistoryItem`（チェック・日付・品目・金額を横並び表示。Data Table は不使用 — カード的な重厚感が DESIGN.md の「強いシャドウ禁止」方針と合わないため）
- [x] **badge-purchasable** → [Badge](https://ui.shadcn.com/docs/components/base/badge): `components/ui/badge.tsx` に `purchasable` variant を追加（「購入可能」バッジ、「今週の記帳で目標まで+3%」のようなピル表示の両方をカバー）

## 画面機能コンポーネント（トークン外）

- [x] **下部入力ドック**（欲しいもの登録・記帳フォーム）→ [Sheet](https://ui.shadcn.com/docs/components/base/sheet)（`side="bottom"`）: `BottomDockSheet`（画面下からせり上がる形。`neutral-paper-line` 系背景 + `primary` 境界線で紙面と区別）
- [x] **節約グラフ**（曜日別棒グラフ、当日のバーのみ `accent-save-deep` ハイライト）→ [Chart](https://ui.shadcn.com/docs/components/base/chart)（recharts ラッパー）: `WeeklySavingChart`
- [x] **通知**（記帳・登録完了など）→ [Toast](https://ui.shadcn.com/docs/components/base/toast)をそのまま活用

## 決定事項メモ

- [ ] コンポーネント粒度: 画面単位ではなく DESIGN.md トークン単位
- [ ] 節約帳履歴は Data Table ではなく list-item + Separator の素朴なリストで実装する
- [ ] 下部入力ドックは Dialog ではなく Sheet(bottom) で実装する
- [ ] badge-purchasable 用に Badge を新規追加する
- [ ] 週間グラフは shadcn Chart（recharts）を使う
- [ ] 全画面共通のノート風背景・マージンラインは NotebookPage として components/common/ の計画に含める
