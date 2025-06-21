// src/components/layouts/ContactsLayout.ts
export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  role?: string;
  avatar?: string;
}

export interface ContactsLayoutProps {
  title: string;
  contacts: Contact[];
  currentRoute?: string;
}

export const ContactsLayout = ({ title, contacts, currentRoute = 'contacts' }: ContactsLayoutProps): string => {
  return `
    <div class="min-h-screen bg-gray-50">
      <!-- Header -->
      <header class="bg-white shadow-sm border-b border-gray-200">
        <div class="max-w-6xl mx-auto px-8 py-4">
          <div class="flex items-center justify-between">
            <h1 class="text-2xl font-bold text-primary">
              <a href="#/" class="hover:text-blue-600 transition-colors">My App</a>
            </h1>
            <nav class="flex gap-6">
              <a href="#/" class="${currentRoute === 'home' ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'} transition-colors">
                Home
              </a>
              <a href="#/about" class="${currentRoute === 'about' ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'} transition-colors">
                About
              </a>
              <a href="#/contacts" class="${currentRoute === 'contacts' ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'} transition-colors">
                Contacts
              </a>
              <a href="#/contact" class="${currentRoute === 'contact' ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'} transition-colors">
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="max-w-6xl mx-auto px-8 py-12">
        <!-- Page Header -->
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-gray-900 mb-2">${title}</h1>
          <p class="text-gray-600">Manage and view all your contacts in one place</p>
        </div>

        <!-- Search and Filter Bar -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
          <div class="flex flex-wrap gap-4 items-center">
            <div class="flex-1 min-w-[300px]">
              <input
                type="search"
                placeholder="Search contacts..."
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              + Add Contact
            </button>
          </div>
        </div>

        <!-- Contacts Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${contacts.map(contact => `
            <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div class="flex items-start gap-4">
                <!-- Avatar -->
                <div class="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                  ${contact.avatar || contact.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
                </div>
                
                <!-- Contact Info -->
                <div class="flex-1 min-w-0">
                  <h3 class="text-lg font-semibold text-gray-900 truncate">${contact.name}</h3>
                  ${contact.role ? `<p class="text-sm text-gray-500 mb-2">${contact.role}</p>` : ''}
                  
                  <div class="space-y-1 mt-3">
                    <a href="mailto:${contact.email}" class="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      <span class="truncate">${contact.email}</span>
                    </a>
                    
                    <a href="tel:${contact.phone}" class="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      <span>${contact.phone}</span>
                    </a>
                  </div>
                </div>

                <!-- Actions Dropdown -->
                <div class="relative">
                  <button class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Empty State -->
        ${contacts.length === 0 ? `
          <div class="text-center py-12">
            <svg class="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            <h3 class="text-lg font-medium text-gray-900 mb-2">No contacts yet</h3>
            <p class="text-gray-500 mb-4">Get started by adding your first contact.</p>
            <button class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              + Add Your First Contact
            </button>
          </div>
        ` : ''}
      </main>

      <!-- Footer -->
      <footer class="bg-white border-t border-gray-200 mt-auto">
        <div class="max-w-6xl mx-auto px-8 py-6">
          <p class="text-center text-gray-500 text-sm">
            © 2025 My App. Built with Tailwind CSS v4 + TypeScript.2
          </p>
        </div>
      </footer>
    </div>
  `;
};