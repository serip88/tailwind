// src/main.ts
import './style.css';
import { createRouter } from './utils/router';
import { HomePage, AboutPage, ContactPage } from './components/pages';

// Initialize app
function initApp() {
  const app = document.querySelector<HTMLDivElement>('#app');
  
  if (!app) {
    console.error('App root element not found');
    return;
  }

  // Create and configure router
  const router = createRouter(app);
  
  // Define routes
  router
    .addRoute('/', HomePage, 'Home - My App')
    .addRoute('/about', AboutPage, 'About Us - My App')
    .addRoute('/contact', ContactPage, 'Contact Us - My App')
    // .addRoute('/contacts', ContactsList, 'Contacts List - My App');

  // Start router
  router.start();
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}