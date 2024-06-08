import Navbar from "@/components/admin/navbar";
import { checkRole } from "@/utils/roles";
import { redirect } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!checkRole("admin")) {
    redirect("/");
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
