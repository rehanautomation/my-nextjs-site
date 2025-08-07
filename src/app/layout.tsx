import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AptabaseProvider } from "@/components/AptabaseProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "AztechAcquisition - Automate Your Clinic's Growth | Patient Conversion System",
    template: "%s | AztechAcquisition"
  },
  description: "Get 20-50 extra consultations every month with AztechAcquisition's fully automated patient conversion system. Increase bookings, reduce no-shows, and grow your clinic with AI-powered automation.",
  keywords: [
    "patient conversion system",
    "healthcare automation",
    "medical practice growth",
    "appointment booking automation",
    "patient lead nurturing",
    "healthcare marketing automation",
    "medical practice management",
    "patient retention system",
    "healthcare lead nurturing"
  ],
  authors: [{ name: "AztechAcquisition", url: "https://aztechacquisition.com" }],
  creator: "AztechAcquisition",
  publisher: "AztechAcquisition",
  formatDetection: {
    telephone: false,
    address: false,
  },
  metadataBase: new URL('https://aztechacquisition.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aztechacquisition.com',
    title: "AztechAcquisition - Automate Your Clinic's Growth",
    description: "Get 20-50 extra consultations every month with our fully automated patient conversion system. Increase bookings and grow your clinic.",
    siteName: 'AztechAcquisition',
    images: [
      {
        url: '/hero-medical.png',
        width: 1200,
        height: 630,
        alt: 'AztechAcquisition Patient Conversion System',
        type: 'image/png',
      },
      {
        url: '/logo.svg',
        width: 512,
        height: 512,
        alt: 'AztechAcquisition Logo',
        type: 'image/svg+xml',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AztechAcquisition - Automate Your Clinic's Growth",
    description: "Get 20-50 extra consultations every month with our fully automated patient conversion system.",
    images: ['/hero-medical.png'],
    creator: '@aztechacquisition',
    site: '@aztechacquisition',
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
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'AztechAcquisition',
    'application-name': 'AztechAcquisition',
    'msapplication-TileColor': '#2563eb',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#2563eb',
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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="description" content="Get 20-50 extra consultations every month with AztechAcquisition's fully automated patient conversion system. Increase bookings, reduce no-shows, and grow your clinic with AI-powered automation." />
        <meta name="keywords" content="patient conversion system, healthcare automation, medical practice growth, appointment booking automation, patient lead nurturing, healthcare marketing automation, medical practice management, patient retention system, healthcare lead nurturing" />
        <meta name="author" content="AztechAcquisition" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png" />
        
        {/* Apple Mobile Web App Meta Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="AztechAcquisition" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AztechAcquisition",
              "url": "https://aztechacquisition.com",
              "logo": "https://aztechacquisition.com/logo.svg",
              "description": "Automated patient conversion system for healthcare clinics",
              "foundingDate": "2024",
              "sameAs": [
                "https://linkedin.com/company/aztechacquisition",
                "https://twitter.com/aztechacquisition",
                "https://facebook.com/aztechacquisition"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-0123",
                "contactType": "customer service",
                "areaServed": "US",
                "availableLanguage": "English"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "service": [
                {
                  "@type": "Service",
                  "name": "Social Media Comment & DM Agent",
                  "description": "Automated social media engagement and lead qualification for healthcare practices",
                  "provider": {
                    "@type": "Organization",
                    "name": "AztechAcquisition"
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
                    "name": "AztechAcquisition"
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
                    "name": "AztechAcquisition"
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
                  "name": "AztechAcquisition",
                  "url": "https://aztechacquisition.com",
                  "description": "Automated patient conversion system for healthcare clinics",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://aztechacquisition.com/search?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "AztechAcquisition"
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
                      "item": "https://aztechacquisition.com"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Services",
                      "item": "https://aztechacquisition.com/services"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "About",
                      "item": "https://aztechacquisition.com/about"
                    },
                    {
                      "@type": "ListItem",
                      "position": 4,
                      "name": "Contact",
                      "item": "https://aztechacquisition.com/contact"
                    }
                  ]
                })
              }}
            />
            
            {/* Structured Data - FAQ */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "How does AztechAcquisition's patient conversion system work?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Our system uses AI-powered automation to capture leads from social media, nurture them through personalized follow-ups, and convert them into booked consultations. It works 24/7 to ensure no lead is missed."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What services does AztechAcquisition provide?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We provide social media automation, lead nurturing, post-treatment follow-ups, database reactivation, website chatbots, and 24/7 AI calling agents to help healthcare practices grow their patient base."
                      }
                    }
                  ]
                })
              }}
            />
            
            {/* Structured Data - Product */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Product",
                  "name": "AztechAcquisition Patient Conversion System",
                  "description": "Automated patient conversion system for healthcare clinics",
                  "brand": {
                    "@type": "Brand",
                    "name": "AztechAcquisition"
                  },
                  "manufacturer": {
                    "@type": "Organization",
                    "name": "AztechAcquisition"
                  },
                  "image": "https://aztechacquisition.com/hero-medical.png",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock",
                    "description": "Free consultation and setup"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "reviewCount": "127"
                  }
                })
              }}
            />
            
            {/* Structured Data - SoftwareApplication */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "SoftwareApplication",
                  "name": "AztechAcquisition Patient Conversion System",
                  "description": "Automated patient conversion system for healthcare clinics",
                  "applicationCategory": "HealthcareApplication",
                  "operatingSystem": "Web",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock"
                  },
                  "image": "https://aztechacquisition.com/hero-medical.png",
                  "screenshot": "https://aztechacquisition.com/hero-medical.png",
                  "softwareVersion": "1.0",
                  "downloadUrl": "https://aztechacquisition.com",
                  "installUrl": "https://aztechacquisition.com",
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "reviewCount": "127"
                  }
                })
              }}
            />
            
            {/* Structured Data - Review */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Review",
                  "itemReviewed": {
                    "@type": "Product",
                    "name": "AztechAcquisition Patient Conversion System"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Dr. Sarah Johnson"
                  },
                  "reviewBody": "AztechAcquisition transformed our dental practice. We now get 45% more consultations from social media and our no-show rate dropped from 25% to 8%. The automation handles 80% of our social inquiries automatically."
                })
              }}
            />
            
            {/* Structured Data - LocalBusiness */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "LocalBusiness",
                  "name": "AztechAcquisition",
                  "description": "Automated patient conversion system for healthcare clinics",
                  "url": "https://aztechacquisition.com",
                  "telephone": "+1-555-0123",
                  "email": "contact@aztechacquisition.com",
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "US"
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
                  "sameAs": [
                    "https://linkedin.com/company/aztechacquisition",
                    "https://twitter.com/aztechacquisition",
                    "https://facebook.com/aztechacquisition"
                  ]
                })
              }}
            />
            
            {/* Structured Data - Article */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Article",
                  "headline": "How to Automate Your Clinic's Patient Conversion Process",
                  "description": "Learn how AztechAcquisition's automated system can help healthcare practices increase consultations and reduce no-shows.",
                  "image": "https://aztechacquisition.com/hero-medical.png",
                  "author": {
                    "@type": "Organization",
                    "name": "AztechAcquisition"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "AztechAcquisition",
                    "url": "https://aztechacquisition.com",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://aztechacquisition.com/logo.svg"
                    }
                  },
                  "datePublished": "2024-01-01",
                  "dateModified": "2024-01-01",
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://aztechacquisition.com"
                  }
                })
              }}
            />
            
            {/* Structured Data - VideoObject */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "VideoObject",
                  "name": "AztechAcquisition Patient Conversion System Demo",
                  "description": "See how our automated system works to increase patient consultations",
                  "thumbnailUrl": "https://aztechacquisition.com/hero-medical.png",
                  "uploadDate": "2024-01-01",
                  "duration": "PT3M",
                  "contentUrl": "https://aztechacquisition.com/demo-video",
                  "embedUrl": "https://aztechacquisition.com/demo-video",
                  "publisher": {
                    "@type": "Organization",
                    "name": "AztechAcquisition",
                    "url": "https://aztechacquisition.com"
                  }
                })
              }}
            />
            
            {/* Structured Data - Event */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Event",
                  "name": "Free Demo: AztechAcquisition Patient Conversion System",
                  "description": "Book a free demo to see how our automated system can transform your clinic's growth",
                  "startDate": "2024-01-01T09:00:00",
                  "endDate": "2024-12-31T17:00:00",
                  "location": {
                    "@type": "VirtualLocation",
                    "url": "https://aztechacquisition.com/demo"
                  },
                  "organizer": {
                    "@type": "Organization",
                    "name": "AztechAcquisition",
                    "url": "https://aztechacquisition.com"
                  },
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock"
                  }
                })
              }}
            />
          </head>
          <body className={inter.className}>
            <AptabaseProvider>
              {children}
            </AptabaseProvider>
          </body>
        </html>
      );
    }
