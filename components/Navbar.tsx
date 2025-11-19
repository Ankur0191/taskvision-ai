"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Button,
  Box,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen(!open);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <AppBar
        position="sticky"
        elevation={4}
        sx={{
          background: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link href="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#1976d2",
                  cursor: "pointer",
                }}
              >
                TaskVision AI
              </Typography>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} style={{ textDecoration: "none" }}>
                <Button
                  sx={{
                    color: "#333",
                    textTransform: "none",
                    fontSize: "1rem",
                    "&:hover": { color: "#1976d2" },
                  }}
                >
                  {item.label}
                </Button>
              </Link>
            ))}

            <Link href="/login" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  background: "#1976d2",
                  fontWeight: 600,
                  "&:hover": { background: "#115293" },
                }}
              >
                Login
              </Button>
            </Link>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={toggleDrawer}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <Box
          sx={{
            width: 260,
            paddingTop: 3,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end", pr: 2 }}>
            <IconButton onClick={toggleDrawer}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            {navItems.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={item.href} style={{ textDecoration: "none" }}>
                  <ListItemButton onClick={toggleDrawer}>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: "1.1rem",
                      }}
                    />
                  </ListItemButton>
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link href="/login" style={{ textDecoration: "none" }}>
                <ListItemButton onClick={toggleDrawer}>
                  <ListItemText
                    primary="Login"
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                      color: "#1976d2",
                    }}
                  />
                </ListItemButton>
              </Link>
            </motion.div>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
