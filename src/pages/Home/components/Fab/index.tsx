import { Button } from "@/components/ui/button";
import { SheetTrigger } from "@/components/ui/sheet";
import { Plus } from "@phosphor-icons/react";

type Fab = {
  onClick: () => void;
};

export const Fab = () => {
  return (
    <SheetTrigger asChild>
      <div className="fixed right-4 bottom-20">
        <Button className=" h-full bg-green-500  rounded-full p-4 hover:bg-green-500 hover:opacity-75 transition-opacity">
          <Plus size={24} />
        </Button>
      </div>
    </SheetTrigger>
  );
};
