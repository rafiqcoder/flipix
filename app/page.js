import Navber from "@/components/navberFooter/Navber";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  return <div className="text-3xl py-3 md:py-6 font-bold w-full h-full font-poppins">
    <div className="w-full h-full">
      <div className="max-w-[350px] bg-[#ffffff0d] border border-[#ffffff1a] rounded-xl px-5 py-4 overflow-hidden">

        <Image className=" rounded-xl" src={'https://flipix.in/assets/images/rajawedsrani_41_15/001Coverfirst.jpg'} alt="img" width={400} height={400} />
        <p className="font-semibold flex items-center justify-center py-2 gap-1 pt-4 text-lg text-[#f4c720]">
          Click & Feel Demo <IoIosArrowForward/>
        </p>
      </div>
      <div>

      </div>
    </div>
  </div>;
}
