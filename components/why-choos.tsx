import Image from "next/image"

const benefits = [
  {
    title: "Safe & Secure",
    description:
      "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
    icon: "/Images/ShieldCheck.png",
  },
  {
    title: "Expert Guides",
    description:
      "Local experts who bring destinations to life with authentic cultural insights.",
    icon: "/Images/MapTrifold.png",
  },
  {
    title: "24/7 Support",
    description:
      "Round-the-clock customer service to assist you wherever your journey takes you.",
    icon: "/Images/Headset.png",
  },
]

function WhyChoos() {
  return (
    <section
      aria-labelledby="why-choos-heading"
      className="bg-[#EEF9FC] py-14 md:py-16"
    >
      <div className="mx-auto w-full max-w-[820px] px-5">
        <div className="text-center">
          <h2
            id="why-choos-heading"
            className="text-[32px] leading-none font-medium tracking-[-0.02em] text-neutral-950"
          >
            Why Choose Wanderlust
          </h2>
          <p className="mt-2 text-[11px] text-neutral-500">
            Your trusted partner for exceptional travel experiences
          </p>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="flex flex-col rounded-sm border border-black/5 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
            >
              <Image
                src={benefit.icon}
                alt=""
                width={32}
                height={32}
                className="size-8"
              />
              <h3 className="mt-3 text-[20px] leading-[1.1] font-normal text-neutral-950">
                {benefit.title}
              </h3>
              <p className="mt-2 text-[10px] leading-[1.5] text-neutral-600">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export { WhyChoos }
