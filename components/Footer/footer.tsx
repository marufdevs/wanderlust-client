import { NewsletterForm } from "@/components/Footer/newsletter-form"

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Destinations", href: "#destinations" },
  { label: "My Bookings", href: "#bookings" },
  { label: "My Profile", href: "#profile" },
]

const supportLinks = [
  { label: "Help Center", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
]

const socials = [
  { label: "X (Twitter)", href: "#", icon: XIcon },
  { label: "LinkedIn", href: "#", icon: LinkedinIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
]

function XIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function LinkedinIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.554V9h3.565v11.452z" />
    </svg>
  )
}

function InstagramIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function FooterLinkColumn({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div>
      <h3 className="font-display text-[11px] font-medium tracking-[0.08em] text-white uppercase">
        {title}
      </h3>
      <ul className="mt-5 space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div>
          <p className="font-display text-[clamp(2.5rem,6vw,4rem)] leading-[1.1] font-bold tracking-[-0.01em] text-white">
            Wanderlast
          </p>
          <p className="mt-4 text-sm text-white/80">
            Your gateway to extraordinary travel experiences around the world.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 md:mt-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="col-span-2 sm:col-span-1">
            <h3 className="font-display text-[11px] font-medium tracking-[0.08em] text-white uppercase">
              Newsletter
            </h3>
            <p className="mt-5 text-[13px] text-white/70">
              Subscribe for exclusive travel deals and inspiration.
            </p>
            <NewsletterForm />
          </div>
          <FooterLinkColumn title="Quick Links" links={quickLinks} />
          <FooterLinkColumn title="Support" links={supportLinks} />
          <div className="col-span-2 sm:col-span-1">
            <h3 className="font-display text-[11px] font-medium tracking-[0.08em] text-white uppercase">
              Contact Us
            </h3>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href="tel:7869011622"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  786 901 1622
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@wandartland.com"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  info@wandartland.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-white/70">
            © 2026 Wanderlast. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-white transition-opacity hover:opacity-70"
              >
                <social.icon className="size-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
