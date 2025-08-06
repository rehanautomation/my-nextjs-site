'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FaTimes, FaCheckCircle, FaArrowRight, FaStar, FaClock, FaUsers, FaChartLine } from 'react-icons/fa';
import { useAnalytics } from '@/hooks/useAnalytics';

interface ServicePopupProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    benefit: string;
    desc: string;
    icon: React.ReactNode;
    number: number;
    detailedInfo?: {
      features: string[];
      benefits: string[];
      howItWorks: string;
      caseStudy?: string;
    };
  };
}

export function ServicePopup({ isOpen, onClose, service }: ServicePopupProps) {
  const analytics = useAnalytics();

  // Track popup open
  useEffect(() => {
    if (isOpen) {
      analytics.trackEvent('popup_open', { 
        service: service.title,
        type: 'service_details' 
      });
    }
  }, [isOpen, service.title, analytics]);

  // Add structured data for SEO
  useEffect(() => {
    if (isOpen) {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.desc,
        "provider": {
          "@type": "Organization",
          "name": "AztecAcquisition",
          "url": "https://aztecacquisition.com"
        },
        "serviceType": "Healthcare Automation",
        "areaServed": "US",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "description": "Free consultation and setup"
        }
      };

      // Add structured data to page
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [isOpen, service.title, service.desc]);

  const handleClose = () => {
    analytics.trackEvent('popup_close', { 
      service: service.title,
      type: 'service_details' 
    });
    onClose();
  };

  const handleCTAClick = () => {
    analytics.trackCTAClick('service_popup_cta', service.title);
    // You can add navigation logic here
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={handleClose}
            aria-hidden="true"
          />
          
          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-popup-title"
            aria-describedby="service-popup-description"
          >
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white shadow-2xl border-0">
              <CardHeader className="relative pb-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClose}
                  className="absolute top-4 right-4 h-8 w-8 p-0 rounded-full hover:bg-gray-100"
                  aria-label="Close popup"
                >
                  <FaTimes size={16} />
                </Button>
                
                <div className="flex items-start gap-4 pr-8">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg" aria-hidden="true">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle id="service-popup-title" className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </CardTitle>
                    <Badge variant="secondary" className="mb-2">
                      {service.benefit}
                    </Badge>
                    <CardDescription id="service-popup-description" className="text-base text-gray-600">
                      {service.desc}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Key Features */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <FaCheckCircle className="text-green-500" size={20} />
                    Key Features
                  </h3>
                  <ul className="space-y-2" role="list">
                    {service.detailedInfo?.features?.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    )) || [
                      "Automated lead capture and qualification",
                      "24/7 availability for your prospects",
                      "Seamless integration with your existing systems",
                      "Real-time analytics and reporting"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <FaChartLine className="text-primary" size={20} />
                    Benefits for Your Clinic
                  </h3>
                  <ul className="space-y-2" role="list">
                    {service.detailedInfo?.benefits?.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    )) || [
                      "Reduce manual follow-up tasks by 80%",
                      "Increase appointment show-up rates",
                      "Capture leads you might otherwise miss",
                      "Improve patient satisfaction and retention"
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* How It Works */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <FaClock className="text-primary" size={20} />
                    How It Works
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {service.detailedInfo?.howItWorks || 
                      "Our AI-powered system automatically engages with your prospects, qualifies leads, and schedules appointments without any manual intervention. The system learns from your clinic's specific needs and continuously optimizes for better results."}
                  </p>
                </div>

                {/* Success Metrics */}
                <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <FaStar className="text-yellow-500" size={20} />
                    Proven Results
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">40%</div>
                      <div className="text-sm text-gray-600">Average increase in bookings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">80%</div>
                      <div className="text-sm text-gray-600">Reduction in manual tasks</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">24/7</div>
                      <div className="text-sm text-gray-600">Lead capture availability</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">30%</div>
                      <div className="text-sm text-gray-600">Reduction in no-shows</div>
                    </div>
                  </div>
                </div>

                {/* Case Study */}
                {service.detailedInfo?.caseStudy && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <FaUsers className="text-primary" size={16} />
                      Success Story
                    </h4>
                    <p className="text-gray-700 text-sm italic">
                      &ldquo;{service.detailedInfo.caseStudy}&rdquo;
                    </p>
                  </div>
                )}

                {/* SEO-Friendly Additional Info */}
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Why Choose AztecAcquisition?</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• <strong>Non-intrusive popups</strong> that comply with Google&apos;s SEO guidelines</li>
                    <li>• <strong>Mobile-first design</strong> for optimal user experience</li>
                    <li>• <strong>Fast loading times</strong> that don&apos;t impact Core Web Vitals</li>
                    <li>• <strong>Accessibility compliant</strong> for all users</li>
                    <li>• <strong>SEO-optimized content</strong> that helps your clinic rank better</li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-gray-200">
                  <Button 
                    onClick={handleCTAClick}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3"
                    aria-label={`Get started with ${service.title} service`}
                  >
                    <span>Get Started with {service.title}</span>
                    <FaArrowRight className="ml-2" size={16} />
                  </Button>
                  <p className="text-xs text-gray-500 text-center mt-2">
                    Free setup • No long-term contracts • 30-day guarantee
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 