# Aptabase Analytics Integration

This project has been integrated with Aptabase analytics to track user interactions and behavior on the website.

## Setup

The analytics integration is set up using the `@aptabase/react` package and includes:

1. **AptabaseProvider** (`src/components/AptabaseProvider.tsx`) - Wraps the entire app
2. **useAnalytics Hook** (`src/hooks/useAnalytics.ts`) - Provides easy-to-use tracking functions
3. **Event Tracking** - Integrated throughout the main page component

## App Key

The current App Key is: `A-US-1836540591`

To change this, update the `appKey` variable in `src/components/AptabaseProvider.tsx`.

## Tracked Events

### Page Views
- `page_view` - Tracked when the home page loads

### User Interactions
- `button_click` - Tracked when users click buttons
- `cta_click` - Tracked when users click call-to-action buttons
- `navigation_click` - Tracked when users click navigation links
- `mobile_menu_toggle` - Tracked when users open/close mobile menu

### Scroll Behavior
- `scroll_section` - Tracked when users scroll to different sections

### Content Engagement
- `service_interest` - Tracked when users click "Learn more" on service cards
- `testimonial_view` - Tracked when users view testimonials

### Form Interactions
- `form_submission` - Available for future form tracking

## Usage

### Basic Event Tracking
```typescript
import { useAnalytics } from '@/hooks/useAnalytics';

function MyComponent() {
  const analytics = useAnalytics();
  
  const handleClick = () => {
    analytics.trackButtonClick('my_button', 'homepage');
  };
  
  return <button onClick={handleClick}>Click me</button>;
}
```

### Custom Event Tracking
```typescript
import { useAnalytics } from '@/hooks/useAnalytics';

function MyComponent() {
  const analytics = useAnalytics();
  
  const handleCustomEvent = () => {
    analytics.trackEvent('custom_event', { 
      category: 'engagement',
      value: 42 
    });
  };
}
```

## Available Tracking Functions

- `trackPageView(pageName)` - Track page views
- `trackButtonClick(buttonName, location)` - Track button clicks
- `trackCTAClick(ctaType, location)` - Track CTA button clicks
- `trackScroll(section)` - Track scroll to sections
- `trackServiceInterest(serviceName)` - Track service interest
- `trackTestimonialView(index)` - Track testimonial views
- `trackMobileMenuToggle(isOpen)` - Track mobile menu interactions
- `trackNavigationClick(section)` - Track navigation clicks
- `trackFormSubmission(formName)` - Track form submissions
- `trackEvent(eventName, properties)` - Track custom events

## Privacy-First Approach

Aptabase is privacy-first and GDPR compliant. The SDK:
- Only tracks events you explicitly call
- Does not automatically track any user behavior
- Allows you to control exactly what data is sent
- Provides transparency about data collection

## Dashboard Access

Access your analytics dashboard at [aptabase.com](https://aptabase.com) using your account credentials.

## Troubleshooting

1. **Events not appearing**: Check that the App Key is correct
2. **Network issues**: Ensure the website has internet access
3. **Development vs Production**: Events are tracked in both environments

## Adding New Tracking

To add tracking to new components:

1. Import the `useAnalytics` hook
2. Call the appropriate tracking function
3. Test the event appears in your Aptabase dashboard

Example:
```typescript
import { useAnalytics } from '@/hooks/useAnalytics';

function NewComponent() {
  const analytics = useAnalytics();
  
  return (
    <button onClick={() => analytics.trackButtonClick('new_feature')}>
      New Feature
    </button>
  );
}
``` 