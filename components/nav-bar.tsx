"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, User, X } from "lucide-react"

import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "Destinations", href: "#destinations" },
  { label: "My Bookings", href: "#bookings" },
  { label: "Admin", href: "#admin" },
]

const linkClass =
  "text-xs font-medium text-neutral-900 transition-colors hover:text-[#15A1BF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#15A1BF]"

function NavBar() {
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav
        aria-label="Main navigation"
        className="relative flex h-12 items-center justify-center px-4 md:px-6"
      >
        <div className="absolute inset-y-0 left-4 hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              aria-current={link.active ? "page" : undefined}
              className={cn(linkClass, link.active && "text-[#15A1BF]")}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="absolute inset-y-0 left-4 flex items-center text-neutral-900 md:hidden"
        >
          {menuOpen ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>

        <Link
          href="/"
          aria-label="Wanderlast home"
          className="relative z-10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#15A1BF]"
        >
          <Image
            src="/Images/Wanderlast.png"
            alt="Wanderlast"
            width={162}
            height={24}
            className="h-6 w-auto"
          />
        </Link>

        <div className="absolute inset-y-0 right-4 flex items-center gap-5">
          <Link
            href="#profile"
            className={cn(linkClass, "flex items-center gap-1.5")}
          >
            <User className="size-3.5" strokeWidth={1.8} aria-hidden="true" />
            <span className="hidden sm:inline">Profile</span>
          </Link>
          <Link href="#login" className={cn(linkClass, "hidden md:inline")}>
            Login
          </Link>
          <Link href="#signup" className={cn(linkClass, "hidden md:inline")}>
            Sign Up
          </Link>
        </div>

        {menuOpen && (
          <div
            id="mobile-navigation"
            className="absolute inset-x-0 top-full border-t border-neutral-100 bg-white px-4 py-3 shadow-lg md:hidden"
          >
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-current={link.active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "rounded-sm px-2 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 hover:text-[#15A1BF]",
                    link.active && "text-[#15A1BF]"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="my-2 h-px bg-neutral-200" />
              <Link
                href="#login"
                onClick={() => setMenuOpen(false)}
                className="rounded-sm px-2 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 hover:text-[#15A1BF]"
              >
                Login
              </Link>
              <Link
                href="#signup"
                onClick={() => setMenuOpen(false)}
                className="rounded-sm px-2 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 hover:text-[#15A1BF]"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export { NavBar }
