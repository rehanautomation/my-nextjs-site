'use client';

import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
}

export function SEOHead({
  title = "AztechAcquisition - Automate Your Clinic's Growth | Patient Conversion System",
  description = "Get 20-50 extra consultations every month with AztechAcquisition's fully automated patient conversion system. Increase bookings, reduce no-shows, and grow your clinic with AI-powered automation.",
  keywords = [
    "patient conversion system",
    "clinic automation", 
    "medical practice growth",
    "healthcare marketing"
  ],
  canonical = "https://aztechacquisition.com",
  ogImage = "/hero-medical.png",
  ogType = "website",
  structuredData
}: SEOHeadProps) {
  const fullTitle = title.includes('AztechAcquisition') ? title : `${title} | AztechAcquisition`;
  
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
              <meta property="og:image" content={`https://aztechacquisition.com${ogImage}`} />
        <meta property="og:site_name" content="AztechAcquisition" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
              <meta name="twitter:image" content={`https://aztechacquisition.com${ogImage}`} />
        <meta name="twitter:site" content="@aztechacquisition" />
        <meta name="twitter:creator" content="@aztechacquisition" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
              <meta name="author" content="AztechAcquisition" />
        <meta name="publisher" content="AztechAcquisition" />
      <meta name="language" content="en" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
              <meta name="apple-mobile-web-app-title" content="AztechAcquisition" />
      
      {/* Performance Optimizations */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
      
      {/* Additional Structured Data for Healthcare */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "AztechAcquisition",
            "description": "Healthcare automation and patient conversion system",
            "url": "https://aztechacquisition.com",
            "telephone": "+1-555-123-4567",
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
            "sameAs": [
              "https://linkedin.com/company/aztechacquisition",
              "https://twitter.com/aztechacquisition"
            ]
          })
        }}
      />
    </Head>
  );
} 