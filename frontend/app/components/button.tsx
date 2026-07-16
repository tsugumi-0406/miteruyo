import { propagateServerField } from "next/dist/server/lib/render-server";

function LoginButton(props) {
    return (
      <div className="text-center py-10">
        <button className="bg-gray-700 font-bold text-white w-200 h-10">
          {props.inner}
        </button>
      </div>
    );
}

export default LoginButton;
