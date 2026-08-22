---
branch: feat-account-authentication
issue: #4
created: 2026-08-21
updated: 2026-08-21
---

# feat-account-authentication タスク

## 目的

Supabase Authによるメール＋パスワード認証と、`signInAnonymously()`によるゲストログインを実装する。
あわせてログアウト機能とゲストユーザーのクリーンアップロジックも実装する。

## タスク

### ミドルウェア

- [x] ルートに `proxy.ts` を作成し、`updateSession`（`src/auth/proxy.ts:3`）を呼び出す（Next.js 16のProxy機能。旧`middleware.ts`はこのプロジェクトでは使わない。正しいexport形式を確認して実装する）

### サインアップ

- [x] `src/auth/signup.ts`（`signUpNewUser`）: ドメインロジック層
  - [x] Supabase `auth.signUp` 呼び出し＋エラー判定のみを担当する（redirectは行わない）
  - [x] `{ data, error }` を返す（または `error` を `throw` する）形に整理する
- [x] `src/auth/signup-action.ts`（`signUpAction`, `"use server"`）: Server Action層。formの`action` propに直接渡す
  - [x] `signUpNewUser` を呼び出す
  - [x] {error:error.message} | if分岐でredirectに変更。try,catchするまでもなく関数側で振り分け~~try/catchでエラーを受け取り、`data.session` の有無でリダイレクト先を分岐する（`redirect()` はtry/catchの外で呼ぶ）~~
    - `data.session`あり → 確認不要設定、ダッシュボード等へ
    - `data.session`なし → メール確認必須、確認案内ページへ
  - [x] エラー時はリダイレクトせず、エラーメッセージ等のstateを返す（トースト表示は呼び出し元の`signup-form`に任せる）
- [ ] メール認証時のページを用意する
- [ ] メール認証中のページを用意する
- [x] `src/auth/signup-form.tsx` にフォーム送信ロジックを実装する
  - [x] `form`を使ったclient componentとして実装する（`"use client"`。トースト通知のため`useActionState`/`useEffect`を使用）
  - [x] `action`で`signup-action`（`signUpAction`）を呼ぶ
  - [ ] `signUpAction`が返すエラーstateを検知し、トースト通知を出す
    - [ ] 現行shad cn/uiの`Toast`コンポーネントをインストールし直す(実装が違うみたい)
- [ ] `src/app/(auth)/signup/page.tsx`（現状空ファイル）に`SignUpForm`コンポーネント（`src/auth/signup-form.tsx`）呼び出しを実装する

### ログイン

- [ ] ログイン処理関数を新規作成する（`signInWithPassword`を呼ぶ。配置は`src/auth/signup.ts`に倣い`src/auth/login.ts`を想定）
  - [ ] 構造自体はsignup処理と同じ感じ
- [ ] `src/auth/login-form.tsx` を`<form>`要素化しフォーム送信ロジックを実装する（現状`<form>`タグすら無い）
- [ ] ゲストログインボタン（login-form.tsx, signup-form.tsx双方の「ゲストとして試す」）に`signInAnonymously()`を実装する
- [ ] `src/app/(auth)/login/page.tsx` を`LoginForm`コンポーネント（`src/auth/login-form.tsx`）呼び出しに統一する（現状は内容を直書きで重複実装している）
- [ ] login-form.tsx / signup-form.tsx 内の相互リンク（`<Link href="">`、`login-form.tsx:34`, `signup-form.tsx:35`）の遷移先を正しいパスに修正する
- [ ] 未登録のユーザーの場合、サインアップ画面へ遷移する

### ログアウト

- [ ] ログアウト処理関数を新規作成する（`signOut`を呼ぶ。`src/auth/logout.ts`を想定）とUIへの設置箇所を決める

### その他

- [ ] ゲストユーザーのクリーンアップ方式を調査・決定する（実装時に検討。pg_cron + SQL / Edge Function等の選択肢あり）
- [ ] 決定した方式でゲストユーザークリーンアップを実装する
- [ ] 動作確認：サインアップ、ログイン、ゲストログイン、ログアウト、未ログイン時のリダイレクト（Proxy）

## 完了条件

メール＋パスワードでのサインアップ/ログイン、およびゲストログインができる（ログアウト、クリーンアップ含む）。
