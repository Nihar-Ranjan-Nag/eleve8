import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import {
  Building2,
  ChevronRight,
  GraduationCap,
  Home,
  Mail,
  Menu,
  UserRound,
  X,
} from "lucide-react";

import { logoUrl } from "@/lib/site";

const navItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/corporates", label: "For Organizations", icon: Building2 },
  { to: "/colleges", label: "For Institutions", icon: GraduationCap },
  { to: "/individuals", label: "For Individuals", icon: UserRound },
  { to: "/contact", label: "Contact", icon: Mail },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* =====================================================
          HEADER

          IMPORTANT:
          The complete sticky header has a solid background.
          This prevents page sections/cards from showing through
          above or around the floating rounded navigation bar.
      ====================================================== */}
      <header
        className={`
          sticky
          inset-x-0
          top-0
          z-[100]
          w-full

          bg-[#fbf8f3]

          transition-all
          duration-300

          ${
            scrolled
              ? `
                  py-2
                  shadow-[0_3px_14px_rgba(15,23,42,0.035)]
                `
              : `
                  py-0
                `
          }
        `}
      >
        <div
          className={`
            mx-auto
            flex
            w-full
            items-center
            justify-between

            transition-all
            duration-300

            ${
              scrolled
                ? `
                    max-w-[1360px]
                    rounded-[1.4rem]
                    border
                    border-border/70
                    bg-[#fbf8f3]
                    px-4

                    shadow-[0_12px_34px_rgba(15,23,42,0.10)]

                    sm:px-5
                    lg:px-6
                  `
                : `
                    max-w-[1440px]
                    border-b
                    border-transparent
                    bg-[#fbf8f3]
                    px-5

                    sm:px-7
                    lg:px-10
                    xl:px-12
                  `
            }
          `}
        >
          <div
            className={`
              flex
              w-full
              items-center
              justify-between

              transition-[height]
              duration-300

              ${
                scrolled
                  ? "h-[58px] sm:h-[60px] lg:h-[62px]"
                  : "h-[68px] sm:h-[70px] lg:h-[72px]"
              }
            `}
          >
            {/* LOGO */}
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="flex shrink-0 items-center"
            >
              <img
                src={logoUrl}
                alt="Elev8 Learning"
                className={`
                  w-auto
                  transition-[height]
                  duration-300

                  ${
                    scrolled
                      ? "h-9 sm:h-10 lg:h-11"
                      : "h-10 sm:h-[42px] lg:h-[46px]"
                  }
                `}
              />
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden items-center gap-1 xl:flex">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{
                    exact: item.to === "/",
                  }}
                  activeProps={{
                    className: scrolled
                      ? "bg-accent text-primary font-bold"
                      : "bg-accent/70 text-primary font-bold",
                  }}
                  className={`
                    rounded-full
                    px-3
                    py-2

                    text-[13px]
                    font-semibold
                    text-foreground/75

                    transition-all
                    duration-200

                    hover:bg-accent/70
                    hover:text-primary

                    2xl:px-4
                    2xl:text-sm
                  `}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                to="/contact"
                className="
                  ml-2
                  inline-flex
                  items-center
                  justify-center

                  whitespace-nowrap
                  rounded-full
                  bg-primary

                  px-5
                  py-2.5

                  text-[13px]
                  font-extrabold
                  text-white

                  shadow-[0_8px_22px_rgba(190,0,60,0.20)]

                  transition-all
                  duration-200

                  hover:-translate-y-0.5
                  hover:shadow-[0_11px_28px_rgba(190,0,60,0.26)]

                  2xl:px-6
                  2xl:text-sm
                "
              >
                Talk to Elev8
              </Link>
            </nav>

            {/* MOBILE BUTTON */}
            <button
              type="button"
              aria-label="Open navigation"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="
                flex
                size-10
                items-center
                justify-center

                rounded-full

                border
                border-border

                bg-white
                text-foreground

                shadow-sm

                transition-all

                hover:border-primary
                hover:text-primary

                xl:hidden
              "
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          OVERLAY
      ====================================================== */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden={!open}
        className={`
          fixed
          inset-0
          z-[110]

          bg-black/45
          backdrop-blur-[2px]

          transition-opacity
          duration-300

          xl:hidden

          ${
            open
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* =====================================================
          MOBILE SIDEBAR
      ====================================================== */}
      <aside
        className={`
          fixed
          left-0
          top-0
          z-[120]

          flex
          h-[100dvh]

          w-[88%]
          max-w-[390px]

          flex-col

          overflow-hidden

          border-r
          border-border

          bg-[#fbf8f3]

          shadow-[20px_0_60px_rgba(0,0,0,0.20)]

          transition-transform
          duration-300
          ease-out

          xl:hidden

          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* SIDEBAR HEADER */}
        <div
          className="
            flex
            shrink-0
            items-center
            justify-between

            border-b
            border-border

            px-5
            py-4
          "
        >
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center"
          >
            <img
              src={logoUrl}
              alt="Elev8 Learning"
              className="h-11 w-auto"
            />
          </Link>

          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => setOpen(false)}
            className="
              flex
              size-11
              items-center
              justify-center

              rounded-full

              border
              border-border

              bg-white
              text-foreground

              shadow-sm

              transition-all

              hover:border-primary
              hover:text-primary
            "
          >
            <X className="size-5" />
          </button>
        </div>

        {/* SIDEBAR INTRO */}
        <div
          className="
            shrink-0

            border-b
            border-border

            px-5
            py-4
          "
        >
          <p
            className="
              text-[11px]
              font-extrabold
              uppercase
              tracking-[0.18em]
              text-primary
            "
          >
            Elev8 Learning
          </p>

          <p
            className="
              mt-2
              max-w-[290px]

              text-sm
              leading-6
              text-muted-foreground
            "
          >
            Helping people build skills, confidence and capability.
          </p>
        </div>

        {/* NAVIGATION */}
        <nav
          className="
            flex-1
            overflow-y-auto

            px-4
            py-4
          "
        >
          <div className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{
                    exact: item.to === "/",
                  }}
                  activeProps={{
                    className:
                      "bg-[#fde4e4] text-primary font-extrabold",
                  }}
                  className="
                    group

                    flex
                    min-h-[58px]
                    items-center

                    rounded-[1.1rem]

                    px-3
                    py-2.5

                    text-[15px]
                    font-semibold
                    text-foreground/80

                    transition-all
                    duration-200

                    hover:bg-accent
                    hover:text-primary
                  "
                >
                  <span
                    className="
                      mr-3

                      flex
                      size-10
                      shrink-0
                      items-center
                      justify-center

                      rounded-full

                      border
                      border-border

                      bg-white
                      text-primary

                      shadow-sm

                      transition-all

                      group-hover:border-primary
                      group-hover:bg-primary
                      group-hover:text-white
                    "
                  >
                    <Icon className="size-[18px]" />
                  </span>

                  <span className="flex-1">{item.label}</span>

                  <ChevronRight
                    className="
                      size-[18px]
                      text-foreground/30

                      transition-all

                      group-hover:translate-x-1
                      group-hover:text-primary
                    "
                  />
                </Link>
              );
            })}
          </div>
        </nav>

        {/* BOTTOM CTA */}
        <div
          className="
            shrink-0

            border-t
            border-border

            bg-[#fbf8f3]

            p-4
          "
        >
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="
              flex
              w-full
              items-center
              justify-center
              gap-2

              rounded-full

              bg-primary

              px-5
              py-3.5

              text-[15px]
              font-extrabold
              text-white

              shadow-[0_10px_25px_rgba(190,0,60,0.20)]

              transition-all

              hover:opacity-90
            "
          >
            Talk to Elev8

            <ChevronRight className="size-4" />
          </Link>
        </div>
      </aside>
    </>
  );
}