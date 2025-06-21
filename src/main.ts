// src/main.ts
import './style.css'

// Define pages
const pages = {
  home: () => `
    <div class="min-h-screen bg-gray-50 p-8">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold text-primary mb-8">
          Home Page
        </h1>
        <nav class="flex gap-4 mb-8">
          <a href="#/about" class="text-blue-600 hover:underline">About</a>
          <a href="#/contact" class="text-blue-600 hover:underline">Contact</a>
        </nav>
        <p class="text-gray-600">Welcome to Tailwind CSS v4 + TypeScript</p>
      </div>
    </div>
  `,
  
  about: () => `
    <div class="min-h-screen bg-gray-50 p-8">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold text-primary mb-8">
          About Page
        </h1>
        <nav class="flex gap-4 mb-8">
          <a href="#/" class="text-blue-600 hover:underline">Home</a>
          <a href="#/contact" class="text-blue-600 hover:underline">Contact</a>
        </nav>
        <p class="text-gray-600">This is the about page</p>
      </div>
    </div>
  `,
  
  contact: () => `
    <div class="min-h-screen bg-gray-50 p-8">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold text-primary mb-8">
          Contact Page
        </h1>
        <nav class="flex gap-4 mb-8">
          <a href="#/" class="text-blue-600 hover:underline">Home</a>
          <a href="#/about" class="text-blue-600 hover:underline">About</a>
        </nav>
        <p class="text-gray-600">Contact us at: contact@example.com</p>
      </div>
    </div>
  `
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