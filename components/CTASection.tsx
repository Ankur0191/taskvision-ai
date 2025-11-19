"use client";

import { Box, Container, Typography, Button } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <Box
      sx={{
        py: { xs: 12, md: 20 },
        backgroundColor: "primary.main",
        textAlign: "center",
        color: "common.white",
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
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Boost Your Team Productivity
          </Typography>
          <Typography
            variant="body1"
            sx={{ opacity: 0.9, mb: 6, fontSize: { xs: "1rem", md: "1.125rem" } }}
          >
            Try TaskVision AI for free today.
          </Typography>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button
            component={Link}
            href="/signup"
            variant="contained"
            sx={{
              px: { xs: 6, md: 8 },
              py: { xs: 1.5, md: 2 },
              fontWeight: 700,
              borderRadius: 2,
              backgroundColor: "common.white",
              color: "primary.main",
              "&:hover": {
                backgroundColor: "grey.100",
              },
            }}
          >
            Get Started
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
}
