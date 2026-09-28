import { Link } from "@tanstack/react-router";

import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import {
  contact,
  logoUrl,
} from "@/lib/site";

export function SiteFooter() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/10
        bg-ink
        text-white
      "
    >
      {/* =====================================================
          DECORATIVE BACKGROUND
      ====================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-24
          top-10
          size-72
          rounded-full
          bg-primary/10
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-24
          bottom-0
          size-70
          rounded-full
          bg-primary/10
          blur-3xl
        "
      />

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}
      <div
        className="
          container-page
          relative
          z-10

          py-10
          sm:py-12
          lg:py-14
        "
      >
        <div
          className="
            grid
            gap-9

            lg:grid-cols-[1.05fr_1.95fr]
            lg:items-start
            lg:gap-12
          "
        >
          {/* =================================================
              BRAND
          ================================================== */}
          <div className="max-w-md">
            <Link
              to="/"
              className="
                inline-flex
                items-center
              "
            >
              <img
                src={logoUrl}
                alt="Elev8 Learning"
                className="
                  h-11
                  w-auto
                  object-contain

                  brightness-0
                  invert

                  sm:h-12
                  lg:h-14
                "
              />
            </Link>

            <p
              className="
                mt-4
                max-w-md

                text-[13px]
                leading-6
                text-white/65

                sm:text-sm
                sm:leading-7
              "
            >
              Helping people build the skills, confidence and mindset
              to do work they are proud of, grow in their careers and
              take on what comes next.
            </p>
          </div>

          {/* =================================================
              LINKS / CONTACT GRID

              MOBILE EXACT ORDER:
              Row 1: EXPLORE | GET IN TOUCH
              Row 2: COMPANY | SOCIAL
          ================================================== */}
          <div
            className="
              grid
              grid-cols-2
              gap-x-6
              gap-y-9

              sm:gap-x-10
              sm:gap-y-10

              md:grid-cols-4
              md:gap-8

              lg:gap-9
            "
          >
            {/* =============================================
                1. EXPLORE
            ============================================== */}
            <div>
              <FooterHeading>Explore</FooterHeading>

              <ul
                className="
                  mt-4
                  space-y-2.5

                  text-[13px]
                  font-semibold

                  sm:mt-5
                  sm:space-y-3
                  sm:text-sm
                "
              >
                <li>
                  <FooterLink to="/">Home</FooterLink>
                </li>

                <li>
                  <FooterLink to="/corporates">
                    For Organizations
                  </FooterLink>
                </li>

                <li>
                  <FooterLink to="/colleges">
                    For Institutions
                  </FooterLink>
                </li>

                <li>
                  <FooterLink to="/individuals">
                    For Individuals
                  </FooterLink>
                </li>
              </ul>
            </div>

            {/* =============================================
                2. GET IN TOUCH
            ============================================== */}
            <div>
              <FooterHeading>Get in touch</FooterHeading>

              <div
                className="
                  mt-4
                  space-y-2.5

                  sm:mt-5
                  sm:space-y-3
                "
              >
                <FooterContact
                  icon={<Phone className="size-4" />}
                  label="Call us"
                  value={contact.phoneDisplay}
                  href={contact.phoneHref}
                />

                <FooterContact
                  icon={<Mail className="size-4" />}
                  label="Email"
                  value={contact.email}
                  href={contact.emailHref}
                />

                <div
                  className="
                    flex
                    items-start
                    gap-2.5

                    sm:gap-3
                  "
                >
                  <div
                    className="
                      mt-0.5
                      flex
                      size-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-white/5
                      text-primary
                    "
                  >
                    <MapPin className="size-4" />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        text-[6px]
                        font-extrabold
                        uppercase
                        tracking-[.10em]
                        text-white/40

                        sm:text-[7px]
                      "
                    >
                      Location
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-[9px]
                        leading-[1.35]
                        text-white/70

                        sm:text-[10px]
                        sm:leading-[1.4]
                      "
                    >
                      Bengaluru, Karnataka
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* =============================================
                3. COMPANY
            ============================================== */}
            <div>
              <FooterHeading>Company</FooterHeading>

              <ul
                className="
                  mt-4
                  space-y-2.5

                  text-[13px]
                  font-semibold

                  sm:mt-5
                  sm:space-y-3
                  sm:text-sm
                "
              >
                <li>
                  <FooterLink to="/about">About Us</FooterLink>
                </li>

                <li>
                  <FooterLink to="/contact">Contact</FooterLink>
                </li>
              </ul>
            </div>

            {/* =============================================
                4. SOCIAL
            ============================================== */}
            <div>
              <FooterHeading>Social</FooterHeading>

              <div
                className="
                  mt-4
                  flex
                  items-center
                  gap-3

                  sm:mt-5
                "
              >
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Elev8 Learning LinkedIn"
                  className="
                    flex
                    size-10
                    items-center
                    justify-center
                    rounded-full

                    border
                    border-white/10

                    bg-white/5
                    text-white/80

                    transition-all
                    duration-200

                    hover:-translate-y-0.5
                    hover:border-primary
                    hover:bg-primary
                    hover:text-white
                  "
                >
                  <FaLinkedinIn className="text-[16px]" />
                </a>

                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Elev8 Learning Instagram"
                  className="
                    flex
                    size-10
                    items-center
                    justify-center
                    rounded-full

                    border
                    border-white/10

                    bg-white/5
                    text-white/80

                    transition-all
                    duration-200

                    hover:-translate-y-0.5
                    hover:border-primary
                    hover:bg-primary
                    hover:text-white
                  "
                >
                  <FaInstagram className="text-[17px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM BAR
      ====================================================== */}
      <div
        className="
          relative
          z-10
          border-t
          border-white/10
        "
      >
        <div
          className="
            container-page

            flex
            flex-col
            gap-2

            py-4

            text-[11px]
            text-white/40

            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:gap-3
            sm:py-5
            sm:text-xs
          "
        >
          <p>
            © {new Date().getFullYear()} Elev8 Learning.
            All rights reserved.
          </p>

          <p>
            Practical learning. Real performance.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   FOOTER HEADING
