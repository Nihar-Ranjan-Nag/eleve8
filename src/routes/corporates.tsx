import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BrainCircuit,
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

/* =========================================================
   PAGE
========================================================= */

function CorporatesPage() {
  const heroText = useReveal<HTMLDivElement>();
  const heroVisual = useReveal<HTMLDivElement>();

  const areaRef =
    useRevealChildren<HTMLDivElement>();

  const aiRef =
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
        {/* Glows */}

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

        {/* HERO WRAPPER */}

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
          {/* ================= LEFT ================= */}

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
              For Organizations
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
              Build a workforce ready for{" "}
              <span className="text-primary">
                what's next.
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
              Elev8 Learning is a corporate training and workforce
              capability partner. We build practical skills across
              communication, professional effectiveness, leadership,
              AI & digital capability, technical skills and problem
              solving.
            </p>

            <p
              className="
                mt-4
                max-w-[620px]

                text-sm
                leading-7
                text-muted-foreground

                sm:text-base
              "
            >
              We design learning experiences around your people,
              roles and business objectives — not off-the-shelf
              training.
            </p>

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
                Discuss your learning need

                <ArrowRight className="size-4" />
              </Link>

              <a
                href="#capability-areas"
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
                View capability areas

                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>

          {/* ================= RIGHT HERO VISUAL ================= */}

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
                  src={photos.teamSession}
                  alt="Elev8 corporate team training"
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

              {/* Side column */}

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
                  src={remoteImages.communication}
                  alt="Communication training"
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

                {/* FIXED: dark card same as other pages */}

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
                    Built for
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
                    Employees • Managers • Leaders • Functional
                    Teams
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VALUE STRIP
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
            container-page

            grid
            gap-3

            py-8

            sm:gap-4
            sm:py-10

            md:grid-cols-3
            md:gap-6
          "
        >
          {[
            "Customised around roles & business context",
            "Practical and application-focused",
            "Designed to improve performance at work",
          ].map((item) => (
            <div
              key={item}
              className="
                flex
                items-center
                gap-3

                rounded-2xl

                border
                border-white/10

                bg-white/5

                p-4
              "
            >
              <CheckCircle2
                className="
                  size-5
                  shrink-0
                  text-primary
                "
              />

              <p className="text-sm text-white/80">
                {item}
              </p>
            </div>
          ))}
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

            py-12

            sm:py-16

            md:py-24
          "
        >
          <p className="section-kicker">
            What we build
          </p>

          <h2 className="section-title">
            One workforce.{" "}
            <span className="text-primary">
              Multiple capability needs.
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
            Every organisation has different people, roles and
            challenges. That's why we don't believe in
            one-size-fits-all training. We build practical learning
            interventions across six capability areas.
          </p>

          <div
            ref={areaRef}
            className="
              mt-8

              grid
              gap-5

              md:grid-cols-2

              xl:gap-6
            "
          >
            {areas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
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
                      h-48
                      overflow-hidden

                      sm:h-56
                    "
                  >
                    <img
                      src={area.image}
                      alt={area.title}
                      className="
                        h-full
                        w-full

                        object-cover

                        transition-transform
                        duration-500

                        group-hover:scale-105
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0

                        bg-gradient-to-t

                        from-black/85
                        via-black/20
                        to-transparent
                      "
                    />

                    <div
                      className="
                        absolute
                        bottom-4
                        left-4
                        right-4

                        flex
                        items-end
                        justify-between
                        gap-3

                        sm:bottom-5
                        sm:left-5
                        sm:right-5
                      "
                    >
                      <div className="min-w-0">
                        <p
                          className="
                            text-[9px]
                            font-extrabold
                            uppercase
                            tracking-[.16em]

                            text-white/70

                            sm:text-xs
                          "
                        >
                          {area.number} • Capability area
                        </p>

                        <h3
                          className="
                            mt-1.5

                            text-lg
                            font-extrabold
                            leading-tight

                            text-white

                            sm:mt-2
                            sm:text-2xl
                          "
                        >
                          {area.title}
                        </h3>
                      </div>

                      <div
                        className="
                          flex
                          size-10
                          shrink-0

                          items-center
                          justify-center

                          rounded-xl

                          bg-white

                          text-primary

                          sm:size-12
                          sm:rounded-2xl
                        "
                      >
                        <Icon className="size-5" />
                      </div>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <p
                      className="
                        font-display

                        text-sm
                        font-extrabold
                        text-primary

                        sm:text-base
                      "
                    >
                      {area.line}
                    </p>

                    <p
                      className="
                        mt-2

                        text-sm
                        leading-6

                        text-muted-foreground
                      "
                    >
                      {area.body}
                    </p>

                    <div
                      className="
                        mt-5

                        flex
                        flex-wrap
                        gap-1.5

                        sm:gap-2
                      "
                    >
                      {area.items.map((item) => (
                        <span
                          key={item}
                          className="
                            rounded-full

                            border
                            border-border

                            bg-secondary/60

                            px-2.5
                            py-1.5

                            text-[10px]
                            font-bold

                            text-foreground/70

                            sm:px-3
                            sm:text-xs
                          "
                        >
                          {item}
                        </span>
                      ))}
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
        className="
          border-b
          border-border
          bg-background
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
          <div
            className="
              grid

              gap-8

              lg:grid-cols-2
              lg:items-stretch
              lg:gap-8

              xl:gap-10
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
              <p className="section-kicker">
                AI & Digital Skills
              </p>

              <h2 className="section-title">
                Don't just talk about AI.{" "}
                <span className="text-primary">
                  Put it to work.
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
                AI is becoming a fundamental workplace capability.
                We help employees, managers and teams use AI
                effectively, responsibly and practically in their
                everyday work.
              </p>

              {/* image expands to help match right height */}

              <div
                className="
                  mt-6

                  overflow-hidden

                  rounded-[1.5rem]

                  shadow-xl

                  sm:mt-7
                  sm:rounded-[2rem]

                  lg:flex-1
                  lg:min-h-[280px]
                "
              >
                <img
                  src={remoteImages.aiDigital}
                  alt="AI and digital skills"
                  className="
                    h-full
                    w-full

                    object-cover

                    min-h-[220px]
                  "
                />
              </div>

              <div
                className="
                  mt-5

                  rounded-2xl

                  bg-ink

                  p-5

                  text-white

                  sm:p-6
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
              ref={aiRef}
              className="
                grid

                gap-3

                sm:gap-4

                lg:h-full
                lg:grid-rows-5
              "
            >
              {aiDetails.map(
                ([title, body], index) => (
                  <div
                    key={title}
                    className="
                      reveal-child

                      grid
                      grid-cols-[auto_1fr]

                      items-start

                      gap-3

                      rounded-2xl

                      border
                      border-border

                      bg-card

                      p-4

                      shadow-sm

                      sm:gap-4
                      sm:p-5

                      lg:h-full
                      lg:items-center
                      lg:p-6
                    "
                  >
                    <span
                      className="
                        number-chip
                        shrink-0
                      "
                    >
                      0{index + 1}
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

            py-12

            sm:py-16

            md:py-24
          "
        >
          <p className="section-kicker">
            How we work
          </p>

          <h2 className="section-title">
            Learning designed around{" "}
            <span className="text-primary">
              your business reality.
            </span>
          </h2>

          <div
            ref={processRef}
            className="
              mt-8

              grid

              gap-4

              sm:grid-cols-2

              xl:grid-cols-4
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
            ].map(([number, title, body]) => (
              <div
                key={number}
                className="
                  reveal-child

                  rounded-2xl

                  border
                  border-border

                  bg-card

                  p-5

                  shadow-sm

                  sm:p-6
                "
              >
                <span className="number-chip">
                  {number}
                </span>

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
          PERFORMANCE
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

            lg:grid-cols-2
            lg:items-center
            lg:gap-10
          "
        >
          <div>
            <p className="section-kicker">
              Learning that leads to performance
            </p>

            <h2 className="section-title">
              Training shouldn't end when{" "}
              <span className="text-primary">
                the session ends.
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
              Whether you're building better communicators,
              stronger managers, AI-ready teams or more effective
              problem solvers, Elev8 designs learning around the
              capabilities that matter to your organisation.
            </p>

            <div
              className="
                mt-6

                grid
                gap-3

                min-[420px]:grid-cols-2
              "
            >
              {[
                "Confident speakers & presenters",
                "Stronger leadership",
                "Better collaboration",
                "Improved client & internal communication",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3

                    rounded-xl

                    border
                    border-border

                    p-4
                  "
                >
                  <CheckCircle2
                    className="
                      size-5
                      shrink-0
                      text-primary
                    "
                  />

                  <span
                    className="
                      text-sm
                      font-bold
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-first lg:order-none">
            <img
              src={photos.corporateGroup}
              alt="Elev8 workplace training"
              className="
                aspect-[4/3]

                w-full

                rounded-[1.5rem]

                object-cover

                shadow-xl

                sm:rounded-[2rem]
              "
            />
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
              Let's build what your workforce needs next
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
              Talk to Elev8 about your learning requirement.
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