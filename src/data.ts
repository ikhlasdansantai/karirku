import Icons from "@/constant/Icons";
import { JobCategoriesProps } from "./types";

export const jobCategories: JobCategoriesProps[] = [
  {
    title: "Graphics & Design",
    openPositions: 300,
    icon: Icons.pen,
  },
  {
    title: "Code & Programming",
    openPositions: 403,
    icon: Icons.code,
  },
  {
    title: "Digital Marketing",
    openPositions: 240,
    icon: Icons.megaphone,
  },
  {
    title: "Video & Animation",
    openPositions: 190,
    icon: Icons.monitor,
  },
  {
    title: "Music & Audio",
    openPositions: 300,
    icon: Icons.music,
  },
  {
    title: "Account & Finance",
    openPositions: 403,
    icon: Icons.chartBar,
  },
  {
    title: "Health & Care",
    openPositions: 240,
    icon: Icons.firstaid,
  },
  {
    title: "Data & Science",
    openPositions: 190,
    icon: Icons.database,
  },
];

export const recruiterFlows = [
  {
    title: "Buat Akun",
    description: "Khusus untuk Recruiter, kami harus memverifikasi akun anda sebelum anda dapat melanjutkan ke tahap selanjutnya",
    icon: Icons.userPlus,
  },
  {
    title: "Buat Program",
    description: "Setelah akun terverifikasi, Kamu bisa mulai dengan diskusi untuk mengerti kebutuhan rekrutmen Anda.",
    icon: Icons.pencil,
  },
  {
    title: "Mencari Kandidat",
    description: "Anda akan mendapatkan form CV calon kandidat yang sesuai dengan program lowongan pekerjaan anda",
    icon: Icons.contact,
  },
  {
    title: "Wawancara Dan Offering",
    description: "Wawancara kandidat untuk memverifikasi kesesuaian dengan posisi dan mengintegrasi kandidat ke dalam tim Anda",
    icon: Icons.meeting,
  },
];

export const candidateFlows = [
  {
    title: "Lengkapi Data Personalmu",
    description: "Setelah akun terverifikasi, Kamu bisa mulai dengan diskusi untuk mengerti kebutuhan rekrutmen Anda.",
    icon: Icons.pencil,
  },
  {
    title: "Jelajahi & Pilih Pekerjaan",
    description: "Khusus untuk Recruiter, kami harus memverifikasi akun anda sebelum anda dapat melanjutkan ke tahap selanjutnya",
    icon: Icons.searchList,
  },
  {
    title: "Kirim Lamaran",
    description: "Setelah akun terverifikasi, Kamu bisa mulai dengan diskusi untuk mengerti kebutuhan rekrutmen Anda.",
    icon: Icons.contact,
  },
  {
    title: "Tunggu Informasi Lebih Lanjut",
    description: "Lamaranmu sedang direview, biasanya perusahaan akan memberikan informasinya dalam 1-2 minggu.",
    icon: Icons.pending,
  },
];

export const loker = [
  {
    id: 1,
    title: "Software Developer",
    company: "Google",
    companyLogo: Icons.google,
    level: "Junior",
    type: "Fulltime",
    remoteJob: true,
    skills: ["JavaScript", "React", "Node.js", "Git", "Github"],
    location: "Jakarta, Indonesia",
    details: {
      description: "Developing and maintaining web applications using JavaScript and related technologies.",
      salaryRange: [6_000_000, 8_000_000],
      educationMinimum: "Bachelor's Degree in Computer Science or related field",
      experienceYears: 2,
      jobRequirements: ["Strong problem-solving skills", "Strong communication skills"],
      jobDescriptions: [
        "Developing and maintaining web applications using JavaScript and related technologies.",
        "Collaborating with cross-functional teams to deliver high-quality software solutions.",
        "Participating in code reviews and providing feedback to improve the overall quality of the code.",
      ],
    },
    benefits: {
      healthInsurance: true,
      paidVacation: 20,
      retirementPlan: true,
    },
    jobPosted: "2024-10-10T10:10:10.000Z",
    applicationDeadline: "2024-12-31T23:59:59.000Z",
    contactEmail: "jobs@google.com",
    companyWebsite: "https://careers.google.com",
  },
];
