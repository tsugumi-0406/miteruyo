import { propagateServerField } from "next/dist/server/lib/render-server";

function Input(props) {
  return (
    <div className="text-center flex justify-center">
      <form action="">
        <label htmlFor="" className="block text-left">{props.label}</label>
        <input type="text" className="border w-200  h-10 block"></input>
      </form>
    </div>
  );
}

export default Input;
