import { FC } from "react";
import Logo from "../../images/icons/logo.svg";

export const Navbar: FC<{}> = ({}) => {
  return (
    <div className="flex justify-between p-6 border-b border-gray-700">
      <img src={Logo} alt="logo" />
    </div>
  );
};
