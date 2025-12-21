"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import PageTransition from "@/components/page-transition";
import { useEffect, useMemo, useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, Engine } from "@tsparticles/engine";

export default function HomePage() {
  useEffect(() => {
    const initParticles = async () => {
      const { tsParticles } = await import("@tsparticles/engine");
      await loadSlim(tsParticles);
    };
    initParticles();
  }, []);

  const particlesOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: ["grab", "bubble"],
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          grab: {
            distance: 200,
            links: {
              opacity: 1,
              color: "#60a5fa",
            },
          },
          bubble: {
            distance: 250,
            size: 8,
            duration: 2,
            opacity: 0.8,
          },
        },
      },
      particles: {
        color: {
          value: "#60a5fa",
        },
        links: {
          color: "#60a5fa",
          distance: 150,
          enable: true,
          opacity: 0.6,
          width: 2,
        },
        move: {
          direction: "none" as const,
          enable: true,
          outModes: {
            default: "bounce" as const,
          },
          random: false,
          speed: 1.5,
          straight: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200,
          },
        },
        number: {
          density: {
            enable: true,
          },
          value: 100,
        },
        opacity: {
          value: 0.7,
          random: true,
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.3,
            sync: false,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 2, max: 6 },
          random: true,
          animation: {
            enable: true,
            speed: 3,
            minimumValue: 1,
            sync: false,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
      },
    },
  };

  return (
    <PageTransition>
      <div
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/home-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          maxHeight: 'calc(100vh - 64px)',
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-muted/50 to-accent/60 z-[1]"></div>
        
        {/* Particles Container */}
        <Particles
          id="tsparticles"
          particlesLoaded={async (container?: Container) => {
            console.log("Particles loaded", container);
          }}
          options={particlesOptions}
          className="absolute inset-0 z-[2]"
        />

        {/* Floating Background Elements */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl z-[3]"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-primary/15 rounded-full blur-xl z-[3]"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/10 rounded-full blur-xl z-[3]"
        />

        <div className="container mx-auto px-4 py-20 relative z-[10]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center min-h-[80vh] text-center"
          >
            {/* Main Heading */}
            <motion.div variants={itemVariants} className="mb-6">
              <motion.h1
                className="text-5xl md:text-7xl font-bold text-foreground mb-4"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Hi, I'm{" "}
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  Gab
                </motion.span>
              </motion.h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div variants={itemVariants} className="mb-8">
              <motion.p
                className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                A passionate{" "}
                <motion.span
                  className="font-semibold text-primary"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  React Front-End Developer
                </motion.span>{" "}
                crafting beautiful, interactive, and user-centered web
                experiences that make a difference.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/projects">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    View My Work
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </motion.div>
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 px-8 py-3 rounded-full transition-all duration-300"
                  >
                    Get In Touch
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-6">
              {[
                {
                  icon: Github,
                  href: "https://github.com/gabrielpaor",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/gabriel-john-paor-ba0bb4235/",
                  label: "LinkedIn",
                },
                { icon: Mail, href: "/contact", label: "Email" },
                // { icon: Download, href: "#", label: "Resume" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.label === "Email" ? "_self" : "_blank"}
                  className="p-3 bg-card/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-muted-foreground hover:text-primary"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Scroll Indicator */}
            {/* <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                <motion.div
                  className="w-1 h-3 bg-gray-400 rounded-full mt-2"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
