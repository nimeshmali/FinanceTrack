import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

export default function Page() {
  return (
    <div className="h-full flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-4 pt-16">
        <h1 className="font-bold text-3xl text-[#2e2a47] ">Welcome Back!</h1>
        <p className=" text-base text-[#7e8CA0] pb-3">
          Log in or Create account to get back to dashboard!
        </p>
      </div>
      <ClerkLoaded>
        <SignIn path="/sign-in" />
      </ClerkLoaded>
      <ClerkLoading>
        <Loader2 className="animate-spin text-muted-foreground" />
      </ClerkLoading>
    </div>
  );
}
