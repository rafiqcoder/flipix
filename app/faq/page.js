export default function () {
  const faqs = [
  {
    question: "1. What is Flipix?",
    answer:
      "Flipix is a 3D wedding album viewer that allows photographers and studios to showcase their albums online. You can also add your own branding to the albums.",
  },
  {
    question: "2. How does Flipix work?",
    answer:
      "You simply upload your album images, and Flipix converts them into an interactive 3D album. You can then easily share it with your clients.",
  },
  {
    question:
      "3. What are Flipix India's monthly and yearly plans for Photographer/Studio?",
    plans: [
      { text: "Monthly Plan", price: "₹199 (Create up to 40 albums)" },
      { text: "Yearly Plan", price: " ₹999 (Unlimited album creations)" },
    ],
    answer: (
      <div>
        <div className="flex items-center gap-3">
          <h3>Monthly Plan - </h3>
          <p>₹199 (Create up to 40 albums)</p>
        </div>
        <div className="flex items-center gap-3">
          <h3>Year Plan - </h3>
          <p>₹999 (Unlimited album creations)</p>
        </div>
      </div>
    ),
  },
  {
    question: "4. Can I add branding or Social Media link in Flipix?",
    answer:
      "Yes, you can add your studio or company Name to the albums. Also add your website, all social media with your Contact No & location.",
  },
  {
    question: "5. Can I add/change music to Flipix albums?",
    answer:
      "Yes, you can add or change background music to albums as per your choice , which enhances the overall experience.",
  },
  {
    question: "6. Kya Flipix me mera data surakshit rahega?",
    answer:
      "Haan, Flipix sabse zyada surakshit platform hai. Aapka data end-to-end encrypted hota hai aur secure servers par store hota hai. Hum kisi bhi third party ke saath aapka data share nahi karte hain. Flipix me automated backups aur high-level security measures hamesha active rehte hain taaki aapke albums hamesha safe rahein.",
  },
  {
    question: "7. Does Flipix allow editing albums after creation?",
    answer: "Yes, you can make changes to the album until it is deleted.",
  },
  {
    question: "8. Does Flipix work offline?",
    answer:
      "No, Flipix is an online platform and requires an internet connection to view albums.",
  },
  {
    question: "9. Flipix albums kitne time tak store rahengi?",
    answer:
      "Flipix albums bahut lambe duration tak store rahengi. Agar aapka recharge khatam ho jaye, tab bhi aapki albums chalti rahengi, sirf studio ki branding disable ho jayegi. Jitni jaldi aap recharge karenge, branding wapas enable ho jayegi.",
  },
  {
    question:
      "10. Kya Printing & Design Labs ke liye Flipix ka koi alag version hai?",
    answer: (
      <>
        <p>
          Haan, Flipix ka ek Hyper Model available hai, jo specifically
          printing aur design labs ke liye banaya gaya hai. Is model me system
          zyada fast aur bulk album processing ke liye optimized hai.
        </p>
        <ul className=" mt-2">
          <li className=" py-1.5">
            1. 9 alag-alag pricing plans available hain jo lab ki needs ke
            according customize kiye gaye hain.
          </li>
          <li className=" py-1.5">
            2. Labs directly albums create karke photographers ke naam se
            upload kar sakti hain.
          </li>
          <li className=" py-1.5">
            3. Agar photographer ka personal Flipix plan active nahi hai
            (recharge nahi kiya hai), to uski branding disable rahegi.
          </li>
          <li className=" py-1.5">
            4. Personal ID ke bina photographer apni branding add nahi kar
            sakta.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "11. Kya Flipix ka free trial available hai?",
    answer:
      "Haan, Flipix studio/photographers ke liye free trial available hai. Aap 7 din ke liye ya 3 albums ke liye Flipix ka free trial le sakte hain. Is free trial me aap Flipix ke saare features explore kar sakte hain bina kisi cost ke.",
  },
];
  const mid = Math.ceil(faqs.length / 2);
  const columns = [faqs.slice(0, mid), faqs.slice(mid)];
  console.log(columns);
  
  return (
    <>
      <section className=" w-full flex flex-col items-center justify-center md:py-7 py-4 lg:py-12 px-4">
        <div className="w-full max-w-6xl">
          <div className="mb-12">
            <h2 className=" md:text-4xl text-3xl lg:text-5xl font-medium text-white text-center">
              FAQ&apos;s
            </h2>
            <h1 className=" md:text-3xl text-2xl lg:text-4xl font-bold text-center mt-3 mb-3 tracking-wider text-[#f0a500]">
              Flipix India
            </h1>
            <p className="text-neutral-100 max-w-[540px] text-base/6 text-center mx-auto mt-5">
              Find answers to the most frequently asked questions about our
              platform, features, pricing and how we help businesses grow
              faster.
            </p>
          </div>

          <input
            id="faq-none"
            name="faq-accordion"
            type="radio"
            className="hidden"
            defaultChecked
          />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-y-0">
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-4">
                {column.map((faq, idx) => (
                  <details
                    key={faq.question}
                    name="faq-accordion"
                    className="group rounded-lg border border-neutral-800 bg-neutral-950 transition-all duration-300 hover:bg-neutral-900"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-3.5 [&::-webkit-details-marker]:hidden">
                      <span className="text-sm font-medium text-neutral-100">
                        {faq.question}
                      </span>
                      <div className="shrink-0 rounded p-1 text-neutral-100 transition-colors hover:bg-neutral-800">
                        <svg
                          className="block group-open:hidden"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5v14" />
                        </svg>
                        <svg
                          className="hidden group-open:block"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                        </svg>
                      </div>
                    </summary>
                    <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 ease-in-out group-open:grid-rows-[1fr] group-open:opacity-100">
                      <div className="overflow-hidden">
                        <div className="px-3.5 pb-3.5 text-sm leading-relaxed text-neutral-300">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
