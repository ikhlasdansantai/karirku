import { jobCategories } from "@/data";
import { Box, Grid } from "@mui/material";
import JobCategoryCard from "./JobCategoryCard";
import HeaderSection from "@/components/common/HeaderSection";

export default function JobCategories() {
  return (
    <Box component="section" bgcolor={"#F1F2F4"} paddingBlock={10} paddingInline={3}>
      <Box component="div" margin="auto" maxWidth="xl">
        <HeaderSection title="Kategori Pekerjaan" btnLabel="Lihat Semua" />

        <Grid container spacing={4} marginTop={2}>
          {jobCategories.map((category) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={category.title}>
              <JobCategoryCard title={category.title} openPosition={category.openPositions} icon={category.icon} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
