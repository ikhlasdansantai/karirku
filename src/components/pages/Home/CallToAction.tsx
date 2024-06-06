import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function CallToAction() {
  return (
    <Box component="section" bgcolor="#F1F2F4">
      <Box component="div" paddingBlock={10} paddingInline={3} maxWidth="xl" m="auto">
        <Typography variant="h5" fontWeight={"medium"} textAlign="center">
          Mulai Sekarang dan Mulai Berkarir
        </Typography>

        <Grid container marginTop={4} spacing={4} sx={{ justifyContent: { xs: "space-between", md: "center" } }}>
          <Grid item xs={12} md={6} lg={5}>
            <ChooseTeamCard
              title="Cari Pekerjaan"
              description="Cari pekerjaan yang sesuai dengan keinginanmu"
              imageUrl="https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={5}>
            <ChooseTeamCard
              title="Buat Pekerjaan"
              description="Lamar pekerjaan yang sesuai dengan keinginanmu"
              imageUrl="https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

function ChooseTeamCard({ title, description, imageUrl }: any) {
  return (
    <Box component="div" style={{ position: "relative", overflow: "hidden", paddingBlock: "3rem", paddingInline: "1rem" }} borderRadius={3} border={3} borderColor={"#E7E7E7"}>
      <Box component="figure" style={{ position: "absolute", top: "0", left: "0", bottom: "0", right: "0" }} className="blend">
        <Image src={imageUrl} alt="pen icon" className="image" width={300} height={300} style={{ width: "100%", height: "auto", objectFit: "contain", objectPosition: "center" }} />
      </Box>
      <Box style={{ position: "relative", zIndex: "1" }}>
        <Typography variant="h5" fontWeight={"medium"}>
          {title}
        </Typography>
        <Typography variant="subtitle1" marginTop={0} marginBottom={4} style={{ maxWidth: "60ch" }}>
          {description}
        </Typography>

        <Button variant="contained" size="large" style={{ backgroundColor: "#fff", color: "#0A65CC" }}>
          Gabung Sekarang
        </Button>
      </Box>
    </Box>
  );
}
