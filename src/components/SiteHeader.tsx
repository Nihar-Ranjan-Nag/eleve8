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
    document.body.style.overflow = open
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* =====================================================
          FLOATING NAVBAR
      ====================================================== */}

      <header
        className={`
          fixed
          inset-x-0
          top-0
          z-50

          pointer-events-none
          bg-transparent

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

            px-3
            sm:px-5
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

              rounded-[1.6rem]

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
            {/* LOGO */}

            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="
                flex
                shrink-0
                items-center
              "
            >
              <img
                src={logoUrl}
                alt="Elev8 Learning"
                className="
                  h-10
                  w-auto

                  sm:h-11

                  lg:h-12
                "
              />
            </Link>

            {/* DESKTOP NAV */}

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

                  hover:-translate-y-0.5

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

      {/* =====================================================
          MOBILE SIDEBAR
      ====================================================== */}

      <aside
        className={`
          fixed
          left-0
          top-0
          z-[70]

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

          ${
            open
              ? "translate-x-0"
              : "-translate-x-full"
          }
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
              className="
                h-11
                w-auto
              "
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
            Helping people build skills, confidence and
            capability.
          </p>
        </div>

        {/* =================================================
            NAVIGATION
            No vertical centering = removes large empty gap
        ================================================== */}

        <nav
          className="
            flex-1

            overflow-hidden

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
                  {/* ICON */}

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

                  {/* LABEL */}

                  <span className="flex-1">
                    {item.label}
                  </span>

                  {/* ARROW */}

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

        {/* =================================================
            BOTTOM CTA
        ================================================== */}

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