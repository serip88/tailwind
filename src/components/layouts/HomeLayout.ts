// src/components/layouts/HomeLayout.ts
export interface HomeLayoutProps {
  title: string;
  content: string;
}

export const HomeLayout = ({ title, content }: HomeLayoutProps): string => {
  return `
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <!-- Hero Header -->
      <header class="relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-10"></div>
        <div class="relative max-w-6xl mx-auto px-8 py-16">
          <div class="text-center">
            <h1 class="text-5xl font-bold text-gray-900 mb-4">
              Welcome to My App
            </h1>
            <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Your modern web application built with Tailwind CSS v4 and TypeScript
            </p>
            
            <!-- Navigation -->
            <nav class="flex justify-center gap-8 mb-12">
              <a href="#/about" class="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                Learn More
              </a>
              <a href="#/contact" class="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl border border-blue-200">
                Get in Touch
              </a>
            </nav>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="max-w-6xl mx-auto px-8 py-12">
        <div class="bg-white rounded-2xl shadow-xl p-8">
          ${content}
        </div>
      </main>

      <!-- Features Section -->
      <section class="max-w-6xl mx-auto px-8 py-12">
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Fast & Modern</h3>
            <p class="text-gray-600">Built with the latest technologies for optimal performance.</p>
          </div>
          
          <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Reliable</h3>
            <p class="text-gray-600">Type-safe development with TypeScript integration.</p>
          </div>
          
          <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Responsive</h3>
            <p class="text-gray-600">Beautiful design that works on all devices.</p>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="bg-gray-900 text-white mt-16">
        <div class="max-w-6xl mx-auto px-8 py-12">
          <div class="text-center">
            <h3 class="text-lg font-semibold mb-4">My App</h3>
            <div class="flex justify-center gap-6 mb-6">
              <a href="#/" class="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#/about" class="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#/contact" class="text-gray-300 hover:text-white transition-colors">Contact</a>
              <a href="#/contacts" class="text-gray-300 hover:text-white transition-colors">Contacts</a>
              <a href="#/products" class="text-gray-300 hover:text-white transition-colors">Products</a>
            </div>
            <p class="text-gray-400 text-sm">
              © 2025 My App. Built with Tailwind CSS v4 + TypeScript.3
            </p>
          </div>
        </div>
      </footer>
    </div>
  `;
};