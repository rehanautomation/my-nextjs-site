"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel } from "@/components/ui/alert-dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { FaRobot, FaComments, FaChartLine, FaUserShield, FaRedo, FaPhoneAlt, FaCheckCircle, FaShieldAlt } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";
import { useRef, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";
import OrangeBlobBackground from "@/components/OrangeBlobBackground";
import BlobbedHeader from "@/components/BlobbedHeader";
import SectionBlob from "@/components/SectionBlob";
import { AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Social Media Comment & DM Agent",
    benefit: "+30% bookings",
    desc: "Turn social engagement into booked consultations automatically.",
    icon: <FaComments size={32} className="text-primary" />,
    number: 1,
  },
  {
    title: "Lead Nurture Automation",
    benefit: "+40% show-up rate",
    desc: "Automated follow-ups to ensure more leads show up for their appointments.",
    icon: <FaRobot size={32} className="text-primary" />,
    number: 2,
  },
  {
    title: "Post-Treatment Follow-Ups & Upsells",
    benefit: "+25–35% repeat bookings",
    desc: "Increase patient retention and upsell with timely, automated follow-ups.",
    icon: <FaRedo size={32} className="text-primary" />,
    number: 3,
  },
  {
    title: "Database Reactivation Campaigns",
    benefit: "10–20% recovered leads",
    desc: "Re-engage old leads and bring them back to your clinic.",
    icon: <AiOutlineThunderbolt size={32} className="text-primary" />,
    number: 4,
  },
  {
    title: "Website Booking Chatbot",
    benefit: "24/7 capture + no-show reduction",
    desc: "Never miss a lead with our always-on booking chatbot.",
    icon: <FaRobot size={32} className="text-primary" />,
    number: 5,
  },
  {
    title: "24/7 AI Calling Agent",
    benefit: "+20–40% more bookings from calls",
    desc: "Convert more phone inquiries into booked appointments automatically.",
    icon: <FaPhoneAlt size={32} className="text-primary" />,
    number: 6,
  },
];

