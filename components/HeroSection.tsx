"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 10, md: 18 },
        textAlign: "center",
        background: "linear-gradient(to bottom, #e3f2fd, #ffffff)",
      }}
    >
      <Container maxWidth="md">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              mb: 2,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
            }}
          >
            Organize Tasks with AI Precision
          </Typography>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "text.secondary",
              maxWidth: "700px",
              mx: "auto",
              mb: 4,
              lineHeight: 1.5,
            }}
          >
            TaskVision AI extracts tasks from documents, chats, or emails and turns them into 
            actionable team plans instantly.
          </Typography>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
            <Button
              component={Link}
              href="/signup"
              variant="contained"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 600,
                borderRadius: 2,
                backgroundColor: "primary.main",
                "&:hover": { backgroundColor: "primary.dark" },
              }}
            >
              Get Started
            </Button>

            <Button
              component={Link}
              href="#features"
              variant="outlined"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 600,
                borderRadius: 2,
                borderWidth: 2,
                "&:hover": { borderWidth: 2, backgroundColor: "rgba(0,0,0,0.03)" },
              }}
            >
              Learn More
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
