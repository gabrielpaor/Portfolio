"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Star, Folder, Sparkles } from "lucide-react"
import PageTransition from "@/components/page-transition"

export default function ProjectsPage() {
  const [expandedTechIds, setExpandedTechIds] = useState<number[]>([])
  const projects = [
    {
      id: 1,
      title: "Qwote - E-procurement Web App",
      description:
        "An end-to-end procurement platform with purchase request creation, approval workflows, and vendor/order tracking, plus a buyer portal for managing requests end to end.",
      image: "/project-images/qwote.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Mantine UI", "RTK Query"],
      liveUrl: "https://fhc.qwote.ph/login",
      githubUrl: "#",
      featured: true,
      hideCode: true,
    },
    {
      id: 2,
      title: "Grinea - E-procurement Web App",
      description:
        "A procurement suite similar to Qwote with a dedicated vendor portal, streamlining request approvals, order tracking, and supplier management.",
      image: "/project-images/grinea.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Mantine UI", "RTK Query"],
      githubUrl: "#",
      featured: true,
      hideCode: true,
    },
    {
      id: 3,
      title: "Zeniark Website",
      description:
        "The official company website for Zeniark, presenting the brand, services, and company updates with a clean, modern presence.",
      image: "/project-images/zeniark-website.png",
      technologies: ["Wordpress"],
      liveUrl: "https://zeniark.com/",
      githubUrl: "#",
      featured: false,
      hideCode: true,
    },
    {
      id: 4,
      title: "Chemtron Inc.",
      description:
        "A business site for a chemical manufacturer specializing in warewashing and laundry solutions, highlighting product lines and formulation expertise.",
      image: "/project-images/chemtron.png",
      technologies: ["OpenCart", "PHP"],
      liveUrl: "https://chemtroninc.com/",
      githubUrl: "#",
      featured: false,
      hideCode: true,
    },
    {
      id: 5,
      title: "SPORTea",
      description:
        "A product site for a high-performance tea beverage, positioned as a nutritious alternative to coffee, soda, alcohol, and sugary energy drinks.",
      image: "/project-images/sportea.png",
      technologies: ["Wordpress", "LocalWP"],
      liveUrl: "https://sportea.ph/",
      githubUrl: "#",
      featured: false,
      hideCode: true,
    },
    {
      id: 6,
      title: "Trivia App",
      description:
        "A fast, responsive trivia game with clean UI, timed questions, and score tracking to keep sessions engaging.",
      image: "/project-images/Trivia.png",
      technologies: ["React", "Context API", "Tailwind CSS"],
      liveUrl: "https://trivia-app-cxej.vercel.app/",
      githubUrl: "https://github.com/gabrielpaor/trivia-app.git",
      featured: false,
      hideCode: false,
    },
    {
      id: 7,
      title: "Homeqube Mobile App",
      description:
        "The mobile companion to Homeqube, built with React Native for on-the-go browsing and engagement with modular housing components.",
      image: "/project-images/homeqube.png",
      technologies: ["React Native", "Zustand", "Styled Components", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      hideCode: true,
    },
    {
      id: 8,
      title: "Homeqube Website",
      description:
        "A Web3 marketplace for modular home building components, powered by AI and using Solana for transactions.",
      image: "/project-images/homeqube.png",
      technologies: ["Next.js", "Styled Components", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      hideCode: true,
    },
    {
      id: 9,
      title: "PhysicalATK",
      description:
        "A gamified fitness challenge app with leveling, EXP rewards, and AI-driven exercise recommendations tailored to user profiles.",
      image: "/project-images/physicalatk.png",
      technologies: ["React Native", "Expo", "React Context API", "Tailwind CSS", "Django REST Framework", "SQLite"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      hideCode: false,
    },
    {
      id: 10,
      title: "Iskoline",
      description:
        "A campus communication hub for PUP students, faculty, and admins featuring posts, announcements, and direct messaging.",
      image: "/project-images/iskoline.png",
      technologies: ["Python", "Django", "SQLite", "Bootstrap"],
      liveUrl: "#",
      githubUrl: "https://github.com/gabrielpaor/iskoline.git",
      featured: false,
      hideCode: false,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  const toggleTechList = (projectId: number) => {
    setExpandedTechIds((prev) =>
      prev.includes(projectId) ? prev.filter((id) => id !== projectId) : [...prev, projectId]
    )
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
        <motion.div
          className="absolute top-40 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ y: [-30, 30, -30], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ y: [30, -30, 30], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity }}
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
                <Folder className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Portfolio Showcase</span>
              </motion.div>
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-white mb-4"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                My{" "}
                <span className="gradient-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                  Projects
                </span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 max-w-2xl mx-auto"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                A collection of projects that showcase my skills and passion for creating exceptional web experiences
              </motion.p>
            </motion.div>

            {/* Featured Projects */}
            <motion.div variants={itemVariants} className="mb-16">
              <motion.div
                className="flex items-center gap-3 mb-8"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    whileHover={{ y: -10, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 backdrop-blur-md bg-white/5 border-white/10 hover:border-blue-500/30 h-full flex flex-col">
                      <div className="relative overflow-hidden bg-slate-900/60">
                        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={500}
                            height={300}
                            className="w-full h-64 object-cover"
                          />
                        </motion.div>
                        <motion.div
                          className="absolute top-4 right-4 flex gap-2"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                        >
                          <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg border-0">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        </motion.div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl font-bold text-white">{project.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col">
                        <p className="text-gray-300 mb-4 leading-relaxed flex-1">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={tech}
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ delay: 0.8 + techIndex * 0.05 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <Badge className="text-xs bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-emerald-500/20 hover:text-emerald-200 hover:border-emerald-400/40 transition-colors">
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2 mt-auto">
                        {project.liveUrl ? (
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button asChild size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 border-0 text-white">
                              <Link href={project.liveUrl} target="_blank">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Live View
                              </Link>
                            </Button>
                          </motion.div>
                        ) : (
                          // add a invisible space here to keep the button layout consistent
                          <div className="w-full sm:w-auto h-8" />
                        )}
                        {!project.hideCode && (
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button variant="outline" size="sm" asChild className="border-white/20 text-white hover:bg-white/10">
                              <Link href={project.githubUrl}>
                                <Github className="w-4 h-4 mr-2" />
                                Code
                              </Link>
                            </Button>
                          </motion.div>
                        )}
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Other Projects */}
            <motion.div variants={itemVariants}>
              <motion.div
                className="flex items-center gap-3 mb-8"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Folder className="w-6 h-6 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Other Projects</h2>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <Card className="overflow-hidden shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 backdrop-blur-md bg-white/5 border-white/10 hover:border-blue-500/30 h-full flex flex-col">
                      <div className="relative overflow-hidden bg-slate-900/60">
                        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={500}
                            height={300}
                            className={`w-full h-48 ${project.title.includes("Homeqube") ? "object-contain p-5" : "object-cover p-0"}`}
                          />
                        </motion.div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg font-bold text-white">{project.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col">
                        <p className="text-gray-300 text-sm mb-3 leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-1 mt-auto">
                          {(expandedTechIds.includes(project.id)
                            ? project.technologies
                            : project.technologies.slice(0, 3)
                          ).map((tech) => (
                            <Badge key={tech} className="text-xs bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-emerald-500/20 hover:text-emerald-200 hover:border-emerald-400/40 transition-colors">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && !expandedTechIds.includes(project.id) && (
                            <button
                              type="button"
                              onClick={() => toggleTechList(project.id)}
                              className="text-xs bg-gray-500/20 text-gray-300 border border-gray-500/30 rounded-md px-2 py-0.5 hover:bg-gray-500/30 transition-colors"
                              aria-label={`Show ${project.technologies.length - 3} more technologies for ${project.title}`}
                            >
                              +{project.technologies.length - 3}
                            </button>
                          )}
                          {project.technologies.length > 3 && expandedTechIds.includes(project.id) && (
                            <button
                              type="button"
                              onClick={() => toggleTechList(project.id)}
                              className="text-xs bg-gray-500/20 text-gray-300 border border-gray-500/30 rounded-md px-2 py-0.5 hover:bg-gray-500/30 transition-colors"
                              aria-label={`Show fewer technologies for ${project.title}`}
                            >
                              Show less
                            </button>
                          )}
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2 mt-auto">
                        {project.liveUrl && (
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                            {["Homeqube Mobile App", "Homeqube Website", "PhysicalATK", "Iskoline"].includes(project.title) ? (
                              <Button
                                size="sm"
                                disabled
                                className="w-full bg-slate-500/40 text-slate-200/70 border-0 cursor-not-allowed"
                                aria-disabled="true"
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                View
                              </Button>
                            ) : (
                              <Button asChild size="sm" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 border-0 text-white">
                                <Link href={project.liveUrl} target="_blank">
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  View
                                </Link>
                              </Button>
                            )}
                          </motion.div>
                        )}
                        {!project.hideCode && (
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button variant="outline" size="sm" asChild className="border-white/20 text-white hover:bg-white/10">
                              <Link href={project.githubUrl}>
                                <Github className="w-4 h-4" />
                              </Link>
                            </Button>
                          </motion.div>
                        )}
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
