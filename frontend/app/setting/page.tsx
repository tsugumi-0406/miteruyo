import { LoginButton, RecordButton, PageButton } from "../components/button";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <h1 className="bold text-3xl py-5">設定</h1>
      <LoginButton inner="ユーザーの設定"></LoginButton>
      <LoginButton inner="子供の設定"></LoginButton>
      <LoginButton inner="子供の追加"></LoginButton>
      <LoginButton inner="ログアウト"></LoginButton>
      <div className="flex mb-0">
        <PageButton inner="ホーム"></PageButton>
        <PageButton inner="記録のまとめ"></PageButton>
        <PageButton inner="設定"></PageButton>
      </div>
    </div>
  );
}

export default App;
