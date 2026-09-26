import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BrainCircuit,
  Check,
  CheckCircle2,
  Cog,
  Lightbulb,
  MessageSquareText,
  Target,
  UsersRound,
} from "lucide-react";

import { photos, remoteImages } from "@/lib/site";
import {
  useReveal,
  useRevealChildren,
} from "@/hooks/useReveal";

export const Route = createFileRoute("/corporates")({
  head: () => ({
    meta: [
      {
        title:
          "For Organizations — Corporate Training & Workforce Capability | Elev8",
      },
      {
        name: "description",
        content:
          "Elev8 builds workforce capability across communication, professional skills, leadership, AI and digital skills, technical skills, and innovation through practical customized training.",
      },
    ],
  }),

  component: CorporatesPage,
});

/* =========================================================
   CAPABILITY AREAS
========================================================= */

const areas = [
  {
    number: "01",
    title: "Communication Skills",
    line: "Make communication a performance advantage.",
    body:
      "Build the confidence and clarity people need to communicate effectively across the workplace.",
    image: remoteImages.communication,
    icon: MessageSquareText,
    items: [
      "Business Communication",
      "Presentation & Public Speaking",
      "Executive Communication",
      "Email & Workplace Communication",
      "Active Listening",
      "Difficult Conversations",
      "Negotiation & Assertiveness",
      "Storytelling",
      "Voice & Speech",
      "Impromptu Speaking",
    ],
  },

  {
    number: "02",
    title: "Professional Skills",
    line: "The skills behind effective performance.",
    body:
      "Help employees manage priorities, solve problems and work effectively with people.",
    image: remoteImages.professional,
    icon: Target,
    items: [
      "Workplace Effectiveness",
      "Time & Productivity Management",
      "Collaboration",
      "Problem Solving",
      "Critical Thinking",
      "Decision Making",
      "Emotional Intelligence",
      "Conflict Management",
      "Adaptability",
      "Stakeholder Management",
      "Professional Etiquette",
    ],
  },

  {
    number: "03",
    title: "AI & Digital Skills",
    line: "Don't just talk about AI. Put it to work.",
    body:
      "Help employees, managers and teams use AI effectively, responsibly and practically in everyday work.",
    image: remoteImages.aiDigital,
    icon: BrainCircuit,
    items: [
      "AI for Productivity",
      "Prompt Engineering",
      "AI for Business Functions",
      "AI & Data",
      "Responsible AI",
    ],
  },

  {
    number: "04",
    title: "Leadership & Management",
    line: "From managers to effective leaders.",
    body:
      "Leadership shows up in decisions, conversations, accountability and the ability to bring out the best in others.",
    image: remoteImages.leadership,
    icon: UsersRound,
    items: [
      "First-Time Manager Programs",
      "People Management",
      "Leadership Development",
      "Delegation",
      "Feedback & Coaching",
      "Performance Conversations",
      "Decision Making",
      "Strategic Thinking",
      "Conflict Management",
      "Influencing",
      "Team Management",
      "Executive Presence",
    ],
  },

  {
    number: "05",
    title: "Technical & Functional Skills",
    line: "Skills people can actually use.",
    body:
      "Build practical technical and functional capabilities aligned with workplace requirements.",
    image: remoteImages.technical,
    icon: Cog,
    items: [
      "Advanced Excel",
      "Power BI",
      "Data Analytics",
      "HR Analytics",
      "Business Analytics",
      "Digital Productivity",
      "Role-Specific Technical Skills",
      "Function-Specific Capability Development",
    ],
  },

  {
    number: "06",
    title: "Innovation & Problem Solving",
    line: "Teach people how to find better answers.",
    body:
      "Help your workforce approach problems differently, think more creatively and make better decisions.",
    image: remoteImages.innovation,
    icon: Lightbulb,
    items: [
      "Creative Thinking",
      "Design Thinking",
      "Critical Thinking",
      "Problem Solving",
      "Innovation",
      "Decision Making",
      "Root Cause Analysis",
      "Analytical Thinking",
      "Business Problem Solving",
    ],
  },
] as const;

const capabilityCardThemes = [
  "border-[#d9d0f5] bg-[#f2edff]",
  "border-[#f1cfd8] bg-[#fff0f4]",
  "border-[#bfe3df] bg-[#eafaf7]",
  "border-[#efdcae] bg-[#fff8e7]",
  "border-[#c9dcf3] bg-[#edf6ff]",
  "border-[#d7d7d7] bg-[#f7f7f5]",
] as const;

/* =========================================================
   AI DETAILS
========================================================= */

const aiDetails = [
  [
    "AI for Productivity",
    "Research • Writing • Documentation • Brainstorming • Presentations • Everyday Workflows",
  ],
  [
    "Prompt Engineering",
    "Prompt Fundamentals • Structured Prompting • Advanced Prompting • Role-Based Prompting • Workflow Design",
  ],
  [
    "AI for Business Functions",
    "AI for HR • Marketing • Sales • Operations • Management",
  ],
  [
    "AI & Data",
    "AI-Assisted Analysis • Reporting • Data Interpretation • Visualisation • Decision Support",
  ],
  [
    "Responsible AI",
    "Verification • Accuracy • Privacy • Ethics • Responsible Workplace Usage",
  ],
] as const;

