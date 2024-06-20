import { MainLayout } from "@/layouts/main";
import { PasswordItem } from "./components/PasswordItem";
import { useHomeController } from "./useHomeController";
import { Fab } from "./components/Fab";

import { SheetPassword } from "./components/Sheet";
import { useEffect } from "react";
import { Package } from "@phosphor-icons/react";
import { AlertDialog } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Dialog } from "./components/Dialog";

export const Home = () => {
  const {
    passwords,
    handleCopyPassword,
    auth,
    handleLogout,
    handleDeletePass,
    editingPassword,
    setIsEditingPassword,
    handleToggleSheet,
    sheetIsOpen,
    handleToggleDeleteModal,
    isConfirmModal,
    handleDeleteAccount,
  } = useHomeController();

  useEffect(() => {
    if (!auth) {
      window.location.href = "/";
    }
  }, [auth]);

  return (
    <MainLayout isLogged handleLogout={handleLogout}>
      <AlertDialog>
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
              {passwords.length === 0 ? (
                <div className="flex flex-col justify-center items-center mt-8">
                  <Package size={68} color="gray" weight="regular" />
                  <h3 className="text-zinc-600 font-bold mt-2 text-center">
                    Nenhuma senha cadastrada. <br />
                    Comece agora para proteger suas informações!
                  </h3>
                </div>
              ) : (
                <>
                  {passwords.map((item) => (
                    <PasswordItem
                      key={item.id_position}
                      email={item.service_email}
                      title={item.service_name}
                      onCopy={() => handleCopyPassword(item.password)}
                      onDelete={() => handleDeletePass(item.id_position)}
                      onEdit={() => {
                        handleToggleSheet(), setIsEditingPassword(item);
                      }}
                    />
                  ))}
                  <Button
                    variant="destructive"
                    onClick={handleToggleDeleteModal}
                  >
                    Deletar conta
                  </Button>
                </>
              )}
            </div>
          </div>
        </section>
        <Fab onClick={handleToggleSheet} />
        <SheetPassword
          open={sheetIsOpen}
          onClose={handleToggleSheet}
          editingPassword={editingPassword}
        />
      </AlertDialog>
      <Dialog
        open={isConfirmModal}
        onClose={handleToggleDeleteModal}
        onConfirm={handleDeleteAccount}
      />
    </MainLayout>
  );
};
