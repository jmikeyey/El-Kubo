import Page from "@/components/user/Page";
import { checkRole } from "@/utils/roles";
import { redirect } from "next/navigation";

export default function Home() {
  if (!checkRole("user")) {
    redirect("/");
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <Page />
    </main>
  );
}
