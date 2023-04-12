import { Dispatch, FC, SetStateAction } from "react";
import Transfer from "../../images/icons/transfer_icon.svg";
import { BiChevronDown } from "react-icons/bi";

export const Filter: FC<{
  filterOptions: Array<any>;
  filterOption: string;
  showFilter: boolean;
  setShowFilter: Dispatch<SetStateAction<boolean>>;
  setFilterOption: Dispatch<SetStateAction<string>>;
}> = ({
  filterOptions,
  filterOption,
  setShowFilter,
  showFilter,
  setFilterOption,
}) => {
  return (
    <div className="relative">
      <div
        onClick={() => setShowFilter(!showFilter)}
        className="flex items-center cursor-pointer hover:bg-bg-secondary duration-200 transition-all p-2 gap-2 relative"
      >
        <img className="text-primary h-6 w-6" src={Transfer} alt="transfer" />
        <span>
          {
            filterOptions.find((option) =>
              option.index === filterOption ? true : false
            )?.name
          }
        </span>
        <BiChevronDown className="text-primary h-7 w-7 relative" />
      </div>
      {showFilter && (
        <div className="absolute right-2 top-14 cursor-pointer bg-bg-secondary gap-5 flex flex-col px-8 py-5">
          {filterOptions.map((option) => {
            return (
              <span
                key={option.index}
                onClick={() => {
                  setFilterOption(option.index);
                  setShowFilter(false);
                }}
                className={`${
                  option.index === filterOption
                    ? true
                    : false
                    ? "text-primary"
                    : "text-gray-400"
                }  hover:text-gray-200 duration-150 transition-all whitespace-nowrap`}
              >
                {option.name}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};
