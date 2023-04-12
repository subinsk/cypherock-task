import { Dispatch, FC, SetStateAction } from "react";
import { BsArrowRight } from "react-icons/bs";
import { IoMdCheckmark } from "react-icons/io";

export const Verification: FC<{
  completedVerificationSteps: number;
  setCompletedVerificationSteps: Dispatch<SetStateAction<number>>;
}> = ({ completedVerificationSteps, setCompletedVerificationSteps }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-center border-dashed p-10 rounded-md border-2 text-primary font-bold text-xl bg-[#363A3E]/20 border-gray-600">
        25BKJNKNLJL58fjkdhfk26dnfds15
      </div>
      <p className="text-gray-400">Verify address on device</p>
      <button
        disabled={completedVerificationSteps === 1}
        onClick={() => {
          setCompletedVerificationSteps(1);
        }}
        className="flex group items-center justify-between p-3 rounded-md bg-gray-800"
      >
        <div className="flex items-center gap-6 ">
          <BsArrowRight className="text-secondary" />
          <span
            className={`${
              completedVerificationSteps >= 1
                ? "text-[#A4A9D6]"
                : "text-gray-400"
            } font-semibold`}
          >
            Select the coin on device
          </span>
        </div>
        <IoMdCheckmark
          className={` w-5 h-5 ${
            completedVerificationSteps === 1
              ? "text-secondary"
              : "text-gray-500 group-hover:flex hidden"
          }`}
        />{" "}
      </button>
    </div>
  );
};
