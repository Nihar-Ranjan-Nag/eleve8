import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BrainCircuit,
  Building2,
  GraduationCap,
  MessageSquareText,
  Sparkles,
  UserRound,
  UsersRound,
} from "lucide-react";

import landingHero from "@/assets/landingHero.png";

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
    to: "/colleges" as const,
    label: "For Institutions",
    title:
      "Placement readiness that mirrors how companies actually hire.",
    text:
      "Assessment, aptitude, technical readiness, communication, mock tests, interviews, company-specific preparation and mock drives.",
    image: photos.batchGroup,
    icon: GraduationCap,
  },

  {
    to: "/corporates" as const,
    label: "For Organizations",
    title:
      "Workplace capability programs built around real business needs.",
    text:
      "Communication, professional skills, leadership, AI & digital skills, technical capability and innovation — customised around roles and outcomes.",
    image: photos.teamSession,
    icon: Building2,
  },

  {
    to: "/individuals" as const,
    label: "For Individuals",
    title:
      "Career skills that help people communicate, perform and move forward.",
    text:
      "Public speaking, interview confidence, professional effectiveness, communication and personal growth for important career moments.",
    image: remoteImages.career,
    icon: UserRound,
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

  const processRef =
    useRevealChildren<HTMLDivElement>();

  const galleryRef =
    useRevealChildren<HTMLDivElement>();

  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

       {/* ========================= HERO SECTION ========================= */}

<section
  className="
    relative
    overflow-hidden
    border-b
    border-border
    bg-[#f8f5f0]
    lg:min-h-[calc(100svh-96px)]
  "
>
  {/* Background Grid */}
  <div
    className="
      pointer-events-none
      absolute
      inset-0
      bg-[linear-gradient(to_right,rgba(90,90,90,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(90,90,90,0.05)_1px,transparent_1px)]
      bg-[size:46px_46px]
    "
  />

  {/* Left Glow */}
  <div
    className="
      pointer-events-none
      absolute
      -left-24
      top-12
      h-[330px]
      w-[330px]
      rounded-full
      bg-primary/8
      blur-[110px]
    "
  />

  {/* Right Glow */}
  <div
    className="
      pointer-events-none
      absolute
      right-0
      top-0
      h-[430px]
      w-[430px]
      rounded-full
      bg-rose-100/70
      blur-[120px]
    "
  />

  {/* Main Hero Wrapper */}
  <div
    className="
      relative
      z-10
      mx-auto
      grid
      w-full
      max-w-[1440px]
      items-center

      gap-8

      px-6
      py-7

      sm:px-8
      sm:py-9

      md:px-10
      md:py-10

      lg:min-h-[calc(100svh-96px)]
      lg:grid-cols-[1fr_1fr]
      lg:gap-8
      lg:px-12
      lg:py-4

      xl:px-14
      xl:gap-10

      2xl:max-w-[1500px]
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
        max-w-[700px]
      "
    >
      {/* Tag */}
      <div
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-primary/20
          bg-white/90
          px-4
          py-2
          shadow-sm
          backdrop-blur
        "
      >
        <Sparkles className="size-3.5 text-primary" />

        <span
          className="
            text-[9px]
            font-extrabold
            uppercase
            tracking-[0.2em]
            text-primary

            sm:text-[10px]
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

          text-[2.8rem]
          font-extrabold
          leading-[0.94]
          tracking-[-0.055em]

          text-[#0b1020]

          sm:text-[3.5rem]

          md:text-[4.1rem]

          lg:text-[4.35rem]

          xl:text-[4.95rem]

          2xl:text-[5.25rem]
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
          mt-6
          max-w-[610px]

          text-[0.98rem]
          font-medium
          leading-7

          text-[#60636d]

          sm:text-[1.04rem]
          sm:leading-8

          lg:text-[1.06rem]

          xl:text-[1.08rem]
        "
      >
        We help people build the skills, confidence, and mindset to do work
        they’re proud of, grow in their careers, and take on what comes next.
      </p>

      {/* Buttons */}
      <div
        className="
          mt-7

          flex
          flex-col
          gap-3

          min-[420px]:flex-row
          min-[420px]:items-center
        "
      >
        <Link
          to="/contact"
          className="
            group
            inline-flex
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
            shadow-[0_10px_30px_rgba(190,0,60,0.20)]
            transition-all
            duration-300

            hover:-translate-y-0.5
            hover:shadow-[0_16px_36px_rgba(190,0,60,0.28)]
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
            hover:text-primary
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

    {/* ================= RIGHT IMAGE ================= */}

    <div
      ref={heroVisual}
      className="
        reveal-right
        relative
        z-10
        flex
        w-full
        items-center
        justify-center

        lg:justify-end
      "
    >
      <img
        src={landingHero}
        alt="Elev8 Learning - campus to career, stronger teams and confident professionals"
        className="
          h-auto
          w-full
          object-contain

          max-w-[650px]

          sm:max-w-[740px]

          md:max-w-[820px]

          lg:max-h-[calc(100svh-105px)]
          lg:max-w-[880px]

          xl:max-w-[950px]

          2xl:max-w-[1020px]

          drop-shadow-[0_20px_42px_rgba(20,20,30,0.10)]
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
          border-b
          border-border
          bg-secondary/35
        "
      >
        <div
          className="
            container-page
            py-16
            md:py-24
          "
        >
          <p className="section-kicker">
            Who we work with
          </p>

          <div
            className="
              mt-3

              flex
              flex-col

              justify-between

              gap-5

              lg:flex-row
              lg:items-end
            "
          >
            <h2 className="section-title">
              Choose the path that matches{" "}
              <span className="text-primary">
                what you need.
              </span>
            </h2>

            <p
              className="
                max-w-xl
                text-sm
                text-muted-foreground
              "
            >
              Each audience gets a clear
              learning journey designed around
              the outcomes that matter to them.
            </p>
          </div>

          <div
            ref={audienceRef}
            className="
              mt-10

              grid

              gap-6

              md:grid-cols-2

              lg:grid-cols-3
            "
          >
            {audienceCards.map(
              (card, index) => {
                const Icon =
                  card.icon;

                return (
                  <Link
                    to={card.to}
                    key={card.label}
                    className="
                      reveal-child
                      service-card
                      group

                      overflow-hidden
                    "
                  >
                    <div
                      className="
                        relative
                        h-56

                        overflow-hidden

                        sm:h-60
                        lg:h-64
                      "
                    >
                      <img
                        src={card.image}
                        alt={card.label}
                        className="
                          h-full
                          w-full

                          object-cover

                          transition-transform
                          duration-700

                          group-hover:scale-105
                        "
                      />

                      <div
                        className="
                          absolute
                          inset-0

                          bg-gradient-to-t

                          from-black/75
                          via-black/15
                          to-transparent
                        "
                      />

                      <span
                        className="
                          absolute
                          left-5
                          top-5

                          rounded-full

                          bg-white/95

                          px-4
                          py-2

                          text-xs
                          font-extrabold
                          text-primary

                          shadow
                        "
                      >
                        0{index + 1} •{" "}
                        {card.label}
                      </span>

                      <div
                        className="
                          absolute
                          bottom-5
                          left-5

                          flex
                          size-12

                          items-center
                          justify-center

                          rounded-2xl

                          bg-primary

                          text-white

                          shadow-lg
                        "
                      >
                        <Icon className="size-5" />
                      </div>
                    </div>

                    <div className="p-6">
                      <h3
                        className="
                          text-xl
                          font-extrabold
                          leading-tight
                        "
                      >
                        {card.title}
                      </h3>

                      <p
                        className="
                          mt-3
                          text-sm
                          text-muted-foreground
                        "
                      >
                        {card.text}
                      </p>

                      <span
                        className="
                          mt-5

                          inline-flex
                          items-center
                          gap-2

                          text-sm
                          font-extrabold

                          text-primary
                        "
                      >
                        View programs

                        <ArrowRight
                          className="
                            size-4

                            transition-transform

                            group-hover:translate-x-1
                          "
                        />
                      </span>
                    </div>
                  </Link>
                );
              },
            )}
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
          <p className="section-kicker">
            Core capability areas
          </p>

          <div
            className="
              mt-3

              grid

              gap-8

              lg:grid-cols-[0.75fr_1.25fr]
              lg:items-end
            "
          >
            <div>
              <h2 className="section-title">
                Skills people can{" "}
                <span className="text-primary">
                  actually use.
                </span>
              </h2>

              <p
                className="
                  mt-5
                  text-muted-foreground
                "
              >
                Clear learning areas,
                practical exercises and content
                designed around workplace and
                recruitment situations.
              </p>
            </div>

            <div
              className="
                rounded-2xl

                border
                border-primary/20

                bg-accent

                p-5
              "
            >
              <p
                className="
                  text-sm
                  font-bold
                "
              >
                Communication • Professional
                Skills • AI & Digital • Leadership
                • Technical & Functional •
                Innovation & Problem Solving
              </p>
            </div>
          </div>

          <div
            ref={capabilityRef}
            className="
              mt-10

              grid

              gap-6

              md:grid-cols-2

              lg:grid-cols-3
            "
          >
            {capabilityCards.map(
              (card) => {
                const Icon =
                  card.icon;

                return (
                  <article
                    key={card.title}
                    className="
                      reveal-child
                      service-card
                      group
                    "
                  >
                    <div
                      className="
                        h-52
                        overflow-hidden

                        sm:h-56
                      "
                    >
                      <img
                        src={card.image}
                        alt={card.title}
                        className="
                          h-full
                          w-full

                          object-cover

                          transition-transform
                          duration-700

                          group-hover:scale-105
                        "
                      />
                    </div>

                    <div className="p-6">
                      <div
                        className="
                          flex
                          size-11

                          items-center
                          justify-center

                          rounded-2xl

                          bg-accent

                          text-primary
                        "
                      >
                        <Icon className="size-5" />
                      </div>

                      <h3
                        className="
                          mt-4

                          text-xl
                          font-extrabold
                        "
                      >
                        {card.title}
                      </h3>

                      <p
                        className="
                          mt-3

                          text-sm

                          text-muted-foreground
                        "
                      >
                        {card.text}
                      </p>
                    </div>
                  </article>
                );
              },
            )}
          </div>

          <div
            className="
              mt-8
              flex
              justify-center
            "
          >
            <Link
              to="/corporates"
              className="
                inline-flex
                items-center
                gap-2

                rounded-full

                border
                border-primary/25

                px-6
                py-3

                text-sm
                font-extrabold

                text-primary

                transition

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
          border-b
          border-border
          bg-secondary/40
        "
      >
        <div
          className="
            container-page

            grid

            gap-12

            py-16

            md:py-24

            lg:grid-cols-[0.86fr_1.14fr]
            lg:items-center
          "
        >
          <div>
            <p className="section-kicker">
              How we work
            </p>

            <h2 className="section-title">
              From need to{" "}
              <span className="text-primary">
                measurable learning.
              </span>
            </h2>

            <p
              className="
                mt-5

                text-muted-foreground
              "
            >
              We start with the outcome,
              understand the audience and build
              a practical learning journey
              around what better performance
              needs to look like.
            </p>

            <img
              src={photos.workshopHands}
              alt="Elev8 practical learning"
              className="
                mt-8

                aspect-[4/3]

                w-full

                rounded-[2rem]

                object-cover

                shadow-xl
              "
            />
          </div>

          <div
            ref={processRef}
            className="space-y-4"
          >
            {[
              [
                "01",
                "Understand the requirement",
                "Audience, goals, roles, hiring patterns or workplace challenges are mapped before design starts.",
              ],

              [
                "02",
                "Design the learning journey",
                "Modules, activities, assessments and practice are selected around the outcome — not a standard catalogue.",
              ],

              [
                "03",
                "Deliver practical learning",
                "Sessions use discussions, simulations, exercises, mock tests, interviews and real-world scenarios.",
              ],

              [
                "04",
                "Measure and reinforce",
                "Progress, feedback, post-assessment and follow-up help learning move from the session into performance.",
              ],
            ].map(
              ([
                number,
                title,
                body,
              ]) => (
                <div
                  key={number}
                  className="
                    reveal-child

                    grid
                    grid-cols-[auto_1fr]

                    gap-4

                    rounded-2xl

                    border
                    border-border

                    bg-card

                    p-5

                    shadow-sm
                  "
                >
                  <span className="number-chip">
                    {number}
                  </span>

                  <div>
                    <h3 className="font-extrabold">
                      {title}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-sm
                        text-muted-foreground
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