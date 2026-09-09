import { createFileRoute, Link } from "@tanstack/react-router";

import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  FileText,
  GraduationCap,
  Linkedin,
  MessageCircle,
  Mic2,
  Presentation,
  Quote,
  Radio,
  Sparkles,
  Target,
  Trophy,
  Users,
  UsersRound,
} from "lucide-react";

import { photos } from "@/lib/site";

import {
  useReveal,
  useRevealChildren,
} from "@/hooks/useReveal";

/* =========================================================
   ROUTE
========================================================= */

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About Us — Elev8 Learning Pvt Ltd",
      },
      {
        name: "description",
        content:
          "About Elev8 Learning, its training modules, signature programs, partnerships, placement companies and recommendations from university leaders.",
      },
    ],
  }),

  component: AboutPage,
});

/* =========================================================
   STATS
========================================================= */

const brochureStats = [
  {
    value: "100000+",
    title: "Students Trained",
    icon: UsersRound,
  },
  {
    value: "11 Years",
    title: "of Training Excellence",
    icon: Award,
  },
  {
    value: "70+",
    title: "Universities and Institutions Trust Us",
    icon: GraduationCap,
  },
] as const;

/* =========================================================
   PROOF
========================================================= */

const proofPoints = [
  {
    icon: Award,
    title: "Proven Track Record",
    text: "Proven Track Record in Developing Talent",
  },
  {
    icon: Linkedin,
    title: "Industry Recognition",
    text: "Featured on LinkedIn News Asia & India",
  },
  {
    icon: GraduationCap,
    title: "Placement Focus",
    text: "Helping Colleges & Students Secure Top Placements",
  },
] as const;

/* =========================================================
   MODULES
========================================================= */

const trainingModules = [
  {
    title: "Technical Training",
    icon: Code2,
  },
  {
    title: "Quantitative Aptitude",
    icon: Target,
  },
  {
    title: "Verbal Ability",
    icon: MessageCircle,
  },
  {
    title: "Soft Skills",
    icon: Sparkles,
  },
  {
    title: "Group Discussion & Personal Interview (GDPI)",
    icon: Users,
  },
  {
    title: "Communication Skills",
    icon: Mic2,
  },
] as const;

/* =========================================================
   FAMOUS FOR
========================================================= */

const famousFor = [
  {
    title: "Campus To Corporate Summits",
    place: "Institute of Marketing Management, Delhi",
    image: photos.fullHall,
  },
  {
    title: "Induction Programs",
    place: "Amity University, Bhubaneswar",
    image: photos.batchGroup,
  },
  {
    title: "Job Hunting Skills Workshops",
    place: "Symbiosis Institute of Business Management, Pune",
    image: photos.campusCohort,
  },
] as const;

/* =========================================================
   EXCLUSIVE EXPERIENCE
========================================================= */

const exclusiveExperience = [
  {
    icon: FileText,
    title: "Unique Resume Building Formula",
    body:
      "Unique Resume & Profile Building: One-of-a-Kind in India (Our Speciality)",
  },
  {
    icon: Radio,
    title: "Live Podcast — Every Thursday @8 pm",
    body:
      "For your students featuring industry experts — HR professionals, product managers, investment bankers, and insights on breaking into Big 4 firms.",
  },
  {
    icon: Target,
    title: "Placement Score Cards",
    body:
      "Personalized Placement Scorecards: Student Strengths & Weaknesses — Key Reference for Placement Offices & Deans.",
  },
] as const;

/* =========================================================
   TESTIMONIALS
========================================================= */

const testimonials = [
  {
    name: "Dr. S. Rajkumar",
    role:
      "Dean of Management Studies, Mount Carmel College",
    text:
      "Elev8 Learning's 80-hour training streamlined MBA placements and tailored internships. Exceptional skills training notably enhanced student capabilities. Insightful mock interviews effectively revealed individual strengths with scorecards.",
  },
  {
    name: "Prof. Smita Lal",
    role:
      "Dean, Institute of Marketing & Management",
    text:
      "Your workshops on ATS Resumes at IMM C2C Summit was invaluable. Students gained rich insights on personal branding, confidence building. Your guidance will undoubtedly steer their career paths.",
  },
  {
    name: "Sanmay Rath",
    role:
      "Placement Officer, AMITY University",
    text:
      "Coach Ashfak has been a very popular brand name at AGBS, BHUBANESWAR campus. He has taken many enthralling sessions on job hunting skills and life skills at our campus and students love hear his words of wisdom. He was one of our guests at the orientation programme 2021 who took wonderful motivational session.",
  },
  {
    name: "Dr. B.S. Srikanta",
    role:
      "Director, Sindhi College",
    text:
      "The Job Hunting skills workshop is a Unique concept for fresh graduates and working professionals who are serious about getting good jobs in today's very competitive job market.",
  },
] as const;

