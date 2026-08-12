---
version: alpha
name: Don't Buy Design System
description: 手書きの家計簿ノート・勉強ノートをモチーフにした、あたたかく丁寧な習慣化アプリのデザインシステム
colors:
  primary: "#1E3A5F"
  primary-dark: "#B8C9DE"
  secondary: "#E2735C"
  accent-buy: "#F3C15D"
  accent-buy-soft: "#F0B27A"
  accent-buy-dark: "#D9A64E"
  accent-buy-soft-dark: "#C98F5E"
  accent-save: "#A9CBB7"
  accent-save-deep: "#2E5940"
  accent-save-dark: "#6FA98A"
  accent-save-deep-dark: "#4E7C63"
  neutral-paper: "#F7F1DE"
  neutral-paper-dark: "#2B2620"
  neutral-paper-line: "#EAE1C8"
  neutral-paper-line-dark: "#3A342B"
  on-surface: "#3A2E22"
  on-surface-dark: "#EDE3CE"
  error: "#C0392B"
  error-dark: "#E27B6A"
typography:
  headline-lg:
    fontFamily: "Klee One"
    fontSize: 28px
    fontWeight: 500
    lineHeight: 1.4
  headline-md:
    fontFamily: "Klee One"
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.4
  body-lg:
    fontFamily: "Noto Sans JP"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: "Noto Sans JP"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Noto Sans JP"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
  label-lg:
    fontFamily: "Noto Sans JP"
    fontSize: 17px
    fontWeight: 700
    lineHeight: 1.2
  label-md:
    fontFamily: "Noto Sans JP"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.2
  caption:
    fontFamily: "Noto Sans JP"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.02em
rounded:
  sm: 4px
  md: 12px
  lg: 20px
  full: 999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
components:
  input:
    backgroundColor: transparent
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    borderColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: 8px
  button-primary:
    backgroundColor: "{colors.accent-buy}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    padding: 14px
  button-primary-hover:
    backgroundColor: "{colors.accent-buy-soft}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    padding: 14px
  button-secondary:
    backgroundColor: "{colors.accent-save}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    padding: 14px
  tab-toggle-active:
    backgroundColor: "{colors.accent-save}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
  tab-toggle-inactive:
    backgroundColor: transparent
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    padding: "10px 20px"
  chip:
    backgroundColor: "{colors.neutral-paper-line}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "8px 12px"
  chip-selected:
    backgroundColor: "{colors.accent-buy}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "8px 12px"
  progress-bar-track:
    backgroundColor: "{colors.neutral-paper-line}"
    rounded: "{rounded.sm}"
    height: 10px
  progress-bar-fill:
    backgroundColor: "{colors.accent-buy}"
    rounded: "{rounded.sm}"
  progress-bar-fill-complete:
    backgroundColor: "{colors.accent-save-deep}"
    rounded: "{rounded.sm}"
  list-item:
    backgroundColor: transparent
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    padding: "12px 0"
  badge-purchasable:
    backgroundColor: "{colors.accent-save}"
    textColor: "{colors.accent-save-deep}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: "4px 10px"
---

# Don't Buy Design System

## Overview

「Don't Buy」は、買う予定だったものを我慢の記録に変えて貯金に積み上げていく習慣化アプリ。デザインの核は「手帳・ノートに書きとめる」体験で、勉強ノートや家計簿ノートのような、罫線紙・手書き見出し・ちょっとした付箋のあたたかみを軸にする。

UIが与えたい感情は、節制を我慢としてではなく「今日も書きとめた」という前向きな習慣の積み重ねとして感じさせること。派手な演出よりも、日々の記帳を丁寧に扱う落ち着いたトーンを優先する。"Don't Buy"モード（我慢・貯金）と"BUY"モード（購入・目標達成）は同じノートの中の2つの気分として、配色（グリーン系／イエロー・ピーチ系）で切り替える。

## Colors

- **primary**（`#1E3A5F` 濃紺インク）: 見出し、罫線、入力欄の下線など「ペンで書いた線」を表す色。ノートに万年筆で書いたような落ち着きを担う。
- **secondary**（`#E2735C` 珊瑚赤）: ノート左端のマージンライン、タイトルの波線下線など装飾専用のアクセント。本文の文字色としては使わない（Do's and Don'ts参照）。
- **accent-buy** / **accent-buy-soft**（`#F3C15D` / `#F0B27A`）: "BUY"モードの基調色。購入・欲しいものリスト・CTAボタン（書きとめる、記帳）に使う、付箋の黄色〜オレンジ。
- **accent-save** / **accent-save-deep**（`#A9CBB7` / `#2E5940`）: "Don't Buy"モードの基調色。我慢・貯金・達成の可視化（チャートのハイライトバー、購入可能バッジ）に使う。
- **neutral-paper** / **neutral-paper-line**（`#F7F1DE` / `#EAE1C8`）: ノート紙の背景色と罫線色。アプリ全体の土台。
- **on-surface**（`#3A2E22` 焦げ茶）: 本文・金額など可読性が最優先のテキスト色。
- **error**（`#C0392B`）: フォームエラー・削除確認などに限定使用。

