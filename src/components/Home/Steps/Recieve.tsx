import { FC } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { copyTextToClipboard } from "../../../utils/copyToClipboard";

export const Recieve: FC<{}> = () => {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-gray-400 ml-3">Coin Address</p>
      <div className="relative flex items-center justify-center bg-white/5 gap-8 rounded-md px-3 py-3 text-primary">
        <span id="pass" className="font-bold text-xl px-4">
          25BKJNKNLJL58fjkdhfk26dnfds15
        </span>
        <span
          onClick={() => {
            copyTextToClipboard(document.getElementById("pass")?.innerText);
            toast.success("Copied to clipboard");
          }}
          className="px-2 py-2 cursor-pointer bg-white/10 rounded-md text-secondary"
        >
          Copy
        </span>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex gap-2 text-blue-700 items-center">
          <AiOutlineInfoCircle className="h-6 w-6" />
          <span>Address Verified</span>
        </div>
        <div className="w-full flex justify-center items-center">
          <button className="text-blue-700 border border-blue-700 flex w-fit px-12 py-2 rounded-md items-center justify-center">
            Re-verify
          </button>
        </div>
      </div>
    </div>
  );
};
