import Icons from "@/constant/Icons";
import React from "react";

type JobCategoriesProps = {
  title: string;
  openPositions: number;
  icon: () => React.ReactNode;
};

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
