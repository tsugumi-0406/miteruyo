import { LoginButton, RecordButton, PageButton } from "./components/button";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <h1 className="bold text-2xl py-5 text-center">子供の名前</h1>
      <h2 className="text-center text-1xl">2026/7/22</h2>
      <div className="flex text-2xl border w-100 mx-auto mt-5">
        <p className="mx-5">3:00</p>
        <p className="mx-20">寝る</p>
      </div>
      <div className="flex text-2xl border w-100 mx-auto">
        <p className="mx-5">5:00</p>
        <p className="mx-20">起きる</p>
      </div>
      <div className="flex text-sm mb-0 mt-auto">
        <div>
          <RecordButton inner="寝る" />
          <RecordButton inner="起きる" />
        </div>
        <div>
          <RecordButton inner="寝かしつけ" />
          <RecordButton inner="だっこ" />
        </div>
        <div>
          <RecordButton inner="ミルク" />
          <RecordButton inner="母乳" />
        </div>
        <div>
          <RecordButton inner="ごはん" />
          <RecordButton inner="おしっこ" />
        </div>
        <div>
          <RecordButton inner="おしっこ+うんち" />
          <RecordButton inner="うんち" />
        </div>
        <RecordButton inner="おふろ" />
      </div>
      <div className="flex mb-0">
        <PageButton inner="ホーム"></PageButton>
        <PageButton inner="記録のまとめ"></PageButton>
        <PageButton inner="設定"></PageButton>
      </div>
    </div>
  );
}

export default App;
