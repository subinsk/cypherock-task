import { FC, Dispatch, SetStateAction } from "react";
import { BsArrowRight } from "react-icons/bs";
import { IoMdCheckmark } from "react-icons/io";

export const Device: FC<{
  completedDeviceSteps: number;
  setCompletedDeviceSteps: Dispatch<SetStateAction<number>>;
}> = ({ completedDeviceSteps, setCompletedDeviceSteps }) => {
  return (
    <div className="flex flex-col gap-5 py-5 w-full px-24">
      <p className="ml-5 font-semibold">Follow the instruction on device</p>
      <button
        disabled={completedDeviceSteps >= 1}
        onClick={() => {
          setCompletedDeviceSteps(1);
        }}
        className="flex group items-center justify-between p-3 rounded-md bg-gray-800"
      >
        <div className="flex items-center gap-6 ">
          <BsArrowRight className="text-secondary" />
          <span
            className={`${
              completedDeviceSteps >= 1 ? "text-[#A4A9D6]" : "text-gray-400"
            } font-semibold`}
          >
            Select the wallet on device
          </span>
        </div>
        <IoMdCheckmark
          className={`w-5 h-5 ${
            completedDeviceSteps >= 1
              ? "text-secondary"
              : "text-gray-500 group-hover:flex hidden"
          }`}
        />
      </button>
      <button
        disabled={completedDeviceSteps >= 2}
        onClick={() => {
          setCompletedDeviceSteps(2);
        }}
        className="flex group items-center justify-between p-3 rounded-md bg-gray-800"
      >
        <div className="flex items-center gap-6 ">
          <BsArrowRight className="text-secondary" />
          <span
            className={`${
              completedDeviceSteps >= 2 ? "text-[#A4A9D6]" : "text-gray-400"
            } font-semibold`}
          >
            Select the coin on device
          </span>
        </div>
        <IoMdCheckmark
          className={` w-5 h-5 ${
            completedDeviceSteps >= 2
              ? "text-secondary"
              : "text-gray-500 group-hover:flex hidden"
          }`}
        />{" "}
      </button>
      <button
        disabled={completedDeviceSteps >= 3}
        onClick={() => {
          setCompletedDeviceSteps(3);
        }}
        className="flex group items-center justify-between p-3 rounded-md bg-gray-800"
      >
        <div className="flex items-center gap-6 ">
          <BsArrowRight className="text-secondary" />
          <span
            className={`${
              completedDeviceSteps >= 3 ? "text-[#A4A9D6]" : "text-gray-400"
            } font-semibold`}
          >
            Tap 1 card of any cards
          </span>
        </div>
        <IoMdCheckmark
          className={`w-5 h-5 ${
            completedDeviceSteps >= 3
              ? "text-secondary"
              : "text-gray-500 group-hover:flex hidden"
          }`}
        />{" "}
      </button>
    </div>
  );
};
