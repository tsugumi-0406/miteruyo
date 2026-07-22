import { LoginButton, RecordButton } from "./components/button";
import Input from "../components/input";

function App() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <h1 className="font-bold text-3xl py-10">会員登録</h1>
      <Input label="名前" />
      <Input label="メールアドレス" />
      <Input label="パスワード" />
      <Input label="確認用パスワード" />
      <LoginButton inner="会員登録" />
      <div className="text-center my-10">
        <a href="" className="underline">
          ログインはこちら
        </a>
      </div>
    </div>
  );
}

export default App;
