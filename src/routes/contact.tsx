import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import {
  ArrowRight,
  Building2,
  GraduationCap,
  Mail,
  Phone,
  UserRound,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { toast } from "sonner";

import { contact } from "@/lib/site";
import { useReveal } from "@/hooks/useReveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact Elev8 Learning",
      },
      {
        name: "description",
        content:
          "Talk to Elev8 about training for your organization, institution or individual career development.",
      },
    ],
  }),

  component: ContactPage,
});

type Audience =
  | "organization"
  | "institution"
  | "individual";

const audienceOptions = [
  {
    value: "organization" as const,
    label: "Organization",
    icon: Building2,
  },
  {
    value: "institution" as const,
    label: "Institution",
    icon: GraduationCap,
  },
  {
    value: "individual" as const,
    label: "Individual",
    icon: UserRound,
  },
];

function ContactPage() {
  const [audience, setAudience] =
    useState<Audience>("organization");

  const infoRef =
    useReveal<HTMLDivElement>();

  const formRef =
    useReveal<HTMLFormElement>();

  const orgLabels: Record<Audience, string> = {
    organization: "Organization name",
    institution: "Institution / College name",
    individual:
      "Current role / organization (optional)",
  };

  const subjectLabels: Record<Audience, string> = {
    organization: "Organization",
    institution: "Institution",
    individual: "Individual",
  };

  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        className="
          soft-grid
          relative
          overflow-hidden

          border-b
          border-border

          bg-background
        "
      >
        {/* Glows */}

        <div
          className="
            pointer-events-none
            absolute
            -left-20
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
            right-0
            top-0

            size-80

            rounded-full
            bg-rose-100/60

            blur-3xl
          "
        />

        {/* centered content */}

        <div
          className="
            container-page
            relative
            z-10

            flex
            flex-col
            items-center

            py-12

            text-center

            sm:py-16

            md:py-20
          "
        >
          <p className="section-kicker">
            Contact Elev8
          </p>

          <h1
            className="
              mt-4

              max-w-[850px]

              text-[2.45rem]
              font-extrabold
              leading-[0.98]
              tracking-[-0.045em]

              text-foreground

              sm:text-[3rem]

              md:text-[3.6rem]

              lg:text-[4rem]
            "
          >
            Let's build what you{" "}
            <span className="text-primary">
              need next.
            </span>
          </h1>

          <p
            className="
              mt-5

              max-w-2xl

              text-sm
              leading-7

              text-muted-foreground

              sm:text-base

              md:text-lg
            "
          >
            Whether you're a college, organization or individual,
            tell us what you're trying to achieve. We'll help you
            identify the right learning approach.
          </p>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTACT SECTION
      ====================================================== */}

      <section className="bg-secondary/35">
        <div
          className="
            container-page

            grid
            gap-8

            py-12

            sm:py-16

            md:py-20

            lg:grid-cols-[0.72fr_1.28fr]
            lg:gap-10
          "
        >
          {/* =================================================
              LEFT INFO
          ================================================== */}

          <div
            ref={infoRef}
            className="
              reveal-left
              flex
              flex-col
              justify-between
            "
          >
            <div>
              <p className="section-kicker">
                Get in touch
              </p>

              <h2
                className="
                  mt-3

                  text-2xl
                  font-extrabold
                  leading-tight

                  sm:text-3xl
                "
              >
                Start with a simple conversation.
              </h2>

              <p
                className="
                  mt-4

                  text-sm
                  leading-7

                  text-muted-foreground

                  sm:text-base
                "
              >
                Reach us directly or use the enquiry form. We'll
                understand your requirement and take it from there.
              </p>

              <div className="mt-7 space-y-3">
                <ContactItem
                  icon={<Phone className="size-4.5" />}
                  label="Call us"
                  value={contact.phoneDisplay}
                  href={contact.phoneHref}
                />

                <ContactItem
                  icon={<Mail className="size-4.5" />}
                  label="Email"
                  value={contact.email}
                  href={contact.emailHref}
                />

                <ContactItem
                  icon={<FaLinkedinIn className="text-[18px]" />}
                  label="LinkedIn"
                  value="Elev8 Learning"
                  href={contact.linkedin}
                />

                <ContactItem
                  icon={<FaInstagram className="text-[18px]" />}
                  label="Instagram"
                  value={contact.instagramHandle}
                  href={contact.instagram}
                />
              </div>
            </div>

            {/* small info box */}

            <div
              className="
                mt-8

                rounded-2xl

                bg-ink

                p-5

                text-white

                sm:p-6
              "
            >
              <p
                className="
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[.16em]

                  text-white/55
                "
              >
                We work with
              </p>

              <p
                className="
                  mt-2

                  text-sm
                  font-bold
                  leading-6
                "
              >
                Colleges • Organizations • Students • Professionals
              </p>
            </div>
          </div>

          {/* =================================================
              FORM
          ================================================== */}

          <form
            ref={formRef}
            className="
              reveal-right

              rounded-[1.6rem]

              border
              border-border

              bg-card

              p-5

              shadow-xl

              sm:p-7

              md:p-8
            "
            onSubmit={(e) => {
              e.preventDefault();

              const data =
                new FormData(e.currentTarget);

              const subject =
                encodeURIComponent(
                  `${subjectLabels[audience]} learning enquiry — ${String(
                    data.get("organisation") ?? "",
                  )}`,
                );

              const body =
                encodeURIComponent(
                  `Audience: ${subjectLabels[audience]}
Name: ${String(data.get("name") ?? "")}
Organisation / Role: ${String(
                    data.get("organisation") ?? "",
                  )}
Email: ${String(data.get("email") ?? "")}
Phone: ${String(data.get("phone") ?? "")}

Learning requirement:
${String(data.get("message") ?? "")}`,
                );

              window.location.href =
                `${contact.emailHref}?subject=${subject}&body=${body}`;

              toast.success(
                "Opening your email app with the enquiry ready to send.",
              );
            }}
          >
            {/* Form heading */}

            <div>
              <p className="section-kicker">
                Send an enquiry
              </p>

              <h2
                className="
                  mt-3

                  text-2xl
                  font-extrabold

                  sm:text-3xl
                "
              >
                Tell us what you're trying to build.
              </h2>
            </div>

            {/* Audience selection */}

            <div className="mt-6">
              <p
                className="
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[.15em]

                  text-muted-foreground
                "
              >
                I am enquiring for
              </p>

              <div
                className="
                  mt-3

                  grid
                  gap-3

                  sm:grid-cols-3
                "
              >
                {audienceOptions.map((option) => {
                  const Icon = option.icon;

                  const selected =
                    audience === option.value;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() =>
                        setAudience(option.value)
                      }
                      className={`
                        rounded-xl
                        border
                        p-4
                        text-left
                        transition-all
                        duration-200

                        ${
                          selected
                            ? "border-primary bg-accent shadow-sm"
                            : "border-border bg-background hover:border-primary/40"
                        }
                      `}
                    >
                      <div
                        className={`
                          flex
                          size-9

                          items-center
                          justify-center

                          rounded-lg

                          ${
                            selected
                              ? "bg-primary text-white"
                              : "bg-secondary text-primary"
                          }
                        `}
                      >
                        <Icon className="size-4" />
                      </div>

                      <p
                        className={`
                          mt-3

                          text-sm
                          font-extrabold

                          ${
                            selected
                              ? "text-primary"
                              : "text-foreground"
                          }
                        `}
                      >
                        {option.label}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Fields */}

            <div
              className="
                mt-6

                grid
                gap-4

                sm:grid-cols-2
              "
            >
              <Field
                label="Your name"
                name="name"
                required
              />

              <Field
                label={orgLabels[audience]}
                name="organisation"
                required={
                  audience !== "individual"
                }
              />

              <Field
                label="Email"
                name="email"
                type="email"
                required
              />

              <Field
                label="Phone"
                name="phone"
                type="tel"
              />
            </div>

            {/* Message */}

            <label className="mt-4 block">
              <span
                className="
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[.14em]

                  text-muted-foreground
                "
              >
                What do you want to build?
              </span>

              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tell us briefly about your requirement..."
                className="
                  mt-2
                  w-full

                  resize-none

                  rounded-xl

                  border
                  border-input

                  bg-background

                  px-4
                  py-3

                  text-sm

                  outline-none

                  transition

                  placeholder:text-muted-foreground/60

                  focus:border-primary
                  focus:ring-2
                  focus:ring-primary/10
                "
              />
            </label>

            {/* Submit */}

            <button
              type="submit"
              className="
                group

                mt-6

                inline-flex
                w-full

                items-center
                justify-center
                gap-2

                rounded-xl

                bg-primary

                px-6
                py-3.5

                text-sm
                font-extrabold

                text-white

                shadow-[0_10px_25px_rgba(190,0,60,0.20)]

                transition-all

                hover:-translate-y-0.5
                hover:shadow-[0_14px_30px_rgba(190,0,60,0.28)]
              "
            >
              Send enquiry

              <ArrowRight
                className="
                  size-4

                  transition-transform

                  group-hover:translate-x-1
                "
              />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

/* =========================================================
   CONTACT ITEM
========================================================= */

function ContactItem({
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
  const external =
    href.startsWith("http");

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="
        group

        flex
        items-center
        gap-4

        rounded-xl

        border
        border-border

        bg-card

        p-4

        shadow-sm

        transition-all

        hover:border-primary/40
        hover:shadow-md
      "
    >
      <div
        className="
          flex
          size-10
          shrink-0

          items-center
          justify-center

          rounded-xl

          bg-accent

          text-primary

          transition-all

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

            text-muted-foreground
          "
        >
          {label}
        </p>

        <p
          className="
            mt-1

            truncate

            text-sm
            font-extrabold
          "
        >
          {value}
        </p>
      </div>
    </a>
  );
}

/* =========================================================
   FIELD
========================================================= */

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span
        className="
          text-[10px]
          font-extrabold
          uppercase
          tracking-[.14em]

          text-muted-foreground
        "
      >
        {label}
      </span>

      <input
        name={name}
        type={type}
        required={required}
        className="
          mt-2
          w-full

          rounded-xl

          border
          border-input

          bg-background

          px-4
          py-3

          text-sm

          outline-none

          transition

          focus:border-primary
          focus:ring-2
          focus:ring-primary/10
        "
      />
    </label>
  );
}