"use client";

import { useState } from "react";
import { Box, Button, Grid, Tab, Tabs, Typography } from "@mui/material";
import RecruiterSection from "../../pages/Home/RecruiterSection";
import CandidateSection from "../../pages/Home/CandidateSection";

export default function HowItWorks() {
  const [value, setValue] = useState<number>(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box component="section" style={{ maxWidth: "1440px", marginInline: "auto", paddingInline: "1rem" }} marginBlock={8}>
      <Typography variant="h5" fontWeight={"medium"} textAlign="center">
        Bagaimana Cara Kerjanya?
      </Typography>

      <Box sx={{ width: "100%", bgcolor: "background.paper" }} marginTop={1}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Sebagai Recruiter" />
          <Tab label="Sebagai Calon Kandidat" />
        </Tabs>
      </Box>

      <Box component="div" marginTop={2}>
        {value === 0 ? <RecruiterSection /> : <CandidateSection />}
      </Box>
    </Box>
  );
}
