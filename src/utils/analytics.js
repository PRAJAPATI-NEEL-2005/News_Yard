// Analytics utility for tracking user interactions
class Analytics {
  constructor() {
    this.events = [];
    this.isInitialized = false;
  }

  // Initialize analytics (can be extended for Google Analytics, Mixpanel, etc.)
  init() {
    this.isInitialized = true;
    console.log('Analytics initialized');
    
    // Track page views
    this.trackPageView(window.location.pathname);
    
    // Listen for route changes
    window.addEventListener('popstate', () => {
      this.trackPageView(window.location.pathname);
    });
  }

  // Track page views
  trackPageView(page) {
    const event = {
      type: 'pageview',
      page,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent
    };
    
    this.events.push(event);
    this.sendToAnalytics(event);
  }

  // Track custom events
  trackEvent(eventName, properties = {}) {
    const event = {
      type: 'event',
      name: eventName,
      properties,
      timestamp: new Date().toISOString(),
      page: window.location.pathname
    };
    
    this.events.push(event);
    this.sendToAnalytics(event);
  }

  // Track social media clicks
  trackSocialClick(platform) {
    this.trackEvent('social_click', {
      platform,
      url: window.location.href
    });
  }

  // Track newsletter subscriptions
  trackNewsletterSubscription(email) {
    this.trackEvent('newsletter_subscription', {
      email: email.substring(0, 3) + '***', // Partial email for privacy
      timestamp: new Date().toISOString()
    });
  }

  // Track article interactions
  trackArticleInteraction(action, articleId, category) {
    this.trackEvent('article_interaction', {
      action,
      articleId,
      category,
      timestamp: new Date().toISOString()
    });
  }

  // Track search queries
  trackSearch(query, resultsCount) {
    this.trackEvent('search', {
      query,
      resultsCount,
      timestamp: new Date().toISOString()
    });
  }

  // Track user engagement


  // Send events to analytics service
  sendToAnalytics(event) {
    // Here you would integrate with actual analytics services
    // Examples: Google Analytics, Mixpanel, Amplitude, etc.
    
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', event);
    } else {
      // Production analytics integration
      // Example for Google Analytics 4:
      // if (window.gtag) {
      //   window.gtag('event', event.name, event.properties);
      // }
      
      // Example for Mixpanel:
      // if (window.mixpanel) {
      //   window.mixpanel.track(event.name, event.properties);
      // }
      
      // For now, just log to console
      console.log('Analytics Event:', event);
    }
  }

  // Get analytics data
  getAnalyticsData() {
    return {
      totalEvents: this.events.length,
      events: this.events,
      isInitialized: this.isInitialized
    };
  }

  // Clear analytics data (for testing)
  clearData() {
    this.events = [];
  }
}

// Create singleton instance
const analytics = new Analytics();

export default analytics; 