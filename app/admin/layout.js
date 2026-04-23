import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";
import LeftMenu from "./components/LeftMenu";
export const metadata = {
  title: "Flipix | Hyper Admin Dashboard",
  description: "Flipix dashboard",
};
export default async function AdminLayout({ children }) {
  // const cookieStore = cookies();
  // const token = (await cookieStore).get("token")?.value;

  // if (!token) {
  //   redirect("/login");
  // }

  // try {
  //   const decoded = jwt.verify(token, process.env.JWT_SECRET);

  //   // ✅ role check
  //   if (decoded.role !== "admin") {
  //     redirect("/"); // বা forbidden page
  //   }

  return (
    <div className="px-1 md:px-3 lg:px-4 py-2 md:py-3 lg:py-4 w-full relative mx-auto flex gap-4 lg:gap-3">
      <LeftMenu />
      {children}
    </div>
  );

  // } catch (error) {
  //   redirect("/login");
  // }
}
