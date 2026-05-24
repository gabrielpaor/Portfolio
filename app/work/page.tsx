"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, TrendingUp, Briefcase, Award } from "lucide-react"
import PageTransition from "@/components/page-transition"

export default function WorkPage() {
  const experiences = [
    {
      id: 1,
      title: "Junior React Developer",
      company: "Zeniark Philippines Consulting Corp",
      location: "Pampanga, Philippines",
      period: "May, 2023 - Present",
      type: "Full-time",
      description:
        "Developing modern web applications using React and Next.js while collaborating with cross-functional teams. Contributing to the development of scalable user interfaces, learning best practices, and growing technical skills in a professional environment.",
      achievements: [
        "Built and maintained responsive web applications using React and TypeScript",
        "Collaborated with senior developers to implement new features and optimize existing code",
        "Integrated RESTful APIs and managed application state using RTK Query and Tanstack Query",
        "Participated in code reviews and learned industry-standard development practices",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Mantine", "RTK Query", "Tanstack Query", "Docker", "Gitlab", "Wordpress" ],
    },
    {
      id: 2,
      title: "Front-End Developer",
      company: "Homeqube",
      location: "Quezon City, Philippines",
      period: "October 2022 - March, 2023",
      type: "Part-time",
      description:
        "Developed web and mobile applications using React, Next.js, and React Native. Collaborated with designers and back-end developers to deliver user-friendly interfaces and integrate APIs for a real estate platform.",
      achievements: [
        "Built responsive web interfaces using React and Next.js with TypeScript",
        "Developed cross-platform mobile features using React Native",
        "Integrated RESTful APIs to connect front-end with back-end services",
        "Worked with Azure services and implemented version control using Git",
      ],
      technologies: ["React", "Next.js", "Typescript", "React Native", "CSS3", "REST APIs", "Git", "Azure"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ y: [-20, 20, -20], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
          animate={{ y: [20, -20, 20], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Briefcase className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Professional Journey</span>
              </motion.div>
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-white mb-4"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Work{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                  Experience
                </span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 max-w-2xl mx-auto"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                My professional journey and the experiences that have shaped my career as a front-end developer
              </motion.p>
            </motion.div>

            {/* Timeline */}
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <motion.div
                  className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 hidden md:block rounded-full"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  style={{ transformOrigin: "top" }}
                />

                {experiences.map((experience, index) => (
                  <motion.div key={experience.id} variants={itemVariants} className="relative mb-12">
                    {/* Timeline Dot */}
                    <motion.div
                      className="absolute left-5 w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full border-4 border-slate-900 shadow-lg shadow-blue-500/30 hidden md:block z-10"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.2, type: "spring", stiffness: 300 }}
                      whileHover={{ scale: 1.3 }}
                    />

                    {/* Content */}
                    <motion.div
                      className="md:ml-16"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-md bg-white/5 border-white/10 hover:border-blue-500/30">
                        <CardHeader>
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                              <CardTitle className="text-xl font-bold text-white mb-2">{experience.title}</CardTitle>
                              <motion.div
                                className="flex items-center gap-2 text-blue-400 font-semibold"
                                whileHover={{ x: 5 }}
                              >
                                <Building className="w-4 h-4" />
                                {experience.company}
                              </motion.div>
                            </div>
                            <div className="flex flex-col md:items-end gap-2">
                              <motion.div whileHover={{ scale: 1.05 }}>
                                <Badge
                                  className={`w-fit ${
                                    experience.type === "Full-time"
                                      ? "bg-green-500/20 text-green-400 border-green-500/30"
                                      : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                                  }`}
                                >
                                  {experience.type}
                                </Badge>
                              </motion.div>
                              <div className="flex items-center gap-4 text-sm text-gray-400">
                                <motion.div className="flex items-center gap-1" whileHover={{ scale: 1.05 }}>
                                  <Calendar className="w-4 h-4" />
                                  {experience.period}
                                </motion.div>
                                <motion.div className="flex items-center gap-1" whileHover={{ scale: 1.05 }}>
                                  <MapPin className="w-4 h-4" />
                                  {experience.location}
                                </motion.div>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <motion.p
                            className="text-gray-300 mb-6 leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 + index * 0.1 }}
                          >
                            {experience.description}
                          </motion.p>

                          {/* Key Achievements */}
                          <div className="mb-6">
                            <motion.h4
                              className="font-semibold text-white mb-3 flex items-center gap-2"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 1 + index * 0.1 }}
                            >
                              <TrendingUp className="w-4 h-4 text-green-400" />
                              Key Achievements:
                            </motion.h4>
                            <ul className="space-y-2">
                              {experience.achievements.map((achievement, idx) => (
                                <motion.li
                                  key={idx}
                                  className="flex items-start gap-2 text-gray-300"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 1.1 + index * 0.1 + idx * 0.05 }}
                                  whileHover={{ x: 5 }}
                                >
                                  <motion.div
                                    className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"
                                    whileHover={{ scale: 1.5 }}
                                  />
                                  {achievement}
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies */}
                          <div>
                            <motion.h4
                              className="font-semibold text-white mb-3"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 1.2 + index * 0.1 }}
                            >
                              Technologies Used:
                            </motion.h4>
                            <div className="flex flex-wrap gap-2">
                              {experience.technologies.map((tech, techIndex) => (
                                <motion.div
                                  key={tech}
                                  initial={{ scale: 0, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  transition={{ delay: 1.3 + index * 0.1 + techIndex * 0.05 }}
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <Badge
                                    className="bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30 transition-colors cursor-pointer"
                                  >
                                    {tech}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <motion.div variants={itemVariants} className="text-center mt-16">
              <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 border-0 shadow-2xl shadow-blue-500/20">
                  <CardContent className="p-8">
                    <motion.div
                      className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.4 }}
                    >
                      <Award className="w-4 h-4 text-white" />
                      <span className="text-sm text-white">Open to Opportunities</span>
                    </motion.div>
                    <motion.h3
                      className="text-2xl font-bold mb-4 text-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5 }}
                    >
                      Ready to Work Together?
                    </motion.h3>
                    <motion.p
                      className="text-white/90 mb-6 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.7 }}
                    >
                      I'm always interested in new opportunities and exciting projects. Let's discuss how we can create
                      something amazing together and bring your ideas to life.
                    </motion.p>
                    <motion.a
                      href="/contact"
                      className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.9 }}
                    >
                      Get In Touch
                    </motion.a>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