const testimonials = [
  {
    name: "Dr. Jane Smith",
    role: "Dermatologist",
    image: "/avatar1.png",
    text: "We've seen a 40% increase in bookings and our staff saves hours every week!",
  },
  {
    name: "Dr. Alex Lee",
    role: "Cosmetic Dentist",
    image: "/avatar2.png",
    text: "AztecAcquisition is a game changer for our clinic's growth.",
  },
  {
    name: "Dr. Maria Gomez",
    role: "Aesthetic Physician",
    image: "/avatar3.png",
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
  // Embla carousel ref and API for testimonials
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const autoPlayInterval = useRef<NodeJS.Timeout | null>(null);
  const carouselSectionRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const sectionIds = [
    { id: "home", label: "Home" },
    { id: "features", label: "Features" },
    { id: "testimonials", label: "Testimonials" },
    { id: "book-demo", label: "Contact" },
  ];

  // Typewriter effect for hero heading
  const fullHeading = "Automate Your Clinic’s Growth: More Consultations, More Patients, More Time Saved.";
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
    const handleScroll = () => {
      const offsets = sectionIds.map(({ id }) => {
        const el = id === "home" ? document.body : document.getElementById(id);
        if (!el) return { id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id, top: Math.abs(rect.top) };
      });
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActiveSection(closest.id);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      cards.forEach(card => {
        card.removeEventListener('click', handleCardClick);
      });
      window.removeEventListener('scroll', handleScroll);
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

  return (
    <div className="min-h-screen bg-background text-text font-sans flex flex-col relative">
      {/* Navigation Menu */}
      <motion.nav
        variants={navVariants}
        initial="cartoon"
        animate={isCartoon ? "cartoon" : "floating"}
        transition={{ type: "spring", bounce: 0.6, duration: 0.8 }}
        className="mx-auto flex items-center px-6 py-3 bg-white/10 backdrop-blur-3xl border border-white/20 ring-1 ring-white/20"
        style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.10) 60%, rgba(255,255,255,0.18) 100%)' }}
      >
        {/* Left: Logo */}
        <a href="/" className="flex items-center gap-2 flex-shrink-0">
          <Image src="/logo.svg" alt="Logo" width={64} height={64} className="rounded-full" />
        </a>
        {/* Center: Nav Links */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4 md:gap-8">
              {sectionIds.map(({ id, label }) => (
                <NavigationMenuItem key={id}>
                  <NavigationMenuLink
                    href={id === "home" ? "#" : `#${id}`}
                    className={cn(
                      "font-bold text-lg md:text-xl px-5 py-2 rounded-full transition-colors",
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
        {/* Right: Book Appointment Button */}
        <div className="flex-1 flex justify-end">
          <Button asChild size="lg" className="px-6 py-2 text-lg">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Book Appointment <FiArrowUpRight className="inline" size={22} />
            </a>
          </Button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] py-4 px-4 overflow-hidden flex items-stretch"
        id="home"
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
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Text content */}
          <div className="flex flex-col items-start justify-center md:pl-12 pl-2 md:pr-4 py-2">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7 }}
            >
              <BlobbedHeader className="font-bold text-3xl md:text-5xl mb-6 text-primary leading-tight text-left" >
                {typedHeading}
                <span className="border-r-2 border-primary animate-pulse ml-1 align-middle" />
              </BlobbedHeader>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="relative z-10 text-lg md:text-2xl mb-8 text-text text-left"
            >
              Get 20–50 extra consultations every month with AztecAcquisition, fully automated 24/7.
            </motion.p>
            <MotionButton
              asChild
              size="lg"
              className="px-8 py-4 text-lg transition-transform duration-200"
              whileHover={{ scale: 1.07, boxShadow: "0 4px 24px 0 rgba(31,38,135,0.12)" }}
              whileTap={{ scale: 0.97 }}
            >
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                <FaCheckCircle className="inline mr-2 mb-1" size={22} /> Book Your Free Demo
              </a>
            </MotionButton>
          </div>
          {/* Right: Placeholder for image */}
          <div className="hidden md:flex items-center justify-center h-full w-full pr-8">
            {/* Replace the src below with your hero image */}
            <Image
              src="/hero-medical.png"
              alt="Doctor and patient illustration for Patient Conversion System hero section"
              width={1550}
              height={1550}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="max-w-2xl mx-auto py-16 px-4 text-center">
        <Card>
          <CardHeader>
            <div className="flex flex-col items-center mb-2">
              <FaRobot size={40} className="text-primary mb-2" />
              <CardTitle>Get Your Free Appointment-Booking Chatbot Today from AztecAcquisition</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <Alert className="mb-4">
              <AlertTitle>Limited time offer!</AlertTitle>
              <AlertDescription>
                Book now and get your chatbot setup <b>100% free</b>.
              </AlertDescription>
            </Alert>
            <ul className="text-lg mb-8 space-y-2 text-left max-w-md mx-auto">
              <li className="flex items-center gap-2"><FaCheckCircle className="text-teal-500" /> Automates bookings & reminders</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-teal-500" /> Installs in under 48 hours</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-teal-500" /> 100% free to set up — book a call</li>
            </ul>
            <Button asChild size="lg" className="w-full">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                <FaRobot className="inline mr-2 mb-1" size={22} /> Claim Your Free Chatbot Setup
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Core Services Section */}
      <section id="features" className="relative bg-white/80 py-20 px-4 overflow-hidden">
        {/* Left features blob */}
        <SectionBlob src="/blob (2).svg" className="top-[5%] left-[-320px] w-[820px] h-[620px]" />
        {/* Right features blob */}
        <SectionBlob src="/blob (3).svg" className="bottom-[-80px] right-[-320px] w-[820px] h-[620px]" />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7 }}
            className="font-bold text-2xl md:text-3xl mb-4 text-primary text-center"
          >
            Turn Clicks into Consultations. Convert Consultations into Paying Patients.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-lg text-center mb-12 max-w-2xl mx-auto"
          >
            We deliver booked consultations and loyal returning patients with AztecAcquisition's fully automated system.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <MotionCard
                key={service.title}
                className="bg-background rounded-2xl shadow-lg p-0 flex flex-col items-center text-center border-t-4 border-primary/10 hover:border-teal-500 transition-all"
                whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(31,38,135,0.12)" }}
                whileTap={{ scale: 0.97, boxShadow: "0 2px 16px 0 rgba(31,38,135,0.18)" }}
              >
                <CardHeader className="flex flex-col items-center">
                  <motion.div
                    className="flex items-center justify-center w-12 h-12 mb-4"
                    whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="leading-none font-semibold text-lg md:text-xl mt-2 mb-1">{service.title}</h3>
                  <MotionBadge
                    className="mt-2"
                    variant="secondary"
                    whileHover={{ scale: 1.12, boxShadow: "0 0 0 8px rgba(255,122,0,0.12)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  >
                    {service.benefit}
                  </MotionBadge>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.desc}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="details">
                      <AccordionTrigger>Learn more</AccordionTrigger>
                      <AccordionContent>
                        <p>More details about {service.title} and how it benefits your clinic.</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardFooter>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials/Team Carousel */}
      <section id="testimonials" className="relative py-20 px-4 bg-background overflow-hidden" ref={carouselSectionRef}>
        {/* Top-left testimonials blob */}
        <SectionBlob src="/blob (4).svg" className="top-[-120px] left-[-320px] w-[820px] h-[620px]" />
        {/* Bottom-right testimonials blob */}
        <SectionBlob src="/blob (5).svg" className="bottom-[-120px] right-[-320px] w-[820px] h-[620px]" />
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7 }}
            className="font-bold text-2xl md:text-3xl mb-8 text-primary text-center"
          >
            What Our Clients Say
          </motion.h2>
          <Carousel className="relative" opts={{ loop: true }}>
            <CarouselContent ref={emblaRef}>
              {testimonials.map((testimonial, idx) => (
                <CarouselItem key={idx} className="flex flex-col items-center justify-center px-8">
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
                    <CardHeader className="flex flex-col items-center">
                      <MotionAvatar
                        className="mb-4"
                        whileHover={{ scale: 1.12, boxShadow: "0 0 0 8px rgba(255,122,0,0.10)" }}
                        transition={{ type: "spring", stiffness: 300, damping: 18 }}
                      >
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </MotionAvatar>
                      <h3 className="leading-none font-semibold text-lg md:text-xl mt-2 mb-1">{testimonial.name}</h3>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-center">“{testimonial.text}”</p>
                    </CardContent>
                  </MotionCard>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="relative w-full py-16 px-4 bg-primary/10 overflow-hidden">
        {/* Left guarantee blob */}
        <SectionBlob src="/blob (2).svg" className="top-[40%] left-[-320px] w-[820px] h-[620px]" />
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7 }}
            className="font-bold text-2xl md:text-3xl mb-4 text-primary"
          >
            Our Guarantee
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-lg md:text-xl mb-2 text-text"
          >
            We guarantee at least 20–50 new consultations per month—or we work for free until you get them.
          </motion.p>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" className="mt-4">Read Guarantee Terms</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
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

      {/* Final CTA Section */}
      <section id="book-demo" className="relative py-20 px-4 bg-white/90 overflow-hidden">
        {/* No blob for final CTA, or add subtle one if desired */}
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7 }}
            className="font-bold text-2xl md:text-3xl mb-4 text-primary"
          >
            Ready to Get More Consultations—Automatically?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-lg mb-8 text-text"
          >
            Book a free call to see exactly how our system can work for your clinic.
          </motion.p>
          <MotionButton
            asChild
            size="lg"
            className="px-8 py-4 text-lg"
            whileHover={{ scale: 1.07, boxShadow: "0 4px 24px 0 rgba(31,38,135,0.12)" }}
            whileTap={{ scale: 0.97 }}
          >
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              <FaCheckCircle className="inline mr-2 mb-1" size={22} /> Book Your Free Demo
            </a>
          </MotionButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-sm text-text bg-background border-t border-gray-200">
        &copy; {new Date().getFullYear()} AztecAcquisition. All rights reserved.
      </footer>
    </div>
  );
}
