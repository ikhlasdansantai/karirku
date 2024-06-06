import { Box, Grid } from "@mui/material";
import JobCard from "../../common/JobCard/JobCard";
import HeaderSection from "@/components/common/HeaderSection";

export default function FeaturedJob() {
  const jobTemp = ["", "", "", "", "", "", ""];
  return (
    <Box component="section" style={{ maxWidth: "1440px", marginInline: "auto", paddingInline: "1rem" }} marginBlock={8}>
      <HeaderSection title="Pekerjaan Unggulan" btnLabel="Lihat Semua" />

      <Grid container mt={6} spacing={4}>
        {jobTemp.map((job, index) => (
          <Grid item xs={12} sm={6} lg={4} key={index}>
            <JobCard />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
