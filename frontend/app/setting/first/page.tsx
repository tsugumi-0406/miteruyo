import { LoginButton, RecordButton, PageButton } from "../../components/button";
import Input from "../../components/input";

function App() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <h2 className="font-bold text-3xl py-10">ユーザーの設定</h2>
      <Input label="ニックネーム" />
      <Input label="誕生日" />
      <Input label="テーマ" />
      <Input label="メッセージ" />
      <h2 className="font-bold text-3xl py-10">子供の設定</h2>
      <Input label="名前" />
      <Input label="誕生日" />
      <Input label="設定" />
      <PageButton inner="+子供を追加する" />
      <LoginButton inner="登録を完了する" />
    </div>
  );
}

export default App;
