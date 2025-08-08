/* Footer Container */
.footer-container {
  position: relative;
  font-family: var(--md-footer-font);
  color: #ffffff;
  padding: 2rem 0;
  min-height: 400px;
}

/* Background */
.footer-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/assets/images/meta/footer_menu.png') center bottom/cover no-repeat;
  z-index: 0;
}

.footer-wrapper {
  position: relative;
  z-index: 1;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;
}

.footer-responsive-variants {
  width: 100%;
  height: 100%;
}

.footer-main {
  position: relative;
  width: 100%;
  height: 100%;
}

/* Footer Content */
.footer-content {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3rem;
}

/* Main Flex Container */
.footer-flex-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}

/* Company Info Section */
.company-info {
  flex: 1;
  min-width: 280px;
  max-width: 350px;
}

.company-logo {
  margin-bottom: 1.5rem;
}

.logo-image {
  width: 245px;
  height: auto;
  max-width: 100%;
}

.company-details {
  line-height: 1.6;
}

.address-text {
  margin-bottom: 1rem;
  font-size: 0.9rem;
  opacity: 0.9;
  line-height: 1.5;
}

.hotline-text,
.email-text {
  margin-bottom: 0.8rem;
  font-size: 0.9rem;
}

.hotline-text strong,
.email-text strong {
  color: var(--md-accent-fg-color, #ffd700);
  font-weight: 600;
}

/* Partnership Section */
.partnership {
  flex: 1;
  min-width: 250px;
  max-width: 300px;
}

.partnership-content {
  margin-bottom: 2rem;
}

.partnership-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--md-accent-fg-color, #ffd700);
}

.partner-logos {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
}

.mta-logo img,
.vietlott-logo img {
  height: 35px;
  width: auto;
  max-width: 100px;
}

.logo-separator {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--md-accent-fg-color, #ffd700);
  margin: 0 0.5rem;
}

.section-divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%);
  margin-top: 1rem;
}

/* Social Media Section */
.social-media {
  flex: 1;
  min-width: 220px;
  max-width: 280px;
}

.social-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--md-accent-fg-color, #ffd700);
}

.social-icons {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.social-icons a {
  display: block;
  width: 40px;
  height: 40px;
  padding: 6px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.social-icons a:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.social-icons a img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* App Download Section */
.app-download {
  flex: 1;
  min-width: 280px;
  max-width: 320px;
}

.app-download-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--md-accent-fg-color, #ffd700);
}

.app-download-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.qr-code-link {
  align-self: flex-start;
  text-decoration: none;
}

.qr-placeholder {
  display: block;
}

.qr-placeholder img {
  width: 80px;
  height: 80px;
  object-fit: contain;
}

.store-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  max-width: 200px;
}

.store-buttons a {
  display: block;
  text-decoration: none;
  transition: all 0.3s ease;
}

.store-buttons a:hover {
  transform: translateY(-1px);
  opacity: 0.9;
}

.store-buttons img {
  width: 100%;
  height: auto;
  max-height: 45px;
  object-fit: contain;
}

/* Quick Links Section */
.quicklinks {
  margin: 2rem 0;
  width: 100%;
}

.quicklinks-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--md-accent-fg-color, #ffd700);
  text-align: center;
}

.quicklinks-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem 1rem;
}

.link-item a {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  white-space: nowrap;
}

.link-item a:hover {
  color: var(--md-accent-fg-color, #ffd700);
  text-decoration: underline;
}

.link-divider {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.8rem;
  user-select: none;
}

/* Copyright Section */
.copyright {
  margin-top: auto;
  width: 100%;
}

.copyright-wrapper {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.copyright-text {
  font-size: 0.9rem;
  color: rgba(253, 236, 206, 0.9);
  opacity: 0.8;
  line-height: 1.4;
}

.copyright-text a {
  color: var(--md-accent-fg-color, #ffd700);
  text-decoration: none;
}

.copyright-text a:hover {
  text-decoration: underline;
}

/* Responsive Design */

/* Tablet (768px - 1199px) */
@media (max-width: 1199px) and (min-width: 768px) {
  .footer-container {
    padding: 3rem 0;
  }
  
  .footer-wrapper {
    padding: 0 1.5rem;
  }
  
  .footer-flex-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }
  
  .company-info,
  .partnership,
  .social-media,
  .app-download {
    min-width: auto;
    max-width: none;
  }
}

/* Mobile (≤767px) */
@media (max-width: 767px) {
  .footer-container {
    min-height: auto;
    padding: 2.5rem 0;
  }
  
  .footer-wrapper {
    padding: 0 1rem;
  }
  
  .footer-content {
    gap: 2rem;
  }
  
  .footer-flex-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
  .company-info,
  .partnership,
  .social-media,
  .app-download {
    min-width: auto;
    max-width: none;
    width: 100%;
  }
  
  .logo-image {
    width: 200px;
  }
  
  .partner-logos {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .logo-separator {
    display: none;
  }
  
  .social-icons {
    justify-content: flex-start;
  }
  
  .app-download-content {
    align-items: flex-start;
  }
  
  .store-buttons {
    max-width: 250px;
  }
  
  .quicklinks-list {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  .link-divider {
    display: none;
  }
  
  .copyright-wrapper {
    padding-top: 1.5rem;
  }
}

/* Extra Small Mobile (≤480px) */
@media (max-width: 480px) {
  .footer-container {
    padding: 2rem 0;
  }
  
  .footer-wrapper {
    padding: 0 0.8rem;
  }
  
  .logo-image {
    width: 180px;
  }
  
  .social-icons a {
    width: 35px;
    height: 35px;
    padding: 5px;
  }
  
  .qr-placeholder img {
    width: 70px;
    height: 70px;
  }
  
  .store-buttons {
    max-width: 200px;
  }
}

/* Hide default Material footer */
.md-footer {
  display: none !important;
}

/* Adjust main content to accommodate custom footer */
.md-main {
  margin-bottom: 0;
}

.md-footer-meta,
.md-footer-nav {
  display: none !important;
}

.md-content {
  margin-bottom: 0;
}

/* Dark mode compatibility */
[data-md-color-scheme="slate"] .footer-container {
  background-color: rgba(30, 30, 46, 0.95);
}

[data-md-color-scheme="slate"] .footer-background {
  opacity: 0.8;
}

/* Animation classes for JavaScript */
.footer-animate-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.footer-animate-in.active {
  opacity: 1;
  transform: translateY(0);
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  .footer-container *,
  .footer-container *::before,
  .footer-container *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Focus styles for accessibility */
.footer-container a:focus {
  outline: 2px solid var(--md-accent-fg-color, #ffd700);
  outline-offset: 2px;
  border-radius: 4px;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .footer-container {
    background: #000000;
    color: #ffffff;
  }
  
  .footer-background {
    display: none;
  }
  
  .section-divider {
    background: #ffffff;
  }
}