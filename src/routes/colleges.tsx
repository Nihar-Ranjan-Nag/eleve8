import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  GraduationCap,
  MessageCircle,
  Quote,
  Target,
  Users,
} from "lucide-react";

import { photos } from "@/lib/site";
import {
  useReveal,
  useRevealChildren,
} from "@/hooks/useReveal";

export const Route = createFileRoute("/colleges")({
  head: () => ({
    meta: [
      {
        title:
          "For Institutions — Placement Readiness & Employability Training | Elev8",
      },
      {
        name: "description",
        content:
          "Elev8 Placement Accelerator helps colleges prepare students for assessments, aptitude, coding, interviews, mock tests, mock drives and company-specific recruitment.",
      },
    ],
  }),

  component: CollegesPage,
});

/* =========================================================
   DATA
========================================================= */

const diagnose = [
  "Quantitative Aptitude",
  "Logical Reasoning",
  "Verbal Ability",
  "Communication",
  "Technical Skills",
  "Coding Readiness",
  "Interview Readiness",
];

// Topic-specific online images for the placement modules.
// Each card also has a local fallback so the section still looks good
// if an external image is unavailable.
const buildModules = [
  [
    "Aptitude",
    "Quantitative Aptitude • Logical Reasoning • Data Interpretation • Speed & Accuracy",
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1400&q=85",
    photos.computerLab,
    Target,
  ],
  [
    "Verbal & Communication",
    "Verbal Ability • Business Communication • Vocabulary & Grammar • Speaking Skills",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=85",
    photos.lectureHall,
    MessageCircle,
  ],
  [
    "Technical & Coding",
    "Core Technical Concepts • Programming Fundamentals • Coding Practice • Problem Solving • Role-Based Technical Preparation",
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=85",
    photos.labSession,
    Code2,
  ],
  [
    "Group Discussion",
    "Structured Thinking • Current Affairs • Opinion Building • Listening & Collaboration • Persuasive Communication",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=85",
    photos.batchGroup,
    Users,
  ],
  [
    "Interview Readiness",
    "Self-Introduction • Resume-Based Questions • Technical Interviews • HR Interviews • Behavioural & Situational Questions • Project Presentation",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
    photos.campusCohort,
    MessageCircle,
  ],
  [
    "Workplace Readiness",
    "Professional Communication • Workplace Behaviour • Email & Chat Etiquette • Teamwork • Problem Solving • Adaptability",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=85",
    photos.seminarRoom,
    GraduationCap,
  ],
] as const;

const companyPrep = [
  [
    "IT / Technology Hiring",
    "Coding | Technical MCQs | Logical Reasoning | Technical Interviews",
  ],
  [
    "BFSI / Finance Roles",
    "Quantitative Ability | Reasoning | Financial Awareness | Communication | HR Interviews",
  ],
  [
    "Graduate / General Management Roles",
    "Aptitude | Communication | GD | Case Discussions | HR & Managerial Interviews",
  ],
] as const;

const companyFlow = [
  "Company",
  "Role",
  "Assessment",
  "Training",
  "Mock Test",
  "Feedback",
];

const packages = [
  [
    "01",
    "Foundation Program",
    "Aptitude + Verbal + Communication",
  ],
  [
    "02",
    "Technical Readiness",
    "Coding + Technical Concepts + Problem Solving",
  ],
  [
    "03",
    "Interview Accelerator",
    "GD + Technical Interview + HR Interview",
  ],
  [
    "04",
    "Company Readiness Program",
    "Company-Specific Tests + Role Preparation + Mock Interviews",
  ],
  [
    "05",
    "Complete Placement Accelerator",
    "Assessment + Core Training + Company Preparation + Mock Tests + Mock Drives + Post-Assessment",
  ],
] as const;

const years = [
  [
    "1st Year",
    "Communication + Foundation Skills",
  ],
  [
    "2nd Year",
    "Aptitude + Technical Foundations + Workplace Skills",
  ],
  [
    "3rd Year",
    "Placement Skills + Coding + Company Preparation",
  ],
  [
    "Final Year",
    "Intensive Placement Preparation + Mock Tests + Mock Drives + Interviews",
  ],
] as const;

