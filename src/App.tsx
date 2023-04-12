import "./App.css";
import { useState } from "react";
import { Navbar } from "./components/Common/Navbar";
import { Sidebar } from "./components/Common/Sidebar";
import { AiOutlinePlus } from "react-icons/ai";

//? icons
import BlueTick from "./images/icons/blue_tick.svg";
import WhiteBlackCircle from "./images/icons/white_black_circle.svg";
import Lock from "./images/icons/lock.svg";
import { Filter } from "./components/Home/Filter";
import Bitcoin from "./images/icons/bitcoin.svg";
import Binance from "./images/icons/binance.svg";
import Ethereum from "./images/icons/ethereum.svg";
import Recieve from "./images/icons/lower_left_arrow.svg";
import Send from "./images/icons/upper_right_arrow.svg";

function App() {
  //? variables
  const data = [
    {
      name: "BITCOIN",
      amount: "0.0025600",
      value: "0.5268",
    },

    {
      name: "ETHEREUM",
      amount: "0.0025600",
      value: "0.5268",
    },
    {
      name: "BINANCE COIN",
      amount: "0.0025600",
      value: "0.5268",
    },
    {
      name: "BITCOIN",
      amount: "0.0025600",
      value: "0.5268",
    },
    {
      name: "ETHEREUM",
      amount: "0.0025600",
      value: "0.5268",
    },
    {
      name: "BINANCE COIN",
      amount: "0.0025600",
      value: "0.5268",
    },
    {
      name: "BITCOIN",
      amount: "0.0025600",
      value: "0.5268",
    },
    {
      name: "ETHEREUM",
      amount: "0.0025600",
      value: "0.5268",
    },
  ];

  const filterOptions = [
    {
      index: "0",
      name: "Amount High - Low",
    },
    {
      index: "1",
      name: "Amount Low - High",
    },
    {
      index: "2",
      name: "Arrange A - Z",
    },
    {
      index: "3",
      name: "Arrange Z - A",
    },
  ];

  //? states
  const [filterOption, setFilterOption] = useState<string>("0");
  const [showFilter, setShowFilter] = useState<boolean>(false);

  //? functions
  const getIcon = (name: string) => {
    if (name === "BITCOIN") return Bitcoin;
    else if (name === "BINANCE COIN") return Binance;
    else if (name === "ETHEREUM") return Ethereum;
  };

  const getCurrency = (name: string) => {
    if (name === "BITCOIN") return "BTC";
    else if (name === "BINANCE COIN") return "BNB";
    else if (name === "ETHEREUM") return "ETH";
  };

  return (
    <div className="bg-bg-primary w-full text-custom-white">
      <Navbar />
      <div className="grid grid-cols-6 h-full">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-5 flex flex-col gap-9 py-4">
          <div className="flex justify-end px-10 items-end">
            <div className="flex items-center gap-20">
              <div className="flex items-center gap-3">
                <img src={BlueTick} alt="blue_tick" />
                <span className="text-secondary">Synchronized</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="p-1 rounded bg-bg-secondary">
                  <img
                    className="h-6 w-6"
                    src={WhiteBlackCircle}
                    alt="WhiteBlackCircle"
                  />
                </div>
                <div className="p-1 rounded bg-bg-secondary">
                  <img className="h-6 w-6" src={Lock} alt="Lock" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between px-8">
            <span className="text-3xl text-secondary font-semibold">
              Wallet 1
            </span>
            <button className="px-5 py-2 gap-3 rounded flex items-center text-secondary bg-bg-secondary">
              <AiOutlinePlus className="w-6 h-6" />
              <span>Add Coin</span>
            </button>
          </div>
          <div className="flex items-center justify-between mx-8 my-4 px-6 py-2 border-gray-800 border-2">
            <span className="text-gray-400">Total Coin - {data.length}</span>
            <Filter
              showFilter={showFilter}
              setShowFilter={setShowFilter}
              filterOption={filterOption}
              filterOptions={filterOptions}
              setFilterOption={setFilterOption}
            />
          </div>
          <div className="flex flex-col justify-center gap-5 px-6 py-4">
            {data.map((item) => {
              return (
                <div className="grid grid-cols-5 p-4 bg-bg-secondary text-gray-400 font-semibold items-center justify-center">
                  <div className="flex items-center justify-start gap-2">
                    <div className="flex justify-center items-center bg-bg-secondary h-10 w-10 rounded-full p-2">
                      <img src={getIcon(item.name)} alt="icon" />
                    </div>
                    <span>{item.name}</span>
                  </div>
                  <div className="flex justify-center items-center gap-1">
                    {getCurrency(item.name)} {item.amount}
                  </div>
                  <div className="flex justify-center items-center gap-1">
                    USD {item.value}
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <img className="h-4 w-4" src={Recieve} alt="recieve" />
                    <span className="text-[#8484F1]">RECEIVE</span>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <img className="h-4 w-4" src={Send} alt="send" />
                    <span className="text-secondary">SEND</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
