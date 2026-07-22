import { LoginButton, RecordButton, PageButton } from "../../components/button";
import Input from "../../components/input";

function App() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <h2 className="font-bold text-3xl py-10">子供の追加</h2>
      <Input label="名前" />
      <Input label="誕生日" />
      <Input label="性別" />
      <LoginButton inner="追加する" />
    </div>
  );
}

export default App;
