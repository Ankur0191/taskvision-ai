"use client";

import { Box, Container, Grid, Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";

const testimonials = [
  { text: "Our workflow improved instantly.", author: "Sarah, PM" },
  { text: "AI task extraction saved us hours.", author: "David, Team Lead" },
  { text: "Super intuitive dashboard.", author: "Mira, Ops Manager" },
];

export default function TestimonialsSection() {
  return (
    <Box sx={{ py: { xs: 12, md: 24 }, textAlign: "center" }}>
      <Container maxWidth="lg">
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
              mb: 8,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Loved by Teams
          </Typography>
        </motion.div>

        {/* Testimonials Grid */}
        <Grid container spacing={4} justifyContent="center">
          {testimonials.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card
                  elevation={3}
                  sx={{
                    borderRadius: 3,
                    py: 4,
                    px: 3,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0px 12px 28px rgba(0, 0, 0, 0.1)",
                    },
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.primary", mb: 2, lineHeight: 1.6 }}
                    >
                      "{item.text}"
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: "text.secondary" }}>
                      – {item.author}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
