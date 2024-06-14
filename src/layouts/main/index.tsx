import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PropsWithChildren } from "react";

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex flex-col justify-between min-h-screen scrollbar-w-2 scrollbar scrollbar-track-background scrollbar-thumb-secondary-foreground overflow-y-scroll scrollbar-thumb-rounded-md">
      <Header />
      {children}

      <Footer />
    </main>
  );
};
