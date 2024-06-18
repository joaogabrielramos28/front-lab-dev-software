import { Button } from "@/components/ui/button";
import { Plus } from "@phosphor-icons/react";

type FabProps = {
  onClick: () => void;
};

export const Fab = ({ onClick }: FabProps) => {
  return (
    <div className="fixed right-4 bottom-20">
      <Button
        onClick={onClick}
        className=" h-full bg-green-500  rounded-full p-4 hover:bg-green-500 hover:opacity-75 transition-opacity"
      >
        <Plus size={24} />
      </Button>
    </div>
  );
};
