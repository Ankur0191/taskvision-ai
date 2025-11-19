"use client";

import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 12, md: 20 },
        backgroundColor: "grey.50",
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            What is TaskVision AI?
          </Typography>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              lineHeight: 1.6,
              fontSize: { xs: "1rem", md: "1.125rem" },
            }}
          >
            TaskVision AI is a next-gen productivity tool that converts messy input into structured,
            smart, shareable team plans.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
}
