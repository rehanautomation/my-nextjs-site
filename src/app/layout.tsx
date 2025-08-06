import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AptabaseProvider } from "@/components/AptabaseProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#2563eb",
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: {
    default: "AztecAcquisition - Automate Your Clinic's Growth | Patient Conversion System",
    template: "%s | AztecAcquisition"
  },
  description: "Get 20-50 extra consultations every month with AztecAcquisition's fully automated patient conversion system. Increase bookings, reduce no-shows, and grow your clinic with AI-powered automation.",
  keywords: [
    "patient conversion system",
    "clinic automation",
    "medical practice growth",
    "appointment booking automation",
    "healthcare marketing",
    "patient acquisition",
    "medical practice management",
    "AI healthcare automation",
    "clinic lead generation",
    "patient retention system",
    "healthcare CRM",
    "medical practice software",
    "dental practice automation",
    "physician practice management",
    "healthcare lead nurturing"
  ],
  authors: [{ name: "AztecAcquisition", url: "https://aztecacquisition.com" }],
  creator: "AztecAcquisition",
  publisher: "AztecAcquisition",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  metadataBase: new URL('https://aztecacquisition.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aztecacquisition.com',
    title: "AztecAcquisition - Automate Your Clinic's Growth",
    description: "Get 20-50 extra consultations every month with our fully automated patient conversion system. Increase bookings and grow your clinic.",
    siteName: 'AztecAcquisition',
    images: [
      {
        url: '/hero-medical.png',
        width: 1200,
        height: 630,
        alt: 'AztecAcquisition Patient Conversion System',
        type: 'image/png',
      },
      {
        url: '/logo.svg',
        width: 512,
        height: 512,
        alt: 'AztecAcquisition Logo',
        type: 'image/svg+xml',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AztecAcquisition - Automate Your Clinic's Growth",
    description: "Get 20-50 extra consultations every month with our fully automated patient conversion system.",
    images: ['/hero-medical.png'],
    creator: '@aztecacquisition',
    site: '@aztecacquisition',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'business',
  classification: 'healthcare automation',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'AztecAcquisition',
    'application-name': 'AztecAcquisition',
    'msapplication-TileColor': '#2563eb',
    'msapplication-config': '/browserconfig.xml',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicon and App Icons */}
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="icon" href="/logo.svg" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Additional favicon sizes for better compatibility */}
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <link rel="alternate icon" href="/logo.svg" />
        
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="AztecAcquisition" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AztecAcquisition",
              "url": "https://aztecacquisition.com",
              "logo": "https://aztecacquisition.com/logo.svg",
              "description": "Automated patient conversion system for healthcare clinics",
              "foundingDate": "2024",
              "sameAs": [
                "https://linkedin.com/company/aztecacquisition",
                "https://twitter.com/aztecacquisition",
                "https://facebook.com/aztecacquisition"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "customer service",
                "availableLanguage": "English",
                "areaServed": "US",
                "hoursAvailable": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday", 
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "09:00",
                  "closes": "17:00"
                }
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US",
                "addressLocality": "New York",
                "addressRegion": "NY"
              },
              "service": [
                {
                  "@type": "Service",
                  "name": "Social Media Comment & DM Agent",
                  "description": "Automated social media engagement and lead qualification for healthcare practices",
                  "provider": {
                    "@type": "Organization",
                    "name": "AztecAcquisition"
                  },
                  "areaServed": "US",
                  "serviceType": "Healthcare Automation"
                },
                {
                  "@type": "Service", 
                  "name": "Lead Nurture Automation",
                  "description": "Automated follow-up sequences to reduce no-shows and increase patient retention",
                  "provider": {
                    "@type": "Organization",
                    "name": "AztecAcquisition"
                  },
                  "areaServed": "US",
                  "serviceType": "Healthcare Automation"
                },
                {
                  "@type": "Service",
                  "name": "Website Booking Chatbot", 
                  "description": "24/7 intelligent chatbot for appointment booking and patient engagement",
                  "provider": {
                    "@type": "Organization",
                    "name": "AztecAcquisition"
                  },
                  "areaServed": "US",
                  "serviceType": "Healthcare Automation"
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Healthcare Automation Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Patient Conversion System"
                    },
                    "price": "0",
                    "priceCurrency": "USD",
                    "description": "Free consultation and setup"
                  }
                ]
              }
            })
          }}
        />
        
        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "AztecAcquisition",
              "url": "https://aztecacquisition.com",
              "description": "Automated patient conversion system for healthcare clinics",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://aztecacquisition.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "publisher": {
                "@type": "Organization",
                "name": "AztecAcquisition"
              }
            })
          }}
        />
        
        {/* Structured Data - BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://aztecacquisition.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Services",
                  "item": "https://aztecacquisition.com/services"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "About",
                  "item": "https://aztecacquisition.com/about"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Contact",
                  "item": "https://aztecacquisition.com/contact"
                }
              ]
            })
          }}
        />
        
        {/* Structured Data - FAQPage (Rich Results) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How does AztecAcquisition's patient conversion system work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our system uses AI-powered automation to handle social media engagement, lead nurturing, and post-treatment follow-ups. It automatically responds to inquiries, qualifies leads, and ensures patients show up for appointments, helping clinics get 20-50 extra consultations monthly."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "What services does AztecAcquisition provide?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We provide three core services: Social Media Comment & DM Agent for automated engagement, Lead Nurture Automation to reduce no-shows, and Post-Treatment Follow-Ups & Upsells to increase patient retention and revenue."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much can I expect to increase my consultations?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "Our clients typically see 20-50 extra consultations per month, with 40% higher show-up rates and 25-35% more repeat bookings through our automated systems."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is there a free consultation available?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer a free consultation and setup to help you understand how our automation can benefit your specific practice. Book your free demo to get started."
                  }
                }
              ]
            })
          }}
        />
        
        {/* Structured Data - HowTo (Rich Results) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "How to Automate Your Clinic's Patient Conversion",
              "description": "Step-by-step guide to implementing automated patient conversion for healthcare clinics",
              "image": "https://aztecacquisition.com/hero-medical.png",
              "totalTime": "PT30M",
              "estimatedCost": {
                "@type": "MonetaryAmount",
                "currency": "USD",
                "value": "0"
              },
              "supply": [
                {
                  "@type": "HowToSupply",
                  "name": "Existing social media accounts"
                },
                {
                  "@type": "HowToSupply", 
                  "name": "Patient booking system"
                },
                {
                  "@type": "HowToSupply",
                  "name": "Contact information for leads"
                }
              ],
              "tool": [
                {
                  "@type": "HowToTool",
                  "name": "AztecAcquisition Patient Conversion System"
                }
              ],
              "step": [
                {
                  "@type": "HowToStep",
                  "name": "Set up social media automation",
                  "text": "Configure our AI agent to monitor and respond to social media comments and DMs automatically.",
                  "image": "https://aztecacquisition.com/hero-medical.png"
                },
                {
                  "@type": "HowToStep",
                  "name": "Implement lead nurturing",
                  "text": "Set up automated follow-up sequences to reduce no-shows and increase patient retention.",
                  "image": "https://aztecacquisition.com/hero-medical.png"
                },
                {
                  "@type": "HowToStep",
                  "name": "Configure post-treatment follow-ups",
                  "text": "Automate post-treatment check-ins and upsell opportunities to maximize patient lifetime value.",
                  "image": "https://aztecacquisition.com/hero-medical.png"
                }
              ]
            })
          }}
        />
        
        {/* Structured Data - LocalBusiness (Rich Results) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "AztecAcquisition",
              "description": "Healthcare automation and patient conversion system provider",
              "url": "https://aztecacquisition.com",
              "telephone": "+1-555-123-4567",
              "email": "contact@aztecacquisition.com",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US",
                "addressLocality": "New York",
                "addressRegion": "NY"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "40.7128",
                "longitude": "-74.0060"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "17:00"
              },
              "priceRange": "$$",
              "currenciesAccepted": "USD",
              "paymentAccepted": "Cash, Credit Card",
              "areaServed": "US",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "40.7128",
                  "longitude": "-74.0060"
                },
                "geoRadius": "5000"
              }
            })
          }}
        />
        
        {/* Structured Data - SoftwareApplication (Rich Results) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "AztecAcquisition Patient Conversion System",
              "description": "AI-powered automation system for healthcare clinics to increase patient consultations and reduce no-shows",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "url": "https://aztecacquisition.com",
              "downloadUrl": "https://aztecacquisition.com",
              "softwareVersion": "2.0",
              "releaseNotes": "Latest version includes enhanced AI capabilities and improved automation workflows",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "127"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "description": "Free consultation and setup"
              },
              "featureList": [
                "Social Media Comment & DM Agent",
                "Lead Nurture Automation", 
                "Post-Treatment Follow-Ups & Upsells",
                "AI-powered lead qualification",
                "Multi-channel communication",
                "Real-time analytics dashboard"
              ]
            })
          }}
        />
        
        {/* Structured Data - Review (Rich Results) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "AztecAcquisition Patient Conversion System",
              "description": "Automated patient conversion system for healthcare clinics",
              "brand": {
                "@type": "Brand",
                "name": "AztecAcquisition"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "127",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Dr. Sarah Johnson"
                  },
                  "reviewBody": "AztecAcquisition transformed our dental practice. We now get 45% more consultations from social media and our no-show rate dropped from 25% to 8%. The automation handles 80% of our social inquiries automatically."
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Dr. Michael Chen"
                  },
                  "reviewBody": "The lead nurture automation is incredible. Our patient retention increased by 35% and we're seeing 40% more repeat bookings. The system pays for itself within the first month."
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "4",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Dr. Maria Gomez"
                  },
                  "reviewBody": "Excellent automation system that has streamlined our patient conversion process. We're getting 30+ extra consultations monthly and the setup was seamless."
                }
              ],
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "description": "Free consultation and setup",
                "availability": "https://schema.org/InStock"
              }
            })
          }}
        />
      </head>
      <body className={`antialiased ${geistSans.variable} ${geistMono.variable}`}>
        <AptabaseProvider>
          {children}
        </AptabaseProvider>
      </body>
    </html>
  );
}
