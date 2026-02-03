"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Star, Folder, Sparkles } from "lucide-react"
import PageTransition from "@/components/page-transition"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Qwote - E-procurement Web App",
      description:
        "A comprehensive admin dashboard for managing e-commerce operations with real-time analytics, inventory management, and order tracking. Built with modern React patterns and beautiful animations.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Grinea - E-procurement Web App",
      description:
        "A collaborative task management application with drag-and-drop functionality, team collaboration features, real-time updates, and progress tracking.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Redux", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Forecast App",
      description:
        "A beautiful weather application with location-based forecasts, interactive maps, detailed weather analytics, and smooth animations.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "API Integration", "CSS3", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing creative work with smooth animations, modern design principles, and optimized performance.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description:
        "A comprehensive social media management tool with analytics, post scheduling, engagement tracking, and multi-platform integration.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "GraphQL", "Node.js", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Learning Management System",
      description:
        "An educational platform with course management, progress tracking, interactive learning modules, and student analytics.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Next.js", "Prisma", "PostgreSQL", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
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
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 backdrop-blur-md bg-white/5 border-white/10 hover:border-blue-500/30 h-full flex flex-col">
                      <div className="relative overflow-hidden">
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
                              <Badge className="text-xs bg-blue-500/20 text-blue-300 border-blue-500/30">
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button asChild size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 border-0">
                            <Link href={project.liveUrl}>
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </Link>
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="outline" size="sm" asChild className="border-white/20 text-white hover:bg-white/10">
                            <Link href={project.githubUrl}>
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </Link>
                          </Button>
                        </motion.div>
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
                    <Card className="overflow-hidden shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 backdrop-blur-md bg-white/5 border-white/10 hover:border-blue-500/30 h-full">
                      <div className="relative overflow-hidden">
                        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={500}
                            height={300}
                            className="w-full h-48 object-cover"
                          />
                        </motion.div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg font-bold text-white">{project.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <p className="text-gray-300 text-sm mb-3 leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Badge key={tech} className="text-xs bg-blue-500/20 text-blue-300 border-blue-500/30">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge className="text-xs bg-gray-500/20 text-gray-300 border-gray-500/30">
                              +{project.technologies.length - 3}
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                          <Button asChild size="sm" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 border-0">
                            <Link href={project.liveUrl}>
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Demo
                            </Link>
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="outline" size="sm" asChild className="border-white/20 text-white hover:bg-white/10">
                            <Link href={project.githubUrl}>
                              <Github className="w-4 h-4" />
                            </Link>
                          </Button>
                        </motion.div>
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
