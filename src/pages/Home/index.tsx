import { MainLayout } from "@/layouts/main";
import { PasswordItem } from "./components/PasswordItem";
import { useHomeController } from "./useHomeController";
import { Sheet } from "@/components/ui/sheet";
import { Fab } from "./components/Fab";

import { SheetPassword } from "./components/Sheet";
import { useEffect } from "react";

export const Home = () => {
  const { passwords, handleCopyPassword, auth, handleLogout } =
    useHomeController();

  useEffect(() => {
    if (!auth) {
      window.location.href = "/";
    }
  }, [auth]);

  return (
    <MainLayout isLogged handleLogout={handleLogout}>
      <Sheet>
        <section className="text-start">
          <div className="container flex flex-col gap-4 max-w-[820px]">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl text-white font-bold ">Suas senhas</h1>
              <span className="font-medium text-white">
                Total{" "}
                <strong className="text-green-500">{passwords.length}</strong>{" "}
                senhas
              </span>
            </div>
            <div className="flex flex-col gap-4">
              {passwords.map((item) => (
                <PasswordItem
                  key={item.title}
                  email={item.email}
                  title={item.title}
                  onCopy={() => handleCopyPassword(item.email)}
                  onDelete={() => {}}
                  onEdit={() => {}}
                />
              ))}
            </div>
          </div>
        </section>
        <Fab />
        <SheetPassword />
      </Sheet>
    </MainLayout>
  );
};