========================================================= */
function FooterHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h3
      className="
        text-[10px]
        font-extrabold
        uppercase
        tracking-[0.18em]
        text-white/40

        sm:text-xs
      "
    >
      {children}
    </h3>
  );
}

/* =========================================================
   FOOTER LINK
========================================================= */
function FooterLink({
  to,
  children,
}: {
  to:
    | "/"
    | "/corporates"
    | "/colleges"
    | "/individuals"
    | "/about"
    | "/contact";
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className="
        group
        inline-flex
        items-center
        gap-2

        text-white/70

        transition-colors

        hover:text-primary
      "
    >
      <span
        className="
          h-px
          w-0
          bg-primary
          transition-all
          group-hover:w-3
        "
      />

      {children}
    </Link>
  );
}

/* =========================================================
   CONTACT ITEM
========================================================= */
function FooterContact({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="
        group
        flex
        items-start
        gap-2

        sm:gap-2.5
      "
    >
      <div
        className="
          mt-0.5
          flex
          size-8
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-white/5
          text-primary

          transition

          group-hover:bg-primary
          group-hover:text-white
        "
      >
        {icon}
      </div>

      <div className="min-w-0">
        <p
          className="
            text-[6px]
            font-extrabold
            uppercase
            tracking-[.10em]
            text-white/40

            sm:text-[7px]
          "
        >
          {label}
        </p>

        <p
          className="
            mt-0.5
            break-words

            text-[9px]
            leading-[1.35]
            text-white/72

            transition

            group-hover:text-white

            sm:text-[10px]
            sm:leading-[1.4]
          "
        >
          {value}
        </p>
      </div>
    </a>
  );
}