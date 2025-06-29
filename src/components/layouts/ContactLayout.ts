// src/components/layouts/ContactLayout.ts
export interface ContactLayoutProps {
  title: string;
  content: string;
  currentRoute?: string;
}

export const ContactLayout = ({ title, content, currentRoute = 'contact' }: ContactLayoutProps): string => {
  console.log('Rendering ContactLayout with currentRoute:', currentRoute);
  return `
    <div class="min-h-screen bg-gray-50">
      <!-- Header with Breadcrumb -->
      <header class="bg-white shadow-sm border-b border-gray-200">
        <div class="max-w-4xl mx-auto px-8 py-6">
          <nav class="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <a href="#/" class="hover:text-blue-600 transition-colors">Home</a>
            <span>/</span>
            <span class="text-gray-900 font-medium">Contact</span>
          </nav>
          
          <div class="flex items-center justify-between">
            <div>
              <h1 class="text-3xl font-bold text-gray-900 mb-2">${title}</h1>
              <p class="text-gray-600">Get in touch with us</p>
            </div>
            
            <!-- Action Buttons -->
            <div class="flex gap-3">
              <a href="#/" class="text-gray-600 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-gray-100">
                ← Back to Home
              </a>
              <a href="#/about" class="text-gray-600 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-gray-100">
                About Us
              </a>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Content Area -->
      <main class="max-w-4xl mx-auto px-8 py-12">
        <div class="grid lg:grid-cols-3 gap-12">
          <!-- Contact Form Area -->
          <div class="lg:col-span-2">
            <div class="bg-white rounded-xl shadow-lg p-8">
              ${content}
            </div>
          </div>

          <!-- Contact Info Sidebar -->
          <div class="space-y-6">
            <!-- Contact Details -->
            <div class="bg-white rounded-xl shadow-lg p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
              
              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="font-medium text-gray-900">Email</p>
                    <p class="text-sm text-gray-600">contact@example.com</p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="font-medium text-gray-900">Phone</p>
                    <p class="text-sm text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="font-medium text-gray-900">Address</p>
                    <p class="text-sm text-gray-600">123 Tech Street<br>San Francisco, CA 94107</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Office Hours -->
            <div class="bg-white rounded-xl shadow-lg p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Office Hours</h3>
              
              <div class="space-y-2 text-sm">
                <div class="flex justify-between">
                  <span class="text-gray-600">Monday - Friday</span>
                  <span class="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Saturday</span>
                  <span class="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Sunday</span>
                  <span class="font-medium">Closed</span>
                </div>
              </div>
            </div>

            <!-- Quick Links -->
            <div class="bg-white rounded-xl shadow-lg p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
              
              <div class="space-y-2">
                <a href="#/about" class="block text-blue-600 hover:text-blue-800 transition-colors text-sm">
                  About Our Company
                </a>
                <a href="#/" class="block text-blue-600 hover:text-blue-800 transition-colors text-sm">
                  Services
                </a>
                <a href="#/" class="block text-blue-600 hover:text-blue-800 transition-colors text-sm">
                  FAQ
                </a>
                <a href="#/" class="block text-blue-600 hover:text-blue-800 transition-colors text-sm">
                  Support Center
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <!-- Footer -->
      <footer class="bg-white border-t border-gray-200 mt-16">
        <div class="max-w-4xl mx-auto px-8 py-8">
          <div class="text-center">
            <p class="text-gray-500 text-sm">
              © 2025 My App. We'd love to hear from you!
            </p>
          </div>
        </div>
      </footer>
    </div>
  `;
};