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
  title = "AztechAcquisition - Free Appointment-Booking Chatbot Setup | Customer Conversion System",
  description = "Claim a free appointment-booking chatbot setup (). Get 20–50 extra qualified leads monthly with AztechAcquisition's AI-powered customer conversion system.",
  keywords = [
    "customer conversion system",
    "business automation", 
    "lead generation automation",
    "marketing automation",
    "free chatbot setup",
    "appointment booking chatbot",
    "website chatbot",
    "ai chatbot for business"
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
      <meta property="og:image:alt" content="AztechAcquisition free appointment-booking chatbot demo" />
        <meta property="og:site_name" content="AztechAcquisition" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
              <meta name="twitter:image" content={`https://aztechacquisition.com${ogImage}`} />
      <meta name="twitter:image:alt" content="AztechAcquisition free appointment-booking chatbot demo" />
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
      
      {/* Organization Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "AztechAcquisition",
            "description": "Business automation and customer conversion system offering free appointment-booking chatbot setup",
            "url": "https://aztechacquisition.com",
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