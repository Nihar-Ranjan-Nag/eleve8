import { createFileRoute, Link } from "@tanstack/react-router";

import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  MessageSquare,
  Presentation,
  Sparkles,
  Target,
  UserRound,
} from "lucide-react";

import { photos, remoteImages } from "@/lib/site";

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

  const processRef =
    useRevealChildren<HTMLDivElement>();

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

            gap-10

            px-4
            py-10

            sm:px-6
            sm:py-12

            md:px-8
            md:py-14

            lg:min-h-[calc(100svh-96px)]
            lg:grid-cols-[0.94fr_1.06fr]
            lg:gap-10
            lg:px-10
            lg:py-5

            xl:grid-cols-[0.92fr_1.08fr]
            xl:gap-12

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
            "
          >
            <p className="section-kicker">
              For Individuals
            </p>

            <h1
              className="
                mt-4

                text-[2.35rem]
                font-extrabold
                leading-[0.98]
                tracking-[-0.045em]

                text-foreground

                sm:text-[2.9rem]

                md:text-[3.3rem]

                lg:text-[3.45rem]

                xl:text-[3.8rem]

                2xl:text-[4rem]
              "
            >
              Practical skills for{" "}
              <span className="text-primary">
                real career moments.
              </span>
            </h1>

            <p
              className="
                mt-5
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
                mt-5
                max-w-[600px]

                rounded-2xl

                border
                border-border
                border-l-4
                border-l-primary

                bg-card

                px-5
                py-4

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
                mt-6

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

              max-w-[680px]

              lg:max-w-none
            "
          >
            <div
              className="
                grid
                grid-cols-2
                gap-3

                sm:grid-cols-12
                sm:gap-4
              "
            >
              {/* Main image */}

              <div
                className="
                  col-span-2

                  overflow-hidden

                  rounded-[1.6rem]

                  shadow-2xl

                  sm:col-span-8
                  sm:rounded-[2rem]
                "
              >
                <img
                  src={remoteImages.publicSpeaking}
                  alt="Professional communication and public speaking"
                  className="
                    aspect-[4/3]

                    w-full

                    object-cover

                    sm:aspect-[4/5]

                    lg:h-[500px]
                    lg:aspect-auto

                    xl:h-[520px]
                  "
                />
              </div>

              {/* side column */}

              <div
                className="
                  col-span-2

                  grid
                  grid-cols-2
                  gap-3

                  sm:col-span-4
                  sm:mt-12
                  sm:block
                  sm:space-y-4

                  lg:mt-12
                "
              >
                <img
                  src={remoteImages.career}
                  alt="Career development"
                  className="
                    aspect-square

                    w-full

                    rounded-[1.3rem]

                    object-cover

                    shadow-xl

                    sm:rounded-[1.5rem]

                    lg:h-[175px]
                    lg:aspect-auto
                  "
                />

                <div
                  className="
                    flex
                    min-h-full
                    flex-col
                    justify-end

                    rounded-[1.3rem]

                    bg-ink

                    p-4

                    text-white

                    shadow-xl

                    sm:min-h-[210px]
                    sm:rounded-[1.5rem]
                    sm:p-5

                    lg:min-h-[260px]
                  "
                >
                  <p
                    className="
                      text-[9px]
                      font-extrabold
                      uppercase
                      tracking-[.16em]

                      text-white/60

                      sm:text-xs
                    "
                  >
                    Best for
                  </p>

                  <p
                    className="
                      mt-2

                      text-xs
                      font-bold
                      leading-5

                      sm:mt-3
                      sm:text-sm
                      sm:leading-6
                    "
                  >
                    Students • Fresh graduates • Working
                    professionals • Career transitions
                  </p>
                </div>
              </div>
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
            container-page

            py-12

            sm:py-16

            md:py-24
          "
        >
          <p className="section-kicker">
            What you can build
          </p>

          <h2 className="section-title">
            Six practical areas for{" "}
            <span className="text-primary">
              career confidence.
            </span>
          </h2>

          <p
            className="
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

          <div
            ref={cardRef}
            className="
              mt-8

              grid

              gap-5

              md:grid-cols-2

              xl:grid-cols-3
            "
          >
            {areas.map(
              ([Icon, title, body, image]) => (
                <article
                  key={title}
                  className="
                    reveal-child
                    service-card
                    group

                    overflow-hidden
                  "
                >
                  <div
                    className="
                      h-44

                      overflow-hidden

                      sm:h-48

                      lg:h-52
                    "
                  >
                    <img
                      src={image}
                      alt={title}
                      className="
                        h-full
                        w-full

                        object-cover

                        transition-transform
                        duration-500

                        group-hover:scale-105
                      "
                    />
                  </div>

                  <div
                    className="
                      p-5

                      sm:p-6
                    "
                  >
                    <div
                      className="
                        flex
                        size-10

                        items-center
                        justify-center

                        rounded-xl

                        bg-accent

                        text-primary

                        sm:size-11
                        sm:rounded-2xl
                      "
                    >
                      <Icon className="size-5" />
                    </div>

                    <h3
                      className="
                        mt-4

                        text-lg
                        font-extrabold

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
                </article>
              ),
            )}
          </div>
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

            grid
            gap-8

            py-12

            sm:py-16

            md:py-24

            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-center
            lg:gap-12
          "
        >
          {/* left */}

          <div>
            <p className="section-kicker">
              How individual learning works
            </p>

            <h2 className="section-title">
              Practice first. Feedback next.{" "}
              <span className="text-primary">
                Confidence follows.
              </span>
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
              Individual learning is designed around practical
              career situations, not theory alone.
            </p>

            <img
              src={photos.corporateCohort}
              alt="Elev8 learners"
              className="
                mt-6

                aspect-[4/3]

                w-full

                rounded-[1.5rem]

                object-cover

                shadow-xl

                sm:mt-7
                sm:rounded-[2rem]
              "
            />
          </div>

          {/* right */}

          <div
            ref={processRef}
            className="
              space-y-3

              sm:space-y-4
            "
          >
            {process.map(
              ([number, title, body]) => (
                <div
                  key={number}
                  className="
                    reveal-child

                    grid
                    grid-cols-[auto_1fr]

                    gap-3

                    rounded-2xl

                    border
                    border-border

                    bg-card

                    p-4

                    shadow-sm

                    sm:gap-4
                    sm:p-5
                  "
                >
                  <span
                    className="
                      number-chip
                      shrink-0
                    "
                  >
                    {number}
                  </span>

                  <div className="min-w-0">
                    <h3
                      className="
                        text-sm
                        font-extrabold

                        sm:text-base
                      "
                    >
                      {title}
                    </h3>

                    <p
                      className="
                        mt-2

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
              ),
            )}
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

            grid

            gap-4

            py-12

            sm:py-16

            md:grid-cols-3
            md:gap-5
            md:py-20
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

            py-10

            sm:py-12

            md:flex-row
            md:items-center
            md:justify-between
            md:py-14
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
              Your next step
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
    </>
  );
}