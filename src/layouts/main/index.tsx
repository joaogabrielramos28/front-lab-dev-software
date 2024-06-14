import { Header } from "@/components/Header";
import { PropsWithChildren } from "react";

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className=" scrollbar scrollbar-track-background bg-zinc-950 w-screen h-screen scrollbar-w-2  scrollbar-thumb-secondary-foreground  scrollbar-thumb-rounded-md">
      <Header />
      {children}
    </main>
  );
};
