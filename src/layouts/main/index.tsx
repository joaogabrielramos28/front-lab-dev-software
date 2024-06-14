import { Header } from "@/components/Header";
import { PropsWithChildren } from "react";

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="bg-zinc-900 w-screen h-screen">
      <Header />
      {children}
    </main>
  );
};
