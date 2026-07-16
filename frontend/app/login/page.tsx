import LoginButton from "../components/button";
import Input from "../components/input";

function App() {
    return (
      <div className="grid grid-cols-1 gap-4">
        <h1 className="font-bold text-3xl py-10">ログイン</h1>
        <Input label="メールアドレス" />
        <Input label="パスワード" />
        <LoginButton inner="ログイン" />
        <div className="text-center my-10">
          <a href="" className="underline">
            会員登録はこちら
          </a>
        </div>
      </div>
    );
}

export default App;