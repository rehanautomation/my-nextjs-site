'use client';

import { useAptabase } from '@aptabase/react';

export function useAnalytics() {
  const { trackEvent } = useAptabase();

  const trackPageView = (pageName: string) => {
    trackEvent('page_view', { page: pageName });
  };

  const trackButtonClick = (buttonName: string, location?: string) => {
    trackEvent('button_click', { 
      button: buttonName, 
      location: location || 'unknown' 
    });
  };

  const trackFormSubmission = (formName: string) => {
    trackEvent('form_submission', { form: formName });
  };

  const trackCTAClick = (ctaType: string, location?: string) => {
    trackEvent('cta_click', { 
      type: ctaType, 
      location: location || 'unknown' 
    });
  };

  const trackScroll = (section: string) => {
    trackEvent('scroll_section', { section });
  };

  const trackServiceInterest = (serviceName: string) => {
    trackEvent('service_interest', { service: serviceName });
  };

  const trackTestimonialView = (testimonialIndex: number) => {
    trackEvent('testimonial_view', { index: testimonialIndex });
  };

  const trackMobileMenuToggle = (isOpen: boolean) => {
    trackEvent('mobile_menu_toggle', { is_open: isOpen });
  };

  const trackNavigationClick = (section: string) => {
    trackEvent('navigation_click', { section });
  };

  const trackFAQView = (question: string) => {
    trackEvent('faq_view', { question });
  };

  return {
    trackEvent,
    trackPageView,
    trackButtonClick,
    trackFormSubmission,
    trackCTAClick,
    trackScroll,
    trackServiceInterest,
    trackTestimonialView,
    trackMobileMenuToggle,
    trackNavigationClick,
    trackFAQView,
  };
} 