function AiDetailCard({
  title,
  body,
  index,
  isActive,
}: {
  title: string;
  body: string;
  index: number;
  isActive: boolean;
}) {
  const cardRef = useReveal<HTMLDivElement>();

  return (
    <div
      ref={cardRef}
      style={{ transitionDelay: `${index * 90}ms` }}
      className="reveal-right h-full duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none"
    >
      <div
        className={`
          group
          relative
          grid
          h-full
          grid-cols-[auto_1fr]
          items-start
          gap-3
          overflow-hidden

          rounded-2xl
          border

          p-3.5

          transition-all
          duration-500
          ease-out

          sm:gap-3.5
          sm:p-4

          lg:items-center
          lg:p-4

          ${
            isActive
              ? "scale-[1.018] border-primary/45 bg-[#fff7fa] shadow-[0_16px_40px_rgba(196,0,79,0.16)]"
              : "border-border bg-card shadow-sm"
          }
        `}
      >
        {/* animated brand accent */}
        <span
          aria-hidden="true"
          className={`
            absolute
            bottom-0
            left-0
            top-0
            w-1

            bg-primary

            transition-all
            duration-500

            ${isActive ? "opacity-100" : "opacity-0"}
          `}
        />

        <span
          className={`
            number-chip
            relative
            z-10
            shrink-0

            transition-all
            duration-500

            ${
              isActive
                ? "scale-110 shadow-[0_8px_22px_rgba(196,0,79,0.24)]"
                : "scale-100"
            }
          `}
        >
          0{index + 1}
        </span>

        <div className="relative z-10 min-w-0">
          <h3
            className={`
              text-sm
              font-extrabold

              transition-colors
              duration-500

              sm:text-base

              ${isActive ? "text-primary" : "text-foreground"}
            `}
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

        {/* soft moving highlight */}
        <span
          aria-hidden="true"
          className={`
            pointer-events-none
            absolute
            -right-12
            -top-12
            size-28
            rounded-full
            bg-primary/10
            blur-2xl

            transition-all
            duration-700

            ${
              isActive
                ? "scale-125 opacity-100"
                : "scale-75 opacity-0"
            }
          `}
        />
      </div>
    </div>
  );
}

/* =========================================================
   PAGE
========================================================= */

