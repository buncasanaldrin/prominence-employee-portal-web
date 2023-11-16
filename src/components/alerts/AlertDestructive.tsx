import { TrashIcon } from "@radix-ui/react-icons";
import React from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type Props = {
  onClick: () => void;
  titleText?: string;
  descriptionText?: string;
  cancelText?: string;
  continueText?: string;
  children?: React.ReactNode;
};

const AlertDestructive: React.FC<Props> = ({
  onClick,
  titleText,
  descriptionText,
  cancelText = "Cancel",
  continueText = "Continue",
  children,
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="inline-flex h-[30px] items-center justify-center rounded-[5px] bg-red-500 p-[10px] text-[12px] leading-[20px] text-slate-50 ring-offset-white transition-colors hover:bg-red-500/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:bg-red-900 dark:text-slate-50 dark:ring-offset-slate-950 dark:hover:bg-red-900/90 dark:focus-visible:ring-slate-300">
        {children ? children : <TrashIcon />}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {titleText ? titleText : "Are you absolutely sure?"}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {descriptionText
              ? descriptionText
              : "This action cannot be undone. This will permanently delete this data from our servers."}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancelText}</AlertDialogCancel>
          <AlertDialogAction onClick={onClick}>
            {continueText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDestructive;