ダークモードでは `-dark` サフィックスの色に切り替える。単なる反転ではなく、紙の色を「クリーム色の紙」から「灯りの下の焦げ茶い紙」（`neutral-paper-dark` `#2B2620`）に変え、ノートを夜に開いているような温かみを保つ。

## Typography

見出しには手書き風和文フォント `Klee One` を使い、ロゴ・画面タイトル・セクション見出しなど「ノートの表題」に相当する箇所に限定する（`headline-lg` / `headline-md`）。本文・金額・ボタン・ラベルは可読性を優先し `Noto Sans JP` を使う。

- `body-lg` / `body-md` / `body-sm`: 本文・リスト項目・金額表示。金額のような重要な数値は `body-lg` に `label-lg` 相当の太字を組み合わせて強調する。
- `label-lg` / `label-md`: ボタン文字、タブ、チップなどインタラクティブ要素のラベル。
- `caption`: 日付、補助テキスト、バッジ内の小さな文字。

見出しの手書き風下線・波線装飾はフォントではなくCSSの `text-decoration` やSVG装飾として実装し、`headline-*` トークン自体はフォント指定のみを担う。

## Layout

Fixed-Max-Widthのモバイルファーストレイアウト（375〜428px相当を基準に、それ以上は中央寄せで最大幅を固定）。ノートの罫線に合わせて、コンテンツの垂直リズムは `spacing.md`（16px）を基準行間とする。

画面下部の入力ドック（記帳フォーム・商品登録フォーム）は紙面から独立した「ドック」として扱い、`neutral-paper` と区別される背景（`neutral-paper-line` またはやや濃いトーン）と `primary` の境界線で紙面から切り離す。

## Elevation & Depth

シャドウは最小限に留め、階層はトーナルレイヤー（紙の色の濃淡）と罫線で表現する。例外はCTAボタン（`button-primary` / `button-secondary`）で、これらだけは「付箋を貼ったような」わずかな傾きと柔らかいドロップシャドウを許可し、ノートに貼った付箋というメタファーを補強する。カード状のコンテナに強いシャドウは使わない。

## Shapes

基本は角丸小〜中（`rounded.sm` 4px 〜 `rounded.md` 12px）で、紙に貼った付箋やメモ用紙の角の丸みを表現する。タブ切り替え（Don't Buy / BUY）のようなpill型要素のみ `rounded.full` を使う。同一画面内で角丸と直角を混在させない。

## Components

- **input**: 背景を持たず、`primary` 色の下線のみで構成する「ノートの記入欄」。プレースホルダーは薄いグレーで例示を示す。
- **button-primary**: BUY・記帳・書きとめるなど「前に進む」アクション。`accent-buy` 系の暖色背景に付箋の傾き演出。
- **button-secondary**: Don't Buy・ゲストとして試すなど「静かに続ける」アクション。`accent-save` の緑背景。
- **tab-toggle**: Don't Buy / BUY のモード切替。アクティブ側のみ塗りつぶし、非アクティブはテキストのみ。
- **chip**: カテゴリ選択（食費・娯楽・衣類など）。選択中は `accent-buy` で塗る。
- **progress-bar**: 欲しいものの達成率表示。未達成は `accent-buy`、100%達成時は `accent-save-deep` に切り替えて視覚的に「買ってよい」を伝える。
- **list-item**: 節約帳の履歴行。チェックマーク・日付・品目・金額を横並びにし、下線区切りのみでカード化しない。
- **badge-purchasable**: 「購入可能」など達成済みステータスバッジ。

## Do's and Don'ts

- Do: 本文・金額など読ませるテキストは必ず `on-surface` / `on-surface-dark` を使う（`neutral-paper` 上でコントラスト比 約12:1、AA基準を大きく満たす）
- Do: 見出しの `primary` 色は `neutral-paper` 背景に対しコントラスト比 約10:1 でAAを満たすため、通常テキストサイズでも使用可
- Don't: `secondary`（`#E2735C` 珊瑚赤）を本文テキスト色として使わない。`neutral-paper` 背景とのコントラスト比は約2.7:1で、通常テキスト（4.5:1必要）・大きいテキスト（3:1必要）のどちらのWCAG AA基準も満たさない。マージンラインや下線装飾など、読ませない用途に限定する
- Do: "Don't Buy"モードと"BUY"モードは必ず `accent-save` 系／`accent-buy` 系の配色で明確に切り替え、混在させない
- Don't: 同一画面で角丸（`rounded.*`）と直角のコンテナを混在させない
- Don't: カード状コンテナに強いドロップシャドウを使わない。階層表現は罫線とトーナルレイヤーで行い、シャドウは付箋型ボタンのみに使う
- Do: 見出し以外の箇所では `Klee One` を使わず `Noto Sans JP` に統一し、可読性を優先する
