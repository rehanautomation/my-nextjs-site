"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel } from "@/components/ui/alert-dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { FaRobot, FaComments, FaChartLine, FaUserShield, FaRedo, FaPhoneAlt, FaCheckCircle, FaShieldAlt, FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";
import { useRef, useEffect, useState, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";
import OrangeBlobBackground from "@/components/OrangeBlobBackground";
import BlobbedHeader from "@/components/BlobbedHeader";
import SectionBlob from "@/components/SectionBlob";
import { AnimatePresence } from "framer-motion";
import { ServicePopup } from "@/components/ServicePopup";
import { useAnalytics } from "@/hooks/useAnalytics";

const services = [
  {
    title: "Social Media Comment & DM Agent",
    benefit: "+30% bookings",
    desc: "Turn social engagement into booked consultations automatically.",
    icon: <FaComments size={32} className="text-primary" />,
    number: 1,
    detailedInfo: {
      features: [
        "🔸 Automated response to social media comments and DMs",
        "🔸 Intelligent lead qualification and scoring",
        "🔸 Seamless integration with Facebook, Instagram, and LinkedIn",
        "🔸 Real-time notification system for urgent inquiries",
        "🔸 Multi-language support for diverse patient base",
        "🔸 Human-like responses that maintain your brand voice",
        "🔸 Automatic routing to your booking calendar"
      ],
      benefits: [
        "Capture leads 24/7 without manual monitoring",
        "Reduce response time from hours to minutes",
        "Qualify prospects before they reach your team",
        "Increase social media engagement and brand awareness",
        "Track all inquiries and conversions automatically"
      ],
      howItWorks: "Our AI agent monitors your social media accounts continuously, automatically responding to comments and direct messages with personalized, helpful information. It qualifies leads based on your criteria and seamlessly transfers qualified prospects to your booking system. The system turns casual social engagement into booked consultations by replying instantly with smart, human-like responses.",
      caseStudy: "Dr. Sarah's dental practice saw a 45% increase in consultations from social media after implementing our DM agent. The system now handles 80% of their social inquiries automatically, converting casual comments into booked appointments."
    }
  },
  {
    title: "Lead Nurture Automation",
    benefit: "+40% show-up rate",
    desc: "Automated follow-ups to ensure more leads show up for their appointments.",
    icon: <FaRobot size={32} className="text-primary" />,
    number: 2,
    detailedInfo: {
      features: [
        "🔸 Personalized follow-up sequences based on patient type",
        "🔸 Multi-channel communication (SMS, email, phone)",
        "🔸 Smart timing optimization for maximum engagement",
        "🔸 Appointment reminder and confirmation system",
        "🔸 Integration with your existing calendar systems",
        "🔸 Smart reminders, rebooking flows for no-shows",
        "🔸 Win-back sequences to revive old leads"
      ],
      benefits: [
        "Dramatically reduce no-show rates",
        "Free up staff time from manual follow-ups",
        "Improve patient experience and satisfaction",
        "Increase overall clinic efficiency",
        "Never let a lead go cold with automated nurturing"
      ],
      howItWorks: "Our system creates personalized nurture sequences for each lead type. It sends timely reminders, confirms appointments, and follows up with no-shows automatically. The AI learns from your clinic's patterns to optimize timing and messaging. This system sends automated, personalized SMS and email follow-ups to ensure every inquiry is guided toward booking.",
      caseStudy: "A cosmetic clinic reduced their no-show rate from 25% to 8% within 30 days of implementing our nurture automation, while increasing their overall booking conversion rate by 40%."
    }
  },
  {
    title: "Post-Treatment Follow-Ups & Upsells",
    benefit: "+25–35% repeat bookings",
    desc: "Increase patient retention and upsell with timely, automated follow-ups.",
    icon: <FaRedo size={32} className="text-primary" />,
    number: 3,
    detailedInfo: {
      features: [
        "🔸 Automated post-treatment check-ins",
        "🔸 Personalized recovery guidance and tips",
        "🔸 Smart upsell recommendations based on treatment history",
        "🔸 Satisfaction survey and feedback collection",
        "🔸 Re-booking prompts for follow-up appointments",
        "🔸 Share care instructions automatically",
        "🔸 Suggest additional services based on past treatments"
      ],
      benefits: [
        "Increase patient retention and loyalty",
        "Generate additional revenue through smart upsells",
        "Improve patient outcomes and satisfaction",
        "Build stronger patient relationships",
        "Positive reviews routed to Google automatically"
      ],
      howItWorks: "After each treatment, our system automatically sends personalized follow-up messages with recovery tips, satisfaction surveys, and relevant upsell opportunities. It tracks patient responses and schedules follow-up appointments when appropriate. The system automatically checks in with clients after treatments, sharing care instructions and suggesting additional services based on past treatments.",
      caseStudy: "A dermatology practice increased their average patient lifetime value by 35% through automated post-treatment follow-ups and strategic upsells, while improving their Google review ratings by 2.3 stars."
    }
  },
  {
    title: "Database Reactivation Campaigns",
    benefit: "10–20% recovered leads",
    desc: "Re-engage old leads and bring them back to your clinic.",
    icon: <AiOutlineThunderbolt size={32} className="text-primary" />,
    number: 4,
    detailedInfo: {
      features: [
        "🔸 Intelligent segmentation of inactive patients",
        "🔸 Multi-channel reactivation campaigns",
        "🔸 Personalized re-engagement messaging",
        "🔸 Special offer and incentive management",
        "🔸 Success tracking and ROI measurement",
        "🔸 Time-limited offers and personalized messages",
        "🔸 Every reply handled by automation"
      ],
      benefits: [
        "Recover lost revenue from inactive patients",
        "Re-establish relationships with past patients",
        "Generate new business from existing database",
        "Improve overall clinic profitability",
        "Your old leads are worth gold - reactivate them"
      ],
      howItWorks: "Our system analyzes your patient database to identify inactive patients and creates personalized reactivation campaigns. It sends targeted messages with special offers and incentives to bring them back to your clinic. This campaign reactivates them with time-limited offers and personalized messages through SMS and email, with every reply handled by automation and linked to your calendar.",
      caseStudy: "A dental practice recovered 15% of their inactive patients within 60 days, generating $45,000 in additional revenue from what they thought were 'dead' leads."
    }
  },
  {
    title: "Website Booking Chatbot",
    benefit: "24/7 capture + no-show reduction",
    desc: "Never miss a lead with our always-on booking chatbot.",
    icon: <FaRobot size={32} className="text-primary" />,
    number: 5,
    detailedInfo: {
      features: [
        "🔸 24/7 intelligent chatbot for instant responses",
        "🔸 Seamless appointment booking integration",
        "🔸 FAQ handling and information provision",
        "🔸 Lead qualification and routing",
        "🔸 Multi-language support and accessibility",
        "🔸 Fully branded and mobile-friendly",
        "🔸 Reduces no-shows with automated reminders"
      ],
      benefits: [
        "Capture leads even when your office is closed",
        "Reduce phone call volume and staff workload",
        "Provide instant answers to common questions",
        "Improve website conversion rates",
        "Convert every visitor into a consultation"
      ],
      howItWorks: "Our AI chatbot engages visitors on your website 24/7, answering questions, qualifying leads, and booking appointments automatically. It integrates seamlessly with your existing booking system and provides a smooth user experience. This always-on chatbot greets website visitors, answers questions, and books appointments straight into your calendar without hiring extra staff.",
      caseStudy: "A medical clinic increased their online bookings by 60% and reduced phone call volume by 40% after implementing our website chatbot, while reducing no-shows by 35% through automated reminders."
    }
  },
  {
    title: "24/7 AI Calling Agent",
    benefit: "+20–40% more bookings from calls",
    desc: "Convert more phone inquiries into booked appointments automatically.",
    icon: <FaPhoneAlt size={32} className="text-primary" />,
    number: 6,
    detailedInfo: {
      features: [
        "🔸 Natural language processing for human-like conversations",
        "🔸 Automatic appointment scheduling and confirmation",
        "🔸 Call recording and analytics for optimization",
        "🔸 Integration with your phone system",
        "🔸 Fallback to human agents when needed",
        "🔸 Handles FAQs and gathers caller details",
        "🔸 Never needs a break - runs round the clock"
      ],
      benefits: [
        "Never miss a call or opportunity",
        "Reduce call handling time and costs",
        "Improve call conversion rates",
        "Provide consistent service quality",
        "Professional phone presence 24/7"
      ],
      howItWorks: "Our AI calling agent answers your phone 24/7, engaging callers in natural conversations, qualifying leads, and booking appointments. It can handle complex inquiries and seamlessly transfer to human agents when necessary. This voice AI answers 100% of incoming phone inquiries, 24/7, and books consultations directly, giving you a professional phone presence that runs round the clock.",
      caseStudy: "A dental practice increased their phone booking conversion rate from 15% to 35% while reducing call handling costs by 70% and never missing a single call opportunity."
    }
  },
];

const testimonials = [
  {
    name: "Dr. Jane Smith",
    role: "Dermatologist",
            image: "/avatar1.webp",
    text: "We've seen a 40% increase in bookings and our staff saves hours every week!",
  },
  {
    name: "Dr. Alex Lee",
    role: "Cosmetic Dentist",
            image: "/avatar2.webp",
    text: "AztecAcquisition is a game changer for our clinic's growth.",
  },
  {
    name: "Dr. Maria Gomez",
    role: "Aesthetic Physician",
            image: "/avatar3.webp",
    text: "Our follow-up rates and patient satisfaction have never been higher!",
  },
];

const BOOKING_URL = "https://api.leadconnectorhq.com/widget/booking/fIy7KRDQLEBTOK1FnXAF";

// Button micro-animations
const MotionButton = motion(Button);
// Card micro-animations
const MotionCard = motion(Card);
const MotionBadge = motion(Badge);
const MotionAvatar = motion(Avatar);

export default function Home() {
  // Analytics hook
  const analytics = useAnalytics();
  
  // Embla carousel ref and API for testimonials
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const autoPlayInterval = useRef<NodeJS.Timeout | null>(null);
  const carouselSectionRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const sectionIds = useMemo(() => [
    { id: "home", label: "Home" },
    { id: "features", label: "Features" },
    { id: "testimonials", label: "Testimonials" },
    { id: "book-demo", label: "Contact" },
  ], []);

  // Typewriter effect for hero heading
  const fullHeading = "Automate Your Clinic&apos;s Growth: More Consultations, More Patients, More Time Saved.";
  const [typedHeading, setTypedHeading] = useState("");
  useEffect(() => {
    setTypedHeading("");
    let i = 0;
    const interval = setInterval(() => {
      setTypedHeading((prev) => prev + fullHeading[i]);
      i++;
      if (i >= fullHeading.length) clearInterval(interval);
    }, 21);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Track page view on component mount
    analytics.trackPageView('home');
  }, [analytics]);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sectionIds.map(({ id }) => {
        const el = id === "home" ? document.body : document.getElementById(id);
        if (!el) return { id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id, top: Math.abs(rect.top) };
      });
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActiveSection(closest.id);
      
      // Track scroll to sections
      if (closest.id !== activeSection) {
        analytics.trackScroll(closest.id);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [analytics, activeSection, sectionIds]);

  // Auto-play effect
  useEffect(() => {
    if (!emblaApi) return;
    function play() {
      if (!isPaused) {
        autoPlayInterval.current = setInterval(() => {
          if (emblaApi) emblaApi.scrollNext();
        }, 1000);
      }
    }
    function stop() {
      if (autoPlayInterval.current) clearInterval(autoPlayInterval.current);
    }
    stop();
    if (!isPaused) play();
    return () => stop();
  }, [emblaApi, isPaused]);

  // Pause on card click, resume on scroll past
  useEffect(() => {
    const node = carouselSectionRef.current;
    if (!node) return;
    function handleCardClick() {
      setIsPaused(true);
    }
    // Resume when carousel is out of view
    function handleScroll() {
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const inView = rect.bottom > 0 && rect.top < window.innerHeight;
      if (!inView) setIsPaused(false);
    }
    // Attach click to all cards
    const cards = node.querySelectorAll('[data-slot="card"]');
    cards.forEach(card => {
      card.addEventListener('click', handleCardClick);
    });
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      cards.forEach(card => {
        card.removeEventListener('click', handleCardClick);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, [carouselSectionRef, isPaused]);

  // Navbar cartoon animation state
  const [isCartoon, setIsCartoon] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      if (isCartoon && window.scrollY > 10) {
        setTimeout(() => {
          setIsCartoon(false);
        }, 800); // animation duration
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isCartoon]);

  const navVariants = {
    cartoon: {
      y: -40,
      scale: 1.2,
      width: "100vw",
      borderRadius: "2rem",
      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      position: "fixed" as const,
      left: 0,
      top: 0,
      zIndex: 50,
    },
    floating: {
      y: 0,
      scale: 1,
      width: "90%",
      borderRadius: "9999px",
      boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.17)",
      position: "sticky" as const,
      left: "auto",
      top: 16,
      zIndex: 30,
    },
  };

  const handleMobileMenuToggle = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    analytics.trackMobileMenuToggle(newState);
  };

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    analytics.trackNavigationClick(sectionId);
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleServicePopup = (service: typeof services[0]) => {
    setSelectedService(service);
    setIsPopupOpen(true);
    analytics.trackServiceInterest(service.title);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedService(null);
  };

  return (
    <main className="min-h-screen bg-background text-text font-sans flex flex-col relative" role="main">
      {/* Mobile-Optimized Navigation Menu */}
      <motion.nav
        variants={navVariants}
        initial="cartoon"
        animate={isCartoon ? "cartoon" : "floating"}
        transition={{ type: "spring", bounce: 0.6, duration: 0.8 }}
        className="mx-auto flex items-center justify-between px-4 sm:px-6 py-3 bg-white/10 backdrop-blur-3xl border border-white/20 ring-1 ring-white/20"
        style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.10) 60%, rgba(255,255,255,0.18) 100%)' }}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0" aria-label="AztecAcquisition Home">
          <Image 
            src="/logo.svg" 
            alt="AztecAcquisition Logo" 
            width={48} 
            height={48} 
            className="rounded-full sm:w-16 sm:h-16"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4 lg:gap-8">
              {sectionIds.map(({ id, label }) => (
                <NavigationMenuItem key={id}>
                  <NavigationMenuLink
                    href={id === "home" ? "#" : `#${id}`}
                    className={cn(
                      "font-bold text-base lg:text-xl px-3 lg:px-5 py-2 rounded-full transition-colors",
                      activeSection === id
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    {label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex">
          <Button 
            asChild 
            size="lg" 
            className="px-4 lg:px-6 py-2 text-base lg:text-lg"
            onClick={() => analytics.trackCTAClick('book_appointment', 'desktop_nav')}
          >
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Book Appointment <FiArrowUpRight className="inline" size={18} />
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={handleMobileMenuToggle}
          className="md:hidden p-3 rounded-lg hover:bg-white/10 transition-colors touch-manipulation"
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-72 sm:w-80 bg-white shadow-xl p-4 sm:p-6"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="mobile-menu-title"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                  <Link href="/">
                    <Image src="/logo.svg" alt="AztecAcquisition Logo" width={48} height={48} className="rounded-full" />
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100"
                    aria-label="Close mobile menu"
                  >
                    <FaTimes size={24} />
                  </button>
                </div>
                
                <nav className="flex-1">
                  <ul className="space-y-4">
                    {sectionIds.map(({ id, label }) => (
                      <li key={id}>
                        <button
                          onClick={() => handleNavClick(id)}
                          className={cn(
                            "w-full text-left px-4 py-4 rounded-lg font-semibold text-lg transition-colors touch-manipulation",
                            activeSection === id
                              ? "bg-primary text-white"
                              : "hover:bg-gray-100"
                          )}
                        >
                          {label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="mt-8">
                  <Button 
                    asChild 
                    size="lg" 
                    className="w-full"
                    onClick={() => analytics.trackCTAClick('book_appointment', 'mobile_nav')}
                  >
                    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      Book Appointment <FiArrowUpRight className="inline" size={18} />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Breadcrumb Navigation */}
      <nav className="px-4 sm:px-6 py-2 bg-gray-50" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
          </li>
          <li className="flex items-center">
            <span className="mx-2">/</span>
            <span className="text-gray-900">Patient Conversion System</span>
          </li>
        </ol>
      </nav>

      {/* Mobile-Optimized Hero Section */}
      <section
        className="relative min-h-[85vh] sm:min-h-[80vh] md:min-h-[70vh] py-8 sm:py-4 px-4 sm:px-6 overflow-hidden flex items-stretch"
        id="home"
        aria-labelledby="hero-heading"
      >
        {/* Top-left hero blob */}
        <SectionBlob src="/blob.svg" className="top-[-140px] left-[-180px] w-[340px] h-[180px]" />
        {/* Bottom-right hero blob */}
        <SectionBlob src="/blob (1).svg" className="bottom-[-60px] right-[-60px] w-[600px] h-[420px]" />
        {/* Grid background (SVG pattern) */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <svg width="100%" height="100%" className="w-full h-full" style={{ position: 'absolute', inset: 0 }}>
            <defs>
              <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e0e7ef" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
            <rect width="100%" height="100%" fill="url(#hero-grid)" opacity="0.2" />
          </svg>
        </div>
        
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center">
          {/* Text content - now full width on mobile */}
          <div className="flex flex-col items-start justify-center px-2 sm:px-4 lg:pl-12 lg:pr-4 py-2 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7 }}
            >
              <BlobbedHeader 
                id="hero-heading"
                className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 sm:mb-6 text-primary leading-tight text-left"
                role="heading"
                aria-level={1}
              >
                {typedHeading}
                <span className="border-r-2 border-primary animate-pulse ml-1 align-middle" />
              </BlobbedHeader>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="relative z-10 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 text-text text-left"
            >
              Get 20–50 extra consultations every month with AztecAcquisition, fully automated 24/7.
            </motion.p>
            <MotionButton
              asChild
              size="lg"
              className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-transform duration-200 w-full sm:w-auto"
              whileHover={{ scale: 1.07, boxShadow: "0 4px 24px 0 rgba(31,38,135,0.12)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => analytics.trackCTAClick('book_demo', 'hero')}
            >
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                <FaCheckCircle className="inline mr-2 mb-1" size={20} /> Book Your Free Demo
              </a>
            </MotionButton>
          </div>
          
          {/* Hero Image - now responsive */}
          <div className="flex items-center justify-center h-full w-full order-1 lg:order-2 mb-6 lg:mb-0">
            <Image
              src="/hero-medical.png"
              alt="Medical professionals using AztecAcquisition's automated patient conversion system"
              width={1550}
              height={1550}
              className="object-contain drop-shadow-2xl w-full max-w-md sm:max-w-lg lg:max-w-none"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </section>

      {/* Mobile-Optimized Lead Magnet Section */}
      <section 
        className="max-w-2xl mx-auto py-12 sm:py-16 px-4 text-center"
        aria-labelledby="lead-magnet-heading"
      >
        <Card className="p-4 sm:p-6">
          <CardHeader className="pb-4">
            <div className="flex flex-col items-center mb-2">
              <FaRobot size={32} className="text-primary mb-2 sm:text-4xl" />
              <CardTitle 
                id="lead-magnet-heading"
                className="text-lg sm:text-xl md:text-2xl"
              >
                Get Your Free Appointment-Booking Chatbot Today from AztecAcquisition
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert className="mb-4">
              <AlertTitle>Limited time offer!</AlertTitle>
              <AlertDescription>
                Book now and get your chatbot setup <b>100% free</b>.
              </AlertDescription>
            </Alert>
            <ul className="text-base sm:text-lg mb-6 sm:mb-8 space-y-2 text-left max-w-md mx-auto">
              <li className="flex items-center gap-2"><FaCheckCircle className="text-teal-500 flex-shrink-0" /> Automates bookings & reminders</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-teal-500 flex-shrink-0" /> Installs in under 48 hours</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-teal-500 flex-shrink-0" /> 100% free to set up — book a call</li>
            </ul>
            <Button 
              asChild 
              size="lg" 
              className="w-full"
              onClick={() => analytics.trackCTAClick('claim_chatbot', 'lead_magnet')}
            >
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                <FaRobot className="inline mr-2 mb-1" size={20} /> Claim Your Free Chatbot Setup
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Mobile-Optimized Core Services Section */}
      <section 
        id="features" 
        className="relative bg-white/80 py-12 sm:py-20 px-4 sm:px-6 overflow-hidden"
        aria-labelledby="services-heading"
      >
        {/* Left features blob */}
        <SectionBlob src="/blob (2).svg" className="top-[5%] left-[-320px] w-[820px] h-[620px]" />
        {/* Right features blob */}
        <SectionBlob src="/blob (3).svg" className="bottom-[-80px] right-[-320px] w-[820px] h-[620px]" />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.h2
            id="services-heading"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7 }}
            className="font-bold text-xl sm:text-2xl md:text-3xl mb-4 text-primary text-center"
            role="heading"
            aria-level={2}
          >
            Turn Clicks into Consultations. Convert Consultations into Paying Patients.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-base sm:text-lg text-center mb-8 sm:mb-12 max-w-2xl mx-auto"
          >
            We deliver booked consultations and loyal returning patients with AztecAcquisition&apos;s fully automated system.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8" role="list" aria-label="Services">
            {services.map((service) => (
              <MotionCard
                key={service.title}
                className="bg-background rounded-2xl shadow-lg p-0 flex flex-col items-center text-center border-t-4 border-primary/10 hover:border-teal-500 transition-all"
                whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(31,38,135,0.12)" }}
                whileTap={{ scale: 0.97, boxShadow: "0 2px 16px 0 rgba(31,38,135,0.18)" }}
                role="listitem"
                aria-labelledby={`service-${service.number}-title`}
              >
                <CardHeader className="flex flex-col items-center p-4 sm:p-6">
                  <motion.div
                    className="flex items-center justify-center w-12 h-12 mb-4"
                    whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 
                    id={`service-${service.number}-title`}
                    className="leading-none font-semibold text-base sm:text-lg md:text-xl mt-2 mb-1"
                    role="heading"
                    aria-level={3}
                  >
                    {service.title}
                  </h3>
                  <MotionBadge
                    className="mt-2"
                    variant="secondary"
                    whileHover={{ scale: 1.12, boxShadow: "0 0 0 8px rgba(255,122,0,0.12)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  >
                    {service.benefit}
                  </MotionBadge>
                </CardHeader>
                <CardContent className="px-4 sm:px-6 pb-4">
                  <CardDescription className="text-sm sm:text-base">{service.desc}</CardDescription>
                </CardContent>
                <CardFooter className="px-4 sm:px-6 pb-4">
                  <Button
                    variant="outline"
                    className="w-full text-sm sm:text-base hover:bg-primary hover:text-white transition-colors"
                    onClick={() => handleServicePopup(service)}
                  >
                    Learn more
                  </Button>
                </CardFooter>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile-Optimized Testimonials/Team Carousel */}
      <section 
        id="testimonials" 
        className="relative py-12 sm:py-20 px-4 sm:px-6 bg-background overflow-hidden" 
        ref={carouselSectionRef}
        aria-labelledby="testimonials-heading"
      >
        {/* Top-left testimonials blob */}
        <SectionBlob src="/blob (4).svg" className="top-[-120px] left-[-320px] w-[820px] h-[620px]" />
        {/* Bottom-right testimonials blob */}
        <SectionBlob src="/blob (5).svg" className="bottom-[-120px] right-[-320px] w-[820px] h-[620px]" />
        <div className="max-w-3xl mx-auto">
          <motion.h2
            id="testimonials-heading"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7 }}
            className="font-bold text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 text-primary text-center"
            role="heading"
            aria-level={2}
          >
            What Our Clients Say
          </motion.h2>
          <Carousel className="relative" opts={{ loop: true }}>
            <CarouselContent ref={emblaRef}>
              {testimonials.map((testimonial, idx) => (
                <CarouselItem 
                  key={idx} 
                  className="flex flex-col items-center justify-center px-4 sm:px-8"
                  onFocus={() => analytics.trackTestimonialView(idx)}
                >
                  <MotionCard
                    className="w-full max-w-lg mx-auto"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    data-slot="card"
                    whileHover="hover"
                    variants={{
                      hover: { },
                      initial: { }
                    }}
                    whileTap={{ scale: 0.97, boxShadow: "0 2px 16px 0 rgba(31,38,135,0.18)" }}
                  >
                    <CardHeader className="flex flex-col items-center p-4 sm:p-6">
                      <MotionAvatar
                        className="mb-4"
                        whileHover={{ scale: 1.12, boxShadow: "0 0 0 8px rgba(255,122,0,0.10)" }}
                        transition={{ type: "spring", stiffness: 300, damping: 18 }}
                      >
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </MotionAvatar>
                      <h3 className="leading-none font-semibold text-base sm:text-lg md:text-xl mt-2 mb-1">{testimonial.name}</h3>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </CardHeader>
                    <CardContent className="px-4 sm:px-6 pb-4">
                      <p className="text-base sm:text-lg text-center">&ldquo;{testimonial.text}&rdquo;</p>
                    </CardContent>
                  </MotionCard>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </section>

      {/* Mobile-Optimized Guarantee Section */}
      <section 
        className="relative w-full py-12 sm:py-16 px-4 sm:px-6 bg-primary/10 overflow-hidden"
        aria-labelledby="guarantee-heading"
      >
        {/* Left guarantee blob */}
        <SectionBlob src="/blob (2).svg" className="top-[40%] left-[-320px] w-[820px] h-[620px]" />
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <motion.h2
            id="guarantee-heading"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7 }}
            className="font-bold text-xl sm:text-2xl md:text-3xl mb-4 text-primary"
            role="heading"
            aria-level={2}
          >
            Our Guarantee
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 text-text"
          >
            We guarantee at least 20–50 new consultations per month—or we work for free until you get them.
          </motion.p>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" className="mt-4">Read Guarantee Terms</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="max-w-md mx-auto">
              <AlertDialogHeader>
                <AlertDialogTitle>Guarantee Terms</AlertDialogTitle>
                <AlertDialogDescription>
                  If you do not receive at least 20–50 new consultations per month, we will work for free until you do. Contact us for full details.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Close</AlertDialogCancel>
                <AlertDialogAction>Contact Us</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </section>

      {/* Mobile-Optimized Final CTA Section */}
      <section 
        id="book-demo" 
        className="relative py-12 sm:py-20 px-4 sm:px-6 bg-white/90 overflow-hidden"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            id="cta-heading"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7 }}
            className="font-bold text-xl sm:text-2xl md:text-3xl mb-4 text-primary"
            role="heading"
            aria-level={2}
          >
            Ready to Get More Consultations—Automatically?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-base sm:text-lg mb-6 sm:mb-8 text-text"
          >
            Book a free call to see exactly how our system can work for your clinic.
          </motion.p>
          <MotionButton
            asChild
            size="lg"
            className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
            whileHover={{ scale: 1.07, boxShadow: "0 4px 24px 0 rgba(31,38,135,0.12)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => analytics.trackCTAClick('book_demo', 'final_cta')}
          >
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              <FaCheckCircle className="inline mr-2 mb-1" size={20} /> Book Your Free Demo
            </a>
          </MotionButton>
        </div>
      </section>

      {/* Mobile-Optimized Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 text-center text-sm text-text bg-background border-t border-gray-200" role="contentinfo">
        <p>&copy; {new Date().getFullYear()} AztecAcquisition. All rights reserved.</p>
      </footer>

      {/* Service Popup */}
      {selectedService && (
        <ServicePopup
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
          service={selectedService}
        />
      )}
    </main>
  );
}
