class FooterManager {
  constructor() {
    this.footer = document.getElementById('footer');
    this.breakpoints = {
      mobile: 809,
      tablet: 1399
    };
    
    this.init();
  }

  init() {
    if (this.footer) {
      this.setResponsiveClass();
      this.bindEvents();
      this.initAnimations();
    }
  }

  setResponsiveClass() {
    const width = window.innerWidth;
    
    // Remove existing responsive classes
    this.footer.classList.remove('mobile', 'tablet', 'desktop');
    
    // Add appropriate class based on screen width
    if (width <= this.breakpoints.mobile) {
      this.footer.classList.add('mobile');
    } else if (width <= this.breakpoints.tablet) {
      this.footer.classList.add('tablet');
    } else {
      this.footer.classList.add('desktop');
    }
  }

  bindEvents() {
    // Debounced resize handler
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        this.setResponsiveClass();
      }, 150);
    });

    // Add click handlers for tracking
    this.addLinkTracking();
  }

  addLinkTracking() {
    // Track social media clicks
    const socialLinks = this.footer.querySelectorAll('.social-icons a');
    socialLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        this.trackClick('social', this.getSocialPlatform(link.href));
      });
    });

    // Track app download clicks
    const qrLink = this.footer.querySelector('.qr-code-link');
    if (qrLink) {
      qrLink.addEventListener('click', (e) => {
        this.trackClick('app_download', 'qr_code');
      });
    }

    const storeButtons = this.footer.querySelectorAll('.store-buttons a');
    storeButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const store = button.classList.contains('appstore-button') ? 'appstore' : 'googleplay';
        this.trackClick('app_download', store);
      });
    });

    // Track footer menu clicks
    const footerLinks = this.footer.querySelectorAll('.quicklinks-list a');
    footerLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        this.trackClick('footer_menu', link.textContent.trim());
      });
    });
  }

  getSocialPlatform(url) {
    if (url.includes('facebook.com')) return 'facebook';
    if (url.includes('zalo.me')) return 'zalo';
    if (url.includes('youtube.com')) return 'youtube';
    return 'unknown';
  }

  trackClick(category, action) {
    // Analytics tracking if available
    if (typeof gtag !== 'undefined') {
      gtag('event', 'click', {
        'event_category': category,
        'event_label': action,
        'section': 'footer'
      });
    }
    
    console.log(`Footer ${category} clicked: ${action}`);
  }

  initAnimations() {
    // Intersection Observer for footer animations
    if ('IntersectionObserver' in window) {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animateFooterElements();
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      observer.observe(this.footer);
    }
  }

  animateFooterElements() {
    // Add staggered animation classes
    const sections = this.footer.querySelectorAll('.company-info, .partnership, .social-media, .app-download');
    
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // Trigger animation
        requestAnimationFrame(() => {
          section.style.opacity = '1';
          section.style.transform = 'translateY(0)';
        });
      }, index * 100);
    });
  }

  // Public method to refresh footer state
  refresh() {
    this.setResponsiveClass();
  }
}

// Initialize footer manager when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new FooterManager();
});

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = FooterManager;
}