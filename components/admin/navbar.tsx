import { Urbanist } from "next/font/google";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { MainNav } from "./main-nav";

const urbanist = Urbanist({ subsets: ["latin"] });

const Navbar = () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="border-b">
      <div className="flex h-16 items-center justify-between px-12">
        <div className={`font-bold text-xl ${urbanist.className}`}>EL KUBO</div>
        <MainNav className="mx-6" />
        <div className="flex items-center space-x-2">
          <div className="text-sm font-medium text-muted-foreground">Admin</div>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
