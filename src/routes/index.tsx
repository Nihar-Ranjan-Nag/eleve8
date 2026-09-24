import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BrainCircuit,
  Building2,
  CheckCircle2,
  ChevronDown,
  GraduationCap,
  MessageSquareText,
  Sparkles,
  UserRound,
  UsersRound,
} from "lucide-react";

import landingHero from "@/assets/landing/heroRight.png";
import individualImage from "@/assets/landing/individual.png";
import institutionImage from "@/assets/landing/organization.png";
import organizationImage from "@/assets/landing/institution.png";

import {
  gallery,
  photos,
  remoteImages,
  stats,
} from "@/lib/site";

import { useCountUp } from "@/hooks/useCountUp";
import {
  useReveal,
  useRevealChildren,
} from "@/hooks/useReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Elev8 Learning — Skills Training for Colleges, Companies & Professionals",
      },
      {
        name: "description",
        content:
          "Elev8 Learning delivers practical skills training, placement readiness, workplace capability development and career-focused learning for institutions, organizations and individuals.",
      },
    ],
  }),

  component: HomePage,
});

/* =========================================================
   AUDIENCE CARDS
========================================================= */

const audienceCards = [
  {
    to: "/individuals" as const,
    eyebrow: "For",
    label: "Individuals",
    subtitle: "Career skills that help people move forward.",
    benefits: [
      "Public Speaking & Interviews",
      "Professional Communication",
      "Career Confidence & Growth",
    ],
    buttonLabel: "View programs",
    image: individualImage,
    bg: "bg-[#fff3f7]",
    border: "border-[#f6c9d9]",
    accent: "text-primary",
    iconColor: "text-primary",
    buttonBorder: "border-[#f4bfd2]",
    buttonText: "text-primary",
    imagePosition: "object-[center_54%]",
    icon: UserRound,
  },

  {
    to: "/colleges" as const,
    eyebrow: "For",
    label: "Institutions",
    subtitle: "Placement readiness that mirrors how companies hire.",
    benefits: [
      "Aptitude & Technical Readiness",
      "Mock Tests & Interviews",
      "Company-Specific Preparation",
    ],
    buttonLabel: "View programs",
    image: institutionImage,
    bg: "bg-[#eef5ff]",
    border: "border-[#c8dcff]",
    accent: "text-[#1857d7]",
    iconColor: "text-[#1857d7]",
    buttonBorder: "border-[#bdd3ff]",
    buttonText: "text-[#1857d7]",
    imagePosition: "object-[center_center]",
    icon: GraduationCap,
  },

  {
    to: "/corporates" as const,
    eyebrow: "For",
    label: "Organizations",
    subtitle: "Capability programs built around real business needs.",
    benefits: [
      "Communication & Leadership",
      "AI, Digital & Technical Skills",
      "Role-Based Capability Programs",
    ],
    buttonLabel: "View programs",
    image: organizationImage,
    bg: "bg-[#f2f5f9]",
    border: "border-[#d9e0ea]",
    accent: "text-[#0f254f]",
    iconColor: "text-[#0f254f]",
    buttonBorder: "border-[#d4dbe5]",
    buttonText: "text-[#0f254f]",
    imagePosition: "object-[center_center]",
    icon: Building2,
  },
];

/* =========================================================
   CAPABILITY CARDS
========================================================= */

const capabilityCards = [
  {
    title: "Communication Skills",
    text:
      "Business communication, public speaking, executive communication, listening, negotiation, storytelling and workplace conversations.",
    image: remoteImages.communication,
    icon: MessageSquareText,
  },

  {
    title: "Leadership & Management",
    text:
      "First-time managers, delegation, coaching, performance conversations, strategic thinking, influencing and executive presence.",
    image: remoteImages.leadership,
    icon: UsersRound,
  },

  {
    title: "AI & Digital Skills",
    text:
      "AI productivity, prompt engineering, AI for business functions, AI-assisted analysis and responsible workplace use.",
    image: remoteImages.aiDigital,
    icon: BrainCircuit,
  },
];

/* =========================================================
   STAT COMPONENT
========================================================= */

function Stat({
  stat,
}: {
  stat: (typeof stats)[number];
}) {
  const [display, ref] =
    useCountUp<HTMLParagraphElement>(
      stat.numericEnd,
      {
        duration: 2200,
        suffix: stat.suffix,
      },
    );

  return (
    <div
      className="
        reveal-child
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-5
        text-center
      "
    >
      <p
        ref={ref}
        className="
          stat-value
          text-3xl
          font-extrabold
          sm:text-4xl
        "
      >
        {display}
      </p>

      <p
        className="
          mt-1
          text-xs
          text-white/65
          sm:text-sm
        "
      >
        {stat.label}
      </p>
    </div>
  );
}

/* =========================================================
   HOME PAGE
========================================================= */

