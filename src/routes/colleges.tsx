import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  GraduationCap,
  MonitorCheck,
  Quote,
  Target,
  UserRound,
} from "lucide-react";

import { photos } from "@/lib/site";
import landingHero from "@/assets/landingHero.png";
import itImage from "@/assets/it.png";
import bfsiImage from "@/assets/bfsi.png";
import graduateImage from "@/assets/graduate.png";
import manSuccessImage from "@/assets/manSuccess.png";
import rajakumarImage from "@/assets/rajakumar.png";
import sanmayImage from "@/assets/sanmay.png";
import srikantaImage from "@/assets/srikanta.png";
import smitha from "@/assets/smitha.jpeg";

import amazonLogo from "@/assets/brand/amazon.png";
import pwcLogo from "@/assets/brand/pwc.png";
import kpmgLogo from "@/assets/brand/kpmg.png";
import accentureLogo from "@/assets/brand/accenture.png";
import hclLogo from "@/assets/brand/hcl.png";
import relianceLogo from "@/assets/brand/reliance.png";
import infosysLogo from "@/assets/brand/infosys.png";
import eyLogo from "@/assets/brand/ey.png";
import pfizerLogo from "@/assets/brand/pfizer.png";
import barclaysLogo from "@/assets/brand/barclays.png";
import capgeminiLogo from "@/assets/brand/capgemini.png";
import hdfcLogo from "@/assets/brand/hdfc.png";

import alkeshDineshLogo from "@/assets/institution/alkesh.jpeg";
import amityUniversityLogo from "@/assets/institution/amity.png";
import asciLogo from "@/assets/institution/asci.png";
import dayanandaSagarLogo from "@/assets/institution/dayananda.png";
import gardenCityLogo from "@/assets/institution/garden.png";
import hlCommerceLogo from "@/assets/institution/hl.png";
import immLogo from "@/assets/institution/imm.jpg";
import mountCarmelLogo from "@/assets/institution/mount.png";
import oxfordLogo from "@/assets/institution/oxford.jpeg";
import paduaLogo from "@/assets/institution/padua.png";
import rayatBahraLogo from "@/assets/institution/rayat.png";
import shasunJainLogo from "@/assets/institution/shasun.jpeg";
import sibmPuneLogo from "@/assets/institution/sibm.png";
import sindhiCollegeLogo from "@/assets/institution/sindh.jpeg";

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



const companyPrep = [
  {
    title: "IT / Technology Hiring",
    items: [
      "Coding",
      "Technical MCQs",
      "Logical Reasoning",
      "Technical Interviews",
    ],
    image: itImage,
    imageAlt: "IT and technology hiring preparation",
    theme: "pink",
  },
  {
    title: "BFSI / Finance Roles",
    items: [
      "Quantitative Ability",
      "Reasoning",
      "Financial Awareness",
      "Communication",
      "HR Interviews",
    ],
    image: bfsiImage,
    imageAlt: "BFSI and finance hiring preparation",
    theme: "blue",
  },
  {
    title: "Graduate / General Management Roles",
    items: [
      "Aptitude",
      "Communication",
      "GD / Case Discussions",
      "HR & Managerial Interviews",
    ],
    image: graduateImage,
    imageAlt: "Graduate and general management preparation",
    theme: "green",
  },
] as const;

const companyFlow = [
  {
    title: "Company",
    description: "Understand targets",
    icon: Building2,
  },
  {
    title: "Role",
    description: "Analyse requirements",
    icon: UserRound,
  },
  {
    title: "Assessment",
    description: "Decode patterns",
    icon: BarChart3,
  },
  {
    title: "Training",
    description: "Focused modules",
    icon: GraduationCap,
  },
  {
    title: "Mock Test",
    description: "Practice environment",
    icon: MonitorCheck,
  },
  {
    title: "Feedback",
    description: "Improve performance",
    icon: Target,
  },
] as const;

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

const institutionBrands = [
  {
    name: "Mount Carmel College",
    city: "Bangalore",
    logo: mountCarmelLogo,
  },
  {
    name: "Symbiosis Institute of Business Management",
    city: "Pune",
    logo: sibmPuneLogo,
  },
  {
    name: "Amity University",
    city: "Bhubaneswar",
    logo: amityUniversityLogo,
  },
  {
    name: "Institute of Marketing & Management",
    city: "Delhi",
    logo: immLogo,
  },
  {
    name: "Alkesh Dinesh College",
    city: "Mumbai",
    logo: alkeshDineshLogo,
  },
  {
    name: "Sindhi College",
    city: "Bangalore",
    logo: sindhiCollegeLogo,
  },
  {
    name: "Garden City University",
    city: "Bangalore",
    logo: gardenCityLogo,
  },
  {
    name: "Dayanand Sagar",
    city: "Bangalore",
    logo: dayanandaSagarLogo,
  },
  {
    name: "Oxford College",
    city: "Bangalore",
    logo: oxfordLogo,
  },
  {
    name: "Rayat Bahra University",
    city: "Mohali",
    logo: rayatBahraLogo,
  },
  {
    name: "Administrative Staff College of India",
    city: "Bangalore",
    logo: asciLogo,
  },
  {
    name: "Padua College",
    city: "Mangalore",
    logo: paduaLogo,
  },
  {
    name: "Shasun Jain College for Women",
    city: "Chennai",
    logo: shasunJainLogo,
  },
  {
    name: "HL Commerce College",
    city: "Ahmedabad",
    logo: hlCommerceLogo,
  },
] as const;

const placementBrandsTop = [
  ["Amazon", amazonLogo],
  ["PwC", pwcLogo],
  ["KPMG", kpmgLogo],
  ["Accenture", accentureLogo],
  ["HCL", hclLogo],
  ["Reliance", relianceLogo],
] as const;

const placementBrandsBottom = [
  ["Infosys", infosysLogo],
  ["EY", eyLogo],
  ["Pfizer", pfizerLogo],
  ["Barclays", barclaysLogo],
  ["Capgemini", capgeminiLogo],
  ["HDFC", hdfcLogo],
] as const;

const testimonials = [
  [
    "Dr. S. Rajkumar",
    "Dean of Management Studies, Mount Carmel College",
    "Elev8 Learning's 80-hour training streamlined MBA placements and tailored internships. Exceptional skills training notably enhanced student capabilities. Insightful mock interviews effectively revealed individual strengths with scorecards.",
    rajakumarImage,
  ],
  [
    "Prof. Smita Lal",
    "Dean, Institute of Marketing & Management",
    "Your workshops on ATS Resumes at IMM C2C Summit was invaluable. Students gained rich insights on personal branding, confidence building. Your guidance will undoubtedly steer their career paths.",
    smitha,
  ],
  [
    "Sanmay Rath",
    "Placement Officer, AMITY University",
    "Coach Ashfak has been a very popular brand name at AGBS, BHUBANESWAR campus. He has taken many enthralling sessions on job hunting skills and life skills at our campus and students love to hear his words of wisdom. He was one of our guests at the orientation programme 2021 who took a wonderful motivational session.",
    sanmayImage,
  ],
  [
    "Dr. B.S. Srikanta",
    "Director, Sindhi College",
    "The Job Hunting skills workshop is a unique concept for fresh graduates and working professionals who are serious about getting good jobs in today’s very competitive job market.",
    srikantaImage,
  ],
] as const;

/* =========================================================

   PAGE

========================================================= */

