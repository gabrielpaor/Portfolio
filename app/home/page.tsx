"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Sparkles, Code2, Palette, Rocket } from "lucide-react";
import PageTransition from "@/components/page-transition";
import { useEffect, useMemo, useState, useCallback, memo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container } from "@tsparticles/engine";

const roles = [
  "React Front-End Developer",
  "UI/UX Enthusiast",
  "Creative Problem Solver",
  "Web Experience Crafter",
];

const techStack = [
  { name: "React", color: "from-cyan-500 to-blue-500" },
  { name: "Next.js", color: "from-gray-700 to-gray-900 dark:from-gray-200 dark:to-white" },
  { name: "TypeScript", color: "from-blue-600 to-blue-800" },
  { name: "Tailwind CSS", color: "from-teal-400 to-cyan-500" },
  { name: "Framer Motion", color: "from-purple-500 to-pink-500" },
];

// Memoized Particles component to prevent re-renders from parent state changes
const ParticlesBackground = memo(function ParticlesBackground() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setIsReady(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    // Particles loaded successfully
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: false,
      },
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push" as const,
          },
          onHover: {
            enable: true,
            mode: "repulse" as const,
          },
        },
        modes: {
          push: {
            quantity: 2,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: ["#60a5fa", "#818cf8", "#a78bfa", "#38bdf8"],
        },
        links: {
          color: "#60a5fa",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none" as const,
          enable: true,
          outModes: {
            default: "out" as const,
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 60,
        },
        opacity: {
          value: 0.6,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!isReady) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      className="absolute inset-0 z-[2]"
    />
  );
});

export default function HomePage() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex]);

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

  const highlights = [
    { icon: Code2, label: "Clean Code", desc: "Writing maintainable solutions" },
    { icon: Palette, label: "Modern Design", desc: "Beautiful user interfaces" },
    { icon: Rocket, label: "Performance", desc: "Fast & optimized apps" },
  ];

  return (
    <PageTransition>
      <div
        className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950"
        style={{
          maxHeight: 'calc(100vh - 64px)',
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent z-[1]"></div>
        
        {/* Particles Container - Memoized to prevent re-renders */}
        <ParticlesBackground />

        {/* Floating Background Elements */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl z-[3]"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl z-[3]"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute top-1/2 left-1/4 w-48 h-48 bg-purple-500/15 rounded-full blur-3xl z-[3]"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 0.5 }}
          className="absolute top-1/3 right-1/4 w-56 h-56 bg-cyan-500/15 rounded-full blur-3xl z-[3]"
        />

        <div className="container mx-auto px-4 py-20 relative z-[10]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center min-h-[80vh] text-center"
          >
            {/* Main Heading */}
            <motion.div variants={itemVariants} className="mb-4">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Available for opportunities</span>
              </motion.div>
              
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Hi, I'm{" "}
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-[length:200%_auto]"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  Gab
                </motion.span>
              </motion.h1>
            </motion.div>

            {/* Animated Role */}
            <motion.div variants={itemVariants} className="mb-6 h-12">
              <p className="text-2xl md:text-3xl font-medium text-muted-foreground">
                <span className="text-primary font-semibold">{displayedText}</span>
                <motion.span
                  className="inline-block w-0.5 h-7 bg-primary ml-1 align-middle"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                />
              </p>
            </motion.div>

            {/* Subtitle */}
            <motion.div variants={itemVariants} className="mb-8">
              <motion.p
                className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Crafting beautiful, interactive, and user-centered web
                experiences that make a difference. Let's build something amazing together.
              </motion.p>
            </motion.div>

            {/* Tech Stack Badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-3 mb-10"
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className={`px-4 py-2 rounded-full bg-gradient-to-r ${tech.color} text-white text-sm font-medium shadow-lg`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {tech.name}
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/projects">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 group"
                  >
                    View My Work
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                    className="border-2 border-primary/50 hover:border-primary hover:bg-primary/10 px-8 py-6 text-lg rounded-full transition-all duration-300 backdrop-blur-sm"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Get In Touch
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Highlights */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-3xl"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex flex-col items-center p-4 bg-card/60 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <item.icon className="w-6 h-6 text-primary mb-2" />
                  <span className="font-semibold text-foreground">{item.label}</span>
                  <span className="text-xs text-muted-foreground text-center">{item.desc}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4">
              {[
                {
                  icon: Github,
                  href: "https://github.com/gabrielpaor",
                  label: "GitHub",
                  color: "hover:bg-gray-800 hover:text-white",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/gabriel-john-paor-ba0bb4235/",
                  label: "LinkedIn",
                  color: "hover:bg-blue-600 hover:text-white",
                },
                { 
                  icon: Mail, 
                  href: "/contact", 
                  label: "Email",
                  color: "hover:bg-red-500 hover:text-white",
                },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.label === "Email" ? "_self" : "_blank"}
                  className={`p-4 bg-card/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-muted-foreground ${social.color} border border-border/50`}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>

            {/* Scroll Indicator */}
            {/* <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{ 
                opacity: { delay: 2 },
                y: { duration: 2, repeat: Number.POSITIVE_INFINITY }
              }}
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs text-muted-foreground">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center">
                  <motion.div
                    className="w-1.5 h-3 bg-primary rounded-full mt-2"
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </div>
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