function HomePage() {
  const heroText =
    useReveal<HTMLDivElement>();

  const heroVisual =
    useReveal<HTMLDivElement>();

  const audienceRef =
    useRevealChildren<HTMLDivElement>();

  const statRef =
    useRevealChildren<HTMLDivElement>();

  const capabilityRef =
    useRevealChildren<HTMLDivElement>();

  const galleryRef =
    useRevealChildren<HTMLDivElement>();

  const workRef = useRef<HTMLDivElement>(null);
  const workStepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [workProgress, setWorkProgress] = useState(0);
  const [activeWorkStep, setActiveWorkStep] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateWorkProgress = () => {
      ticking = false;

      const wrapper = workRef.current;
      const steps = workStepRefs.current.filter(
        (step): step is HTMLDivElement => Boolean(step),
      );

      if (!wrapper || !steps.length) return;

      const rect = wrapper.getBoundingClientRect();
      const viewportAnchor = window.innerHeight * 0.42;
      const start = viewportAnchor;
      const end = viewportAnchor - rect.height;
      const raw = (start - rect.top) / (start - end);
      const progress = Math.max(0, Math.min(1, raw));

      setWorkProgress(progress);

      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      steps.forEach((step, index) => {
        const stepRect = step.getBoundingClientRect();
        const stepCenter = stepRect.top + stepRect.height / 2;
        const distance = Math.abs(stepCenter - viewportAnchor);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveWorkStep(closestIndex);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateWorkProgress);
    };

    updateWorkProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        className="
          relative
          isolate
          overflow-hidden
          border-b
          border-border
          bg-[#fdfafa]

          lg:h-[580px]
          xl:h-[600px]
          2xl:h-[620px]
        "
      >
        {/* =====================================================
            HERO BASE TONE

            Matches the natural fade already built into heroRight.png.
            No extra fade is added over the artwork.
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-0
            bg-[linear-gradient(90deg,#fdfafa_0%,#fdfafa_30%,#fdf8f7_43%,#fdfafa_56%)]
          "
        />

        {/* =====================================================
            DESKTOP HERO ART
        ====================================================== */}

        <div
          ref={heroVisual}
          className="
            reveal-right
            pointer-events-none
            absolute
            inset-y-0
            right-0
            z-0
            hidden
            lg:block
          "
        >
          <img
            src={landingHero}
            alt=""
            aria-hidden="true"
            className="
              block
              h-full
              w-auto
              max-w-none
              object-contain
              object-right
            "
          />
        </div>

        {/* =====================================================
            MAIN HERO CONTENT
        ====================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            w-full
            max-w-[1500px]
            flex-col

            px-5
            py-8

            min-[390px]:px-6
            min-[390px]:py-9

            sm:px-8
            sm:py-10

            md:px-10
            md:py-11

            lg:h-full
            lg:justify-center
            lg:px-12
            lg:py-7

            xl:px-14
            2xl:px-16
          "
        >
          {/* ================= LEFT CONTENT ================= */}

          <div
            ref={heroText}
            className="
              reveal-left
              relative
              z-20
              w-full
              max-w-none

              lg:max-w-[630px]
              xl:max-w-[680px]
              2xl:max-w-[710px]
            "
          >
            {/* Tag */}

            <div
              className="
                inline-flex
                max-w-full
                items-center
                gap-2
                rounded-full
                border
                border-primary/20
                bg-white/90
                px-3
                py-2
                shadow-sm
                backdrop-blur-sm

                sm:px-4
              "
            >
              <Sparkles className="size-3.5 shrink-0 text-primary" />

              <span
                className="
                  min-w-0
                  text-[8px]
                  font-extrabold
                  uppercase
                  leading-4
                  tracking-[0.14em]
                  text-primary

                  min-[390px]:text-[9px]
                  min-[390px]:tracking-[0.18em]

                  sm:text-[10px]
                  sm:tracking-[0.2em]

                  md:text-[11px]
                "
              >
                Skills Today. A Brighter Tomorrow.
              </span>
            </div>

            {/* Heading */}

            <h1
              className="
                mt-5
                text-[clamp(2.5rem,12vw,3rem)]
                font-extrabold
                leading-[0.94]
                tracking-[-0.055em]
                text-[#0b1020]

                min-[390px]:text-[clamp(2.75rem,11.5vw,3.3rem)]

                sm:text-[3.45rem]
                md:text-[4rem]

                lg:text-[4.15rem]
                xl:text-[4.5rem]
                2xl:text-[4.75rem]
              "
            >
              Helping People

              <span className="block">
                Become Their
              </span>

              <span className="block text-primary">
                Best at Work.
              </span>
            </h1>

            {/* Description */}

            <p
              className="
                mt-5
                max-w-[640px]
                text-[0.93rem]
                font-medium
                leading-6
                text-[#60636d]

                min-[390px]:text-[0.96rem]

                sm:mt-6
                sm:text-[1.03rem]
                sm:leading-8

                lg:max-w-[610px]
                lg:text-[1.04rem]
              "
            >
              We help people build the skills, confidence, and mindset to do work
              they’re proud of, grow in their careers, and take on what comes next.
            </p>

            {/* Buttons */}

            <div
              className="
                mt-6
                flex
                w-full
                flex-col
                gap-3

                min-[430px]:w-auto
                min-[430px]:flex-row
                min-[430px]:items-center

                sm:mt-7
              "
            >
              <Link
                to="/contact"
                className="
                  group
                  inline-flex
                  min-h-[48px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-primary
                  px-7
                  py-3.5
                  text-sm
                  font-extrabold
                  text-white
                  shadow-[0_12px_30px_rgba(190,0,60,0.20)]
                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:shadow-[0_16px_36px_rgba(190,0,60,0.28)]

                  min-[430px]:w-auto
                "
              >
                Talk to Elev8

                <ArrowRight
                  className="
                    size-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              <a
                href="#who-we-help"
                className="
                  group
                  inline-flex
                  min-h-[48px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-primary/30
                  bg-white/90
                  px-7
                  py-3.5
                  text-sm
                  font-extrabold
                  text-[#0b1020]
                  shadow-sm
                  transition-all
                  duration-300

                  hover:border-primary
                  hover:bg-white
                  hover:text-primary

                  min-[430px]:w-auto
                "
              >
                See Programs

                <ArrowRight
                  className="
                    size-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>
            </div>
          </div>

          {/* =================================================
              MOBILE / TABLET HERO ART

              Full-bleed on small screens so it feels like part of
              the hero instead of a small image inside the content.
              The artwork already contains its own left-side fade.
          ================================================== */}

          <div
            className="
              relative
              left-1/2
              mt-7
              w-screen
              -translate-x-1/2
              overflow-hidden

              sm:mt-9

              lg:hidden
            "
          >
            <img
              src={landingHero}
              alt="Elev8 learning pathways for individuals, institutions and organizations"
              className="
                block
                h-auto
                w-full
                object-contain
              "
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          SKILLS MARQUEE
      ====================================================== */}

      <section
        className="
          border-b
          border-border
          bg-ink
          text-white
        "
      >
        <div
          className="
            marquee-shell
            py-4
          "
        >
          <div
            className="
              marquee-track

              gap-10
              pr-10

              text-xs
              font-extrabold
              uppercase

              tracking-[0.18em]

              text-white/75
            "
          >
            {[
              "Placement Readiness",
              "Communication Skills",
              "Leadership",
              "AI & Digital Skills",
              "Technical Readiness",
              "Career Development",
              "Mock Drives",
              "Professional Skills",

              "Placement Readiness",
              "Communication Skills",
              "Leadership",
              "AI & Digital Skills",
              "Technical Readiness",
              "Career Development",
              "Mock Drives",
              "Professional Skills",
            ].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="whitespace-nowrap"
              >
                • {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHO WE WORK WITH
      ====================================================== */}

      <section
        id="who-we-help"
        className="
          scroll-mt-28
          overflow-hidden
          border-b
          border-border
          bg-[linear-gradient(180deg,#fffafa_0%,#f8fbff_52%,#ffffff_100%)]
        "
      >
        <div
          className="
            container-page
            py-9
            sm:py-10
            md:py-12
          "
        >
          {/* SECTION HEADING */}
          <div className="mx-auto max-w-[760px] text-center">
            <p
              className="
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.2em]
                text-primary
                sm:text-[11px]
              "
            >
              Choose your learning path
            </p>

            <h2
              className="
                mt-3
                text-[1.7rem]
                font-extrabold
                leading-[1]
                tracking-[-0.04em]
                text-[#0b1020]
                sm:text-[2rem]
                md:text-[2.2rem]
                lg:text-[2.45rem]
              "
            >
              Who we <span className="text-primary">work with.</span>
            </h2>

            <p
              className="
                mx-auto
                mt-3
                max-w-2xl
                text-[0.88rem]
                leading-6
                text-muted-foreground
                sm:text-[0.95rem]
              "
            >
              Three focused learning journeys for individuals, institutions and
              organizations — designed around clear outcomes.
            </p>
          </div>

          {/* IMAGE-BACKGROUND CARDS */}
          <div
            ref={audienceRef}
            className="
              mx-auto
              mt-8
              grid
              max-w-[1240px]
              gap-4
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {audienceCards.map((card) => {
              const Icon = card.icon;

              return (
                <Link
                  to={card.to}
                  key={card.label}
                  className={`
                    reveal-child
                    group
                    relative
                    isolate
                    h-[500px]
                    overflow-hidden
                    rounded-[28px]
                    border
                    bg-white
                    shadow-[0_10px_28px_rgba(15,23,42,0.07)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_18px_38px_rgba(15,23,42,0.12)]
                    sm:h-[515px]
                    lg:h-[500px]
                    ${card.border}
                  `}
                >
                  {/* FULL CARD BACKGROUND IMAGE */}
                  <img
                    src={card.image}
                    alt={`${card.label} training and development`}
                    className={`
                      absolute
                      z-0
                      max-w-none
                      object-cover
                      opacity-100
                      transition-all
                      duration-500
                      ease-out
                      ${
                        card.label === "Individuals"
                          ? "-inset-[28px] h-[calc(100%+56px)] w-[calc(100%+56px)] scale-[0.92] group-hover:scale-[0.945]"
                          : "-inset-[12px] h-[calc(100%+24px)] w-[calc(100%+24px)] scale-100 group-hover:scale-[1.025]"
                      }
                      group-hover:blur-[3px]
                      group-hover:brightness-[0.68]
                      group-hover:saturate-[0.92]
                      ${card.imagePosition}
                    `}
                  />

                  {/* LIGHT TINT — CLEAR BY DEFAULT, STRONGER ON HOVER */}
                  <div
                    className={`
                      pointer-events-none
                      absolute
                      inset-0
                      z-[1]
                      transition-all
                      duration-500
                      ${
                        card.label === "Individuals"
                          ? "bg-[linear-gradient(180deg,rgba(255,240,246,0.70)_0%,rgba(255,240,246,0.46)_36%,rgba(255,240,246,0.08)_66%,rgba(255,240,246,0.00)_100%)]"
                          : card.label === "Institutions"
                          ? "bg-[linear-gradient(180deg,rgba(238,245,255,0.70)_0%,rgba(238,245,255,0.46)_36%,rgba(238,245,255,0.08)_66%,rgba(238,245,255,0.00)_100%)]"
                          : "bg-[linear-gradient(180deg,rgba(242,245,249,0.70)_0%,rgba(242,245,249,0.46)_36%,rgba(242,245,249,0.08)_66%,rgba(242,245,249,0.00)_100%)]"
                      }
                    `}
                  />

                  {/* HOVER READABILITY LAYER — TEXT STAYS SHARP */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      z-[2]
                      bg-white/0
                      transition-all
                      duration-500
                      group-hover:bg-white/18
                      group-hover:backdrop-blur-[1px]
                    "
                  />

                  {/* CONTENT — NO OPAQUE BACKGROUND */}
                  <div
                    className="
                      relative
                      z-20
                      flex
                      h-full
                      flex-col
                      items-center
                      px-5
                      pt-6
                      sm:px-6
                      text-center
                    "
                  >
                    {/* Icon */}
                    <div
                      className="
                        flex
                        size-[46px]
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/90
                        bg-white/90
                        shadow-[0_6px_18px_rgba(15,23,42,0.10)]
                        backdrop-blur-[2px]
                      "
                    >
                      <Icon
                        className={`size-[20px] ${card.iconColor}`}
                        strokeWidth={2.2}
                      />
                    </div>

                    {/* For */}
                    <p
                      className="
                        mt-3
                        text-[12px]
                        font-semibold
                        leading-none
                        text-[#22304a]/90
                        [text-shadow:0_1px_3px_rgba(255,255,255,0.95)]
                        transition-all
                        duration-300
                        group-hover:text-[#111827]
                        group-hover:[text-shadow:0_2px_8px_rgba(255,255,255,1)]
                      "
                    >
                      {card.eyebrow}
                    </p>

                    {/* Title */}
                    <h3
                      className={`
                        mt-1
                        text-[18px]
                        font-extrabold
                        leading-[1]
                        tracking-[-0.03em]
                        [text-shadow:0_1px_4px_rgba(255,255,255,0.95)]
                        transition-all
                        duration-300
                        group-hover:[text-shadow:0_2px_10px_rgba(255,255,255,1)]
                        sm:text-[20px]
                        ${card.accent}
                      `}
                    >
                      {card.label}
                    </h3>

                    {/* Subtitle */}
                    <p
                      className="
                        mt-3
                        max-w-[270px]
                        text-[13px]
                        font-medium
                        leading-5
                        text-[#34435a]
                        [text-shadow:0_1px_4px_rgba(255,255,255,0.95)]
                        transition-all
                        duration-300
                        group-hover:text-[#111827]
                        group-hover:[text-shadow:0_2px_8px_rgba(255,255,255,1)]
                      "
                    >
                      {card.subtitle}
                    </p>

                    {/* Benefits */}
                    <ul
  className="
    mt-6
    mx-auto
    flex
    w-fit
    flex-col
    items-start
    space-y-2.5
  "
>
  {card.benefits.map((benefit) => (
    <li
      key={benefit}
      className="
        flex
        items-center
        gap-2.5
        whitespace-nowrap
        text-[13px]
        font-semibold
        leading-[1.35]
        text-[#1f2f45]
        [text-shadow:0_1px_4px_rgba(255,255,255,0.98)]
        transition-all
        duration-300
        group-hover:text-[#111827]
        group-hover:[text-shadow:0_2px_8px_rgba(255,255,255,1)]
      "
    >
      <CheckCircle2
        className={`size-[16px] shrink-0 ${card.accent}`}
        strokeWidth={2.5}
      />
      <span>{benefit}</span>
    </li>
  ))}
</ul>

                    {/* Button */}
                    <div className="mt-6">
                      <span
                        className={`
                          inline-flex
                          min-h-[38px]
                          items-center
                          justify-center
                          gap-2
                          rounded-full
                          border
                          bg-white/92
                          px-5
                          text-[12px]
                          font-semibold
                          shadow-[0_6px_16px_rgba(15,23,42,0.10)]
                          backdrop-blur-[3px]
                          transition-all
                          duration-300
                          hover:bg-white
                          group-hover:bg-white
                          group-hover:shadow-[0_10px_24px_rgba(15,23,42,0.16)]
                          ${card.buttonBorder}
                          ${card.buttonText}
                        `}
                      >
                        {card.buttonLabel}
                        <ArrowRight className="size-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ====================================================== */}

      <section
        className="
          bg-ink
          text-white
        "
      >
        <div
          ref={statRef}
          className="
            container-page

            grid
            grid-cols-2

            gap-4

            py-10

            md:grid-cols-4
            md:py-14
          "
        >
          {stats.map((stat) => (
            <Stat
              key={stat.label}
              stat={stat}
            />
          ))}
        </div>
      </section>

      {/* =====================================================
          CAPABILITY AREAS
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-b
          border-border
          bg-[linear-gradient(180deg,#fffdfb_0%,#fff8f5_48%,#ffffff_100%)]
        "
      >
        {/* soft decorative background */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_12%_10%,rgba(190,0,60,0.055),transparent_28%),radial-gradient(circle_at_88%_20%,rgba(59,130,246,0.06),transparent_30%)]
          "
        />

        <div
          className="
            container-page
            relative
            z-10
            py-12
            sm:py-14
            md:py-16
            lg:py-20
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              mx-auto
              max-w-[900px]
              text-center
            "
          >
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-primary/15
                bg-white/85
                px-4
                py-2
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.2em]
                text-primary
                shadow-sm
                backdrop-blur-sm
                sm:text-[11px]
              "
            >
              <Sparkles className="size-3.5" />
              Core capability areas
            </div>

            <h2
              className="
                 mt-3
                text-[1.7rem]
                font-extrabold
                leading-[1]
                tracking-[-0.04em]
                text-[#0b1020]
                sm:text-[2rem]
                md:text-[2.2rem]
                lg:text-[2.45rem]
              "
            >
              Skills people can <span className="text-primary">actually use.</span>
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-sm
                leading-6
                text-muted-foreground
                sm:text-[0.98rem]
                sm:leading-7
              "
            >
              Practical capability building for the moments that matter — from
              communication and leadership to AI-enabled workplace performance.
            </p>
          </div>

          {/* CAPABILITY CARDS */}
          <div
            ref={capabilityRef}
            className="
              mx-auto
              mt-9
              grid
              max-w-[1240px]
              gap-5
              sm:mt-10
              md:grid-cols-2
              lg:grid-cols-3
              lg:gap-6
            "
          >
            {capabilityCards.map((card) => {
              const Icon = card.icon;

              return (
                <article
                  key={card.title}
                  className="
                    reveal-child
                    group
                    relative
                    isolate
                    h-[430px]
                    overflow-hidden
                    rounded-[1.75rem]
                    border
                    border-border/80
                    bg-white
                    shadow-[0_16px_36px_rgba(15,23,42,0.08)]
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:shadow-[0_22px_50px_rgba(15,23,42,0.13)]
                    sm:h-[450px]
                    md:h-[470px]
                    lg:h-[490px]
                  "
                >
                  {/* FULL IMAGE */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      object-center
                      transition-all
                      duration-700
                      ease-out
                      group-hover:scale-[1.035]
                      group-hover:brightness-[0.72]
                    "
                  />

                  {/* subtle image depth */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/50
                      via-black/5
                      to-black/0
                      transition-all
                      duration-500
                      group-hover:from-black/60
                    "
                  />

                  {/* INITIAL TITLE - desktop hover state */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      bottom-0
                      z-10
                      hidden
                      px-5
                      pb-5
                      transition-all
                      duration-500
                      md:block
                      group-hover:translate-y-3
                      group-hover:opacity-0
                    "
                  >
                    <div
                      className="
                        inline-flex
                        items-center
                        gap-3
                        rounded-2xl
                        bg-white/95
                        px-4
                        py-3
                        shadow-lg
                        backdrop-blur-md
                      "
                    >
                      <span
                        className="
                          flex
                          size-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-accent
                          text-primary
                        "
                      >
                        <Icon className="size-5" />
                      </span>

                      <h3
                        className="
                          text-base
                          font-extrabold
                          leading-tight
                          text-[#0b1020]
                          lg:text-[1.05rem]
                        "
                      >
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  {/* SLIDING WHITE PANEL
                      Mobile/tablet: visible by default (no hover dependency)
                      Desktop: starts collapsed, slides up on hover/focus */}
                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      z-20
                      bg-white/97
                      px-5
                      pb-5
                      pt-5
                      shadow-[0_-16px_40px_rgba(15,23,42,0.12)]
                      backdrop-blur-md
                      transition-transform
                      duration-500
                      ease-[cubic-bezier(0.22,1,0.36,1)]

                      sm:px-6
                      sm:pb-6
                      sm:pt-6

                      md:translate-y-[calc(100%-82px)]
                      md:group-hover:translate-y-0
                      md:group-focus-within:translate-y-0
                    "
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="
                          flex
                          size-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-2xl
                          bg-accent
                          text-primary
                        "
                      >
                        <Icon className="size-5" />
                      </div>

                      <div className="min-w-0">
                        <p
                          className="
                            text-[10px]
                            font-extrabold
                            uppercase
                            tracking-[0.18em]
                            text-primary/80
                          "
                        >
                          Capability area
                        </p>

                        <h3
                          className="
                            mt-1
                            text-xl
                            font-extrabold
                            leading-tight
                            tracking-[-0.03em]
                            text-[#0b1020]
                          "
                        >
                          {card.title}
                        </h3>
                      </div>
                    </div>

                    <p
                      className="
                        mt-4
                        text-sm
                        leading-6
                        text-muted-foreground
                      "
                    >
                      {card.text}
                    </p>

                    <div
                      className="
                        mt-5
                        flex
                        items-center
                        justify-between
                        border-t
                        border-border/70
                        pt-4
                      "
                    >
                      <span
                        className="
                          text-[11px]
                          font-extrabold
                          uppercase
                          tracking-[0.15em]
                          text-[#0b1020]/50
                        "
                      >
                        Practical • Applied • Relevant
                      </span>

                      <span
                        className="
                          flex
                          size-9
                          items-center
                          justify-center
                          rounded-full
                          bg-primary
                          text-white
                          shadow-[0_8px_18px_rgba(190,0,60,0.22)]
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      >
                        <ArrowRight className="size-4" />
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div
            className="
              mt-8
              flex
              justify-center
              sm:mt-10
            "
          >
            <Link
              to="/corporates"
              className="
                inline-flex
                min-h-[44px]
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-primary/25
                bg-white
                px-6
                py-3
                text-sm
                font-extrabold
                text-primary
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-primary
                hover:bg-accent
              "
            >
              See all six capability areas
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW WE WORK
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-b
          border-border
          bg-[linear-gradient(180deg,#fffafa_0%,#fffdfb_52%,#f8fbff_100%)]
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_12%_12%,rgba(190,0,60,0.075),transparent_28%),radial-gradient(circle_at_88%_82%,rgba(190,0,60,0.04),transparent_30%)]
          "
        />

        <div
          className="
            container-page
            relative
            z-10
            py-11
            sm:py-13
            md:py-14
          "
        >
          {/* HEADING */}
          <div className="mx-auto max-w-[860px] text-center">
            <div
              className="
                inline-flex
                items-center
                gap-2.5
                rounded-full
                border
                border-primary/25
                bg-primary/[0.06]
                px-5
                py-2.5
                text-[12px]
                font-extrabold
                uppercase
                tracking-[0.22em]
                text-primary
                shadow-[0_6px_18px_rgba(190,0,60,0.08)]
                sm:text-[13px]
              "
            >
              <Sparkles className="size-[17px]" />
              How we work
            </div>

            <h2
              className="
                 mt-3
                text-[1.7rem]
                font-extrabold
                leading-[1]
                tracking-[-0.04em]
                text-[#0b1020]
                sm:text-[2rem]
                md:text-[2.2rem]
                lg:text-[2.45rem]
              "
            >
              A practical path from need to{" "}
              <span className="text-primary">
                measurable performance.
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-3
                max-w-[700px]
                text-[0.9rem]
                leading-6
                text-muted-foreground
                sm:text-[0.98rem]
              "
            >
              Scroll through the journey. The process line moves from top to
              bottom, while each connected step and card highlights in sequence.
            </p>
          </div>

          {/* PROCESS TREE */}
          <div
            ref={workRef}
            className="
              relative
              mx-auto
              mt-8
              max-w-[1080px]
              sm:mt-9
              md:mt-10
            "
          >
            {/* BASE TRUNK */}
            <div
              className="
                pointer-events-none
                absolute
                bottom-8
                left-[28px]
                top-0
                w-[5px]
                rounded-full
                bg-primary/10
                md:left-1/2
                md:-translate-x-1/2
              "
            />

            {/* WEBSITE-THEME SCROLL FILL */}
            <div
              className="
                pointer-events-none
                absolute
                left-[28px]
                top-0
                z-[2]
                w-[5px]
                rounded-full
                bg-gradient-to-b
                from-primary/60
                via-primary
                to-primary
                shadow-[0_0_14px_rgba(190,0,60,0.26)]
                transition-[height]
                duration-150
                ease-out
                md:left-1/2
                md:-translate-x-1/2
              "
              style={{ height: `${workProgress * 100}%` }}
            />

            {[
              {
                number: "01",
                title: "Understand the requirement",
                body:
                  "We map the audience, goals, roles, hiring context and workplace challenges before design begins.",
              },
              {
                number: "02",
                title: "Define outcomes",
                body:
                  "We clarify what better performance, stronger capability or improved placement readiness should look like.",
              },
              {
                number: "03",
                title: "Design the learning journey",
                body:
                  "Modules, activities, assessments and practice are shaped around the outcome instead of a generic catalogue.",
              },
              {
                number: "04",
                title: "Deliver practical learning",
                body:
                  "Sessions use discussions, simulations, exercises, mock tests, interviews and real-world scenarios.",
              },
              {
                number: "05",
                title: "Assess progress",
                body:
                  "Practice, feedback and assessment show where progress is strong and where additional support is needed.",
              },
              {
                number: "06",
                title: "Reinforce performance",
                body:
                  "Follow-up and reinforcement help move learning into stronger day-to-day workplace or recruitment performance.",
              },
            ].map((step, index) => {
              const isLeft = index % 2 === 0;
              const isActive = activeWorkStep === index;
              const isPassed = activeWorkStep > index;

              return (
                <div
                  key={step.number}
                  ref={(node) => {
                    workStepRefs.current[index] = node;
                  }}
                  className="
                    relative
                    grid
                    min-h-[142px]
                    grid-cols-[60px_1fr]
                    gap-3
                    pb-4
                    last:pb-0

                    sm:min-h-[148px]

                    md:min-h-[152px]
                    md:grid-cols-[1fr_94px_1fr]
                    md:items-center
                    md:gap-0
                  "
                >
                  {/* CARD */}
                  <article
                    className={`
                      relative
                      overflow-hidden
                      rounded-[28px]
                      border
                      px-5
                      py-5
                      text-left
                      transition-all
                      duration-500
                      sm:px-6
                      sm:py-5

                      ${
                        isLeft
                          ? "md:col-start-1"
                          : "md:col-start-3"
                      }

                      ${
                        isActive
                          ? "-translate-y-1 border-primary/65 bg-white shadow-[0_20px_48px_rgba(190,0,60,0.16)] ring-1 ring-primary/10"
                          : isPassed
                          ? "border-primary/28 bg-white/98 shadow-[0_11px_30px_rgba(15,23,42,0.075)]"
                          : "border-[#e7dde1] bg-white/88 shadow-[0_8px_24px_rgba(15,23,42,0.055)]"
                      }
                    `}
                  >
                    {/* STEP NUMBER STARTS FROM LEFT EDGE */}
                    <div className="flex items-center gap-3">
                      <span
                        className={`
                          inline-flex
                          min-w-[66px]
                          items-center
                          justify-center
                          rounded-full
                          border
                          px-3
                          py-1.5
                          text-[12px]
                          font-extrabold
                          uppercase
                          tracking-[0.08em]
                          transition-all
                          duration-300
                          sm:min-w-[72px]
                          sm:text-[13px]

                          ${
                            isActive
                              ? "border-primary bg-primary text-white shadow-[0_7px_18px_rgba(190,0,60,0.22)]"
                              : isPassed
                              ? "border-primary/25 bg-primary/10 text-primary"
                              : "border-primary/15 bg-primary/[0.05] text-primary/75"
                          }
                        `}
                      >
                        {step.number}
                      </span>

                      <span
                        className={`
                          text-[11px]
                          font-extrabold
                          uppercase
                          tracking-[0.16em]
                          transition-colors
                          duration-300

                          ${
                            isActive
                              ? "text-primary"
                              : "text-[#7b6b72]"
                          }
                        `}
                      >
                        Step
                      </span>
                    </div>

                    <h3
                      className="
                        mt-3
                        text-[1.12rem]
                        font-extrabold
                        leading-tight
                        tracking-[-0.025em]
                        text-[#0b1020]
                        sm:text-[1.2rem]
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        max-w-[470px]
                        text-[13.5px]
                        leading-6
                        text-muted-foreground
                        sm:text-[14px]
                      "
                    >
                      {step.body}
                    </p>

                    {/* stronger active accent */}
                    <div
                      className={`
                        pointer-events-none
                        absolute
                        inset-x-0
                        bottom-0
                        h-[4px]
                        origin-left
                        bg-primary
                        transition-transform
                        duration-500

                        ${
                          isActive || isPassed
                            ? "scale-x-100"
                            : "scale-x-0"
                        }
                      `}
                    />
                  </article>

                  {/* NODE + BRANCH */}
                  <div
                    className="
                      relative
                      z-10
                      col-start-1
                      row-start-1
                      flex
                      justify-center
                      pt-2

                      md:col-start-2
                      md:row-start-1
                      md:items-center
                      md:pt-0
                    "
                  >
                    {/* BRANCH */}
                    <div
                      className={`
                        pointer-events-none
                        absolute
                        top-[29px]
                        h-[4px]
                        rounded-full
                        transition-all
                        duration-500

                        md:top-1/2
                        md:w-[47px]
                        md:-translate-y-1/2

                        ${
                          isActive || isPassed
                            ? "w-[34px] bg-primary opacity-100 shadow-[0_0_8px_rgba(190,0,60,0.18)]"
                            : "w-[28px] bg-primary/15 opacity-100"
                        }

                        ${
                          isLeft
                            ? "left-[29px] origin-right md:left-0"
                            : "left-[29px] origin-left md:right-0 md:left-auto"
                        }
                      `}
                    />

                    {/* BIGGER STEP NODE */}
                    <div
                      className={`
                        relative
                        z-10
                        flex
                        size-[50px]
                        items-center
                        justify-center
                        rounded-full
                        border-[5px]
                        border-white
                        text-[12px]
                        font-extrabold
                        transition-all
                        duration-500
                        sm:size-[54px]
                        sm:text-[13px]

                        ${
                          isActive
                            ? "scale-110 bg-primary text-white shadow-[0_12px_28px_rgba(190,0,60,0.30)]"
                            : isPassed
                            ? "bg-primary text-white shadow-[0_8px_20px_rgba(190,0,60,0.20)]"
                            : "bg-white text-primary/70 shadow-[0_6px_18px_rgba(15,23,42,0.09)]"
                        }
                      `}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* OPPOSITE SIDE SPACER */}
                  <div
                    className={`
                      hidden
                      md:block
                      ${
                        isLeft
                          ? "md:col-start-3"
                          : "md:col-start-1 md:row-start-1"
                      }
                    `}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          GALLERY
      ====================================================== */}

      <section
        className="
          border-b
          border-border
          bg-background
        "
      >
        <div
          className="
            container-page
            py-16
            md:py-24
          "
        >
          <div
            className="
              flex
              flex-col

              justify-between

              gap-4

              md:flex-row
              md:items-end
            "
          >
            <div>
              <p className="section-kicker">
                Elev8 in action
              </p>

              <h2 className="section-title">
                Real sessions.{" "}
                <span className="text-primary">
                  Real people.
                </span>
              </h2>
            </div>

            <p
              className="
                max-w-lg
                text-sm
                text-muted-foreground
              "
            >
              Actual Elev8 training photographs
              are used throughout the site so
              the brand feels credible, human
              and grounded.
            </p>
          </div>

          <div
            ref={galleryRef}
            className="
              mt-10

              grid
              grid-cols-2

              gap-3

              md:grid-cols-4
              md:gap-5
            "
          >
            {gallery.map(
              (item, index) => (
                <div
                  key={item.src}
                  className={`
                    reveal-child
                    gallery-img
                    rounded-2xl

                    ${
                      index === 0 ||
                      index === 5
                        ? "md:col-span-2"
                        : ""
                    }
                  `}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="
                      h-48
                      w-full

                      object-cover

                      sm:h-52
                      md:h-64
                    "
                  />
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section
        className="
          bg-primary
          text-white
        "
      >
        <div
          className="
            container-page

            grid

            gap-8

            py-14

            lg:grid-cols-[1fr_auto]
            lg:items-center
          "
        >
          <div>
            <p
              className="
                text-xs
                font-extrabold
                uppercase

                tracking-[0.18em]

                text-white/70
              "
            >
              Start with the outcome
            </p>

            <h2
              className="
                mt-3

                max-w-3xl

                text-2xl
                font-extrabold
                leading-tight

                sm:text-3xl
              "
            >
              Tell us who you want to develop
              and what better performance
              should look like.
            </h2>
          </div>

          <Link
            to="/contact"
            className="
              inline-flex
              items-center
              justify-center
              gap-2

              rounded-full

              bg-white

              px-6
              py-3.5

              text-sm
              font-extrabold

              text-foreground
            "
          >
            Start a conversation

            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}