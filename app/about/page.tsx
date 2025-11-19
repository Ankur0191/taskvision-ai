"use client";

import { Box, Container, Typography, Card, CardContent, Avatar, Stack } from "@mui/material";
import { motion } from "framer-motion";

const teamMembers = [
  { name: "Sarah Johnson", role: "Product Manager", avatar: "/avatars/sarah.jpg" },
  { name: "David Lee", role: "AI Engineer", avatar: "/avatars/david.jpg" },
  { name: "Mira Patel", role: "UX Designer", avatar: "/avatars/mira.jpg" },
];

export default function AboutPage() {
  return (
    <Box sx={{ py: { xs: 8, md: 16 }, px: { xs: 2, md: 0 }, backgroundColor: "grey.50" }}>
      <Container maxWidth="lg">
        {/* Hero / Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            sx={{ fontWeight: 700, textAlign: "center", mb: 4 }}
          >
            About TaskVision AI
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "text.secondary",
              maxWidth: "700px",
              mx: "auto",
              mb: 10,
            }}
          >
            TaskVision AI is a next-generation productivity tool designed to transform how teams manage tasks.
            By leveraging artificial intelligence, we turn messy notes, emails, and documents into structured,
            actionable plans, helping teams collaborate smarter, not harder.
          </Typography>
        </motion.div>

        {/* Our Mission Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              py: { xs: 6, md: 12 },
              px: 4,
              borderRadius: 3,
              background: "rgba(255, 255, 255, 0.25)",
              backdropFilter: "blur(15px)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.05)",
              mb: 10,
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, textAlign: "center" }}>
              Our Mission
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "center", color: "text.secondary", lineHeight: 1.7 }}>
              We aim to make task management effortless and intelligent. Our mission is to empower teams
              by providing clear, actionable plans automatically, saving time, reducing confusion, and
              fostering productivity across organizations of all sizes.
            </Typography>
          </Box>
        </motion.div>

        {/* How It Works Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ mb: 12 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 6, textAlign: "center" }}>
              How It Works
            </Typography>
            <Stack
              direction="row"
              flexWrap="wrap"
              spacing={4}
              justifyContent="center"
            >
              {[
                {
                  title: "Extract Tasks",
                  description: "Upload documents, emails, or messages and let AI extract tasks automatically.",
                },
                {
                  title: "Assign & Plan",
                  description: "AI suggests assignments to the right team members based on expertise and workload.",
                },
                {
                  title: "Track Progress",
                  description: "Real-time analytics keep you informed on task completion and team productivity.",
                },
              ].map((item, idx) => (
                <Box
                  key={idx}
                  sx={{
                    width: { xs: "100%", md: "30%" },
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                  >
                    <Card
                      sx={{
                        p: 4,
                        borderRadius: 3,
                        background: "rgba(255, 255, 255, 0.2)",
                        backdropFilter: "blur(10px)",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                        textAlign: "center",
                        transition: "0.3s",
                        "&:hover": { transform: "translateY(-6px)", boxShadow: "0 12px 30px rgba(0,0,0,0.1)" },
                      }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        {item.description}
                      </Typography>
                    </Card>
                  </motion.div>
                </Box>
              ))}
            </Stack>
          </Box>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 8, textAlign: "center" }}>
            Meet the Team
          </Typography>
          <Stack
            direction="row"
            flexWrap="wrap"
            spacing={4}
            justifyContent="center"
          >
            {teamMembers.map((member, idx) => (
              <Box
                key={idx}
                sx={{
                  width: { xs: "100%", sm: "45%", md: "30%" },
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                >
                  <Card
                    sx={{
                      p: 4,
                      borderRadius: 3,
                      textAlign: "center",
                      background: "rgba(255,255,255,0.25)",
                      backdropFilter: "blur(10px)",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                      transition: "0.3s",
                      "&:hover": { transform: "translateY(-6px)", boxShadow: "0 12px 30px rgba(0,0,0,0.1)" },
                    }}
                  >
                    <Avatar
                      src={member.avatar}
                      alt={member.name}
                      sx={{ width: 80, height: 80, mx: "auto", mb: 2 }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {member.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {member.role}
                    </Typography>
                  </Card>
                </motion.div>
              </Box>
            ))}
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}
