// import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function LayoutPrivate({ children }) {
  // Temporarily commented out for development without MongoDB
  // const session = await auth();

  // if (!session) {
  // 	redirect("/");
  // }

  return children;
}
