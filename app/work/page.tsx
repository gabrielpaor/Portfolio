"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, TrendingUp } from "lucide-react"
import PageTransition from "@/components/page-transition"

export default function WorkPage() {
  const experiences = [
    {
      id: 1,
      title: "Senior Front-End Developer",
      company: "TechFlow Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description:
        "Leading the front-end development team in building scalable web applications using React and Next.js. Responsible for architecting user interfaces, mentoring junior developers, and implementing best practices for code quality and performance.",
      achievements: [
        "Improved application performance by 40% through code optimization and lazy loading",
        "Led migration from legacy codebase to modern React architecture",
        "Mentored 5 junior developers and established coding standards",
        "Implemented automated testing reducing bugs by 60%",
      ],
      technologies: ["React", "Next.js", "TypeScript", "GraphQL", "AWS", "Framer Motion"],
    },
    {
      id: 2,
      title: "Front-End Developer",
      company: "Digital Innovations Inc",
      location: "San Francisco, CA",
      period: "2021 - 2022",
      type: "Full-time",
      description:
        "Developed responsive web applications and collaborated with UX/UI designers to create intuitive user experiences. Worked closely with back-end developers to integrate APIs and optimize application performance.",
      achievements: [
        "Built 15+ responsive web applications from scratch",
        "Reduced page load times by 50% through optimization techniques",
        "Collaborated with design team to improve user experience metrics",
        "Implemented accessibility standards achieving WCAG 2.1 compliance",
      ],
      technologies: ["React", "JavaScript", "CSS3", "REST APIs", "Git", "Figma"],
    },
    {
      id: 3,
      title: "Junior Front-End Developer",
      company: "StartupXYZ",
      location: "San Francisco, CA",
      period: "2020 - 2021",
      type: "Full-time",
      description:
        "Started my professional journey as a junior developer, focusing on learning modern web development practices and contributing to various client projects. Gained experience in agile development methodologies.",
      achievements: [
        "Successfully completed 10+ client projects on time",
        "Learned and implemented modern JavaScript frameworks",
        "Contributed to open-source projects and company blog",
        "Received 'Rising Star' award for exceptional growth and dedication",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Sass"],
    },
    {
      id: 4,
      title: "Web Development Intern",
      company: "Creative Agency Pro",
      location: "San Francisco, CA",
      period: "Summer 2020",
      type: "Internship",
      description:
        "Gained hands-on experience in web development while working on real client projects. Learned industry best practices and collaborated with experienced developers to deliver high-quality websites.",
      achievements: [
        "Developed 5 client websites during 3-month internship",
        "Learned version control and collaborative development workflows",
        "Received full-time job offer upon successful completion",
        "Contributed to agency's design system documentation",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "WordPress", "Photoshop", "Git"],
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
        ease: "easeOut",
      },
    },
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Work Experience
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600 max-w-2xl mx-auto"
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
                  className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-indigo-600 hidden md:block"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  style={{ transformOrigin: "top" }}
                />

                {experiences.map((experience, index) => (
                  <motion.div key={experience.id} variants={itemVariants} className="relative mb-12">
                    {/* Timeline Dot */}
                    <motion.div
                      className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block z-10"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.2, type: "spring", stiffness: 300 }}
                      whileHover={{ scale: 1.2 }}
                    />

                    {/* Content */}
                    <motion.div
                      className="md:ml-16"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card className="shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                        <CardHeader>
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                              <CardTitle className="text-xl font-bold text-gray-900 mb-2">{experience.title}</CardTitle>
                              <motion.div
                                className="flex items-center gap-2 text-blue-600 font-semibold"
                                whileHover={{ x: 5 }}
                              >
                                <Building className="w-4 h-4" />
                                {experience.company}
                              </motion.div>
                            </div>
                            <div className="flex flex-col md:items-end gap-2">
                              <motion.div whileHover={{ scale: 1.05 }}>
                                <Badge
                                  variant="outline"
                                  className={`w-fit ${
                                    experience.type === "Full-time"
                                      ? "border-green-500 text-green-700"
                                      : "border-blue-500 text-blue-700"
                                  }`}
                                >
                                  {experience.type}
                                </Badge>
                              </motion.div>
                              <div className="flex items-center gap-4 text-sm text-gray-600">
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
                            className="text-gray-700 mb-6 leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 + index * 0.1 }}
                          >
                            {experience.description}
                          </motion.p>

                          {/* Key Achievements */}
                          <div className="mb-6">
                            <motion.h4
                              className="font-semibold text-gray-900 mb-3 flex items-center gap-2"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 1 + index * 0.1 }}
                            >
                              <TrendingUp className="w-4 h-4 text-green-600" />
                              Key Achievements:
                            </motion.h4>
                            <ul className="space-y-2">
                              {experience.achievements.map((achievement, idx) => (
                                <motion.li
                                  key={idx}
                                  className="flex items-start gap-2 text-gray-700"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 1.1 + index * 0.1 + idx * 0.05 }}
                                  whileHover={{ x: 5 }}
                                >
                                  <motion.div
                                    className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"
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
                              className="font-semibold text-gray-900 mb-3"
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
                                    variant="secondary"
                                    className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors cursor-pointer"
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
                <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-2xl">
                  <CardContent className="p-8">
                    <motion.h3
                      className="text-2xl font-bold mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5 }}
                    >
                      Ready to Work Together?
                    </motion.h3>
                    <motion.p
                      className="text-blue-100 mb-6 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.7 }}
                    >
                      I'm always interested in new opportunities and exciting projects. Let's discuss how we can create
                      something amazing together and bring your ideas to life.
                    </motion.p>
                    <motion.a
                      href="/contact"
                      className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
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
