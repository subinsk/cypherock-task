import { Dispatch, FC, SetStateAction, useState } from "react";
import { Device } from "./Steps/Device";
import { Verification } from "./Steps/Verification";
import { Recieve } from "./Steps/Recieve";
import { IoMdClose } from "react-icons/io";

export const Steps: FC<{
  setShowReceive: Dispatch<SetStateAction<boolean>>;
}> = ({ setShowReceive }) => {
  //? states
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [completedDeviceSteps, setCompletedDeviceSteps] = useState<number>(0);
  const [completedVerificationSteps, setCompletedVerificationSteps] =
    useState<number>(0);

  return (
    <div className="h-screen w-full fixed top-0 bg-black/70 flex items-center justify-center">
      <div className="bg-bg-secondary relative flex flex-col gap-12 items-center w-1/2">
        <button
          onClick={() => setShowReceive(false)}
          className="text-gray-300 p-2 duration-150 transition-all hover:bg-gray-300/10 rounded-full absolute top-4 right-4"
        >
          <IoMdClose className="w-6 h-6" />
        </button>
        <p className="font-semibold text-2xl py-5">Receive</p>
        <div className="flex items-baseline">
          <div className="flex flex-col items-center gap-2">
            <div
              className={`h-10 w-10 rounded-full ${
                currentStep >= 1
                  ? "text-white bg-primary border-primary"
                  : "text-gray-600 border-gray-600"
              } flex items-center border justify-center`}
            >
              1
            </div>
            <span
              className={`${
                currentStep >= 1 ? "text-primary" : "text-white"
              } font-semibold`}
            >
              Device
            </span>
          </div>
          <div className="border-gray-700 border h-0 w-36"></div>
          <div className="flex flex-col items-center gap-2">
            <div
              className={`h-10 w-10 rounded-full ${
                currentStep >= 2
                  ? "text-white bg-primary border-primary"
                  : "text-gray-600 border-gray-600"
              } flex items-center border justify-center`}
            >
              2
            </div>
            <span
              className={`${
                currentStep >= 2 ? "text-primary" : "text-white"
              } font-semibold`}
            >
              Verification
            </span>
          </div>
          <div className="border-gray-700 border h-0 w-36"></div>
          <div className="flex flex-col items-center gap-2">
            <div
              className={`h-10 w-10 rounded-full ${
                currentStep >= 3
                  ? "text-white bg-primary border-primary"
                  : "text-gray-600 border-gray-600"
              } flex items-center border justify-center`}
            >
              3
            </div>
            <span
              className={`${
                currentStep >= 3 ? "text-primary" : "text-white"
              } font-semibold`}
            >
              Receive
            </span>
          </div>
        </div>
        {currentStep === 1 ? (
          <Device
            completedDeviceSteps={completedDeviceSteps}
            setCompletedDeviceSteps={setCompletedDeviceSteps}
          />
        ) : currentStep === 2 ? (
          <Verification
            completedVerificationSteps={completedVerificationSteps}
            setCompletedVerificationSteps={setCompletedVerificationSteps}
          />
        ) : currentStep === 3 ? (
          <Recieve />
        ) : null}
        <div className="border-t py-3 px-4 w-full border-gray-700 flex justify-end items-end">
          {currentStep === 3 ? null : (
            <button
              onClick={() => {
                setCurrentStep((prevStep) => {
                  return prevStep + 1;
                });
              }}
              disabled={
                currentStep !== 3 && currentStep === 1
                  ? completedDeviceSteps === 3
                    ? false
                    : true
                  : currentStep === 2
                  ? completedVerificationSteps === 1
                    ? false
                    : true
                  : false
              }
              className="flex px-8 py-2 items-center justify-center rounded border border-secondary disabled:border-gray-500 text-secondary disabled:text-gray-500 disabled:cursor-not-allowed hover:bg-black/20"
            >
              Continue
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
