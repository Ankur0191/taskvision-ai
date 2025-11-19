"use client";

import { Box, Container, Typography, Stack, IconButton, Link as MuiLink } from "@mui/material";
import { LinkedIn, Twitter, GitHub } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ py: { xs: 6, md: 10 }, backgroundColor: "grey.100", textAlign: "center" }}
    >
      <Container maxWidth="lg">
        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={3}
            justifyContent="center"
            alignItems="center"
            mb={3}
          >
            <MuiLink href="/about" underline="hover" color="text.primary">
              About
            </MuiLink>
            <MuiLink href="/features" underline="hover" color="text.primary">
              Features
            </MuiLink>
            <MuiLink href="/contact" underline="hover" color="text.primary">
              Contact
            </MuiLink>
          </Stack>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Stack direction="row" spacing={2} justifyContent="center" mb={3}>
            <IconButton component="a" href="https://linkedin.com" target="_blank" color="primary">
              <LinkedIn />
            </IconButton>
            <IconButton component="a" href="https://twitter.com" target="_blank" color="primary">
              <Twitter />
            </IconButton>
            <IconButton component="a" href="https://github.com" target="_blank" color="primary">
              <GitHub />
            </IconButton>
          </Stack>
        </motion.div>

        {/* Copyright */}
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} TaskVision AI. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
