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
      <LoginButton inner="設定を完了する" />
    </div>
  );
}

export default App;
