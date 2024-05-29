import { insertAccountSchema } from "@/db/schema";
import { useNewAccount } from "../hooks/use-new-account";
import { AccountForm } from "./account-form";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { z } from "zod";
import { useCreateAccount } from "../api/use-create-account";
const formSchema = insertAccountSchema.pick({
  name: true,
});

type FormValues = z.input<typeof formSchema>;
export const NewAccountSheet = () => {
  const { isOpen, onClose } = useNewAccount();
  const mutation = useCreateAccount();
  const onsubmit = (values: FormValues) => {
    mutation.mutate(values, {
      onSuccess: () => {
        onClose();
      },
    });
  };
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>New Account</SheetTitle>
          <SheetDescription>
            Create a new account to track your transactions.
          </SheetDescription>
        </SheetHeader>
        <AccountForm
          onSubmit={onsubmit}
          disabled={mutation.isPending}
          defaultValues={{
            name: "",
          }}
        />
      </SheetContent>
    </Sheet>
  );
};
