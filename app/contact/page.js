import { CiPhone, CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import Form from "./Form";
export const metadata = {
  title: "Contact Form",
  description: "contact form",
};
export default function page() {
  const contactInfo = [
    {
      icon: <CiPhone />,
      title: "Phone",
      value: "+91 91620 72838",
    },
    {
      icon: <CiMail />,
      title: "Email",
      value: "hello@flipix.in",
    },
    {
      icon: <IoLocationOutline />,
      title: "Address",
      value: "Flipix India, Delhi",
    },
  ];

  return (
    <div className="min-h-screen relative font-poppins flex items-center justify-center px-2 lg:px-4 overflow-hidden">
      {/* Card */}
      <div className="relative w-full max-w-lg backdrop-blur-xl bg-white/5 border border-yellow-400/20 rounded-3xl md:p-4 p-2 lg:p-6 shadow-[0_0_30px_rgba(255,200,0,0.15)]">
        <div>
          <h1 className="text-center md:text-3xl text-2xl lg:text-4xl font-bold text-white tracking-widest">
            FLIPI<span className="text-yellow-400">X</span>
          </h1>

          <h2 className="text-center text-yellow-400 md:text-xl text-lg lg:text-2xl font-semibold mt-2 lg:mt-3">
            CONTACT US
          </h2>

          <p className="text-center text-gray-400 text-sm mt-1 md:mb-4 mb-3 lg:mb-6">
            We're here to help with your 3D album needs!
          </p>

          {/* Info */}
          <div className="space-y-3 md:mb-4 mb-2 lg:mb-6">
            {contactInfo.map(({ title, icon, value }, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1.5 md:gap-3 bg-white/5 border border-yellow-400/20 rounded-xl px-2 lg:px-4 py-1.5 lg:py-3"
              >
                <div className="text-yellow-400">{icon}</div>
                <div>
                  <p className="text-yellow-400 text-xs">{title}</p>
                  <p className="text-gray-300 text-sm">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
}
