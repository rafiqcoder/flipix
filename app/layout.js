import Canvas from "@/components/canvas/Canvas";
import "./globals.css";
import Navber from "@/components/navberFooter/Navber";
import SmoothScroll from "@/components/lenis/SmoothScroll";
import ToolkitProvider from "@/toolkit/ToolkitProvider";

export const metadata = {
  icons: {
    icon: "https://flipix.in/assets/images/Flipix-fevicon.png",
  },
  title: "FlipiX | Feeling Wali Filpbook",
  description: "Feeling Wali Filpbook",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` h-auto w-full antialiased`}>
      <body className="">
        <SmoothScroll />
        <ToolkitProvider>
          <Canvas />
          <Navber />
          {children}
        </ToolkitProvider>
      </body>
    </html>
  );
}
