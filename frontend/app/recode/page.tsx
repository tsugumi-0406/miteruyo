import { LoginButton, RecordButton, PageButton } from "../components/button";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <h1 className="bold text-2xl py-5 text-center">子供の名前</h1>
      <h2 className="text-center text-1xl">2026/7/20～2026/7/26</h2>
      <div className="flex text-sm">
        <RecordButton inner="睡眠" />
        <RecordButton inner="ミルク" />
        <RecordButton inner="抱っこ" />
        <RecordButton inner="寝かしつけ" />
        <RecordButton inner="排泄" />
      </div>

      <div className="flex text-sm mx-auto">
        <RecordButton inner="時間" />
        <RecordButton inner="量" />
      </div>

      <div className="flex">
        <div className="flex flex-col justify-between">
          <p>0:00</p>
          <p>6:00</p>
          <p>12:00</p>
          <p>18:00</p>
          <p>24:00</p>
        </div>
        <div className="bg-gray-400 w-300 h-300">グラフ</div>
      </div>
      <div className="flex justify-around">
        <p>月</p>
        <p>火</p>
        <p>水</p>
        <p>木</p>
        <p>金</p>
        <p>土</p>
        <p>日</p>
      </div>

      <div className="flex mb-0 mt-auto">
        <PageButton inner="ホーム"></PageButton>
        <PageButton inner="記録のまとめ"></PageButton>
        <PageButton inner="設定"></PageButton>
      </div>
    </div>
  );
}

export default App;
