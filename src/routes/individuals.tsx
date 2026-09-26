import { createFileRoute, Link } from "@tanstack/react-router";

import { useEffect, useRef, useState } from "react";

import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Briefcase,
  CheckCircle2,
  MessageSquare,
  Presentation,
  Sparkles,
  Target,
  UserRound,
} from "lucide-react";

import { photos, remoteImages } from "@/lib/site";
import landingHero from "@/assets/landingHero.png";

import {
  useReveal,
  useRevealChildren,
} from "@/hooks/useReveal";

export const Route = createFileRoute("/individuals")({
  head: () => ({
    meta: [
      {
        title:
          "For Individuals — Communication, Career & Professional Skills | Elev8",
      },
      {
        name: "description",
        content:
          "Practical learning for individuals who want to improve communication, public speaking, interview confidence, professional effectiveness and career readiness.",
      },
    ],
  }),

  component: IndividualsPage,
});

/* =========================================================
   SKILL AREAS
========================================================= */

const areas = [
  [
    MessageSquare,
    "Communication",
    "Communicate ideas with greater clarity and confidence in everyday professional situations.",
    remoteImages.communication,
  ],
  [
    Presentation,
    "Public Speaking",
    "Build confidence for presentations, meetings and high-stakes conversations.",
    remoteImages.publicSpeaking,
  ],
  [
    Briefcase,
    "Career Readiness",
    "Strengthen the professional skills that help you prepare for and navigate career opportunities.",
    remoteImages.career,
  ],
  [
    Target,
    "Interview Confidence",
    "Practice structured, confident communication for interviews and career conversations.",
    remoteImages.interview,
  ],
  [
    Sparkles,
    "Professional Effectiveness",
    "Build habits and practical skills that help you perform better at work.",
    remoteImages.professional,
  ],
  [
    UserRound,
    "Personal Growth",
    "Develop confidence, self-awareness and the mindset to take your next step.",
    remoteImages.growth,
  ],
] as const;

/* =========================================================
   PROCESS
========================================================= */

const process = [
  [
    "01",
    "Identify the moment",
    "Interview, presentation, communication challenge, professional growth or a specific career transition.",
  ],
  [
    "02",
    "Build the skill",
    "Focused concepts, frameworks and examples make the skill clear and usable.",
  ],
  [
    "03",
    "Practice it",
    "Speaking, role-play, mock interview or activity-based practice turns knowledge into capability.",
  ],
  [
    "04",
    "Improve with feedback",
    "Structured feedback helps you understand what to keep, change and repeat until it feels natural.",
  ],
] as const;

/* =========================================================
   OUTCOMES
========================================================= */

const outcomes = [
  [
    "Clarity",
    "Know what to say and how to structure it.",
  ],
  [
    "Confidence",
    "Practice until high-pressure moments feel manageable.",
  ],
  [
    "Professional Presence",
    "Communicate in a way that builds credibility and trust.",
  ],
] as const;

/* =========================================================
   PAGE
========================================================= */

