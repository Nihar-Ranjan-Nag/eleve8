import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Building2,
  ChevronRight,
  GraduationCap,
  Home,
  Info,
  Mail,
  Menu,
  UserRound,
  X,
} from "lucide-react";

import { logoUrl } from "@/lib/site";

const navItems = [
  {
    to: "/",
    label: "Home",
    icon: Home,
  },
  {
    to: "/corporates",
    label: "For Organizations",
    icon: Building2,
  },
  {
    to: "/colleges",
    label: "For Institutions",
    icon: GraduationCap,
  },
  {
    to: "/individuals",
    label: "For Individuals",
    icon: UserRound,
  },
  {
    to: "/about",
    label: "About",
    icon: Info,
  },
  {
    to: "/contact",
    label: "Contact",
    icon: Mail,
  },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* =========================
          FLOATING NAVBAR ONLY
      ========================== */}

      <header
        className={`
          fixed
          inset-x-0
          top-0
          z-50

          bg-transparent

          pointer-events-none

          transition-all
          duration-300

          ${scrolled ? "pt-2" : "pt-3 md:pt-4"}
        `}
      >
        <div
          className="
            pointer-events-auto

            mx-auto
            w-full
            max-w-[1440px]

            px-4
            sm:px-6
            lg:px-8
            xl:px-10
          "
        >
          <div
            className={`
              flex
              h-[64px]

              items-center
              justify-between

              rounded-[1.7rem]

              border
              border-border/70

              bg-[#fbf8f3]/95

              px-4

              backdrop-blur-xl

              transition-all
              duration-300

              sm:h-[68px]
              sm:px-5

              lg:h-[70px]
              lg:px-6

              ${
                scrolled
                  ? "shadow-[0_10px_32px_rgba(0,0,0,0.09)]"
                  : "shadow-[0_3px_14px_rgba(0,0,0,0.055)]"
              }
            `}
          >
            {/* Logo */}

            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="flex shrink-0 items-center"
            >
              <img
                src={logoUrl}
                alt="Elev8 Learning"
                className="
                  h-9
                  w-auto

                  sm:h-10

                  lg:h-11
                "
              />
            </Link>

            {/* Desktop navigation */}

            <nav
              className="
                hidden
                xl:flex
                xl:items-center
                xl:gap-1
              "
            >
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{
                    exact: item.to === "/",
                  }}
                  activeProps={{
                    className:
                      "bg-accent text-primary font-bold",
                  }}
                  className="
                    rounded-full
                    px-3
                    py-2

                    text-[13px]
                    font-semibold

                    text-foreground/75

                    transition-all
                    duration-200

                    hover:bg-accent
                    hover:text-primary

                    2xl:px-4
                    2xl:text-sm
                  "
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
                  duration-300

                  hover:-translate-y-0.5
                  hover:shadow-[0_12px_28px_rgba(190,0,60,0.28)]
                "
              >
                Talk to Elev8
              </Link>
            </nav>

            {/* Mobile menu */}

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

      {/* =========================
          OVERLAY
      ========================== */}

      <div
        onClick={() => setOpen(false)}
        className={`
          fixed
          inset-0
          z-[60]

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

      {/* =========================
          MOBILE SIDEBAR
      ========================== */}

      <aside
        className={`
          fixed
          left-0
          top-0
          z-[70]

          flex
          h-[100dvh]

          w-[82%]
          max-w-[350px]

          flex-col

          overflow-hidden

          border-r
          border-border

          bg-[#fbf8f3]

          shadow-[20px_0_60px_rgba(0,0,0,0.18)]

          transition-transform
          duration-300
          ease-out

          xl:hidden

          ${
            open
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* Sidebar Header */}

        <div
          className="
            flex
            shrink-0
            items-center
            justify-between

            border-b
            border-border

            px-4
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
              className="h-8 w-auto"
            />
          </Link>

          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => setOpen(false)}
            className="
              flex
              size-9

              items-center
              justify-center

              rounded-full

              border
              border-border

              bg-white

              text-foreground

              shadow-sm
            "
          >
            <X className="size-4.5" />
          </button>
        </div>

        {/* Small Intro */}

        <div
          className="
            shrink-0

            border-b
            border-border

            px-4
            py-3
          "
        >
          <p
            className="
              text-[9px]
              font-extrabold
              uppercase
              tracking-[0.17em]
              text-primary
            "
          >
            Elev8 Learning
          </p>

          <p
            className="
              mt-1.5

              text-xs
              leading-5

              text-muted-foreground
            "
          >
            Helping people build skills, confidence and capability.
          </p>
        </div>

        {/* Navigation - NO SCROLL */}

        <nav
          className="
            flex
            flex-1
            flex-col

            justify-center

            overflow-hidden

            px-3
            py-2
          "
        >
          <div className="space-y-1.5">
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
                      "bg-accent text-primary font-extrabold",
                  }}
                  className="
                    group

                    flex
                    items-center

                    rounded-xl

                    px-3
                    py-2.5

                    text-[13px]
                    font-semibold

                    text-foreground/80

                    transition-all

                    hover:bg-accent
                    hover:text-primary
                  "
                >
                  {/* Icon */}

                  <span
                    className="
                      mr-3

                      flex
                      size-9

                      shrink-0

                      items-center
                      justify-center

                      rounded-xl

                      bg-white

                      text-primary

                      shadow-sm

                      transition-all

                      group-hover:bg-primary
                      group-hover:text-white
                    "
                  >
                    <Icon className="size-4" />
                  </span>

                  {/* Label */}

                  <span className="flex-1">
                    {item.label}
                  </span>

                  {/* Arrow */}

                  <ChevronRight
                    className="
                      size-4
                      opacity-40

                      transition-all

                      group-hover:translate-x-1
                      group-hover:opacity-100
                    "
                  />
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Bottom CTA */}

        <div
          className="
            shrink-0

            border-t
            border-border

            p-3
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

              rounded-xl

              bg-primary

              px-4
              py-3

              text-sm
              font-extrabold
              text-white
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