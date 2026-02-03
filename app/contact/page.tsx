"use client";

import type React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  Facebook,
} from "lucide-react";
import PageTransition from "@/components/page-transition";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      if (result.text === "OK") {
        alert("Thank you for your message! I'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      alert(
        "Sorry, there was an error sending your message. Please try again later."
      );
      console.error("Email sending error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
      },
    },
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <motion.div
          className="absolute top-40 right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"
          animate={{ y: [-20, 20, -20], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ y: [30, -30, 30], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div>
            {/* Header */}
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Let's Connect</span>
              </motion.div>
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-white mb-4"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Get In{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                  Touch
                </span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 max-w-2xl mx-auto"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Have a project in mind or just want to chat? I'd love to hear
                from you. Let's create something amazing together!
              </motion.p>
            </div>

            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-md bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
                      <MessageCircle className="w-6 h-6 text-blue-400" />
                      Send Me a Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form
                      ref={form}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="grid md:grid-cols-2 gap-4">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-200 mb-2"
                          >
                            Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            className="w-full transition-all duration-300 focus:scale-105 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                          />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-200 mb-2"
                          >
                            Email *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                            className="w-full transition-all duration-300 focus:scale-105 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                          />
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-gray-200 mb-2"
                        >
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="What's this about?"
                          className="w-full transition-all duration-300 focus:scale-105 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-200 mb-2"
                        >
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell me about your project or just say hello!"
                          rows={6}
                          className="w-full transition-all duration-300 focus:scale-105 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-3 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                        >
                          {isSubmitting ? (
                            <>
                              <motion.div
                                className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                                animate={{ rotate: 360 }}
                                transition={{
                                  duration: 1,
                                  repeat: Number.POSITIVE_INFINITY,
                                  ease: "linear",
                                }}
                              />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Details */}
                <div>
                  <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-md bg-white/5 border-white/10">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-white">
                        Contact Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {[
                        {
                          icon: Mail,
                          title: "Email",
                          info: "gabrielpaor07@gmail.com",
                          color: "text-blue-400",
                          bg: "bg-blue-500/20",
                        },
                        {
                          icon: Phone,
                          title: "Phone",
                          info: "+639363909904",
                          color: "text-green-400",
                          bg: "bg-green-500/20",
                        },
                        {
                          icon: MapPin,
                          title: "Location",
                          info: "Quezon City, Philippines",
                          color: "text-purple-400",
                          bg: "bg-purple-500/20",
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center gap-4"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          whileHover={{ x: 5, scale: 1.02 }}
                        >
                          <motion.div
                            className={`p-3 ${item.bg} rounded-full ${item.color}`}
                            whileHover={{ rotate: 10, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <item.icon className="w-6 h-6" />
                          </motion.div>
                          <div>
                            <h3 className="font-semibold text-white">
                              {item.title}
                            </h3>
                            <p className="text-gray-300">{item.info}</p>
                          </div>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                {/* Social Links */}
                <div>
                  <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-md bg-white/5 border-white/10">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-white">
                        Connect With Me
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-4 mb-4">
                        {[
                          {
                            icon: Github,
                            href: "https://github.com/gabrielpaor",
                            label: "GitHub",
                            color: "bg-gray-700 hover:bg-gray-600",
                          },
                          {
                            icon: Linkedin,
                            href: "https://www.linkedin.com/in/gabriel-john-paor-ba0bb4235/",
                            label: "LinkedIn",
                            color: "bg-blue-600 hover:bg-blue-500",
                          },
                          {
                            icon: Facebook,
                            href: "https://www.facebook.com/gabriel.paor/",
                            label: "Facebook",
                            color: "bg-blue-700 hover:bg-blue-600",
                          },
                        ].map((social, index) => (
                          <motion.a
                            key={social.label}
                            href={social.href}
                            className={`p-3 ${social.color} text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl`}
                            aria-label={social.label}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                              delay: 0.8 + index * 0.1,
                              type: "spring",
                              stiffness: 300,
                            }}
                            whileHover={{
                              scale: 1.1,
                              rotate: 5,
                              y: -2,
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <social.icon className="w-6 h-6" />
                          </motion.a>
                        ))}
                      </div>
                      <motion.p
                        className="text-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1 }}
                      >
                        Follow me on social media for updates on my latest
                        projects and tech insights!
                      </motion.p>
                    </CardContent>
                  </Card>
                </div>

                {/* Availability */}
                <div>
                  <Card className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border-green-500/30 shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-md">
                    <CardContent className="p-6">
                      <motion.div
                        className="flex items-center gap-3 mb-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 }}
                      >
                        <motion.div
                          className="w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [1, 0.7, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                        />
                        <h3 className="font-semibold text-white">
                          Currently Available
                        </h3>
                      </motion.div>
                      <motion.p
                        className="text-gray-300 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4 }}
                      >
                        I'm currently available for freelance projects and
                        part-time opportunities. Let's discuss how we can work
                        together to bring your ideas to life!
                      </motion.p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
