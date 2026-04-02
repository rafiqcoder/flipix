import MainPage from "@/components/home/MainPage";
import Navber from "@/components/navberFooter/Navber";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  return <div className="text-3xl w-full h-full relative px-2 py-3 md:py-6 font-bold  font-poppins">
    <div className="w-full h-auto">
      <MainPage/>
    </div>
  </div>;
}