function CorporatesPage() {
  const heroText = useReveal<HTMLDivElement>();
  const heroVisual = useReveal<HTMLDivElement>();

  const aiSectionRef = useRef<HTMLElement>(null);
  const [activeAiCard, setActiveAiCard] = useState(-1);

  useEffect(() => {
    const section = aiSectionRef.current;
    if (!section) return;

    let intervalId: number | null = null;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const stopAiAnimation = () => {
      if (intervalId !== null) {
        window.clearInterval(intervalId);
        intervalId = null;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          stopAiAnimation();
          setActiveAiCard(-1);
          return;
        }

        if (reduceMotion) {
          setActiveAiCard(0);
          return;
        }

        stopAiAnimation();
        setActiveAiCard(0);

        intervalId = window.setInterval(() => {
          setActiveAiCard((current) => (current + 1) % aiDetails.length);
        }, 1450);
      },
      {
        threshold: 0.22,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(section);

    return () => {
      stopAiAnimation();
      observer.disconnect();
    };
  }, []);

  const areaRef =
    useRevealChildren<HTMLDivElement>();

  const processRef = useRef<HTMLDivElement>(null);
  const [activeProcessStep, setActiveProcessStep] = useState(0);

  useEffect(() => {
    const section = processRef.current;
    if (!section) return;

    let timers: number[] = [];
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const stopAnimation = () => {
      timers.forEach((timer) => window.clearTimeout(timer));
      timers = [];
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          stopAnimation();
          setActiveProcessStep(0);
          return;
        }

        setActiveProcessStep(0);
        if (reduceMotion) {
          setActiveProcessStep(4);
          return;
        }

        stopAnimation();
        timers = [
          window.setTimeout(() => setActiveProcessStep(1), 1200),
          window.setTimeout(() => setActiveProcessStep(2), 2400),
          window.setTimeout(() => setActiveProcessStep(3), 3600),
          window.setTimeout(() => setActiveProcessStep(4), 4800),
        ];
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(section);

    return () => {
      stopAnimation();
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* =====================================================
          HERO — PREMIUM ORGANIZATIONS
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-b
          border-border
          bg-[#fffaf8]
        "
      >
        {/* restrained premium background */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -left-40
            -top-40
            size-[32rem]
            rounded-full
            bg-primary/[0.07]
            blur-3xl
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-48
            right-[-8rem]
            size-[34rem]
            rounded-full
            bg-[#f6dce5]/55
            blur-3xl
          "
        />

        <div
          className="
            relative
            z-10

            mx-auto

            grid
            w-full
            max-w-[1440px]

            gap-8

            px-4
            py-7

            sm:px-6
            sm:py-9

            md:px-8
            md:py-10

            lg:min-h-[620px]
            lg:grid-cols-[0.98fr_1.02fr]
            lg:items-center
            lg:gap-12
            lg:px-10
            lg:py-10

            xl:gap-12
            xl:px-10

            2xl:max-w-[1500px]
          "
        >
          {/* LEFT */}
          <div
            ref={heroText}
            className="
              reveal-left
              text-center

              lg:text-left
            "
          >
            {/* Primary page identity */}
            <div
              className="
                mx-auto
                inline-flex
                items-center
                gap-3

                rounded-full

                border
                border-primary/20

                bg-white

                py-1.5
                pl-1.5
                pr-4

                shadow-[0_10px_30px_rgba(196,0,79,0.10)]

                lg:mx-0
              "
            >
              <span
                className="
                  flex
                  size-9
                  shrink-0
                  items-center
                  justify-center

                  rounded-full

                  bg-primary

                  shadow-[0_7px_18px_rgba(196,0,79,0.24)]
                "
              >
                <UsersRound
                  className="size-[18px] text-white"
                  strokeWidth={2.5}
                />
              </span>

              <span
                className="
                  text-xs
                  font-extrabold
                  uppercase
                  tracking-[0.16em]
                  text-primary

                  sm:text-[13px]
                "
              >
                For Organizations
              </span>
            </div>

            <h1
              className="
                mx-auto
                mt-5
                max-w-[720px]

                font-display
                text-[2.15rem]
                font-extrabold
                leading-[1.07]
                tracking-[-0.05em]

                text-foreground

                sm:text-[2.8rem]

                md:text-[3.3rem]

                lg:mx-0
                lg:text-[3.55rem]

                xl:text-[3.9rem]
              "
            >
              Build a workforce{" "}
              <span className="text-primary">
                ready for what’s next.
              </span>
            </h1>

            <p
              className="
                mx-auto
                mt-4
                max-w-[640px]

                text-sm
                leading-[1.85]
                text-muted-foreground

                sm:text-base
                sm:leading-[1.9]

                lg:mx-0
              "
            >
              Practical learning for communication, leadership, AI,
              digital capability and workplace effectiveness — designed
              around your people, roles and business priorities.
            </p>

            <div
              className="
                mt-6
                flex
                flex-col
                gap-3

                sm:flex-row
                sm:justify-center

                lg:justify-start
              "
            >
              <Link
                to="/contact"
                className="
                  group
                  inline-flex
                  min-h-12
                  w-full

                  items-center
                  justify-center
                  gap-2.5

                  rounded-full
                  bg-primary

                  px-6
                  py-3

                  text-sm
                  font-extrabold
                  text-white

                  shadow-[0_12px_30px_rgba(196,0,79,0.22)]

                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:shadow-[0_16px_36px_rgba(196,0,79,0.30)]

                  motion-reduce:transform-none

                  sm:w-auto
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
                href="#capability-areas"
                className="
                  group
                  inline-flex
                  min-h-12
                  w-full

                  items-center
                  justify-center
                  gap-2.5

                  rounded-full

                  border
                  border-black/10

                  bg-white

                  px-6
                  py-3

                  text-sm
                  font-extrabold
                  text-foreground

                  shadow-[0_8px_22px_rgba(15,23,42,0.05)]

                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:border-primary/25
                  hover:text-primary

                  motion-reduce:transform-none

                  sm:w-auto
                "
              >
                Explore capabilities
                <ArrowRight
                  className="
                    size-4
                    rotate-90
                    transition-transform
                    duration-300
                    group-hover:translate-y-1
                  "
                />
              </a>
            </div>

            {/* Useful organization context */}
            <div
              className="
                mx-auto
                mt-5
                flex
                max-w-xl
                flex-wrap
                items-center
                justify-center
                gap-x-5
                gap-y-2

                text-[11px]
                font-bold
                text-foreground/50

                sm:text-xs

                lg:mx-0
                lg:justify-start
              "
            >
              {[
                "Customized to your teams",
                "Built around real work",
                "Designed for application",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    inline-flex
                    items-center
                    gap-2
                  "
                >
                  <span
                    className="
                      flex
                      size-5
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-primary/10
                    "
                  >
                    <Check
                      className="size-3 text-primary"
                      strokeWidth={3}
                    />
                  </span>

                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div
            ref={heroVisual}
            className="
              reveal-right
              relative
              mx-auto
              w-full
              min-w-0
              max-w-[640px]

              lg:mx-0
              lg:justify-self-end
              lg:max-w-[620px]

              xl:max-w-[650px]
            "
          >
            {/* offset brand frame */}
            <div
              aria-hidden="true"
              className="
                absolute
                -bottom-3
                -right-3
                h-[86%]
                w-[88%]

                rounded-[2rem]

                border
                border-primary/20

                bg-primary/[0.035]

                sm:-bottom-4
                sm:-right-4
                sm:rounded-[2.5rem]
              "
            />

            <div
              className="
                group
                relative
                overflow-hidden

                rounded-[1.75rem]

                border
                border-black/[0.06]

                bg-white

                p-1.5

                shadow-[0_26px_65px_rgba(38,22,30,0.14)]

                sm:rounded-[2.25rem]
                sm:p-2
              "
            >
              <div
                className="
                  relative
                  overflow-hidden

                  rounded-[1.4rem]

                  sm:rounded-[1.85rem]
                "
              >
                <img
                  src={photos.corporateGroup}
                  alt="Elev8 learning for organizations"
                  className="
                    aspect-[4/3]
                    w-full
                    object-cover

                    transition-transform
                    duration-700
                    ease-out

                    group-hover:scale-[1.025]

                    motion-reduce:transform-none

                    lg:aspect-[5/4]
                  "
                />

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/25
                    via-transparent
                    to-transparent
                  "
                />

                {/* image bottom label */}
                <div
                  className="
                    absolute
                    bottom-4
                    left-4
                    right-4

                    flex
                    items-center
                    justify-between
                    gap-3

                    rounded-2xl

                    border
                    border-white/40

                    bg-white/90

                    p-3

                    shadow-lg
                    backdrop-blur-xl

                    sm:bottom-5
                    sm:left-5
                    sm:right-5
                    sm:p-4
                  "
                >
                  <div
                    className="
                      flex
                      min-w-0
                      items-center
                      gap-3
                    "
                  >
                    <span
                      className="
                        flex
                        size-10
                        shrink-0
                        items-center
                        justify-center

                        rounded-full

                        bg-primary

                        shadow-[0_7px_18px_rgba(196,0,79,0.22)]
                      "
                    >
                      <Check
                        className="size-5 text-white"
                        strokeWidth={3}
                      />
                    </span>

                    <div className="min-w-0">
                      <p
                        className="
                          truncate
                          text-xs
                          font-extrabold
                          text-foreground

                          sm:text-sm
                        "
                      >
                        Learning built around your business
                      </p>

                      <p
                        className="
                          mt-0.5
                          hidden
                          text-[10px]
                          font-semibold
                          text-foreground/50

                          sm:block
                          sm:text-[11px]
                        "
                      >
                        Relevant skills • real scenarios • practical application
                      </p>
                    </div>
                  </div>

                  <span
                    className="
                      hidden
                      shrink-0

                      rounded-full

                      border
                      border-primary/15

                      bg-primary/5

                      px-3
                      py-1.5

                      text-[10px]
                      font-extrabold
                      uppercase
                      tracking-[0.1em]

                      text-primary

                      md:inline-flex
                    "
                  >
                    Organizations
                  </span>
                </div>
              </div>
            </div>

            {/* floating badge */}
            <div
              className="
                absolute
                -left-4
                top-7

                hidden
                items-center
                gap-2.5

                rounded-2xl

                border
                border-primary/15

                bg-white/95

                px-3.5
                py-3

                shadow-[0_14px_34px_rgba(38,22,30,0.12)]
                backdrop-blur-md

                sm:flex

                lg:-left-6
              "
            >
              <span
                className="
                  flex
                  size-9
                  items-center
                  justify-center

                  rounded-full
                  bg-primary/10
                "
              >
                <Target className="size-4 text-primary" />
              </span>

              <div>
                <p className="text-xs font-extrabold text-foreground">
                  Business-led learning
                </p>

                <p className="mt-0.5 text-[10px] font-semibold text-foreground/45">
                  From capability gap to application
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITY AREAS
      ====================================================== */}

      <section
        id="capability-areas"
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

            py-10

            sm:py-12

            md:py-16
          "
        >
          <p
            className="
              mx-auto
              w-full

              text-center
              font-display
              text-base
              font-extrabold
              tracking-[-0.03em]

              text-foreground

              sm:text-lg

              md:text-xl
            "
          >
            What we <span className="text-primary">build.</span>
          </p>

          <h2
            className="
              mx-auto
              mt-3
              max-w-4xl

              text-center
              font-display
              text-2xl
              font-extrabold
              leading-[1.03]
              tracking-[-0.045em]

              text-foreground

              sm:text-3xl

              md:text-[2.25rem]

              lg:text-[2.5rem]
            "
          >
            One workforce.{" "}
            <span className="text-primary">
              Multiple capability needs.
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
            "
          >
            Every organisation has different people, roles and
            challenges. That's why we don't believe in
            one-size-fits-all training. We build practical learning
            interventions across six capability areas.
          </p>

          <div
            ref={areaRef}
            className="
              relative
              mt-7
              space-y-5

              sm:mt-9
              sm:space-y-7

              md:space-y-9

              lg:space-y-12
            "
          >
            {areas.map((area, index) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  style={{
                    top:
                      typeof window !== "undefined" &&
                      window.innerWidth < 640
                        ? `${12 + index * 7}px`
                        : `${76 + index * 14}px`,
                    zIndex: index + 1,
                  }}
                  className={`
                    reveal-child
                    group
                    relative
                    overflow-hidden

                    rounded-[1.75rem]
                    border

                    shadow-none

                    md:rounded-[2.25rem]

                    sticky
                    min-h-[470px]

                    transition-transform
                    duration-500
                    ease-out

                    sm:min-h-[500px]

                    lg:min-h-[500px]
                    lg:hover:-translate-y-1

                    ${capabilityCardThemes[index]}
                  `}
                >
                  <div
                    className="
                      grid

                      min-h-[470px]

                      sm:min-h-[500px]

                      lg:min-h-[500px]
                      lg:grid-cols-[0.92fr_1.08fr]
                      lg:items-stretch
                    "
                  >
                    <div
                      className="
                        relative
                        m-4
                        min-h-[210px]
                        overflow-hidden

                        rounded-[1.35rem]

                        sm:min-h-[300px]

                        md:m-7
                        md:rounded-[1.75rem]

                        lg:m-8
                        lg:mr-0
                        lg:min-h-0
                      "
                    >
                      <img
                        src={area.image}
                        alt={area.title}
                        className="
                          absolute
                          inset-0
                          h-full
                          w-full

                          object-cover

                          transition-transform
                          duration-700
                          ease-out

                          group-hover:scale-105
                        "
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                      <div
                        className="
                          absolute
                          bottom-4
                          left-4

                          flex
                          items-center
                          gap-2

                          rounded-full

                          border
                          border-white/50

                          bg-white/85

                          px-3
                          py-2

                          text-[10px]
                          font-extrabold
                          uppercase
                          tracking-[.14em]

                          text-foreground

                          shadow-lg
                          backdrop-blur-md

                          sm:bottom-5
                          sm:left-5
                          sm:text-xs
                        "
                      >
                        <Icon className="size-4 text-primary" />
                        Capability {area.number}
                      </div>
                    </div>

                    <div
                      className="
                        flex
                        flex-col
                        justify-center

                        px-5
                        pb-7

                        sm:px-7
                        sm:pb-9

                        md:p-8

                        lg:p-12
                      "
                    >
                      <div>
                        <span
                          className="
                            inline-flex
                            items-center

                            rounded-full

                            border
                            border-primary/15

                            bg-white/75

                            px-3
                            py-1.5

                            text-[10px]
                            font-extrabold
                            uppercase
                            tracking-[.12em]

                            text-primary

                            shadow-sm

                            sm:text-xs
                          "
                        >
                          {area.line}
                        </span>

                        <h3
                          className="
                            mt-4

                            max-w-xl

                            text-2xl
                            font-extrabold
                            leading-[1.05]
                            tracking-[-0.035em]

                            text-foreground

                            sm:text-3xl

                            lg:text-[2.65rem]
                          "
                        >
                          {area.title}
                        </h3>

                        <p
                          className="
                            mt-4
                            max-w-xl

                            text-sm
                            leading-7

                            text-foreground/65

                            sm:text-base
                          "
                        >
                          {area.body}
                        </p>
                      </div>

                      <div
                        className="
                          mt-6

                          flex
                          flex-wrap
                          gap-2

                          lg:mt-8
                        "
                      >
                        {area.items.map((item) => (
                          <span
                            key={item}
                            className="
                              rounded-full

                              border
                              border-black/10

                              bg-white/65

                              px-3
                              py-1.5

                              text-[10px]
                              font-bold

                              text-foreground/70

                              shadow-sm

                              transition-all
                              duration-300
                              ease-out

                              hover:-translate-y-1
                              hover:scale-105
                              hover:border-primary/30
                              hover:bg-primary
                              hover:text-white
                              hover:shadow-[0_10px_22px_rgba(236,72,153,0.24)]

                              motion-reduce:transform-none
                              motion-reduce:transition-none

                              sm:px-3.5
                              sm:py-2
                              sm:text-xs
                            "
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          AI & DIGITAL SKILLS — FIXED ALIGNMENT
      ====================================================== */}

      <section
        ref={aiSectionRef}
        className="
          border-b
          border-border
          bg-background
        "
      >
        <div
          className="
            container-page

            py-8

            sm:py-9

            md:py-11
          "
        >
          <p
            className="
              mx-auto
              mb-2
              w-full

              text-center
              font-display
              text-base
              font-extrabold
              tracking-[-0.03em]

              text-foreground

              sm:text-lg

              md:mb-3
              md:text-xl
            "
          >
            AI &amp; Digital{" "}
            <span className="text-primary">Skills.</span>
          </p>

          <h2
            className="
              mx-auto
              max-w-4xl

              text-center
              font-display
              text-2xl
              font-extrabold
              leading-[1.04]
              tracking-[-0.045em]

              text-foreground

              sm:text-[1.8rem]

              md:text-[2.05rem]

              lg:text-[2.25rem]
            "
          >
            Don't just talk about AI.{" "}
            <span className="text-primary">
              Put it to work.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-2.5
              max-w-3xl

              text-center
              text-sm
              leading-7

              text-muted-foreground

              sm:text-base
            "
          >
            AI is becoming a fundamental workplace capability. We
            help employees, managers and teams use AI effectively,
            responsibly and practically in their everyday work.
          </p>

          <div
            className="
              grid

              mt-6
              gap-6

              sm:mt-7

              lg:grid-cols-2
              lg:items-stretch
              lg:gap-5

              xl:gap-6
            "
          >
            {/* ================= LEFT ================= */}

            <div
              className="
                flex
                h-full
                flex-col
              "
            >
              {/* image expands to help match right height */}

              <div
                className="
                  overflow-hidden

                  rounded-[1.5rem]

                  shadow-xl

                  sm:rounded-[2rem]

                  lg:flex-1
                  lg:min-h-[220px]
                "
              >
                <img
                  src={remoteImages.aiDigital}
                  alt="AI and digital skills"
                  className="
                    h-full
                    w-full

                    object-cover

                    min-h-[190px]
                  "
                />
              </div>

              <div
                className="
                  mt-4

                  rounded-2xl

                  bg-ink

                  p-4

                  text-white

                  sm:p-5
                "
              >
                <p
                  className="
                    font-display

                    text-base
                    font-extrabold

                    sm:text-lg
                  "
                >
                  Our goal isn't to replace human capability with AI.
                </p>

                <p
                  className="
                    mt-2

                    text-sm
                    leading-6

                    text-white/65
                  "
                >
                  It's to make human capability more powerful with AI.
                </p>
              </div>
            </div>

            {/* ================= RIGHT ================= */}

            <div
              className="
                grid

                gap-2.5

                sm:gap-3

                lg:h-full
                lg:grid-rows-5
              "
            >
              {aiDetails.map(([title, body], index) => (
                <AiDetailCard
                  key={title}
                  title={title}
                  body={body}
                  index={index}
                  isActive={activeAiCard === index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW WE WORK
      ====================================================== */}

      <section
        className="
          border-b
          border-[#eadde0]
          bg-[#fbf8f7]
        "
      >
        <div
          className="
            container-page

            py-10

            sm:py-12

            md:py-16
          "
        >
          <p
            className="
              mx-auto
              w-full

              text-center
              font-display
              text-base
              font-extrabold
              tracking-[-0.03em]

              text-foreground

              sm:text-lg

              md:text-xl
            "
          >
            How we <span className="text-primary">work.</span>
          </p>

          <h2
            className="
              mx-auto
              mt-3
              max-w-4xl

              text-center
              font-display
              text-2xl
              font-extrabold
              leading-[1.03]
              tracking-[-0.045em]

              text-foreground

              sm:text-3xl

              md:text-[2.25rem]

              lg:text-[2.5rem]
            "
          >
            Learning designed around{" "}
            <span className="text-[#c4004f]">
              your business reality.
            </span>
          </h2>

          <div
            ref={processRef}
            className="
              relative
              mt-8
              w-full
              max-w-[1500px]
              overflow-hidden

              rounded-[1.75rem]

              border
              border-[#ead5d9]

              bg-white

              px-4
              py-8

              xs:px-5

              shadow-[0_14px_35px_rgba(92,31,45,0.06)]

              sm:px-10
              sm:py-11

              md:min-h-[310px]

              lg:left-1/2
              lg:w-[calc(100vw-96px)]
              lg:-translate-x-1/2
              lg:px-16
              lg:py-12

              xl:max-w-[1500px]
            "
          >
            {/* Smooth celebration confetti - appears after all 4 steps complete */}
            {activeProcessStep === 4 && (
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
              >
                {Array.from({ length: 150 }).map((_, index) => {
                  const colors = [
                    "#c4004f",
                    "#22c55e",
                    "#3b82f6",
                    "#f59e0b",
                    "#8b5cf6",
                    "#ef4444",
                  ];

                  /*
                   * Deterministic values keep SSR/client rendering stable,
                   * while still making the confetti look naturally random.
                   */
                  const left = (index * 47 + 11) % 100;
                  const delay = (index * 67) % 1350;
                  const duration = 2400 + ((index * 137) % 1700);
                  const size = 5 + ((index * 3) % 7);
                  const height = Math.max(4, size - 2 + (index % 3));
                  const drift = ((index * 29) % 150) - 75;
                  const sway = ((index * 17) % 70) - 35;
                  const rotate = 360 + ((index * 73) % 720);
                  const startY = -18 - ((index * 13) % 70);
                  const opacity = 0.72 + (index % 4) * 0.07;

                  return (
                    <span
                      key={index}
                      className="absolute block will-change-transform"
                      style={{
                        left: `${left}%`,
                        top: `${startY}px`,
                        width: `${size}px`,
                        height: `${height}px`,
                        opacity,
                        backgroundColor: colors[index % colors.length],
                        borderRadius:
                          index % 7 === 0
                            ? "9999px"
                            : index % 3 === 0
                              ? "2px"
                              : "1px",
                        animation: `process-confetti-fall ${duration}ms linear ${delay}ms forwards`,
                        ["--confetti-drift" as string]: `${drift}px`,
                        ["--confetti-sway" as string]: `${sway}px`,
                        ["--confetti-rotate" as string]: `${rotate}deg`,
                      }}
                    />
                  );
                })}

                <style>{`
                  @keyframes process-confetti-fall {
                    0% {
                      opacity: 0;
                      transform:
                        translate3d(0, -8px, 0)
                        rotate(0deg)
                        scale(0.82);
                    }

                    7% {
                      opacity: 1;
                    }

                    25% {
                      transform:
                        translate3d(
                          calc(var(--confetti-sway) * 0.45),
                          72px,
                          0
                        )
                        rotate(calc(var(--confetti-rotate) * 0.22))
                        scale(1);
                    }

                    50% {
                      transform:
                        translate3d(
                          calc(var(--confetti-drift) * 0.45),
                          145px,
                          0
                        )
                        rotate(calc(var(--confetti-rotate) * 0.48))
                        scale(0.96);
                    }

                    75% {
                      opacity: 0.95;
                      transform:
                        translate3d(
                          calc(
                            var(--confetti-drift) +
                            (var(--confetti-sway) * 0.35)
                          ),
                          225px,
                          0
                        )
                        rotate(calc(var(--confetti-rotate) * 0.76))
                        scale(1);
                    }

                    100% {
                      opacity: 0;
                      transform:
                        translate3d(
                          var(--confetti-drift),
                          360px,
                          0
                        )
                        rotate(var(--confetti-rotate))
                        scale(0.9);
                    }
                  }

                  @media (prefers-reduced-motion: reduce) {
                    [style*="process-confetti-fall"] {
                      animation: none !important;
                      opacity: 0 !important;
                    }
                  }
                `}</style>
              </div>
            )}

            {/* Mobile vertical timeline */}
            <div
              className="
                absolute
                bottom-[4.5rem]
                left-[2.75rem]
                top-[3.8rem]

                w-0.5

                overflow-hidden
                rounded-full

                bg-[#eadfe2]

                sm:left-[3.25rem]

                md:hidden
              "
            >
              <div
                className="
                  w-full

                  rounded-full

                  bg-[#c4004f]

                  transition-[height]
                  duration-500
                  ease-in-out
                "
                style={{
                  height: `${Math.min(activeProcessStep / 3, 1) * 100}%`,
                }}
              />
            </div>

            {/* Desktop horizontal timeline */}
            <div
              className="
                absolute
                left-[12.5%]
                right-[12.5%]
                top-[4.15rem]

                hidden
                h-0.5

                overflow-hidden
                rounded-full

                bg-[#eadfe2]

                md:block
              "
            >
              <div
                className="
                  h-full

                  rounded-full

                  bg-[#c4004f]

                  transition-[width]
                  duration-500
                  ease-in-out
                "
                style={{
                  width: `${Math.min(activeProcessStep / 3, 1) * 100}%`,
                }}
              />
            </div>

            <div
              className="
                relative
                grid
                auto-rows-fr
                gap-8

                md:grid-cols-4
                md:gap-10
              "
            >
              {[
              [
                "01",
                "Understand",
                "We understand team structure, roles, proficiency levels, challenges and business expectations.",
              ],
              [
                "02",
                "Design",
                "Programs are customised by role, proficiency level and business requirement.",
              ],
              [
                "03",
                "Deliver",
                "Experiential, activity-driven learning focuses on real workplace scenarios and practical application.",
              ],
              [
                "04",
                "Apply",
                "Training should not end when the session ends. The objective is to help people apply what they learn at work.",
              ],
            ].map(([number, title, body], index) => {
              const isComplete = index < activeProcessStep;
              const isCurrent =
                index === activeProcessStep && activeProcessStep < 4;

              return (
                <article
                  key={number}
                  aria-current={isCurrent ? "step" : undefined}
                  className="
                    relative
                    z-10

                    grid
                    grid-cols-[3rem_1fr]
                    items-start
                    gap-5

                    md:block
                    md:text-center
                  "
                >
                  <span
                    className="
                      relative
                      z-10

                      flex
                      size-12
                      items-center
                      justify-center

                      rounded-full

                      border-[3px]
                      border-white

                      text-xs
                      font-extrabold

                      transition-all
                      duration-500

                      md:mx-auto
                    "
                    style={{
                      color:
                        isComplete || isCurrent ? "white" : "#64748b",
                      backgroundColor: isComplete
                        ? "#c4004f"
                        : isCurrent
                          ? "#c4004f"
                          : "#f3d9e4",
                      transform: isCurrent ? "scale(1.12)" : "scale(1)",
                      boxShadow: isCurrent
                        ? "0 0 0 9px rgba(196,0,79,0.10), 0 10px 26px rgba(196,0,79,0.24)"
                        : isComplete
                          ? "0 8px 20px rgba(196,0,79,0.18)"
                          : "none",
                    }}
                  >
                    {isComplete ? (
                      <Check className="size-5" strokeWidth={3} />
                    ) : (
                      Number(number)
                    )}
                  </span>

                  <div className="md:mt-5 md:px-3">
                    <h3
                      className="
                        text-base
                        font-extrabold

                        text-foreground

                        sm:text-lg
                        md:text-[1.05rem]
                      "
                    >
                      {title}
                    </h3>

                    <p
                      className="
                        mt-2.5

                        text-sm
                        leading-6

                        text-muted-foreground

                        sm:text-[0.9rem]
                        sm:leading-6
                      "
                    >
                      {body}
                    </p>
                  </div>
                </article>
              );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PERFORMANCE
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-b
          border-border
          bg-background
        "
      >
        {/* subtle decorative glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -left-24
            top-16
            size-64
            rounded-full
            bg-primary/5
            blur-3xl

            sm:size-80
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-24
            bottom-0
            size-64
            rounded-full
            bg-rose-100/45
            blur-3xl

            sm:size-80
          "
        />

        <div
          className="
            container-page
            relative
            z-10

            grid
            gap-8

            py-10

            sm:py-12

            md:py-16

            lg:grid-cols-[0.95fr_1.05fr]
            lg:items-center
            lg:gap-12
          "
        >
          {/* CONTENT */}
          <div
            className="
              order-2
              text-center

              lg:order-1
              lg:text-left
            "
          >
            <div
              className="
                mx-auto
                flex
                w-fit
                items-center
                justify-center
                gap-2

                rounded-full
                border
                border-primary/15
                bg-primary/5

                px-3.5
                py-2

                text-xs
                font-extrabold

                sm:text-sm
              "
            >
              <span
                className="
                  relative
                  flex
                  size-2.5
                "
              >
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-primary
                    opacity-30

                    motion-reduce:animate-none
                  "
                />
                <span
                  className="
                    relative
                    inline-flex
                    size-2.5
                    rounded-full
                    bg-primary
                  "
                />
              </span>

              Learning that leads to{" "}
              <span className="text-primary">performance.</span>
            </div>

            <h2
              className="
                mx-auto
                mt-4
                max-w-2xl

                font-display
                text-[2rem]
                font-extrabold
                leading-[1.03]
                tracking-[-0.045em]

                text-foreground

                sm:text-[2.5rem]

                md:text-[2.85rem]

                lg:mx-0
                lg:text-[3rem]
              "
            >
              Training shouldn't end when{" "}
              <span className="text-primary">
                the session ends.
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl

                text-sm
                leading-7

                text-muted-foreground

                sm:text-base

                lg:mx-0
              "
            >
              Whether you're building better communicators,
              stronger managers, AI-ready teams or more effective
              problem solvers, Elev8 designs learning around the
              capabilities that matter to your organisation.
            </p>

            <div
              className="
                mt-7
                grid
                gap-3

                rounded-[1.75rem]
                border
                border-[#e7d9dd]

                bg-white/35

                p-2.5

                shadow-[0_10px_30px_rgba(15,23,42,0.035)]

                sm:grid-cols-2
                sm:p-4

                lg:max-w-2xl
              "
            >
              {[
                "Confident speakers & presenters",
                "Stronger leadership",
                "Better collaboration",
                "Improved client & internal communication",
              ].map((item, index) => (
                <div
                  key={item}
                  style={{
                    animationDelay: `${index * 110}ms`,
                  }}
                  className="
                    group
                    flex
                    min-h-[68px]
                    items-center
                    gap-3

                    rounded-2xl

                    border
                    border-border

                    bg-white/80

                    p-4

                    text-left

                    shadow-[0_8px_24px_rgba(15,23,42,0.04)]
                    backdrop-blur-sm

                    transition-all
                    duration-300
                    ease-out

                    hover:-translate-y-1
                    hover:border-primary/25
                    hover:bg-white
                    hover:shadow-[0_16px_34px_rgba(196,0,79,0.09)]

                    motion-reduce:transform-none
                    motion-reduce:transition-none
                  "
                >
                  <span
                    className="
                      flex
                      size-9
                      shrink-0
                      items-center
                      justify-center

                      rounded-full

                      border
                      border-primary

                      bg-primary

                      shadow-[0_7px_18px_rgba(196,0,79,0.20)]

                      transition-all
                      duration-300

                      group-hover:scale-110
                      group-hover:shadow-[0_9px_22px_rgba(196,0,79,0.28)]

                      motion-reduce:transform-none
                    "
                  >
                    <CheckCircle2
                      className="
                        size-5
                        text-white

                        transition-transform
                        duration-300

                        group-hover:scale-105
                      "
                    />
                  </span>

                  <span
                    className="
                      text-sm
                      font-extrabold
                      leading-5

                      sm:text-[0.95rem]
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE */}
          <div
            className="
              order-1

              lg:order-2
            "
          >
            <div
              className="
                group
                relative
                mx-auto
                max-w-[720px]
                overflow-hidden

                rounded-[1.6rem]

                border
                border-black/5

                bg-white

                p-1.5

                shadow-[0_20px_55px_rgba(15,23,42,0.12)]

                sm:rounded-[2rem]
                sm:p-2
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-x-[12%]
                  -bottom-8
                  h-20
                  rounded-full
                  bg-primary/10
                  blur-3xl
                "
              />

              <div
                className="
                  relative
                  overflow-hidden

                  rounded-[1.25rem]

                  sm:rounded-[1.6rem]
                "
              >
                <img
                  src={photos.corporateGroup}
                  alt="Elev8 workplace training"
                  className="
                    aspect-[16/10]
                    w-full

                    object-cover

                    transition-transform
                    duration-700
                    ease-out

                    group-hover:scale-[1.025]

                    motion-reduce:transform-none
                    motion-reduce:transition-none

                    lg:aspect-[4/3]
                  "
                />

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/10
                    via-transparent
                    to-transparent
                  "
                />
              </div>

              <div
                className="
                  absolute
                  bottom-5
                  left-5

                  hidden
                  items-center
                  gap-2

                  rounded-full

                  border
                  border-white/50

                  bg-white/90

                  px-4
                  py-2.5

                  text-xs
                  font-extrabold

                  text-foreground

                  shadow-lg
                  backdrop-blur-md

                  sm:flex
                "
              >
                <CheckCircle2 className="size-4 text-primary" />
                Learning applied at work
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-primary
          text-white
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -left-20
            top-1/2
            size-56
            -translate-y-1/2
            rounded-full
            bg-white/10
            blur-3xl
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-16
            -top-24
            size-64
            rounded-full
            bg-white/10
            blur-3xl
          "
        />

        <div
          className="
            container-page
            relative
            z-10

            flex
            flex-col
            items-center
            justify-between

            gap-5

            py-8

            sm:py-9

            md:flex-row
            md:gap-8
            md:py-10
          "
        >
          <div
            className="
              max-w-3xl
              text-center

              md:text-left
            "
          >
            <p
              className="
                font-display
                text-sm
                font-extrabold
                tracking-[-0.02em]

                text-white/70

                sm:text-base
              "
            >
              Let's build what your workforce needs next.
            </p>

            <h2
              className="
                mt-2

                font-display
                text-2xl
                font-extrabold
                leading-[1.08]
                tracking-[-0.04em]

                sm:text-3xl

                lg:text-[2.25rem]
              "
            >
              Talk to Elev8 about your{" "}
              <span className="text-white/70">
                learning requirement.
              </span>
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
              gap-2.5

              rounded-full

              bg-white

              px-6
              py-3.5

              text-sm
              font-extrabold
              text-foreground

              shadow-[0_10px_28px_rgba(0,0,0,0.12)]

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:shadow-[0_14px_34px_rgba(0,0,0,0.18)]

              motion-reduce:transform-none
              motion-reduce:transition-none

              sm:w-auto
              sm:min-w-[210px]
            "
          >
            Start a conversation

            <ArrowRight
              className="
                size-4

                transition-transform
                duration-300

                group-hover:translate-x-1

                motion-reduce:transform-none
              "
            />
          </Link>
        </div>
      </section>



      <style>{`
        /*
         * What we build — stacked cards on every screen size.
         * Each card stays sticky while the next card slides over it.
         */
        #capability-areas article.reveal-child {
          transform-origin: center top;
          will-change: transform;
          box-shadow: none !important;
        }

        #capability-areas article.reveal-child:not(:last-child) {
          margin-bottom: 0;
        }

        /* Phones: compact sticky stack with no horizontal overflow/shadow. */
        @media (max-width: 639px) {
          #capability-areas {
            overflow: clip;
          }

          #capability-areas article.reveal-child {
            min-width: 0;
            width: 100%;
            min-height: min(470px, calc(100svh - 24px));
          }

          #capability-areas article.reveal-child > div {
            min-width: 0;
            box-shadow: none !important;
          }

          #capability-areas h3,
          #capability-areas p {
            overflow-wrap: anywhere;
          }
        }

        /* Keep the stack usable on shorter laptop displays too. */
        @media (min-width: 1024px) and (max-height: 700px) {
          #capability-areas article.reveal-child {
            min-height: 440px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #capability-areas article.reveal-child {
            transition: none !important;
          }
        }
      `}</style>

    </>
  );
}