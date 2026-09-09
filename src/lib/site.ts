import logo from "@/assets/logo-elev8.png";
import photo1 from "@/assets/photo-1.jpg";
import photo2 from "@/assets/photo-2.jpg";
import photo3 from "@/assets/photo-3.jpg";
import photo4 from "@/assets/photo-4.jpg";
import photo5 from "@/assets/photo-5.jpg";
import photo6 from "@/assets/photo-6.jpg";
import photo7 from "@/assets/photo-7.jpg";
import photo8 from "@/assets/photo-8.jpg";
import photo9 from "@/assets/photo-9.jpg";
import photo10 from "@/assets/photo-10.jpg";
import photo11 from "@/assets/photo-11.jpg";
import photo12 from "@/assets/photo-12.jpg";
import photo13 from "@/assets/photo-13.jpg";
import photo14 from "@/assets/photo-14.jpg";
import partnerCollage from "@/assets/partner-collage.png";
import companyCollage from "@/assets/company-collage.png";

export const logoUrl = logo;

export const photos = {
  workshopHands: photo1,
  batchGroup: photo2,
  auditoriumCelebration: photo3,
  campusCohort: photo4,
  labSession: photo5,
  convocation: photo6,
  lectureHall: photo7,
  seminarRoom: photo8,
  fullHall: photo9,
  corporateCohort: photo10,
  corporateGroup: photo11,
  celebration: photo12,
  teamSession: photo13,
  computerLab: photo14,
  partnerCollage,
  companyCollage,
} as const;

export const remoteImages = {
  communication: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
  professional: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85",
  aiDigital: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85",
  leadership: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=85",
  technical: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=85",
  innovation: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
  publicSpeaking: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1400&q=85",
  career: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=85",
  interview: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&w=1400&q=85",
  growth: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=85",
} as const;

export const gallery = [
  { src: photos.batchGroup, alt: "Elev8 placement training batch after a campus session" },
  { src: photos.auditoriumCelebration, alt: "Students celebrating at the end of an Elev8 mock drive" },
  { src: photos.campusCohort, alt: "A full college cohort at an Elev8 placement readiness programme" },
  { src: photos.labSession, alt: "Aptitude practice session in a college computer lab" },
  { src: photos.corporateGroup, alt: "Corporate team during an Elev8 communication workshop" },
  { src: photos.convocation, alt: "Graduating students after completing the Elev8 programme" },
  { src: photos.lectureHall, alt: "Interview preparation session in a college lecture hall" },
  { src: photos.teamSession, alt: "Activity-based team building session with a corporate group" },
];

export const contact = {
  phoneDisplay: "+91 99161 70317",
  phoneHref: "tel:+919916170317",
  email: "skills.elev8@gmail.com",
  emailHref: "mailto:skills.elev8@gmail.com",
  linkedin: "https://www.linkedin.com/company/elev8-learning-blr",
  instagram: "https://www.instagram.com/skills.elev8",
  instagramHandle: "skills.elev8",
};

export const stats = [
  { value: "14", numericEnd: 14, suffix: " Years", label: "Of training excellence" },
  { value: "2,00,000+", numericEnd: 200000, suffix: "+", label: "Learners trained" },
  { value: "100+", numericEnd: 100, suffix: "+", label: "College partners" },
  { value: "70+", numericEnd: 70, suffix: "+", label: "Corporate sessions delivered" },
];