const testimonials = [
  [
    "Dr. S. Rajkumar",
    "Dean of Management Studies, Mount Carmel College",
    "Elev8 Learning's 80-hour training streamlined MBA placements and tailored internships. Exceptional skills training notably enhanced student capabilities. Insightful mock interviews effectively revealed individual strengths with scorecards.",
  ],
  [
    "Prof. Smita Lal",
    "Dean, Institute of Marketing & Management",
    "Your workshops on ATS Resumes at IMM C2C Summit was invaluable. Students gained rich insights on personal branding, confidence building. Your guidance will undoubtedly steer their career paths.",
  ],
] as const;

/* =========================================================
   PAGE
========================================================= */

function CollegesPage() {
  const heroText = useReveal<HTMLDivElement>();
  const heroVisual = useReveal<HTMLDivElement>();

  const moduleRef =
    useRevealChildren<HTMLDivElement>();

  const diagnoseRef =
    useRevealChildren<HTMLDivElement>();

  const packageRef =
    useRevealChildren<HTMLDivElement>();

  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}
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
  {/* Decorative glows */}

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

      gap-8

      px-4
      py-10

      sm:px-6
      sm:py-12

      md:px-8
      md:py-14

      lg:min-h-[calc(100svh-96px)]
      lg:grid-cols-[0.92fr_1.08fr]
      lg:gap-8
      lg:px-10
      lg:py-6

      xl:grid-cols-[0.9fr_1.1fr]
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
        max-w-[690px]
      "
    >
      {/* Kicker */}

      <p className="section-kicker">
        For Institutions • Elev8 Placement Accelerator
      </p>

      {/* Heading */}

      <h1
        className="
          mt-4

          text-[2.45rem]
          font-extrabold
          leading-[0.98]
          tracking-[-0.045em]

          text-foreground

          sm:text-[3rem]

          md:text-[3.45rem]

          lg:text-[3.75rem]

          xl:text-[4.15rem]

          2xl:text-[4.35rem]
        "
      >
        Your students are ready to graduate.{" "}
        <span className="text-primary">
          Are they ready to get hired?
        </span>
      </h1>

      {/* Description */}

      <p
        className="
          mt-5
          max-w-[650px]

          text-sm
          leading-7

          text-muted-foreground

          sm:text-base

          md:text-[1.05rem]
          md:leading-8
        "
      >
        Elev8 is a placement-readiness and employability training
        partner for colleges. We prepare students for the actual
        stages of recruitment — assessments, aptitude, technical
        rounds, communication, interviews and mock drives.
      </p>

      {/* Highlight Card */}

      <div
        className="
          mt-5

          max-w-[620px]

          rounded-2xl

          border
          border-border
          border-l-4
          border-l-primary

          bg-card

          p-4

          shadow-sm

          sm:p-5
        "
      >
        <p
          className="
            font-display
            text-sm
            font-extrabold

            sm:text-base
          "
        >
          Turn campus talent into placement-ready talent.
        </p>

        <p
          className="
            mt-1
            text-xs
            text-muted-foreground

            sm:text-sm
          "
        >
          Structured. Measurable. Recruitment-focused.
        </p>
      </div>

      {/* CTA Buttons */}

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
            py-3.5

            text-sm
            font-extrabold

            text-white
          "
        >
          Partner with Elev8

          <ArrowRight className="size-4" />
        </Link>

        <a
          href="#trusted-campuses"
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
            py-3.5

            text-sm
            font-extrabold

            transition

            hover:border-primary
            hover:text-primary
          "
        >
          See campus network

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

        max-w-[700px]

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
        {/* MAIN IMAGE */}

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
            src={photos.batchGroup}
            alt="Elev8 placement training cohort"
            className="
              aspect-[4/3]
              w-full
              object-cover

              sm:aspect-[4/5]

              lg:h-[560px]
              lg:aspect-auto

              xl:h-[590px]
            "
          />
        </div>

        {/* SIDE COLUMN */}

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

            lg:mt-14
          "
        >
          {/* Side Image */}

          <img
            src={photos.campusCohort}
            alt="Campus placement training"
            className="
              aspect-square
              w-full

              rounded-[1.3rem]

              object-cover

              shadow-xl

              sm:rounded-[1.5rem]

              lg:h-[190px]
              lg:aspect-auto
            "
          />

          {/* Outcome Card */}

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

              sm:min-h-[230px]
              sm:rounded-[1.5rem]
              sm:p-5

              lg:min-h-[310px]
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
              The outcome
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
              Clear the test. Handle the interview. Perform when
              it matters.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* =====================================================
          TRUSTED CAMPUSES
      ====================================================== */}

      <section
        id="trusted-campuses"
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

            grid
            gap-8

            py-12

            sm:py-14

            md:py-20

            lg:grid-cols-[.75fr_1.25fr]
            lg:items-center
            lg:gap-10
          "
        >
          <div>
            <p className="section-kicker">
              Trusted across campuses
            </p>

            <h2 className="section-title">
              A real network of{" "}
              <span className="text-primary">
                institution partnerships.
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
              The brochure documents partnerships across
              colleges and universities in Bengaluru, Pune,
              Bhubaneswar, Delhi, Mumbai, Mohali, Punjab,
              Mangalore, Chennai and Ahmedabad.
            </p>

            <div
              className="
                mt-6

                grid
                grid-cols-2

                gap-3
              "
            >
              <img
                src={photos.campusCohort}
                alt="Campus training"
                className="
                  h-32
                  w-full
                  rounded-xl
                  object-cover

                  sm:h-40
                  sm:rounded-2xl
                "
              />

              <img
                src={photos.lectureHall}
                alt="Campus session"
                className="
                  h-32
                  w-full
                  rounded-xl
                  object-cover

                  sm:h-40
                  sm:rounded-2xl
                "
              />
            </div>
          </div>

          <div
            className="
              overflow-hidden

              rounded-[1.5rem]

              border
              border-border

              bg-white

              p-2

              shadow-xl

              sm:rounded-[2rem]
              sm:p-3
            "
          >
            <img
              src={photos.partnerCollage}
              alt="Elev8 partner colleges and universities"
              className="
                h-auto
                w-full
                rounded-[1.1rem]
                object-contain

                sm:rounded-[1.4rem]
              "
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          01 DIAGNOSE
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
          <p className="section-kicker">
            01 • Diagnose
          </p>

          <h2 className="section-title">
            Start With Data,{" "}
            <span className="text-primary">
              Not Assumptions.
            </span>
          </h2>

          <p
            className="
              mt-4
              max-w-3xl

              text-sm
              text-muted-foreground

              sm:text-base
            "
          >
            Before training begins, we assess where students
            actually stand.
          </p>

          <div
            ref={diagnoseRef}
            className="
              mt-7

              grid

              gap-3

              grid-cols-1

              min-[420px]:grid-cols-2

              lg:grid-cols-4
            "
          >
            {diagnose.map((item) => (
              <div
                key={item}
                className="
                  reveal-child

                  flex
                  items-center
                  gap-3

                  rounded-2xl

                  border
                  border-border

                  bg-card

                  p-4

                  shadow-sm

                  sm:block
                  sm:p-5
                "
              >
                <ClipboardCheck
                  className="
                    size-5
                    shrink-0
                    text-primary
                  "
                />

                <p
                  className="
                    text-sm
                    font-extrabold

                    sm:mt-4
                  "
                >
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div
            className="
              mt-6

              rounded-2xl

              border
              border-primary/20

              bg-accent

              p-5

              sm:p-6
            "
          >
            <p
              className="
                text-[10px]
                font-extrabold
                uppercase
                tracking-[.16em]
                text-primary

                sm:text-xs
              "
            >
              What the college gets
            </p>

            <p
              className="
                mt-2
                text-sm
                font-extrabold

                sm:text-base
              "
            >
              A clear picture of strengths, gaps and training
              priorities.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          02 BUILD
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
            02 • Build
          </p>

          <h2 className="section-title">
            Build the capabilities{" "}
            <span className="text-primary">
              companies look for.
            </span>
          </h2>

          <p
            className="
              mt-4
              max-w-3xl

              text-sm
              text-muted-foreground

              sm:text-base
            "
          >
            Students move through focused modules designed
            around actual recruitment requirements.
          </p>

          <div
            ref={moduleRef}
            className="
              mt-8

              grid

              gap-5

              md:grid-cols-2

              xl:grid-cols-3
            "
          >
            {buildModules.map(
              ([title, body, image, fallbackImage, Icon]) => (
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
                    "
                  >
                    <img
                      src={image}
                      alt={`${title} training`}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(event) => {
                        event.currentTarget.onerror = null;
                        event.currentTarget.src = fallbackImage;
                      }}
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
          03 COMPANY PREP
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
          <p className="section-kicker">
            03 • Company-Specific Preparation
          </p>

          <h2 className="section-title">
            Different companies test{" "}
            <span className="text-primary">
              different capabilities.
            </span>
          </h2>

          <p
            className="
              mt-4
              max-w-3xl

              text-sm
              text-muted-foreground

              sm:text-base
            "
          >
            Our training can be customised around the roles,
            assessment patterns and recruitment stages relevant
            to your target companies.
          </p>

          {/* MOBILE FLOW */}

          <div
            className="
              mt-7

              rounded-[1.5rem]

              bg-ink

              p-5

              text-white

              shadow-xl

              md:hidden
            "
          >
            <div className="space-y-2">
              {companyFlow.map((item, index) => (
                <div key={item}>
                  <div
                    className="
                      rounded-xl

                      border
                      border-white/10

                      bg-white/5

                      px-4
                      py-3

                      text-center

                      text-sm
                      font-extrabold
                    "
                  >
                    {item}
                  </div>

                  {index !== companyFlow.length - 1 && (
                    <ArrowDown
                      className="
                        mx-auto
                        my-2
                        size-4
                        text-primary
                      "
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* DESKTOP FLOW */}

          <div
            className="
              mt-8

              hidden

              rounded-[1.7rem]

              bg-ink

              p-6

              text-white

              shadow-xl

              md:block
            "
          >
            <div
              className="
                flex
                items-center
                justify-between
                gap-3

                text-xs
                font-extrabold

                lg:text-sm
              "
            >
              {companyFlow.map((item, index) => (
                <div
                  key={item}
                  className="
                    flex
                    min-w-0
                    items-center
                    gap-3
                  "
                >
                  <span className="whitespace-nowrap">
                    {item}
                  </span>

                  {index !== companyFlow.length - 1 && (
                    <ArrowRight
                      className="
                        size-4
                        shrink-0
                        text-primary
                      "
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div
            className="
              mt-6

              grid

              gap-4

              md:grid-cols-2

              xl:grid-cols-3
            "
          >
            {companyPrep.map(([title, body]) => (
              <div
                key={title}
                className="
                  rounded-2xl

                  border
                  border-border

                  bg-card

                  p-5

                  shadow-sm

                  sm:p-6
                "
              >
                <Building2 className="size-5 text-primary" />

                <h3
                  className="
                    mt-4

                    text-base
                    font-extrabold

                    sm:text-lg
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

          <p
            className="
              mt-7

              text-center

              font-display

              text-lg
              font-extrabold
              leading-7

              sm:text-xl
            "
          >
            Students should know what they are likely to face{" "}
            <span className="text-primary">
              before they face it.
            </span>
          </p>
        </div>
      </section>

      {/* =====================================================
          04 MOCK TESTS
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
              04 • Mock Tests
            </p>

            <h2 className="section-title">
              Practice the test{" "}
              <span className="text-primary">
                before the real test.
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
              Knowing a concept isn't enough. Students need to
              experience time pressure, negative marking,
              sectional cut-offs, question difficulty and
              recruitment-style evaluation.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Aptitude Mock Tests — Quantitative | Logical | Verbal",
                "Technical Mock Tests — Core concepts | Programming | Role-specific questions",
                "Company-Pattern Tests — relevant recruitment formats and difficulty levels",
                "Sectional Tests — focused practice for specific capability areas",
                "Full-Length Recruitment Tests — complete timed assessment simulation",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    gap-3

                    rounded-xl

                    border
                    border-border

                    bg-card

                    p-4
                  "
                >
                  <CheckCircle2
                    className="
                      mt-0.5
                      size-5
                      shrink-0
                      text-primary
                    "
                  />

                  <p
                    className="
                      text-sm
                      leading-6
                    "
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="
                mt-6

                rounded-xl

                bg-primary

                p-4

                text-center

                text-xs
                font-extrabold
                leading-6

                text-white

                sm:p-5
                sm:text-sm
              "
            >
              Test → Analyse → Identify Gaps → Practise → Retest
            </div>
          </div>

          <div
            className="
              order-first

              lg:order-none
            "
          >
            <img
              src={photos.computerLab}
              alt="Mock test practice"
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
          05 + 06
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
            gap-5

            py-12

            sm:py-16

            md:py-24

            lg:grid-cols-2
            lg:gap-6
          "
        >
          {/* INTERVIEW */}

          <article
            className="
              service-card
              overflow-hidden
            "
          >
            <img
              src={photos.campusCohort}
              alt="Mock interviews"
              className="
                h-44
                w-full
                object-cover

                sm:h-56
              "
            />

            <div
              className="
                p-5

                sm:p-7
              "
            >
              <p className="section-kicker">
                05 • Practise the Interview
              </p>

              <h2
                className="
                  mt-4

                  text-xl
                  font-extrabold
                  leading-tight

                  sm:text-2xl
                "
              >
                Because knowing the answer isn't the same as
                answering well.
              </h2>

              <div className="mt-6 space-y-5">
                <div>
                  <h3 className="font-extrabold">
                    Technical Mock Interviews
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    Projects | Core Concepts | Problem Solving |
                    Technical Questions
                  </p>
                </div>

                <div>
                  <h3 className="font-extrabold">
                    HR Mock Interviews
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    Introduction | Behavioural Questions |
                    Strengths & Weaknesses | Career Goals |
                    Situational Questions
                  </p>
                </div>

                <div>
                  <h3 className="font-extrabold">
                    Interview Feedback
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    Content | Clarity | Confidence | Structure |
                    Communication | Professionalism
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* MOCK DRIVE */}

          <article
            className="
              overflow-hidden

              rounded-[1.5rem]

              bg-ink

              text-white

              shadow-xl

              sm:rounded-[1.75rem]
            "
          >
            <img
              src={photos.auditoriumCelebration}
              alt="Mock placement drive"
              className="
                h-44
                w-full

                object-cover

                opacity-85

                sm:h-56
              "
            />

            <div
              className="
                p-5

                sm:p-7
              "
            >
              <p className="section-kicker">
                06 • Mock Drives
              </p>

              <h2
                className="
                  mt-4

                  text-xl
                  font-extrabold
                  leading-tight

                  sm:text-2xl
                "
              >
                Give students the experience before the actual
                placement drive.
              </h2>

              <div className="mt-6 space-y-2.5">
                {[
                  "Pre-Assessment",
                  "Aptitude / Online Test",
                  "Technical / Coding Round",
                  "Group Discussion / Case Round",
                  "Technical Interview",
                  "HR Interview",
                  "Final Evaluation",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <span
                      className="
                        flex
                        size-7
                        shrink-0

                        items-center
                        justify-center

                        rounded-full

                        bg-primary

                        text-[10px]
                        font-extrabold

                        sm:size-8
                        sm:text-xs
                      "
                    >
                      {index + 1}
                    </span>

                    <span
                      className="
                        text-xs
                        font-semibold

                        sm:text-sm
                      "
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* =====================================================
          07 MEASURE
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
            07 • Measure
          </p>

          <h2 className="section-title">
            Don't just report attendance.{" "}
            <span className="text-primary">
              Measure capability development.
            </span>
          </h2>

          <p
            className="
              mt-4
              max-w-3xl

              text-sm
              text-muted-foreground

              sm:text-base
            "
          >
            We compare student performance before and after the
            intervention.
          </p>

          <div
            className="
              mt-7

              grid

              gap-3

              min-[420px]:grid-cols-2

              md:grid-cols-3

              xl:grid-cols-5
            "
          >
            {[
              [
                "Aptitude Improvement",
                "Accuracy | Speed | Problem Solving",
              ],
              [
                "Technical Improvement",
                "Concept Clarity | Coding | Technical Application",
              ],
              [
                "Communication Improvement",
                "Clarity | Fluency | Confidence | Structure",
              ],
              [
                "Interview Readiness",
                "Answer Quality | Confidence | Professionalism",
              ],
              [
                "Overall Placement Readiness",
                "A complete view of student preparedness",
              ],
            ].map(([title, body]) => (
              <div
                key={title}
                className="
                  rounded-2xl

                  border
                  border-border

                  bg-card

                  p-4

                  shadow-sm

                  sm:p-5
                "
              >
                <BarChart3 className="size-5 text-primary" />

                <h3
                  className="
                    mt-4

                    text-sm
                    font-extrabold
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
                  "
                >
                  {body}
                </p>
              </div>
            ))}
          </div>

          <div
            className="
              mt-7

              rounded-2xl

              bg-ink

              p-5

              text-center

              font-display

              text-xs
              font-extrabold
              leading-6

              text-white

              sm:p-6
              sm:text-sm

              md:text-base
            "
          >
            PRE-ASSESSMENT → TRAINING → MOCK TEST →
            POST-ASSESSMENT
          </div>
        </div>
      </section>

      {/* =====================================================
          PROGRAM OPTIONS
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
          <p className="section-kicker">
            Modular • Flexible • Built Around Your College
          </p>

          <h2 className="section-title">
            Choose the intervention{" "}
            <span className="text-primary">
              your students need.
            </span>
          </h2>

          <div
            ref={packageRef}
            className="
              mt-7

              grid

              gap-4

              sm:grid-cols-2

              lg:grid-cols-3

              xl:grid-cols-5
            "
          >
            {packages.map(([number, title, body]) => (
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
                "
              >
                <span className="number-chip">
                  {number}
                </span>

                <h3
                  className="
                    mt-5
                    font-extrabold
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

          <div
            className="
              mt-8

              grid

              gap-4

              sm:grid-cols-2

              lg:grid-cols-4
            "
          >
            {years.map(([year, body]) => (
              <div
                key={year}
                className="
                  rounded-2xl

                  border
                  border-border
                  border-t-4
                  border-t-primary

                  bg-secondary/50

                  p-5

                  sm:p-6
                "
              >
                <GraduationCap className="size-6 text-primary" />

                <h3
                  className="
                    mt-4

                    text-lg
                    font-extrabold

                    sm:text-xl
                  "
                >
                  {year}
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
          PLACEMENT COMPANIES
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

            gap-8

            py-12

            sm:py-16

            md:py-24

            lg:grid-cols-[.9fr_1.1fr]
            lg:items-center
            lg:gap-10
          "
        >
          <div>
            <p className="section-kicker">
              Placement companies
            </p>

            <h2 className="section-title">
              Students get trained for{" "}
              <span className="text-primary">
                top company placements.
              </span>
            </h2>

            <p
              className="
                mt-5

                text-sm
                leading-7

                text-muted-foreground

                sm:text-base
              "
            >
              The Elev8 brochure features leading employers
              across consulting, technology, finance and other
              sectors.
            </p>
          </div>

          <div
            className="
              overflow-hidden

              rounded-[1.5rem]

              border
              border-border

              bg-white

              p-2

              shadow-xl

              sm:rounded-[2rem]
              sm:p-3
            "
          >
            <img
              src={photos.companyCollage}
              alt="Top company placement logos from Elev8 brochure"
              className="
                h-auto
                w-full
                rounded-[1.1rem]
                object-contain

                sm:rounded-[1.3rem]
              "
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIALS
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
          <p className="section-kicker">
            Campus recommendations
          </p>

          <h2 className="section-title">
            What placement leaders say{" "}
            <span className="text-primary">
              about Elev8.
            </span>
          </h2>

          <div
            className="
              mt-7

              grid

              gap-4

              lg:grid-cols-2
              lg:gap-5
            "
          >
            {testimonials.map(
              ([name, role, text]) => (
                <div
                  key={name}
                  className="
                    rounded-[1.5rem]

                    border
                    border-border

                    bg-card

                    p-5

                    shadow-sm

                    sm:rounded-[1.7rem]
                    sm:p-7
                  "
                >
                  <Quote className="size-6 text-primary" />

                  <p
                    className="
                      mt-4

                      text-sm
                      leading-7

                      text-muted-foreground
                    "
                  >
                    {text}
                  </p>

                  <p className="mt-5 font-extrabold">
                    {name}
                  </p>

                  <p
                    className="
                      mt-1

                      text-xs
                      leading-5

                      text-muted-foreground
                    "
                  >
                    {role}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
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
              From campus to career
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
              Prepare students for the companies they want to
              join.
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
            Partner with Elev8

            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}