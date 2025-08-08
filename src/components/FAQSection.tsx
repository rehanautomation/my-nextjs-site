"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import SectionBlob from "@/components/SectionBlob";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How does the serverless architecture keep costs low?",
    answer: "Built on Aztech serverless infrastructure, AztechAcquisition requires zero server management. This eliminates the need for dedicated servers, maintenance staff, and infrastructure costs, allowing us to pass significant savings to our clients while maintaining enterprise-grade reliability."
  },
  {
    question: "What level of upkeep is required?",
    answer: "With its serverless foundation, ongoing maintenance is minimal around 1–2 hours per week since there are no servers to patch, monitor, or optimize, dramatically reducing operational overhead. Our system is designed to run autonomously with minimal human intervention."
  },
  {
    question: "Why is the assistant called 'Justin'?",
    answer: "It's a play on 'just-in-time': Justin delivers the right plan and insight exactly when you need it, with a natural-sounding voice that feels more human than a bot. The name reflects our commitment to providing timely, relevant assistance to your customers."
  },
  {
    question: "How quickly can I see results?",
    answer: "Most clients see increased bookings within 2-4 weeks of implementation. Our system starts working immediately, and we typically see a 30-50% increase in bookings within the first month. The automated follow-up sequences begin converting leads right away."
  },
  {
    question: "What if I don't get the guaranteed results?",
    answer: "We guarantee at least 20-50 additional qualified leads per month, or we work for free until you get them. This includes optimizing your campaigns, adjusting strategies, and providing additional support at no extra cost until we meet your targets."
  },
  {
    question: "Can the system integrate with my existing software?",
    answer: "Yes! AztechAcquisition integrates seamlessly with most popular CRMs, calendars, and marketing tools. We can connect with systems like Calendly, HubSpot, Salesforce, Google Calendar, and many others to ensure smooth workflow integration."
  },
  {
    question: "How does the AI handle sensitive information?",
    answer: "Our AI is designed to handle customer inquiries professionally and securely. It focuses on lead capture, qualification, and scheduling, and defers complex or sensitive matters to your team."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We provide comprehensive onboarding support, 24/7 technical assistance, and regular check-ins to ensure your system is performing optimally. Our team is always available to help with setup, optimization, and any questions you may have."
  },
  {
    question: "Can I customize the automated messages?",
    answer: "Absolutely! You can fully customize all automated messages to match your brand voice and specific requirements. Our system learns from your preferences and can be tailored to reflect your business's unique communication style and protocols."
  },
  {
    question: "How does the system handle different types of customers?",
    answer: "Our AI intelligently segments customers based on their behavior and history, allowing for personalized communication strategies. Whether it's a new lead, an onboarding customer, or a reactivation campaign, the system adapts its approach accordingly."
  }
];

interface FAQSectionProps {
  analytics?: {
    trackFAQView: (question: string) => void;
    trackCTAClick: (ctaType: string, location: string) => void;
  };
}

export default function FAQSection({ analytics }: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
      // Track FAQ view
      if (analytics) {
        analytics.trackFAQView(faqData[index].question);
      }
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section 
      id="faq"
      className="relative py-12 sm:py-20 px-4 sm:px-6 bg-background overflow-hidden"
      aria-labelledby="faq-heading"
    >
      {/* Top-left FAQ blob */}
      <SectionBlob src="/blob (2).svg" className="top-[-120px] left-[-320px] w-[820px] h-[620px]" />
      {/* Bottom-right FAQ blob */}
      <SectionBlob src="/blob (3).svg" className="bottom-[-120px] right-[-320px] w-[820px] h-[620px]" />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 
            id="faq-heading"
            className="font-bold text-xl sm:text-2xl md:text-3xl mb-4 text-primary"
            role="heading"
            aria-level={2}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-text max-w-2xl mx-auto">
            Get answers to the most common questions about AztechAcquisition's automated customer conversion system.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
            >
              <Card className="overflow-hidden">
                <CardHeader className="pb-0">
                  <Button
                    variant="ghost"
                    className="w-full justify-between h-auto text-left font-semibold text-base sm:text-lg whitespace-normal break-words text-wrap items-start px-4 py-3 sm:py-4"
                    onClick={() => toggleItem(index)}
                    aria-expanded={openItems.has(index)}
                    aria-controls={`faq-content-${index}`}
                  >
                    <span id={`faq-question-${index}`} className="flex-1 text-left leading-snug">
                      {item.question}
                    </span>
                    <AnimatePresence mode="wait">
                      {openItems.has(index) ? (
                        <motion.div
                          key="up"
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 180 }}
                          exit={{ rotate: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronUp className="h-5 w-5 flex-shrink-0 ml-2" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="down"
                          initial={{ rotate: 180 }}
                          animate={{ rotate: 0 }}
                          exit={{ rotate: 180 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="h-5 w-5 flex-shrink-0 ml-2" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Button>
                </CardHeader>
                <AnimatePresence>
                  {openItems.has(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      id={`faq-content-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                    >
                      <CardContent className="pt-0 pb-6">
                        <p className="text-sm sm:text-base text-text leading-relaxed">
                          {item.answer}
                        </p>
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-base sm:text-lg text-text mb-6">
            Still have questions? We're here to help!
          </p>
                      <Button 
              asChild
              size="lg" 
              className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
              onClick={() => analytics?.trackCTAClick('contact_team', 'faq_section')}
            >
              <a href="https://api.leadconnectorhq.com/widget/booking/fIy7KRDQLEBTOK1FnXAF" target="_blank" rel="noopener noreferrer">
                Contact Our Team
              </a>
            </Button>
        </motion.div>
      </div>
    </section>
  );
}
