import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

import {

  ArrowDown,

  ArrowRight,
  Building2,

  CheckCircle2,
  ChevronDown,

  ClipboardCheck,
  GraduationCap,
  Quote,

  Target,
} from "lucide-react";

import { photos } from "@/lib/site";
import landingHero from "@/assets/landingHero.png";

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

import mountCarmelLogo from "@/assets/institution/mount-carmel-college.png";
import sibmPuneLogo from "@/assets/institution/sibm-pune.png";
import amityUniversityLogo from "@/assets/institution/amity-university.png";
import immLogo from "@/assets/institution/institute-of-marketing-management.png";
import alkeshDineshLogo from "@/assets/institution/alkesh-dinesh-study-institute.png";
import sindhiCollegeLogo from "@/assets/institution/sindhi-college.png";
import gardenCityLogo from "@/assets/institution/garden-city-university.png";
import dayanandaSagarLogo from "@/assets/institution/dayananda-sagar-business-school.png";
import oxfordLogo from "@/assets/institution/oxford-educational-institutions.png";
import rayatBahraLogo from "@/assets/institution/rayat-bahra-university.png";
import pcteLogo from "@/assets/institution/pcte-group-of-institutes.png";
import asciLogo from "@/assets/institution/asci.png";
import paduaLogo from "@/assets/institution/padua-institutions.png";
import shasunJainLogo from "@/assets/institution/shasun-jain-college-for-women.png";
import hlCommerceLogo from "@/assets/institution/hl-commerce-college.png";

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

const institutionBrands = [
  ["Mount Carmel College", mountCarmelLogo],
  ["SIBM Pune", sibmPuneLogo],
  ["Amity University", amityUniversityLogo],
  ["Institute of Marketing Management", immLogo],
  ["Alkesh Dinesh Study Institute", alkeshDineshLogo],
  ["Sindhi College", sindhiCollegeLogo],
  ["Garden City University", gardenCityLogo],
  ["Dayananda Sagar Business School", dayanandaSagarLogo],
  ["Oxford Educational Institutions", oxfordLogo],
  ["Rayat Bahra University", rayatBahraLogo],
  ["PCTE Group of Institutes", pcteLogo],
  ["ASCI", asciLogo],
  ["Padua Institutions", paduaLogo],
  ["Shasun Jain College for Women", shasunJainLogo],
  ["HL Commerce College", hlCommerceLogo],
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
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=85",
  ],
  [
    "Prof. Smita Lal",
    "Dean, Institute of Marketing & Management",
    "Your workshops on ATS Resumes at IMM C2C Summit was invaluable. Students gained rich insights on personal branding, confidence building. Your guidance will undoubtedly steer their career paths.",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=85",
  ],
  [
    "Sanmay Rath",
    "Placement Officer, AMITY University",
    "Coach Ashfak has been a very popular brand name at AGBS, BHUBANESWAR campus. He has taken many enthralling sessions on job hunting skills and life skills at our campus and students love to hear his words of wisdom. He was one of our guests at the orientation programme 2021 who took a wonderful motivational session.",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=85",
  ],
  [
    "Dr. B.S. Srikanta",
    "Director, Sindhi College",
    "The Job Hunting skills workshop is a unique concept for fresh graduates and working professionals who are serious about getting good jobs in today’s very competitive job market.",
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=500&q=85",
  ],
] as const;

/* =========================================================

   PAGE

========================================================= */

