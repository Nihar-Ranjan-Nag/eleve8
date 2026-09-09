import { Link } from "@tanstack/react-router";

import {
  ArrowRight,
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
        className="
          pointer-events-none
          absolute
          -right-24
          bottom-0

          size-80

          rounded-full

          bg-primary/10

          blur-3xl
        "
      />

      {/* =====================================================
          TOP CTA
      ====================================================== */}

      <div
        className="
          relative
          z-10

          border-b
          border-white/10
        "
      >
        <div
          className="
            container-page

            flex
            flex-col
            gap-5

            py-8

            sm:py-10

            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <div>
            <p
              className="
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.16em]

                text-white/50

                sm:text-xs
              "
            >
              Ready to get started?
            </p>

            <h2
              className="
                mt-2

                max-w-2xl

                text-2xl
                font-extrabold
                leading-tight

                sm:text-3xl
              "
            >
              Let's build the right learning experience for your
              people or students.
            </h2>
          </div>

          <Link
            to="/contact"
            className="
              group

              inline-flex
              w-full
              shrink-0

              items-center
              justify-center
              gap-2

              rounded-full

              bg-primary

              px-6
              py-3.5

              text-sm
              font-extrabold

              text-white

              shadow-[0_12px_30px_rgba(190,0,60,0.25)]

              transition-all

              hover:-translate-y-0.5

              sm:w-auto
            "
          >
            Talk to Elev8

            <ArrowRight
              className="
                size-4

                transition-transform

                group-hover:translate-x-1
              "
            />
          </Link>
        </div>
      </div>

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div
        className="
          container-page
          relative
          z-10

          grid
          gap-10

          py-12

          sm:py-14

          md:grid-cols-2

          lg:grid-cols-[1.3fr_.7fr_.7fr_1fr]
          lg:gap-12
        "
      >
        {/* =================================================
            BRAND COLUMN
        ================================================== */}

        <div>
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
                h-12
                w-auto
                object-contain

                brightness-0
                invert

                sm:h-14

                lg:h-16
              "
            />
          </Link>

          <p
            className="
              mt-5
              max-w-md

              text-sm
              leading-7

              text-white/65
            "
          >
            Helping people build the skills, confidence and mindset
            to do work they are proud of, grow in their careers and
            take on what comes next.
          </p>

          {/* Social icons */}

          <div
            className="
              mt-6

              flex
              items-center
              gap-3
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

                hover:border-primary
                hover:bg-primary
                hover:text-white
              "
            >
              <FaInstagram className="text-[17px]" />
            </a>
          </div>
        </div>

        {/* =================================================
            EXPLORE
        ================================================== */}

        <div>
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
            Explore
          </h3>

          <ul
            className="
              mt-5

              space-y-3

              text-sm
              font-semibold
            "
          >
            <li>
              <FooterLink to="/">
                Home
              </FooterLink>
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

        {/* =================================================
            COMPANY
        ================================================== */}

        <div>
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
            Company
          </h3>

          <ul
            className="
              mt-5

              space-y-3

              text-sm
              font-semibold
            "
          >
            <li>
              <FooterLink to="/about">
                About Us
              </FooterLink>
            </li>

            <li>
              <FooterLink to="/contact">
                Contact
              </FooterLink>
            </li>
          </ul>
        </div>

        {/* =================================================
            CONTACT
        ================================================== */}

        <div>
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
            Get in touch
          </h3>

          <div
            className="
              mt-5

              space-y-4
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

            {/*
              If your site object has an address field,
              replace this text with contact.address
            */}

            <div
              className="
                flex
                items-start
                gap-3
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
                "
              >
                <MapPin className="size-4" />
              </div>

              <div>
                <p
                  className="
                    text-[9px]
                    font-extrabold
                    uppercase
                    tracking-[.14em]

                    text-white/35
                  "
                >
                  Location
                </p>

                <p
                  className="
                    mt-1

                    text-sm
                    leading-6

                    text-white/65
                  "
                >
                  Bengaluru, Karnataka
                </p>
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
            gap-3

            py-5

            text-xs
            text-white/40

            sm:flex-row
            sm:items-center
            sm:justify-between
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
        gap-3
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
            text-[9px]
            font-extrabold
            uppercase
            tracking-[.14em]

            text-white/35
          "
        >
          {label}
        </p>

        <p
          className="
            mt-1

            break-words

            text-sm
            leading-6

            text-white/70

            transition

            group-hover:text-white
          "
        >
          {value}
        </p>
      </div>
    </a>
  );
}