/* =========================================================
   PAGE
========================================================= */

function AboutPage() {
  const heroText = useReveal<HTMLDivElement>();
  const heroVisual = useReveal<HTMLDivElement>();

  const proofRef =
    useRevealChildren<HTMLDivElement>();

  const moduleRef =
    useRevealChildren<HTMLDivElement>();

  const famousRef =
    useRevealChildren<HTMLDivElement>();

  const exclusiveRef =
    useRevealChildren<HTMLDivElement>();

  const testimonialRef =
    useRevealChildren<HTMLDivElement>();

  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}
 {/* =====================================================
    ABOUT HERO — COMPACT ONE-SCREEN VERSION
====================================================== */}

<section
  className="
    relative
    overflow-hidden
    border-b
    border-border
    bg-[#f8f5f0]

    lg:h-[calc(100svh-96px)]
    lg:min-h-[680px]
  "
>
  {/* Background grid */}
  <div
    className="
      pointer-events-none
      absolute
      inset-0

      bg-[linear-gradient(to_right,rgba(80,80,80,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(80,80,80,0.04)_1px,transparent_1px)]
      bg-[size:48px_48px]
    "
  />

  {/* Soft glows */}
  <div
    className="
      pointer-events-none
      absolute
      -left-24
      top-16

      h-[300px]
      w-[300px]

      rounded-full
      bg-primary/10

      blur-[110px]
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      -right-20
      top-0

      h-[360px]
      w-[360px]

      rounded-full
      bg-rose-100/60

      blur-[120px]
    "
  />

  {/* =====================================================
      MAIN WRAPPER
  ====================================================== */}

  <div
    className="
      relative
      z-10
      mx-auto

      grid
      h-full
      w-full
      max-w-[1460px]

      items-center

      gap-8

      px-4
      py-8

      sm:px-6
      sm:py-10

      md:px-8

      lg:grid-cols-[0.9fr_1.1fr]
      lg:gap-10
      lg:px-10
      lg:py-4

      xl:grid-cols-[0.88fr_1.12fr]

      2xl:max-w-[1520px]
    "
  >
    {/* =====================================================
        LEFT CONTENT
    ====================================================== */}

    <div
      ref={heroText}
      className="
        reveal-left
        relative
        z-20

        max-w-[650px]
      "
    >
      {/* Eyebrow */}

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
          "
        >
          About Elev8 Learning
        </span>
      </div>

      {/* Heading */}

      <h1
        className="
          mt-4

          text-[2.35rem]
          font-extrabold
          leading-[0.95]
          tracking-[-0.05em]

          text-[#0b1020]

          sm:text-[2.9rem]

          md:text-[3.3rem]

          lg:text-[3.45rem]

          xl:text-[3.8rem]
        "
      >
        We don't just train students.

        <span className="block text-primary">
          We prepare them for what comes next.
        </span>
      </h1>

      {/* Description */}

      <p
        className="
          mt-5
          max-w-[620px]

          text-sm
          leading-7

          text-muted-foreground

          sm:text-base

          lg:text-[0.98rem]
          lg:leading-7
        "
      >
        Elev8 Learning works with colleges and universities to build
        employability, communication, technical capability and placement
        readiness through practical training and assessment.
      </p>

      <p
        className="
          mt-2
          max-w-[620px]

          text-sm
          leading-6

          text-muted-foreground
        "
      >
        Our programs help students strengthen the skills, confidence and
        professional readiness needed to move from campus to career.
      </p>

      {/* Compact highlight */}

      <div
        className="
          mt-4
          max-w-[600px]

          rounded-xl

          border
          border-border
          border-l-4
          border-l-primary

          bg-white/85

          px-4
          py-3

          shadow-sm
        "
      >
        <p
          className="
            text-xs
            font-extrabold

            sm:text-sm
          "
        >
          Training • Assessment • Employability • Placement Readiness
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

            px-6
            py-3

            text-sm
            font-extrabold

            text-white

            shadow-[0_10px_25px_rgba(190,0,60,0.18)]

            transition-all
            duration-300

            hover:-translate-y-0.5
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

        <a
          href="#our-story"
          className="
            group

            inline-flex
            items-center
            justify-center
            gap-2

            rounded-full

            border
            border-primary/25

            bg-white/85

            px-6
            py-3

            text-sm
            font-extrabold

            text-foreground

            transition-all

            hover:border-primary
            hover:text-primary
          "
        >
          Our Story

          <ArrowRight
            className="
              size-4
              transition-transform

              group-hover:translate-x-1
            "
          />
        </a>
      </div>
    </div>

    {/* =====================================================
        RIGHT VISUAL
    ====================================================== */}

    <div
      ref={heroVisual}
      className="
        reveal-right
        relative

        mx-auto
        w-full

        max-w-[720px]

        lg:max-w-none
      "
    >
      {/* Main image */}

      <div
        className="
          relative

          overflow-hidden

          rounded-[1.7rem]

          border
          border-white/50

          bg-white

          shadow-[0_22px_55px_rgba(20,20,30,0.12)]

          sm:rounded-[2rem]
        "
      >
        <img
          src={photos.lectureHall}
          alt="Elev8 training session"
          className="
            aspect-[4/3]
            w-full

            object-cover

            sm:aspect-[5/4]

            lg:h-[430px]
            lg:aspect-auto

            xl:h-[455px]
          "
        />

        {/* overlay text */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0

            bg-gradient-to-t
            from-black/70
            via-black/20
            to-transparent

            px-5
            pb-5
            pt-20
          "
        >
          <p
            className="
              text-[9px]
              font-extrabold
              uppercase
              tracking-[0.16em]

              text-white/65
            "
          >
            Our Purpose
          </p>

          <p
            className="
              mt-1.5
              max-w-md

              text-sm
              font-extrabold
              leading-5

              text-white

              sm:text-base
              sm:leading-6
            "
          >
            Helping students build capability, confidence and career
            readiness.
          </p>
        </div>
      </div>

      {/* Small image */}

      <div
        className="
          mt-3

          grid
          grid-cols-2
          gap-3

          sm:absolute
          sm:-bottom-5
          sm:-left-6
          sm:mt-0
          sm:w-[215px]

          lg:w-[230px]
        "
      >
        <div
          className="
            col-span-2

            overflow-hidden

            rounded-[1.2rem]

            border-4
            border-[#f8f5f0]

            bg-white

            shadow-xl
          "
        >
          <img
            src={photos.convocation}
            alt="Elev8 students"
            className="
              aspect-[4/3]
              w-full
              object-cover
            "
          />
        </div>
      </div>

      {/* =====================================================
          IMPACT CARDS
      ====================================================== */}

      {/* =====================================================
    HERO IMPACT STATS
====================================================== */}

<div
  className="
    mt-5

    grid
    grid-cols-1
    gap-3

    min-[520px]:grid-cols-3

    lg:absolute
    lg:-right-5
    lg:bottom-8
    lg:mt-0
    lg:w-[280px]
    lg:grid-cols-1
    lg:gap-2.5

    xl:-right-8
  "
>
  {/* 100K+ */}

  <div
    className="
      rounded-[1.2rem]

      border
      border-border

      bg-white/95

      p-4

      shadow-lg
      backdrop-blur
    "
  >
    <div
      className="
        flex
        items-center
        gap-4
      "
    >
      <div
        className="
          flex
          size-11
          shrink-0

          items-center
          justify-center

          rounded-xl

          bg-accent

          text-primary
        "
      >
        <UsersRound className="size-5" />
      </div>

      <div className="min-w-0">
        <p
          className="
            text-xl
            font-extrabold
            leading-none

            text-foreground

            sm:text-2xl
          "
        >
          100K+
        </p>

        <p
          className="
            mt-2

            text-sm
            leading-5

            text-muted-foreground
          "
        >
          Students trained
        </p>
      </div>
    </div>
  </div>

  {/* 11 YEARS */}

  <div
    className="
      rounded-[1.2rem]

      border
      border-border

      bg-white/95

      p-4

      shadow-lg
      backdrop-blur
    "
  >
    <div
      className="
        flex
        items-center
        gap-4
      "
    >
      <div
        className="
          flex
          size-11
          shrink-0

          items-center
          justify-center

          rounded-xl

          bg-accent

          text-primary
        "
      >
        <Award className="size-5" />
      </div>

      <div className="min-w-0">
        <p
          className="
            text-xl
            font-extrabold
            leading-none

            text-foreground

            sm:text-2xl
          "
        >
          11 Years
        </p>

        <p
          className="
            mt-2

            text-sm
            leading-5

            text-muted-foreground
          "
        >
          Training excellence
        </p>
      </div>
    </div>
  </div>

  {/* 70+ */}

  <div
    className="
      rounded-[1.2rem]

      border
      border-border

      bg-white/95

      p-4

      shadow-lg
      backdrop-blur
    "
  >
    <div
      className="
        flex
        items-center
        gap-4
      "
    >
      <div
        className="
          flex
          size-11
          shrink-0

          items-center
          justify-center

          rounded-xl

          bg-accent

          text-primary
        "
      >
        <GraduationCap className="size-5" />
      </div>

      <div className="min-w-0">
        <p
          className="
            text-xl
            font-extrabold
            leading-none

            text-foreground

            sm:text-2xl
          "
        >
          70+
        </p>

        <p
          className="
            mt-2

            text-sm
            leading-5

            text-muted-foreground
          "
        >
          Institutions trust us
        </p>
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
</section>

      {/* =====================================================
          IMPACT STATS
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

            sm:grid-cols-3
            sm:gap-4
            sm:py-10

            lg:gap-5
          "
        >
          {brochureStats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="
                  group

                  rounded-2xl

                  border
                  border-white/10

                  bg-white/5

                  p-5

                  transition-all

                  hover:bg-white/10

                  sm:p-6
                "
              >
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                  "
                >
                  <div>
                    <p
                      className="
                        text-2xl
                        font-extrabold
                        text-white

                        sm:text-3xl

                        lg:text-4xl
                      "
                    >
                      {stat.value}
                    </p>

                    <p
                      className="
                        mt-2
                        text-xs
                        leading-5
                        text-white/60

                        sm:text-sm
                      "
                    >
                      {stat.title}
                    </p>
                  </div>

                  <div
                    className="
                      flex
                      size-11
                      shrink-0
                      items-center
                      justify-center

                      rounded-xl

                      bg-white/10
                      text-primary

                      sm:size-12
                    "
                  >
                    <Icon className="size-5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          OUR STORY
      ====================================================== */}

      <section
        id="our-story"
        className="
          scroll-mt-24

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

            lg:grid-cols-[0.82fr_1.18fr]
            lg:items-stretch
            lg:gap-10
          "
        >
          {/* IMAGE */}

          <div
            className="
              overflow-hidden

              rounded-[1.5rem]

              shadow-xl

              sm:rounded-[2rem]
            "
          >
            <img
              src={photos.lectureHall}
              alt="Elev8 instructor training students"
              className="
                min-h-[280px]
                h-full
                w-full
                object-cover
              "
            />
          </div>

          {/* CONTENT */}

          <div
            className="
              grid
              gap-4
            "
          >
            <div
              className="
                rounded-[1.5rem]

                border
                border-border

                bg-card

                p-5

                shadow-sm

                sm:p-7
              "
            >
              <div
                className="
                  flex
                  size-11
                  items-center
                  justify-center

                  rounded-xl

                  bg-accent
                  text-primary
                "
              >
                <Users className="size-5" />
              </div>

              <p className="section-kicker mt-5">
                Who We Are?
              </p>

              <h2
                className="
                  mt-3
                  text-2xl
                  font-extrabold
                  sm:text-3xl
                "
              >
                A training and assessment company focused on
                student careers.
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
                We are a training and assessment company and our
                vision is to help students secure their dream jobs
                and careers and that is the guarantee we provide
                through our services.
              </p>
            </div>

            <div
              className="
                rounded-[1.5rem]

                border
                border-border

                bg-secondary/40

                p-5

                sm:p-7
              "
            >
              <div
                className="
                  flex
                  size-11
                  items-center
                  justify-center

                  rounded-xl

                  bg-accent
                  text-primary
                "
              >
                <Presentation className="size-5" />
              </div>

              <p className="section-kicker mt-5">
                What We Do?
              </p>

              <h2
                className="
                  mt-3
                  text-2xl
                  font-extrabold
                  sm:text-3xl
                "
              >
                Training designed around your students and industry
                demand.
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
                We customise training programs according to your
                needs and the demands of the industry. Programs
                range in modules, topics and time duration based on
                needs analysis done prior to the program.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROOF POINTS
      ====================================================== */}

      <section
        className="
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
            md:py-20
          "
        >
          <p className="section-kicker">
            Why Elev8
          </p>

          <h2 className="section-title">
            Experience backed by{" "}
            <span className="text-primary">
              real outcomes.
            </span>
          </h2>

          <div
            ref={proofRef}
            className="
              mt-8

              grid
              gap-4

              md:grid-cols-3

              lg:gap-5
            "
          >
            {proofPoints.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    reveal-child

                    rounded-[1.5rem]

                    border
                    border-border

                    bg-card

                    p-5

                    shadow-sm

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:shadow-lg

                    sm:p-6
                  "
                >
                  <div
                    className="
                      flex
                      size-11
                      items-center
                      justify-center

                      rounded-xl

                      bg-accent
                      text-primary
                    "
                  >
                    <Icon className="size-5" />
                  </div>

                  <h3
                    className="
                      mt-5
                      text-lg
                      font-extrabold

                      sm:text-xl
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-muted-foreground
                    "
                  >
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          TRAINING MODULES
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
              gap-6

              lg:grid-cols-[0.7fr_1.3fr]
              lg:items-end
              lg:gap-12
            "
          >
            <div>
              <p className="section-kicker">
                Training Modules
              </p>

              <h2 className="section-title">
                Employability Skills Training{" "}
                <span className="text-primary">
                  (40–80 Hours)
                </span>
              </h2>
            </div>

            <p
              className="
                max-w-3xl
                text-sm
                leading-7
                text-muted-foreground

                sm:text-base
              "
            >
              A complete employability capability mix covering
              technical knowledge, aptitude, communication, soft
              skills and recruitment-stage preparation.
            </p>
          </div>

          <div
            ref={moduleRef}
            className="
              mt-8

              grid
              gap-4

              sm:grid-cols-2

              lg:grid-cols-3
            "
          >
            {trainingModules.map((module, index) => {
              const Icon = module.icon;

              return (
                <div
                  key={module.title}
                  className="
                    reveal-child
                    group

                    relative
                    overflow-hidden

                    rounded-[1.4rem]

                    border
                    border-border

                    bg-card

                    p-5

                    shadow-sm

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-primary/30
                    hover:shadow-lg

                    sm:p-6
                  "
                >
                  <span
                    className="
                      absolute
                      right-4
                      top-3

                      text-5xl
                      font-black

                      text-primary/[0.05]
                    "
                  >
                    0{index + 1}
                  </span>

                  <div
                    className="
                      relative
                      flex
                      size-11
                      items-center
                      justify-center

                      rounded-xl

                      bg-accent
                      text-primary
                    "
                  >
                    <Icon className="size-5" />
                  </div>

                  <h3
                    className="
                      relative
                      mt-5

                      text-base
                      font-extrabold

                      sm:text-lg
                    "
                  >
                    {module.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          FAMOUS FOR
      ====================================================== */}

      <section
        className="
          border-b
          border-border

          bg-gradient-to-b
          from-primary
          from-[0%]
          via-primary
          via-[35%]
          to-background
          to-[35%]
        "
      >
        <div
          className="
            container-page

            py-12

            sm:py-16
            md:py-20
          "
        >
          <div className="text-center text-white">
            <p
              className="
                text-[10px]
                font-extrabold
                uppercase
                tracking-[.18em]

                text-white/65

                sm:text-xs
              "
            >
              Our Signature Programs
            </p>

            <h2
              className="
                mt-3
                text-2xl
                font-extrabold

                sm:text-3xl
                md:text-4xl
              "
            >
              We are Famous For
            </h2>
          </div>

          <div
            ref={famousRef}
            className="
              mt-8

              grid
              gap-5

              md:grid-cols-3
            "
          >
            {famousFor.map((item) => (
              <article
                key={item.title}
                className="
                  reveal-child
                  group

                  overflow-hidden

                  rounded-[1.5rem]

                  border
                  border-border

                  bg-card

                  shadow-xl
                "
              >
                <div
                  className="
                    overflow-hidden
                    h-48

                    sm:h-52
                  "
                >
                  <img
                    src={item.image}
                    alt={item.title}
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

                <div className="p-5 sm:p-6">
                  <h3
                    className="
                      text-lg
                      font-extrabold
                      sm:text-xl
                    "
                  >
                    {item.title}
                  </h3>

                  <div
                    className="
                      mt-4
                      flex
                      items-start
                      gap-2

                      border-t
                      border-border

                      pt-4
                    "
                  >
                    <GraduationCap
                      className="
                        mt-0.5
                        size-4
                        shrink-0
                        text-primary
                      "
                    />

                    <p
                      className="
                        text-sm
                        font-bold
                        leading-6
                        text-primary
                      "
                    >
                      {item.place}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          EXCLUSIVE EXPERIENCE
      ====================================================== */}

      <section
        className="
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

            sm:py-16
            md:py-24

            lg:grid-cols-[0.7fr_1.3fr]
            lg:gap-12
          "
        >
          {/* intro */}

          <div>
            <p className="section-kicker">
              Exclusive Experience
            </p>

            <h2 className="section-title">
              Tailored{" "}
              <span className="text-primary">
                just for you.
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
              Beyond classroom training, Elev8 provides practical
              tools and experiences designed to strengthen student
              profiles and placement readiness.
            </p>

            <div
              className="
                mt-6
                overflow-hidden
                rounded-[1.5rem]
                shadow-xl
              "
            >
              <img
                src={photos.campusCohort}
                alt="Elev8 student learning experience"
                className="
                  aspect-[4/3]
                  w-full
                  object-cover
                "
              />
            </div>
          </div>

          {/* cards */}

          <div
            ref={exclusiveRef}
            className="
              flex
              flex-col
              justify-center
              gap-4
            "
          >
            {exclusiveExperience.map(
              (item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="
                      reveal-child

                      grid
                      grid-cols-[auto_1fr]
                      gap-4

                      rounded-[1.4rem]

                      border
                      border-border

                      bg-card

                      p-4

                      shadow-sm

                      sm:p-5
                    "
                  >
                    <div
                      className="
                        flex
                        size-12
                        shrink-0
                        items-center
                        justify-center

                        rounded-xl

                        bg-accent
                        text-primary

                        sm:size-14
                      "
                    >
                      <Icon className="size-6" />
                    </div>

                    <div className="min-w-0">
                      <div
                        className="
                          flex
                          items-center
                          gap-2
                        "
                      >
                        <span
                          className="
                            text-[9px]
                            font-extrabold
                            uppercase
                            tracking-[.15em]

                            text-primary/60
                          "
                        >
                          0{index + 1}
                        </span>
                      </div>

                      <h3
                        className="
                          mt-1
                          text-base
                          font-extrabold

                          sm:text-lg
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-muted-foreground
                        "
                      >
                        {item.body}
                      </p>
                    </div>
                  </div>
                );
              },
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          COMPANY PLACEMENTS
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

            lg:grid-cols-[0.72fr_1.28fr]
            lg:items-center
            lg:gap-10
          "
        >
          <div>
            <p className="section-kicker">
              Top Company Placements
            </p>

            <h2 className="section-title">
              Where students get trained for{" "}
              <span className="text-primary">
                top company placements.
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
              The brochure features Amazon, PwC, KPMG, Accenture,
              HCL, Reliance, Infosys, EY, Pfizer, Barclays,
              Capgemini and HDFC.
            </p>

            <div
              className="
                mt-6
                flex
                items-center
                gap-3

                rounded-xl

                border
                border-border

                bg-secondary/40

                p-4
              "
            >
              <Trophy
                className="
                  size-5
                  shrink-0
                  text-primary
                "
              />

              <p className="text-sm font-bold">
                Training aligned with competitive IT and Non-IT
                placement opportunities.
              </p>
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
              src={photos.companyCollage}
              alt="Top company placement logos"
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
          PARTNERSHIPS
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

            lg:grid-cols-[0.72fr_1.28fr]
            lg:items-center
            lg:gap-10
          "
        >
          <div>
            <p className="section-kicker">
              Partnerships
            </p>

            <h2 className="section-title">
              A network of colleges and institutions across{" "}
              <span className="text-primary">
                India.
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
              Elev8 has successfully trained over 100,000
              candidates, facilitating placements in diverse IT
              and Non-IT organizations over the past decade. Our
              commitment extends to enhancing the quality of
              graduates across various fields.
            </p>

            <div
              className="
                mt-6
                grid
                grid-cols-2
                gap-3
              "
            >
              <div
                className="
                  rounded-xl
                  border
                  border-border
                  bg-card
                  p-4
                "
              >
                <p
                  className="
                    text-2xl
                    font-extrabold
                    text-primary
                  "
                >
                  70+
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    text-muted-foreground
                  "
                >
                  Universities & Institutions
                </p>
              </div>

              <div
                className="
                  rounded-xl
                  border
                  border-border
                  bg-card
                  p-4
                "
              >
                <p
                  className="
                    text-2xl
                    font-extrabold
                    text-primary
                  "
                >
                  100K+
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    text-muted-foreground
                  "
                >
                  Candidates Trained
                </p>
              </div>
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
              alt="Elev8 partner institutions"
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
          <div
            className="
              mx-auto
              max-w-4xl
              text-center
            "
          >
            <p className="section-kicker">
              Glowing Recommendations
            </p>

            <h2 className="section-title">
              From University Deans and{" "}
              <span className="text-primary">
                Placement Officers.
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-2xl

                text-sm
                leading-7
                text-muted-foreground

                sm:text-base
              "
            >
              What campus leaders say about Elev8's training,
              placement readiness programs and career capability
              initiatives.
            </p>
          </div>

          <div
            ref={testimonialRef}
            className="
              mt-8

              grid
              gap-5

              lg:grid-cols-2
            "
          >
            {testimonials.map(
              (item, index) => (
                <article
                  key={item.name}
                  className="
                    reveal-child

                    relative

                    rounded-[1.5rem]

                    border
                    border-border

                    bg-card

                    p-5

                    shadow-sm

                    sm:p-7
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-4
                    "
                  >
                    <div
                      className="
                        flex
                        size-11
                        items-center
                        justify-center

                        rounded-xl

                        bg-accent
                        text-primary
                      "
                    >
                      <Quote className="size-5" />
                    </div>

                    <span
                      className="
                        text-4xl
                        font-black
                        text-primary/[0.07]
                      "
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <p
                    className="
                      mt-5
                      text-sm
                      leading-7
                      text-muted-foreground
                    "
                  >
                    “{item.text}”
                  </p>

                  <div
                    className="
                      mt-6

                      border-t
                      border-border

                      pt-5
                    "
                  >
                    <p
                      className="
                        font-extrabold
                        text-primary
                      "
                    >
                      {item.name}
                    </p>

                    <p
                      className="
                        mt-1
                        text-xs
                        leading-5
                        text-muted-foreground
                      "
                    >
                      {item.role}
                    </p>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CONTACT
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden

          bg-ink
          text-white
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            -right-24
            top-0
            size-80

            rounded-full

            bg-primary/20

            blur-3xl
          "
        />

        <div
          className="
            container-page
            relative
            z-10

            grid
            gap-8

            py-12

            sm:py-14

            lg:grid-cols-[1fr_auto]
            lg:items-center
          "
        >
          <div>
            <p
              className="
                text-[10px]
                font-extrabold
                uppercase
                tracking-[.18em]

                text-white/55

                sm:text-xs
              "
            >
              Reach Out To Us
            </p>

            <h2
              className="
                mt-3
                text-2xl
                font-extrabold

                sm:text-3xl
              "
            >
              +91 99161 70317
            </h2>

            <p
              className="
                mt-4
                text-sm
                leading-6
                text-white/70
              "
            >
              ashfak@mohammadashfak.com
            </p>

            <p
              className="
                mt-1
                max-w-2xl
                text-sm
                leading-6
                text-white/70
              "
            >
              Elev8 Learning Pvt Ltd, Unit 103, Prestige Infantry
              Court, Infantry Road, Bengaluru, Karnataka 560001
            </p>
          </div>

          <Link
            to="/contact"
            className="
              inline-flex
              w-full
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

              sm:w-auto
            "
          >
            Contact Elev8

            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}