function CollegesPage() {

  const [progressExpanded, setProgressExpanded] = useState(false);

  const progressCardStyle = (index: number) => ({
    transform: progressExpanded
      ? "translateX(0) translateY(0) scale(1)"
      : `translateX(${index * 24}px) translateY(${index * 16}px) scale(${1 - index * 0.012})`,
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

          lg:h-[600px]
        "
      >
        {/* Decorative background */}

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
            py-5
            sm:px-6
            sm:py-6
            md:px-8
            md:py-7
            lg:h-full
            lg:grid-cols-[0.95fr_1.05fr]
            lg:items-center
            lg:gap-8
            lg:px-10
            lg:py-5
            xl:grid-cols-[0.92fr_1.08fr]
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
              max-w-[700px]
              lg:-translate-y-3
              xl:-translate-y-4
            "
          >
            {/* Kicker */}

            <div
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-primary/25
                bg-primary/[0.08]
                px-4
                py-2.5
              "
            >
               

              <span
                aria-hidden="true"
                className="
                  mx-2
                  h-1
                  w-1
                  rounded-full
                  bg-primary
                "
              />

              <span
                className="
                  font-display
                  text-[14px]
                  font-black
                  leading-none
                  tracking-[-0.02em]
                  text-primary
                  sm:text-[15px]
                  md:text-[16px]
                  xl:text-[17px]
                "
              >
                Elev8 Placement Accelerator
              </span>
            </div>

            {/* Heading */}

            <h1
              className="
                mt-4
                max-w-[700px]
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
              Your students are ready to graduate.{" "}
              <span className="text-primary">
                Are they ready to get hired?
              </span>
            </h1>

            {/* Description */}

            <p
              className="
                mt-4
                max-w-[680px]
                text-sm
                leading-6
                text-muted-foreground
                sm:text-[15px]
                sm:leading-7
                xl:text-base
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
                mt-4
                max-w-[650px]
                rounded-xl
                border
                border-border
                border-l-4
                border-l-primary
                bg-card
                px-4
                py-3
                shadow-sm
              "
            >
              <p
                className="
                  font-display
                  text-[13px]
                  font-extrabold
                  leading-5
                  text-foreground
                  sm:text-sm
                "
              >
                Turn campus talent into placement-ready talent.
              </p>

              <p
                className="
                  mt-0.5
                  text-[11px]
                  text-muted-foreground
                  sm:text-xs
                "
              >
                Structured. Measurable. Recruitment-focused.
              </p>
            </div>

            {/* CTA Buttons */}

            <div
              className="
                mt-4
                flex
                flex-col
                gap-2.5
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
                  px-5
                  py-3
                  text-[13px]
                  font-extrabold
                  text-white
                  transition
                  hover:opacity-90
                  xl:px-6
                  xl:text-sm
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
                  px-5
                  py-3
                  text-[13px]
                  font-extrabold
                  transition
                  hover:border-primary
                  hover:text-primary
                  xl:px-6
                  xl:text-sm
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
              items-center
              justify-center
              lg:h-full
              lg:-translate-y-1
            "
          >
            <img
              src={landingHero}
              alt="Elev8 Placement Accelerator"
              className="
                block
                h-auto
                w-full
                max-w-[810px]
                max-h-[600px]
                object-contain
                sm:max-h-[620px]
                lg:max-w-[825px]
                lg:max-h-[615px]
                xl:max-w-[865px]
                xl:max-h-[625px]
              "
            />
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
                ([name, logo], index) => (
                  <div
                    key={`${name}-${index}`}
                    className="
                      flex
                      h-[86px]
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
                      md:w-[195px]
                    "
                  >
                    <img
                      src={logo}
                      alt={`${name} logo`}
                      loading="lazy"
                      className="
                        block
                        max-h-[62px]
                        max-w-full
                        object-contain
                        sm:max-h-[66px]
                      "
                    />
                  </div>
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
                lg:w-[28.5%]
                transition-all
                duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${progressExpanded ? "lg:left-0 lg:top-[205px]" : "lg:left-[1.2%] lg:top-[6px]"}
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
                lg:w-[28.5%]
                transition-all
                duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${progressExpanded ? "lg:left-[30.5%] lg:top-[205px]" : "lg:left-[2.4%] lg:top-[12px]"}
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
                lg:w-[28.5%]
                transition-all
                duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${progressExpanded ? "lg:left-[61%] lg:top-[205px]" : "lg:left-[3.6%] lg:top-[18px]"}
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
                opacity: 0.25;
                transform: translateX(-5px) rotate(180deg);
              }
            }
          `}</style>

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

          <p className="inline-flex
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
              md:text-[17px]">

            03 • Company-Specific Preparation

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

              mt-6

              hidden

              rounded-[1.7rem]

              bg-ink

              p-5

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

              mt-5

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

                  p-4

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

                    mt-2

                    text-xs

                    leading-5

                    sm:text-sm

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

          PROGRAM OPTIONS

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

          <p className="inline-flex
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
              md:text-[17px]">

            Modular • Flexible • Built Around Your College

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

                    mt-3

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

                  p-4

                  sm:p-5

                "

              >

                <GraduationCap className="size-6 text-primary" />

                <h3

className="

                    mt-3

                    text-base

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
                      <img
                        src={image}
                        alt={name}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="
                          h-full
                          w-full
                          object-cover
                        "
                      />
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
                font-display
                text-[1.55rem]
                font-extrabold
                leading-[1.08]
                tracking-[-0.035em]
                text-white
                sm:text-[1.8rem]
                md:text-[2rem]
                lg:text-[2.2rem]
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