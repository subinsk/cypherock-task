import { FC } from "react";

//? icons
import Graph from "../../images/icons/graph.svg";
import Wallet from "../../images/icons/wallet.svg";
import LeftTransfer from "../../images/icons/left_transfer.svg";
import Tutorials from "../../images/icons/play.svg";
import Settings from "../../images/icons/settings.svg";
import { AiOutlinePlus } from "react-icons/ai";

export const Sidebar: FC<{}> = ({}) => {
  const routes = [
    {
      name: "Portfolio",
      icon: Graph,
    },
    {
      name: "Wallets",
      icon: Wallet,
      children: [
        {
          name: "Wallet 1",
        },
      ],
    },
    {
      name: "Last Transactions",
      icon: LeftTransfer,
    },
    {
      name: "Tutorials",
      icon: Tutorials,
    },
    {
      name: "Setting",
      icon: Settings,
    },
  ];
  return (
    <div className="flex flex-col sticky top-0 h-screen justify-between items-center p-8 bg-bg-secondary">
      <div className="flex flex-col gap-8">
        {routes.map((route, index) => {
          return (
            <div key={index} className="flex flex-col gap-2">
              <div className="flex cursor-pointer items-center gap-3">
                <img className="h-6 w-6" src={route.icon} alt="graph" />
                <span
                  className={`${
                    route.name === "Wallets"
                      ? "text-secondary"
                      : "text-gray-300"
                  } font-semibold"`}
                >
                  {route.name}
                </span>
              </div>
              {route.children?.length && (
                <div className="flex ml-14 flex-col gap-2">
                  {route.children.map((childItem, index) => {
                    return (
                      <span key={index} className="font-semibold text-primary">
                        {childItem.name}
                      </span>
                    );
                  })}
                  <button className="rounded-full gap-2 flex items-center border-dashed text-gray-500 border-2 px-1.5 py-0.5 border-gray-500">
                    <AiOutlinePlus />
                    <span className="whitespace-nowrap">add wallet</span>
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <button className="bg-[#785B3C] rounded flex items-center justify-center px-4 py-2">
        <span className="text-secondary">Support</span>
      </button>
    </div>
  );
};
