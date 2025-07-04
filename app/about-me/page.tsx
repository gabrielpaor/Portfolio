"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Calendar,
  Coffee,
  Heart,
  Code,
  Palette,
  Zap,
} from "lucide-react";
import PageTransition from "@/components/page-transition";

export default function AboutMePage() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Framer Motion",
    "Node.js",
    "Git",
    "Figma",
    "Redux",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
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
        ease: "easeOut",
      },
    },
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                About Me
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Get to know the person behind the code
              </motion.p>
            </motion.div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Image and Quick Info */}
              <motion.div variants={itemVariants} className="space-y-6">
                {/* Profile Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="overflow-hidden shadow-xl">
                    <CardContent className="p-0">
                      <div className="relative">
                        <motion.div
                          initial={{ scale: 1.1, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.8 }}
                        >
                          <Image
                            src="/placeholder.svg?height=500&width=400"
                            alt="Gabriel Paor - React Developer"
                            width={400}
                            height={500}
                            className="w-full h-96 object-cover"
                          />
                        </motion.div>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        />
                        <motion.div
                          className="absolute bottom-6 left-6 text-white"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.7 }}
                        >
                          <h2 className="text-2xl font-bold mb-1">
                            Gabriel Paor
                          </h2>
                          <p className="text-blue-200">
                            React Front-End Developer
                          </p>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Quick Info */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {[
                          {
                            icon: MapPin,
                            text: "San Francisco, CA",
                            color: "text-blue-600",
                          },
                          {
                            icon: Calendar,
                            text: "4+ years experience",
                            color: "text-green-600",
                          },
                          {
                            icon: Coffee,
                            text: "Coffee enthusiast",
                            color: "text-amber-600",
                          },
                          {
                            icon: Heart,
                            text: "Open source contributor",
                            color: "text-red-600",
                          },
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            className="flex items-center gap-3"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.8 + index * 0.1 }}
                            whileHover={{ x: 5 }}
                          >
                            <div
                              className={`p-2 bg-gray-100 rounded-full ${item.color}`}
                            >
                              <item.icon className="w-4 h-4" />
                            </div>
                            <span className="text-gray-700">{item.text}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              {/* Right Column - About Content */}
              <div className="space-y-8">
                {/* Story */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <motion.h3
                        className="text-2xl font-bold text-gray-900 mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        My Story
                      </motion.h3>
                      <motion.div
                        className="space-y-4 text-gray-700 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                      >
                        <p>
                          Hello! I'm Gabriel, a passionate front-end developer
                          with over 4 years of experience creating beautiful,
                          functional, and user-centered digital experiences. My
                          journey into web development started during college
                          when I built my first interactive website and fell in
                          love with the magic of bringing ideas to life through
                          code.
                        </p>
                        <p>
                          I specialize in React and modern JavaScript
                          frameworks, with a keen eye for design and user
                          experience. I believe that great software is not just
                          about clean code, but about solving real problems and
                          creating delightful experiences that users love to
                          interact with.
                        </p>
                        <p>
                          When I'm not coding, you can find me exploring new
                          coffee shops around San Francisco, contributing to
                          open source projects, or hiking in the beautiful
                          California mountains. I'm always eager to learn new
                          technologies and take on challenging projects.
                        </p>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Skills */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <motion.h3
                        className="text-2xl font-bold text-gray-900 mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                      >
                        Skills & Technologies
                      </motion.h3>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                          <motion.div
                            key={skill}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 1 + index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Badge
                              variant="secondary"
                              className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors cursor-pointer"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Philosophy */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-blue-50 to-indigo-50">
                    <CardContent className="p-6">
                      <motion.h3
                        className="text-2xl font-bold text-gray-900 mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                      >
                        My Philosophy
                      </motion.h3>
                      <motion.blockquote
                        className="text-lg text-gray-700 italic border-l-4 border-blue-600 pl-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.4 }}
                      >
                        "Great design is not just what it looks like and feels
                        like. Great design is how it works. I strive to create
                        interfaces that are not only beautiful but also
                        intuitive, accessible, and meaningful to every user."
                      </motion.blockquote>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Fun Icons */}
                <motion.div
                  className="flex justify-center gap-8 pt-4"
                  variants={itemVariants}
                >
                  {[
                    { icon: Code, color: "text-blue-600", bg: "bg-blue-100" },
                    {
                      icon: Palette,
                      color: "text-purple-600",
                      bg: "bg-purple-100",
                    },
                    {
                      icon: Zap,
                      color: "text-yellow-600",
                      bg: "bg-yellow-100",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className={`p-4 ${item.bg} rounded-full ${item.color}`}
                      whileHover={{
                        scale: 1.1,
                        rotate: 10,
                        transition: { type: "spring", stiffness: 300 },
                      }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        delay: 1.5 + index * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      <item.icon className="w-6 h-6" />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
