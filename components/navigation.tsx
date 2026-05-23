"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Code2, ChevronRight } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  const navItems = [
    { href: "/home", label: "Home" },
    { href: "/about-me", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/work", label: "Work" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrolledDistance = Math.abs(currentScrollY - lastScrollY.current);

      if (scrolledDistance < 6) {
        return;
      }

      const isScrollingUp = currentScrollY < lastScrollY.current;
      const isNearTop = currentScrollY < 16;
      setIsNavVisible(isScrollingUp || isNearTop || isOpen);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setIsNavVisible(true);
    }
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isNavVisible ? 0 : -96 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/home"
              className="flex items-center gap-2 font-bold text-xl text-foreground"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <Code2 className="w-6 h-6 text-blue-600" />
              </motion.div>
              Gabriel Paor
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Link
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.href) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            {/* <ThemeToggle /> */}
          </div>

          {/* Mobile Navigation Controls */}
          <div className="md:hidden flex items-center gap-2">
            {/* <ThemeToggle /> */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                className="h-11 w-11 border border-border/60 bg-background/30 text-foreground shadow-sm backdrop-blur-sm transition-all hover:bg-background/60 hover:border-primary/60 focus-visible:ring-2 focus-visible:ring-primary/50"
              >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden rounded-2xl border border-border/70 bg-background/65 backdrop-blur-md shadow-xl"
            >
              <div className="p-3 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`group flex items-center justify-between rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
                        isActive(item.href)
                          ? "border-primary/40 bg-primary/10 text-primary"
                          : "border-transparent text-muted-foreground hover:border-border/80 hover:bg-accent/70 hover:text-foreground"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{item.label}</span>
                      <ChevronRight
                        className={`h-4 w-4 transition-transform group-hover:translate-x-0.5 ${
                          isActive(item.href) ? "opacity-100" : "opacity-50"
                        }`}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
