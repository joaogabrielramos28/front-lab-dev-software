import { LogOut } from "lucide-react";
import { Button } from "../ui/button";

type HeaderProps = {
  isLogged?: boolean;
  handleLogout?: () => void;
};

export const Header = ({ isLogged, handleLogout }: HeaderProps) => {
  return (
    <header className="w-screen flex p-6">
      <nav className="w-full flex justify-between">
        <a href={!isLogged ? "/" : "/home"}>
          <div className="text-3xl whitespace-nowrap text-white cursor-pointer">
            <span className="font-semibold bg-white rounded-lg p-1 m-1 text-black">
              Save
            </span>
            <span className="font-thin underline underline-offset-8">Pass</span>
          </div>
        </a>
        {isLogged && (
          <Button variant="ghost" onClick={handleLogout}>
            <LogOut className="text-green-500 hover:opacity-75 bg-transparent hover:bg-transparent transition-opacity" />
          </Button>
        )}
      </nav>
    </header>
  );
};
