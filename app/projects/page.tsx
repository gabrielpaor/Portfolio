"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Star } from "lucide-react"
import PageTransition from "@/components/page-transition"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description:
        "A comprehensive admin dashboard for managing e-commerce operations with real-time analytics, inventory management, and order tracking. Built with modern React patterns and beautiful animations.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      stars: 124,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with drag-and-drop functionality, team collaboration features, real-time updates, and progress tracking.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Redux", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      stars: 89,
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
      stars: 67,
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
      stars: 45,
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
      stars: 78,
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
      stars: 156,
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
                My Projects
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600 max-w-2xl mx-auto"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                A collection of projects that showcase my skills and passion for creating exceptional web experiences
              </motion.p>
            </motion.div>

            {/* Featured Projects */}
            <motion.div variants={itemVariants} className="mb-16">
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-8"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Featured Projects
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
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
                          <Badge className="bg-blue-600 text-white shadow-lg">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                          <Badge variant="secondary" className="bg-white/90 text-gray-700">
                            ⭐ {project.stars}
                          </Badge>
                        </motion.div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={tech}
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ delay: 0.8 + techIndex * 0.05 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-800">
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
                            <Link href={project.liveUrl}>
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </Link>
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="outline" size="sm" asChild>
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
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-8"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Other Projects
              </motion.h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm h-full">
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
                        <motion.div
                          className="absolute top-3 right-3"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1 + index * 0.05 }}
                        >
                          <Badge variant="secondary" className="bg-white/90 text-gray-700 text-xs">
                            ⭐ {project.stars}
                          </Badge>
                        </motion.div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg font-bold">{project.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <p className="text-gray-600 text-sm mb-3 leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs bg-blue-100 text-blue-800">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{project.technologies.length - 3}
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                          <Button asChild size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                            <Link href={project.liveUrl}>
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Demo
                            </Link>
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="outline" size="sm" asChild>
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
