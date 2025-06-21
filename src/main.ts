// src/main.ts
import './style.css'
import { HomePage, AboutPage, ContactPage, ContactsList } from './components/pages'

// Define pages
const pages = {
  home: HomePage,
  about: AboutPage,
  contact: ContactPage,
  contacts: ContactsList,  // Added Contacts List
}

// Router function
function router() {
  const app = document.querySelector<HTMLDivElement>('#app')!
  const route = window.location.hash.slice(2) || 'home'
  const page = pages[route as keyof typeof pages] || pages.home
  
  app.innerHTML = page()
}

// Initialize router
window.addEventListener('hashchange', router)
window.addEventListener('DOMContentLoaded', router)