function CollegesPage() {

  const [progressExpanded, setProgressExpanded] = useState(false);

  const progressCardStyle = (index: number) => ({
    transform: "translateX(0) translateY(0) scale(1)",
    opacity: 1,
    zIndex: 30 - index,
    transition: "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
  });

  const heroText = useReveal<HTMLDivElement>();

  const heroVisual = useReveal<HTMLDivElement>();



  const packageRef =

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

          lg:h-[570px]
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -left-20
            top-4
            size-56
            rounded-full
            bg-primary/8
            blur-3xl
            md:size-64
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            size-60
            rounded-full
            bg-rose-100/45
            blur-3xl
            md:size-72
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            grid
            w-full
            max-w-[1248px]
            items-start
            gap-8
            px-5
            pb-8
            pt-7
            sm:px-6
            sm:pt-8
            md:px-8
            lg:h-full
            lg:grid-cols-[1fr_1fr]
            lg:gap-[46px]
            lg:px-0
            lg:pb-6
            lg:pt-[34px]
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
    max-w-[640px]

    lg:translate-y-5
    xl:translate-y-6
  "
>
            <p
              className="
                font-display
                text-[1.1rem]
                font-black
                leading-none
                tracking-[-0.03em]
                text-primary
                sm:text-[1.2rem]
                md:text-[1.3rem]
                lg:text-[2.35rem]
              "
            >
              Placement Accelerator
            </p>

            <h1
              className="
                mt-3
                max-w-[640px]
                font-display
                text-[2.05rem]
                font-black
                leading-[1.02]
                tracking-[-0.045em]
                text-foreground
                sm:text-[2.4rem]
                md:text-[2.65rem]
                lg:text-[2.85rem]
                xl:text-[3rem]
              "
            >
              Your students are ready to graduate.{" "}
              <span className="text-primary">
                Are they ready to get hired?
              </span>
            </h1>

            <p
              className="
                mt-5
                max-w-[610px]
                text-[14px]
                leading-6
                text-muted-foreground
                sm:text-[15px]
                sm:leading-7
              "
            >
              Elev8 is a placement-readiness and employability training partner
              for colleges. We prepare students for the actual stages of
              recruitment — assessments, aptitude, technical rounds,
              communication, interviews and mock drives.
            </p>

            <div
              className="
                mt-5
                max-w-[450px]
                rounded-[18px]
                border
                border-border
                border-l-[5px]
                border-l-primary
                bg-white
                px-5
                py-4
                shadow-[0_10px_28px_rgba(15,23,42,0.06)]
              "
            >
              <p
                className="
                  font-display
                  text-[14px]
                  font-extrabold
                  leading-5
                  text-foreground
                  sm:text-[15px]
                "
              >
                Turn campus talent into placement-ready talent.
              </p>

              <p className="mt-1 text-[12px] leading-5 text-muted-foreground">
                Structured. Measurable. Recruitment-focused.
              </p>
            </div>

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
                  py-3.5
                  text-[13px]
                  font-extrabold
                  text-white
                  shadow-[0_12px_28px_rgba(196,0,79,0.18)]
                  transition
                  duration-300
                  hover:-translate-y-0.5
                  hover:opacity-90
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
                  bg-white
                  px-6
                  py-3.5
                  text-[13px]
                  font-extrabold
                  text-foreground
                  shadow-sm
                  transition
                  duration-300
                  hover:-translate-y-0.5
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
    flex
    w-full
    items-start
    justify-center
    overflow-visible

    lg:-translate-y-8
    xl:-translate-y-20
  "
>
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[76%]
                w-[84%]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-gradient-to-br
                from-primary/[0.05]
                via-transparent
                to-sky-100/30
                blur-3xl
              "
            />

            <img
              src={landingHero}
              alt="Elev8 Placement Accelerator"
              className="
                relative
                z-10
                block
                h-auto
                w-full
                max-w-[520px]
                object-contain
                sm:max-w-[540px]
                md:max-w-[555px]
                lg:max-w-[535px]
                xl:max-w-[550px]
              "
            />
          </div>
        </div>
      </section>

      {/* =====================================================

          PROGRAM OPTIONS

      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-b
          border-border
          bg-[#fffdfa]
        "
      >
        {/* soft decorative glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -left-24
            top-[42%]
            size-72
            rounded-full
            bg-primary/[0.035]
            blur-3xl
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            size-72
            rounded-full
            bg-rose-100/45
            blur-3xl
          "
        />

        <div
          className="
            container-page
            relative
            z-10
            py-10
            sm:py-12
            md:py-14
            lg:py-12
          "
        >
          {/* ================= TOP HEADING ================= */}
          <div className="mx-auto max-w-[860px] text-center">
            <p
              className="
                mx-auto
                inline-flex
                w-fit
                items-center
                gap-2
                rounded-full
                border
                border-primary/20
                bg-primary/[0.075]
                px-4
                py-2
                font-display
                text-xs
                font-black
                tracking-[-0.01em]
                text-primary
                shadow-[0_8px_24px_rgba(196,0,79,0.07)]
                sm:px-5
                sm:py-2.5
                sm:text-sm
              "
            >
              <span
                aria-hidden="true"
                className="grid grid-cols-2 gap-[3px]"
              >
                {Array.from({ length: 4 }).map((_, index) => (
                  <span
                    key={index}
                    className="size-[5px] rounded-[2px] bg-primary"
                  />
                ))}
              </span>
              Modular • Flexible • Built Around Your College
            </p>

            <h2
              className="
                mt-4
                mx-auto
                max-w-[760px]
                font-display
                text-[1.65rem]
                font-extrabold
                leading-[1.04]
                tracking-[-0.04em]
                text-foreground
                sm:text-[2rem]
                md:text-[2.25rem]
                lg:text-[2.55rem]
              "
            >
              Choose the intervention{" "}
              <span className="text-primary">your students need.</span>
            </h2>

            <p
              className="
                mt-3
                mx-auto
                max-w-[760px]
                text-[13px]
                leading-6
                text-muted-foreground
                sm:text-sm
                md:text-[15px]
              "
            >
              A structured set of programs designed to build the skills,
              confidence and readiness needed for campus placements.
            </p>
          </div>

          {/* ================= PROGRAM CARDS ================= */}
          <div
            ref={packageRef}
            className="
              mt-6
              grid
              grid-cols-1
              gap-3.5
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-5
            "
          >
            {packages.map(([number, title, body]) => {
              const theme =
                number === "01"
                  ? {
                      accent: "text-primary",
                      iconBg: "bg-primary/[0.08]",
                      border: "border-primary/20",
                      check: "bg-primary",
                      wave: "bg-primary/[0.055]",
                    }
                  : number === "02"
                    ? {
                        accent: "text-blue-600",
                        iconBg: "bg-blue-500/[0.08]",
                        border: "border-blue-200/70",
                        check: "bg-blue-600",
                        wave: "bg-blue-500/[0.06]",
                      }
                    : number === "03"
                      ? {
                          accent: "text-emerald-600",
                          iconBg: "bg-emerald-500/[0.08]",
                          border: "border-emerald-200/70",
                          check: "bg-emerald-600",
                          wave: "bg-emerald-500/[0.06]",
                        }
                      : number === "04"
                        ? {
                            accent: "text-amber-600",
                            iconBg: "bg-amber-500/[0.10]",
                            border: "border-amber-200/75",
                            check: "bg-amber-500",
                            wave: "bg-amber-500/[0.07]",
                          }
                        : {
                            accent: "text-violet-600",
                            iconBg: "bg-violet-500/[0.09]",
                            border: "border-violet-200/75",
                            check: "bg-violet-600",
                            wave: "bg-violet-500/[0.065]",
                          };

              const items =
                number === "05"
                  ? [
                      "Assessment",
                      "Core Training",
                      "Company Preparation",
                      "Mock Tests + Mock Drives",
                      "Post-Assessment",
                    ]
                  : body.split(" + ");

              return (
                <article
                  key={number}
                  className={`
                    reveal-child
                    group
                    relative
                    flex
                    min-h-[264px]
                    flex-col
                    overflow-hidden
                    rounded-[1.25rem]
                    border
                    bg-white
                    p-4
                    shadow-[0_12px_36px_rgba(15,23,42,0.06)]
                    transition-all
                    duration-300
                    hover:-translate-y-1.5
                    hover:shadow-[0_20px_48px_rgba(15,23,42,0.10)]
                    ${theme.border}
                  `}
                >
                  <div
                    aria-hidden="true"
                    className={`
                      pointer-events-none
                      absolute
                      -bottom-14
                      -right-10
                      size-40
                      rounded-full
                      ${theme.wave}
                    `}
                  />

                  <div className="relative z-10 flex items-start justify-between gap-3">
                    <span
                      className={`
                        flex
                        size-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        font-display
                        text-[15px]
                        font-black
                        ${theme.iconBg}
                        ${theme.accent}
                      `}
                    >
                      {number}
                    </span>

                    <div
                      className={`
                        flex
                        size-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        ${theme.iconBg}
                        ${theme.accent}
                      `}
                    >
                      {number === "01" && <GraduationCap className="size-6" />}
                      {number === "02" && <MonitorCheck className="size-6" />}
                      {number === "03" && <UserRound className="size-6" />}
                      {number === "04" && <Building2 className="size-6" />}
                      {number === "05" && <Target className="size-6" />}
                    </div>
                  </div>

                  <h3
                    className="
                      relative
                      z-10
                      mt-4
                      min-h-[38px]
                      font-display
                      text-[15px]
                      font-extrabold
                      leading-[1.12]
                      tracking-[-0.025em]
                      text-foreground
                    "
                  >
                    {title}
                  </h3>

                  <div className="relative z-10 mt-3 space-y-2">
                    {items.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <span
                          className={`
                            mt-[2px]
                            flex
                            size-4
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            text-white
                            ${theme.check}
                          `}
                        >
                          <Check className="size-[10px]" strokeWidth={3} />
                        </span>

                        <span className="text-[11px] leading-5 text-muted-foreground sm:text-[12px]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="relative z-10 mt-auto pt-3.5">
                    <span
                      className={`
                        inline-flex
                        items-center
                        gap-1.5
                        text-[11px]
                        font-extrabold
                        ${theme.accent}
                      `}
                    >
                      Learn More
                      <ArrowRight className="size-3.5" />
                    </span>
                  </div>
                </article>
              );
            })}
          </div>

          {/* ================= YEAR-WISE JOURNEY ================= */}
          <div
            className="
              mt-8
              grid
              items-center
              gap-6
              sm:mt-9
              md:gap-8
              lg:mt-10
              lg:grid-cols-[0.32fr_0.68fr]
              lg:gap-8
              xl:grid-cols-[0.30fr_0.70fr]
              xl:gap-10
            "
          >
            {/* LEFT COPY */}
            <div
              className="
                mx-auto
                max-w-[460px]
                text-center
                lg:mx-0
                lg:max-w-[390px]
                lg:text-left
              "
            >
              <p
                className="
                  mx-auto
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-primary/20
                  bg-primary/[0.07]
                  px-4
                  py-2
                  font-display
                  text-xs
                  font-black
                  text-primary
                  sm:text-sm
                  lg:mx-0
                "
              >
                <BarChart3 className="size-4" />
                Year-Wise Readiness Journey
              </p>

              <h3
                className="
                  mx-auto
                  mt-4
                  max-w-[420px]
                  font-display
                  text-[1.65rem]
                  font-extrabold
                  leading-[1.05]
                  tracking-[-0.04em]
                  text-foreground
                  sm:text-[1.9rem]
                  md:text-[2rem]
                  lg:mx-0
                  lg:text-[2.05rem]
                  xl:text-[2.15rem]
                "
              >
                Build skills{" "}
                <span className="text-primary">
                  step by step every year.
                </span>
              </h3>

              <p
                className="
                  mx-auto
                  mt-3
                  max-w-[400px]
                  text-[13px]
                  leading-6
                  text-muted-foreground
                  sm:text-sm
                  lg:mx-0
                "
              >
                A structured progression to ensure continuous learning and
                placement readiness from day one.
              </p>

              {/* Accessible text equivalent for the infographic */}
              <ul className="sr-only">
                {years.map(([year, body]) => (
                  <li key={year}>
                    {year}: {body}
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT VISUAL — COMPLETE RESPONSIVE STAIRCASE IMAGE */}
            <div
              className="
                relative
                mx-auto
                flex
                w-full
                max-w-[980px]
                items-center
                justify-center
                overflow-visible
              "
            >
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-[68%]
                  w-[82%]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-gradient-to-r
                  from-blue-100/25
                  via-emerald-100/20
                  to-violet-100/25
                  blur-3xl
                "
              />

              <img
                src={manSuccessImage}
                alt="Year-wise readiness journey from first year to final year"
                loading="lazy"
                className="
                  relative
                  z-10
                  block
                  h-auto
                  w-full
                  max-w-[760px]
                  object-contain
                  drop-shadow-[0_20px_28px_rgba(15,23,42,0.10)]
                  sm:max-w-[820px]
                  md:max-w-[900px]
                  lg:max-w-[920px]
                  xl:max-w-[980px]
                "
              />
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
          overflow-hidden
          border-b
          border-border
          bg-secondary/35
        "
      >
        <div
          className="
            container-page
            w-full
            py-6
            sm:py-7
            md:py-8
            lg:py-5
          "
        >
          {/* TOP CONTENT — ONE CLEAN ROW / CENTERED */}

          <div
            className="
              mx-auto
              max-w-4xl
              text-center
            "
          >
            <p className="
              mx-auto
inline-flex
              w-fit
              items-center
              justify-center
              rounded-full
              border
              border-primary/25
              bg-primary/[0.10]
              px-5
              py-2.5
              font-display
              text-sm
              font-black
              tracking-[-0.01em]
              text-primary
              shadow-[0_8px_24px_rgba(196,0,79,0.10)]
              sm:text-base
              md:text-[17px]
            ">
              Trusted across campuses
            </p>

            <h2 className="mt-3
              font-display
              text-[1.55rem]
              font-extrabold
              leading-[1.08]
              tracking-[-0.035em]
              text-foreground
              sm:text-[1.8rem]
              md:text-[2rem]
              lg:text-[2.2rem]">
              A real network of{" "}
              <span className="text-primary">
                institution partnerships.
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-3xl
                text-[13px]
                leading-6
                text-muted-foreground
                sm:text-sm
              "
            >
              The brochure documents partnerships across colleges and
              universities in Bengaluru, Pune, Bhubaneswar, Delhi, Mumbai,
              Mohali, Punjab, Mangalore, Chennai and Ahmedabad.
            </p>
          </div>

          {/* TWO CAMPUS IMAGES — TWO COLUMNS */}

          <div
            className="
              mx-auto
              mt-4
              grid
              max-w-5xl
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:mt-4
            "
          >
            <div
              className="
                overflow-hidden
                rounded-[1.35rem]
                border
                border-border
                bg-white
                p-1.5
                shadow-sm
              "
            >
              <img
                src={photos.campusCohort}
                alt="Campus training"
                className="
                  h-44
                  w-full
                  rounded-[1.05rem]
                  object-cover
                  sm:h-48
                  lg:h-44
                "
              />
            </div>

            <div
              className="
                overflow-hidden
                rounded-[1.35rem]
                border
                border-border
                bg-white
                p-1.5
                shadow-sm
              "
            >
              <img
                src={photos.lectureHall}
                alt="Campus session"
                className="
                  h-44
                  w-full
                  rounded-[1.05rem]
                  object-cover
                  sm:h-48
                  lg:h-44
                "
              />
            </div>
          </div>

          {/* INSTITUTION LOGOS — SINGLE STRAIGHT SCROLLING LINE */}

          <div
            className="
              relative
              mt-4
              w-full
              overflow-hidden
              lg:mt-4
            "
          >
            <div
              className="
                institution-logo-marquee
                flex
                w-max
                items-center
                gap-4
                py-2
                sm:gap-5
              "
            >
              {[...institutionBrands, ...institutionBrands].map(
                ({ name, city, logo }, index) => (
                  <article
                    key={`${name}-${index}`}
                    className="
                      group
                      relative
                      flex
                      h-[154px]
                      w-[150px]
                      shrink-0
                      flex-col
                      overflow-hidden
                      rounded-[18px]
                      border
                      border-primary/15
                      bg-white
                      shadow-[0_8px_24px_rgba(15,23,42,0.08)]
                      transition-all
                      duration-300

                      hover:-translate-y-1
                      hover:border-primary/25
                      hover:shadow-[0_14px_34px_rgba(196,0,79,0.12)]

                      sm:h-[166px]
                      sm:w-[162px]

                      md:h-[176px]
                      md:w-[172px]
                    "
                  >
                    {/* LOGO */}
                    <div
                      className="
                        flex
                        h-[62px]
                        shrink-0
                        items-center
                        justify-center
                        border-b
                        border-primary/10
                        bg-white
                        px-3
                        py-2.5

                        sm:h-[68px]
                        md:h-[72px]
                      "
                    >
                      <img
                        src={logo}
                        alt={`${name} logo`}
                        loading="lazy"
                        className="
                          block
                          max-h-[44px]
                          max-w-full
                          object-contain
                          transition-transform
                          duration-300

                          group-hover:scale-[1.04]

                          sm:max-h-[49px]
                          md:max-h-[52px]
                        "
                      />
                    </div>

                    {/* INSTITUTION NAME */}
                    <div
                      className="
                        flex
                        flex-1
                        items-center
                        justify-center
                        bg-[#fff8fa]
                        px-3
                        py-2
                        text-center
                      "
                    >
                      <h3
                        className="
                          line-clamp-3
                          font-display
                          text-[11px]
                          font-extrabold
                          leading-[1.22]
                          text-foreground

                          sm:text-[12px]
                          md:text-[12.5px]
                        "
                      >
                        {name}
                      </h3>
                    </div>

                    {/* LOCATION */}
                    <div
                      className="
                        flex
                        min-h-[30px]
                        shrink-0
                        items-center
                        justify-center
                        bg-primary
                        px-2
                        py-1.5
                        text-center
                      "
                    >
                      <span
                        className="
                          text-[10px]
                          font-extrabold
                          leading-none
                          text-white

                          sm:text-[10.5px]
                          md:text-[11px]
                        "
                      >
                        {city}
                      </span>
                    </div>
                  </article>
                ),
              )}
            </div>
          </div>

          <style>{`
            @keyframes institution-logo-marquee {
              from {
                transform: translateX(0);
              }

              to {
                transform: translateX(-50%);
              }
            }

            .institution-logo-marquee {
              animation: institution-logo-marquee 42s linear infinite;
              will-change: transform;
            }

            .institution-logo-marquee:hover {
              animation-play-state: paused;
            }

            @media (prefers-reduced-motion: reduce) {
              .institution-logo-marquee {
                animation: none;
                transform: none;
              }
            }
          `}</style>
        </div>
      </section>

      {/* =====================================================

          PROGRESS FRAMEWORK

      ====================================================== */}

      <section
        className="
          overflow-hidden
          border-b
          border-border
          bg-background
        "
      >
        <div
          className="
            container-page
            w-full
            py-5
            sm:py-6
            md:py-7
            lg:py-4
          "
        >
          <div
            className={`
              relative
              mt-5
              grid
              grid-cols-1
              gap-5
              transition-[height]
              duration-700
              ease-[cubic-bezier(0.22,1,0.36,1)]
              lg:block
              ${progressExpanded ? "lg:h-[825px]" : "lg:h-[650px]"}
            `}
          >
            <article
              className={`
                hidden
                lg:flex
                absolute
                left-0
                top-0
                z-50
                h-[620px]
                w-[31.5%]
                flex-col
                overflow-hidden
                rounded-[1.65rem]
                border
                border-primary/20
                bg-gradient-to-b
                from-[#8d0035]
                via-primary
                to-[#6f0029]
                text-white
                shadow-[0_20px_60px_rgba(93,0,38,0.22)]
                transition-all
                duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${
                  progressExpanded
                    ? "pointer-events-none translate-x-[335%] opacity-0"
                    : "translate-x-0 opacity-100"
                }
              `}
            >
              <div className="flex flex-1 flex-col justify-between p-5 text-center">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-white/70">
                    Progress Framework
                  </p>

                  <h3 className="mt-3 font-display text-[1.85rem] font-extrabold leading-[1.12] text-center">
                    Pre-Assessment
                    <span className="block text-white/45">↓</span>
                    Training
                    <span className="block text-white/45">↓</span>
                    Post-Assessment
                  </h3>

                  <p className="mx-auto mt-3 max-w-[300px] text-sm leading-6 text-white/75">
                    A structured 3-step journey that helps colleges assess,
                    train and measure student readiness.
                  </p>
                </div>

                <div className="space-y-3">
                  {["Pre-Assessment", "Training", "Post-Assessment"].map((label) => (
                    <div
                      key={label}
                      className="
                        flex
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-white/15
                        bg-white/10
                        px-4
                        py-2.5
                        text-center
                        backdrop-blur-sm
                      "
                    >
                      <span className="text-sm font-extrabold">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <div
              className={`
                lg:absolute
                lg:top-0
                transition-all
                ${progressExpanded ? "lg:w-[28.5%]" : "lg:w-[31.5%]"}
                duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${progressExpanded ? "lg:left-0 lg:top-[205px]" : "lg:left-[18px] lg:top-0"}
              `}
            >
<article
              style={{
                ...progressCardStyle(0),
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[1.65rem]
                border
                border-rose-100
                bg-white
                shadow-[0_16px_45px_rgba(15,23,42,0.08)]
                transition-all
                duration-500
                hover:-translate-y-1.5
                hover:shadow-[0_22px_60px_rgba(196,0,79,0.12)]
              
                lg:h-[600px]
                lg:overflow-hidden"
            >
              <div className="relative p-3 pb-0 sm:p-4 sm:pb-0">
                <div
                  className="
                    absolute
                    left-5
                    top-5
                    z-20
                    flex
                    size-12
                    items-center
                    justify-center
                    rounded-full
                    border-4
                    border-white
                    bg-rose-100
                    font-display
                    text-lg
                    font-black
                    text-primary
                    shadow-sm
                    sm:size-14
                    sm:text-xl
                  "
                >
                  01
                </div>

                <div
                  className="
                    relative
                    h-[220px]
                    overflow-hidden
                    rounded-[1.35rem]
                    bg-rose-50
                    sm:h-[245px]
                    lg:h-[155px]
                    xl:h-[165px]
                  "
                >
                  <img
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1400&q=90"
                    alt="Student completing a pre-assessment"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = photos.computerLab;
                    }}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-[1.04]
                    "
                  />

                  <div
                    className="
                      absolute
                      right-3
                      top-4
                      rounded-2xl
                      border
                      border-white/70
                      bg-white/95
                      px-3
                      py-3
                      shadow-lg
                      backdrop-blur
                      sm:right-4
                      sm:top-5
                    "
                  >
                    <p className="text-[10px] font-extrabold text-foreground sm:text-xs">
                      Assessment Results
                    </p>
                    <div className="mt-2 flex h-10 items-end gap-1">
                      {[14, 22, 31, 25, 38, 48].map((height, index) => (
                        <span
                          key={height}
                          className={`w-2 rounded-t ${
                            index === 5
                              ? "bg-primary"
                              : index >= 3
                                ? "bg-primary/45"
                                : "bg-primary/20"
                          }`}
                          style={{ height: `${height}px` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 lg:p-4">
                <div className="flex items-start gap-3">
                  <div
                    className="
                      flex
                      size-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-rose-50
                      text-primary
                    "
                  >
                    <ClipboardCheck className="size-5" />
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-extrabold sm:text-[1.35rem]">
                      Pre-Assessment
                    </h3>
                    <p className="mt-1 text-sm leading-5 text-muted-foreground">
                      Identify strengths, gaps and training priorities.
                    </p>
                  </div>
                </div>

                <div className="mt-2.5 space-y-1.5">
                  {[
                    "Quantitative Aptitude",
                    "Logical Reasoning",
                    "Verbal Ability",
                    "Communication",
                    "Technical Skills",
                    "Coding Readiness",
                    "Interview Readiness",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        border
                        border-rose-100
                        bg-rose-50/50
                        px-3
                        py-1.5
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
                          bg-primary
                          text-white
                        "
                      >
                        <CheckCircle2 className="size-3.5" />
                      </span>
                      <span className="text-[12px] font-semibold leading-4 sm:text-[13px]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
              </div>

            <div
              className={`
                lg:absolute
                lg:top-0
                transition-all
                ${progressExpanded ? "lg:w-[28.5%]" : "lg:w-[31.5%]"}
                duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${progressExpanded ? "lg:left-[30.5%] lg:top-[205px]" : "lg:left-[36px] lg:top-0"}
              `}
            >
<article
              style={{
                ...progressCardStyle(1),
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[1.65rem]
                border
                border-sky-100
                bg-white
                shadow-[0_16px_45px_rgba(15,23,42,0.08)]
                transition-all
                duration-500
                hover:-translate-y-1.5
                hover:shadow-[0_22px_60px_rgba(59,130,246,0.14)]
              
                lg:h-[600px]
                lg:overflow-hidden"
            >
              <div className="relative p-3 pb-0 sm:p-4 sm:pb-0">
                <div
                  className="
                    absolute
                    left-5
                    top-5
                    z-20
                    flex
                    size-12
                    items-center
                    justify-center
                    rounded-full
                    border-4
                    border-white
                    bg-sky-100
                    font-display
                    text-lg
                    font-black
                    text-sky-600
                    shadow-sm
                    sm:size-14
                    sm:text-xl
                  "
                >
                  02
                </div>

                <div
                  className="
                    relative
                    h-[220px]
                    overflow-hidden
                    rounded-[1.35rem]
                    bg-sky-50
                    sm:h-[245px]
                    lg:h-[155px]
                    xl:h-[165px]
                  "
                >
                  <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=90"
                    alt="Students taking part in focused training"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = photos.lectureHall;
                    }}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-[1.04]
                    "
                  />

                  <div
                    className="
                      absolute
                      right-3
                      top-4
                      w-[145px]
                      rounded-2xl
                      border
                      border-white/70
                      bg-white/95
                      p-3
                      shadow-lg
                      backdrop-blur
                      sm:right-4
                      sm:top-5
                      sm:w-[155px]
                    "
                  >
                    {[
                      ["Aptitude", "75%"],
                      ["Communication", "68%"],
                      ["Technical Skills", "82%"],
                    ].map(([label, width]) => (
                      <div key={label} className="mb-2.5 last:mb-0">
                        <p className="text-[9px] font-bold text-foreground sm:text-[10px]">
                          {label}
                        </p>
                        <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-100">
                          <div
                            className="h-full rounded-full bg-sky-500"
                            style={{ width }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 lg:p-4">
                <div className="flex items-start gap-3">
                  <div
                    className="
                      flex
                      size-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-sky-50
                      text-sky-600
                    "
                  >
                    <GraduationCap className="size-5" />
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-extrabold sm:text-[1.35rem]">
                      Training
                    </h3>
                    <p className="mt-1 text-sm leading-5 text-muted-foreground">
                      Build aptitude, communication and technical capabilities.
                    </p>
                  </div>
                </div>

                <div className="mt-2.5 space-y-1.5">
                  {[
                    "Aptitude",
                    "Verbal & Communication",
                    "Technical & Coding",
                    "Group Discussion",
                    "Interview Readiness",
                    "Workplace Readiness",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        border
                        border-sky-100
                        bg-sky-50/50
                        px-3
                        py-1.5
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
                          bg-sky-500
                          text-white
                        "
                      >
                        <CheckCircle2 className="size-3.5" />
                      </span>
                      <span className="text-[12px] font-semibold leading-4 sm:text-[13px]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
              </div>

            <div
              className={`
                lg:absolute
                lg:top-0
                transition-all
                ${progressExpanded ? "lg:w-[28.5%]" : "lg:w-[31.5%]"}
                duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${progressExpanded ? "lg:left-[61%] lg:top-[205px]" : "lg:left-[54px] lg:top-0"}
              `}
            >
<article
              style={{
                ...progressCardStyle(2),
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[1.65rem]
                border
                border-emerald-100
                bg-white
                shadow-[0_16px_45px_rgba(15,23,42,0.08)]
                transition-all
                duration-500
                hover:-translate-y-1.5
                hover:shadow-[0_22px_60px_rgba(16,185,129,0.14)]
              
                lg:h-[600px]
                lg:overflow-hidden"
            >
              <div className="relative p-3 pb-0 sm:p-4 sm:pb-0">
                <div
                  className="
                    absolute
                    left-5
                    top-5
                    z-20
                    flex
                    size-12
                    items-center
                    justify-center
                    rounded-full
                    border-4
                    border-white
                    bg-emerald-100
                    font-display
                    text-lg
                    font-black
                    text-emerald-600
                    shadow-sm
                    sm:size-14
                    sm:text-xl
                  "
                >
                  03
                </div>

                <div
                  className="
                    relative
                    h-[220px]
                    overflow-hidden
                    rounded-[1.35rem]
                    bg-emerald-50
                    sm:h-[245px]
                    lg:h-[155px]
                    xl:h-[165px]
                  "
                >
                  <img
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=90"
                    alt="Students celebrating improved placement readiness"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = photos.campusCohort;
                    }}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-[1.04]
                    "
                  />

                  <div
                    className="
                      absolute
                      right-3
                      top-4
                      rounded-2xl
                      border
                      border-white/70
                      bg-white/95
                      px-4
                      py-3
                      text-center
                      shadow-lg
                      backdrop-blur
                      sm:right-4
                      sm:top-5
                    "
                  >
                    <p className="text-[10px] font-extrabold text-foreground sm:text-xs">
                      Placement Readiness
                    </p>
                    <div
                      className="
                        mx-auto
                        mt-2
                        flex
                        size-16
                        items-center
                        justify-center
                        rounded-full
                        border-[7px]
                        border-emerald-500
                        text-sm
                        font-black
                        text-foreground
                      "
                    >
                      92%
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 lg:p-4">
                <div className="flex items-start gap-3">
                  <div
                    className="
                      flex
                      size-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-emerald-50
                      text-emerald-600
                    "
                  >
                    <Target className="size-5" />
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-extrabold sm:text-[1.35rem]">
                      Post-Assessment
                    </h3>
                    <p className="mt-1 text-sm leading-5 text-muted-foreground">
                      Measure improvement and placement readiness after intervention.
                    </p>
                  </div>
                </div>

                <div className="mt-2.5 space-y-1.5">
                  {[
                    {
                      title: "Aptitude Mock Tests",
                      detail: "Quantitative | Logical | Verbal",
                    },
                    {
                      title: "Technical Mock Tests",
                      detail:
                        "Core concepts | Programming | Role-specific questions",
                    },
                    {
                      title: "Company-Pattern Tests",
                      detail:
                        "Relevant recruitment formats and difficulty levels",
                    },
                    {
                      title: "Sectional Tests",
                      detail:
                        "Focused practice for specific capability areas",
                    },
                    {
                      title: "Full-Length Recruitment Tests",
                      detail:
                        "Complete timed assessment simulation",
                    },
                  ].map(({ title, detail }) => (
                    <details
                      key={title}
                      className="
                        group
                        overflow-hidden
                        rounded-xl
                        border
                        border-emerald-100
                        bg-emerald-50/50
                        transition
                        open:bg-white
                        open:shadow-sm
                      "
                    >
                      <summary
                        className="
                          flex
                          cursor-pointer
                          list-none
                          items-center
                          gap-3
                          px-3
                          py-1.5
                          [&::-webkit-details-marker]:hidden
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
                            bg-emerald-500
                            text-white
                          "
                        >
                          <CheckCircle2 className="size-3.5" />
                        </span>

                        <span className="min-w-0 flex-1 text-[11px] font-semibold leading-4 sm:text-[12px]">
                          {title}
                        </span>

                        <ChevronDown
                          className="
                            size-4
                            shrink-0
                            text-emerald-600
                            transition-transform
                            duration-300
                            group-open:rotate-180
                          "
                        />
                      </summary>

                      <div
                        className="
                          border-t
                          border-emerald-100
                          bg-white/70
                          px-3
                          py-2
                          pl-11
                          text-[11px]
                          leading-4
                          text-muted-foreground
                          sm:text-[13px]
                        "
                      >
                        {detail}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </article>
              </div>

            {/* RIGHT CONTENT + ARROW — INITIAL STATE ONLY */}
            <div
              className={`
                absolute
                z-[70]
                hidden
                text-center
                transition-all
                duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]
                lg:block
                ${
                  progressExpanded
                    ? "left-1/2 top-0 w-[72%] -translate-x-1/2 translate-y-0 opacity-100"
                    : "right-[2%] top-[310px] w-[40%] -translate-y-1/2 translate-x-0 opacity-100"
                }
              `}
            >
              <p
                className="
                  mx-auto
                  inline-flex
                  w-fit
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-primary/25
                  bg-primary/[0.08]
                  px-5
                  py-2.5
                  font-display
                  text-sm
                  font-black
                  tracking-[-0.01em]
                  text-primary
                  shadow-[0_8px_24px_rgba(196,0,79,0.08)]
                  sm:text-base
                  md:text-[17px]
                "
              >
                Progress Framework
              </p>

              <h2
                className="
                  mx-auto
                  mt-3
                  max-w-[620px]
                  text-center
                  font-display
                  text-[1.8rem]
                  font-extrabold
                  leading-[1.05]
                  tracking-[-0.04em]
                  text-foreground
                  sm:text-[2.1rem]
                  md:text-[2.45rem]
                  lg:text-[2.35rem]
                "
              >
                From Assessment{" "}
                <span className="text-primary">to Outcomes.</span>
              </h2>

              <p
                className="
                  mx-auto
                  mt-3
                  max-w-[500px]
                  text-center
                  text-sm
                  leading-6
                  text-muted-foreground
                  sm:text-[15px]
                  md:text-base
                "
              >
                A structured 3-step journey that helps colleges assess, train and
                measure student readiness.
              </p>

              <div
                className={`
                  mt-5
                  items-center
                  justify-center
                  gap-4
                  ${progressExpanded ? "hidden" : "flex"}
                `}
              >
                <div
                  className="
                    h-px
                    w-[220px]
                    bg-gradient-to-r
                    from-primary/15
                    via-primary/50
                    to-primary
                  "
                />

                <button
                  type="button"
                  onClick={() => setProgressExpanded(true)}
                  aria-label="Show the three progress cards"
                  className="
                    group
                    flex
                    size-16
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-primary/30
                    bg-white
                    text-primary
                    shadow-[0_16px_40px_rgba(196,0,79,0.16)]
                    transition-all
                    duration-300
                    hover:border-primary
                    hover:bg-primary
                    hover:text-white
                  "
                >
                  <ArrowRight
                    className="
                      size-7
                      transition-transform
                      duration-300
                      group-hover:translate-x-1.5
                    "
                  />
                </button>
              </div>

            </div>

            {progressExpanded && (
              <div
                className="
                  absolute
                  left-[94%]
                  top-[205px]
                  z-[85]
                  hidden
                  h-[600px]
                  w-[10%]
                  items-center
                  justify-center
                  lg:flex
                "
              >
                <button
                  type="button"
                  onClick={() => setProgressExpanded(false)}
                  aria-label="Stack progress cards"
                  className="
                    flex
                    min-w-[86px]
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border-2
                    border-primary/25
                    bg-white
                    px-4
                    py-3
                    text-xs
                    font-extrabold
                    uppercase
                    tracking-[0.06em]
                    text-primary
                    shadow-[0_10px_28px_rgba(196,0,79,0.12)]
                    transition-all
                    duration-300
                    hover:border-primary
                    hover:bg-primary
                    hover:text-white
                  "
                >
                  <span>Stack</span>
                  <ArrowRight
                    className="
                      size-4
                      rotate-180
                      animate-[stack-arrow-blink_1s_ease-in-out_infinite]
                    "
                  />
                </button>
              </div>
            )}
          </div>
          <style>{`
            @keyframes stack-arrow-blink {
              0%, 100% {
                opacity: 1;
                transform: translateX(0) rotate(180deg);
              }

              50% {
                opacity: 0.35;
                transform: translateX(-8px) rotate(180deg);
              }
            }
          `}</style>

        </div>
      </section>

      {/* =====================================================
          03 COMPANY-SPECIFIC PREPARATION
      ====================================================== */}
      <section
        className="
          relative
          overflow-hidden
          border-b
          border-border
          bg-[#fffdfa]
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -left-20
            -top-20
            h-64
            w-64
            rounded-full
            bg-primary/[0.035]
            sm:h-72
            sm:w-72
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-24
            -right-24
            h-72
            w-72
            rounded-full
            bg-primary/[0.035]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-5
            top-10
            hidden
            grid-cols-4
            gap-2
            lg:grid
          "
        >
          {Array.from({ length: 16 }).map((_, index) => (
            <span
              key={index}
              className="size-1 rounded-full bg-primary/20"
            />
          ))}
        </div>

        <div
          className="
            container-page
            relative
            z-10
            py-12
            sm:py-14
            md:py-16
            lg:py-14
            xl:py-16
          "
        >
          {/* HEADING */}
          <div className="mx-auto max-w-[1080px] text-center">
            <p
              className="
                 mx-auto
                  inline-flex
                  w-fit
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-primary/25
                  bg-primary/[0.08]
                  px-5
                  py-2.5
                  font-display
                  text-sm
                  font-black
                  tracking-[-0.01em]
                  text-primary
                  shadow-[0_8px_24px_rgba(196,0,79,0.08)]
                  sm:text-base
                  md:text-[17px]
                "
            >
              Company-Specific Preparation
            </p>

            <h2
              className="
                mx-auto
                mt-3
                max-w-[1050px]
                font-display
                text-[1.55rem]
                font-extrabold
                leading-[1.08]
                tracking-[-0.035em]
                text-foreground
                sm:text-[1.8rem]
                md:text-[2rem]
                lg:text-[2.2rem]
              "
            >
              Different companies test{" "}
              <span className="text-primary">different capabilities.</span>
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-3xl
                text-[13px]
                leading-6
                text-muted-foreground
                sm:text-sm
              "
            >
              Our training can be customised around the roles, assessment
              patterns and recruitment stages relevant to your target companies.
            </p>
          </div>

          {/* FLOW */}
          <div className="relative mt-7 md:mt-8 lg:mt-9">
            <div
              aria-hidden="true"
              className="
                absolute
                left-[8%]
                right-[8%]
                top-[36px]
                hidden
                h-px
                bg-primary/25
                md:block
              "
            />

            <div
              className="
                company-flow-scroll
                -mx-4
                overflow-x-auto
                px-4
                pb-3
                sm:-mx-6
                sm:px-6
                md:mx-0
                md:overflow-visible
                md:px-0
                md:pb-0
              "
            >
              <div
                className="
                  flex
                  min-w-[870px]
                  items-start
                  justify-between
                  gap-4
                  md:min-w-0
                "
              >
                {companyFlow.map(
                  ({ title, description, icon: Icon }, index) => (
                    <div
                      key={title}
                      className="
                        relative
                        z-10
                        flex
                        w-[135px]
                        shrink-0
                        flex-col
                        items-center
                        text-center
                        md:w-auto
                        md:flex-1
                      "
                    >
                      <div className="relative">
                        <div
                          className="
                            flex
                            size-[72px]
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-primary/20
                            bg-[#fff8fa]
                            text-primary
                            shadow-[0_8px_24px_rgba(196,0,79,0.06)]
                            transition
                            duration-300
                            hover:-translate-y-1
                            hover:border-primary/40
                            hover:shadow-[0_12px_28px_rgba(196,0,79,0.10)]
                          "
                        >
                          <Icon strokeWidth={2} className="size-[25px]" />
                        </div>
                      </div>

                      <h3
                        className="
                          mt-2.5
                          font-display
                          text-[13px]
                          font-black
                          leading-tight
                          text-foreground
                          sm:text-sm
                          lg:text-[15px]
                        "
                      >
                        {title}
                      </h3>

                      <p
                        className="
                          mt-0.5
                          text-[10px]
                          leading-4
                          text-muted-foreground
                          sm:text-[11px]
                          lg:text-xs
                        "
                      >
                        {description}
                      </p>

                      {index !== companyFlow.length - 1 && (
                        <>
                          <div
                            className="
                              absolute
                              -right-[14px]
                              top-[29px]
                              z-20
                              flex
                              size-7
                              items-center
                              justify-center
                              rounded-full
                              border
                              border-primary/15
                              bg-white/90
                              text-primary
                              shadow-[0_8px_20px_rgba(196,0,79,0.10)]
                              md:hidden
                            "
                          >
                            <ArrowRight className="size-3.5" />
                          </div>

                          <div
                            className="
                              absolute
                              -right-4
                              top-[22px]
                              z-20
                              hidden
                              h-7
                              w-8
                              items-center
                              justify-center
                              md:flex
                            "
                          >
                            <span
                              className="
                                flow-arrow-chip
                                inline-flex
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-primary/15
                                bg-white px-2.5
                                py-1
                                text-primary
                                shadow-[0_8px_20px_rgba(196,0,79,0.10)]
                              "
                            >
                              <ArrowRight className="size-3.5" />
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* CARDS */}
          <div
            className="
              mt-6
              grid
              grid-cols-1
              gap-4
              sm:gap-5
              lg:mt-7
              lg:grid-cols-3
            "
          >
            {companyPrep.map((card) => {
              const isPink = card.theme === "pink";
              const isBlue = card.theme === "blue";
              const isGreen = card.theme === "green";

              return (
                <article
                  key={card.title}
                  className={`
                    group
                    relative
                    min-h-[245px]
                    overflow-hidden
                    rounded-[1.5rem]
                    border
                    bg-white
                    transition-all
                    duration-500
                    hover:-translate-y-1.5
                    ${
                      isPink
                        ? "border-primary/25 bg-gradient-to-br from-[#fff9fb] via-white to-[#fff5f8] shadow-[0_15px_45px_rgba(196,0,79,0.07)] hover:border-primary/45 hover:shadow-[0_22px_55px_rgba(196,0,79,0.12)]"
                        : ""
                    }
                    ${
                      isBlue
                        ? "border-blue-200/70 bg-gradient-to-br from-[#f9fcff] via-white to-[#f1f7ff] shadow-[0_15px_45px_rgba(37,99,235,0.07)] hover:border-blue-300 hover:shadow-[0_22px_55px_rgba(37,99,235,0.12)]"
                        : ""
                    }
                    ${
                      isGreen
                        ? "border-emerald-200/70 bg-gradient-to-br from-[#fbfffd] via-white to-[#f0fdf8] shadow-[0_15px_45px_rgba(5,150,105,0.07)] hover:border-emerald-300 hover:shadow-[0_22px_55px_rgba(5,150,105,0.12)]"
                        : ""
                    }
                  `}
                >
                  <div
                    aria-hidden="true"
                    className={`
                      pointer-events-none
                      absolute
                      -bottom-16
                      -right-12
                      size-52
                      rounded-full
                      ${isPink ? "bg-primary/[0.045]" : ""}
                      ${isBlue ? "bg-blue-500/[0.055]" : ""}
                      ${isGreen ? "bg-emerald-500/[0.055]" : ""}
                    `}
                  />

                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-full
                      min-h-[245px]
                      flex-col
                      p-5
                      sm:p-6
                      lg:min-h-[255px]
                      lg:p-5
                      xl:p-6
                    "
                  >
                    <div
                      className="
                        flex
                        min-h-[52px]
                        items-center
                        gap-3
                        sm:min-h-[54px]
                      "
                    >
                      <div
                        className={`
                          flex
                          size-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-[1rem]
                          ${isPink ? "bg-primary/[0.08] text-primary" : ""}
                          ${isBlue ? "bg-blue-500/[0.08] text-blue-600" : ""}
                          ${isGreen ? "bg-emerald-500/[0.08] text-emerald-600" : ""}
                        `}
                      >
                        {isPink && <MonitorCheck className="size-6" />}
                        {isBlue && <BarChart3 className="size-6" />}
                        {isGreen && <UserRound className="size-6" />}
                      </div>

                      <h3
                        className="
                          min-w-0
                          flex-1
                          font-display
                          text-[15px]
                          font-extrabold
                          leading-[1.2]
                          tracking-[-0.02em]
                          text-foreground
                          sm:text-base
                          lg:text-[15px]
                          xl:text-base
                        "
                      >
                        {card.title}
                      </h3>
                    </div>

                    <div
                      className="
                        mt-2
                        grid
                        flex-1
                        grid-cols-[minmax(0,1fr)_120px]
                        items-center
                        gap-3
                        sm:grid-cols-[minmax(0,1fr)_145px]
                        md:grid-cols-[minmax(0,1fr)_175px]
                        lg:grid-cols-[minmax(0,1fr)_130px]
                        xl:grid-cols-[minmax(0,1fr)_155px]
                      "
                    >
                      <div className="space-y-2">
                        {card.items.map((item) => (
                          <div key={item} className="flex items-start gap-2">
                            <span
                              className={`
                                mt-[2px]
                                flex
                                size-4
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                text-white
                                ${isPink ? "bg-primary" : ""}
                                ${isBlue ? "bg-blue-600" : ""}
                                ${isGreen ? "bg-emerald-600" : ""}
                              `}
                            >
                              <Check strokeWidth={3} className="size-3" />
                            </span>

                            <span
                              className="
                                text-[12px]
                                font-medium
                                leading-[1.4]
                                text-muted-foreground
                                sm:text-[13px]
                                lg:text-[12px]
                                xl:text-[13px]
                              "
                            >
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div
                        className="
                          relative
                          flex
                          h-[115px]
                          items-center
                          justify-center
                          sm:h-[125px]
                          md:h-[135px]
                          lg:h-[125px]
                          xl:h-[135px]
                        "
                      >
                        <div
                          aria-hidden="true"
                          className={`
                            absolute
                            inset-3
                            rounded-full
                            blur-2xl
                            ${isPink ? "bg-primary/10" : ""}
                            ${isBlue ? "bg-blue-500/10" : ""}
                            ${isGreen ? "bg-emerald-500/10" : ""}
                          `}
                        />

                        <img
                          src={card.image}
                          alt={card.imageAlt}
                          loading="lazy"
                          className="
                            relative
                            z-10
                            h-[90px]
                            w-[90px]
                            object-contain
                            drop-shadow-[0_14px_16px_rgba(15,23,42,0.10)]
                            transition-transform
                            duration-500
                            group-hover:scale-[1.05]
                            sm:h-[100px]
                            sm:w-[100px]
                            md:h-[108px]
                            md:w-[108px]
                            lg:h-[100px]
                            lg:w-[100px]
                            xl:h-[110px]
                            xl:w-[110px]
                          "
                        />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* BOTTOM MESSAGE */}
          <div
            className="
              mx-auto
              mt-7
              flex
              max-w-[850px]
              items-center
              justify-center
              gap-3
              rounded-full
              bg-primary/[0.055]
              px-4
              py-3
              text-center
              sm:mt-8
              sm:px-6
              sm:py-3.5
            "
          >
            <div
              className="
                hidden
                size-9
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-white
                text-primary
                shadow-sm
                sm:flex
              "
            >
              <Target className="size-[18px]" />
            </div>

            <p
              className="
                font-display
                text-sm
                font-extrabold
                leading-5
                text-foreground
                sm:text-base
                md:text-lg
              "
            >
              Students should know what they are likely to face{" "}
              <span className="text-primary">before they face it.</span>
            </p>
          </div>

          <style>{`
            .company-flow-scroll {
              scrollbar-width: none;
              -ms-overflow-style: none;
            }

            .company-flow-scroll::-webkit-scrollbar {
              display: none;
            }

            @keyframes flowArrowPulse {
              0%,
              100% {
                transform: translateX(0);
                opacity: 0.75;
              }

              50% {
                transform: translateX(4px);
                opacity: 1;
              }
            }

            .flow-arrow-chip {
              animation: flowArrowPulse 1.35s ease-in-out infinite;
            }
          `}</style>
        </div>
      </section>



      {/* =====================================================

          PLACEMENT COMPANIES

      ====================================================== */}

      <section

        className="

          overflow-hidden

          border-b

          border-border

          bg-secondary/40
        "

      >

        <div

          className="

            container-page

            py-6

            sm:py-7

            md:py-8

          

            lg:py-5
          "

        >

          <div className="text-center">

            <div
              className="
                mx-auto
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-primary/20
                bg-primary/[0.08]
                px-5
                py-2.5
                shadow-sm
              "
            >
              <span
                className="
                  font-display
                  text-base
                  font-black
                  tracking-[-0.02em]
                  text-primary
                  sm:text-lg
                  md:text-xl
                "
              >
                Placement Companies
              </span>
            </div>

            <h2

              className="
                mx-auto
                mt-3
                max-w-4xl
                font-display
                text-[1.55rem]
                font-extrabold
                leading-[1.08]
                tracking-[-0.035em]
                text-foreground
                sm:text-[1.8rem]
                md:text-[2rem]
                lg:text-[2.2rem]
              "

            >

              Students get trained for{" "}

              <span className="text-primary">

                top company placements.

              </span>

            </h2>

            <p

              className="

                mx-auto

                mt-4

                max-w-3xl

                text-[13px]

                leading-6

                text-muted-foreground

                sm:text-sm

              "

            >

              The Elev8 brochure features leading employers

              across consulting, technology, finance and other

              sectors.

            </p>

          </div>

          {/* TWO STRAIGHT CONTINUOUS SCROLLING ROWS */}

          <div
            className="
              relative
              mt-4
              space-y-3
              overflow-hidden
              sm:mt-5
              sm:space-y-4
            "
          >
            {/* ROW 1 — LEFT TO RIGHT */}

            <div
              className="
                placement-logo-marquee-forward
                flex
                w-max
                items-center
                gap-4
                py-1
                sm:gap-5
              "
            >
              {[...placementBrandsTop, ...placementBrandsTop].map(
                ([name, logo], index) => (
                  <div
                    key={`forward-${name}-${index}`}
                    className="
                      flex
                      h-[82px]
                      w-[170px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-border
                      bg-white
                      px-4
                      py-3
                      shadow-sm
                      sm:h-[92px]
                      sm:w-[185px]
                      sm:px-5
                      md:h-[98px]
                      md:w-[200px]
                    "
                  >
                    <img
                      src={logo}
                      alt={`${name} logo`}
                      loading="lazy"
                      className="
                        block
                        max-h-[56px]
                        max-w-full
                        object-contain
                        sm:max-h-[62px]
                        md:max-h-[66px]
                      "
                    />
                  </div>
                ),
              )}
            </div>

            {/* ROW 2 — RIGHT TO LEFT */}

            <div
              className="
                placement-logo-marquee-reverse
                flex
                w-max
                items-center
                gap-4
                py-1
                sm:gap-5
              "
            >
              {[...placementBrandsBottom, ...placementBrandsBottom].map(
                ([name, logo], index) => (
                  <div
                    key={`reverse-${name}-${index}`}
                    className="
                      flex
                      h-[82px]
                      w-[170px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-border
                      bg-white
                      px-4
                      py-3
                      shadow-sm
                      sm:h-[92px]
                      sm:w-[185px]
                      sm:px-5
                      md:h-[98px]
                      md:w-[200px]
                    "
                  >
                    <img
                      src={logo}
                      alt={`${name} logo`}
                      loading="lazy"
                      className="
                        block
                        max-h-[56px]
                        max-w-full
                        object-contain
                        sm:max-h-[62px]
                        md:max-h-[66px]
                      "
                    />
                  </div>
                ),
              )}
            </div>
          </div>

          <style>{`
            @keyframes placement-logo-forward {
              from {
                transform: translateX(-50%);
              }

              to {
                transform: translateX(0);
              }
            }

            @keyframes placement-logo-reverse {
              from {
                transform: translateX(0);
              }

              to {
                transform: translateX(-50%);
              }
            }

            .placement-logo-marquee-forward {
              animation: placement-logo-forward 34s linear infinite;
              will-change: transform;
            }

            .placement-logo-marquee-reverse {
              animation: placement-logo-reverse 34s linear infinite;
              will-change: transform;
            }

            .placement-logo-marquee-forward:hover,
            .placement-logo-marquee-reverse:hover {
              animation-play-state: paused;
            }

            @media (prefers-reduced-motion: reduce) {
              .placement-logo-marquee-forward,
              .placement-logo-marquee-reverse {
                animation: none;
                transform: none;
              }
            }
          `}</style>

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
          lg:min-h-[calc(100svh-74px)]
          lg:flex
          lg:items-center
        "

      >

        <div

className="

            container-page

            py-12

            sm:py-16

            md:py-16
            lg:py-8

          "

        >

          <div className="text-center">
            <div
              className="
                mx-auto
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-primary/25
                bg-primary/[0.10]
                px-5
                py-2.5
                shadow-[0_8px_24px_rgba(196,0,79,0.10)]
              "
            >
              <span
                className="
                  font-display
                  text-sm
                  font-black
                  tracking-[-0.01em]
                  text-primary
                  sm:text-base
                  md:text-[17px]
                "
              >
                Campus Recommendations
              </span>
            </div>

            <h2
              className="
                mx-auto
                mt-3
                max-w-4xl
                font-display
                text-[1.55rem]
                font-extrabold
                leading-[1.08]
                tracking-[-0.035em]
                text-foreground
                sm:text-[1.8rem]
                md:text-[2rem]
                lg:text-[2.2rem]
              "
            >
              What placement leaders say{" "}
              <span className="text-primary">
                about Elev8.
              </span>
            </h2>
          </div>

          <div
            className="
              mt-6
              grid
              gap-6
              md:grid-cols-2
              xl:gap-7
            "
          >
            {testimonials.map(
              ([name, role, testimonialText, image]) => (
                <article
                  key={name}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[1.8rem]
                    border
                    border-primary/15
                    bg-white
                    p-4
                    shadow-[0_12px_35px_rgba(15,23,42,0.06)]
                    transition-all
                    duration-300
                    hover:-translate-y-1.5
                    hover:border-primary/30
                    hover:shadow-[0_24px_60px_rgba(196,0,79,0.12)]
                    sm:p-5
                    lg:p-5
                  "
                >
                  {/* soft brand accent */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      -right-16
                      -top-16
                      size-40
                      rounded-full
                      bg-primary/[0.06]
                      blur-3xl
                    "
                  />

                  <div
                    className="
                      relative
                      z-10
                      flex
                      items-center
                      gap-4
                    "
                  >
                    <div
                      className="
                        h-16
                        w-16
                        shrink-0
                        overflow-hidden
                        rounded-[1.35rem]
                        border
                        border-primary/15
                        bg-secondary
                        shadow-md
                        sm:h-[72px]
                        sm:w-[72px]
                      "
                    >
                      {image ? (
                        <img
                          src={image}
                          alt={name}
                          loading="lazy"
                          className="
                            h-full
                            w-full
                            object-cover
                            object-center
                          "
                        />
                      ) : (
                        <div
                          className="
                            flex
                            h-full
                            w-full
                            items-center
                            justify-center
                            bg-primary/[0.08]
                            text-primary
                          "
                          aria-label={`${name} avatar`}
                        >
                          <UserRound
                            className="size-7 sm:size-8"
                            strokeWidth={2}
                          />
                        </div>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3
                        className="
                          font-display
                          text-lg
                          font-extrabold
                          leading-tight
                          text-foreground
                          sm:text-xl
                        "
                      >
                        {name}
                      </h3>

                      <p
                        className="
                          mt-1.5
                          text-xs
                          font-bold
                          leading-5
                          text-primary
                          sm:text-[13px]
                        "
                      >
                        {role}
                      </p>
                    </div>

                    <div
                      className="
                        hidden
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-primary/10
                        text-primary
                        sm:flex
                      "
                    >
                      <Quote className="size-5" />
                    </div>
                  </div>

                  <div
                    className="
                      relative
                      z-10
                      mt-4
                      rounded-[1.25rem]
                      border
                      border-border
                      bg-secondary/30
                      p-3.5
                      sm:p-4
                    "
                  >
                    <Quote
                      className="
                        size-5
                        text-primary
                      "
                    />

                    <p
                      className="
                        mt-2.5
                        text-[13px]
                        leading-6
                        text-muted-foreground
                        sm:text-sm
                        sm:leading-6
                      "
                    >
                      {testimonialText}
                    </p>
                  </div>

                  <div
                    className="
                      relative
                      z-10
                      mt-4
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <span
                      className="
                        h-px
                        flex-1
                        bg-border
                      "
                    />

                    <span
                      className="
                        text-[10px]
                        font-extrabold
                        uppercase
                        tracking-[0.14em]
                        text-primary/70
                      "
                    >
                      Campus Recommendation
                    </span>
                  </div>
                </article>
              ),
            )}
          </div>

        </div>

      </section>

      {/* =====================================================

          CTA

      ====================================================== */}
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
      gap-4

      py-6

      sm:py-7

      md:flex-row
      md:items-center
      md:justify-between
      md:py-8
    "
  >
    <div>
      <p
        className="
          text-[9px]
          font-extrabold
          uppercase
          tracking-[0.18em]
          text-white/65

          sm:text-[10px]
        "
      >
        From campus to career
      </p>

      <h2
        className="
          mt-2
          max-w-[720px]
          font-display
          text-[1.35rem]
          font-extrabold
          leading-[1.08]
          tracking-[-0.035em]
          text-white

          sm:text-[1.55rem]
          md:text-[1.7rem]
          lg:text-[1.85rem]
        "
      >
        Prepare students for the companies they want to join.
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
        px-5
        py-3
        text-[13px]
        font-extrabold
        text-foreground
        shadow-sm
        transition
        duration-300

        hover:-translate-y-0.5
        hover:shadow-md

        sm:w-auto
        sm:px-6
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