import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId, sessionClaims } = auth();

  if (!userId) {
    redirect("sign-in");
  }

  if (sessionClaims?.metadata.role === "admin") {
    redirect("/admin");
  } else if (sessionClaims?.metadata.role === "kitchen") {
    redirect("/kitchen");
  } else if (sessionClaims?.metadata.role === "user") {
    redirect("/user");
  }

  return (
    <div>
      <div>Root Page Waiting room</div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
