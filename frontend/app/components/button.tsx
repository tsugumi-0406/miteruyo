import { propagateServerField } from "next/dist/server/lib/render-server";

export function LoginButton(props) {
  return (
    <div className="text-center py-10">
      <button className="bg-gray-700 font-bold text-white w-200 h-10">
        {props.inner}
      </button>
    </div>
  );
}

export function RecordButton(props) {
  return (
    <div className="text-center">
      <button className="border border-gray-700 text-gray-700 w-17 h-10 md:w-53 md:h-15">
        {props.inner}
      </button>
    </div>
  );
}

export function PageButton(props) {
  return (
    <div className="text-center">
      <button className="border border-gray-700 text-gray-700 w-36 h-10 md:w-107 md:h-15">
        {props.inner}
      </button>
    </div>
  );
}