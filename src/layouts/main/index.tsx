import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PropsWithChildren } from "react";

type MainLayout = {
  isLogged?: boolean;
};

export const MainLayout = ({
  isLogged,
  children,
}: PropsWithChildren<MainLayout>) => {
  return (
    <main className="flex flex-col justify-between min-h-screen scrollbar-w-2 scrollbar scrollbar-track-background scrollbar-thumb-secondary-foreground overflow-y-scroll scrollbar-thumb-rounded-md">
      <Header isLogged={isLogged} />
      {children}

      <Footer />
    </main>
  );
};
