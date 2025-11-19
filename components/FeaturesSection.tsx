"use client";

import { Box, Container, Typography, Card, CardContent, Stack } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import GroupIcon from "@mui/icons-material/Group";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { motion } from "framer-motion";

const features = [
  {
    title: "AI Task Extraction",
    description: "Upload documents or paste text — AI extracts clear action items automatically.",
    icon: <AutoAwesomeIcon sx={{ fontSize: 40, color: "primary.main" }} />,
  },
  {
    title: "Team Assignment",
    description: "Smart assignment engine suggests team members based on expertise.",
    icon: <GroupIcon sx={{ fontSize: 40, color: "primary.main" }} />,
  },
  {
    title: "Progress Dashboard",
    description: "Real-time task tracking powered by analytics.",
    icon: <DashboardIcon sx={{ fontSize: 40, color: "primary.main" }} />,
  },
];

export default function FeaturesSection() {
  return (
    <Box id="features" sx={{ py: { xs: 12, md: 16 }, textAlign: "center" }}>
      <Container maxWidth="lg">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 6,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Features
          </Typography>
        </motion.div>

        {/* Features using Stack instead of Grid */}
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          spacing={4}
        >
          {features.map((feature, index) => (
            <Box
              key={feature.title}
              sx={{
                width: {
                  xs: "100%",   // 1 item per row
                  sm: "45%",    // 2 items per row
                  md: "30%",    // 3 items per row
                },
                display: "flex",
                justifyContent: "center",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                style={{ width: "100%" }}
              >
                <Card
                  elevation={3}
                  sx={{
                    borderRadius: 3,
                    textAlign: "center",
                    py: 4,
                    px: 2,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0px 12px 28px rgba(0, 0, 0, 0.1)",
                    },
                  }}
                >
                  <CardContent>
                    <Box sx={{ mb: 2 }}>{feature.icon}</Box>

                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {feature.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{ mt: 2, color: "text.secondary", lineHeight: 1.6 }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