function IndividualsPage() {
  const heroText = useReveal<HTMLDivElement>();
  const heroVisual = useReveal<HTMLDivElement>();

  const cardRef =
    useRevealChildren<HTMLDivElement>();

  const [activeSkill, setActiveSkill] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSkill((current) =>
        (current + 1) % areas.length,
      );
    }, 3200);

    return () => window.clearInterval(intervalId);
  }, []);

  const previousSkill = () => {
    setActiveSkill((current) =>
      (current - 1 + areas.length) % areas.length,
    );
  };

  const nextSkill = () => {
    setActiveSkill((current) =>
      (current + 1) % areas.length,
    );
  };

  const visibleSkills = [-2, -1, 0, 1, 2].map((offset) => {
    const index =
      (activeSkill + offset + areas.length) %
      areas.length;

    return {
      data: areas[index],
      index,
      offset,
    };
  });

  const processRef =
    useRevealChildren<HTMLDivElement>();

  const processSequenceRef =
    useRef<HTMLDivElement>(null);

  const [activeProcessStep, setActiveProcessStep] =
    useState(-1);

  useEffect(() => {
    const section = processSequenceRef.current;

    if (!section) return;

    let intervalId: number | null = null;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const stopSequence = () => {
      if (intervalId !== null) {
        window.clearInterval(intervalId);
        intervalId = null;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          stopSequence();
          setActiveProcessStep(-1);
          return;
        }

        if (reduceMotion) {
          setActiveProcessStep(0);
          return;
        }

        stopSequence();
        setActiveProcessStep(0);

        intervalId = window.setInterval(() => {
          setActiveProcessStep((current) =>
            current >= process.length - 1
              ? 0
              : current + 1,
          );
        }, 1000);
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(section);

    return () => {
      stopSequence();
      observer.disconnect();
    };
  }, []);

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
        {/* decorative glow */}
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

            md:size-80
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

            bg-rose-100/70

            blur-3xl

            md:size-96
          "
        />

        {/* MAIN HERO WRAPPER */}

        <div
          className="
            relative
            z-10
            mx-auto

            grid
            w-full
            max-w-[1440px]

            items-center

            gap-7

            px-4
            py-4

            sm:px-6
            sm:py-5

            md:px-8
            md:py-6

            lg:min-h-0
            lg:grid-cols-[0.98fr_1.02fr]
            lg:gap-8
            lg:px-10
            lg:py-4

            xl:grid-cols-[0.96fr_1.04fr]
            xl:gap-10

            2xl:max-w-[1500px]
          "
        >
          {/* ================= LEFT CONTENT ================= */}

          <div
            ref={heroText}
            className="
              reveal-left
              relative
              z-20

              max-w-[650px]

              lg:translate-x-10
              xl:translate-x-14
              2xl:translate-x-16
            "
          >
            <div
              className="
                mx-auto
                inline-flex
                items-center
                gap-2.5

                rounded-full

                border
                border-primary/20

                bg-white/90

                py-1.5
                pl-1.5
                pr-4

                shadow-[0_8px_24px_rgba(196,0,79,0.10)]
                backdrop-blur-sm
              "
            >
              <span
                className="
                  flex
                  size-8
                  shrink-0
                  items-center
                  justify-center

                  rounded-full
                  bg-primary

                  shadow-[0_5px_14px_rgba(196,0,79,0.22)]
                "
              >
                <UserRound
                  className="size-4 text-white"
                  strokeWidth={2.5}
                />
              </span>

              <span
                className="
                  text-[11px]
                  font-extrabold
                  uppercase
                  tracking-[0.15em]

                  text-primary

                  sm:text-xs
                "
              >
                For Individuals
              </span>

              <span
                className="
                  hidden
                  h-4
                  w-px
                  bg-primary/15

                  sm:block
                "
              />

              <span
                className="
                  hidden
                  text-[11px]
                  font-bold
                  text-foreground/45

                  sm:inline
                "
              >
                Learn • Grow • Progress
              </span>
            </div>

            <h1
              className="
                mt-3

                text-[2.15rem]
                font-extrabold
                leading-[0.98]
                tracking-[-0.045em]

                text-foreground

                sm:text-[2.65rem]

                md:text-[3rem]

                lg:text-[3.15rem]

                xl:text-[3.45rem]

                2xl:text-[3.65rem]
              "
            >
              Practical skills for{" "}
              <span className="text-primary">
                real career moments.
              </span>
            </h1>

            <p
              className="
                mt-4
                max-w-[620px]

                text-sm
                leading-7

                text-muted-foreground

                sm:text-base

                lg:text-[1.02rem]
                lg:leading-7
              "
            >
              Elev8 helps individuals build communication,
              confidence, interview readiness and professional
              effectiveness — the skills that often decide how
              well you perform when an opportunity matters.
            </p>

            {/* Highlight card */}

            <div
              className="
                mt-4
                max-w-[600px]

                rounded-2xl

                border
                border-border
                border-l-4
                border-l-primary

                bg-card

                px-4
                py-3.5

                shadow-sm
              "
            >
              <p
                className="
                  text-sm
                  font-extrabold

                  sm:text-base
                "
              >
                Build the skills and confidence to grow, perform
                better, and take your next step.
              </p>
            </div>

            {/* Buttons */}

            <div
              className="
                mt-5

                flex
                flex-col
                gap-3

                min-[440px]:flex-row
                min-[440px]:flex-wrap
              "
            >
              <Link
                to="/contact"
                className="
                  cta-glow

                  inline-flex
                  items-center
                  justify-center
                  gap-2

                  rounded-full

                  bg-primary

                  px-6
                  py-3

                  text-sm
                  font-extrabold

                  text-white
                "
              >
                Talk to Elev8

                <ArrowRight className="size-4" />
              </Link>

              <a
                href="#individual-skills"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2

                  rounded-full

                  border
                  border-foreground/20

                  bg-card

                  px-6
                  py-3

                  text-sm
                  font-extrabold

                  transition

                  hover:border-primary
                  hover:text-primary
                "
              >
                Explore skills

                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>

          {/* ================= RIGHT VISUAL ================= */}

          <div
            ref={heroVisual}
            className="
              reveal-right
              relative

              mx-auto
              w-full
              min-w-0
              max-w-[560px]

              sm:max-w-[610px]

              lg:mx-auto
              lg:max-w-[620px]

              xl:max-w-[660px]
            "
          >
            <div
              className="
                group
                relative
              "
            >
              <img
                src={landingHero}
                alt="Elev8 learning and career development"
                className="
                  mx-auto
                  block
                  h-auto
                  max-h-[440px]
                  w-full

                  object-contain

                  sm:max-h-[500px]

                  lg:max-h-[540px]

                  xl:max-h-[570px]

                  transition-transform
                  duration-700
                  ease-out

                  group-hover:scale-[1.015]

                  motion-reduce:transform-none
                  motion-reduce:transition-none
                "
              />
            </div>

            {/* small supporting badge */}
            <div
              className="
                absolute
                bottom-3
                left-1/2

                hidden
                -translate-x-1/2
                items-center
                gap-2.5

                whitespace-nowrap

                rounded-full

                border
                border-white/60

                bg-white/90

                px-4
                py-2.5

                shadow-[0_10px_28px_rgba(15,23,42,0.10)]
                backdrop-blur-md

                md:flex

                lg:bottom-4
              "
            >
              <span
                className="
                  flex
                  size-7
                  items-center
                  justify-center

                  rounded-full

                  bg-primary
                "
              >
                <CheckCircle2 className="size-4 text-white" />
              </span>

              <span
                className="
                  text-xs
                  font-extrabold
                  text-foreground
                "
              >
                Practical skills for real career moments
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SKILL AREAS
      ====================================================== */}

      <section
        id="individual-skills"
        className="
          scroll-mt-24

          border-b
          border-border

          bg-secondary/35
        "
      >
        <div
          className="
            pl-6
            pr-5

            sm:pl-10
            sm:pr-7

            md:pl-16
            md:pr-10

            lg:pl-[8.5rem]
            lg:pr-[5.5rem]

            xl:pl-[10rem]
            xl:pr-[7rem]

            2xl:pl-[11rem]
            2xl:pr-[8rem]

            max-w-[1536px]
            mx-auto

            

            

            

            container-page

            py-7

            sm:py-9

            md:py-11
          "
        >
          <div className="text-center">
            <div
                        className="
                justify-center
                mx-auto
                          inline-flex
                          items-center
                          gap-2.5
          
                          rounded-full
          
                          border
                          border-primary/15
          
                          bg-white/85
          
                          py-1.5
                          pl-1.5
                          pr-4
          
                          shadow-[0_7px_20px_rgba(15,23,42,0.05)]
                          backdrop-blur-sm
                        "
                      >
                        <span
                          className="
                            flex
                            size-8
                            shrink-0
                            items-center
                            justify-center
          
                            rounded-full
                            bg-primary/10
                          "
                        >
                          <Sparkles
                            className="size-4 text-primary"
                            strokeWidth={2.4}
                          />
                        </span>
          
                        <span
                          className="
                text-[11px]
                font-extrabold
                uppercase
                tracking-[0.14em]

                text-primary

                sm:text-xs
              "
                        >
                          What you can build
                        </span>
          
                         
                      </div>
          </div>

          <h2 className="
                mx-auto
                mt-4
                max-w-3xl

                text-center
                text-2xl
                font-extrabold
                leading-tight
                tracking-[-0.035em]

                text-foreground

                sm:text-3xl

                md:text-4xl
              ">
            Six practical areas for{" "}
            <span className="text-primary">
              career confidence.
            </span>
          </h2>

          <p
            className="
                text-center
                mx-auto
              mt-4
              max-w-3xl

              text-sm
              leading-7

              text-muted-foreground

              sm:text-base
            "
          >
            Each area is focused on situations people actually
            face — interviews, meetings, presentations, workplace
            conversations and career decisions.
          </p>

          <div className="skills-showcase relative mt-5 sm:mt-6">
            <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden pb-4 pt-3">
              <div className="relative mx-auto w-full max-w-[1780px] px-[24px] sm:px-[44px] md:px-[64px] lg:px-[86px] xl:px-[104px] 2xl:px-[118px]">
                <div className="skills-stage relative mx-auto h-[480px] sm:h-[500px] lg:h-[515px]">
                  {areas.map(([Icon, title, body, image], index) => {
                    const total = areas.length;
                    let offset = index - activeSkill;

                    if (offset > total / 2) offset -= total;
                    if (offset < -total / 2) offset += total;

                    const visible = Math.abs(offset) <= 2;
                    const active = offset === 0;

                    return (
                      <article
                        key={title}
                        onClick={() => setActiveSkill(index)}
                        aria-hidden={!visible}
                        className={`reference-skill-card group absolute left-1/2 top-1/2 overflow-hidden rounded-[24px] border bg-white ${
                          active ? "is-active" : ""
                        }`}
                        style={
                          {
                            "--card-offset": offset,
                            "--card-distance": Math.abs(offset),
                            "--card-visible": visible ? 1 : 0,
                          } as React.CSSProperties
                        }
                      >
                        <div className="reference-skill-image relative overflow-hidden">
                          <img
                            src={image}
                            alt={title}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="reference-skill-body relative flex flex-1 flex-col items-center px-5 pb-5 pt-9 text-center sm:px-6">
                          <span className="reference-skill-icon absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/15 bg-[#fff7fa] text-primary">
                            <Icon className="size-6 sm:size-7" strokeWidth={2.35} />
                          </span>

                          <h3 className="reference-skill-title font-extrabold tracking-[-0.035em] text-foreground">
                            {title}
                          </h3>

                          <p className="reference-skill-copy mt-3 text-muted-foreground">
                            {body}
                          </p>

                          <div className="mt-auto flex items-center justify-center pt-4 text-[13px] font-bold text-primary sm:text-sm">
                            <span>Practical learning</span>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="-mt-1 flex items-center justify-center gap-2">
              {areas.map(([, title], index) => (
                <button
                  key={title}
                  type="button"
                  onClick={() => setActiveSkill(index)}
                  aria-label={`Show ${title}`}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    activeSkill === index
                      ? "w-6 bg-primary"
                      : "w-2 bg-foreground/15 hover:bg-primary/35"
                  }`}
                />
              ))}
            </div>
          </div>

          <style>{`
            .skills-stage {
              --card-w: 286px;
              --card-h: 424px;
              --card-step: 318px;
            }

            .reference-skill-card {
              width: var(--card-w);
              height: var(--card-h);
              display: flex;
              flex-direction: column;
              opacity: var(--card-visible);
              pointer-events: auto;
              transform:
                translate(-50%, -50%)
                translateX(calc(var(--card-offset) * var(--card-step)))
                scale(calc(1 - (var(--card-distance) * 0.035)));
              z-index: calc(20 - var(--card-distance));
              border-color: rgba(15, 23, 42, 0.10);
              box-shadow: none;
              transition:
                transform 820ms cubic-bezier(0.22, 1, 0.36, 1),
                opacity 420ms ease,
                border-color 420ms ease,
                background-color 420ms ease;
              will-change: transform;
              backface-visibility: hidden;
            }

            .reference-skill-card.is-active {
              border-color: hsl(var(--primary));
              background:
                linear-gradient(180deg, #ffffff 0%, #ffffff 46%, rgba(196, 0, 79, 0.035) 100%);
              transform:
                translate(-50%, -50%)
                translateX(calc(var(--card-offset) * var(--card-step)))
                scale(1.075);
              z-index: 25;
            }

            .reference-skill-image {
              height: 194px;
              flex: 0 0 194px;
              border-radius: 23px 23px 0 0;
              background: #f7f4ef;
            }

            .reference-skill-body {
              min-height: 230px;
            }

            .reference-skill-icon {
              width: 58px;
              height: 58px;
              box-shadow: none;
            }

            .reference-skill-title {
              font-size: 19px;
              line-height: 1.2;
            }

            .reference-skill-copy {
              font-size: 14px;
              line-height: 1.65;
            }

            .reference-skill-card.is-active .reference-skill-title {
              font-size: 21px;
            }

            .reference-skill-card.is-active .reference-skill-copy {
              font-size: 14.5px;
            }

            @media (min-width: 640px) {
              .skills-stage {
                --card-w: 300px;
                --card-h: 438px;
                --card-step: 326px;
              }

              .reference-skill-image {
                height: 202px;
                flex-basis: 202px;
              }
            }

            @media (min-width: 1024px) {
              .skills-stage {
                --card-w: 292px;
                --card-h: 438px;
                --card-step: 320px;
              }
            }

            @media (min-width: 1280px) {
              .skills-stage {
                --card-w: 292px;
                --card-h: 448px;
                --card-step: 310px;
              }

              .reference-skill-image {
                height: 205px;
                flex-basis: 205px;
              }
            }

            @media (min-width: 1536px) {
              .skills-stage {
                --card-w: 300px;
                --card-h: 458px;
                --card-step: 320px;
              }

              .reference-skill-image {
                height: 214px;
                flex-basis: 214px;
              }
            }

            @media (max-width: 1023px) {
              .skills-stage {
                --card-w: min(66vw, 310px);
                --card-h: 438px;
                --card-step: min(70vw, 326px);
              }

              .reference-skill-card {
                transform:
                  translate(-50%, -50%)
                  translateX(calc(var(--card-offset) * var(--card-step)))
                  scale(calc(1 - (var(--card-distance) * 0.05)));
              }

              .reference-skill-card.is-active {
                transform:
                  translate(-50%, -50%)
                  translateX(calc(var(--card-offset) * var(--card-step)))
                  scale(1.035);
              }
            }

            @media (max-width: 767px) {
              .skills-stage {
                --card-w: min(72vw, 310px);
                --card-h: 432px;
                --card-step: min(77vw, 326px);
                height: 452px;
              }

              .reference-skill-image {
                height: 194px;
                flex-basis: 194px;
              }
            }

            @media (max-width: 639px) {
              .skills-stage {
                --card-w: min(78vw, 304px);
                --card-h: 420px;
                --card-step: min(86vw, 326px);
                height: 442px;
              }

              .reference-skill-card {
                border-radius: 20px;
              }

              .reference-skill-image {
                height: 184px;
                flex-basis: 184px;
                border-radius: 19px 19px 0 0;
              }

              .reference-skill-body {
                min-height: 226px;
                padding-left: 18px;
                padding-right: 18px;
              }

              .reference-skill-icon {
                width: 52px;
                height: 52px;
              }

              .reference-skill-title,
              .reference-skill-card.is-active .reference-skill-title {
                font-size: 18px;
              }

              .reference-skill-copy,
              .reference-skill-card.is-active .reference-skill-copy {
                font-size: 13.5px;
                line-height: 1.55;
              }
            }

            @media (max-width: 420px) {
              .skills-stage {
                --card-w: min(76vw, 286px);
                --card-h: 412px;
                --card-step: 88vw;
                height: 434px;
              }

              .reference-skill-image {
                height: 176px;
                flex-basis: 176px;
              }
            }

            @media (prefers-reduced-motion: reduce) {
              .reference-skill-card {
                transition: none !important;
              }
            }
          `}</style>

          <style>{`
            @media (max-width: 767px) {
              html,
              body {
                overflow-x: hidden;
              }
            }
          `}</style>

        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
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

            py-7

            sm:py-9

            md:py-11
          "
        >
          {/* centered section header */}
          <div
            className="
              mx-auto
              max-w-4xl
              text-center
            "
          >
            <div className="text-center">
              <div
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2.5

                  rounded-full

                  border
                  border-primary/15

                  bg-white/85

                  py-1.5
                  pl-1.5
                  pr-4

                  shadow-[0_7px_20px_rgba(15,23,42,0.05)]
                  backdrop-blur-sm
                "
              >
                <span
                  className="
                    flex
                    size-8
                    shrink-0
                    items-center
                    justify-center

                    rounded-full
                    bg-primary/10
                  "
                >
                  <Target
                    className="size-4 text-primary"
                    strokeWidth={2.4}
                  />
                </span>

                <span
                  className="
                    text-[11px]
                    font-extrabold
                    uppercase
                    tracking-[0.14em]

                    text-primary

                    sm:text-xs
                  "
                >
                  How individual learning works
                </span>

                <span
                  className="
                    hidden
                    text-[10px]
                    font-bold
                    text-foreground/40

                    sm:inline
                  "
                >
                  Practice • Feedback • Growth
                </span>
              </div>
            </div>

            <h2
              className="
                mx-auto
                mt-4
                max-w-3xl

                text-center
                text-2xl
                font-extrabold
                leading-tight
                tracking-[-0.035em]

                text-foreground

                sm:text-3xl

                md:text-4xl
              "
            >
              Practice first. Feedback next.{" "}
              <span className="text-primary">
                Confidence follows.
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-3xl

                text-center
                text-sm
                leading-7

                text-muted-foreground

                sm:text-base
                sm:leading-8
              "
            >
              Individual learning is designed around practical career
              situations, not theory alone.
            </p>
          </div>

          {/* image left / cards right */}
          <div
            className="
              mt-8
              grid
              gap-6

              sm:mt-10
              sm:gap-8

              lg:grid-cols-[0.92fr_1.08fr]
              lg:items-stretch
              lg:gap-10
            "
          >
            <div
              className="
                relative
                min-h-[280px]
                overflow-hidden

                rounded-[1.5rem]

                sm:min-h-[380px]
                sm:rounded-[2rem]

                lg:min-h-[520px]
              "
            >
              <img
                src={photos.corporateCohort}
                alt="Elev8 learners"
                className="
                  absolute
                  inset-0

                  h-full
                  w-full

                  object-cover
                  object-center
                "
              />
            </div>

            <div
              ref={processSequenceRef}
              className="
                grid
                gap-3

                sm:gap-4
              "
            >
              {process.map(
                ([number, title, body], index) => (
                  <div
                    key={number}
                    className="relative"
                  >
                    <div
                      className={`
                        process-step-card
                        grid
                        grid-cols-[auto_1fr]
                        items-start

                        gap-3

                        rounded-2xl
                        border

                        p-4

                        transition-all
                        duration-500
                        ease-out

                        sm:gap-4
                        sm:p-5

                        lg:items-center

                        ${
                          activeProcessStep === index
                            ? "-translate-y-1.5 border-primary/55 border-t-[5px] border-t-primary bg-[#fff3f7] shadow-[0_16px_36px_rgba(196,0,79,0.22)] ring-1 ring-primary/10"
                            : "translate-y-0 border-border border-t-[5px] border-t-transparent bg-card shadow-sm"
                        }
                      `}
                    >
                      <span
                        className={`
                          number-chip
                          shrink-0

                          transition-all
                          duration-500

                          ${
                            activeProcessStep === index
                              ? "scale-110 shadow-[0_8px_20px_rgba(196,0,79,0.28)]"
                              : "scale-100"
                          }
                        `}
                      >
                        {number}
                      </span>

                      <div className="min-w-0">
                        <h3
                          className="
                            text-sm
                            font-extrabold
                            text-foreground

                            sm:text-base
                          "
                        >
                          {title}
                        </h3>

                        <p
                          className="
                            mt-1.5

                            text-xs
                            leading-5

                            text-muted-foreground

                            sm:text-sm
                            sm:leading-6
                          "
                        >
                          {body}
                        </p>
                      </div>
                    </div>

                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OUTCOMES
      ====================================================== */}

      <section
        className="
          border-b
          border-border

          bg-secondary/40
        "
      >
        <div
          className="
            container-page

            py-7

            sm:py-9

            md:py-11
          "
        >
          <div className="text-center">
            <div
              className="
                justify-center
                mx-auto
                inline-flex
                items-center
                gap-2.5

                rounded-full

                border
                border-primary/15

                bg-white/85

                py-1.5
                pl-1.5
                pr-4

                shadow-[0_7px_20px_rgba(15,23,42,0.05)]
              "
            >
              <span
                className="
                  flex
                  size-8
                  items-center
                  justify-center

                  rounded-full
                  bg-primary/10
                "
              >
                <CheckCircle2 className="size-4 text-primary" />
              </span>

              <span
                className="
                text-[11px]
                font-extrabold
                uppercase
                tracking-[0.14em]

                text-primary

                sm:text-xs
              "
              >
                What you take away
              </span>
            </div>

            <h2
              className="
                mx-auto
                mt-4
                max-w-3xl

                text-center
                text-2xl
                font-extrabold
                leading-tight
                tracking-[-0.035em]

                text-foreground

                sm:text-3xl

                md:text-4xl
              "
            >
              Skills that show up when{" "}
              <span className="text-primary">
                the moment matters.
              </span>
            </h2>
          </div>

          <div
            className="
              mt-7
              grid
              gap-4

              md:grid-cols-3
              md:gap-5
            "
          >
          {outcomes.map(([title, body]) => (
            <div
              key={title}
              className="
                rounded-[1.5rem]

                border
                border-border

                bg-card

                p-5

                shadow-sm

                sm:p-6

                lg:rounded-[1.7rem]
                lg:p-7
              "
            >
              <CheckCircle2
                className="
                  size-5
                  text-primary

                  sm:size-6
                "
              />

              <h3
                className="
                  mt-4

                  text-lg
                  font-extrabold

                  sm:mt-5
                  sm:text-xl
                "
              >
                {title}
              </h3>

              <p
                className="
                  mt-3

                  text-sm
                  leading-6

                  text-muted-foreground
                "
              >
                {body}
              </p>
            </div>
          ))}
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

            flex
            flex-col

            gap-6

            py-7

            sm:py-8

            items-center
            text-center

            md:items-center
            md:justify-center
            md:py-9
          "
        >
          <div>
            <p
              className="
                text-[10px]
                font-extrabold
                uppercase
                tracking-[.16em]

                text-white/65

                sm:text-xs
              "
            >
              For Individuals • Your next step
            </p>

            <h2
              className="
                mx-auto
                mt-4
                max-w-3xl

                text-center
                text-2xl
                font-extrabold
                leading-tight
                tracking-[-0.035em]

                text-foreground

                sm:text-3xl

                md:text-4xl
              "
            >
              Tell us what you want to get better at.
            </h2>
          </div>

          <Link
            to="/contact"
            className="
              inline-flex
              w-full
              shrink-0

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

              sm:w-auto
            "
          >
            Start a conversation

            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .process-step-card {
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>

    
          <style>{`
            html,
            body,
            #root {
              max-width: 100%;
              overflow-x: hidden !important;
              scrollbar-width: none;
              -ms-overflow-style: none;
            }

            html::-webkit-scrollbar,
            body::-webkit-scrollbar,
            #root::-webkit-scrollbar {
              width: 0;
              height: 0;
              display: none;
            }

            * {
              scrollbar-width: none;
            }

            *::-webkit-scrollbar {
              width: 0;
              height: 0;
              display: none;
            }
          `}</style>

        </>
  );
}