import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Copy, PencilSimple, TrashSimple } from "@phosphor-icons/react";

type PasswordItemProps = {
  title: string;
  email: string;
  onCopy: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

export const PasswordItem = ({
  email,
  title,
  onCopy,
  onDelete,
  onEdit,
}: PasswordItemProps) => {
  const actions = [
    {
      icon: <Copy size={24} weight="fill" color="white" />,
      onClick: onCopy,
    },
    {
      icon: <PencilSimple size={24} weight="fill" color="white" />,
      onClick: onEdit,
    },
    {
      icon: (
        <AlertDialogTrigger>
          <TrashSimple size={24} weight="fill" color="white" />
        </AlertDialogTrigger>
      ),
      onClick: () => {},
    },
  ];
  return (
    <div className="w-full border border-input rounded-md flex p-4 justify-between">
      <div className="flex flex-col ">
        <span className="font-medium text-white">{title}</span>
        <span className="text-xs text-zinc-500 font-medium">{email}</span>
      </div>
      <div>
        {actions.map(({ icon, onClick }, index) => (
          <Button
            className="hover:opacity-75 transition-opacity"
            key={index}
            onClick={onClick}
            variant="ghost"
          >
            {icon}
          </Button>
        ))}
      </div>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Tem certeza que deseja apagar sua senha?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Ao apagar sua senha, você não poderá recuperá-la.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={onDelete}>Apagar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </div>
  );
};
